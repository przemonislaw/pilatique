"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/images/carousel-1.png",
  "/images/carousel-2.png",
  "/images/carousel-3.png",
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // 5 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Pilatique Studio Background ${index + 1}`}
          fill
          priority={index === 0}
          className={`object-cover grayscale-[20%] transition-opacity duration-1000 ease-in-out scale-105 ${
            index === currentIndex ? "opacity-90 z-0" : "opacity-0 -z-10"
          }`}
        />
      ))}
    </>
  );
}
