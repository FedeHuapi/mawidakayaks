"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

interface Expedition {
    id: number;
    slug: string;
    name: string;
    duration: string;
    description: string;
    price: string;
    badge?: string;
    photo: string;
}

interface BookingCardProps {
    exp: Expedition;
}

const badgeStyles: Record<string, string> = {
    "Más popular": "bg-cyan-500 text-white",
    "Principiantes": "bg-emerald-100 text-emerald-700",
    "Experiencia completa": "bg-amber-100 text-amber-700",
    "Nueva": "bg-violet-100 text-violet-700",
};

const extraDetails: Record<number, string[]> = {
    1: ["Equipo incluido (kayak + remo + chaleco)", "Guía bilingüe", "Apto para mayores de 10 años"],
    2: ["Snack a bordo incluido", "Parada en Isla Lepen", "Fotografías del recorrido"],
    3: ["Almuerzo en la costa incluido", "Recorrido completo por el lago", "Apto para todos los niveles"],
    4: ["Detalles disponibles próximamente"],
};

export function BookingCard({ exp }: BookingCardProps) {
    const [showDetails, setShowDetails] = useState(false);
    const badgeClass = exp.badge ? (badgeStyles[exp.badge] ?? "bg-slate-100 text-slate-600") : "";

    const handleReserve = (e: React.MouseEvent) => {
        e.stopPropagation();
        const phone = "5492993266379";
        const message = `¡Hola Mawida! Quiero reservar la ${exp.name} (${exp.duration}). ¿Me pasan info de fechas y disponibilidad?`;
        const whatsappURL = `https://api.whatsapp.com/send?phone=${phone}&text=${encodeURIComponent(message)}`;
        window.open(whatsappURL, "_blank");
    };

    return (
        <div
            id={exp.slug}
            className="group relative bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer h-full flex flex-col"
            onClick={() => setShowDetails((prev) => !prev)}
        >
            {/* Foto */}
            <div className="relative h-52 overflow-hidden">
                <Image
                    src={exp.photo}
                    alt={exp.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                {exp.badge && (
                    <div className="absolute top-4 left-4">
                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${badgeClass}`}>
                            {exp.badge}
                        </span>
                    </div>
                )}
                <div className="absolute bottom-3 right-3">
                    <span className="text-xs font-medium text-white bg-black/30 backdrop-blur-sm px-2.5 py-1 rounded-full">
                        {exp.duration}
                    </span>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold text-slate-800 leading-tight mb-2">{exp.name}</h3>
                <p className="text-slate-500 text-sm mb-4 leading-relaxed">{exp.description}</p>

                {/* Detalles expandibles */}
                <div
                    id={`${exp.slug}-detalles`}
                    aria-hidden={!showDetails}
                    className={`overflow-hidden transition-all duration-300 ${showDetails ? "max-h-40 opacity-100 mb-4" : "max-h-0 opacity-0"}`}
                >
                    <ul className="space-y-1.5 bg-slate-50 rounded-xl p-4">
                        {extraDetails[exp.id]?.map((d) => (
                            <li key={d} className="flex items-start gap-2 text-sm text-slate-600">
                                <span className="text-cyan-500 font-bold shrink-0">✓</span>
                                {d}
                            </li>
                        ))}
                    </ul>
                </div>

                <button
                    type="button"
                    aria-expanded={showDetails}
                    aria-controls={`${exp.slug}-detalles`}
                    onClick={(e) => {
                        e.stopPropagation();
                        setShowDetails((prev) => !prev);
                    }}
                    className="self-start text-xs text-slate-500 hover:text-slate-700 mb-4 flex items-center gap-1 cursor-pointer"
                >
                    <ChevronDown size={14} className={`transition-transform duration-200 ${showDetails ? "rotate-180" : ""}`} />
                    {showDetails ? "Menos detalles" : "Ver qué incluye"}
                </button>

                <div className="pt-4 border-t border-slate-100 mt-auto">
                    <button
                        onClick={handleReserve}
                        className="w-full bg-amber-400 hover:bg-amber-300 text-lago-noche font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-300 hover:shadow-md hover:shadow-amber-500/30 border border-amber-400 hover:border-amber-300 flex items-center justify-center gap-1.5 cursor-pointer"
                    >
                        Consultar por WhatsApp →
                    </button>
                </div>
            </div>
        </div>
    );
}
