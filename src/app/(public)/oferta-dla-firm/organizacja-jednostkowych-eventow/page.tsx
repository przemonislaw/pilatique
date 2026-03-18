import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function OrganizationEventsPage() {
  return (
    <>
      <section className="mb-20 pt-24 md:pt-16 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-end">
          <div className="flex-1">
            <h2 className="font-headline text-5xl md:text-7xl text-primary leading-tight mb-8">
              Wyjątkowe wydarzenia <span className="italic block">szyte na miarę</span>
            </h2>
            <p className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed">
              Tworzymy ekskluzywne spotkania, które łączą precyzję Pilatesu z atmosferą luksusowego wellness. Każdy event to unikalna podróż do wnętrza siły i spokoju.
            </p>
          </div>
          <div className="hidden md:flex w-32 h-32 rounded-full border border-outline-variant/30 items-center justify-center p-4">
            <span className="material-symbols-outlined text-primary text-4xl animate-pulse" style={{ fontVariationSettings: "'FILL' 1" }}>wb_sunny</span>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="bg-surface-container-low p-10 rounded-xl shadow-[0_24px_48px_-12px_rgba(126,33,4,0.08)] group hover:bg-surface-container-high transition-colors duration-500">
          <span className="material-symbols-outlined text-primary text-3xl mb-6">business</span>
          <h3 className="font-headline text-2xl mb-4 text-primary">Corporate events</h3>
          <p className="font-body text-on-surface-variant leading-relaxed">Luksusowe warsztaty teambuildingowe skupione na ergonomii pracy i redukcji stresu kadry zarządzającej.</p>
        </div>
        <div className="bg-primary-container p-10 rounded-xl shadow-2xl relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          <span className="material-symbols-outlined text-white text-3xl mb-6">celebration</span>
          <h3 className="font-headline text-2xl mb-4 text-white">Birthday workshops</h3>
          <p className="font-body text-white/80 leading-relaxed">Urodziny w stylu "Glow". Sesja Pilatesu przy świecach, a po niej rytuały regeneracyjne i zdrowe poczęstunki.</p>
        </div>
        <div className="bg-surface-container-low p-10 rounded-xl shadow-[0_24px_48px_-12px_rgba(126,33,4,0.08)] group hover:bg-surface-container-high transition-colors duration-500">
          <span className="material-symbols-outlined text-primary text-3xl mb-6">groups</span>
          <h3 className="font-headline text-2xl mb-4 text-primary">Private groups</h3>
          <p className="font-body text-on-surface-variant leading-relaxed">Kameralne spotkania dla przyjaciół szukających aktywnego wypoczynku w estetycznych wnętrzach naszego studia.</p>
        </div>
      </section>

      <section className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-24 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="space-y-12">
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl">
              <img
                className="w-full h-full object-cover grayscale-[30%] hover:grayscale-0 transition-all duration-700"
                alt="High-end pilates studio"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBclFIeQzqyjDEH0uHF7Sqp7V6fuxNp5BEX40D4JotiIY-X7fp35o-jY0C2Id1-Xi1GUZzyqxmZ7Yh24x-IUgMs08HX3GP6ZX8-FNHSdfCMa9jF5gJzaulGdsDQqKZ1EjIYr5lmlnoFuWkU61DszXtIQzPf0WrPkiSnqnSRpsKEywkrJqzFlqny6SwIt1ZPzPxmhVjCWxcZ4AKZWNFmhG7x3O1qT7DwoquZob_OfsXdd2ClxbmB10Pamm4z006NX3DDQUmecfpWzEN6"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-secondary-container rounded-full flex items-center justify-center p-8 shadow-[0_24px_48px_-12px_rgba(126,33,4,0.08)] hidden md:flex">
              <p className="font-label text-center text-[10px] uppercase tracking-widest font-bold leading-tight">Estetyka Spotkań • Ruch • Harmonia</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 h-64">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img className="w-full h-full object-cover" alt="Detail" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYKNHmMYFklFhYMzCvAF6V3n0wIlWvJ4OIXo-JoGLzc_C8h38tH7IndYpC4e1yzEM_JRj9LH4xD6Znn_BS0uTb3qOzgWpukihNV0bovcfy7Irg4-s3O2bHawxYz71nRx7kqvplLGvMN0AyvRzZJt2l1TYhUsODNKGnYTwwwM55INqyYS7co_Au45loXHd-jGY0X_1UjJi5m7JO47oXYcmBU5iFeVccR9SL7J-x1q5SkD2MHWl5Ghxvo6vyr1hgma4TnbWOuSL9zYZ6" />
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg mt-8">
              <img className="w-full h-full object-cover" alt="Spa area" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJ4vxeNQm5-s5NTrU-hHQJgPMaV3Y_KKQh-8WfgPR_mO9w8cKZN2XTA0WTZvogkdcwEL59DlMRmwfTRkP7r4YQGzXuFSVU7BGscqfChb79Bs6MxpXPbG8-rXgdc_2oybu_lMishPIwWLCiiZCxWy7gzTwnhvNDpzQ2E0Xjtoz-o4wRCJTuIMshnyTx_7I4MYIGrz_1nwfxiJW_nABlomsY9TcCy_9-cRyRuZ-4uZ353vbXpy3LElfRmd-luOz4Ayzdq2Dqf-Zgo5wb" />
            </div>
          </div>
        </div>
        <div className="bg-surface-container-highest p-12 md:p-16 rounded-3xl shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <span className="material-symbols-outlined text-9xl">mail</span>
          </div>
          <h3 className="font-headline text-4xl text-primary mb-12 relative z-10">Zapytaj o twój event</h3>
          <div className="relative z-10">
              <ContactForm />
          </div>
        </div>
      </section>

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
              <p className="text-white font-label text-[10px] tracking-widest uppercase">Warsztaty Corporate Glow 2025</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
