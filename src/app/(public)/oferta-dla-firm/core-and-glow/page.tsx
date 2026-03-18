import Link from "next/link";

export default function CoreAndGlowPage() {
  return (
    <>
      {/* Hero Section: Editorial Layout */}
      <section className="relative pt-32 pb-20 px-8 md:px-20 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 z-10">
            <span className="font-label uppercase tracking-widest text-primary font-bold text-sm block mb-4">Ekskluzywny Program</span>
            <h2 className="font-headline text-6xl md:text-8xl text-on-background leading-[1.1] mb-8 tracking-tighter">
              Odkryj Swoją <br /> <span className="italic text-primary">Wewnętrzną Siłę</span>
            </h2>
            <p className="font-body text-xl text-on-surface-variant max-w-lg leading-relaxed mb-10">
              Metoda Core&Glow to holistyczne połączenie głębokiej stabilizacji kręgosłupa z metabolicznym blaskiem, który promienieje z wnętrza po każdym treningu.
            </p>
            <Link href="/kontakt" className="inline-block bg-[#9E381A] bg-gradient-to-br from-[#9E381A] to-[#FFA358] text-white px-10 py-5 rounded-full font-label font-bold uppercase tracking-widest text-xs shadow-lg hover:scale-105 transition-transform duration-400">
              Zarezerwuj Sesję
            </Link>
          </div>
          <div className="flex-1 relative w-full">
            <div className="w-full aspect-[4/5] bg-surface-container-highest rounded-3xl overflow-hidden shadow-[0_24px_48px_-12px_rgba(158,56,26,0.15)] transform rotate-2">
              <img
                alt="Woman performing pilates move"
                className="w-full h-full object-cover mix-blend-multiply opacity-90"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSlCAsqrKkjR7cC7SC5ZDgkB87f7-tNW_n6Kt-5aa7xcSCfrqPXCMobe_5GnoxO586tyMl7dciQMNc8p3OaMuZXHT0VYNkxsKpG2085o1RoppTJCLVWCVH1Qmn1uO3-zxvjvoKDVskIPjVucbXCfz3XzGCGP31BPPX-dnr7WXs9sbXT7XLAxCqFvkgxPYsXQHva-txFChpQnh-Zt4GGEjFUJ7639dV0l3un5M4OL7GZIaI7fji0hh_xPY6HSp7AqvRBUtscZqazXT1"
              />
            </div>
            {/* Motion Orb Overlay */}
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-gradient-to-br from-[#9E381A] to-[#FFA358] opacity-20 blur-3xl animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* The Method: Bento Grid */}
      <section className="py-24 px-8 md:px-20 bg-surface-container-low">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            <div className="md:col-span-8 bg-surface-container-lowest p-12 rounded-3xl shadow-[0_24px_48px_-12px_rgba(41,23,18,0.06)]">
              <h3 className="font-headline text-4xl mb-6">Filozofia glow</h3>
              <p className="font-body text-lg leading-relaxed text-on-surface-variant mb-6">
                W Core&Glow nie skupiamy się wyłącznie na estetyce. Wierzymy, że prawdziwy blask (Glow) wynika z harmonii między siłą mięśni głębokich a płynnością ruchu. Nasza autorska sekwencja ćwiczeń aktywuje metabolizm na poziomie komórkowym, pozostawiając ciało odżywione i pełne energii.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-12">
                <div>
                  <h4 className="font-label font-black text-primary text-[11px] tracking-[0.2em] uppercase mb-2">Stabilizacja</h4>
                  <p className="text-sm">Budowanie fundamentu od miednicy po kręgi szyjne.</p>
                </div>
                <div>
                  <h4 className="font-label font-black text-primary text-[11px] tracking-[0.2em] uppercase mb-2">Energia</h4>
                  <p className="text-sm">Dynamiczne przejścia zwiększające wydolność serca.</p>
                </div>
              </div>
            </div>
            <div className="md:col-span-4 bg-primary-container p-12 rounded-3xl text-white flex flex-col justify-end bg-gradient-to-br from-[#9E381A] to-[#FFA358]">
              <span className="material-symbols-outlined text-4xl mb-6">wb_sunny</span>
              <h3 className="font-headline text-3xl mb-4 leading-tight">Metaboliczna odnowa</h3>
              <p className="font-body text-sm opacity-90 leading-relaxed">
                Poczuj, jak krew krąży szybciej, a Twoja skóra nabiera zdrowego rumieńca. To efekt "Glow", który utrzymuje się do 48h po sesji.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Upcoming Sessions */}
      <section className="py-24 px-8 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-16">
            <div>
              <span className="font-label uppercase tracking-widest text-primary font-bold text-sm">Harmonogram</span>
              <h3 className="font-headline text-5xl mt-2">Najbliższe spotkania</h3>
            </div>
            <Link className="font-label uppercase tracking-widest text-xs font-bold border-b border-primary text-primary pb-1" href="/kontakt">Zobacz Pełny Kalendarz</Link>
          </div>
          <div className="space-y-6">
            <div className="group flex items-center justify-between p-8 bg-surface-container-highest rounded-2xl transition-all duration-400 hover:bg-surface-container-high cursor-pointer">
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <span className="block font-headline text-3xl text-primary">14</span>
                  <span className="font-label text-[10px] font-bold uppercase tracking-widest">Paź</span>
                </div>
                <div>
                  <h4 className="font-body font-bold text-xl">Core Stability & Breath</h4>
                  <p className="text-sm text-on-surface-variant">Poniedziałek, 18:30 • Studio Aura</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="font-label text-xs uppercase font-bold tracking-widest text-on-surface-variant/60 hidden sm:block">3 Miejsca Wolne</span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </div>
            </div>
            <div className="group flex items-center justify-between p-8 bg-surface-container-lowest border border-outline-variant/10 rounded-2xl transition-all duration-400 hover:bg-surface-container-highest cursor-pointer">
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <span className="block font-headline text-3xl text-primary">16</span>
                  <span className="font-label text-[10px] font-bold uppercase tracking-widest">Paź</span>
                </div>
                <div>
                  <h4 className="font-body font-bold text-xl">Flow & Glow Advanced</h4>
                  <p className="text-sm text-on-surface-variant">Środa, 07:15 • Sunrise Hall</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="font-label text-xs uppercase font-bold tracking-widest text-on-surface-variant/60 hidden sm:block">Ostatnie Miejsce</span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </div>
            </div>
            <div className="group flex items-center justify-between p-8 bg-surface-container-lowest border border-outline-variant/10 rounded-2xl transition-all duration-400 hover:bg-surface-container-highest cursor-pointer">
              <div className="flex items-center gap-8">
                <div className="text-center">
                  <span className="block font-headline text-3xl text-primary">19</span>
                  <span className="font-label text-[10px] font-bold uppercase tracking-widest">Paź</span>
                </div>
                <div>
                  <h4 className="font-body font-bold text-xl">Radiant Weekend Intensive</h4>
                  <p className="text-sm text-on-surface-variant">Sobota, 10:00 • Main Studio</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <span className="font-label text-xs uppercase font-bold tracking-widest text-on-surface-variant/60 hidden sm:block">Lista Rezerwowa</span>
                <span className="material-symbols-outlined text-primary group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instructor Spotlight */}
      <section className="py-24 px-8 md:px-20 bg-surface-container">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="w-full md:w-1/3 aspect-square rounded-full overflow-hidden border-8 border-white shadow-2xl">
            <img
              alt="Instructor Anna Kwiatkowska"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGAzIUYo46-IYflwCOf5U5vKnT3b6jlWOaaF1dNOtNo9Wi7L5EVsg_41G27g-Qxt6T1GnmCiq5XnloymtIGQdbj_GDzsmjdU-Jyd_tmNHpgL2DZOZcNNlVpwafM9eHWbGaryxdQVX7qBdTul_yB0AnlY5gTAM_ryURRc5I3vL-3JM4mcdmH6tVU3OAe4SNm9UHTw0Yy5jgl7vNukaAPU8jWZxjhQjh4awyKOHohXp07mnvoNti2IsDUh0hiQrFIVNKB9e9eHRXkMs6"
            />
          </div>
          <div className="flex-1 text-center md:text-left">
            <span className="font-label uppercase tracking-widest text-primary font-bold text-sm">Mistrzyni Metody</span>
            <h3 className="font-headline text-5xl mt-4 mb-6 tracking-tight">Anna Kwiatkowska</h3>
            <p className="font-body text-lg leading-relaxed text-on-surface-variant italic mb-8">
              "Wierzę, że ruch to forma medytacji w działaniu. Moim celem jest pomóc Ci odnaleźć ten punkt wewnątrz, gdzie siła spotyka się ze spokojem."
            </p>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <span className="px-6 py-2 bg-white rounded-full font-label text-[10px] font-black uppercase tracking-widest text-primary">Master Pilates Coach</span>
              <span className="px-6 py-2 bg-white rounded-full font-label text-[10px] font-black uppercase tracking-widest text-primary">Metabolic Specialist</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
