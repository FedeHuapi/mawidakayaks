import { BookingCard } from './BookingCard';
import { AnimateIn } from './AnimateIn';

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

export function Bookings() {
    return (
        <div
            id="expediciones"
            className="relative py-28"
            style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1800&q=85")',
                backgroundAttachment: 'fixed',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="absolute inset-0 bg-slate-900/55" />

            <div className="relative z-10 max-w-6xl mx-auto px-4">
                <AnimateIn className="text-center mb-14">
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
