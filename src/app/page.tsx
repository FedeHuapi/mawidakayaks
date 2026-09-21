"use client";

import { Bookings } from "../components/Bookings";
import { School } from "../components/School";
import { Reviews } from "../components/Reviews";
import { FAQ } from "../components/FAQ";
import { Weather } from "../components/Weather";
import { Footer } from "../components/Footer";
import Image from "next/image";
import { handleAnchorClick } from "../lib/smoothScroll";
import { ResponsiveVideoBg } from "../components/ResponsiveVideoBg";
import { WhatsAppButton } from "../components/WhatsAppButton";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <div className="relative w-full min-h-screen overflow-hidden">
        <ResponsiveVideoBg
          desktopSrc="/gallery/hero-bg.mp4"
          mobileSrc="/gallery/hero-bg-mobile.mp4"
          desktopPoster="/gallery/hero-bg-poster.jpg"
          mobilePoster="/gallery/hero-bg-mobile-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-lago-profundo/50 via-lago-noche/20 to-lago-noche/75" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-4 -mt-12">
          <div className="relative w-[150px] h-[180px] md:w-[190px] md:h-[228px] mb-8 drop-shadow-2xl hero-animate hero-animate-1">
            <Image
              src="/logo.png"
              alt="Logo Mawida"
              fill
              className="object-contain"
              priority
              sizes="220px"
            />
          </div>
          <h1 className="hero-animate hero-animate-2 font-kg text-white text-4xl md:text-6xl text-center leading-tight [text-shadow:0_2px_18px_rgba(2,20,30,0.55)]">
            Remá el lago Moquehue
          </h1>
          <p className="hero-animate hero-animate-3 mt-4 mb-9 max-w-md text-center text-white/90 text-base md:text-lg leading-relaxed [text-shadow:0_1px_12px_rgba(2,20,30,0.6)]">
            Salidas guiadas de 2 a 6 horas en Villa Pehuenia, con todo el equipo incluido
          </p>
          <a
            href="#expediciones"
            onClick={handleAnchorClick}
            className="hero-animate hero-animate-4 inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/40 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:gap-3 tracking-wide text-sm"
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

      <WhatsAppButton />
    </>
  );
}
