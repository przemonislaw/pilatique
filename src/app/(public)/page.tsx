import Link from "next/link";
import { getHomeSettings } from "@/lib/db/public";

export default async function HomePage() {
  // Guard: gdyby w Supabase nie było rekordu albo była chwilowa awaria,
  // nie wywalamy całej strony.
  const home = await getHomeSettings().catch(() => null);

  const raw = (home?.carousel_images ?? []) as any[];
  const images: string[] = raw
    .map((item) => (typeof item === "string" ? item : item?.url))
    .filter(Boolean)
    .slice(0, 3);

  const heroBg = images[0] || null;

  const heroTitle = home?.hero_title ?? "Pilates & wellbeing dla firm";
  const heroSubtitle =
    home?.hero_subtitle ??
    "Wyjątkowe zajęcia integracyjne, eventy i wyjazdy dla zespołów";
  const ctaText = home?.cta_text ?? "Zaplanuj wydarzenie";
  const ctaHref = home?.cta_href ?? "/kontakt";

  return (
    <section className="relative min-h-[calc(100vh-1px)] overflow-hidden">
      {/* Background (CSS) — działa z dowolnym zewnętrznym URL, bez next/image config */}
      <div
        className="absolute inset-0 bg-neutral-950"
        style={
          heroBg
            ? {
                backgroundImage: `url("${heroBg}")`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }
            : undefined
        }
      />
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/70" />
      <div className="absolute inset-0 bg-black/10" />

      {/* Content */}
      <div className="relative flex min-h-[calc(100vh-1px)] items-center px-6 py-12 md:px-12">
        <div className="ml-auto max-w-[680px] text-center md:text-right">
          <h1 className="font-serif text-4xl md:text-5xl leading-tight text-[#f0e4d8]">
            {heroTitle}
          </h1>

          <p className="mt-4 font-serif text-lg md:text-xl text-[#d7c5b1]">
            {heroSubtitle}
          </p>

          <div className="mt-8 flex justify-center md:justify-end">
            <Link
              href={ctaHref}
              className="inline-flex items-center justify-center rounded-md bg-[#a56b2b] px-6 py-3 font-serif text-base text-neutral-950 hover:bg-[#b3732f]"
            >
              {ctaText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
