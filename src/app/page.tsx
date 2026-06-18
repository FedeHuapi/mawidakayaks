"use client";

import { Bookings } from "../components/Bookings";
import { Footer } from "../components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative w-full min-h-[90vh] overflow-hidden">
        <Image
          src="/hero.avif"
          alt="Kayak en la Patagonia"
          fill
          className="object-cover"
          priority
        />

        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/50 via-slate-900/20 to-slate-900/80" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4">
          <div className="relative w-[200px] h-[240px] md:w-[260px] md:h-[310px] mb-8 drop-shadow-2xl hero-animate hero-animate-1">
            <Image
              src="/logo.png"
              alt="Logo Mawida"
              fill
              className="object-contain"
              priority
              sizes="300px"
            />
          </div>
          <h1 className="hero-animate hero-animate-2 text-white text-2xl md:text-4xl font-light tracking-[0.15em] text-center max-w-2xl uppercase">
            Expediciones y Escuela de Kayak
          </h1>
          <div className="hero-animate hero-animate-3 w-16 h-px bg-cyan-400 my-5" />
          <p className="hero-animate hero-animate-4 text-white/75 text-base md:text-lg font-light tracking-widest uppercase">
            Villa Pehuenia · Moquehue
          </p>
        </div>
      </div>

      <main className="bg-white">
        <Bookings />
        <Footer />
      </main>
    </>
  );
}
