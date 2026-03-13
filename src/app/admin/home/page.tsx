"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase/client";

type ViewState =
  | { status: "loading" }
  | { status: "signed_out" }
  | { status: "no_access"; email?: string | null }
  | { status: "admin"; email?: string | null };

type CarouselItem = { url: string; path?: string | null };

type HomeSettingsRow = {
  id: number;
  hero_title: string;
  hero_subtitle: string;
  cta_text: string;
  cta_href: string;
  carousel_images: any[]; // jsonb
  updated_at: string;
};

function isAbortError(e: unknown) {
  const msg = String((e as any)?.message ?? e);
  return (e as any)?.name === "AbortError" || msg.includes("Signal is aborted");
}

function normalizeCarousel(raw: any[]): CarouselItem[] {
  const arr = Array.isArray(raw) ? raw : [];
  return arr
    .map((item) => {
      if (!item) return null;
      if (typeof item === "string") return { url: item, path: null };
      if (typeof item === "object" && typeof item.url === "string") {
        return { url: item.url, path: typeof item.path === "string" ? item.path : null };
      }
      return null;
    })
    .filter(Boolean)
    .slice(0, 3) as CarouselItem[];
}

function safeFilename(name: string) {
  return name
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9.\-_]/g, "");
}

export default function AdminHomePage() {
  const [view, setView] = useState<ViewState>({ status: "loading" });

  const [heroTitle, setHeroTitle] = useState("");
  const [heroSubtitle, setHeroSubtitle] = useState("");
  const [ctaText, setCtaText] = useState("");
  const [ctaHref, setCtaHref] = useState("");

  const [carousel, setCarousel] = useState<CarouselItem[]>([]);
  const carouselCount = carousel.length;
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);

  const [loading, setLoading] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const canUpload = useMemo(() => carouselCount < 3, [carouselCount]);

  async function ensureAdmin() {
    setError(null);

    try {
      const { data } = await supabase.auth.getSession();
      const session = data.session;

      if (!session?.user) {
        setView({ status: "signed_out" });
        return null;
      }

      // check admin by user_id (policy self-read own row)
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

  async function fetchHome() {
    setLoading(true);
    setError(null);

    const { data, error } = await supabase
      .from("home_settings")
      .select("id,hero_title,hero_subtitle,cta_text,cta_href,carousel_images,updated_at")
      .eq("id", 1)
      .maybeSingle();

    setLoading(false);

    if (error) {
      setError("Nie udało się pobrać home_settings (RLS / uprawnienia).");
      return;
    }

    const row = data as HomeSettingsRow | null;

    setHeroTitle(row?.hero_title ?? "Pilates & wellbeing dla firm");
    setHeroSubtitle(
      row?.hero_subtitle ??
        "Wyjątkowe zajęcia integracyjne, eventy i wyjazdy dla zespołów"
    );
    setCtaText(row?.cta_text ?? "Zaplanuj wydarzenie");
    setCtaHref(row?.cta_href ?? "/kontakt");

    setCarousel(normalizeCarousel((row?.carousel_images ?? []) as any[]));
    setUpdatedAt(row?.updated_at ?? null);
  }

  async function saveCopy() {
    setError(null);
    setNotice(null);

    const ht = heroTitle.trim();
    const hs = heroSubtitle.trim();
    const ct = ctaText.trim();
    const ch = ctaHref.trim();

    if (!ht || !hs || !ct || !ch) {
      setError("Uzupełnij wszystkie pola.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.from("home_settings").upsert(
      [
        {
          id: 1,
          hero_title: ht,
          hero_subtitle: hs,
          cta_text: ct,
          cta_href: ch,
        },
      ],
      { onConflict: "id" }
    );

    setLoading(false);

    if (error) {
      setError("Nie udało się zapisać zmian.");
      return;
    }

    setNotice("Zapisano ✅");
    await fetchHome();
  }

  async function updateCarousel(next: CarouselItem[]) {
    setError(null);
    setNotice(null);

    const limited = next.slice(0, 3);

    setLoading(true);
    const { error } = await supabase
      .from("home_settings")
      .update({ carousel_images: limited })
      .eq("id", 1);
    setLoading(false);

    if (error) {
      setError("Nie udało się zapisać carousel.");
      return;
    }

    setCarousel(limited);
    setNotice("Zapisano carousel ✅");
    await fetchHome();
  }

  async function onUpload(file: File | null) {
    if (!file) return;
    setError(null);
    setNotice(null);

    if (carousel.length >= 3) {
      setError("Carousel ma już 3 zdjęcia. Usuń jedno, aby dodać kolejne.");
      return;
    }

    // prosta walidacja typu
    if (!file.type.startsWith("image/")) {
      setError("Wybierz plik graficzny (image/*).");
      return;
    }

    const ext = file.name.split(".").pop() || "jpg";
    const base = safeFilename(file.name.replace(/\.[^/.]+$/, "")) || "image";
    const path = `carousel/${Date.now()}-${Math.random().toString(16).slice(2)}-${base}.${ext}`;

    setLoading(true);
    const { error: upErr } = await supabase
      .storage
      .from("public-images")
      .upload(path, file, { upsert: false, contentType: file.type });

    if (upErr) {
      setLoading(false);
      setError("Upload nieudany (RLS / storage).");
      return;
    }

    const { data: pub } = supabase.storage.from("public-images").getPublicUrl(path);
    const url = pub.publicUrl;

    setLoading(false);

    const next = [...carousel, { url, path }].slice(0, 3);
    await updateCarousel(next);
  }

  async function removeImage(i: number) {
    const item = carousel[i];
    if (!item) return;

    const ok = window.confirm("Usunąć to zdjęcie z carousel?");
    if (!ok) return;

    setError(null);
    setNotice(null);

    // usuń z storage jeśli mamy path
    if (item.path) {
      const { error: delErr } = await supabase.storage
        .from("public-images")
        .remove([item.path]);

      // jeśli policy/plik nie istnieje, nie blokujemy usunięcia z db
      if (delErr) console.warn(delErr);
    }

    const next = carousel.filter((_, idx) => idx !== i);
    await updateCarousel(next);
  }

  async function move(i: number, dir: -1 | 1) {
    const j = i + dir;
    if (j < 0 || j >= carousel.length) return;
    const next = [...carousel];
    const tmp = next[i];
    next[i] = next[j];
    next[j] = tmp;
    await updateCarousel(next);
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
      if (u) await fetchHome();
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
          <h1 className="font-serif text-4xl text-[#f0e4d8]">Home settings</h1>
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
          <h1 className="font-serif text-4xl text-[#f0e4d8]">Home settings</h1>
          <div className="rounded-md border border-neutral-800 bg-neutral-950/40 px-4 py-4">
            <div className="font-serif text-xl text-[#f0e4d8]">Brak dostępu</div>
            <p className="mt-2 text-sm text-[#d7c5b1]">
              Ten użytkownik nie jest adminem.
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

  return (
    <div className="min-h-[calc(100vh-1px)] px-6 py-10 md:px-12">
      <div className="max-w-3xl">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h1 className="font-serif text-4xl text-[#f0e4d8]">Home settings</h1>
            <p className="mt-2 text-[#d7c5b1]">
              Edytujesz rekord <span className="text-[#f0e4d8]">home_settings (id=1)</span>.
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

        <div className="mt-8 rounded-md border border-neutral-800 bg-neutral-950/40 p-4">
          {error && (
            <div className="mb-4 rounded-md border border-red-900/50 bg-red-950/30 px-4 py-3 text-sm text-red-200">
              {error}
            </div>
          )}
          {notice && (
            <div className="mb-4 rounded-md border border-emerald-900/50 bg-emerald-950/30 px-4 py-3 text-sm text-emerald-200">
              {notice}
            </div>
          )}

          <div className="grid gap-4">
            <div>
              <label className="block text-sm text-[#d7c5b1]">Hero title</label>
              <input
                value={heroTitle}
                onChange={(e) => setHeroTitle(e.target.value)}
                className="mt-2 w-full rounded-md border border-neutral-800 bg-neutral-950/40 px-4 py-3 text-neutral-100 outline-none focus:border-[#a56b2b]"
              />
            </div>

            <div>
              <label className="block text-sm text-[#d7c5b1]">Hero subtitle</label>
              <textarea
                value={heroSubtitle}
                onChange={(e) => setHeroSubtitle(e.target.value)}
                rows={3}
                className="mt-2 w-full rounded-md border border-neutral-800 bg-neutral-950/40 px-4 py-3 text-neutral-100 outline-none focus:border-[#a56b2b]"
              />
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <div>
                <label className="block text-sm text-[#d7c5b1]">CTA text</label>
                <input
                  value={ctaText}
                  onChange={(e) => setCtaText(e.target.value)}
                  className="mt-2 w-full rounded-md border border-neutral-800 bg-neutral-950/40 px-4 py-3 text-neutral-100 outline-none focus:border-[#a56b2b]"
                />
              </div>

              <div>
                <label className="block text-sm text-[#d7c5b1]">CTA href</label>
                <input
                  value={ctaHref}
                  onChange={(e) => setCtaHref(e.target.value)}
                  placeholder="/kontakt"
                  className="mt-2 w-full rounded-md border border-neutral-800 bg-neutral-950/40 px-4 py-3 text-neutral-100 outline-none focus:border-[#a56b2b]"
                />
              </div>
            </div>

            <div className="flex gap-2 pt-2">
              <button
                onClick={saveCopy}
                disabled={loading}
                className={[
                  "rounded-md px-6 py-3 font-serif text-sm",
                  loading
                    ? "bg-neutral-800 text-neutral-400 cursor-not-allowed"
                    : "bg-[#a56b2b] text-neutral-950 hover:bg-[#b3732f]",
                ].join(" ")}
              >
                {loading ? "Zapisywanie…" : "Zapisz teksty"}
              </button>

              <button
                onClick={fetchHome}
                disabled={loading}
                className="rounded-md border border-neutral-800 bg-neutral-900/30 px-6 py-3 font-serif text-sm text-[#e2d3c5] hover:bg-neutral-900/50"
              >
                Odśwież
              </button>
            </div>

            {/* CAROUSEL */}
            <div className="mt-6 rounded-md border border-neutral-800 bg-neutral-900/15 p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <div className="font-serif text-lg text-[#f0e4d8]">Carousel (max 3)</div>
                  <div className="mt-1 text-xs text-neutral-500">
                    Ustawia tło hero na stronie głównej (rotacja).
                    {updatedAt ? (
                      <> • ostatnia aktualizacja: {new Date(updatedAt).toLocaleString()}</>
                    ) : null}
                  </div>
                </div>

                <label
                  className={[
                    "inline-flex items-center justify-center rounded-md px-4 py-3 text-sm font-serif",
                    canUpload
                      ? "bg-[#a56b2b] text-neutral-950 hover:bg-[#b3732f] cursor-pointer"
                      : "bg-neutral-800 text-neutral-400 cursor-not-allowed",
                  ].join(" ")}
                >
                  + Dodaj zdjęcie ({carouselCount}/3)
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    disabled={!canUpload || loading}
                    onChange={(e) => onUpload(e.target.files?.[0] ?? null)}
                  />
                </label>
              </div>

              {carousel.length === 0 ? (
                <div className="mt-4 text-sm text-[#d7c5b1]">
                  Brak zdjęć. Dodaj 1–3 obrazy do tła hero.
                </div>
              ) : (
                <div className="mt-4 grid gap-3">
                  {carousel.map((it, i) => (
                    <div
                      key={`${it.url}-${i}`}
                      className="flex items-center gap-3 rounded-md border border-neutral-800 bg-neutral-950/30 p-3"
                    >
                      <div className="h-14 w-20 overflow-hidden rounded border border-neutral-800 bg-neutral-950">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={it.url} alt="" className="h-full w-full object-cover" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="truncate text-sm text-[#e2d3c5]">{it.url}</div>
                        <div className="mt-1 text-xs text-neutral-500">
                          {it.path ? it.path : "brak path (stary wpis)"}
                        </div>
                      </div>

                      <div className="flex gap-2">
                        <button
                          onClick={() => move(i, -1)}
                          disabled={loading || i === 0}
                          className="rounded-md border border-neutral-800 bg-neutral-900/30 px-3 py-2 text-xs text-[#e2d3c5] hover:bg-neutral-900/50 disabled:cursor-not-allowed disabled:text-neutral-500"
                        >
                          ↑
                        </button>
                        <button
                          onClick={() => move(i, 1)}
                          disabled={loading || i === carousel.length - 1}
                          className="rounded-md border border-neutral-800 bg-neutral-900/30 px-3 py-2 text-xs text-[#e2d3c5] hover:bg-neutral-900/50 disabled:cursor-not-allowed disabled:text-neutral-500"
                        >
                          ↓
                        </button>
                        <button
                          onClick={() => removeImage(i)}
                          disabled={loading}
                          className="rounded-md border border-red-900/50 bg-red-950/30 px-3 py-2 text-xs text-red-200 hover:bg-red-950/45 disabled:cursor-not-allowed"
                        >
                          Usuń
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            {/* /CAROUSEL */}
          </div>
        </div>

        <div className="mt-4 text-xs text-neutral-500">
          Carousel jest przechowywany w <span className="text-neutral-300">home_settings.carousel_images</span>{" "}
          oraz pliki w Storage bucket <span className="text-neutral-300">public-images</span>.
        </div>
      </div>
    </div>
  );
}
