import type { NextConfig } from "next";

const securityHeaders = [
  // Evita que el sitio se cargue dentro de un <iframe> ajeno (clickjacking)
  { key: "X-Frame-Options", value: "DENY" },
  // Evita que el navegador "adivine" el tipo de contenido de un archivo
  { key: "X-Content-Type-Options", value: "nosniff" },
  // No filtra la URL completa como referrer al navegar a otros sitios
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  // Desactiva APIs del navegador que este sitio no usa
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: securityHeaders,
      },
    ];
  },
};

export default nextConfig;
