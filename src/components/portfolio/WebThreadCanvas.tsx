import { useEffect, useRef } from "react";

type Particle = { x: number; y: number; vx: number; vy: number };

export function WebThreadCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -9999, y: -9999 });

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let particles: Particle[] = [];
    let raf = 0;
    let dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      const count = Math.max(60, Math.min(120, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 14000)));
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.25 * dpr,
        vy: (Math.random() - 0.5) * 0.25 * dpr,
      }));
    };

    resize();
    window.addEventListener("resize", resize);

    const onMouse = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX * dpr, y: e.clientY * dpr };
    };
    window.addEventListener("mousemove", onMouse, { passive: true });

    const draw = () => {
      ctx!.clearRect(0, 0, canvas!.width, canvas!.height);
      const w = canvas!.width;
      const h = canvas!.height;
      const maxDist = Math.min(w, h) * 0.2;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
      }

      if (!prefersReduced) {
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < maxDist) {
              ctx!.beginPath();
              ctx!.moveTo(particles[i].x, particles[i].y);
              ctx!.lineTo(particles[j].x, particles[j].y);
              ctx!.strokeStyle = `oklch(1 0 0 / ${(1 - dist / maxDist) * 0.12})`;
              ctx!.lineWidth = 0.5 * dpr;
              ctx!.stroke();
            }
          }
          const dx = particles[i].x - mouseRef.current.x;
          const dy = particles[i].y - mouseRef.current.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist * 1.2) {
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(mouseRef.current.x, mouseRef.current.y);
            ctx!.strokeStyle = `oklch(0.58 0.22 25 / ${(1 - dist / (maxDist * 1.2)) * 0.3})`;
            ctx!.lineWidth = 0.7 * dpr;
            ctx!.stroke();
          }
        }
      }

      ctx!.fillStyle = "oklch(0.97 0.01 250 / 0.5)";
      for (const p of particles) {
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, 1.2 * dpr, 0, Math.PI * 2);
        ctx!.fill();
      }

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      className="h-full w-full"
      style={{ filter: "contrast(1.2)" }}
      aria-hidden
    />
  );
}
