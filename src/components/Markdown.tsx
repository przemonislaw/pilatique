import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Markdown({ content }: { content: string }) {
  return (
    <div className="prose prose-invert max-w-none prose-headings:font-semibold prose-a:text-amber-400">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  );
}
