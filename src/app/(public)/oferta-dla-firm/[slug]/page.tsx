import Markdown from "@/components/Markdown";
import { getPageByKey } from "@/lib/db/public";
import { notFound } from "next/navigation";

const allowedSlugs = [
  "organizacja-jednostkowych-eventow",
  "core-and-glow",
  "stars-and-stretches",
  "organizacja-wyjazdow-integracyjnych",
] as const;

export function generateStaticParams() {
  return allowedSlugs.map((slug) => ({ slug }));
}

export default async function OfferSubPage({
  params,
}: {
  params: Promise<{ slug: string }> | { slug: string };
}) {
  const { slug } = await Promise.resolve(params);

  if (!allowedSlugs.includes(slug as (typeof allowedSlugs)[number])) {
    notFound();
  }

  const page = await getPageByKey(`oferta-dla-firm/${slug}`).catch(() => null);

  if (!page) {
    notFound();
  }

  return (
    <div className="px-6 py-12 md:px-16 lg:py-20 lg:px-24 max-w-4xl mx-auto">
      <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#111111] font-light tracking-tight pb-4">
        {page.title}
      </h1>
      <div className="mt-8 md:mt-12">
        <Markdown content={page.content_markdown} />
      </div>
    </div>
  );
}
