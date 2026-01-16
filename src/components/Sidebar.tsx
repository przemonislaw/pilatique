"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

const ofertaBullets = [
  "Organizacja jednostkowych eventów",
  "Core&Glow",
  "Stars&Stretches",
  "Organizacja wyjazdów integracyjnych",
];

const dlaczegoBullets = ["Korzyści dla kręgosłupa", "Poprawa postury"];

function HamburgerIcon() {
  return (
    <span aria-hidden className="flex h-10 w-10 items-center justify-center">
      <span className="relative block h-[12px] w-[18px]">
        <span className="absolute left-0 top-0 h-[2px] w-full rounded bg-[#e2d3c5]" />
        <span className="absolute left-0 top-[5px] h-[2px] w-full rounded bg-[#e2d3c5]" />
        <span className="absolute left-0 top-[10px] h-[2px] w-full rounded bg-[#e2d3c5]" />
      </span>
    </span>
  );
}

function CloseIcon() {
  return (
    <span aria-hidden className="flex h-10 w-10 items-center justify-center">
      <span className="relative block h-[16px] w-[16px]">
        <span className="absolute left-0 top-[7px] h-[2px] w-full rotate-45 rounded bg-[#e2d3c5]" />
        <span className="absolute left-0 top-[7px] h-[2px] w-full -rotate-45 rounded bg-[#e2d3c5]" />
      </span>
    </span>
  );
}

function SidebarContent({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();

  const active = useMemo(() => {
    const p = pathname || "/";
    if (p.startsWith("/oferta-dla-firm")) return "/oferta-dla-firm";
    if (p.startsWith("/dlaczego-warto")) return "/dlaczego-warto";
    if (p.startsWith("/o-nas")) return "/o-nas";
    if (p.startsWith("/kontakt")) return "/kontakt";
    return "";
  }, [pathname]);

  return (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <div className="px-6 pt-6">
        <div className="relative w-full overflow-hidden rounded-md border border-neutral-800 bg-neutral-950/40">
          <Image
            src="/Logo.jpeg"
            alt="Pilatique"
            width={900}
            height={600}
            priority
            className="h-[190px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/10 via-neutral-950/40 to-neutral-950/80" />
          <div className="absolute bottom-4 left-5">
            <div className="font-serif text-2xl tracking-[0.15em]">PILATIQUE</div>
          </div>
        </div>
      </div>

      {/* O NAS */}
      <div className="px-6 pt-6">
        <Link
          href="/o-nas"
          onClick={onNavigate}
          className={[
            "block w-full rounded-sm px-4 py-3 font-serif text-lg tracking-[0.2em]",
            "border border-neutral-800/70",
            active === "/o-nas"
              ? "bg-[#d7c5b1]/90 text-neutral-950"
              : "bg-transparent text-[#e2d3c5] hover:bg-white/5",
          ].join(" ")}
        >
          O NAS
        </Link>
      </div>

      {/* Sekcje */}
      <div className="px-6 pt-6 space-y-8 text-[#e2d3c5]">
        <div>
          <Link
            href="/oferta-dla-firm"
            onClick={onNavigate}
            className={[
              "block font-serif text-lg tracking-[0.18em] uppercase",
              active === "/oferta-dla-firm" ? "text-[#f0e4d8]" : "text-[#e2d3c5]",
            ].join(" ")}
          >
            Oferta dla firm
          </Link>
          <ul className="mt-3 space-y-2 text-sm text-[#d7c5b1]">
            {ofertaBullets.map((t) => (
              <li key={t} className="flex gap-2">
                <span className="mt-[6px] h-[3px] w-[3px] shrink-0 rounded-full bg-[#d7c5b1]/80" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Link
            href="/dlaczego-warto"
            onClick={onNavigate}
            className={[
              "block font-serif text-lg tracking-[0.18em] uppercase",
              active === "/dlaczego-warto" ? "text-[#f0e4d8]" : "text-[#e2d3c5]",
            ].join(" ")}
          >
            Dlaczego warto
          </Link>
          <ul className="mt-3 space-y-2 text-sm text-[#d7c5b1]">
            {dlaczegoBullets.map((t) => (
              <li key={t} className="flex gap-2">
                <span className="mt-[6px] h-[3px] w-[3px] shrink-0 rounded-full bg-[#d7c5b1]/80" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* CTA */}
      <div className="mt-auto px-6 pb-6 pt-8">
        <Link
          href="/kontakt"
          onClick={onNavigate}
          className={[
            "inline-flex w-full items-center justify-center rounded-md px-4 py-3",
            "font-serif text-base tracking-wide",
            active === "/kontakt"
              ? "bg-[#a56b2b] text-neutral-950"
              : "bg-[#7b4b1f] text-[#f0e4d8] hover:bg-[#8a5524]",
          ].join(" ")}
        >
          Formularz kontaktowy
        </Link>
      </div>
    </div>
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
    <aside className="relative border-b border-neutral-800 md:border-b-0 md:border-r">
      {/* Desktop sidebar */}
      <div className="hidden md:block h-screen sticky top-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#3a2417] via-[#24170f] to-neutral-950" />
        <div className="relative h-full">
          <SidebarContent />
        </div>
      </div>

      {/* Mobile topbar + drawer */}
      <div className="md:hidden sticky top-0 z-40">
        <div className="relative border-b border-neutral-800 bg-neutral-950/75 backdrop-blur">
          <div className="mx-auto max-w-[1400px] px-4">
            <div className="flex h-14 items-center justify-between">
              <Link href="/" className="flex items-center gap-3">
                <div className="h-9 w-9 overflow-hidden rounded-md border border-neutral-800 bg-neutral-900">
                  <Image
                    src="/Logo.jpeg"
                    alt="Pilatique"
                    width={36}
                    height={36}
                    priority
                    className="h-9 w-9 object-cover"
                  />
                </div>
                <div className="font-serif tracking-[0.18em] text-[#f0e4d8]">
                  PILATIQUE
                </div>
              </Link>

              <button
                type="button"
                onClick={() => setOpen(true)}
                aria-label="Otwórz menu"
                aria-expanded={open}
                className="rounded-full border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/50"
              >
                <HamburgerIcon />
              </button>
            </div>
          </div>
        </div>

        {/* Drawer */}
        <div
          className={[
            "fixed inset-0 z-50",
            open ? "pointer-events-auto" : "pointer-events-none",
          ].join(" ")}
          aria-hidden={!open}
        >
          <button
            type="button"
            aria-label="Zamknij menu"
            onClick={() => setOpen(false)}
            className={[
              "absolute inset-0 transition-opacity duration-200",
              open ? "bg-black/60 opacity-100" : "bg-black/0 opacity-0",
            ].join(" ")}
          />

          <div
            className={[
              "absolute left-0 top-0 h-full w-[86%] max-w-[360px]",
              "border-r border-neutral-800 bg-neutral-950",
              "transition-transform duration-200 ease-out",
              open ? "translate-x-0" : "-translate-x-full",
            ].join(" ")}
            role="dialog"
            aria-modal="true"
          >
            <div className="relative h-full">
              <div className="absolute inset-0 bg-gradient-to-b from-[#3a2417] via-[#24170f] to-neutral-950" />
              <div className="relative flex h-full flex-col">
                <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-800">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 overflow-hidden rounded-md border border-neutral-800 bg-neutral-900">
                      <Image
                        src="/Logo.jpeg"
                        alt="Pilatique"
                        width={36}
                        height={36}
                        priority
                        className="h-9 w-9 object-cover"
                      />
                    </div>
                    <div className="font-serif tracking-[0.18em] text-[#f0e4d8]">
                      PILATIQUE
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    className="rounded-full border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-900/50"
                    aria-label="Zamknij"
                  >
                    <CloseIcon />
                  </button>
                </div>

                <div className="h-[calc(100%-57px)] overflow-y-auto">
                  <SidebarContent onNavigate={() => setOpen(false)} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
