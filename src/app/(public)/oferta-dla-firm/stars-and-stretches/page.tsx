import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function StarsAndStretchesPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 px-8 md:px-20 overflow-hidden bg-[#1A0D0A] text-[#FFF8F6]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 z-10">
            <span className="font-label uppercase tracking-widest text-[#FFA358] font-bold text-sm block mb-4">Magia Nocnego Nieba</span>
            <h2 className="font-headline text-6xl md:text-8xl leading-[1.1] mb-8 tracking-tighter">
              Astro<br /> <span className="italic text-[#ffc4b4]">pilates</span>
            </h2>
            <p className="font-body text-xl text-white/70 max-w-lg leading-relaxed mb-10">
              Unikalny program 'Stars & Stretches' to wieczorne sesje na otwartym tarasie lub pod specjalną kopułą. Obserwacja gwiazd i głęboki stretching.
            </p>
            <Link href="#kontakt" className="inline-block bg-white text-[#1A0D0A] px-10 py-5 rounded-full font-label font-bold uppercase tracking-widest text-xs shadow-lg hover:bg-white/90 transition-colors duration-400">
              Sprawdź Kalendarz
            </Link>
          </div>
          <div className="flex-1 relative w-full">
            <div className="w-full aspect-square bg-[#291712] rounded-full overflow-hidden shadow-[0_0_80px_rgba(255,163,88,0.15)] flex justify-center items-center">
              <img
                alt="Silhouette of pilates pose at night"
                className="w-full h-full object-cover opacity-80"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBclFIeQzqyjDEH0uHF7Sqp7V6fuxNp5BEX40D4JotiIY-X7fp35o-jY0C2Id1-Xi1GUZZ... (Use actual image logic if needed, fallback to gradient)"
              />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent via-[#1A0D0A]/40 to-[#1A0D0A]"></div>
              {/* Moon-like orb */}
              <div className="absolute w-64 h-64 rounded-full bg-gradient-to-tr from-[#FFA358]/20 to-white/10 blur-xl"></div>
            </div>
          </div>
        </div>
      </section>

      {/* The Experience Section */}
      <section className="py-24 px-8 md:px-20 bg-surface-container">
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h3 className="font-headline text-5xl mb-6 text-primary">Nocna regeneracja</h3>
          <p className="font-body text-lg text-on-surface-variant max-w-2xl mx-auto">
            Metoda ta ma na celu całkowite uspokojenie systemu nerwowego przed snem. Powolne sekwencje oddechowe połączone z delikatnym rozciąganiem powięzi.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-outline-variant/10">
            <div className="w-12 h-12 rounded-full bg-primary-container text-white flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">nightlight</span>
            </div>
            <h4 className="font-headline text-2xl mb-4 text-primary">Relaksacja układu nerwowego</h4>
            <p className="font-body text-on-surface-variant">Przyciemnione, cieple światło świec i naturalne dźwięki tworzą środowisko sprzyjające obniżeniu poziomu kortyzolu.</p>
          </div>
          <div className="bg-white p-10 rounded-3xl shadow-sm hover:shadow-xl transition-shadow border border-outline-variant/10">
            <div className="w-12 h-12 rounded-full bg-primary-container text-white flex items-center justify-center mb-6">
              <span className="material-symbols-outlined">airline_seat_recline_extra</span>
            </div>
            <h4 className="font-headline text-2xl mb-4 text-primary">Stretching głęboki</h4>
            <p className="font-body text-on-surface-variant">Dłuższe utrzymanie pozycji pozwala na uelastycznienie powięzi i przywrócenie naturalnej zakresowości ruchów bez wysiłku kardiologicznego.</p>
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
