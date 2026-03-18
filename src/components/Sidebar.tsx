"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "O NAS", href: "/o-nas", icon: "info" },
  { label: "Oferta dla firm", type: "header", icon: "business" },
  { label: "Organizacja wyjazdów integracyjnych", href: "/oferta-dla-firm/organizacja-wyjazdow-integracyjnych", icon: "group_work" },
  { label: "Organizacja jednostkowych eventów", href: "/oferta-dla-firm/organizacja-jednostkowych-eventow", icon: "event" },
  { label: "Core&Glow", href: "/oferta-dla-firm/core-and-glow", icon: "fitness_center" },
  { label: "Stars&Stretches", href: "/oferta-dla-firm/stars-and-stretches", icon: "wb_sunny" },
  { label: "Dlaczego warto", type: "header", icon: "help_outline" },
  { label: "Korzyści dla kręgosłupa", href: "/dlaczego-warto/korzysci-dla-kregoslupa", icon: "accessibility_new" },
  { label: "Poprawa postury", href: "/dlaczego-warto/poprawa-postury", icon: "straighten" },
  { label: "Formularz kontaktowy", href: "/kontakt", icon: "mail" },
];

function HamburgerIcon() {
  return <span className="material-symbols-outlined text-[28px]">menu</span>;
}

function CloseIcon() {
  return <span className="material-symbols-outlined text-[28px]">close</span>;
}

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname() || "/";

  return (
    <>
      <div className="flex flex-col items-start px-8 pt-12 pb-8">
        <Link href="/" onClick={onNavigate}>
          <Image
            src="/Logo.jpeg"
            alt="Pilatique"
            width={64}
            height={64}
            priority
            className="w-16 h-16 rounded-full border-2 border-white/20 mb-8 object-cover mix-blend-multiply bg-white"
          />
        </Link>
        <h1 className="font-headline italic text-3xl tracking-tight text-white mb-1 drop-shadow-md">
          PILATIQUE
        </h1>
        <p className="font-label uppercase tracking-widest text-[11px] font-bold text-white/70 mb-4">
          The Radiant Core
        </p>
      </div>
      <div className="flex flex-col space-y-1 w-full px-8 pb-12">
        {navLinks.map((item) => {
          if (item.type === "header") {
            return (
              <div
                key={item.label}
                className="py-3 px-4 flex items-center gap-3 mt-4 mb-1 text-white/50"
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span className="font-label uppercase tracking-widest text-[13px] font-bold">
                  {item.label}
                </span>
              </div>
            );
          }

          const isExactActive = pathname === item.href;
          
          return (
            <Link
              key={item.href!}
              href={item.href!}
              onClick={onNavigate}
              className={[
                "rounded-lg py-3 px-4 flex items-center gap-3 transition-all duration-300 ease-in-out",
                isExactActive
                  ? "text-white font-black bg-white/10 backdrop-blur-md shadow-sm border border-white/10"
                  : "text-white/80 font-medium hover:bg-white/20",
              ].join(" ")}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="font-label uppercase tracking-widest text-[13px] font-bold">
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <>
      {/* Desktop sidebar */}
      <nav className="hidden md:flex flex-col h-screen w-80 fixed left-0 top-0 z-50 bg-gradient-to-b from-[#9E381A] to-[#FFA358] overflow-y-auto shadow-[24px_0_48px_rgba(158,56,26,0.15)] overflow-x-hidden">
        <SidebarContent />
      </nav>

      {/* Mobile TopAppBar */}
      <header className="fixed top-0 w-full z-40 bg-background/90 backdrop-blur-xl border-b border-outline-variant/20 flex md:hidden justify-between items-center px-6 py-4">
        <Link href="/" className="font-headline italic text-2xl tracking-tight text-primary pt-1">
          PILATIQUE
        </Link>
        <div className="flex gap-4 text-primary items-center">
          <Link href="/kontakt" aria-label="Kontakt">
            <span className="material-symbols-outlined text-[28px] hover:scale-105 transition-transform">mail</span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Otwórz menu"
            className="hover:scale-105 transition-transform"
          >
            <HamburgerIcon />
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className={["fixed inset-0 z-50 md:hidden", open ? "pointer-events-auto" : "pointer-events-none"].join(" ")}
        aria-hidden={!open}
      >
        <button
          type="button"
          aria-label="Zamknij menu"
          onClick={() => setOpen(false)}
          className={["absolute inset-0 transition-opacity duration-300", open ? "bg-black/40 backdrop-blur-sm opacity-100" : "bg-transparent opacity-0"].join(" ")}
        />
        <div
          className={["absolute right-0 top-0 h-full w-[85%] max-w-[360px] bg-gradient-to-b from-[#9E381A] to-[#FFA358] shadow-2xl transition-transform duration-300 ease-in-out", open ? "translate-x-0" : "translate-x-full"].join(" ")}
          role="dialog"
          aria-modal="true"
        >
          <div className="relative h-full flex flex-col">
            <div className="absolute top-4 right-4 z-50">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-full w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-colors border border-white/20 shadow-sm"
                aria-label="Zamknij"
              >
                <CloseIcon />
              </button>
            </div>
            <div className="h-full overflow-y-auto overflow-x-hidden">
              <SidebarContent onNavigate={() => setOpen(false)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
