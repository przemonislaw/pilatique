import Link from "next/link";
import Image from "next/image";

export default function PostureImprovementPage() {
  return (
    <>
      <section className="relative min-h-[800px] flex items-center justify-center px-8 text-center bg-surface-container-highest overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8F6]/80 via-transparent to-[#FFF8F6] z-10"></div>
          <img
            className="w-full h-full object-cover grayscale-[20%] opacity-40 mix-blend-multiply"
            alt="Pilates studio atmosphere"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpOgISYCeVfrNAdULJ1dOqM6PpUXMLF3VDaF8JpttyYsITqCb-hAADJinVq1-8Moz6e2twVrxrlH0eGqn1w3ki2OPBXrSjumtLVzd89fwks9BKziItnF_ZkILC-JuX_iNpWei5Qc88CxJYhA8hBVUX1-8zyuolvMA0JMiv-zA8jkyZc5YngrRAIWs52KIAdEcKZ_3RJtk6cCr4ih9Nfk639JMuylOOvn1b-d_E7hrcawZIP6evTjH0IqwoQdqKXm03kD-bpjwel8RM"
          />
        </div>
        
        <div className="relative z-20 max-w-3xl">
          <span className="font-label uppercase tracking-widest text-primary font-bold text-sm block mb-6">Biomiomechanika Elegancji</span>
          <h1 className="font-headline text-6xl md:text-8xl text-on-background leading-tight mb-8">
            Poprawa <span className="italic">postury</span>
          </h1>
          <p className="font-body text-xl text-on-surface-variant leading-relaxed mb-12">
            Prawidłowa postawa to nie tylko zdrowie, ale mowa ciała sygnalizująca pewność siebie. Przywrócimy Ci naturalną pionizację, odblokowując swobodę i wdzięk w każdym Twoim ruchu.
          </p>
          <Link href="/o-nas" className="inline-block border-b-2 border-primary text-primary font-label font-bold uppercase tracking-widest text-sm pb-1 hover:text-primary-container transition-colors">
            Poznaj naszą filozofię
          </Link>
        </div>
      </section>

      <section className="py-24 px-8 md:px-20 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          <div className="w-full lg:w-1/2 order-2 lg:order-1 relative">
             <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl relative">
              <img
                className="w-full h-full object-cover"
                alt="Woman standing straight pilates pose"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBLLS4kCYiLjBMox9mai5BirCq12Ga1-BaQFhqf4_fd088gupGTPnP9ukDSFxxfLEzlEJTPE1UugGvz1psnVmovcgFhNV8wLqiXVqEl2g4TeI_P69LgPJ2gzMKghMas88vcYEbpn3-RjDFlETph3DqZPKZI48N6DnleoSqZ3DYKoZu8YjrBT4lDEqnf9VcDiT52ucL6nJ3ogivw_y-pPbAltIlcnm1tY-LcCFGxgw6XGqB0VAT-NzPEd2j0fMZiw-kwXrxBLVkSvg8s"
              />
            </div>
            {/* Elegant decor line */}
            <div className="absolute top-10 -left-10 w-20 h-full border-l border-t border-outline-variant/30 rounded-tl-3xl -z-10"></div>
          </div>
          <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-12">
            <div>
              <h3 className="font-headline text-4xl mb-6 text-on-background">Fundament pewności siebie</h3>
              <p className="font-body text-lg text-on-surface-variant leading-relaxed">
                Godziny przed komputerem, stres i pośpiech zamykają klatkę piersiową i zaokrąglają barki. Metoda Pilatique to swoisty rewers tego procesu. Uświadamiamy Ci jak "otworzyć" ciało, korygując dysbalans mięśniowy.
              </p>
            </div>
            
            <ul className="space-y-8">
              <li className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary text-2xl mt-1">check_circle</span>
                <div>
                  <h4 className="font-headline text-2xl mb-2">Pinezka w dół</h4>
                  <p className="font-body text-sm text-on-surface-variant">Uczymy opuszczania łopatek i uwalniania napięć z odcinka szyjnego.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary text-2xl mt-1">check_circle</span>
                <div>
                  <h4 className="font-headline text-2xl mb-2">Neutralna miednica</h4>
                  <p className="font-body text-sm text-on-surface-variant">Korekta przodopochylenia chroniąca odcinek lędźwiowy i aktywująca mięśnie pośladkowe.</p>
                </div>
              </li>
              <li className="flex gap-4 items-start">
                <span className="material-symbols-outlined text-primary text-2xl mt-1">check_circle</span>
                <div>
                  <h4 className="font-headline text-2xl mb-2">Wydłużenie osiowe</h4>
                  <p className="font-body text-sm text-on-surface-variant">Wrażenie, jakbyś z każdym wdechem stawał(a) się o kilka centymetrów wyższa.</p>
                </div>
              </li>
            </ul>
            
            <Link href="/kontakt" className="inline-flex bg-primary-container text-white px-10 py-5 rounded-full font-label font-bold uppercase tracking-widest text-xs hover:shadow-lg transition-transform hover:scale-105 duration-400">
              Sprawdź Pakiety Treningowe
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
