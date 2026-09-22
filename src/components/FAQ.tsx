"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimateIn } from "./AnimateIn";

const faqs = [
    {
        q: "¿Qué necesito llevar?",
        a: "Ropa cómoda que no te importe mojar, protector solar, lentes de sol, ojotas o un calzado cerrado. Todo el equipo náutico — kayak, pala, chaleco salvavidas y cubrecockpit — está incluido.",
    },
    {
        q: "¿Qué pasa si hay mal clima o viento fuerte?",
        a: "La seguridad es lo primero. Si las condiciones no son aptas para salir, reprogramamos la expedición sin ningún costo adicional. Nos comunicamos con vos el día anterior para confirmar o coordinar una nueva fecha.",
    },
    {
        q: "¿Cuál es la edad mínima?",
        a: "Para las expediciones guiadas la edad mínima es 10 años. Menores entre 6 y 10 años pueden participar si van acompañados por un adulto y el guía evalúa que las condiciones del día son adecuadas.",
    },
    {
        q: "¿Necesito tener experiencia previa?",
        a: "No. La Expedición Quillahue (2hs) y la Expedición Isla Lepen (4hs) son ideales para personas sin experiencia. Para la Expedición Lago Moquehue (6hs) recomendamos haber remado al menos una vez antes.",
    },
    {
        q: "¿Cómo confirmo y pago mi reserva?",
        a: "Hacé click en 'Reservar' en la expedición que te interese. Te contactamos por WhatsApp en menos de 24 horas para confirmar fecha, horario y método de pago. Aceptamos transferencia y efectivo.",
    },
    {
        q: "¿Cuántas personas van por salida?",
        a: "Máximo 8 personas por grupo. Esto garantiza que el guía pueda atender a todos de forma personalizada y que la experiencia sea genuinamente disfrutable, no un tour masivo.",
    },
];

export function FAQ() {
    const [open, setOpen] = useState<number | null>(null);

    return (
        <section className="relative pt-24 pb-32 overflow-hidden bg-lago">
            <svg
                aria-hidden="true"
                viewBox="0 0 1440 80"
                preserveAspectRatio="none"
                className="pointer-events-none absolute -bottom-px left-0 w-full h-12 md:h-20 fill-bruma"
            >
                <path
                    opacity="0.45"
                    d="M0,46 C240,18 420,62 720,40 C1020,18 1200,58 1440,30 L1440,80 L0,80 Z"
                />
                <path d="M0,60 C180,44 360,72 600,58 C860,42 1080,74 1440,52 L1440,80 L0,80 Z" />
            </svg>
            <div className="relative z-10 max-w-3xl mx-auto px-4">
                <AnimateIn className="text-center mb-14">
                    <span className="text-cyan-50 text-xs font-semibold tracking-[0.2em] uppercase">Todo lo que necesitás saber</span>
                    <h2 className="font-kg text-4xl md:text-5xl text-white mt-3 mb-4">Preguntas frecuentes</h2>
                    <div className="flex items-center justify-center gap-3">
                        <div className="h-px w-12 bg-white/20" />
                        <div className="h-1 w-8 bg-cyan-400 rounded-full" />
                        <div className="h-px w-12 bg-white/20" />
                    </div>
                </AnimateIn>

                <div className="space-y-3">
                    {faqs.map((faq, i) => (
                        <AnimateIn key={i} delay={i * 60}>
                            <div
                                className={`border rounded-2xl overflow-hidden transition-colors duration-200 ${
                                    open === i ? "bg-lago-noche/45 border-cyan-300/55" : "bg-lago-noche/30 border-white/25"
                                }`}
                            >
                                <button
                                    onClick={() => setOpen(open === i ? null : i)}
                                    aria-expanded={open === i}
                                    aria-controls={`faq-panel-${i}`}
                                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                                >
                                    <span className="font-semibold text-white pr-4 leading-snug">{faq.q}</span>
                                    {open === i
                                        ? <Minus size={18} className="text-cyan-300 shrink-0" />
                                        : <Plus size={18} className="text-white/70 shrink-0" />
                                    }
                                </button>
                                <div
                                    id={`faq-panel-${i}`}
                                    aria-hidden={open !== i}
                                    className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-48" : "max-h-0"}`}
                                >
                                    <p className="px-6 pb-6 text-white/90 leading-relaxed text-sm">{faq.a}</p>
                                </div>
                            </div>
                        </AnimateIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
