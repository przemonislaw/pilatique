import { getPublishedPostBySlug } from "@/lib/db/public";
import Markdown from "@/components/Markdown";

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPublishedPostBySlug(params.slug);

  return (
    <div className="px-6 py-10 md:px-12">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-semibold">{post.title}</h1>
        {post.published_at ? (
          <div className="mt-2 text-sm text-neutral-500">
            {new Date(post.published_at).toLocaleDateString("pl-PL")}
          </div>
        ) : null}

        <div className="mt-8">
          <Markdown content={post.content_markdown} />
        </div>
      </div>
    </div>
  );
}
