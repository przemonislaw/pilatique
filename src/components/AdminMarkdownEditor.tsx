"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

// Dynamic import to prevent SSR hydration errors (the editor uses `window`)
const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

interface AdminMarkdownEditorProps {
  value: string;
  onChange: (value: string) => void;
}

export default function AdminMarkdownEditor({ value, onChange }: AdminMarkdownEditorProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-full h-[500px] bg-neutral-900/40 rounded-md border border-neutral-800 animate-pulse flex items-center justify-center text-neutral-500">
        Ładowanie edytora...
      </div>
    );
  }

  return (
    <div data-color-mode="dark" className="mt-2 w-full rounded-md overflow-hidden border border-neutral-800 focus-within:border-[#a56b2b] transition-colors">
      <MDEditor
        value={value}
        onChange={(val) => onChange(val || "")}
        height={500}
        preview="live"
        hideToolbar={false}
        className="!border-none"
        style={{
          backgroundColor: "rgb(23 23 23 / 0.4)", // matches neutral-950/40
        }}
      />
    </div>
  );
}
