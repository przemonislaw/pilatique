import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full py-16 px-8 flex flex-col items-center justify-center space-y-8 bg-surface-container-low border-t border-primary/10">
      <div className="font-headline italic text-3xl text-primary">PILATIQUE</div>
      <nav className="flex flex-wrap justify-center gap-8">
        <Link href="https://instagram.com" className="font-label text-sm tracking-wide uppercase text-on-surface/50 hover:text-primary transition-colors">Instagram</Link>
        <Link href="https://facebook.com" className="font-label text-sm tracking-wide uppercase text-on-surface/50 hover:text-primary transition-colors">Facebook</Link>
      </nav>
      <div className="text-[10px] font-label font-bold tracking-[0.2em] text-on-surface/40 uppercase text-center">
        © 2026 PILATIQUE STUDIO. THE RADIANT CORE.
      </div>
    </footer>
  );
}
