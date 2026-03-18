import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function IntegrationalTripsPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 px-8 md:px-20 overflow-hidden">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 z-10">
            <span className="font-label uppercase tracking-widest text-primary font-bold text-sm block mb-4">Wyjazdy Integracyjne</span>
            <h2 className="font-headline text-6xl md:text-8xl text-on-background leading-[1.1] mb-8 tracking-tighter">
              Zanurz się <br /> <span className="italic text-primary">w spokoju</span>
            </h2>
            <p className="font-body text-xl text-on-surface-variant max-w-lg leading-relaxed mb-10">
              Pilatique Retreats to ekskluzywne wyjazdy łączące głęboką praktykę pilatesu z resetem w najpiękniejszych zakątkach natury. Odzyskaj balans z dala od zgiełku miasta.
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-surface-container-lowest p-10 rounded-3xl shadow-[0_24px_48px_-12px_rgba(41,23,18,0.06)] hover:scale-[1.02] transition-transform duration-500">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">forest</span>
              <h3 className="font-headline text-3xl mb-4">Lokalizacje</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Starannie wyselekcjonowane wille i butikowe hotele z dala od cywilizacji. Bliskość jezior, lasów i harmonii, która sprzyja wyciszeniu umysłu.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-3xl shadow-[0_24px_48px_-12px_rgba(41,23,18,0.06)] hover:scale-[1.02] transition-transform duration-500">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">self_improvement</span>
              <h3 className="font-headline text-3xl mb-4">Praktyka</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                2 do 3 sesji pilatesu dziennie, od porannych, energetyzujących flow po wieczorne, głęboko relaksujące zajęcia z rozciągania i medytacji.
              </p>
            </div>
            <div className="bg-surface-container-lowest p-10 rounded-3xl shadow-[0_24px_48px_-12px_rgba(41,23,18,0.06)] hover:scale-[1.02] transition-transform duration-500">
              <span className="material-symbols-outlined text-primary text-4xl mb-6">nutrition</span>
              <h3 className="font-headline text-3xl mb-4">Odżywianie</h3>
              <p className="font-body text-on-surface-variant leading-relaxed">
                Pełne wyżywienie opanowane przez dietetyków klinicznych i kucharzy serwujących zbilansowaną, wegetariańską lub wegańską kuchnię z lokalnych składników.
              </p>
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
