import { Newsreader, Manrope } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://pilatique.pl"),
  title: {
    template: "%s | Pilatique",
    default: "Pilatique - Studio Pilates & Wellbeing",
  },
  description:
    "Profesjonalne studio Pilates. Oferujemy treningi personalne, zdrowy kręgosłup oraz wellbeing dla firm. Zadbaj o ciało i umysł z naszymi ekspertami.",
  keywords: [
    "pilates",
    "studio pilates",
    "wellbeing",
    "pilates dla firm",
    "zdrowy kręgosłup",
    "trening personalny",
  ],
  openGraph: {
    title: "Pilatique - Studio Pilates & Wellbeing",
    description:
      "Profesjonalne studio Pilates. Oferujemy treningi personalne, zdrowy kręgosłup oraz wellbeing dla firm.",
    url: "https://pilatique.pl",
    siteName: "Pilatique",
    locale: "pl_PL",
    type: "website",
  },
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
        {children}
      </body>
    </html>
  );
}
