import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";

export function About() {
  return (
    <section id="about" className="relative border-t border-white/5 bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading label="// About Me" title="Systems Thinker. Fast Builder. Connected Engineer." />
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} className="mx-auto max-w-3xl space-y-5">
          <p className="text-lg leading-relaxed text-foreground/85">
            I&apos;m Sudheesh H, an engineer working at the intersection of AI agent systems, cloud infrastructure, and automation engineering. At HCLTech I&apos;ve built AI agents using LangGraph and MCP protocols that automate sprint workflows in real enterprise environments — work actively being evaluated for deployment at scale.
          </p>
          <p className="leading-relaxed text-text-muted">
            Before moving into AI, I spent two years running Azure and GCP cloud operations for Unilever, managing real infrastructure under real pressure. That background informs how I build: fast, but grounded in operational thinking.
          </p>
          <p className="leading-relaxed text-text-muted">
            I&apos;m drawn to problems where intelligent systems need to coordinate across moving parts — sensing early, connecting cleanly, and acting precisely.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
