"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { AnimateIn } from "./AnimateIn";

const faqs = [
    {
        q: "¿Qué necesito llevar?",
        a: "Ropa cómoda que no te importe mojar, protector solar, lentes de sol y calzado cerrado (no ojotas). Todo el equipo náutico — kayak, remo, chaleco salvavidas y ropa de neoprene — está incluido.",
    },
    {
        q: "¿Qué pasa si hay mal clima o viento fuerte?",
        a: "La seguridad es lo primero. Si las condiciones no son aptas para salir, reprogramamos la expedición sin ningún costo adicional. Nos comunicamos con vos el día anterior para confirmar o coordinar una nueva fecha.",
    },
    {
        q: "¿Cuál es la edad mínima?",
        a: "Para las expediciones guiadas la edad mínima es 10 años. Menores entre 8 y 10 años pueden participar si van acompañados por un adulto y el guía evalúa que las condiciones del día son adecuadas.",
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
        <section
            className="relative py-24 overflow-hidden"
            style={{ background: "linear-gradient(to bottom, #5D776B 0%, #4F6E5C 30%, #6B8F6A 60%, #3F5A4A 100%)" }}
        >
            <div
                className="absolute bottom-0 left-0 w-full h-[2px] z-10"
                style={{ background: "linear-gradient(to right, transparent 0%, #67e8f9 50%, transparent 100%)" }}
            />
            <div className="relative z-10 max-w-3xl mx-auto px-4">
                <AnimateIn className="text-center mb-14">
                    <span className="text-cyan-300 text-xs font-semibold tracking-[0.2em] uppercase">Todo lo que necesitás saber</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Preguntas frecuentes</h2>
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
                                className="border rounded-2xl overflow-hidden transition-colors duration-200"
                                style={{
                                    backgroundColor: open === i ? "rgba(255,255,255,0.22)" : "#7B958A",
                                    borderColor: open === i ? "rgba(103,232,249,0.55)" : "rgba(255,255,255,0.25)",
                                }}
                            >
                                <button
                                    onClick={() => setOpen(open === i ? null : i)}
                                    className="w-full flex items-center justify-between px-6 py-5 text-left"
                                >
                                    <span className="font-semibold text-white pr-4 leading-snug">{faq.q}</span>
                                    {open === i
                                        ? <Minus size={18} className="text-cyan-300 shrink-0" />
                                        : <Plus size={18} className="text-white/50 shrink-0" />
                                    }
                                </button>
                                <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-48" : "max-h-0"}`}>
                                    <p className="px-6 pb-6 text-white/70 leading-relaxed text-sm">{faq.a}</p>
                                </div>
                            </div>
                        </AnimateIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
