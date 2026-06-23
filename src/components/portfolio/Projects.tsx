import { useState } from "react";
import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import { PROJECTS } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  return (
    <section id="projects" className="relative border-t border-white/5 bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          label="// Selected Work"
          title="Projects built."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {PROJECTS.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  className = "",
}: {
  project: (typeof PROJECTS)[number];
  className?: string;
}) {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-surface-2/80 p-6 transition hover:border-primary/40 ${className}`}
    >
      {project.label && (
        <div className="mb-3 inline-flex rounded bg-background/70 px-2 py-1 font-mono text-[10px] uppercase tracking-widest text-foreground/80 backdrop-blur border border-white/5">
          {project.label}
        </div>
      )}
      <h3 className="font-display text-2xl tracking-wide text-foreground">{project.title}</h3>
      <p className="mt-1 text-text-muted">{project.tagline}</p>
      <p className="mt-4 text-sm text-foreground/80">
        <span className="font-mono-tag text-text-faint">// Problem · </span>
        {project.problem}
      </p>
      <p className="mt-3 text-sm text-emerald-400">
        <span className="font-mono-tag text-text-faint">// Outcome · </span>
        {project.outcome}
      </p>
      {project.description && showDetails && (
        <motion.p
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="mt-3 text-sm text-foreground/70 border-t border-white/5 pt-3"
        >
          {project.description}
        </motion.p>
      )}
      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.stack.map((s) => (
          <span key={s} className="rounded border border-white/5 bg-surface-3 px-2 py-0.5 font-mono text-[11px] text-secondary">
            {s}
          </span>
        ))}
      </div>
      <div className="mt-6 flex gap-2">
        {project.href && (
          <a href={project.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-3 py-1.5 text-xs text-foreground/80 transition hover:border-primary/60 hover:text-primary">
            <Github className="h-3.5 w-3.5" />
            GitHub
          </a>
        )}
        {project.description && (
          <button type="button" onClick={() => setShowDetails(!showDetails)} className="inline-flex items-center gap-1.5 rounded-md border border-white/10 px-3 py-1.5 text-xs text-foreground/80 transition hover:border-primary/60 hover:text-primary">
            <ExternalLink className={`h-3.5 w-3.5 transition ${showDetails ? "rotate-45" : ""}`} />
            {showDetails ? "Less" : "Details"}
          </button>
        )}
      </div>
    </motion.article>
  );
}