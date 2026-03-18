"use client";

import { useEffect, useMemo, useState } from "react";

export default function HeroCarouselBackground({ images }: { images: string[] }) {
  const items = useMemo(() => (images ?? []).filter(Boolean).slice(0, 3), [images]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    if (items.length <= 1) return;
    const t = window.setInterval(() => {
      setIdx((v) => (v + 1) % items.length);
    }, 6500);
    return () => window.clearInterval(t);
  }, [items.length]);

  // fallback gdy brak zdjęć
  if (items.length === 0) {
    return <div className="absolute inset-0 bg-[#f0eee9]" />;
  }

  return (
    <div className="absolute inset-0">
      {items.map((url, i) => (
        <div
          key={`${url}-${i}`}
          className={[
            "absolute inset-0 bg-[#f0eee9] transition-opacity duration-1000",
            i === idx ? "opacity-100" : "opacity-0",
          ].join(" ")}
          style={{
            backgroundImage: `url("${url}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      ))}
    </div>
  );
}
