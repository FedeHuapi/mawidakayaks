"use client";
import { FC, useEffect } from "react";

interface TourModalProps {
    isOpen: boolean;
    onClose: () => void;
    tour: {
        name: string;
        duration: string;
        description: string;
        price: string;
        icon: string;
        detailedDescription: string;
        itinerary: string[];
        includes: string[];
        requirements: string[];
        meetingPoint: string;
    };
}

export const TourModal: FC<TourModalProps> = ({
    isOpen,
    onClose,
    tour
}) => {
    // Efecto para manejar tecla Escape
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            document.addEventListener("keydown", handleEsc);
            document.body.style.overflow = "hidden"; // Bloquear scroll
        }

        return () => {
            document.removeEventListener("keydown", handleEsc);
            document.body.style.overflow = "auto"; // Restaurar scroll
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
            {/* Overlay - click para cerrar */}
            <div
                className="absolute inset-0 bg-black/50"
                onClick={onClose}
            />

            {/* Modal content */}
            <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="sticky top-0 bg-white p-6 border-b z-10">
                    <div className="flex justify-between items-center">
                        <h2 className="text-3xl font-bold text-gray-900">{tour.name}</h2>
                        <button
                            onClick={onClose}
                            className="text-gray-500 hover:text-gray-700 text-2xl"
                        >
                            ×
                        </button>
                    </div>
                    <div className="mt-4 flex items-center gap-4">
                        <span className="bg-green-100 text-green-800 px-4 py-1 rounded-full">
                            {tour.duration}
                        </span>
                        <span className="text-2xl font-bold text-gray-900">{tour.price}</span>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Descripción detallada */}
                    <div className="mb-8">
                        <h3 className="text-xl font-bold mb-4">Descripción completa</h3>
                        <p className="text-gray-700 leading-relaxed">{tour.detailedDescription}</p>
                    </div>

                    {/* Itinerario */}
                    <div className="mb-8">
                        <h3 className="text-xl font-bold mb-4">Qué haremos</h3>
                        <ul className="space-y-2">
                            {tour.itinerary.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-green-600 mr-2">•</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Incluye */}
                    <div className="mb-8">
                        <h3 className="text-xl font-bold mb-4">Qué incluye</h3>
                        <ul className="space-y-2">
                            {tour.includes.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-green-600 mr-2">✓</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Detalles */}
                    <div className="mb-8">
                        <h3 className="text-xl font-bold mb-4">Detalles del tour</h3>
                        <ul className="space-y-2">
                            {tour.requirements.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <span className="text-yellow-600 mr-2">⚠️</span>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Punto de encuentro */}
                    <div className="mb-8 p-4 bg-green-50 rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Punto de encuentro</h3>
                        <p className="text-gray-700">{tour.meetingPoint}</p>
                    </div>
                </div>

                {/* Footer con botones */}
                <div className="sticky bottom-0 bg-white p-6 border-t">
                    <div className="flex flex-col sm:flex-row gap-4">
                        <button
                            onClick={onClose}
                            className="flex-1 border-2 border-gray-300 text-gray-700 font-bold py-3 rounded-lg hover:bg-gray-50 transition"
                        >
                            Cerrar
                        </button>
                        <button
                            onClick={() => {
                                // Aquí irá la lógica de WhatsApp
                                onClose();
                            }}
                            className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg transition"
                        >
                            Reservar ahora
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};