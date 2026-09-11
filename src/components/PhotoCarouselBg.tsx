"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface PhotoCarouselBgProps {
    photos: string[];
    intervalMs?: number;
    className?: string;
}

export function PhotoCarouselBg({ photos, intervalMs = 5000, className }: PhotoCarouselBgProps) {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        if (photos.length < 2) return;
        const t = setInterval(() => setCurrent((c) => (c + 1) % photos.length), intervalMs);
        return () => clearInterval(t);
    }, [photos.length, intervalMs]);

    return (
        <div className={className}>
            {photos.map((src, i) => (
                <Image
                    key={src}
                    src={src}
                    alt=""
                    fill
                    className="object-cover transition-opacity duration-[1500ms] ease-in-out"
                    style={{ opacity: i === current ? 1 : 0 }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            ))}
        </div>
    );
}
