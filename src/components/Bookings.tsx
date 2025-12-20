"use client";
import Image from 'next/image';
import { useState } from 'react';

const expeditions = [
    {
        id: 1,
        name: "Expedición Quillahue",
        duration: "2 horas",
        description: "Remada tranquila por el lago, ideal para principiantes",
        price: "$45.000 por persona",
        icon: "⏱️",
    },
    {
        id: 2,
        name: "Expedición Isla Lepen",
        duration: "4 horas",
        description: "Recorrido completo con parada en isla secreta",
        price: "$70.000 por persona",
        icon: "🗺️",
    },
    {
        id: 3,
        name: "Expedición Lago Moquehue",
        duration: "6 horas",
        description: "Aventura completa + almuerzo en la costa",
        price: "$120.000 por persona",
        icon: "🌅",
    },
];

export function Bookings() {

    const [selectedExpedition, setSelectedExpedition] = useState([null, 1, 2, 3])

    const handleReserve = (exp: typeof expeditions[0]) => {
        const phone = "5492993266379"; // ← número de Mawida sin espacios ni guiones

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

    // const handleInfoTour = 

    return (
        <section className="py-16 bg-white">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-black">
                    Elegí tu aventura
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 cursor-pointer">
                    {expeditions.map((exp) => (
                        <div
                            key={exp.id}
                            className="border-2 border-gray-200 rounded-2xl p-8 hover:border-green-600 transition-all hover:shadow-xl text-center"
                        >
                            <div className="text-6xl mb-4">{exp.icon}</div>
                            <h3 className="text-xl font-bold mb-2 text-black">{exp.name}</h3>
                            <p className="text-4xl font-bold text-green-600 mb-4">
                                {exp.duration}
                            </p>
                            <p className="text-gray-600 mb-6">{exp.description}</p>
                            <p className="text-xl font-semibold mb-8 text-black">{exp.price}</p>

                            <button
                                className='w-full bg-yellow-600 hover:bg-yellow-700 text-black font-bold mb-1 py-4 px-8 rounded-xl transition cursor-pointer'>
                                Info del tour
                            </button>

                            <button
                                onClick={() => handleReserve(exp)}
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-xl transition cursor-pointer"
                            >
                                Reservar por WhatsApp
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}