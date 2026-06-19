"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { AnimateIn } from "./AnimateIn";

const reviews = [
    {
        name: "Martina G.",
        stars: 5,
        date: "Enero 2026",
        text: "Una experiencia increíble. Los guías son muy profesionales y el paisaje del lago Moquehue es impresionante. 100% recomendable para toda la familia.",
    },
    {
        name: "Carlos R.",
        stars: 5,
        date: "Diciembre 2025",
        text: "Fuimos en familia con nuestros hijos de 11 y 14 años. Se divirtieron muchísimo y los instructores fueron muy atentos. La organización fue perfecta.",
    },
    {
        name: "Sofía M.",
        stars: 5,
        date: "Febrero 2026",
        text: "La expedición a Isla Lepen fue lo mejor de nuestro viaje a Villa Pehuenia. El snack a bordo fue un detalle genial y el guía nos contó muchísimo sobre el lugar.",
    },
    {
        name: "Diego P.",
        stars: 5,
        date: "Enero 2026",
        text: "Llegamos sin experiencia previa y en media hora ya estábamos remando solos. Muy buena atención, equipo en perfecto estado y un entorno natural que quita el aliento.",
    },
    {
        name: "Laura B.",
        stars: 5,
        date: "Diciembre 2025",
        text: "El lago es hermoso y la expedición de 6 horas con almuerzo en la costa fue épica. Ya reservamos para el próximo verano. Difícil superar esta experiencia.",
    },
    {
        name: "Tomás A.",
        stars: 5,
        date: "Febrero 2026",
        text: "Mawida tiene todo: equipo impecable, guías con mucho conocimiento del lugar y precios muy razonables para la calidad que ofrecen. Una joya de la Patagonia.",
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

    return (
        <section className="py-24 bg-slate-50">
            <div className="max-w-3xl mx-auto px-4">
                <AnimateIn className="text-center mb-16">
                    <span className="text-cyan-600 text-xs font-semibold tracking-[0.2em] uppercase">Lo que dicen nuestros clientes</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-3 mb-4">Reseñas</h2>
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
                    >
                        {/* Card */}
                        <div key={current} className="review-fade bg-white rounded-3xl shadow-sm border border-slate-100 px-10 py-12 md:px-16 md:py-14 text-center">
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
                            <p className="text-slate-400 text-sm mt-1">{reviews[current].date} · Google</p>
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
                    <div className="flex justify-center gap-2 mt-8">
                        {reviews.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => setCurrent(i)}
                                aria-label={`Reseña ${i + 1}`}
                                className={`rounded-full transition-all duration-300 ${
                                    i === current ? "w-6 h-2 bg-cyan-500" : "w-2 h-2 bg-slate-200 hover:bg-slate-300"
                                }`}
                            />
                        ))}
                    </div>
                </AnimateIn>
            </div>
        </section>
    );
}
