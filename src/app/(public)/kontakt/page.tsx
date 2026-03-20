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
      <div className="max-w-3xl mx-auto px-6 md:px-16 lg:px-24 mb-32">
        {/* Contact Form Card */}
        <div className="bg-surface-container-lowest rounded-[2rem] p-8 md:p-12 shadow-[0_24px_48px_rgba(41,23,18,0.04)]">
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
      </div>

    </>
  );
}
