"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase/client";

type AdminState =
  | { status: "loading" }
  | { status: "signed_out" }
  | { status: "checking_access"; email?: string | null }
  | { status: "no_access"; email?: string | null }
  | { status: "admin"; email?: string | null };

function isAbortError(e: unknown) {
  const msg = String((e as any)?.message ?? e);
  return (e as any)?.name === "AbortError" || msg.includes("Signal is aborted");
}

export default function AdminPage() {
  const [email, setEmail] = useState("");
  const [info, setInfo] = useState<string | null>(null);
  const [err, setErr] = useState<string | null>(null);
  const [state, setState] = useState<AdminState>({ status: "loading" });

  const initOnceRef = useRef(false);
  const subRef = useRef<ReturnType<typeof supabase.auth.onAuthStateChange> | null>(
    null
  );

  const canSend = useMemo(() => email.trim().includes("@"), [email]);

  async function checkAccess(userId: string, userEmail?: string | null) {
    setState({ status: "checking_access", email: userEmail ?? null });

    // Prefer user_id
    const byId = await supabase
      .from("admin_users")
      .select("user_id")
      .eq("user_id", userId)
      .maybeSingle();

    if (byId.data?.user_id) {
      setState({ status: "admin", email: userEmail ?? null });
      return;
    }

    // Fallback email
    if (userEmail) {
      const byEmail = await supabase
        .from("admin_users")
        .select("email")
        .eq("email", userEmail)
        .maybeSingle();

      if (byEmail.data?.email) {
        setState({ status: "admin", email: userEmail });
        return;
      }
    }

    setState({ status: "no_access", email: userEmail ?? null });
  }

  useEffect(() => {
    if (initOnceRef.current) return; // ważne w dev (Strict Mode)
    initOnceRef.current = true;

    let mounted = true;

    async function init() {
      setErr(null);
      // Nie czyścimy info tutaj, żeby nie znikał komunikat po wysłaniu linku

      try {
        const { data } = await supabase.auth.getSession();
        const session = data.session;

        if (!mounted) return;

        if (!session?.user) {
          setState({ status: "signed_out" });
        } else {
          await checkAccess(session.user.id, session.user.email ?? null);
        }
      } catch (e) {
        // w dev Supabase potrafi rzucić AbortError przez podwójne efekty
        if (isAbortError(e)) {
          if (mounted) setState({ status: "signed_out" });
        } else {
          console.error(e);
          if (mounted) {
            setErr("Wystąpił błąd sesji. Odśwież stronę i spróbuj ponownie.");
            setState({ status: "signed_out" });
          }
        }
      }

      // Subskrypcja auth (tylko raz)
      if (!subRef.current) {
        subRef.current = supabase.auth.onAuthStateChange(
          async (_event, newSession) => {
            if (!mounted) return;

            if (!newSession?.user) {
              setState({ status: "signed_out" });
              return;
            }

            try {
              await checkAccess(newSession.user.id, newSession.user.email ?? null);
            } catch (e) {
              if (!isAbortError(e)) console.error(e);
            }
          }
        );
      }
    }

    init();

    return () => {
      mounted = false;
      // nie unsubskrybujemy tutaj w dev strict-mode bounce,
      // bo to potrafi generować kolejne race condition.
      // (sub zostanie utrzymany przez lifecycle w praktyce i tak w dev)
    };
  }, []);

  async function sendMagicLink(e: React.FormEvent) {
    e.preventDefault();
    setErr(null);
    // Ustawiamy info od razu po sukcesie i nie czyścimy go gdzie indziej
    setInfo(null);

    const clean = email.trim();
    if (!clean.includes("@")) return;

    try {
      const { error } = await supabase.auth.signInWithOtp({
        email: clean,
        options: {
          emailRedirectTo:
            typeof window !== "undefined"
              ? `${window.location.origin}/admin`
              : undefined,
        },
      });

      if (error) {
        setErr("Nie udało się wysłać linku. Spróbuj ponownie za chwilę.");
        return;
      }

      setInfo("Wysłaliśmy link do logowania. Sprawdź e-mail i kliknij w magic link.");
    } catch (e) {
      if (isAbortError(e)) {
        // ignorujemy dev race condition
        setInfo("Wysłaliśmy link do logowania. Sprawdź e-mail i kliknij w magic link.");
        return;
      }
      console.error(e);
      setErr("Nie udało się wysłać linku. Spróbuj ponownie za chwilę.");
    }
  }

  async function logout() {
    setErr(null);
    setInfo(null);
    try {
      await supabase.auth.signOut();
    } catch (e) {
      if (!isAbortError(e)) console.error(e);
    }
    setState({ status: "signed_out" });
  }

  return (
    <div className="min-h-[calc(100vh-1px)] px-6 py-10 md:px-12">
      <div className="max-w-xl">
        <h1 className="font-serif text-4xl text-[#f0e4d8]">Admin</h1>
        <p className="mt-3 text-[#d7c5b1]">
          Logowanie przez magic link (OTP). Dostęp mają tylko użytkownicy z tabeli{" "}
          <span className="text-[#f0e4d8]">admin_users</span>.
        </p>

        {state.status === "loading" && (
          <div className="mt-8 text-[#d7c5b1]">Sprawdzanie sesji…</div>
        )}

        {state.status === "signed_out" && (
          <form onSubmit={sendMagicLink} className="mt-8 space-y-4">
            <div>
              <label className="block text-sm text-[#d7c5b1]">E-mail</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@email.com"
                type="email"
                className="mt-2 w-full rounded-md border border-neutral-800 bg-neutral-950/40 px-4 py-3 text-neutral-100 placeholder:text-neutral-600 outline-none focus:border-[#a56b2b]"
              />
            </div>

            {err && (
              <div className="rounded-md border border-red-900/50 bg-red-950/30 px-4 py-3 text-sm text-red-200">
                {err}
              </div>
            )}
            {info && (
              <div className="rounded-md border border-emerald-900/50 bg-emerald-950/30 px-4 py-3 text-sm text-emerald-200">
                {info}
              </div>
            )}

            <button
              type="submit"
              disabled={!canSend}
              className={[
                "inline-flex items-center justify-center rounded-md px-6 py-3 font-serif text-base",
                canSend
                  ? "bg-[#a56b2b] text-neutral-950 hover:bg-[#b3732f]"
                  : "bg-neutral-800 text-neutral-400 cursor-not-allowed",
              ].join(" ")}
            >
              Wyślij link do logowania
            </button>
          </form>
        )}

        {state.status === "checking_access" && (
          <div className="mt-8 text-[#d7c5b1]">
            Zalogowano jako{" "}
            <span className="text-[#f0e4d8]">{state.email ?? "użytkownik"}</span>.{" "}
            Sprawdzanie dostępu…
          </div>
        )}

        {state.status === "no_access" && (
          <div className="mt-8 space-y-4">
            <div className="rounded-md border border-neutral-800 bg-neutral-950/40 px-4 py-4">
              <div className="font-serif text-xl text-[#f0e4d8]">Brak dostępu</div>
              <p className="mt-2 text-sm text-[#d7c5b1]">
                Zalogowano jako{" "}
                <span className="text-[#f0e4d8]">{state.email ?? "użytkownik"}</span>,
                ale ten użytkownik nie znajduje się w tabeli{" "}
                <span className="text-[#f0e4d8]">admin_users</span>.
              </p>
            </div>
            <button
              onClick={logout}
              className="rounded-md border border-neutral-800 bg-neutral-900/30 px-4 py-3 text-sm text-[#e2d3c5] hover:bg-neutral-900/50"
            >
              Wyloguj
            </button>
          </div>
        )}

        {state.status === "admin" && (
          <div className="mt-8 space-y-5">
            <div className="rounded-md border border-neutral-800 bg-neutral-950/40 px-4 py-4">
              <div className="font-serif text-xl text-[#f0e4d8]">Masz dostęp ✅</div>
              <p className="mt-2 text-sm text-[#d7c5b1]">
                Zalogowano jako{" "}
                <span className="text-[#f0e4d8]">{state.email ?? "admin"}</span>.
              </p>
            </div>

            <div className="grid gap-3">
              <Link
                href="/admin/posts"
                className="rounded-md border border-neutral-800 bg-neutral-900/30 px-4 py-3 text-sm text-[#e2d3c5] hover:bg-neutral-900/50"
              >
                Posty
              </Link>
              <Link
                href="/admin/pages"
                className="rounded-md border border-neutral-800 bg-neutral-900/30 px-4 py-3 text-sm text-[#e2d3c5] hover:bg-neutral-900/50"
              >
                Strony
              </Link>
              <Link
                href="/admin/home"
                className="rounded-md border border-neutral-800 bg-neutral-900/30 px-4 py-3 text-sm text-[#e2d3c5] hover:bg-neutral-900/50"
              >
                Home settings
              </Link>
            </div>

            <button
              onClick={logout}
              className="rounded-md border border-neutral-800 bg-neutral-900/30 px-4 py-3 text-sm text-[#e2d3c5] hover:bg-neutral-900/50"
            >
              Wyloguj
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
