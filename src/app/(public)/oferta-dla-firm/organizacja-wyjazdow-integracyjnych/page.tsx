import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function IntegrationalTripsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-8 md:px-20 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 z-10">
            <span className="font-label uppercase tracking-widest text-[#9E381A] font-bold text-sm block mb-4">Core & Resonance</span>
            <h2 className="font-headline text-6xl md:text-8xl text-on-background leading-[1.1] mb-8 tracking-tighter">
              Zanurz się <br /> <span className="italic text-[#9E381A]">w spokoju</span>
            </h2>
            <p className="font-body text-xl text-on-surface-variant max-w-lg leading-relaxed mb-10">
              Premium event dla firm i klientów prywatnych, którzy potrzebują głębokiego resetu układu nerwowego, ale wciąż chcą pozostać w ruchu i kontakcie z ciałem.
            </p>
            <Link href="#kontakt" className="inline-block bg-[#9E381A] bg-gradient-to-br from-[#9E381A] to-[#FFA358] text-white px-10 py-5 rounded-full font-label font-bold uppercase tracking-widest text-xs shadow-lg hover:scale-105 transition-transform duration-400">
              Zapytaj o Wyjazd
            </Link>
          </div>
          <div className="flex-1 relative w-full">
            <div className="w-full aspect-[4/5] bg-surface-container-highest rounded-3xl overflow-hidden shadow-[0_24px_48px_-12px_rgba(158,56,26,0.15)] transform -rotate-2">
              <img
                alt="Women doing pilates outdoors"
                className="w-full h-full object-cover mix-blend-multiply opacity-90"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBclFIeQzqyjDEH0uHF7Sqp7V6fuxNp5BEX40D4JotiIY-X7fp35o-jY0C2Id1-Xi1GUZzyqxmZ7Yh24x-IUgMs08HX3GP6ZX8-FNHSdfCMa9jF5gJzaulGdsDQqKZ1EjIYr5lmlnoFuWkU61DszXtIQzPf0WrPkiSnqnSRpsKEywkrJqzFlqny6SwIt1ZPzPxmhVjCWxcZ4AKZWNFmhG7x3O1qT7DwoquZob_OfsXdd2ClxbmB10Pamm4z006NX3DDQUmecfpWzEN6"
              />
            </div>
            {/* Motion Orb Overlay */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-gradient-to-br from-[#9E381A] to-[#FFA358] opacity-20 blur-3xl animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Program Details section */}
      <section className="py-24 px-8 md:px-20 bg-surface-container-low">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="font-headline text-4xl text-primary mb-4">Struktura eventu</h3>
            <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto">Połączenie świadomego ruchu Pilates z pracą dźwiękiem, który działa na ciało przez wibrację, rytm i częstotliwość.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            <div className="bg-surface-container-lowest p-10 rounded-3xl shadow-[0_24px_48px_-12px_rgba(41,23,18,0.06)] hover:scale-[1.02] transition-transform duration-500">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">forest</span>
              <h3 className="font-headline text-3xl mb-2">1. Ugruntowanie</h3>
              <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-4 block">15 min</span>
              <p className="font-body text-on-surface-variant leading-relaxed text-sm">
                Spokojne wejście w praktykę, oddech i regulacja napięcia. Przygotowanie układu nerwowego do pracy w ciszy i dźwięku.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-3xl shadow-[0_24px_48px_-12px_rgba(41,23,18,0.06)] hover:scale-[1.02] transition-transform duration-500">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">self_improvement</span>
              <h3 className="font-headline text-3xl mb-2">2. Pilates Flow</h3>
              <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-4 block">30 min</span>
              <p className="font-body text-on-surface-variant leading-relaxed text-sm">
                Przygotowanie flow, które będzie powtarzane podczas ceremonii. Przestrojenie układu nerwowego do głębokiej regeneracji.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-3xl shadow-[0_24px_48px_-12px_rgba(41,23,18,0.06)] hover:scale-[1.02] transition-transform duration-500">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">graphic_eq</span>
              <h3 className="font-headline text-3xl mb-2">3. Sound Ceremony</h3>
              <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-4 block">30 min</span>
              <p className="font-body text-on-surface-variant leading-relaxed text-sm">
                Ceremonia gongów tybetańskich prowadzona przez zaproszonego gościa. Praca z dźwiękiem, wibracją i falą rezonansu w ruchu.
              </p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:px-32">
            <div className="bg-surface-container-lowest p-10 rounded-3xl shadow-[0_24px_48px_-12px_rgba(41,23,18,0.06)] hover:scale-[1.02] transition-transform duration-500 border border-primary/10">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">bedtime</span>
              <h3 className="font-headline text-3xl mb-2">4. Kontynuacja ceremonii</h3>
              <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-4 block">30 min</span>
              <p className="font-body text-on-surface-variant leading-relaxed text-sm">
                Uczestnicy pozostają w pozycji leżącej. Pełne rozluźnienie i bezwarunkowa regeneracja w fali dźwięku.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-3xl shadow-[0_24px_48px_-12px_rgba(41,23,18,0.06)] hover:scale-[1.02] transition-transform duration-500 border border-primary/10">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">volunteer_activism</span>
              <h3 className="font-headline text-3xl mb-2">5. Domknięcie</h3>
              <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-4 block">15 min</span>
              <p className="font-body text-on-surface-variant leading-relaxed text-sm">
                Integracja. Spokojny powrót do świadomości ciała, chwila ciszy lub rozmowy. Bez pośpiechu i bez nagłego zakończenia.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Practical info & Provides */}
      <section className="py-24 px-8 md:px-20 bg-surface-container">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
          <div className="flex-1 space-y-12">
            <div>
              <h3 className="font-headline text-4xl mb-8 text-primary">Co zapewnia Pilatique?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#9E381A]">check_circle</span>
                  <p className="font-body text-on-surface-variant text-sm">Certyfikowanego instruktora i autorski scenariusz Pilates Flow.</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#9E381A]">check_circle</span>
                  <p className="font-body text-on-surface-variant text-sm">Zaproszonego gościa prowadzącego ceremonię gongów.</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#9E381A]">check_circle</span>
                  <p className="font-body text-on-surface-variant text-sm">Zapewnienie sprzętu (reformery, maty, akcesoria).</p>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-[#9E381A]">check_circle</span>
                  <p className="font-body text-on-surface-variant text-sm">Spokojna oprawa wydarzenia i pełna koordynacja.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 bg-surface-container-highest p-10 rounded-3xl border border-outline-variant/20 shadow-lg">
            <h3 className="font-headline text-3xl mb-8 text-primary">Informacje organizacyjne</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-label font-bold uppercase tracking-widest text-[#9E381A] text-xs mb-2">Możliwości customizacji i Forma</h4>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  Długość części dźwiękowej, poziom zajęć (beginner/mixed), język (PL/EN). Prowadzimy zajęcia z wykorzystaniem reformerów (do 6 osób) lub mat (dowolna liczba). Lokalizacja u nas lub z dojazdem.
                </p>
              </div>
              
              <div className="h-[1px] bg-outline-variant/20"></div>
              
              <div>
                <h4 className="font-label font-bold uppercase tracking-widest text-[#9E381A] text-xs mb-2">Koszt orientacyjny</h4>
                <div className="flex flex-col gap-3 font-body text-sm text-on-surface-variant">
                  <div className="bg-surface-container p-4 rounded-xl">
                    <strong className="block mb-1 text-primary">Event prywatny:</strong>
                    • Maty: od 220–300 zł / osoba<br/>
                    • Reformery (do 6 os): od 300–380 zł / osoba
                  </div>
                  <div className="bg-surface-container p-4 rounded-xl">
                    <strong className="block mb-1 text-primary">Event firmowy / corporate wellbeing:</strong>
                    • Maty: od 2 800–4 200 zł za event<br/>
                    • Reformery (do 6 os): od 4 200–5 800 zł za event
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontakt" className="py-24 px-8 md:px-20">
        <div className="max-w-4xl mx-auto bg-surface-container-highest p-12 md:p-16 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 left-0 p-8 opacity-10 pointer-events-none">
            <span className="material-symbols-outlined text-9xl">travel_explore</span>
          </div>
          <h3 className="font-headline text-4xl text-primary mb-12 relative z-10 text-center">Zorganizuj wyjazd szyty na miarę</h3>
          <div className="relative z-10">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
