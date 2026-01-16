import Markdown from "@/components/Markdown";
import { getPageByKey } from "@/lib/db/public";

export default async function OfferPage() {
  const page = await getPageByKey("oferta-dla-firm");

  return (
    <div className="px-6 py-10 md:px-12">
      <h1 className="text-3xl font-semibold">{page.title}</h1>
      <div className="mt-6">
        <Markdown content={page.content_markdown} />
      </div>
    </div>
  );
}
