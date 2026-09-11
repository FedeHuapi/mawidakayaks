import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mawida",
  description: "Tours en Kayak por la Patagonia",
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
