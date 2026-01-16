import Link from "next/link";
import { getPublishedPosts } from "@/lib/db/public";

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <div className="px-6 py-10 md:px-12">
      <h1 className="text-3xl font-semibold">Blog</h1>
      <p className="mt-2 text-neutral-400">Aktualności i wpisy.</p>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {posts.length === 0 ? (
          <div className="text-neutral-400">
            Brak opublikowanych wpisów.
          </div>
        ) : (
          posts.map((p) => (
            <Link
              key={p.id}
              href={`/blog/${p.slug}`}
              className="rounded-2xl border border-neutral-800 bg-neutral-950/50 p-6 hover:bg-neutral-900/40 transition"
            >
              <div className="text-lg font-semibold">{p.title}</div>
              {p.excerpt ? (
                <div className="mt-2 text-sm text-neutral-300">
                  {p.excerpt}
                </div>
              ) : (
                <div className="mt-2 text-sm text-neutral-500">
                  (Brak excerpt)
                </div>
              )}

              <div className="mt-4 text-xs text-neutral-500">
                {p.published_at ? new Date(p.published_at).toLocaleDateString("pl-PL") : ""}
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
