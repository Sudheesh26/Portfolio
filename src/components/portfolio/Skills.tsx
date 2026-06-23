import { useState } from "react";
import { motion } from "motion/react";
import { SKILL_CATEGORIES } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";

export function Skills() {
  const [active, setActive] = useState<number | null>(null);
  return (
    <section id="skills" className="relative border-t border-white/5 bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading label="// Skill Network" title="A connected map of how the work gets built." />
        <div className="grid gap-8 md:grid-cols-2">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isActive = active === idx;
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: idx * 0.08 }}
                onMouseEnter={() => setActive(idx)}
                onMouseLeave={() => setActive(null)}
                className={`group relative overflow-hidden rounded-2xl border bg-surface-2/70 p-8 backdrop-blur transition ${
                  isActive ? "border-primary/40" : "border-white/5"
                }`}
              >
                <div className="absolute inset-0 web-grid-bg opacity-30" />
                <div className="relative">
                  <div className="mb-6 flex items-center gap-3">
                    <span className={`inline-flex h-4 w-4 rounded-full transition ${isActive ? "bg-primary shadow-glow-red" : "bg-primary/60"}`} />
                    <h3 className="font-display text-4xl font-bold tracking-wide text-foreground">{cat.title}</h3>
                  </div>
                  <svg viewBox="0 0 480 280" className="mb-5 h-72 w-full animate-float">
                    {cat.children.map((_, i) => {
                      const angle = (i / cat.children.length) * Math.PI * 2;
                      const x = 240 + Math.cos(angle) * 160;
                      const y = 140 + Math.sin(angle) * 95;
                      return (
                        <motion.line
                          key={`l-${i}`}
                          x1={240}
                          y1={140}
                          x2={x}
                          y2={y}
                          stroke={isActive ? "rgb(220 38 38 / 0.55)" : "rgb(255 255 255 / 0.1)"}
                          strokeWidth="0.8"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: i * 0.05 }}
                        />
                      );
                    })}
                    <circle cx={240} cy={140} r={10} className="fill-primary" />
                    {cat.children.map((c, i) => {
                      const angle = (i / cat.children.length) * Math.PI * 2;
                      const x = 240 + Math.cos(angle) * 160;
                      const y = 140 + Math.sin(angle) * 95;
                      return (
                        <g key={`n-${i}`}>
                          <circle cx={x} cy={y} r={isActive ? 6.5 : 5} className="fill-surface-3 stroke-secondary" strokeWidth="1" />
                          <text x={x} y={y - 14} textAnchor="middle" className="fill-foreground/90" style={{ font: "bold 14px var(--font-mono)" }}>
                            {c}
                          </text>
                        </g>
                      );
                    })}
                  </svg>
                  <div className="flex flex-wrap gap-2">
                    {cat.children.map((c) => (
                      <span key={c} className="rounded border border-white/5 bg-surface-3 px-2.5 py-1 font-mono text-xs font-bold text-secondary">
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}