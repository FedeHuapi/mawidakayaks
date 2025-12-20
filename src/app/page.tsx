import { Bookings } from "../components/Bookings";
import { Footer } from "../components/Footer";
import { Contact } from "../components/Contact";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="relative w-full h-96 md:h-screen overflow-hidden">
        <Image
          src="/hero.avif"
          alt="Kayak en Lago Moquehue"
          fill
          className="object-cover object-center"
          priority
          placeholder="blur"
          blurDataURL="/hero.avif"
        />
        <div className="absolute inset-0 flex items-start justify-center pt-12 md:pt-20">
          <Image
            src="/logo.png"  // ← tu logo PNG en public/
            alt="Logo Mawida"
            width={320}      // tamaño mediano (ajustá si querés más chico/grande)
            height={320}
            className="drop-shadow-2xl"  // sombra para que resalte sobre la imagen
            priority
          />
        </div>
      </div>
      <main className="bg-slate-50">
        <Bookings />
        <Footer />
        <Contact />
      </main>
    </>
  );
}
