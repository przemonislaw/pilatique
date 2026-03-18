export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto mb-20 px-6 md:px-16 lg:px-24 pt-24 md:pt-16">
        <h2 className="font-headline text-5xl md:text-7xl lg:text-8xl text-primary leading-tight mb-8">
          Skontaktuj się <br />
          <span className="italic font-light">z nami</span>
        </h2>
        <p className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed">
          Jesteśmy tutaj, aby odpowiedzieć na Twoje pytania i pomóc Ci odnaleźć Twój wewnętrzny blask. Wybierz dogodną formę kontaktu.
        </p>
      </section>

      {/* Bento Grid Layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 px-6 md:px-16 lg:px-24">
        {/* Contact Form Card */}
        <div className="lg:col-span-7 bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 shadow-[0_24px_48px_rgba(41,23,18,0.04)]">
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative">
                <label className="block font-label text-[10px] uppercase tracking-widest font-bold text-primary mb-2">Imię i Nazwisko</label>
                <input className="w-full bg-transparent border-0 border-b border-outline-variant/20 focus:ring-0 focus:border-primary py-3 px-0 transition-colors placeholder:text-on-surface-variant/30" placeholder="Jan Kowalski" type="text" />
              </div>
              <div className="relative">
                <label className="block font-label text-[10px] uppercase tracking-widest font-bold text-primary mb-2">Email</label>
                <input className="w-full bg-transparent border-0 border-b border-outline-variant/20 focus:ring-0 focus:border-primary py-3 px-0 transition-colors placeholder:text-on-surface-variant/30" placeholder="jan@przyklad.pl" type="email" />
              </div>
            </div>
            <div className="relative">
              <label className="block font-label text-[10px] uppercase tracking-widest font-bold text-primary mb-2">Temat</label>
              <select className="w-full bg-transparent border-0 border-b border-outline-variant/20 focus:ring-0 focus:border-primary py-3 px-0 transition-colors">
                <option>Ogólne zapytanie</option>
                <option>Oferta dla firm</option>
                <option>Eventy jednostkowe</option>
                <option>Wyjazdy integracyjne</option>
              </select>
            </div>
            <div className="relative">
              <label className="block font-label text-[10px] uppercase tracking-widest font-bold text-primary mb-2">Wiadomość</label>
              <textarea className="w-full bg-transparent border-0 border-b border-outline-variant/20 focus:ring-0 focus:border-primary py-3 px-0 transition-colors placeholder:text-on-surface-variant/30 resize-none" placeholder="W czym możemy Ci pomóc?" rows={4}></textarea>
            </div>
            <button className="w-full md:w-auto px-12 py-5 rounded-full bg-gradient-to-b from-[#9E381A] to-[#FFA358] text-white font-label font-bold uppercase tracking-widest text-sm shadow-xl shadow-primary-container/20 hover:scale-105 transition-transform duration-400">
              Wyślij wiadomość
            </button>
          </form>
        </div>

        {/* Side Info Column */}
        <div className="lg:col-span-5 space-y-8">
          {/* Direct Contact */}
          <div className="bg-surface-container-low rounded-[2rem] p-8 space-y-6">
            <div>
              <h3 className="font-label text-[10px] uppercase tracking-widest font-bold text-primary mb-4">Bezpośredni kontakt</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>call</span>
                  <span className="font-body text-lg text-on-surface">+48 500 600 700</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary-container" style={{ fontVariationSettings: "'FILL' 1" }}>mail</span>
                  <span className="font-body text-lg text-on-surface">hello@pilatique.pl</span>
                </div>
              </div>
            </div>
            <div className="pt-6 border-t border-outline-variant/10">
              <h3 className="font-label text-[10px] uppercase tracking-widest font-bold text-primary mb-4">Social media</h3>
              <div className="flex gap-4">
                <a className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary-container hover:bg-primary-container hover:text-white transition-all duration-400" href="#">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>camera</span>
                </a>
                <a className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-primary-container hover:bg-primary-container hover:text-white transition-all duration-400" href="#">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>public</span>
                </a>
              </div>
            </div>
          </div>

          {/* Studio Card */}
          <div className="bg-surface-container-highest rounded-[2rem] overflow-hidden">
            <div className="p-8">
              <h3 className="font-label text-[10px] uppercase tracking-widest font-bold text-primary mb-4">Godziny otwarcia</h3>
              <div className="space-y-2">
                <div className="flex justify-between font-body text-sm">
                  <span className="text-on-surface-variant">Poniedziałek - Piątek</span>
                  <span className="font-bold">07:00 - 21:00</span>
                </div>
                <div className="flex justify-between font-body text-sm">
                  <span className="text-on-surface-variant">Sobota</span>
                  <span className="font-bold">09:00 - 16:00</span>
                </div>
                <div className="flex justify-between font-body text-sm">
                  <span className="text-on-surface-variant">Niedziela</span>
                  <span className="font-bold">Zamknięte</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Locations Section */}
      <section className="max-w-6xl mx-auto mt-20 mb-20 px-6 md:px-16 lg:px-24">
        <h2 className="font-headline text-4xl text-primary mb-12 italic">Nasze studia</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Warszawa */}
          <div className="group relative bg-surface-container rounded-[2rem] overflow-hidden">
            <div className="aspect-video relative">
              <img
                className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-700"
                alt="Stylized map showing Warsaw city center location"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-8FgJJfDPycTtSA7m_Qcviwh8Yi5BL-ZdTOYHle2RV9IqBu-bwdbIaNpRt12AzUgnhyQKzL185PM7fegrpsoCbfrw0p6xskvGnteKZPBEtP2FyhHFb8Aqq15ik4qABsMoeBKYFTClQKW4RHTRw-jGScsaKzJJQcb05y0AG6lITeuD-c8VPJLawa7_sUaeG4Xg_9AyAVa4YblPpwjiSMgjIk6b58srB_2XULQx1-4QLBYDBnpr4nhcNvETswrgU80YD-eOdWPQEKUz"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
            </div>
            <div className="p-8">
              <h3 className="font-headline text-2xl text-primary mb-2">Wrocław</h3>
              <p className="font-body text-on-surface-variant mb-6" style={{ height: "24px" }}></p>
              <button className="flex items-center gap-2 text-primary font-label text-xs font-bold uppercase tracking-widest hover:gap-4 transition-all">
                Pokaż na mapie
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Kraków */}
          <div className="group relative bg-surface-container rounded-[2rem] overflow-hidden">
            <div className="aspect-video relative">
              <img
                className="w-full h-full object-cover opacity-80 grayscale group-hover:grayscale-0 transition-all duration-700"
                alt="Stylized map showing Krakow Kazimierz district location"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvURPcBlSrTPu0f0kByTxQhqSRP4pDpqyHFP0uOZZTH492Kh8goEjF63Pe9rAdwTvemH8KYpiq7UIkw7h8_d2_t5nJyQWFAn96yrmTsqWJfNhg7DpYt1YR8DIYyp1EEMHiIFWINwB7UeYMEumFL7hdC6_-KOV9Ei0Uqd8Hc7_hO2O29gDHQTFbMr5FQbrXu9WWarF7pn9-4JLmRa9XbbLcW4HjUm2oOK2971ER0iG7Gkx0sIelI-PlKgQL-dxsc40JqQB7xqxILSp5"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container via-transparent to-transparent"></div>
            </div>
            <div className="p-8">
              <h3 className="font-headline text-2xl text-primary mb-2">Kraków</h3>
              <p className="font-body text-on-surface-variant mb-6">ul. Miodowa 12, 31-055 Kraków</p>
              <button className="flex items-center gap-2 text-primary font-label text-xs font-bold uppercase tracking-widest hover:gap-4 transition-all">
                Pokaż na mapie
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
