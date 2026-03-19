import PageShell from "@/components/PageShell";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <PageShell>{children}</PageShell>;
}
