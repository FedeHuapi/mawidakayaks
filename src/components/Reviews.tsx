"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { AnimateIn } from "./AnimateIn";
import { GoogleLogo } from "./GoogleLogo";

const reviews = [
    {
        name: "Ryu",
        stars: 5,
        date: "Hace 8 meses",
        text: "La excursión nos encantó. Diego, guía, instructor y anfitrión, excelente. Muy didáctico para enseñarnos. Fuimos en familia, el trato de primera. Sabe mucho y lo sabe transmitir. Comimos en la isla, él preparó todo con dedicación, inclusive panqueques hechos por él. Un lujo. Muchas gracias por una aventura inolvidable.",
    },
    {
        name: "Ari",
        stars: 5,
        date: "Hace 6 meses",
        text: "¡Increíble kayak en Moquehue con Mawida! 🛶 Diego deslumbra con datos geológicos de la isla y el lago. Aguas calmas y transparentes, acceso a playas vírgenes y un brunch gourmet exquisito para cerrar. ¡Aventura y sabor en un entorno único! ✨🏔️",
    },
    {
        name: "Ruben D.",
        stars: 5,
        date: "Hace 8 meses",
        text: "Excelente travesía de 4 hs super entretenidas. Diego durante la salida va dando muchos datos del entorno. Además hay una parada en la isla para descansar e incluye una super picada. Los kayaks están muy buenos. Sin duda volvería a hacer otra travesía con Diego.",
    },
    {
        name: "Victoria A.",
        stars: 5,
        date: "Hace 9 meses",
        text: "Excelente experiencia! Diego es muy amable y responsable para la actividad. Además del paseo y las vistas hermosas, nos compartió un montón de conocimiento sobre la zona, su flora y fauna. Promueven un turismo responsable con el medio ambiente. Súper recomendable! ☺️",
    },
    {
        name: "Cecilia A.",
        stars: 5,
        date: "Hace 5 meses",
        text: "Fuimos 3 personas, a la travesía de 4 hs, una experiencia increíble, donde pudimos recorrer el lago Moquehue observando sus montañas y sus aguas transparentes. Tanto Diego como Fede, unos genios!!. Al llegar a la isla, tomamos un descanso donde disfrutamos de un brunch con todo: desde dulce a salado (una preparación de lujo). El lago estaba tan espectacular que pudimos disfrutar del agua. 100% recomendable!",
    },
    {
        name: "Tomás G",
        stars: 5,
        date: "Hace 6 meses",
        text: "Excelente!!! Hicimos la navegación de 4hs a isla Lepen. No solo es una remada ya que Diego, el guía, nos explicó muchas cosas en relación a la biodiversidad y a la historia del lugar. En la isla pudimos bajar, disfrutar de un desayuno espectacular y nadar un rato. No tenemos experiencia en remar pero te explican y te ayudan en todo momento así que pudimos disfrutarlo al 100%. Vale la pena!!",
    },
];

export function Reviews() {
    const [current, setCurrent] = useState(0);
    const [paused, setPaused] = useState(false);

    const next = useCallback(() => setCurrent((c) => (c + 1) % reviews.length), []);
    const prev = () => setCurrent((c) => (c - 1 + reviews.length) % reviews.length);

    useEffect(() => {
        if (paused) return;
        const t = setInterval(next, 5000);
        return () => clearInterval(t);
    }, [paused, next]);

    const dragStartX = useRef<number | null>(null);
    const dragDeltaX = useRef(0);

    const handlePointerDown = (e: React.PointerEvent) => {
        dragStartX.current = e.clientX;
        dragDeltaX.current = 0;
        setPaused(true);
        e.currentTarget.setPointerCapture(e.pointerId);
    };

    const handlePointerMove = (e: React.PointerEvent) => {
        if (dragStartX.current === null) return;
        dragDeltaX.current = e.clientX - dragStartX.current;
    };

    const handlePointerUp = () => {
        if (dragStartX.current === null) return;
        const threshold = 50;
        if (dragDeltaX.current > threshold) prev();
        else if (dragDeltaX.current < -threshold) next();
        dragStartX.current = null;
        dragDeltaX.current = 0;
        setPaused(false);
    };

    return (
        <section className="relative py-24 bg-bruma overflow-hidden">
            <div className="relative z-10 max-w-3xl mx-auto px-4">
                <AnimateIn className="text-center mb-16">
                    <span className="text-cyan-600 text-xs font-semibold tracking-[0.2em] uppercase">Lo que dicen nuestros clientes</span>
                    <h2 className="font-kg text-4xl md:text-5xl text-lago-noche mt-3 mb-4">Reseñas</h2>
                    <div className="flex items-center justify-center gap-3">
                        <div className="h-px w-12 bg-slate-200" />
                        <div className="h-1 w-8 bg-cyan-500 rounded-full" />
                        <div className="h-px w-12 bg-slate-200" />
                    </div>
                </AnimateIn>

                <AnimateIn variant="fade">
                    <div
                        className="relative"
                        onMouseEnter={() => setPaused(true)}
                        onMouseLeave={() => setPaused(false)}
                        onFocus={() => setPaused(true)}
                        onBlur={() => setPaused(false)}
                        onPointerDown={handlePointerDown}
                        onPointerMove={handlePointerMove}
                        onPointerUp={handlePointerUp}
                        onPointerCancel={handlePointerUp}
                        style={{ touchAction: "pan-y" }}
                    >
                        {/* Card */}
                        <div key={current} className="review-fade bg-white rounded-3xl shadow-sm border border-slate-100 px-10 py-12 md:px-16 md:py-14 text-center select-none cursor-grab active:cursor-grabbing">
                            <Quote size={36} className="text-cyan-100 mx-auto mb-6" />
                            <p className="text-slate-600 text-lg md:text-xl leading-relaxed mb-8 italic">
                                &ldquo;{reviews[current].text}&rdquo;
                            </p>
                            <div className="flex justify-center gap-1 mb-4">
                                {Array.from({ length: reviews[current].stars }).map((_, i) => (
                                    <Star key={i} size={18} className="text-amber-400 fill-amber-400" />
                                ))}
                            </div>
                            <p className="font-bold text-slate-800">{reviews[current].name}</p>
                            <p className="text-slate-500 text-sm mt-1 flex items-center justify-center gap-1.5">
                                {reviews[current].date}
                                <span className="flex items-center gap-1">
                                    · <GoogleLogo size={14} /> Google
                                </span>
                            </p>
                        </div>

                        {/* Flechas */}
                        <button
                            onClick={prev}
                            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-7 bg-white shadow-md border border-slate-100 rounded-full p-2.5 hover:bg-slate-50 transition-colors"
                            aria-label="Anterior"
                        >
                            <ChevronLeft size={20} className="text-slate-500" />
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-7 bg-white shadow-md border border-slate-100 rounded-full p-2.5 hover:bg-slate-50 transition-colors"
                            aria-label="Siguiente"
                        >
                            <ChevronRight size={20} className="text-slate-500" />
                        </button>
                    </div>

                    {/* Dots */}
                    <div className="flex justify-center mt-6">
                        {reviews.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                aria-label={`Reseña ${i + 1}`}
                                aria-current={i === current}
                                className="group flex items-center justify-center px-1.5 py-3"
                            >
                                <span
                                    className={`block rounded-full transition-all duration-300 ${
                                        i === current ? "w-6 h-2 bg-cyan-500" : "w-2 h-2 bg-lago group-hover:bg-lago-noche"
                                    }`}
                                />
                            </button>
                        ))}
                    </div>
                </AnimateIn>
            </div>
        </section>
    );
}
