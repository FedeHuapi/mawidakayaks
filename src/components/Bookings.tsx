import { BookingCard } from './BookingCard';

const expeditions = [
    {
        id: 1,
        name: "Expedición Quillahue",
        duration: "2 horas",
        description: "Remada tranquila por el lago, ideal para principiantes",
        price: "$45.000",
        icon: "🛶",
    },
    {
        id: 2,
        name: "Expedición Isla Lepen",
        duration: "4 horas",
        description: "Recorrido completo con parada en isla secreta",
        price: "$70.000",
        icon: "🏝️",
    },
    {
        id: 3,
        name: "Expedición Lago Moquehue",
        duration: "6 horas",
        description: "Aventura completa + almuerzo en la costa",
        price: "$120.000",
        icon: "🗺️",
    },
];

export function Bookings() {
    return (
        <section className="py-20 bg-gradient-to-br from-green-800 via-teal-700 to-[#99CC99]">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-5xl font-bold text-center mb-16 text-white drop-shadow-md">
                    Elegí tu aventura
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {expeditions.map((exp) => (
                        <BookingCard key={exp.id} exp={exp} />
                    ))}
                </div>
            </div>
        </section>
    );
}