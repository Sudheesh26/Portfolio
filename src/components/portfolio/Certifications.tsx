import { motion } from "motion/react";
import { CheckCircle2, GraduationCap } from "lucide-react";
import { SiGooglecloud, SiHackerrank } from "react-icons/si";
import { TbBrandAzure } from "react-icons/tb";
import { CERTIFICATIONS } from "@/lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";
import type { ComponentType } from "react";

function issuerIcon(issuer: string): ComponentType<{ className?: string }> {
  if (issuer === "Microsoft") return TbBrandAzure;
  if (issuer === "Google Cloud") return SiGooglecloud;
  if (issuer === "HackerRank") return SiHackerrank;
  return GraduationCap;
}

export function Certifications() {
  return (
    <section id="certifications" className="relative border-t border-white/5 bg-background py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading label="// Tactical Modules" title="Certifications stacked along the route." />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATIONS.map((c, i) => {
            const Icon = issuerIcon(c.issuer);
            return (
              <motion.a
                key={c.name}
                href={c.url}
                target="_blank"
                rel="noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.05 }}
                className="group flex items-center gap-4 rounded-lg border border-white/5 bg-surface-2/70 px-5 py-4 backdrop-blur transition hover:border-primary/40"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-surface-3 text-primary">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium text-foreground">{c.name}</p>
                  <p className="font-mono-tag mt-0.5 text-text-faint">{c.issuer}</p>
                </div>
                <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-400" />
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}