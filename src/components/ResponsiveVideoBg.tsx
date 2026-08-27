"use client";

import { useEffect, useRef, useState } from "react";

interface ResponsiveVideoBgProps {
    desktopSrc: string;
    mobileSrc: string;
    desktopPoster: string;
    mobilePoster: string;
    className?: string;
}

export function ResponsiveVideoBg({ desktopSrc, mobileSrc, desktopPoster, mobilePoster, className }: ResponsiveVideoBgProps) {
    const [isMobile, setIsMobile] = useState<boolean | null>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const mql = window.matchMedia("(max-width: 767px)");
        setIsMobile(mql.matches);
        const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
        mql.addEventListener("change", handler);
        return () => mql.removeEventListener("change", handler);
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;
        const tryPlay = () => video.play().catch(() => {});
        tryPlay();
        video.addEventListener("loadeddata", tryPlay);
        return () => video.removeEventListener("loadeddata", tryPlay);
    }, [isMobile]);

    if (isMobile === null) return null;

    return (
        <video
            key={isMobile ? "mobile" : "desktop"}
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            poster={isMobile ? mobilePoster : desktopPoster}
            className={className}
        >
            <source src={isMobile ? mobileSrc : desktopSrc} type="video/mp4" />
        </video>
    );
}
