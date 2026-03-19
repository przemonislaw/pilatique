export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1 w-full max-w-screen-2xl mx-auto p-4 md:p-8">
        {children}
      </main>
    </div>
  );
}
