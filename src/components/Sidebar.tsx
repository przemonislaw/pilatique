import Link from "next/link";

const nav = [
  { href: "/o-nas", label: "O nas" },
  { href: "/oferta-dla-firm", label: "Oferta dla firm" },
  { href: "/dlaczego-warto", label: "Dlaczego warto" },
  { href: "/kontakt", label: "Formularz kontaktowy" },
  { href: "/blog", label: "Blog" },
];

export default function Sidebar() {
  return (
    <aside className="border-b border-neutral-800 md:border-b-0 md:border-r bg-neutral-950/70">
      <div className="p-6">
        <div className="flex items-center gap-3">
          <div className="h-11 w-11 rounded-full bg-neutral-800" />
          <div>
            <div className="text-lg font-semibold tracking-wide">PILATIQUE</div>
            <div className="text-xs text-neutral-400">Pilates & wellbeing</div>
          </div>
        </div>
      </div>

      <nav className="p-6 pt-0">
        <div className="hidden md:block space-y-2">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block rounded-lg px-3 py-2 text-sm text-neutral-200 hover:bg-neutral-900"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Mobile menu placeholder (zrobimy w kolejnym kroku) */}
        <div className="md:hidden text-sm text-neutral-400">
          (Mobile menu dodamy za chwilę)
        </div>
      </nav>

      <div className="p-6 pt-0">
        <div className="text-xs text-neutral-500">
          © {new Date().getFullYear()} Pilatique
        </div>
      </div>
    </aside>
  );
}
