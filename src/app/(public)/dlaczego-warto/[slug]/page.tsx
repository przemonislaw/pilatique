import Markdown from "@/components/Markdown";
import { getPageByKey } from "@/lib/db/public";
import { notFound } from "next/navigation";

const allowedSlugs = ["korzysci-dla-kregoslupa", "poprawa-postury"] as const;

export function generateStaticParams() {
  return allowedSlugs.map((slug) => ({ slug }));
}

export default async function WhySubPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = params;

  if (!allowedSlugs.includes(slug as (typeof allowedSlugs)[number])) {
    notFound();
  }

  const page = await getPageByKey(`dlaczego-warto/${slug}`).catch(() => null);

  if (!page) {
    notFound();
  }

  return (
    <div className="px-6 py-10 md:px-12">
      <h1 className="text-3xl font-semibold">{page.title}</h1>
      <div className="mt-6">
        <Markdown content={page.content_markdown} />
      </div>
    </div>
  );
}
