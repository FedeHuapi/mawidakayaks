import Image from "next/image";
import { BookingCard } from './BookingCard';
import { AnimateIn } from './AnimateIn';
import { Clock, Users, Package } from 'lucide-react';

const expeditions = [
    {
        id: 1,
        slug: "expedicion-quillahue",
        name: "Expedición Quillahue",
        duration: "2 horas",
        description: "Remada tranquila por el lago, ideal para principiantes",
        price: "$45.000",
        badge: "Principiantes",
        photo: "https://images.unsplash.com/photo-1487730116645-74489c95b41b?w=800&q=80",
    },
    {
        id: 2,
        slug: "expedicion-isla-lepen",
        name: "Expedición Isla Lepen",
        duration: "4 horas",
        description: "Recorrido completo con parada en isla secreta",
        price: "$70.000",
        badge: "Más popular",
        photo: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80",
    },
    {
        id: 3,
        slug: "expedicion-lago-moquehue",
        name: "Expedición Lago Moquehue",
        duration: "6 horas",
        description: "Aventura completa + almuerzo en la costa",
        price: "$120.000",
        badge: "Experiencia completa",
        photo: "https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80",
    },
];

function SectionTitle({ eyebrow, title, subtitle }: { eyebrow?: string; title: string; subtitle?: string }) {
    return (
        <AnimateIn className="text-center mb-14">
            {eyebrow && (
                <span className="text-cyan-600 text-xs font-semibold tracking-[0.2em] uppercase">{eyebrow}</span>
            )}
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mt-3 mb-4">{title}</h2>
            <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-12 bg-slate-200" />
                <div className="h-1 w-8 bg-cyan-500 rounded-full" />
                <div className="h-px w-12 bg-slate-200" />
            </div>
            {subtitle && <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">{subtitle}</p>}
        </AnimateIn>
    );
}

export function Bookings() {
    return (
        <section className="py-24 bg-white">

            {/* SECCIÓN: Escuela de Kayak */}
            <div id="escuela" className="mb-32">
                <div className="max-w-6xl mx-auto px-4 mb-14">
                    <SectionTitle
                        title="Escuela de Kayak"
                        subtitle="Temporada de verano 2026 · Clases para todos los niveles"
                    />
                </div>

                <AnimateIn variant="fade" className="max-w-6xl mx-auto px-4">
                    <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-md border border-slate-100">
                        {/* Foto izquierda */}
                        <div className="relative h-72 md:h-auto min-h-[480px]">
                            <Image
                                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=85"
                                alt="Escuela de kayak Mawida"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-900/10" />
                        </div>

                        {/* Contenido derecha */}
                        <div className="bg-white px-8 py-12 md:px-12 md:py-14 flex flex-col justify-center">
                            <span className="text-cyan-600 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Aprendé con nosotros</span>
                            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 leading-tight">
                                Escuelita de kayak
                            </h3>
                            <p className="text-slate-500 leading-relaxed mb-8">
                                Clases teóricas y prácticas en el lago Moquehue. Aprendé técnicas de remo, seguridad en agua y navegación en un ambiente natural único de la Patagonia argentina.
                            </p>

                            <div className="flex flex-wrap gap-3 mb-8">
                                <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5">
                                    <Clock size={15} className="text-cyan-600 shrink-0" />
                                    <div>
                                        <p className="text-xs font-semibold text-slate-700">Duración</p>
                                        <p className="text-xs text-slate-400">Dic · Ene · Feb</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5">
                                    <Users size={15} className="text-cyan-600 shrink-0" />
                                    <div>
                                        <p className="text-xs font-semibold text-slate-700">Edades</p>
                                        <p className="text-xs text-slate-400">12 años en adelante</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5">
                                    <Package size={15} className="text-cyan-600 shrink-0" />
                                    <div>
                                        <p className="text-xs font-semibold text-slate-700">Equipo</p>
                                        <p className="text-xs text-slate-400">Todo incluido</p>
                                    </div>
                                </div>
                            </div>

                            <button className="bg-cyan-600 hover:bg-cyan-700 text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-cyan-600/20 hover:-translate-y-0.5 self-start text-sm tracking-wide">
                                Consultar cupos disponibles
                            </button>
                        </div>
                    </div>
                </AnimateIn>
            </div>

            {/* SECCIÓN: Expediciones */}
            <div id="expediciones" className="max-w-6xl mx-auto px-4">
                <SectionTitle
                    eyebrow="Para los más aventureros"
                    title="Elegí tu aventura"
                    subtitle="Salidas guiadas por los lagos más hermosos de la Patagonia"
                />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {expeditions.map((exp, i) => (
                        <AnimateIn key={exp.id} delay={i * 120}>
                            <BookingCard exp={exp} />
                        </AnimateIn>
                    ))}
                </div>
            </div>

        </section>
    );
}
