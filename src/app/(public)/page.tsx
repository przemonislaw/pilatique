import Link from "next/link";

export default function HomePage() {
  return (
    <section className="relative min-h-[calc(100vh-1px)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_55%)]" />
      <div className="relative px-6 py-10 md:px-12 md:py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">
            Pilates & wellbeing dla firm
          </h1>
          <p className="mt-4 text-neutral-300 text-base md:text-lg">
            Wyjątkowe zajęcia integracyjne, eventy i wyjazdy dla zespołów.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center rounded-full bg-amber-700 px-5 py-3 text-sm font-medium hover:bg-amber-600"
            >
              Zaplanuj wydarzenie
            </Link>

            <Link
              href="/oferta-dla-firm"
              className="inline-flex items-center justify-center rounded-full border border-neutral-700 px-5 py-3 text-sm font-medium text-neutral-200 hover:bg-neutral-900"
            >
              Zobacz ofertę
            </Link>
          </div>
        </div>

        <div className="mt-12 max-w-4xl">
          <div className="rounded-2xl border border-neutral-800 bg-neutral-950/50 p-6">
            <div className="text-sm text-neutral-300 font-medium">
              Carousel (max 3 zdjęcia) — podłączymy do Supabase CMS
            </div>
            <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="h-40 rounded-xl bg-neutral-900 border border-neutral-800" />
              <div className="h-40 rounded-xl bg-neutral-900 border border-neutral-800" />
              <div className="h-40 rounded-xl bg-neutral-900 border border-neutral-800" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
