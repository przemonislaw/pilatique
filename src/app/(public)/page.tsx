import Link from "next/link";
import { getHomeSettings } from "@/lib/db/public";
import HeroCarouselBackground from "@/components/HeroCarouselBackground";

export default async function HomePage() {
  const home = await getHomeSettings().catch(() => null);

  const raw: unknown[] = Array.isArray(home?.carousel_images)
    ? (home.carousel_images as unknown[])
    : [];

  const images: string[] = raw
    .map((item) => {
      if (typeof item === "string") return item;
      if (
        item &&
        typeof item === "object" &&
        "url" in item &&
        typeof item.url === "string"
      ) {
        return item.url;
      }
      return null;
    })
    .filter((value): value is string => Boolean(value))
    .slice(0, 3);

  const heroTitle = home?.hero_title ?? "Pilates & wellbeing dla firm";
  const heroSubtitle =
    home?.hero_subtitle ??
    "Wyjątkowe zajęcia integracyjne, eventy i wyjazdy dla zespołów";
  const ctaText = home?.cta_text ?? "Zaplanuj wydarzenie";
  const ctaHref = home?.cta_href ?? "/kontakt";

  return (
    <section className="relative min-h-[calc(100vh-1px)] overflow-hidden">
      <HeroCarouselBackground images={images} />

      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/45 to-black/70" />
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative flex min-h-[calc(100vh-1px)] items-center px-6 py-12 md:px-12">
        <div className="ml-auto max-w-[680px] text-center md:text-right">
          <h1 className="font-serif text-4xl leading-tight text-[#f0e4d8] md:text-5xl">
            {heroTitle}
          </h1>

          <p className="mt-4 font-serif text-lg text-[#d7c5b1] md:text-xl">
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