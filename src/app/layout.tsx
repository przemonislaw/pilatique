import "./globals.css";
import PageShell from "@/components/PageShell";

export const metadata = {
  title: "Pilatique",
  description: "Pilates & wellbeing dla firm",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
