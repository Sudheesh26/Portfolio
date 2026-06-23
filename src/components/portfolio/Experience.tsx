import { motion } from "motion/react";
import { EXPERIENCES } from "../../lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";
import HclLogo from "../../images/HCL-logo.png";

export function Experience() {
  return (
    <section id="experience" className="relative border-t border-white/5 bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading label="// Traversal Network" title="Experience as a route across systems." />
        <div className="relative">
          <motion.div initial={{ scaleY: 0 }} whileInView={{ scaleY: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 1.4, ease: "easeInOut" }} style={{ originY: 0 }} className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-primary via-primary/60 to-transparent md:left-1/2 md:-translate-x-1/2" />
          <ul className="space-y-16">
            {EXPERIENCES.map((exp, i) => {
              const right = i % 2 === 0;
              return (
                <li key={i} className="relative">
                  <motion.span initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ delay: 0.2 + i * 0.1, type: "spring", stiffness: 200 }} className="absolute left-4 top-4 z-10 block h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-glow-red md:left-1/2" />
                  <motion.div initial={{ opacity: 0, x: right ? 24 : -24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.5, delay: i * 0.08 }} className={`ml-10 md:ml-0 md:w-[calc(50%-2.5rem)] ${right ? "md:ml-auto md:pl-10" : "md:mr-auto md:pr-10"}`}>
                    <article className="group rounded-xl border border-white/5 bg-surface-2/80 p-6 backdrop-blur transition hover:border-primary/30">
                      <div className="flex items-center gap-3 mb-3">
                        <img src={HclLogo} alt="HCLTech" className="h-8 w-auto object-contain" />
                        <h3 className="font-display text-2xl tracking-wide text-foreground">{exp.label}</h3>
                      </div>
                      <p className="text-sm text-text-muted"><span className="text-foreground">{exp.role}</span> · {exp.company}</p>
                      <p className="font-mono-tag mt-1 text-text-faint">{exp.period}</p>
                      <ul className="mt-5 space-y-2 text-sm text-foreground/85">
                        {exp.bullets.map((b, k) => (
                          <li key={k} className="flex gap-2"><span className="mt-1 block h-1 w-1 shrink-0 rounded-full bg-primary" /><span>{b}</span></li>
                        ))}
                      </ul>
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {exp.stack.map((s) => (
                          <span key={s} className="rounded border border-white/5 bg-surface-3 px-2 py-0.5 font-mono text-[11px] text-secondary">{s}</span>
                        ))}
                      </div>
                    </article>
                  </motion.div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
