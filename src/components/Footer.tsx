"use client";
import Image from "next/image";

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-green-900 text-white py-12">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                            Sobre Nosotros
                        </h3>
                        <p className="text-gray-300 leading-relaxed">
                            En Mawida, amamos descubrir la magia de la Patagonia desde el agua.
                            Nos dedicamos a ofrecer tours en kayak que te permiten explorar
                            paisajes únicos y vivir una aventura en armonía con el entorno.
                            Como empresa de turismo ecológico, operamos con todas las
                            habilitaciones y seguros correspondientes, garantizando tu
                            seguridad y el cuidado del medio ambiente en cada expedición.
                        </p>
                    </div>

                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-yellow-400">
                            Contacto
                        </h3>
                        <ul className="space-y-3 text-gray-300">
                            <li className="flex items-start gap-3">
                                <div className="relative w-7 h-7 flex-shrink-0 mt-1">
                                    <Image
                                        src="/assets/ubi.png"
                                        alt="Ubicación"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span>Villa Pehuenia - Moquehue, Neuquén, Patagonia Argentina</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="relative w-6 h-6 flex-shrink-0 mt-1">
                                    <Image
                                        src="/assets/whatsapp.png"
                                        alt="Whatsapp"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                <span>+54 9 299 326-6379</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">✉️</span>
                                <span>info@mawida.com</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">🕒</span>
                                <span>Atención: Lunes a Domingos 8:00 - 20:00</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="relative h-[300px] md:h-[350px] w-full">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2982.063121235628!2d-71.32976242420756!3d-38.9403124717149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96131be936886197%3A0x483feb5f677e20d2!2sMawida!5e1!3m2!1ses!2sar!4v1768843343861!5m2!1ses!2sar"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Ubicación de Mawida en Villa Pehuenia"
                        className="absolute inset-0"
                    />
                </div>

                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2982.063121235628!2d-71.32976242420756!3d-38.9403124717149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x96131be936886197%3A0x483feb5f677e20d2!2sMawida!5e1!3m2!1ses!2sar!4v1768843343861!5m2!1ses!2sar" width="400" height="300" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}

                {/* Línea divisoria */}
                <div className="border-t border-green-700 my-8"></div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-gray-400 text-center md:text-left">
                        <p>© {currentYear} Mawida Expediciones y Escuela de Kayak. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};