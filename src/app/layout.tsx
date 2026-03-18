import { Newsreader, Manrope } from "next/font/google";
import "./globals.css";
import PageShell from "@/components/PageShell";

const newsreader = Newsreader({
  subsets: ["latin-ext"],
  variable: "--font-newsreader",
  display: "swap",
});

const manrope = Manrope({
  subsets: ["latin-ext"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  title: "Pilatique",
  description: "Pilates & wellbeing dla firm",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl" className={`${manrope.variable} ${newsreader.variable}`}>
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
        <style>{`
          .material-symbols-outlined {
            font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
            display: inline-block;
            line-height: 1;
          }
        `}</style>
      </head>
      <body
        className={`${newsreader.variable} ${manrope.variable} font-body bg-background text-on-surface antialiased selection:bg-primary-container selection:text-white`}
      >
        <PageShell>{children}</PageShell>
      </body>
    </html>
  );
}
