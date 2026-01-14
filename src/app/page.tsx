"use client";

import { Bookings } from "../components/Bookings";
import { Footer } from "../components/Footer";
import { Contact } from "../components/Contact";
import Image from "next/image";
import Test from "./test/page";

export default function Home() {
  return (
    <>
      <div className="relative w-full min-h-[110vh] overflow-hidden">
        <Image
          src="/hero.avif"
          alt="Kayak en la Patagonia"
          fill
          className="object-cover"
          priority
        />

        {/* LOGO EN EL CUADRO ROJO (ajusta el porcentaje si es necesario) */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-[50%] -translate-y-[95%]">
          <div className="relative w-[250px] h-[300px]">
            <Image
              src="/logo.png"
              alt="Logo Mawida"
              fill
              className="object-contain drop-shadow-2xl"
              priority
              sizes="300px"
            />
          </div>
        </div>
      </div>

      <main className="bg-[#99CC99] py-16 -mt-20">
        <Bookings />
        <Footer />
        <Contact />
        <Test />
      </main>
    </>
  );
}