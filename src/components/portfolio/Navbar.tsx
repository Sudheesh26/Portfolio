import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { NAV_LINKS } from "@/lib/portfolio-data";
import { Github, Linkedin, FileDown } from "lucide-react";
import { CONTACT } from "@/lib/portfolio-data";

export function Navbar() {
  const [active, setActive] = useState<string>("about");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = NAV_LINKS.map((n) => n.href.slice(1));
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      obs.disconnect();
    };
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all ${
        scrolled
          ? "bg-background/70 backdrop-blur-md border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#top" className="group flex items-center gap-2">
          <svg width="28" height="28" viewBox="0 0 32 32" className="text-primary">
            <path
              d="M4 16 L16 4 L28 16 L16 28 Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path d="M16 4 V28 M4 16 H28" stroke="currentColor" strokeWidth="0.6" opacity="0.5" />
          </svg>
          <span className="font-display text-xl tracking-widest">SH</span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => {
            const id = link.href.slice(1);
            const isActive = active === id;
            return (
              <a
                key={link.href}
                href={link.href}
                className="group relative text-sm text-foreground/80 transition hover:text-foreground"
              >
                <span className="flex items-center gap-1.5">
                  {isActive && (
                    <motion.span
                      layoutId="nav-dot"
                      className="h-1.5 w-1.5 rounded-full bg-primary"
                    />
                  )}
                  {link.label}
                </span>
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hidden rounded-md p-2 text-foreground/70 transition hover:bg-white/5 hover:text-foreground md:inline-flex"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hidden rounded-md p-2 text-foreground/70 transition hover:bg-white/5 hover:text-foreground md:inline-flex"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="/src/Resume/Sudheesh_H_RESUME.pdf" download="Sudheesh_H_RESUME.pdf"
            className="hidden items-center gap-1.5 rounded-md border border-primary/60 px-3 py-1.5 text-xs font-medium tracking-wide text-primary transition hover:bg-primary hover:text-primary-foreground md:inline-flex"
          >
            <FileDown className="h-3.5 w-3.5" />
            Resume
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-md p-2 text-foreground md:hidden"
            aria-label="Toggle menu"
          >
            <div className="space-y-1">
              <span className={`block h-0.5 w-5 bg-current transition ${open ? "translate-y-1.5 rotate-45" : ""}`} />
              <span className={`block h-0.5 w-5 bg-current transition ${open ? "opacity-0" : ""}`} />
              <span className={`block h-0.5 w-5 bg-current transition ${open ? "-translate-y-1.5 -rotate-45" : ""}`} />
            </div>
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="border-t border-white/5 bg-background/95 backdrop-blur md:hidden"
        >
          <nav className="flex flex-col px-6 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/5 py-3 text-sm text-foreground/80"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </motion.div>
      )}
    </header>
  );
}