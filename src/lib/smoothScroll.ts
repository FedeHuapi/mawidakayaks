export function smoothScrollTo(targetId: string, duration = 900) {
    const target = document.getElementById(targetId);
    if (!target) return;

    const startY = window.scrollY;
    const endY = startY + target.getBoundingClientRect().top;
    const startTime = performance.now();

    const easeInOutCubic = (t: number) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    function step(now: number) {
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        window.scrollTo(0, startY + (endY - startY) * easeInOutCubic(progress));
        if (progress < 1) requestAnimationFrame(step);
    }

    requestAnimationFrame(step);
}

export function handleAnchorClick(e: React.MouseEvent<HTMLAnchorElement>) {
    const href = e.currentTarget.getAttribute("href");
    if (!href || !href.startsWith("#")) return;
    e.preventDefault();
    smoothScrollTo(href.slice(1));
}
