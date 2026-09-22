# Mawida — Expediciones y Escuela de Kayak

Sitio web de Mawida, operador de kayak en el lago Moquehue (Villa Pehuenia, Neuquén). Landing de una sola página: presenta las expediciones, la escuela de verano, reseñas y clima en vivo, y deriva toda consulta/reserva a WhatsApp.

🔗 Producción: https://www.mawida.ar

## Stack

- **[Next.js 16](https://nextjs.org/)** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 4** para estilos
- **[lucide-react](https://lucide.dev/)** para íconos
- Sin backend propio ni base de datos: es un sitio estático, generado en build time. El único dato externo es el clima, que se pide en el navegador a la API pública de [Open-Meteo](https://open-meteo.com/).

## Requisitos

- Node.js 20 o superior
- npm

## Desarrollo local

```bash
npm install
npm run dev
```

Abrí [http://localhost:3000](http://localhost:3000).

## Scripts disponibles

| Comando | Qué hace |
|---|---|
| `npm run dev` | Levanta el sitio en modo desarrollo (hot reload) |
| `npm run build` | Genera el build de producción — **correlo antes de dar por buena cualquier corrección de código**, es lo mismo que corre el CI |
| `npm run start` | Sirve el build de producción generado por `build` |
| `npm run lint` | Corre ESLint sobre todo el proyecto |

## Estructura del proyecto

```
src/
  app/
    layout.tsx      → metadata, SEO global (título, Open Graph, JSON-LD)
    page.tsx         → arma la página uniendo todas las secciones
    sitemap.ts        → genera /sitemap.xml
    robots.ts          → genera /robots.txt
  components/
    Bookings.tsx        → sección de expediciones (grilla de cards)
    BookingCard.tsx       → una card de expedición individual
    FAQ.tsx                 → preguntas frecuentes
    Reviews.tsx               → carrusel de reseñas
    Weather.tsx                → clima en vivo del lago
    School.tsx                  → sección de la escuela de kayak
    Footer.tsx                   → pie de página
    WhatsAppButton.tsx             → botón flotante de WhatsApp
  lib/
    smoothScroll.ts        → scroll suave al clickear links de ancla (#expediciones, etc.)
public/
  gallery/    → fotos y videos usados en el sitio
  assets/      → íconos sueltos (WhatsApp, Instagram, TikTok, etc.)
  logo.png       → logo de Mawida
```

## Cómo editar contenido (guía rápida del día a día)

No hace falta tocar el diseño para la mayoría de los cambios de contenido — son arrays de datos al principio de cada archivo:

- **Expediciones/tours** (nombre, duración, foto, descripción): array `expeditions` en [`src/components/Bookings.tsx`](src/components/Bookings.tsx). El detalle de "qué incluye" de cada una vive en `extraDetails` dentro de [`src/components/BookingCard.tsx`](src/components/BookingCard.tsx).
- **Preguntas frecuentes**: array `faqs` en [`src/components/FAQ.tsx`](src/components/FAQ.tsx).
- **Reseñas**: array `reviews` en [`src/components/Reviews.tsx`](src/components/Reviews.tsx). Son reseñas reales copiadas de Google — si agregás una nueva, mantené el mismo criterio (real, no inventada).
- **Teléfono / WhatsApp**: aparece en `WhatsAppButton.tsx`, `BookingCard.tsx` y `Footer.tsx`. Si cambia el número, hay que actualizarlo en los tres lugares (o, si ya está mergeado el PR de SEO, en el único lugar centralizado: `src/lib/site.ts`).
- **Fotos y videos**: se agregan a `public/gallery/` y se referencian por ruta (`/gallery/nombre.jpg`) desde el componente correspondiente.
- **Logo**: `public/logo.png`.

## Despliegue

Pensado para desplegarse en [Vercel](https://vercel.com/) conectado a este repositorio de GitHub (deploy automático en cada push a `main`). No requiere variables de entorno.

## Integración continua (CI)

Cada Pull Request contra `main` corre automáticamente `npm run lint` y `npm run build` vía GitHub Actions ([`.github/workflows/ci.yml`](.github/workflows/ci.yml)). La rama `main` está protegida: no se puede mergear un PR si ese chequeo no pasa.

## Flujo de trabajo con Git

1. Crear una rama nueva por cada cambio: `git checkout -b feature/nombre-del-cambio` (o `fix/…`, `docs/…` según corresponda).
2. Commitear y pushear esa rama.
3. Abrir un Pull Request contra `main` en GitHub y esperar a que el CI pase (✅).
4. Mergear desde la interfaz de GitHub.

`main` siempre debería reflejar lo que está (o va a estar) en producción.
