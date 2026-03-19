import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function StarsAndStretchesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 px-8 md:px-20 overflow-hidden bg-[#1A0D0A] text-[#FFF8F6]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 z-10">
            <span className="font-label uppercase tracking-widest text-[#FFA358] font-bold text-sm block mb-4">Stars & Stretches</span>
            <h2 className="font-headline text-6xl md:text-8xl leading-[1.1] mb-8 tracking-tighter">
              Astro<br /> <span className="italic text-[#ffc4b4]">pilates</span>
            </h2>
            <p className="font-body text-xl text-white/70 max-w-lg leading-relaxed mb-10">
              Event dla osób otwartych na pracę z energią, symboliką i intuicją, które jednocześnie cenią świadomy ruch i dopracowaną formę. Sprawdza się świetnie na wieczory tematyczne i integracje.
            </p>
            <Link href="#kontakt" className="inline-block bg-white text-[#1A0D0A] px-10 py-5 rounded-full font-label font-bold uppercase tracking-widest text-xs shadow-lg hover:bg-white/90 transition-colors duration-400">
              Zapytaj o Stars & Stretches
            </Link>
          </div>
          <div className="flex-1 relative w-full">
            <div className="w-full aspect-square bg-[#291712] rounded-full overflow-hidden shadow-[0_0_80px_rgba(255,163,88,0.15)] flex justify-center items-center">
              <img
                alt="Stars and night vibe"
                className="w-full h-full object-cover opacity-60"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBclFIeQzqyjDEH0uHF7Sqp7V6fuxNp5BEX40D4JotiIY-X7fp35o-jY0C2Id1-Xi1GUZzyqxmZ7Yh24x-IUgMs08HX3GP6ZX8-FNHSdfCMa9jF5gJzaulGdsDQqKZ1EjIYr5lmlnoFuWkU61DszXtIQzPf0WrPkiSnqnSRpsKEywkrJqzFlqny6SwIt1ZPzPxmhVjCWxcZ4AKZWNFmhG7x3O1qT7DwoquZob_OfsXdd2ClxbmB10Pamm4z006NX3DDQUmecfpWzEN6"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-[#1A0D0A]/40 to-[#1A0D0A]"></div>
              {/* Moon-like orb */}
              <div className="absolute w-64 h-64 rounded-full bg-gradient-to-tr from-[#FFA358]/20 to-white/10 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Struktura eventu Section */}
      <section className="py-24 px-8 md:px-20 bg-surface-container">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h3 className="font-headline text-5xl mb-6 text-primary">Struktura eventu</h3>
          <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto">
            Format, w którym Pilates ugruntowuje ciało, a astrologia i tarot otwierają przestrzeń na refleksję, intencję i pracę z tym, co niewidoczne.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-outline-variant/10">
            <div className="w-12 h-12 rounded-full bg-primary-container text-white flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">nightlight_round</span>
            </div>
            <h4 className="font-headline text-2xl mb-2 text-primary">Wprowadzenie</h4>
            <span className="font-label text-xs uppercase tracking-widest text-[#9E381A] mb-4 block">15 min</span>
            <p className="font-body text-sm text-on-surface-variant">Oddech i wyciszenie po dniu. Krótkie wprowadzenie do idei eventu. Przygotowanie ciała i uwagi do ruchu.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-outline-variant/10">
            <div className="w-12 h-12 rounded-full bg-primary-container text-white flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">waves</span>
            </div>
            <h4 className="font-headline text-2xl mb-2 text-primary">Pilates Flow</h4>
            <span className="font-label text-xs uppercase tracking-widest text-[#9E381A] mb-4 block">60 min</span>
            <p className="font-body text-sm text-on-surface-variant">Spokojny, płynny trening. Nacisk na core, postawę i kontrolę ruchu. Flow zostawia w stanie lekkości, nie zmęczenia.</p>
          </div>
          <div className="bg-[#291712] p-8 rounded-3xl shadow-xl transition-shadow border border-[#9E381A]/30 text-white relative overflow-hidden">
            <div className="absolute w-40 h-40 bg-[#FFA358]/10 rounded-full blur-2xl top-0 right-0"></div>
            <div className="w-12 h-12 rounded-full bg-white/10 text-[#FFA358] flex items-center justify-center mb-6 relative z-10">
              <span className="material-symbols-outlined">auto_awesome</span>
            </div>
            <h4 className="font-headline text-2xl mb-2 text-[#fff8f6] relative z-10">Stars Experience</h4>
            <span className="font-label text-xs uppercase tracking-widest text-[#FFA358] mb-4 block relative z-10">45 min</span>
            <p className="font-body text-sm text-white/80 relative z-10">Sesja tarota prowadzona przez gościa, refleksja nad znakami zodiaku oraz rytuał parzenia herbat dedykowanych żywiołom.</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-outline-variant/10">
            <div className="w-12 h-12 rounded-full bg-primary-container text-white flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">self_improvement</span>
            </div>
            <h4 className="font-headline text-2xl mb-2 text-primary">Regeneracja</h4>
            <span className="font-label text-xs uppercase tracking-widest text-[#9E381A] mb-4 block">15 min</span>
            <p className="font-body text-sm text-on-surface-variant">Wyciszenie po doświadczeniu. Spokojne zakończenie, czas na rozmowy i naturalny networking.</p>
          </div>
        </div>
      </section>

      {/* Details and Practical info */}
      <section className="py-24 px-8 md:px-20 bg-surface-container-low">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-12">
            <div>
              <h3 className="font-headline text-4xl mb-6 text-primary">Co dostaje klient?</h3>
              <ul className="space-y-4 font-body text-lg text-on-surface-variant">
                <li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-2xl">star</span> Pełną sesję Pilates w formule butikowej</li>
                <li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-2xl">star</span> Starannie zaprojektowany element experience (tarot/astrologia)</li>
                <li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-2xl">star</span> Integrację grupy w naturalny, niekrępujący sposób</li>
                <li className="flex items-start gap-4"><span className="material-symbols-outlined text-primary text-2xl">star</span> Wydarzenie, które zostaje w pamięci jako doświadczenie</li>
              </ul>
            </div>
          </div>
          
          <div className="bg-white p-10 rounded-3xl shadow-[0_24px_48px_-12px_rgba(41,23,18,0.06)] border border-outline-variant/10">
            <h3 className="font-headline text-3xl mb-8 text-primary">Praktyczne informacje</h3>
            
            <div className="space-y-6">
              <div>
                <h4 className="font-label font-bold uppercase tracking-widest text-[#9E381A] text-xs mb-2">Możliwości customizacji i Forma</h4>
                <p className="font-body text-sm text-on-surface-variant leading-relaxed">
                  Zakres części experience: tarot / astrologia / numerologia. Charakter Pilatesu (core/flow/stretch). Poziom (beginner/mixed/intermediate), język (PL/EN). Prowadzimy zajęcia z wykorzystaniem reformerów (do 6 osób) lub mat (dowolna liczba). Lokalizacja u nas lub z dojazdem.
                </p>
              </div>
              
              <div className="h-[1px] bg-outline-variant/20"></div>
              
              <div>
                <h4 className="font-label font-bold uppercase tracking-widest text-[#9E381A] text-xs mb-2">Koszt orientacyjny</h4>
                <div className="flex flex-col gap-3 font-body text-sm text-on-surface-variant">
                  <div className="bg-surface-container-low p-4 rounded-xl">
                    <strong className="block mb-1 text-primary">Event prywatny:</strong>
                    • Maty: od 260–340 zł / osoba<br/>
                    • Reformery (do 6 os): od 320–420 zł / osoba
                  </div>
                  <div className="bg-surface-container-low p-4 rounded-xl">
                    <strong className="block mb-1 text-primary">Event firmowy / corporate wellbeing:</strong>
                    • Maty: od 3 000–4 500 zł za event<br/>
                    • Reformery (do 6 os): od 4 500–6 000 zł za event
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="kontakt" className="py-24 px-8 md:px-20 bg-surface-container-lowest border-t border-outline-variant/10">
        <div className="max-w-4xl mx-auto relative overflow-hidden">
          <h3 className="font-headline text-4xl text-primary mb-12 text-center">Zapytaj o Stars & Stretches</h3>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
