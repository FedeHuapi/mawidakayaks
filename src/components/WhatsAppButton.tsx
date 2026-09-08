import Image from "next/image";

const WHATSAPP_NUMBER = "5492993266379";
const MESSAGE = "¡Hola Mawida! Quiero consultar por las expediciones de kayak.";

export function WhatsAppButton() {
    const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodeURIComponent(MESSAGE)}`;

    return (
        <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chatear por WhatsApp"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] shadow-lg shadow-black/20 flex items-center justify-center hover:scale-110 transition-transform duration-300"
        >
            <Image src="/assets/whatsapp.png" alt="WhatsApp" width={30} height={30} className="brightness-0 invert" />
        </a>
    );
}
