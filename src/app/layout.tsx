import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mawida",
  description: "Tours en Kayak por la Patagonia",
  icons: {
    icon: "/favicon-v2.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen antialiased bg-[#99CC99]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}