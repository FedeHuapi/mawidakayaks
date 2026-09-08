"use client";

import { useEffect, useState } from "react";
import { Wind, Sun, Cloud, CloudRain, CloudSnow, Thermometer, CheckCircle, AlertTriangle } from "lucide-react";
import { AnimateIn } from "./AnimateIn";

interface WeatherData {
    temperature: number;
    windspeed: number;
    weathercode: number;
}

function getCondition(code: number, wind: number) {
    if (wind > 40)  return { label: "Viento fuerte · Consultar disponibilidad", ok: false };
    if (code >= 61) return { label: "Lluvia · Consultar disponibilidad", ok: false };
    if (code === 0 || code === 1) return { label: "Condiciones ideales para salir", ok: true };
    return { label: "Condiciones aceptables", ok: true };
}

function WeatherIcon({ code }: { code: number }) {
    if (code === 0 || code === 1) return <Sun size={44} className="text-amber-400" />;
    if (code <= 3)                return <Cloud size={44} className="text-slate-400" />;
    if (code >= 71 && code <= 77) return <CloudSnow size={44} className="text-blue-300" />;
    if (code >= 61)               return <CloudRain size={44} className="text-blue-400" />;
    return <Cloud size={44} className="text-slate-400" />;
}

function formatToday() {
    const today = new Date().toLocaleDateString("es-AR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        timeZone: "America/Argentina/Buenos_Aires",
    });
    return today.charAt(0).toUpperCase() + today.slice(1);
}

export function Weather() {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [error, setError] = useState(false);
    const [today, setToday] = useState<string | null>(null);

    useEffect(() => {
        setToday(formatToday());
    }, []);

    useEffect(() => {
        fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=-38.97&longitude=-71.47&current=temperature_2m,windspeed_10m,weathercode&timezone=America/Argentina/Buenos_Aires"
        )
            .then((r) => r.json())
            .then((data) =>
                setWeather({
                    temperature: Math.round(data.current.temperature_2m),
                    windspeed: Math.round(data.current.windspeed_10m),
                    weathercode: data.current.weathercode,
                })
            )
            .catch(() => setError(true));
    }, []);

    const condition = weather ? getCondition(weather.weathercode, weather.windspeed) : null;

    return (
        <section className="relative py-16 bg-slate-900 overflow-hidden">
            <div
                className="absolute bottom-0 left-0 w-full h-[2px] z-10"
                style={{ background: "linear-gradient(to right, transparent 0%, #67e8f9 50%, transparent 100%)" }}
            />
            <div className="relative z-10 max-w-5xl mx-auto px-4">
                <AnimateIn variant="fade">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                        {/* Label */}
                        <div className="text-center md:text-left">
                            <p className="text-slate-500 text-xs uppercase tracking-widest mb-1">
                                Estado actual del lago
                                {today && <span className="text-slate-600 normal-case tracking-normal"> · {today}</span>}
                            </p>
                            <h3 className="text-2xl font-bold text-white">Lago Moquehue</h3>
                            <p className="text-slate-400 text-sm">Villa Pehuenia, Neuquén</p>
                        </div>

                        {/* Datos */}
                        {weather ? (
                            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
                                <div className="flex items-center gap-4">
                                    <WeatherIcon code={weather.weathercode} />
                                    <div>
                                        <p className="text-4xl font-bold text-white">{weather.temperature}°C</p>
                                        <p className="text-slate-400 text-xs uppercase tracking-wide">Temperatura</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <Wind size={36} className="text-cyan-400" />
                                    <div>
                                        <p className="text-4xl font-bold text-white">{weather.windspeed} <span className="text-lg font-normal">km/h</span></p>
                                        <p className="text-slate-400 text-xs uppercase tracking-wide">Viento</p>
                                    </div>
                                </div>
                                <div className={`flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold ${condition?.ok ? "bg-emerald-500/15 text-emerald-400" : "bg-amber-500/15 text-amber-400"}`}>
                                    {condition?.ok
                                        ? <CheckCircle size={18} />
                                        : <AlertTriangle size={18} />
                                    }
                                    {condition?.label}
                                </div>
                            </div>
                        ) : error ? (
                            <div className="flex items-center gap-2 text-slate-400 text-sm">
                                <Thermometer size={18} />
                                No se pudo cargar el clima. Consultá por WhatsApp.
                            </div>
                        ) : (
                            <div className="flex gap-6 animate-pulse">
                                <div className="h-12 w-28 bg-slate-700 rounded-xl" />
                                <div className="h-12 w-28 bg-slate-700 rounded-xl" />
                                <div className="h-12 w-40 bg-slate-700 rounded-xl" />
                            </div>
                        )}
                    </div>
                    <p className="text-slate-500 text-xs text-center md:text-left mt-8">
                        Referencia rápida en vivo (Open-Meteo). Antes de cada salida, nuestro equipo confirma las condiciones cruzando Windguru, Windy y el Servicio Meteorológico Nacional.
                    </p>
                </AnimateIn>
            </div>
        </section>
    );
}
