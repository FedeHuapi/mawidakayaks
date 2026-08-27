"use client";

import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";
import { handleAnchorClick } from "../lib/smoothScroll";

const contactInfo = [
    { icon: Phone, text: "+54 9 1234 5678" },
    { icon: Mail, text: "info@mawida.com" },
    { icon: MapPin, text: "Villa Pehuenia - Moquehue, Neuquén" },
];

const footerSections = [
    {
        title: "Expediciones",
        links: [
            { label: "Quillahue", href: "#expedicion-quillahue" },
            { label: "Isla Lepen", href: "#expedicion-isla-lepen" },
            { label: "Lago Moquehue", href: "#expedicion-lago-moquehue" },
        ],
    },
    {
        title: "Escuela",
        links: [
            { label: "Cursos de verano", href: "#escuela" },
            { label: "Calendario", href: "#escuela" },
        ],
    },
];

export function Footer() {
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggle = (title: string) => {
        setOpenSection((prev) => (prev === title ? null : title));
    };

    return (
        <footer className="bg-slate-900 text-slate-300">
            <div className="max-w-6xl mx-auto px-4 py-12 md:py-16">

                {/* Desktop */}
                <div className="hidden md:grid md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-white font-bold mb-4 tracking-wide">Mawida</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">Expediciones y escuela de kayak en la Patagonia argentina.</p>
                    </div>
                    {footerSections.map(({ title, links }) => (
                        <div key={title}>
                            <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">{title}</h3>
                            <ul className="space-y-2 text-sm">
                                {links.map(({ label, href }) => (
                                    <li key={label}>
                                        <a
                                            href={href}
                                            onClick={handleAnchorClick}
                                            className="relative text-slate-400 hover:text-cyan-400 transition-colors duration-200 after:absolute after:bottom-[-2px] after:left-0 after:h-px after:w-0 after:bg-cyan-400 after:transition-all after:duration-300 hover:after:w-full"
                                        >
                                            {label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                    <div>
                        <h3 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">Contacto</h3>
                        <ul className="space-y-2.5 text-sm text-slate-400">
                            {contactInfo.map(({ icon: Icon, text }) => (
                                <li key={text} className="flex items-center gap-2.5">
                                    <Icon size={15} className="text-cyan-400 shrink-0" />
                                    {text}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Mobile acordeón exclusivo */}
                <div className="md:hidden">
                    <div className="pb-4 mb-1 border-b border-slate-800">
                        <h3 className="text-white font-bold mb-2 tracking-wide">Mawida</h3>
                        <p className="text-sm text-slate-400 leading-relaxed">Expediciones y escuela de kayak en la Patagonia argentina.</p>
                    </div>

                    {footerSections.map(({ title, links }) => (
                        <div key={title} className="border-b border-slate-800">
                            <button
                                onClick={() => toggle(title)}
                                className="w-full flex justify-between items-center py-3.5 text-left text-white font-medium text-sm tracking-wide"
                            >
                                {title}
                                <span
                                    className="text-cyan-400 text-xs transition-transform duration-200"
                                    style={{ transform: openSection === title ? "rotate(180deg)" : "rotate(0deg)" }}
                                >
                                    ▼
                                </span>
                            </button>
                            {openSection === title && (
                                <div className="pb-3">
                                    <ul className="space-y-2 text-sm">
                                        {links.map(({ label, href }) => (
                                            <li key={label}>
                                                <a href={href} onClick={handleAnchorClick} className="text-slate-400 hover:text-cyan-400 transition-colors duration-200">
                                                    {label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}

                    <div className="border-b border-slate-800">
                        <button
                            onClick={() => toggle("Contacto")}
                            className="w-full flex justify-between items-center py-3.5 text-left text-white font-medium text-sm tracking-wide"
                        >
                            Contacto
                            <span
                                className="text-cyan-400 text-xs transition-transform duration-200"
                                style={{ transform: openSection === "Contacto" ? "rotate(180deg)" : "rotate(0deg)" }}
                            >
                                ▼
                            </span>
                        </button>
                        {openSection === "Contacto" && (
                            <div className="pb-3">
                                <ul className="space-y-2.5 text-sm text-slate-400">
                                    {contactInfo.map(({ icon: Icon, text }) => (
                                        <li key={text} className="flex items-center gap-2.5">
                                            <Icon size={15} className="text-cyan-400 shrink-0" />
                                            {text}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-slate-800 mt-8 pt-8 text-center text-xs text-slate-500 tracking-wide">
                    <p>© 2026 Mawida · Expediciones y Escuela de Kayak · Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
}
