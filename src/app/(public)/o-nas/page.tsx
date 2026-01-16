import Markdown from "@/components/Markdown";
import { getPageByKey } from "@/lib/db/public";

export default async function AboutPage() {
  const page = await getPageByKey("o-nas");

  return (
    <div className="px-6 py-10 md:px-12">
      <h1 className="text-3xl font-semibold">{page.title}</h1>
      <div className="mt-6">
        <Markdown content={page.content_markdown} />
      </div>
    </div>
  );
}
