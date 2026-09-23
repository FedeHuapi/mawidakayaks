import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { SITE_URL, BUSINESS } from "../lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  // Base para resolver a absolutas las URLs relativas que uses en metadata
  // (por ejemplo la imagen de Open Graph de abajo).
  metadataBase: new URL(SITE_URL),
  title: "Mawida | Expediciones y escuela de kayak en Lago Moquehue, Villa Pehuenia",
  description: BUSINESS.description,
  openGraph: {
    title: "Mawida | Expediciones y escuela de kayak en Lago Moquehue",
    description: BUSINESS.description,
    url: SITE_URL,
    locale: "es_AR",
    type: "website",
    siteName: "Mawida",
    images: [
      {
        url: "/gallery/hero-bg-poster.jpg",
        width: 1280,
        height: 720,
        alt: "Kayak en el lago Moquehue, Villa Pehuenia",
      },
    ],
  },
  // Misma imagen para cuando el link se comparte en Twitter/X, que usa su
  // propio protocolo en paralelo a Open Graph.
  twitter: {
    card: "summary_large_image",
    title: "Mawida | Expediciones y escuela de kayak en Lago Moquehue",
    description: BUSINESS.description,
    images: ["/gallery/hero-bg-poster.jpg"],
  },
  icons: {
    icon: "/favicon-v2.ico",
    apple: "/apple-touch-icon.png",
  },
  formatDetection: {
    telephone: false,
    address: false,
    email: false,
    date: false,
  },
};

// Datos estructurados (JSON-LD, schema.org) para que Google pueda entender
// esto como un negocio real: nombre, dirección, teléfono y ubicación en el
// mapa, no solo texto suelto. Es lo que habilita resultados enriquecidos
// (panel lateral, mapa, teléfono clickeable) en la búsqueda.
//
// A propósito NO incluye "aggregateRating" (el puntaje con estrellitas):
// para eso Google exige que el número de reseñas y el promedio coincidan
// exactamente con lo que se ve en pantalla, y hoy no tenemos el total real
// de reseñas de Google Business Profile — inventarlo o usar solo las 6 que
// se muestran en la sección de reseñas puede leerse como spam y traer una
// sanción manual. El día que tengan ese dato real, se agrega acá.
const businessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS.fullName,
  description: BUSINESS.description,
  url: SITE_URL,
  telephone: BUSINESS.phoneE164,
  image: `${SITE_URL}/gallery/hero-bg-poster.jpg`,
  address: {
    "@type": "PostalAddress",
    addressLocality: BUSINESS.addressLocality,
    addressRegion: BUSINESS.addressRegion,
    addressCountry: BUSINESS.addressCountry,
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS.geo.latitude,
    longitude: BUSINESS.geo.longitude,
  },
  sameAs: [BUSINESS.instagram, BUSINESS.tiktok],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} min-h-screen antialiased bg-white`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
