import { BookingCard } from './BookingCard';
import { AnimateIn } from './AnimateIn';
import { ResponsiveVideoBg } from './ResponsiveVideoBg';

const expeditions = [
    {
        id: 1,
        slug: "expedicion-quillahue",
        name: "Expedición Quillahue",
        duration: "2 horas",
        description: "Remada tranquila por el lago, ideal para principiantes",
        price: "$45.000",
        badge: "Principiantes",
        photo: "/gallery/kayak-duo-reflejo.jpg",
    },
    {
        id: 2,
        slug: "expedicion-isla-lepen",
        name: "Expedición Isla Lepen",
        duration: "4 horas",
        description: "Recorrido completo con parada en isla secreta",
        price: "$70.000",
        badge: "Más popular",
        photo: "/gallery/kayak-aerea.jpg",
    },
    {
        id: 3,
        slug: "expedicion-lago-moquehue",
        name: "Expedición Lago Moquehue",
        duration: "6 horas",
        description: "Aventura completa + almuerzo en la costa",
        price: "$120.000",
        badge: "Experiencia completa",
        photo: "/gallery/kayak-pov-remo.jpg",
    },
];

export function Bookings() {
    return (
        <div id="expediciones" className="relative pt-14 pb-28 md:py-28 overflow-hidden" style={{ backgroundColor: "#5D776B" }}>
            {/* En mobile el video se limita a una franja tipo banner (más alta, con fundido corto)
                para que se vea bien antes de pasar a las tarjetas; en desktop cubre toda la sección */}
            <div className="absolute inset-x-0 top-0 h-[210vh] md:bottom-0 md:h-auto">
                <ResponsiveVideoBg
                    desktopSrc="/gallery/bookings-bg.mp4"
                    mobileSrc="/gallery/bookings-bg-mobile.mp4"
                    desktopPoster="/gallery/bookings-bg-poster.jpg"
                    mobilePoster="/gallery/bookings-bg-mobile-poster.jpg"
                    className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/40" />
                {/* El video se disuelve hacia su propio color de agua (#5D776B), que sigue siendo el fondo de FAQ */}
                <div
                    className="absolute inset-x-0 bottom-0 h-16 md:h-56"
                    style={{
                        background: "linear-gradient(to bottom, transparent 0%, #5D776B 100%)",
                    }}
                />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-4">
                <AnimateIn className="text-center mb-8 md:mb-14">
                    <span className="text-cyan-300 text-xs font-semibold tracking-[0.2em] uppercase">Para los más aventureros</span>
                    <h2 className="text-4xl md:text-5xl font-bold text-white mt-3 mb-4">Elegí tu aventura</h2>
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <div className="h-px w-12 bg-white/20" />
                        <div className="h-1 w-8 bg-cyan-400 rounded-full" />
                        <div className="h-px w-12 bg-white/20" />
                    </div>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto leading-relaxed">
                        Salidas guiadas por los lagos más hermosos de la Patagonia
                    </p>
                </AnimateIn>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {expeditions.map((exp, i) => (
                        <AnimateIn key={exp.id} delay={i * 120}>
                            <BookingCard exp={exp} />
                        </AnimateIn>
                    ))}
                </div>
            </div>
        </div>
    );
}
