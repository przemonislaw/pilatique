import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function OrganizationEventsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="mb-20 pt-24 md:pt-16 px-6 md:px-20 max-w-7xl mx-auto mt-16">
        <div className="flex flex-col md:flex-row gap-12 items-end">
          <div className="flex-1">
            <span className="font-label uppercase tracking-widest text-[#9E381A] font-bold text-sm block mb-4">Potion & Restore</span>
            <h2 className="font-headline text-5xl md:text-7xl text-primary leading-tight mb-8">
              Wyjątkowe wydarzenia <span className="italic block text-[#9E381A]">szyte na miarę</span>
            </h2>
            <p className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              Połączenie łagodnego Pilatesu i kreatywnego experience, zaprojektowane z myślą o regeneracji i przywróceniu energii. Format stworzony na wieczory panieńskie, urodziny i integracje zespołów.
            </p>
          </div>
          <div className="hidden md:flex w-32 h-32 rounded-full border border-outline-variant/30 items-center justify-center p-4">
            <span className="material-symbols-outlined text-primary text-4xl animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>wb_sunny</span>
          </div>
        </div>
      </section>

      {/* Struktura Eventu (Timeline style mapped from markdown) */}
      <section className="py-24 px-6 md:px-20 bg-surface-container-low mb-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h3 className="font-headline text-4xl text-primary">Struktura eventu</h3>
            <p className="text-on-surface-variant mt-4 font-body text-lg">Zaprojektowane by dodać energii i kreatywności.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:bg-surface-container-high transition-colors duration-500">
              <span className="material-symbols-outlined text-primary text-3xl mb-4">self_improvement</span>
              <h4 className="font-headline text-2xl mb-2 text-primary">Wprowadzenie</h4>
              <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-4 block">15 min</span>
              <p className="font-body text-sm text-on-surface-variant">Spokojne wejście w ruch, oddech, mobilizacja, wyciszenie napięć. Przygotowanie ciała do pracy regeneracyjnej.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:bg-surface-container-high transition-colors duration-500">
              <span className="material-symbols-outlined text-primary text-3xl mb-4">waves</span>
              <h4 className="font-headline text-2xl mb-2 text-primary">Restore Flow</h4>
              <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-4 block">60 min</span>
              <p className="font-body text-sm text-on-surface-variant">Regenerujący Pilates. Nacisk na krążenie, płynność ruchu i oddech. Flow dodaje energii i nie męczy – idealne na wieczór.</p>
            </div>
            <div className="bg-primary-container p-8 rounded-xl shadow-xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <span className="material-symbols-outlined text-white text-3xl mb-4">science</span>
              <h4 className="font-headline text-2xl mb-2 text-white">Potion Experience</h4>
              <span className="font-label text-xs text-white/80 uppercase tracking-widest mb-4 block">90 min</span>
              <p className="font-body text-sm text-white/90">Wybór olejków, zapachów i samodzielne przygotowanie autorskiego produktu. Każdy uczestnik wychodzi ze spersonalizowanym olejkiem.</p>
            </div>
            <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:bg-surface-container-high transition-colors duration-500">
              <span className="material-symbols-outlined text-primary text-3xl mb-4">spa</span>
              <h4 className="font-headline text-2xl mb-2 text-primary">Regeneracja</h4>
              <span className="font-label text-xs uppercase tracking-widest text-on-surface-variant mb-4 block">15 min</span>
              <p className="font-body text-sm text-on-surface-variant">Wyciszenie i spokojne, harmonijne zakończenie całego wydarzenia.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Details and Visuals */}
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <img
                className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                alt="High-end pilates studio"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBclFIeQzqyjDEH0uHF7Sqp7V6fuxNp5BEX40D4JotiIY-X7fp35o-jY0C2Id1-Xi1GUZzyqxmZ7Yh24x-IUgMs08HX3GP6ZX8-FNHSdfCMa9jF5gJzaulGdsDQqKZ1EjIYr5lmlnoFuWkU61DszXtIQzPf0WrPkiSnqnSRpsKEywkrJqzFlqny6SwIt1ZPzPxmhVjCWxcZ4AKZWNFmhG7x3O1qT7DwoquZob_OfsXdd2ClxbmB10Pamm4z006NX3DDQUmecfpWzEN6"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-secondary-container rounded-full flex items-center justify-center p-8 shadow-[0_24px_48px_-12px_rgba(126,33,4,0.08)] hidden md:flex">
              <p className="font-label text-center text-[10px] uppercase tracking-widest font-bold leading-tight">Estetyka Spotkań • Ruch • Harmonia</p>
            </div>
          </div>
        </div>
        
        <div className="space-y-10">
          <div>
            <h3 className="font-headline text-3xl mb-4 text-primary">Co dostajesz i co zapewniamy?</h3>
            <ul className="space-y-3 font-body text-on-surface-variant">
              <li className="flex gap-3"><span className="material-symbols-outlined text-primary text-xl">check</span> Certyfikowanego instruktora i autorski scenariusz Restore Flow.</li>
              <li className="flex gap-3"><span className="material-symbols-outlined text-primary text-xl">check</span> Prowadzenie części Potion i materiały do olejków.</li>
              <li className="flex gap-3"><span className="material-symbols-outlined text-primary text-xl">check</span> Reformery lub maty z piękną, estetyczną oprawą.</li>
              <li className="flex gap-3"><span className="material-symbols-outlined text-primary text-xl">check</span> Pełną sesję oraz własny olejek na pamiątkę.</li>
            </ul>
          </div>
          
          <div className="bg-surface-container p-8 rounded-2xl border border-outline-variant/20">
            <h4 className="font-label font-bold uppercase tracking-widest text-[#9E381A] mb-4 text-xs">Informacje Organizacyjne</h4>
            <div className="space-y-4">
              <div>
                <strong className="block text-sm mb-1 text-primary">Customizacja:</strong>
                <p className="text-sm text-on-surface-variant">Regeneracyjny/energetyzujący trening, wybór olejków, czas trwania, język (PL/EN).</p>
              </div>
              <div>
                <strong className="block text-sm mb-1 text-primary">Forma i Koszt (Orientacyjnie):</strong>
                <p className="text-sm text-on-surface-variant">
                  • <strong>Prywatnie:</strong> od 260-320 zł/os (maty), od 320-400 zł/os (reformery do 6 osób).<br/>
                  • <strong>Dla firm:</strong> od 2400-3600 zł/event (maty), od 3600-4800 zł/event (reformery).
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-surface-container-highest p-8 md:p-12 rounded-3xl shadow-xl relative overflow-hidden">
            <h3 className="font-headline text-3xl text-primary mb-8 relative z-10">Zarezerwuj swój event</h3>
            <div className="relative z-10">
                <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Inspirations section kept intact as well */}
      <section className="mb-24 px-6 md:px-20 max-w-7xl mx-auto">
        <h4 className="font-headline text-3xl text-primary mb-12 text-center">Inspiracje i realizacje</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:h-[600px]">
          <div className="col-span-2 md:col-span-1 h-64 md:h-full bg-surface-container rounded-2xl overflow-hidden group relative">
            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Inspiration 1" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO9MAcELttNCYvZkg49rQQBM74DyloLcbGBOM6uOVTu1E6hgS7dYKMAugsEZrjmOf1BfCpiTVyByoDANVeIcFinyIj6TtYcJ1gdsbn6QVirxHa8I7iYc1Xh0awOgOHninU8l83Hb8r3MUHzceR0M2MBmdqpdVcbus-Nh2OtZP-2gM-iQ_FaMU_3qIiG5PgfP9EDSKJ5NTOdMgu6QZNWkDNMw49nNameJt7La-2fyBflyhNzxBHPpl0_d_fvRjaOpg54yKgS75pzQzq" />
            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
          <div className="h-64 md:h-full flex flex-col gap-4 col-span-2 md:col-span-1">
            <div className="flex-1 bg-surface-container rounded-2xl overflow-hidden group relative">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Inspiration 2" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAPNtxChbGUVnsdYi_90LWwUMViXVlm4pmbGLUj64UsxWcHwHJYfin5tk3AbAhpyxbZgYrU30xyc9IIhDUUXT6-Pwt4ZYClI3ibF42z7dh8_X4noHGjp0sePYcM9e2-GTqo6rVVa99ki-GwEIsj6_8NfuD4UY7QSd1EeZSRqOwIbHk6jrb8MQQdqceDWobLX3WSKA0mQjbSzpUkkooxKZjRuPG4izBebQALSvRM0veFsInZSbHng1xjHm9caob4PilROoWquqs9hX7Q" />
            </div>
            <div className="flex-1 bg-surface-container rounded-2xl overflow-hidden group relative">
              <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Inspiration 3" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWn7_rb_XUgbx0IBUKHnosy0z5h-ifvqXN5VWvoyrNZurK48PpdJRZ0luseAo3wyv2XuMZGuPI11iBgv7XxTh67mdl_LilSzdjTmoWAyC5Pi0i30joxGbbYuamqEmBmKKOlC8122EgmvH6iABhrEnHkM5_B4Etmm-_I1LfhgcZ9UbgVG42PhejckqyV7FsuBjNKWw_zInF2F4DP0efviE8v4CoPVAWQcH-dtGfK986_32RjfRzPfo9S5SrRgm-OyzfNrlymkuQxVW-" />
            </div>
          </div>
          <div className="col-span-2 md:col-span-2 h-80 md:h-full bg-surface-container rounded-2xl overflow-hidden group relative">
            <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="Inspiration 4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbD44igjlm9Dl0F1Yx-y-W9zJgjoPkjX8eWRdwuGadCCbTXvLnVtQvv_4TOIGzP8GSTWaYSwqe3W4DoE5THASvqRI-EVBiLaq2OHWxKoWP1zDTIUqLrPsfvBGOyP7tY9XMBTJEVko4mRDrSA_f7PL3D4fK4rWreEVwN5AkBd2Xq8Wk1FrvGj-IUShKcu9WRMq_7yaadv3C9W_v0_xh84_ySpjBZ-rxaKQxAr8TSRKm-zXiosu6viYSjuX28XKzPJs5Cq7BKJb6snqb" />
            <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/60 to-transparent">
              <p className="text-white font-label text-[10px] tracking-widest uppercase">Warsztaty Potion & Restore 2025</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
