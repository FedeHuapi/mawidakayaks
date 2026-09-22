/**
 * URL canónica del sitio en producción. Única fuente de verdad: la usan
 * el layout (metadata / Open Graph), el sitemap y robots.txt.
 * Si algún día cambia el dominio, se actualiza acá y nada más.
 */
export const SITE_URL = "https://www.mawida.ar";

/**
 * Datos reales del negocio, centralizados para que no queden hardcodeados
 * (y potencialmente desactualizados o inconsistentes) en cada componente
 * que los necesita: botones de WhatsApp, footer, datos estructurados (SEO).
 */
export const BUSINESS = {
    name: "Mawida",
    fullName: "Mawida | Expediciones y Escuela de Kayak",
    description:
        "Salidas guiadas en kayak de 2 a 6 horas por el lago Moquehue, en Villa Pehuenia (Neuquén, Patagonia). Equipo incluido, grupos reducidos y escuela de kayak en verano.",
    // Formato internacional E.164, para "tel:" y como base del link de WhatsApp.
    phoneE164: "+5492993266379",
    // Mismo número sin "+", como lo pide la API de WhatsApp (wa.me / api.whatsapp.com).
    whatsappNumber: "5492993266379",
    phoneDisplay: "+54 9 299 326-6379",
    addressLocality: "Villa Pehuenia - Moquehue",
    addressRegion: "Neuquén",
    addressCountry: "AR",
    instagram: "https://www.instagram.com/mawidakayaks/",
    tiktok: "https://www.tiktok.com/@mawidakayaks",
    // Coordenadas aproximadas del lago Moquehue (mismas que usa la sección de clima).
    geo: { latitude: -38.97, longitude: -71.47 },
} as const;
