"use client";
import { useState } from "react";
import { Card } from "./UI/Card";
import { TourModal } from "./UI/TourModal";

const expeditions = [
    {
        id: 1,
        name: "Expedición Quillahue",
        duration: "2 horas",
        description: "Remada tranquila por el lago, ideal para principiantes",
        price: "$45.000",
        icon: "/assets/kayak.png",
        detailedDescription: "Sumérgete en la belleza del Lago Moquehue con nuestro tour guiado Quillahue, una experiencia de 2 horas diseñada para toda la familia. No son 2 horas remando sin parar, sino un recorrido tranquilo.",
        itinerary: [
            "Recepción y charla de seguridad",
            "Distribución de equipos (chaleco, remo, kayak)",
            "Instrucción básica de técnica",
            "Recorrido por la costa del Lago Moquehue",
            "Regreso al punto de partida"
        ],
        includes: [
            "Profesionales experimentados que te acompañarán durante todo el recorrido.",
            "Habilitaciones y seguros: Cumplimos con todas las normativas y contamos con seguros para tu tranquilidad.",
            "Fotos del recorrido"
        ],
        requirements: [
            "Navegaremos por aguas calmas, rodeados de bosques nativos y paisajes impresionantes. ¡Sin exigencia física! Apto para todas las edades y niveles de experiencia.",
            "No requiere experiencia previa",
            "Salidas diarias a las 10:00 AM.",
        ],
        meetingPoint: "Playa 'Bella Durmiente', Moquehue"
    },
    {
        id: 2,
        name: "Expedición Isla Lepen",
        duration: "4 horas",
        description: "Recorrido completo con parada en isla secreta con un brunch incluido",
        price: "$70.000",
        icon: "/assets/island.png",
        detailedDescription: "¡Descubre la magia de Isla Lepen con nuestro tour exclusivo! Embárcate en una travesía de 4 horas hacia la encantadora Isla Lepen, donde te espera un delicioso brunch en un entorno natural privilegiado. No son 4 horas remando sin parar, sino una experiencia completa.",
        itinerary: [
            "Recepción y charla de seguridad",
            "Distribución de equipos (chaleco, remo, kayak)",
            "Instrucción básica de técnica",
            "Recorrido de la expedición",
            "Parada en la isla Lepen para brunch y descanso",
            "Regreso al punto de partida"
        ],
        includes: [
            "Navegación panorámica: Disfruta de las vistas del lago y el paisaje circundante.",
            "Brunch en Isla Lepen (aprox. 40 minutos): Deléitate con sabores patagónicos en un entorno único.",
            "Tiempo libre en la isla: Explora la isla, relájate y captura momentos inolvidables",
            "Guías habilitados: Profesionales que te acompañarán y te brindarán información sobre la zona.",
            "Equipamiento, habilitaciones y seguros: Todo lo necesario para una experiencia segura y placentera.",
        ],
        requirements: [
            "Ideal para disfrutar en familia, este tour tiene un nivel de exigencia física bajo y es apto para todas las edades.",
            "No requiere experiencia previa",
            "Salidas diarias a las 10:00 AM.",
        ],
        meetingPoint: "Playa 'Bella Durmiente', Moquehue"
    },
    {
        id: 3,
        name: "Expedición Lago Moquehue",
        duration: "6 horas",
        description: "Aventura completa + almuerzo en la costa",
        price: "$120.000",
        icon: "/assets/map.png",
        detailedDescription: "Sumérgete en la naturaleza patagónica con nuestro tour de 6 horas por el Lago Moquehue, una experiencia completa diseñada para aventureros y amantes del trekking. No son 6 horas de actividad física continua, sino una jornada que combina la navegación con el trekking y el disfrute de la gastronomía local.",
        itinerary: [
            "Recepción y charla de seguridad",
            "Distribución de equipos (chaleco, remo, kayak)",
            "Instrucción básica de técnica",
            "Recorrido de la expedición y trekking",
            "Parada para descanso, almuerzo y fotos",
            "Regreso al punto de partida"
        ],
        includes: [
            "Desayuno para comenzar el día con energía.",
            "Navegación por el Lago Moquehue: Disfruta de las vistas panorámicas y la tranquilidad de sus aguas.",
            "Un delicioso almuerzo para recargar energías.",
            "Trekking por Bahía de los Despojos: Exploración de otra joya del lago, con vistas panorámicas.",
            "Profesionales que te acompañarán y te brindarán información sobre la flora, fauna e historia del lugar.",
            "Equipamiento, habilitaciones y seguros: Todo lo necesario para una experiencia segura y placentera"
        ],
        requirements: [
            "Este tour tiene un nivel de exigencia física intermedio y está pensado para personas con cierta condición física y espíritu aventurero",
            "No requiere experiencia previa",
            "Horario: Salidas diarias a las 9:00 AM.",
        ],
        meetingPoint: "Playa 'Bella Durmiente', Moquehue"
    },

];

export function Bookings() {
    const [selectedTour, setSelectedTour] = useState<typeof expeditions[0] | null>(null);

    const handleReserve = (tour: typeof expeditions[0]) => {
        const phone = "5492993266379";
        const message = `*¡Hola Mawida!*%0A%0AQuiero reservar:%0A%0A` +
            `📌 *Expedición:* ${tour.name} (${tour.duration})%0A` +
            `💰 *Precio:* ${tour.price}%0A%0A` +
            `👥 Cantidad de personas: [COMPLETAR]%0A` +
            `📅 Fecha deseada: [COMPLETAR]%0A` +
            `👤 Nombre: [COMPLETAR]%0A%0A` +
            `¡Gracias!`;

        const whatsappURL = `https://api.whatsapp.com/send?phone=${phone}&text=${message}`;
        window.open(whatsappURL, '_blank');
    };

    return (
        <section className="py-16 bg-[#99CC99]">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12 text-white">
                    Elegí tu aventura
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {expeditions.map((exp) => (
                        <Card
                            key={exp.id}
                            name={exp.name}
                            duration={exp.duration}
                            description={exp.description}
                            price={exp.price}
                            icon={exp.icon}
                            onView={() => setSelectedTour(exp)}
                            onReserve={() => handleReserve(exp)}
                        />
                    ))}
                </div>
            </div>

            {/* Modal */}
            <TourModal
                isOpen={!!selectedTour}
                onClose={() => setSelectedTour(null)}
                tour={selectedTour!}
            />
        </section>
    );
}