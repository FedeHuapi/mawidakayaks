"use client";

interface Expedition {
    id: number;
    name: string;
    duration: string;
    description: string;
    price: string;
    icon: string;
}

interface BookingCardProps {
    exp: Expedition;
}

export function BookingCard({ exp }: BookingCardProps) {
    const handleReserve = () => {
        const phone = "5492993266379";
        const message = `*¡Hola Mawida!*%0A%0AQuiero reservar:%0A%0A` +
            `📌 *Expedición:* ${exp.name} (${exp.duration})%0A` +
            `💰 *Precio:* ${exp.price}%0A%0A` +
            `👥 Cantidad de personas: [COMPLETAR]%0A` +
            `📅 Fecha deseada: [COMPLETAR]%0A` +
            `👤 Nombre: [COMPLETAR]%0A%0A` +
            `¡Gracias!`;

        const whatsappURL = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;
        window.open(whatsappURL, '_blank');
    };

    const handleTourInfo = () => {
        alert(`Información del tour:\n\n${exp.name}\nDuración: ${exp.duration}\n\n${exp.description}\n\nPrecio: ${exp.price}`);
    };

    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer p-6 w-full max-w-xs mx-auto border border-gray-300">
            {/* Icono */}
            <div className="text-5xl text-center mb-3">{exp.icon}</div>

            {/* Nombre */}
            <h3 className="text-xl font-bold text-gray-900 text-center mb-2">{exp.name}</h3>

            {/* Duración */}
            <div className="text-center mb-3">
                <span className="inline-block bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                    {exp.duration}
                </span>
            </div>

            {/* Descripción */}
            <p className="text-gray-700 text-center mb-4 text-sm">{exp.description}</p>

            {/* Precio */}
            <div className="text-center mb-6">
                <div className="text-2xl font-bold text-gray-900">{exp.price}</div>
                <div className="text-gray-500 text-xs mt-1">por persona</div>
            </div>

            {/* Botones */}
            <div className="space-y-2">
                <button
                    onClick={handleTourInfo}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2.5 rounded-lg transition duration-200"
                >
                    Info del tour
                </button>

                <button
                    onClick={handleReserve}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 rounded-lg transition duration-200"
                >
                    Reservar por WhatsApp
                </button>
            </div>
        </div>
    );
}