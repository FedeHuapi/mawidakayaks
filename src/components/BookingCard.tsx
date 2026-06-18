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
};

const extraDetails: Record<number, string[]> = {
    1: ["Equipo incluido (kayak + remo + chaleco)", "Guía bilingüe", "Apto para mayores de 10 años"],
    2: ["Snack a bordo incluido", "Parada en Isla Lepen", "Fotografías del recorrido"],
    3: ["Almuerzo en la costa incluido", "Recorrido completo por el lago", "Apto para todos los niveles"],
};

export function BookingCard({ exp }: BookingCardProps) {
    const [showDetails, setShowDetails] = useState(false);
    const badgeClass = exp.badge ? (badgeStyles[exp.badge] ?? "bg-slate-100 text-slate-600") : "";

    const handleReserve = (e: React.MouseEvent) => {
        e.stopPropagation();
        alert(`¡Reserva recibida para ${exp.name}!\nPrecio: ${exp.price} por persona.\n\nEn breve nos comunicamos por WhatsApp para confirmar tu lugar.`);
    };

    return (
        <div
            id={exp.slug}
            className="group relative bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-200/60 transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
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

            <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 leading-tight mb-2">{exp.name}</h3>
                <p className="text-slate-500 text-sm mb-4 leading-relaxed">{exp.description}</p>

                {/* Detalles expandibles */}
                <div className={`overflow-hidden transition-all duration-300 ${showDetails ? "max-h-40 opacity-100 mb-4" : "max-h-0 opacity-0"}`}>
                    <ul className="space-y-1.5 bg-slate-50 rounded-xl p-4">
                        {extraDetails[exp.id]?.map((d) => (
                            <li key={d} className="flex items-start gap-2 text-sm text-slate-600">
                                <span className="text-cyan-500 font-bold shrink-0">✓</span>
                                {d}
                            </li>
                        ))}
                    </ul>
                </div>

                <p className="text-xs text-slate-400 mb-4 flex items-center gap-1">
                    <ChevronDown size={14} className={`transition-transform duration-200 ${showDetails ? "rotate-180" : ""}`} />
                    {showDetails ? "Menos detalles" : "Ver qué incluye"}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <div>
                        <p className="text-xs text-slate-400 mb-0.5">Precio por persona</p>
                        <span className="text-2xl font-extrabold text-cyan-600 tracking-tight">{exp.price}</span>
                    </div>
                    <button
                        onClick={handleReserve}
                        className="bg-cyan-50 hover:bg-cyan-600 text-cyan-600 hover:text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-300 hover:shadow-md hover:shadow-cyan-600/25 border border-cyan-200 hover:border-cyan-600 flex items-center gap-1.5"
                    >
                        Reservar →
                    </button>
                </div>
            </div>
        </div>
    );
}
