"use client";

import { useEffect, useRef, useState } from "react";

interface AnimateInProps {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    /** "up" (default) slides from below, "fade" fades only */
    variant?: "up" | "fade";
}

export function AnimateIn({ children, className = "", delay = 0, variant = "up" }: AnimateInProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );
        observer.observe(el);
        return () => observer.disconnect();
    }, []);

    const base = "transition-all duration-700 ease-out";
    const hidden = variant === "up" ? "opacity-0 translate-y-10" : "opacity-0";
    const shown  = variant === "up" ? "opacity-100 translate-y-0"  : "opacity-100";

    return (
        <div
            ref={ref}
            className={`${base} ${visible ? shown : hidden} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
}
