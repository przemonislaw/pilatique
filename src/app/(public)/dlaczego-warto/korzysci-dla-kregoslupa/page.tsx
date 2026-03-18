import Link from "next/link";
import Image from "next/image";

export default function SpineBenefitsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-8 md:px-20 overflow-hidden bg-surface-container-low">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 z-10">
            <span className="font-label uppercase tracking-widest text-primary font-bold text-sm block mb-4">Zdrowie i Profilaktyka</span>
            <h2 className="font-headline text-5xl md:text-7xl text-on-background leading-[1.1] mb-8 tracking-tighter">
              Korzyści dla <br /> <span className="italic text-primary">kręgosłupa</span>
            </h2>
            <p className="font-body text-xl text-on-surface-variant max-w-lg leading-relaxed mb-10">
              Pilates to nie tylko estetyka, to przede wszystkim inżynieria ruchu. Wzmacniając stabilizację centralną, odciążamy kręgosłup i eliminujemy codzienne dolegliwości bólowe.
            </p>
            <Link href="/kontakt" className="inline-flex items-center gap-3 bg-white border border-outline-variant/30 text-primary px-10 py-5 rounded-full font-label font-bold uppercase tracking-widest text-xs shadow-sm hover:shadow-lg transition-all duration-400 group">
              <span>Umów konsultację</span>
              <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
          <div className="flex-1 relative w-full">
            <div className="w-full aspect-square bg-white rounded-full overflow-hidden shadow-2xl p-8 border-[16px] border-surface-container-highest">
              <img
                alt="Detailed anatomy of spine or pilates stretch"
                className="w-full h-full object-cover rounded-full"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYKNHmMYFklFhYMzCvAF6V3n0wIlWvJ4OIXo-JoGLzc_C8h38tH7IndYpC4e1yzEM_JRj9LH4xD6Znn_BS0uTb3qOzgWpukihNV0bovcfy7Irg4-s3O2bHawxYz71nRx7kqvplLGvMN0AyvRzZJt2l1TYhUsODNKGnYTwwwM55INqyYS7co_Au45loXHd-jGY0X_1UjJi5m7JO47oXYcmBU5iFeVccR9SL7J-x1q5SkD2MHWl5Ghxvo6vyr1hgma4TnbWOuSL9zYZ6"
              />
            </div>
            {/* Motion Orb Overlay */}
            <div className="absolute -bottom-10 -right-10 w-48 h-48 rounded-full bg-secondary-container opacity-20 blur-3xl animate-pulse -z-10"></div>
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="py-24 px-8 md:px-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center">
            <h3 className="font-headline text-4xl md:text-5xl text-on-background">Jak Pilatique zmienia ciało?</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            
            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 rounded-full bg-primary-container text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-3xl">medical_services</span>
              </div>
              <div>
                <h4 className="font-headline text-2xl mb-4">Dekompresja dysków</h4>
                <p className="font-body text-on-surface-variant leading-relaxed">Dzięki precyzyjnemu wydłużaniu kręgosłupa i tworzeniu przestrzeni między kręgami, zmniejszamy nacisk na dyski, co przynosi ulgę osobom pracującym w trybie siedzącym.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 rounded-full bg-primary-container text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-3xl">self_improvement</span>
              </div>
              <div>
                <h4 className="font-headline text-2xl mb-4">Siła środka (core)</h4>
                <p className="font-body text-on-surface-variant leading-relaxed">Mocne mięśnie brzucha, miednicy i pleców pełnią funkcję naturalnego gorsetu. To one przejmują ciężar, który wcześniej obciążał wyizolowane partie kręgosłupa.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 rounded-full bg-primary-container text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-3xl">sync</span>
              </div>
              <div>
                <h4 className="font-headline text-2xl mb-4">Równowaga mięśniowa</h4>
                <p className="font-body text-on-surface-variant leading-relaxed">Asymetria napięć jest główną przyczyną bólu. Metoda Pilatique koryguje wzorce ruchowe, przywracając ciału jego naturalną, fizjologiczną taśmę powięziową.</p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-16 h-16 rounded-full bg-primary-container text-white flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-3xl">accessibility_new</span>
              </div>
              <div>
                <h4 className="font-headline text-2xl mb-4">Elastyczność powięzi</h4>
                <p className="font-body text-on-surface-variant leading-relaxed">Regularna praktyka pobudza hydratację powięzi, sprawiając, że kręgosłup odzyskuje swoją sprężystość i staje się mniej podatny na kontuzje.</p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </>
  );
}
