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
                            <li className="flex items-start">
                                <span className="mr-2">📍</span>
                                <span>Villa Pehuenia - Moquehue, Neuquén, Patagonia Argentina</span>
                            </li>
                            <li className="flex items-center">
                                <span className="mr-2">📱</span>
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

                {/* Línea divisoria */}
                <div className="border-t border-green-700 my-8"></div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="text-gray-400 text-center md:text-left">
                        <p>© {currentYear} Mawida Expediciones y Escuela de Kayak. Todos los derechos reservados.</p>
                    </div>

                    <div className="flex gap-4">
                        <div className="text-center">
                            <div className="text-xl mb-1">🏔️</div>
                            <span className="text-xs text-gray-400">Turismo Ecológico</span>
                        </div>
                        <div className="text-center">
                            <div className="text-xl mb-1">🛡️</div>
                            <span className="text-xs text-gray-400">Seguro Contratado</span>
                        </div>
                        <div className="text-center">
                            <div className="text-xl mb-1">✅</div>
                            <span className="text-xs text-gray-400">Habilitación Municipal</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};