import Sidebar from "./Sidebar";

export default function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100">
      <div className="mx-auto max-w-[1400px]">
        <div className="grid grid-cols-1 md:grid-cols-[340px_1fr]">
          <Sidebar />
          <main className="min-h-screen">{children}</main>
        </div>
      </div>
    </div>
  );
}
