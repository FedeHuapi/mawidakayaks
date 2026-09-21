import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mawida | Expediciones y escuela de kayak en Lago Moquehue, Villa Pehuenia",
  description:
    "Salidas guiadas en kayak de 2 a 6 horas por el lago Moquehue, en Villa Pehuenia (Neuquén, Patagonia). Equipo incluido, grupos reducidos y escuela de kayak en verano.",
  openGraph: {
    title: "Mawida | Expediciones y escuela de kayak en Lago Moquehue",
    description:
      "Salidas guiadas en kayak de 2 a 6 horas por el lago Moquehue, en Villa Pehuenia. Equipo incluido y grupos reducidos.",
    locale: "es_AR",
    type: "website",
    siteName: "Mawida",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.className} min-h-screen antialiased bg-white`} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
