import { AnimateIn } from "./AnimateIn";
import { PhotoCarouselBg } from "./PhotoCarouselBg";
import { Clock, Users, Package } from "lucide-react";

const cardPhotos = [
    "/gallery/kayak-pov.jpg",
    "/gallery/kayak-pov-remo.jpg",
    "/gallery/kayak-grupo.jpg",
    "/gallery/picada-costa.jpg",
];

export function School() {
    return (
        <section id="escuela" className="relative py-24 bg-cyan-100 overflow-hidden">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: "url(/gallery/logo-stickers-bg.png)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
            />
            <div className="relative z-10 max-w-6xl mx-auto px-4">
                <AnimateIn className="text-center mb-14">
                    <h2 className="inline-block font-kg text-3xl md:text-5xl text-slate-800 bg-amber-400 px-6 py-3 md:px-10 md:py-4 shadow-lg -rotate-2 mb-6">
                        Escuela de Kayak
                    </h2>
                    <p
                        className="text-white text-lg max-w-2xl mx-auto leading-relaxed font-medium"
                        style={{ textShadow: "0 2px 0 rgba(0,0,0,0.9), 0 4px 12px rgba(0,0,0,0.7)" }}
                    >
                        Temporada de verano 2026 · Clases para todos los niveles
                    </p>
                </AnimateIn>

                <AnimateIn variant="fade">
                    <div className="grid md:grid-cols-2 rounded-3xl overflow-hidden shadow-md border border-slate-100">
                        <div className="relative h-72 md:h-auto min-h-[480px]">
                            <PhotoCarouselBg photos={cardPhotos} className="absolute inset-0" />
                        </div>
                        <div className="bg-white px-8 py-12 md:px-12 md:py-14 flex flex-col justify-center">
                            <span className="text-cyan-600 text-xs font-semibold tracking-[0.2em] uppercase mb-3">Aprendé con nosotros</span>
                            <h3 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 leading-tight">
                                Escuelita de kayak
                            </h3>
                            <p className="text-slate-500 leading-relaxed mb-8">
                                Clases teóricas y prácticas en el lago Moquehue. Aprendé técnicas de palada, seguridad en agua y navegación en un ambiente natural único de la Patagonia argentina.
                            </p>
                            <div className="flex flex-wrap gap-3 mb-8">
                                <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5">
                                    <Clock size={15} className="text-cyan-600 shrink-0" />
                                    <div>
                                        <p className="text-xs font-semibold text-slate-700">Duración</p>
                                        <p className="text-xs text-slate-500">Dic · Ene · Feb</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5">
                                    <Users size={15} className="text-cyan-600 shrink-0" />
                                    <div>
                                        <p className="text-xs font-semibold text-slate-700">Edades</p>
                                        <p className="text-xs text-slate-500">12 años en adelante</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2 bg-slate-50 border border-slate-100 rounded-xl px-4 py-2.5">
                                    <Package size={15} className="text-cyan-600 shrink-0" />
                                    <div>
                                        <p className="text-xs font-semibold text-slate-700">Equipo</p>
                                        <p className="text-xs text-slate-500">Todo incluido</p>
                                    </div>
                                </div>
                            </div>
                            <button className="bg-amber-400 hover:bg-amber-300 text-lago-noche px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30 hover:-translate-y-0.5 self-start text-sm tracking-wide">
                                Consultar cupos disponibles
                            </button>
                        </div>
                    </div>
                </AnimateIn>
            </div>
        </section>
    );
}
