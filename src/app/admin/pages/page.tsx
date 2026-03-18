"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase/client";
import AdminMarkdownEditor from "@/components/AdminMarkdownEditor";

type PageRow = {
  id: string;
  page_key: string;
  title: string;
  content_markdown: string;
  created_at: string;
  updated_at: string;
};

type ViewState =
  | { status: "loading" }
  | { status: "signed_out" }
  | { status: "no_access"; email?: string | null }
  | { status: "admin"; email?: string | null };

function isAbortError(e: unknown) {
  const msg = String((e as any)?.message ?? e);
  return (e as any)?.name === "AbortError" || msg.includes("Signal is aborted");
}

const ALLOWED_KEYS = [
  "o-nas",
  "oferta-dla-firm/organizacja-jednostkowych-eventow",
  "oferta-dla-firm/core-and-glow",
  "oferta-dla-firm/stars-and-stretches",
  "oferta-dla-firm/organizacja-wyjazdow-integracyjnych",
  "dlaczego-warto/korzysci-dla-kregoslupa",
  "dlaczego-warto/poprawa-postury",
] as const;

export default function AdminPagesPage() {
  const [view, setView] = useState<ViewState>({ status: "loading" });
  const [pages, setPages] = useState<PageRow[]>([]);
  const [loading, setLoading] = useState(false);

  const [notice, setNotice] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // editor
  const [activeKey, setActiveKey] = useState<(typeof ALLOWED_KEYS)[number] | null>(
    null
  );
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const activeRow = useMemo(
    () => pages.find((p) => p.page_key === activeKey) ?? null,
    [pages, activeKey]
  );

  async function ensureAdmin() {
    setError(null);
    setNotice(null);

    try {
      const { data } = await supabase.auth.getSession();
      const session = data.session;

      if (!session?.user) {
        setView({ status: "signed_out" });
        return null;
      }

      const { data: adminRow } = await supabase
        .from("admin_users")
        .select("user_id")
        .eq("user_id", session.user.id)
        .maybeSingle();

      if (!adminRow?.user_id) {
        setView({ status: "no_access", email: session.user.email ?? null });
        return null;
      }

      setView({ status: "admin", email: session.user.email ?? null });
      return session.user;
    } catch (e) {
      if (isAbortError(e)) {
        setView({ status: "signed_out" });
        return null;
      }
      console.error(e);
      setView({ status: "signed_out" });
      return null;
    }
  }

  async function fetchPages() {
    setLoading(true);
    setError(null);
    setNotice(null);

    const { data, error } = await supabase
      .from("pages")
      .select("id,page_key,title,content_markdown,created_at,updated_at")
      .in("page_key", [...ALLOWED_KEYS])
      .order("page_key", { ascending: true });

    setLoading(false);

    if (error) {
      setError("Nie udało się pobrać stron (RLS / uprawnienia).");
      return;
    }

    const rows = (data as PageRow[]) ?? [];
    setPages(rows);

    // ustaw domyślnie pierwszą stronę (albo zostaw)
    if (!activeKey) {
      const first = rows.find((r) => ALLOWED_KEYS.includes(r.page_key as any));
      const key = (first?.page_key ?? ALLOWED_KEYS[0]) as any;
      setActiveKey(key);
      const existing = rows.find((r) => r.page_key === key);
      setTitle(existing?.title ?? prettyTitle(key));
      setContent(existing?.content_markdown ?? "");
    }
  }

  function prettyTitle(k: (typeof ALLOWED_KEYS)[number]) {
    if (k === "o-nas") return "O nas";
    if (k === "oferta-dla-firm/organizacja-jednostkowych-eventow") {
      return "Organizacja jednostkowych eventów";
    }
    if (k === "oferta-dla-firm/core-and-glow") return "Core&Glow";
    if (k === "oferta-dla-firm/stars-and-stretches") return "Stars&Stretches";
    if (k === "oferta-dla-firm/organizacja-wyjazdow-integracyjnych") {
      return "Organizacja wyjazdów integracyjnych";
    }
    if (k === "dlaczego-warto/korzysci-dla-kregoslupa") {
      return "Korzyści dla kręgosłupa";
    }
    return "Poprawa postury";
  }

  function openKey(k: (typeof ALLOWED_KEYS)[number]) {
    setNotice(null);
    setError(null);
    setActiveKey(k);

    const row = pages.find((p) => p.page_key === k);
    setTitle(row?.title ?? prettyTitle(k));
    setContent(row?.content_markdown ?? "");
  }

  async function save() {
    if (!activeKey) return;

    setError(null);
    setNotice(null);

    const cleanTitle = title.trim();
    if (!cleanTitle) {
      setError("Tytuł nie może być pusty.");
      return;
    }

    // Upsert po page_key (jeśli rekord nie istnieje – zostanie utworzony)
    const { error } = await supabase.from("pages").upsert(
      [
        {
          page_key: activeKey,
          title: cleanTitle,
          content_markdown: content ?? "",
        },
      ],
      { onConflict: "page_key" }
    );

    if (error) {
      setError("Nie udało się zapisać strony.");
      return;
    }

    setNotice("Zapisano ✅");
    await fetchPages();
  }

  async function logout() {
    setError(null);
    setNotice(null);
    await supabase.auth.signOut();
    setView({ status: "signed_out" });
  }

  useEffect(() => {
    (async () => {
      const u = await ensureAdmin();
      if (u) await fetchPages();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (view.status === "loading") {
    return (
      <div className="min-h-[calc(100vh-1px)] px-6 py-10 md:px-12 text-[#d7c5b1]">
        Ładowanie…
      </div>
    );
  }

  if (view.status === "signed_out") {
    return (
      <div className="min-h-[calc(100vh-1px)] px-6 py-10 md:px-12">
        <div className="max-w-xl">
          <h1 className="font-serif text-4xl text-[#f0e4d8]">Strony</h1>
          <p className="mt-3 text-[#d7c5b1]">
            Musisz być zalogowany. Wróć na stronę logowania admina.
          </p>
          <Link
            href="/admin"
            className="mt-6 inline-flex rounded-md border border-neutral-800 bg-neutral-900/30 px-4 py-3 text-sm text-[#e2d3c5] hover:bg-neutral-900/50"
          >
            Przejdź do /admin
          </Link>
        </div>
      </div>
    );
  }

  if (view.status === "no_access") {
    return (
      <div className="min-h-[calc(100vh-1px)] px-6 py-10 md:px-12">
        <div className="max-w-xl space-y-4">
          <h1 className="font-serif text-4xl text-[#f0e4d8]">Strony</h1>
          <div className="rounded-md border border-neutral-800 bg-neutral-950/40 px-4 py-4">
            <div className="font-serif text-xl text-[#f0e4d8]">Brak dostępu</div>
            <p className="mt-2 text-sm text-[#d7c5b1]">
              Zalogowano jako{" "}
              <span className="text-[#f0e4d8]">{view.email ?? "użytkownik"}</span>, ale
              ten użytkownik nie jest adminem.
            </p>
          </div>
          <button
            onClick={logout}
            className="rounded-md border border-neutral-800 bg-neutral-900/30 px-4 py-3 text-sm text-[#e2d3c5] hover:bg-neutral-900/50"
          >
            Wyloguj
          </button>
        </div>
      </div>
    );
  }

  // admin view
  return (
    <div className="min-h-[calc(100vh-1px)] px-6 py-10 md:px-12">
      <div className="max-w-6xl">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="font-serif text-4xl text-[#f0e4d8]">Strony</h1>
            <p className="mt-2 text-[#d7c5b1]">
              Edycja markdown dla:{" "}
              <span className="text-[#f0e4d8]">o-nas</span>,{" "}
              <span className="text-[#f0e4d8]">oferta-dla-firm</span>,{" "}
              <span className="text-[#f0e4d8]">dlaczego-warto</span>.
            </p>
          </div>
          <div className="flex gap-2">
            <Link
              href="/admin"
              className="rounded-md border border-neutral-800 bg-neutral-900/30 px-4 py-3 text-sm text-[#e2d3c5] hover:bg-neutral-900/50"
            >
              Wróć
            </Link>
            <button
              onClick={logout}
              className="rounded-md border border-neutral-800 bg-neutral-900/30 px-4 py-3 text-sm text-[#e2d3c5] hover:bg-neutral-900/50"
            >
              Wyloguj
            </button>
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[320px_1fr]">
          {/* lista kluczy */}
          <div className="rounded-md border border-neutral-800 bg-neutral-950/40">
            <div className="border-b border-neutral-800 px-4 py-3">
              <div className="font-serif text-lg text-[#f0e4d8]">Sekcje</div>
            </div>

            <div className="p-2">
              {ALLOWED_KEYS.map((k) => {
                const isActive = k === activeKey;
                return (
                  <button
                    key={k}
                    onClick={() => openKey(k)}
                    className={[
                      "w-full rounded-md px-4 py-3 text-left text-sm border mb-2",
                      isActive
                        ? "bg-[#d7c5b1]/90 text-neutral-950 border-transparent"
                        : "bg-neutral-900/20 text-[#e2d3c5] border-neutral-800 hover:bg-neutral-900/35",
                    ].join(" ")}
                  >
                    <div className="font-serif tracking-wide">
                      {prettyTitle(k as any)}
                    </div>
                    <div className={isActive ? "text-neutral-800" : "text-neutral-500"}>
                      {k}
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="border-t border-neutral-800 px-4 py-3 text-xs text-neutral-500">
              {loading ? "Ładowanie…" : `${pages.length} / ${ALLOWED_KEYS.length} rekordów`}
            </div>
          </div>

          {/* edytor */}
          <div className="rounded-md border border-neutral-800 bg-neutral-950/40">
            <div className="border-b border-neutral-800 px-4 py-3">
              <div className="font-serif text-lg text-[#f0e4d8]">
                {activeKey ? prettyTitle(activeKey) : "Wybierz stronę"}
              </div>
              <div className="mt-1 text-xs text-[#d7c5b1]">
                Klucz: <span className="text-[#f0e4d8]">{activeKey ?? "-"}</span>
                {activeRow?.updated_at ? (
                  <>
                    {" "}
                    • ostatnia aktualizacja:{" "}
                    <span className="text-[#f0e4d8]">
                      {new Date(activeRow.updated_at).toLocaleString()}
                    </span>
                  </>
                ) : null}
              </div>
            </div>

            <div className="p-4 space-y-4">
              {error && (
                <div className="rounded-md border border-red-900/50 bg-red-950/30 px-4 py-3 text-sm text-red-200">
                  {error}
                </div>
              )}
              {notice && (
                <div className="rounded-md border border-emerald-900/50 bg-emerald-950/30 px-4 py-3 text-sm text-emerald-200">
                  {notice}
                </div>
              )}

              <div>
                <label className="block text-sm text-[#d7c5b1]">Tytuł</label>
                <input
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-2 w-full rounded-md border border-neutral-800 bg-neutral-950/40 px-4 py-3 text-neutral-100 outline-none focus:border-[#a56b2b]"
                />
              </div>

              <div className="rich-editor-wrapper">
                <label className="block text-sm text-[#d7c5b1] mb-2">Treść (Markdown)</label>
                <AdminMarkdownEditor
                  value={content}
                  onChange={(val) => setContent(val)}
                />
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  onClick={save}
                  disabled={!activeKey}
                  className={[
                    "rounded-md px-5 py-3 font-serif text-sm",
                    activeKey
                      ? "bg-[#a56b2b] text-neutral-950 hover:bg-[#b3732f]"
                      : "bg-neutral-800 text-neutral-400 cursor-not-allowed",
                  ].join(" ")}
                >
                  Zapisz
                </button>

                <button
                  onClick={() => activeKey && openKey(activeKey)}
                  disabled={!activeKey}
                  className={[
                    "rounded-md border px-5 py-3 font-serif text-sm",
                    activeKey
                      ? "border-neutral-800 bg-neutral-900/30 text-[#e2d3c5] hover:bg-neutral-900/50"
                      : "border-neutral-900 bg-neutral-900/10 text-neutral-500 cursor-not-allowed",
                  ].join(" ")}
                >
                  Reset
                </button>
              </div>

              <div className="pt-1 text-xs text-neutral-500">
                To jest dokładnie to, co renderuje się na publicznych stronach.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
