import { CONTACT } from "@/lib/portfolio-data";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-background py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
        <p className="font-mono text-xs text-text-faint">
          © {new Date().getFullYear()} Sudheesh H · Built fast, connected, and responsive.
        </p>
        <div className="flex items-center gap-2">
          <a href={`mailto:${CONTACT.email}`} aria-label="Email" className="rounded p-2 text-text-muted hover:text-primary">
            <Mail className="h-4 w-4" />
          </a>
          <a href={CONTACT.github} aria-label="GitHub" target="_blank" rel="noreferrer" className="rounded p-2 text-text-muted hover:text-primary">
            <Github className="h-4 w-4" />
          </a>
          <a href={CONTACT.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer" className="rounded p-2 text-text-muted hover:text-primary">
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}