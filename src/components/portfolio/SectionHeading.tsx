import { motion } from "motion/react";
import type { ReactNode } from "react";

export function SectionHeading({
  label,
  title,
  children,
}: {
  label: string;
  title: string;
  children?: ReactNode;
}) {
  return (
    <div className="mb-12 max-w-3xl">
      <motion.p
        initial={{ opacity: 0, x: -8 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="font-mono-tag mb-3 text-primary"
      >
        {label}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-tight text-foreground"
      >
        {title}
      </motion.h2>
      {children && <div className="mt-4 text-text-muted">{children}</div>}
    </div>
  );
}
