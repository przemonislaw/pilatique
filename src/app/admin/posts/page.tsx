"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase/client";

type PostRow = {
  id: string;
  title: string;
  slug: string;
  excerpt: string | null;
  content_markdown: string;
  cover_image_url: string | null;
  tags: string[];
  published: boolean;
  published_at: string | null;
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

function toLocalInputValue(iso: string) {
  const d = new Date(iso);
  d.setMinutes(d.getMinutes() - d.getTimezoneOffset());
  return d.toISOString().slice(0, 16);
}

function parseTags(input: string) {
  return input
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
}

export default function AdminPostsPage() {
  const [view, setView] = useState<ViewState>({ status: "loading" });
  const [posts, setPosts] = useState<PostRow[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(false);

  const [notice, setNotice] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Editor state
  const [editingId, setEditingId] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [coverUrl, setCoverUrl] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [published, setPublished] = useState(false);
  const [publishedAt, setPublishedAt] = useState<string>(""); // datetime-local (local)

  const isEditing = useMemo(() => Boolean(editingId), [editingId]);

  function resetEditor() {
    setEditingId(null);
    setTitle("");
    setSlug("");
    setExcerpt("");
    setContent("");
    setCoverUrl("");
    setTagsInput("");
    setPublished(false);
    setPublishedAt("");
  }

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

      // check admin by user_id (we have policy allowing self read own row)
      const { data: adminRow, error: adminErr } = await supabase
        .from("admin_users")
        .select("user_id")
        .eq("user_id", session.user.id)
        .maybeSingle();

      if (adminErr && !isAbortError(adminErr)) {
        // jeśli RLS jeszcze blokuje lub inny błąd
        setView({ status: "no_access", email: session.user.email ?? null });
        return null;
      }

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

  async function fetchPosts() {
    setLoadingPosts(true);
    setError(null);
    setNotice(null);

    const { data, error } = await supabase
      .from("posts")
      .select(
        "id,title,slug,excerpt,content_markdown,cover_image_url,tags,published,published_at,created_at,updated_at"
      )
      .order("created_at", { ascending: false });

    setLoadingPosts(false);

    if (error) {
      setError("Nie udało się pobrać postów (RLS / uprawnienia).");
      return;
    }

    setPosts((data as PostRow[]) ?? []);
  }

  useEffect(() => {
    (async () => {
      const u = await ensureAdmin();
      if (u) await fetchPosts();
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startCreate() {
    setNotice(null);
    setError(null);
    resetEditor();
  }

  function startEdit(p: PostRow) {
    setNotice(null);
    setError(null);

    setEditingId(p.id);
    setTitle(p.title ?? "");
    setSlug(p.slug ?? "");
    setExcerpt(p.excerpt ?? "");
    setContent(p.content_markdown ?? "");
    setCoverUrl(p.cover_image_url ?? "");
    setTagsInput((p.tags ?? []).join(", "));
    setPublished(Boolean(p.published));
    setPublishedAt(p.published_at ? toLocalInputValue(p.published_at) : "");
  }

  async function save() {
    setError(null);
    setNotice(null);

    const cleanTitle = title.trim();
    const cleanSlug = slug.trim();
    const cleanContent = content;
    const tags = parseTags(tagsInput);

    if (!cleanTitle || !cleanSlug || !cleanContent.trim()) {
      setError("Uzupełnij: title, slug oraz content.");
      return;
    }

    const payload = {
      title: cleanTitle,
      slug: cleanSlug,
      excerpt: excerpt.trim() ? excerpt.trim() : null,
      content_markdown: cleanContent,
      cover_image_url: coverUrl.trim() ? coverUrl.trim() : null,
      tags,
      published,
      published_at: published
        ? publishedAt
          ? new Date(publishedAt).toISOString()
          : new Date().toISOString()
        : null,
    };

    if (editingId) {
      const { error } = await supabase.from("posts").update(payload).eq("id", editingId);
      if (error) {
        setError(
          error.message.includes("duplicate key") || error.message.includes("unique")
            ? "Slug musi być unikalny."
            : "Nie udało się zapisać zmian."
        );
        return;
      }
      setNotice("Zapisano zmiany ✅");
    } else {
      const { error } = await supabase.from("posts").insert([payload]);
      if (error) {
        setError(
          error.message.includes("duplicate key") || error.message.includes("unique")
            ? "Slug musi być unikalny."
            : "Nie udało się utworzyć posta."
        );
        return;
      }
      setNotice("Utworzono post ✅");
    }

    await fetchPosts();
    resetEditor();
  }

  async function remove() {
    if (!editingId) return;
    const ok = window.confirm("Usunąć ten post? Tej operacji nie da się cofnąć.");
    if (!ok) return;

    setError(null);
    setNotice(null);

    const { error } = await supabase.from("posts").delete().eq("id", editingId);
    if (error) {
      setError("Nie udało się usunąć posta.");
      return;
    }
    setNotice("Usunięto post ✅");
    await fetchPosts();
    resetEditor();
  }

  async function logout() {
    setError(null);
    setNotice(null);
    await supabase.auth.signOut();
    setView({ status: "signed_out" });
  }

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
          <h1 className="font-serif text-4xl text-[#f0e4d8]">Posty</h1>
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
          <h1 className="font-serif text-4xl text-[#f0e4d8]">Posty</h1>
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
            <h1 className="font-serif text-4xl text-[#f0e4d8]">Posty</h1>
            <p className="mt-2 text-[#d7c5b1]">
              CRUD dla tabeli <span className="text-[#f0e4d8]">posts</span>.
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

        <div className="mt-8 grid gap-6 lg:grid-cols-[420px_1fr]">
          {/* Lista */}
          <div className="rounded-md border border-neutral-800 bg-neutral-950/40">
            <div className="flex items-center justify-between border-b border-neutral-800 px-4 py-3">
              <div className="font-serif text-lg text-[#f0e4d8]">Lista</div>
              <button
                onClick={startCreate}
                className="rounded-md bg-[#a56b2b] px-3 py-2 text-sm text-neutral-950 hover:bg-[#b3732f]"
              >
                + Nowy post
              </button>
            </div>

            <div className="max-h-[70vh] overflow-y-auto">
              {loadingPosts ? (
                <div className="px-4 py-4 text-sm text-[#d7c5b1]">Ładowanie…</div>
              ) : posts.length === 0 ? (
                <div className="px-4 py-4 text-sm text-[#d7c5b1]">Brak postów.</div>
              ) : (
                <ul className="divide-y divide-neutral-800">
                  {posts.map((p) => (
                    <li key={p.id} className="px-4 py-3">
                      <button
                        onClick={() => startEdit(p)}
                        className="w-full text-left"
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div>
                            <div className="text-[#f0e4d8]">{p.title}</div>
                            <div className="mt-1 text-xs text-[#d7c5b1]">
                              /blog/{p.slug}
                            </div>
                          </div>
                          <div
                            className={[
                              "shrink-0 rounded px-2 py-1 text-xs",
                              p.published
                                ? "bg-emerald-950/40 text-emerald-200 border border-emerald-900/50"
                                : "bg-neutral-900/30 text-neutral-300 border border-neutral-800",
                            ].join(" ")}
                          >
                            {p.published ? "published" : "draft"}
                          </div>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* Edytor */}
          <div className="rounded-md border border-neutral-800 bg-neutral-950/40">
            <div className="border-b border-neutral-800 px-4 py-3">
              <div className="font-serif text-lg text-[#f0e4d8]">
                {isEditing ? "Edycja posta" : "Nowy post"}
              </div>
              <div className="mt-1 text-xs text-[#d7c5b1]">
                Pola: title, slug, excerpt, content_markdown, cover_image_url, tags,
                published, published_at
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

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm text-[#d7c5b1]">Title</label>
                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="mt-2 w-full rounded-md border border-neutral-800 bg-neutral-950/40 px-4 py-3 text-neutral-100 outline-none focus:border-[#a56b2b]"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#d7c5b1]">Slug</label>
                  <input
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                    className="mt-2 w-full rounded-md border border-neutral-800 bg-neutral-950/40 px-4 py-3 text-neutral-100 outline-none focus:border-[#a56b2b]"
                  />
                  <div className="mt-1 text-xs text-neutral-500">np. “pierwszy-post”</div>
                </div>
              </div>

              <div>
                <label className="block text-sm text-[#d7c5b1]">Excerpt</label>
                <textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  rows={3}
                  className="mt-2 w-full rounded-md border border-neutral-800 bg-neutral-950/40 px-4 py-3 text-neutral-100 outline-none focus:border-[#a56b2b]"
                />
              </div>

              <div>
                <label className="block text-sm text-[#d7c5b1]">Content (Markdown)</label>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  rows={14}
                  className="mt-2 w-full rounded-md border border-neutral-800 bg-neutral-950/40 px-4 py-3 font-mono text-sm text-neutral-100 outline-none focus:border-[#a56b2b]"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-sm text-[#d7c5b1]">Cover image URL</label>
                  <input
                    value={coverUrl}
                    onChange={(e) => setCoverUrl(e.target.value)}
                    placeholder="https://… lub /public/…"
                    className="mt-2 w-full rounded-md border border-neutral-800 bg-neutral-950/40 px-4 py-3 text-neutral-100 outline-none focus:border-[#a56b2b]"
                  />
                </div>

                <div>
                  <label className="block text-sm text-[#d7c5b1]">
                    Tags (comma-separated)
                  </label>
                  <input
                    value={tagsInput}
                    onChange={(e) => setTagsInput(e.target.value)}
                    placeholder="pilates, wellbeing, firmy"
                    className="mt-2 w-full rounded-md border border-neutral-800 bg-neutral-950/40 px-4 py-3 text-neutral-100 outline-none focus:border-[#a56b2b]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-3">
                  <input
                    id="published"
                    type="checkbox"
                    checked={published}
                    onChange={(e) => setPublished(e.target.checked)}
                    className="h-4 w-4 accent-[#a56b2b]"
                  />
                  <label htmlFor="published" className="text-sm text-[#d7c5b1]">
                    Published
                  </label>
                </div>

                <div className="w-full md:w-[320px]">
                  <label className="block text-sm text-[#d7c5b1]">Published at</label>
                  <input
                    type="datetime-local"
                    value={publishedAt}
                    onChange={(e) => setPublishedAt(e.target.value)}
                    disabled={!published}
                    className={[
                      "mt-2 w-full rounded-md border px-4 py-3 outline-none",
                      published
                        ? "border-neutral-800 bg-neutral-950/40 text-neutral-100 focus:border-[#a56b2b]"
                        : "border-neutral-900 bg-neutral-900/20 text-neutral-500 cursor-not-allowed",
                    ].join(" ")}
                  />
                  <div className="mt-1 text-xs text-neutral-500">
                    Jeśli zostawisz puste i zaznaczysz Published, ustawimy “teraz”.
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-2">
                <button
                  onClick={save}
                  className="rounded-md bg-[#a56b2b] px-5 py-3 font-serif text-sm text-neutral-950 hover:bg-[#b3732f]"
                >
                  {isEditing ? "Zapisz zmiany" : "Utwórz post"}
                </button>

                {isEditing && (
                  <button
                    onClick={remove}
                    className="rounded-md border border-red-900/50 bg-red-950/30 px-5 py-3 font-serif text-sm text-red-200 hover:bg-red-950/45"
                  >
                    Usuń
                  </button>
                )}

                <button
                  onClick={resetEditor}
                  className="rounded-md border border-neutral-800 bg-neutral-900/30 px-5 py-3 font-serif text-sm text-[#e2d3c5] hover:bg-neutral-900/50"
                >
                  Wyczyść
                </button>
              </div>

              <div className="pt-2 text-xs text-neutral-500">
                Tip: slug musi być unikalny (wymuszane przez bazę).
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
