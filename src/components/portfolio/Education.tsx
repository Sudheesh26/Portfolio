import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import BitsLogo from "@/images/BITS_Pilani-Logo.svg.png";

export function Education() {
  return (
    <section id="education" className="relative border-t border-white/5 bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading label="// Education" title="Academic Qualifications." />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="relative overflow-hidden rounded-2xl border border-white/5 bg-surface-2/80 p-8"
        >
          <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-primary to-secondary" />
          <motion.svg
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, ease: "easeOut" }}
            viewBox="0 0 400 30"
            className="pointer-events-none absolute right-6 top-6 hidden w-72 text-primary/40 md:block"
          >
            <motion.path d="M0 15 Q 100 0 200 15 T 400 15" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="3 4" />
          </motion.svg>
          <div className="flex items-start gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-surface-3 p-1.5">
              <img src={BitsLogo} alt="BITS Pilani" className="h-full w-full object-contain" />
            </div>
            <div>
              <h3 className="font-display text-2xl tracking-wide text-foreground">Bachelor of Science in Design and Computing</h3>
              <p className="mt-1 text-text-muted">BITS Pilani · 2021 – 2025</p>
              <p className="mt-3 inline-flex items-center gap-2 rounded-md border border-emerald-400/30 bg-emerald-400/5 px-3 py-1 text-sm text-emerald-400">
                CGPA <span className="font-display text-base">8.34</span>
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}