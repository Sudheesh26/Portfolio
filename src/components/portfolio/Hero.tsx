import { motion } from "motion/react";
import { ArrowRight, Github, Linkedin, FileDown, ChevronDown } from "lucide-react";
import { WebThreadCanvas } from "./WebThreadCanvas";
import { CONTACT } from "@/lib/portfolio-data";
import ResumePdf from "@/Resume/Sudheesh_H_RESUME.pdf";

const NAME = "SUDHEESH H";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-background"
    >
      {/* Particle web */}
      <div className="absolute inset-0">
        <WebThreadCanvas />
      </div>
      {/* City silhouette */}
      <svg
        aria-hidden
        viewBox="0 0 1440 320"
        className="pointer-events-none absolute bottom-0 left-0 w-full opacity-[0.07]"
      >
        <g fill="currentColor" className="text-foreground">
          {Array.from({ length: 32 }).map((_, i) => {
            const w = 30 + (i % 5) * 12;
            const h = 80 + ((i * 37) % 180);
            const x = i * 46;
            return <rect key={i} x={x} y={320 - h} width={w} height={h} />;
          })}
        </g>
      </svg>
      {/* Red horizon glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-primary/20 via-primary/5 to-transparent" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 pt-32 pb-20">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="font-mono-tag mb-6 text-primary"
        >
          // Engineer in transit
        </motion.p>

        <h1 className="font-display text-[clamp(3rem,9vw,8rem)] leading-[0.95] text-foreground">
          {NAME.split("").map((ch, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.04, duration: 0.5, ease: "easeOut" }}
              className="inline-block"
            >
              {ch === " " ? "\u00A0" : ch}
            </motion.span>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1 font-display text-xl tracking-wider text-foreground/70 md:text-2xl"
        >
          <span>AI Agent Developer</span>
          <span className="text-primary">•</span>
          <span>Cloud Engineer</span>
          <span className="text-primary">•</span>
          <span>Software Engineer</span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.5 }}
          className="mt-8 max-w-xl text-base leading-relaxed text-text-muted md:text-lg"
        >
          Engineering connected systems across AI, cloud and automation —
          fast, precise, and built to respond.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.5 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-glow-red transition hover:bg-red-glow"
          >
            View Projects
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <a
            href={ResumePdf}
            download="Sudheesh_H_RESUME.pdf"
            className="inline-flex items-center gap-2 rounded-md border border-white/15 px-5 py-3 text-sm font-medium text-foreground transition hover:border-primary/60 hover:text-primary"
          >
            <FileDown className="h-4 w-4" />
            Download Resume
          </a>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="rounded-md border border-white/10 p-3 text-foreground/80 transition hover:scale-105 hover:border-primary/60 hover:text-primary"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="rounded-md border border-white/10 p-3 text-foreground/80 transition hover:scale-105 hover:border-primary/60 hover:text-primary"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll down"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 6, 0] }}
        transition={{ delay: 1.4, duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-text-muted"
      >
        <ChevronDown className="h-5 w-5" />
      </motion.a>
    </section>
  );
}