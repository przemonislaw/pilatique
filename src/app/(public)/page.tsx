import Link from "next/link";
import HeroCarousel from "@/components/HeroCarousel";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[921px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[#fff8f6]">
          <HeroCarousel />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent md:block hidden"></div>
          <div className="absolute inset-0 bg-background/20"></div>
        </div>
        
        <div className="relative z-10 px-8 md:px-20 max-w-4xl">
          <span className="font-label uppercase tracking-[0.3em] text-[12px] font-extrabold text-primary mb-6 block">
            Premium Studio Pilates
          </span>
          <h2 className="font-headline text-6xl md:text-8xl leading-[1.1] text-on-surface mb-8 [text-shadow:_0_0_30px_rgb(255_248_246_/_1),_0_0_60px_rgb(255_248_246_/_0.8)]">
            Nasza pasja,<br /><span className="italic text-primary">Twoja równowaga</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 mt-12">
            <Link href="/kontakt" className="bg-gradient-to-r from-[#9E381A] to-[#FFA358] text-white font-label uppercase tracking-widest text-[13px] font-bold px-10 py-5 rounded-full shadow-lg hover:scale-[1.02] transition-transform duration-400 flex items-center justify-center gap-3">
              Zarezerwuj miejsce
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>
            <Link href="/oferta-dla-firm" className="bg-white/50 backdrop-blur-md border border-outline-variant/20 text-on-surface font-label uppercase tracking-widest text-[13px] font-bold px-10 py-5 rounded-full hover:bg-white/80 transition-colors flex items-center justify-center">
              Odkryj ofertę
            </Link>
          </div>
        </div>
        {/* Floating Orb Decor */}
        <div className="absolute -right-20 bottom-20 w-96 h-96 bg-primary-container/10 rounded-full blur-[100px]"></div>
      </section>

      {/* Philosophy Section */}
      <section className="py-32 px-8 md:px-20 bg-surface-container-low">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-20 items-center">
          <div className="w-full md:w-1/2">
            <div className="relative">
              <img
                className="w-full aspect-[4/5] object-cover rounded-xl shadow-2xl"
                alt="Close-up of pilates movement showing form and control"
                src="/movement-perfection.png"
              />
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary-container/20 rounded-full backdrop-blur-3xl -z-10"></div>
            </div>
          </div>
          <div className="w-full md:w-1/2 space-y-10">
            <h3 className="font-headline text-5xl leading-tight">
              Ruch jako wyraz<br /><span className="italic">szacunku dla ciała</span>
            </h3>
            <p className="font-body text-lg leading-relaxed text-on-surface-variant max-w-md">
              W Pilatique wierzymy, że siła rodzi się w spokoju. Nasze podejście do pilatesu łączy tradycyjną precyzję z nowoczesnym zrozumieniem biomechaniki, tworząc przestrzeń, w której ciało i umysł odnajdują wspólną częstotliwość.
            </p>
            <div className="pt-6 border-t border-outline-variant/20">
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 rounded-full bg-primary-container flex items-center justify-center text-white">
                  <span className="material-symbols-outlined text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>spa</span>
                </div>
                <div>
                  <p className="font-label font-bold text-on-surface">The Radiant Core Method</p>
                  <p className="text-sm text-on-surface-variant">Autorska technika wzmacniania fundamentów ciała.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars Bento Grid */}
      <section className="py-32 px-8 md:px-20">
        <div className="text-center mb-24">
          <span className="font-label uppercase tracking-widest text-[11px] font-bold text-primary mb-4 block">Nasze Fundamenty</span>
          <h2 className="font-headline text-5xl">Filary Pilatique</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 max-w-7xl mx-auto">
          {/* Precision */}
          <div className="md:col-span-7 bg-surface-container-highest rounded-3xl p-12 flex flex-col justify-between min-h-[400px] group hover:bg-primary-container transition-colors duration-500">
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-5xl text-primary group-hover:text-white transition-colors">target</span>
              <span className="font-headline italic text-4xl text-outline-variant opacity-30 group-hover:text-white">01</span>
            </div>
            <div>
              <h4 className="font-headline text-4xl mb-4 group-hover:text-white transition-colors">Precision</h4>
              <p className="font-body text-on-surface-variant group-hover:text-white/80 transition-colors max-w-sm">
                Skupienie na najdrobniejszym detalu ruchu, aby zapewnić maksymalną efektywność i bezpieczeństwo każdego treningu.
              </p>
            </div>
          </div>
          
          {/* Individuality */}
          <div className="md:col-span-5 bg-surface-container rounded-3xl p-12 flex flex-col justify-between min-h-[400px]">
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-5xl text-primary">person_search</span>
              <span className="font-headline italic text-4xl text-outline-variant opacity-30">02</span>
            </div>
            <div>
              <h4 className="font-headline text-4xl mb-4">Individuality</h4>
              <p className="font-body text-on-surface-variant">
                Dostosowujemy program do unikalnych potrzeb Twojej sylwetki i celów, które chcesz osiągnąć.
              </p>
            </div>
          </div>
          
          {/* Community Image */}
          <div className="md:col-span-5 rounded-3xl overflow-hidden relative min-h-[400px]">
            <img
              className="w-full h-full object-cover"
              alt="Group pilates class focusing on community and support"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3oUBwMcNtk3cavW0h02xfJSZJ3zPA-48mtcU1CYmPh-PLfa-kmWVO99Mxmwhe8KC2int93PePvmbiB4OH6nrBtlLTT-sDxAUfSIKD6FkSduLpixzrYTyNpW6Wr8HGXrdeUAHRILWNf6pdUo-xWUSQU6WZAy2lZq_JE9pxam-Qomv3_aAsYWQCYALUD0JQlJTn9jR0Syj0q1nhtZhYrEBDzoTmtjkDOcQtKNh9HT3TGOGH6XJ3zq8j2XOxjmhyn3Tu0RW7R30i4n2v"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent"></div>
            <div className="absolute bottom-10 left-10 text-white">
              <h4 className="font-headline text-3xl">Lokalna społeczność</h4>
            </div>
          </div>
          
          {/* Community Text */}
          <div className="md:col-span-7 bg-white p-12 rounded-3xl flex flex-col justify-between border border-outline-variant/10 shadow-sm">
            <div className="flex justify-between items-start">
              <span className="material-symbols-outlined text-5xl text-primary">groups</span>
              <span className="font-headline italic text-4xl text-outline-variant opacity-30">03</span>
            </div>
            <div>
              <h4 className="font-headline text-4xl mb-4">Community</h4>
              <p className="font-body text-on-surface-variant max-w-md">
                Tworzymy miejsce, w którym pasja do ruchu łączy ludzi. Wspólne treningi, warsztaty i wyjazdy integracyjne to nasze serce.
              </p>
              <Link href="/o-nas" className="inline-flex items-center gap-2 text-primary font-bold font-label uppercase text-[12px] tracking-widest mt-8 group">
                Dowiedz się więcej 
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-2 transition-transform">east</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 md:px-20">
        <div className="bg-gradient-to-br from-primary via-primary-container to-secondary-container rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
          {/* Abstract Grainy Texture Overlay Simulation */}
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          
          <h2 className="font-headline text-5xl md:text-7xl mb-8 relative z-10">
            Rozpocznij swoją podróż<br /><span className="italic">do źródła siły</span>
          </h2>
          <p className="font-body text-xl text-white/80 max-w-2xl mx-auto mb-12 relative z-10">
            Odkryj moc Core&Glow w naszym butikowym studio. Liczba miejsc w grupach jest ograniczona, aby zapewnić najwyższy standard opieki.
          </p>
          <div className="relative z-10">
            <Link href="/kontakt" className="inline-block bg-white text-primary font-label uppercase tracking-widest text-[14px] font-black px-12 py-6 rounded-full hover:scale-105 transition-transform shadow-xl">
              Zarezerwuj miejsce
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}