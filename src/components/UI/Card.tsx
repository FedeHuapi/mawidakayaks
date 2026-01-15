"use client";
import { FC } from "react";
import Image from "next/image";
import { useState } from "react";

interface CardProps {
    name: string;
    duration: string;
    description: string;
    price: string;
    icon: string;
    onView: () => void;
    onReserve: () => void;
}

export const Card: FC<CardProps> = ({
    name,
    duration,
    description,
    price,
    icon,
    onView,
    onReserve
}) => {
    const [imgError, setImgError] = useState(false);
    return (
        <div className="bg-white rounded-2xl border-2 border-green-300 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 cursor-pointer p-8 flex flex-col items-center justify-between min-h-[520px] w-full max-w-xs mx-auto">
            {/* Icono */}
            <div className="mb-4">
                {!imgError && icon ? (
                    <div className="relative w-20 h-20">
                        <Image
                            src={icon.startsWith('/') ? icon : `/${icon}`}
                            alt={`Icono ${name}`}
                            fill
                            className="object-contain"
                            onError={() => setImgError(true)}
                            priority={false}
                        />
                    </div>
                ) : (
                    // Fallback si la imagen falla
                    <div className="text-5xl">
                        {name.includes("Quillahue") ? "🛶" :
                            name.includes("Isla") ? "🏝️" : "🗺️"}
                    </div>
                )}
            </div>

            {/* Nombre */}
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-3">{name}</h3>

            {/* Duración */}
            <div className="mb-4">
                <span className="bg-green-100 text-green-800 text-sm font-semibold px-4 py-1.5 rounded-full">
                    {duration}
                </span>
            </div>

            {/* Descripción */}
            <p className="text-gray-700 text-center mb-6 flex-grow">{description}</p>

            {/* Precio */}
            <div className="text-center mb-8">
                <div className="text-3xl font-bold text-gray-900">{price}</div>
                <div className="text-gray-500 text-sm mt-1">por persona</div>
            </div>

            {/* Botones */}
            <div className="w-full space-y-3">
                <button
                    onClick={onView}
                    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3.5 rounded-lg transition duration-200 shadow hover:shadow-md active:scale-95"
                >
                    Info del tour
                </button>

                <button
                    onClick={onReserve}
                    className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-lg transition duration-200 shadow hover:shadow-md active:scale-95"
                >
                    Reservar por WhatsApp
                </button>
            </div>
        </div>
    );
}