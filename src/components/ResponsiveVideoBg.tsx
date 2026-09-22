"use client";

import { useEffect, useRef, useSyncExternalStore } from "react";

interface ResponsiveVideoBgProps {
    desktopSrc: string;
    mobileSrc: string;
    desktopPoster: string;
    mobilePoster: string;
    className?: string;
}

const MOBILE_QUERY = "(max-width: 767px)";

function subscribe(callback: () => void) {
    const mql = window.matchMedia(MOBILE_QUERY);
    mql.addEventListener("change", callback);
    return () => mql.removeEventListener("change", callback);
}

function getSnapshot() {
    return window.matchMedia(MOBILE_QUERY).matches;
}

function getServerSnapshot() {
    return null;
}

export function ResponsiveVideoBg({ desktopSrc, mobileSrc, desktopPoster, mobilePoster, className }: ResponsiveVideoBgProps) {
    const isMobile = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    const videoRef = useRef<HTMLVideoElement>(null);

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
