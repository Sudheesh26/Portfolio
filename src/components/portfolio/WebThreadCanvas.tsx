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

    const onMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current.x = (e.clientX - rect.left) * dpr;
      mouseRef.current.y = (e.clientY - rect.top) * dpr;
    };
    const onLeave = () => {
      mouseRef.current.x = -9999;
      mouseRef.current.y = -9999;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);

    const threshold = 130 * dpr;
    const mouseR = 180 * dpr;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
      }
      for (let i = 0; i < particles.length; i++) {
        const a = particles[i];
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < threshold) {
            const mx = (a.x + b.x) / 2;
            const my = (a.y + b.y) / 2;
            const dm = Math.hypot(mx - mouseRef.current.x, my - mouseRef.current.y);
            const near = dm < mouseR;
            const alpha = (1 - d / threshold) * (near ? 0.55 : 0.12);
            ctx.strokeStyle = near
              ? `rgba(220, 38, 38, ${alpha})`
              : `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = near ? 1 * dpr : 0.6 * dpr;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }
      for (const p of particles) {
        const dm = Math.hypot(p.x - mouseRef.current.x, p.y - mouseRef.current.y);
        const near = dm < mouseR;
        ctx.fillStyle = near ? "rgba(239, 68, 68, 0.9)" : "rgba(255, 255, 255, 0.45)";
        ctx.beginPath();
        ctx.arc(p.x, p.y, (near ? 1.6 : 1) * dpr, 0, Math.PI * 2);
        ctx.fill();
      }
      if (!prefersReduced) raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="pointer-events-none absolute inset-0 h-full w-full"
    />
  );
}