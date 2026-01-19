"use client";

import { Bookings } from "../components/Bookings";
import { Footer } from "../components/Footer";
import Image from "next/image";
// import Test from "./test/page";

export default function Home() {

  return (
    <>
      <div className="relative w-full h-[100vh] min-h-[600px] md:h-screen overflow-hidden">
        <Image
          src="/hero.avif"
          alt="Kayak en la Patagonia"
          fill
          className="object-cover object-center md:object-center"
          priority
          sizes="100vw"
          quality={75}
          style={{
            objectPosition: "center 30%",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/10 md:bg-none"></div>


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
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          {/* <p className="text-white text-sm mb-2 animate-none">Descubrí nuestras aventuras</p> */}
          <div className="animate-bounce">
            <svg
              className="w-8 h-8 text-white mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      <main className="bg-[#99CC99] py-16 -mt-20">
        <Bookings />
        <Footer />
        {/* <Test /> */}
      </main>
    </>
  );
}