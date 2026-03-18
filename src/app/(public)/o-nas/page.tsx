import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <>
      {/* Hero Section: Nasza Historia */}
      <section className="relative min-h-[921px] flex items-center px-8 md:px-20 py-20 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full max-w-7xl mx-auto">
          <div className="lg:col-span-6 z-10">
            <span className="font-label uppercase tracking-widest text-primary font-bold text-xs mb-4 block">
              Ekskluzywne Studio
            </span>
            <h2 className="font-headline text-6xl md:text-8xl text-on-background leading-tight mb-8 tracking-tighter">
              Nasza <br /> <span className="italic text-primary-container">historia</span>
            </h2>
            <p className="font-body text-xl text-on-surface-variant max-w-md leading-relaxed">
              Od pasji do precyzji, aż po stworzenie przestrzeni, gdzie luksus spotyka się z ruchem. Pilatique to więcej niż studio – to manifest świadomego życia.
            </p>
            <div className="mt-12">
              <Link href="/oferta-dla-firm" className="inline-flex bg-primary-container text-white px-10 py-5 rounded-full font-label font-bold uppercase tracking-widest text-xs hover:shadow-lg transition-all duration-400 items-center space-x-3 group">
                <span>Poznaj ofertę</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden shadow-2xl relative z-0 relative">
              <img
                className="w-full h-full object-cover"
                alt="Minimalist high-end pilates studio interior with sunlight"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpOgISYCeVfrNAdULJ1dOqM6PpUXMLF3VDaF8JpttyYsITqCb-hAADJinVq1-8Moz6e2twVrxrlH0eGqn1w3ki2OPBXrSjumtLVzd89fwks9BKziItnF_ZkILC-JuX_iNpWei5Qc88CxJYhA8hBVUX1-8zyuolvMA0JMiv-zA8jkyZc5YngrRAIWs52KIAdEcKZ_3RJtk6cCr4ih9Nfk639JMuylOOvn1b-d_E7hrcawZIP6evTjH0IqwoQdqKXm03kD-bpjwel8RM"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-surface-container-highest rounded-2xl p-8 hidden md:block z-20 shadow-xl border border-white/20 backdrop-blur-sm">
              <p className="font-headline italic text-2xl text-primary leading-tight">"Ruch jest esencją życia."</p>
              <p className="font-label text-[10px] uppercase tracking-widest text-on-surface-variant mt-4 font-bold">Est. 2018</p>
            </div>
          </div>
        </div>
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-primary-fixed/30 rounded-full blur-[120px] -z-10"></div>
      </section>

      {/* Founder Story: Asymmetric Editorial Layout */}
      <section className="bg-surface-container-low py-32 px-8 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 relative">
            <div className="aspect-square w-full max-w-md mx-auto rounded-full overflow-hidden border-[12px] border-white shadow-2xl relative bg-white">
              <img
                className="w-full h-full object-contain p-8 mix-blend-multiply"
                alt="Pilatique Logo"
                src="/Logo.jpeg"
              />
            </div>
            {/* Motion Orb Background Element */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-secondary-container/20 to-primary-container/10 rounded-full blur-3xl -z-10 animate-pulse"></div>
          </div>
          <div className="order-1 lg:order-2">
            <h3 className="font-headline text-5xl md:text-6xl text-on-background mb-8 leading-tight italic">Wizja Pilatique</h3>
            <div className="space-y-6 text-on-surface-variant font-body text-lg leading-relaxed">
              <p>Dla Anny Pilates nigdy nie był tylko zestawem ćwiczeń. To język, w którym ciało komunikuje się z umysłem, budując siłę nie tylko fizyczną, ale i mentalną.</p>
              <p>Zanim powstało Pilatique, Anna spędziła lata na doskonaleniu techniki w najlepszych światowych akademiach. Jej wizją było stworzenie miejsca, które celebruje każdy milimetr precyzyjnego ruchu.</p>
              <blockquote className="border-l-4 border-primary-container pl-6 py-2 italic font-headline text-2xl text-primary mt-8">
                "W Pilatique nie budujemy mięśni. Budujemy świadomość, która promieniuje na całe Twoje życie."
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section: Bento-ish Grid */}
      <section className="py-32 px-8 md:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <span className="font-label uppercase tracking-widest text-primary font-bold text-xs mb-4 block">Nasz Kręgosłup</span>
            <h3 className="font-headline text-5xl md:text-7xl text-on-background">Fundamenty <span className="italic">Pilatique</span></h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Value 1 */}
            <div className="bg-surface-container-highest p-12 rounded-3xl flex flex-col items-center text-center group hover:bg-white transition-colors duration-500 shadow-sm hover:shadow-xl">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary-container text-3xl">diamond</span>
              </div>
              <h4 className="font-headline text-3xl mb-4 group-hover:text-primary transition-colors">Jakość</h4>
              <p className="font-body text-on-surface-variant group-hover:text-on-surface transition-colors">Wykorzystujemy wyłącznie certyfikowany sprzęt Peak Pilates oraz materiały premium, dbając o Twój najwyższy komfort.</p>
            </div>
            {/* Value 2 */}
            <div className="bg-surface-container-highest p-12 rounded-3xl flex flex-col items-center text-center group hover:bg-white transition-colors duration-500 shadow-sm hover:shadow-xl">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary-container text-3xl">target</span>
              </div>
              <h4 className="font-headline text-3xl mb-4 group-hover:text-primary transition-colors">Precyzja</h4>
              <p className="font-body text-on-surface-variant group-hover:text-on-surface transition-colors">Wierzymy w jakość ruchu ponad jego ilość. Każde powtórzenie jest krokiem w stronę doskonałej postury.</p>
            </div>
            {/* Value 3 */}
            <div className="bg-surface-container-highest p-12 rounded-3xl flex flex-col items-center text-center group hover:bg-white transition-colors duration-500 shadow-sm hover:shadow-xl">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary-container text-3xl">person</span>
              </div>
              <h4 className="font-headline text-3xl mb-4 group-hover:text-primary transition-colors">Indywidualizm</h4>
              <p className="font-body text-on-surface-variant group-hover:text-on-surface transition-colors">Twój plan treningowy jest tak unikalny jak Twoje DNA. Słuchamy potrzeb Twojego ciała i adaptujemy proces.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-8 md:px-20 pb-32">
        <div className="max-w-7xl mx-auto bg-gradient-to-r from-primary-fixed to-secondary-fixed rounded-[40px] p-16 md:p-24 relative overflow-hidden shadow-[0_40px_100px_rgba(126,33,4,0.1)]">
          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <h3 className="font-headline text-5xl md:text-6xl text-on-background mb-8">Rozpocznij swoją drogę do <span className="italic">blasku</span>.</h3>
            <p className="text-on-surface-variant text-xl font-body mb-12">Zarezerwuj swoją pierwszą, indywidualną sesję konsultacyjną i poczuj różnicę już dziś.</p>
            <Link href="/kontakt" className="inline-block bg-primary text-white px-12 py-6 rounded-full font-label font-bold uppercase tracking-widest text-sm hover:bg-primary-container transition-colors shadow-xl">
              Umów konsultację
            </Link>
          </div>
          {/* Abstract light glow */}
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white rounded-full blur-[150px] opacity-40 -translate-x-1/2 translate-y-1/2"></div>
        </div>
      </section>
    </>
  );
}
