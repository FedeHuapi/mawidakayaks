import Image from "next/image";
import { AnimateIn } from "./AnimateIn";
import { Clock, Users, Package } from "lucide-react";

export function School() {
    return (
        <section id="escuela" className="py-24 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <AnimateIn className="text-center mb-14">
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Escuela de Kayak</h2>
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-12 bg-slate-200" />
                        <div className="h-1 w-8 bg-cyan-500 rounded-full" />
                        <div className="h-px w-12 bg-slate-200" />
                    </div>
                    <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
                        Temporada de verano 2026 · Clases para todos los niveles
                    </p>
                </AnimateIn>

                <AnimateIn variant="fade">
                    <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-md border border-slate-100">
                        <div className="relative h-72 md:h-auto min-h-[480px]">
                            <Image
                                src="/gallery/kayak-pov.jpg"
                                alt="Escuela de kayak Mawida"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                        </div>
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
        </section>
    );
}
