"use client";

import { Bookings } from "../components/Bookings";
import { School } from "../components/School";
import { Reviews } from "../components/Reviews";
import { FAQ } from "../components/FAQ";
import { Weather } from "../components/Weather";
import { Footer } from "../components/Footer";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="relative w-full min-h-[90vh] overflow-hidden">
        <Image
          src="/hero.avif"
          alt="Kayak en la Patagonia"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/50 via-slate-900/20 to-slate-900/75" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 -mt-12">
          <div className="relative w-[150px] h-[180px] md:w-[190px] md:h-[228px] mb-10 drop-shadow-2xl hero-animate hero-animate-1">
            <Image
              src="/logo.png"
              alt="Logo Mawida"
              fill
              className="object-contain"
              priority
              sizes="220px"
            />
          </div>
          <a
            href="#expediciones"
            className="hero-animate hero-animate-2 inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/40 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:gap-3 tracking-wide text-sm"
          >
            Ver expediciones
            <span>→</span>
          </a>
        </div>
      </div>

      <main className="bg-white">
        <Bookings />
        <FAQ />
        <Reviews />
        <Weather />
        <School />
        <Footer />
      </main>
    </>
  );
}
