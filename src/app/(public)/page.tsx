import Link from "next/link";
import Image from "next/image";
import { getHomeSettings } from "@/lib/db/public";

export default async function HomePage() {
  const home = await getHomeSettings();

  // carousel_images: JSONB array (np. ["url1","url2"] albo [{url:".."}])
  const raw = home.carousel_images as any[];
  const images: string[] = (raw ?? [])
    .map((item) => (typeof item === "string" ? item : item?.url))
    .filter(Boolean)
    .slice(0, 3);

  return (
    <section className="relative min-h-[calc(100vh-1px)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />

      <div className="relative px-6 py-10 md:px-12 md:py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            {home.hero_title}
          </h1>

          <p className="mt-4 text-neutral-300 text-base md:text-lg">
            {home.hero_subtitle}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href={home.cta_href}
              className="inline-flex items-center justify-center rounded-full bg-amber-700 px-5 py-3 text-sm font-medium hover:bg-amber-600"
            >
              {home.cta_text}
            </Link>

            <Link
              href="/oferta-dla-firm"
              className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-5 py-3 text-sm font-medium text-neutral-200 hover:bg-neutral-900"
            >
              Zobacz ofertę
            </Link>
          </div>
        </div>

        <div className="mt-12 max-w-5xl">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950/50 p-6">
            <div className="text-sm text-neutral-300 font-medium">
              Carousel (max 3 zdjęcia) — ustawiane w CMS
            </div>

            {images.length === 0 ? (
              <div className="mt-4 text-sm text-neutral-400">
                Brak zdjęć w carousel. Dodaj je w CMS (Home settings).
              </div>
            ) : (
              <div className="mt-4 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-2">
                {images.map((src, idx) => (
                  <div
                    key={src}
                    className="relative h-52 w-[85%] sm:w-[48%] md:w-[32%] flex-none snap-start overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900"
                  >
                    <Image
                      src={src}
                      alt={`Carousel ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 85vw, 32vw"
                      priority={idx === 0}
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
