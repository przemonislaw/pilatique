import Link from "next/link";

export default function CoreAndGlowPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-8 md:px-20 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 z-10">
            <span className="font-label uppercase tracking-widest text-primary font-bold text-sm block mb-4">Ekskluzywny Projekt</span>
            <h2 className="font-headline text-6xl md:text-8xl text-on-background leading-[1.1] mb-8 tracking-tighter">
              Core & <br /> <span className="italic text-primary">Glow</span>
            </h2>
            <p className="font-body text-xl text-on-surface-variant max-w-lg leading-relaxed mb-10">
              Event stworzony z myślą o kobietach, które chcą połączyć świadomą pracę z ciałem z widocznym efektem estetycznym. Format idealny na urodziny, baby shower, wieczory panieńskie i eventy wellbeingowe.
            </p>
            <Link href="/kontakt" className="inline-block bg-[#9E381A] bg-gradient-to-br from-[#9E381A] to-[#FFA358] text-white px-10 py-5 rounded-full font-label font-bold uppercase tracking-widest text-xs shadow-lg hover:scale-105 transition-transform duration-400">
              Zapytaj o Event
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
            <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-gradient-to-br from-[#9E381A] to-[#FFA358] opacity-20 blur-3xl animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Idea Section */}
      <section className="py-24 px-8 md:px-20 bg-surface-container-low">
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="font-headline text-4xl mb-6 text-primary">Połączenie wnętrza i piękna</h3>
          <p className="font-body text-xl leading-relaxed text-on-surface-variant max-w-3xl mx-auto">
            To połączenie Pilatesu, który pracuje od środka, z elementem beauty, który podkreśla efekt na zewnątrz.
          </p>
        </div>
      </section>

      {/* Struktura eventu (Timeline/Steps) */}
      <section className="py-24 px-8 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16 text-center">
            <span className="font-label uppercase tracking-widest text-primary font-bold text-sm">Flow</span>
            <h3 className="font-headline text-5xl mt-2">Struktura eventu</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/20 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              <span className="font-headline text-5xl text-primary/20 absolute bottom-4 right-6 pointer-events-none">01</span>
              <h4 className="font-headline text-2xl mb-2 text-primary">Wprowadzenie</h4>
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-6 block">15 min</span>
              <ul className="space-y-3 font-body text-sm text-on-surface-variant">
                <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[16px] text-primary mt-0.5">check_circle</span> oddech i aktywacja core</li>
                <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[16px] text-primary mt-0.5">check_circle</span> delikatna mobilizacja kręgosłupa</li>
                <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[16px] text-primary mt-0.5">check_circle</span> przygotowanie do pracy posturalnej</li>
              </ul>
            </div>
            
            <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/20 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              <span className="font-headline text-5xl text-primary/20 absolute bottom-4 right-6 pointer-events-none">02</span>
              <h4 className="font-headline text-2xl mb-2 text-primary">Pilates posturalny</h4>
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-6 block">60 min</span>
              <ul className="space-y-3 font-body text-sm text-on-surface-variant">
                <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[16px] text-primary mt-0.5">check_circle</span> praca nad postawą, osiowością i kontrolą</li>
                <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[16px] text-primary mt-0.5">check_circle</span> aktywacja mięśni głębokich bez nadmiernej intensywności</li>
                <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[16px] text-primary mt-0.5">check_circle</span> spokojny, elegancki flow z naciskiem na jakość</li>
              </ul>
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/20 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              <span className="font-headline text-5xl text-primary/20 absolute bottom-4 right-6 pointer-events-none">03</span>
              <h4 className="font-headline text-2xl mb-2 text-primary">Część Glow</h4>
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-6 block">45 min</span>
              <ul className="space-y-3 font-body text-sm text-on-surface-variant">
                <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[16px] text-primary mt-0.5">check_circle</span> wprowadzenie do koreańskiej pielęgnacji twarzy</li>
                <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[16px] text-primary mt-0.5">check_circle</span> i/lub taping twarzy dający efekt lift & glow</li>
                <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[16px] text-primary mt-0.5">check_circle</span> wskazówki do codziennej pracy z ciałem</li>
              </ul>
            </div>

            <div className="bg-surface-container-lowest p-8 rounded-3xl shadow-sm border border-outline-variant/20 hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10 group-hover:scale-110 transition-transform"></div>
              <span className="font-headline text-5xl text-primary/20 absolute bottom-4 right-6 pointer-events-none">04</span>
              <h4 className="font-headline text-2xl mb-2 text-primary">Domknięcie</h4>
              <span className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mb-6 block">15 min</span>
              <ul className="space-y-3 font-body text-sm text-on-surface-variant">
                <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[16px] text-primary mt-0.5">check_circle</span> czas na rozmowę</li>
                <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[16px] text-primary mt-0.5">check_circle</span> integracja grupy</li>
                <li className="flex items-start gap-2"><span className="material-symbols-outlined text-[16px] text-primary mt-0.5">check_circle</span> spokojne zakończenie i regeneracja</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits and Offer details */}
      <section className="py-24 px-8 md:px-20 bg-surface-container">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h3 className="font-headline text-4xl mb-6 text-primary">Co dostaje klient?</h3>
              <ul className="space-y-4 font-body text-lg text-on-surface-variant">
                <li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-2xl">done_all</span> pełnowartościową sesję Pilates posturalnego</li>
                <li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-2xl">done_all</span> poprawę postawy i napięcia sylwetki</li>
                <li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-2xl">done_all</span> efekt lekkości i wydłużonego ciała</li>
                <li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-2xl">done_all</span> element beauty, który realnie uzupełnia pracę z ciałem</li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline text-4xl mb-6 text-primary">Co zapewnia Pilatique?</h3>
              <ul className="space-y-4 font-body text-lg text-on-surface-variant">
                <li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-2xl">spa</span> certyfikowanego instruktora i autorski scenariusz</li>
                <li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-2xl">person_celebrate</span> prowadzenie części beauty / taping przez gościa</li>
                <li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-2xl">fitness_center</span> maty, akcesoria oraz wsparcie w organizacji przestrzeni</li>
                <li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-2xl">palette</span> spójną, estetyczną oprawę eventu</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-primary-container p-12 rounded-3xl text-white shadow-xl bg-gradient-to-br from-[#9E381A] to-[#FFA358]">
            <h3 className="font-headline text-4xl mb-10">Praktyczne informacje</h3>
            
            <div className="space-y-8">
              <div>
                <h4 className="font-label font-bold uppercase tracking-widest text-xs mb-2 opacity-80">Możliwości customizacji</h4>
                <p className="font-body text-sm leading-relaxed mb-1">• Nacisk treningowy (core / postura / elongacja)<br/>• Wybór dodatku (pielęgnacja / taping / mix)<br/>• Poziom (beginner / mixed / intermediate)<br/>• Długość eventu & język (PL / EN)</p>
              </div>
              
              <div className="h-[1px] bg-white/20 w-full"></div>
              
              <div>
                <h4 className="font-label font-bold uppercase tracking-widest text-xs mb-2 opacity-80">Forma & Lokalizacja</h4>
                <p className="font-body text-sm leading-relaxed mb-1">• Reformery (do 6 osób) lub Maty (dowolna liczba)<br/>• Studio we Wrocławiu lub z dojazdem do 1,5h</p>
              </div>

              <div className="h-[1px] bg-white/20 w-full"></div>

              <div>
                <h4 className="font-label font-bold uppercase tracking-widest text-xs mb-2 opacity-80">Koszt orientacyjny</h4>
                <div className="space-y-4 mt-4">
                  <div>
                    <strong className="block text-sm mb-1">Event prywatny:</strong>
                    <span className="text-sm opacity-90 block">• od 300–380 zł / osoba (maty)</span>
                    <span className="text-sm opacity-90 block">• od 380–480 zł / osoba (reformery, do 6 osób)</span>
                  </div>
                  <div>
                    <strong className="block text-sm mb-1">Event firmowy:</strong>
                    <span className="text-sm opacity-90 block">• od 3 500–5 000 zł za event (maty)</span>
                    <span className="text-sm opacity-90 block">• od 5 000–6 500 zł za event (reformery, do 6 osób)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
