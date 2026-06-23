import { useState } from "react";
import type { ComponentType, ReactNode } from "react";
import { motion } from "motion/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Phone, Github, Linkedin, ArrowRight, CheckCircle2 } from "lucide-react";
import { CONTACT } from "../../lib/portfolio-data";
import { SectionHeading } from "./SectionHeading";
import { toast } from "sonner";
const WEB3FORMS_KEY = import.meta.env.VITE_WEB3FORMS_KEY;

const schema = z.object({
  name: z.string().trim().min(2, "Name is required").max(80),
  email: z.string().trim().email("Enter a valid email").max(160),
  message: z.string().trim().min(10, "Tell me a little more").max(1200),
});
type FormValues = z.infer<typeof schema>;

export function Contact() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting }, reset } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormValues) => {
    if (!WEB3FORMS_KEY) {
      toast.error("Form service not configured. Email me directly at " + CONTACT.email);
      return;
    }
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ access_key: WEB3FORMS_KEY, name: data.name, email: data.email, message: data.message }),
      });
      if (!res.ok) throw new Error("Send failed");
      setSent(true);
      reset();
      toast.success("Message sent! I'll get back to you shortly.");
    } catch {
      toast.error("Failed to send. Please email me directly at " + CONTACT.email);
    }
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative overflow-hidden border-t border-white/5 bg-background py-28">
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-primary/20 via-secondary/5 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
      <div className="relative mx-auto max-w-5xl px-6">
        <SectionHeading label="// Let's Connect" title="Ready to build something together?">
          Open to collaborations, AI/ML roles, cloud engineering opportunities, and research discussions.
        </SectionHeading>
        <div className="grid gap-10 md:grid-cols-2">
          <div className="space-y-4">
            <ContactRow icon={Mail} label={CONTACT.email} href={`mailto:${CONTACT.email}`} />
            <ContactRow icon={Phone} label={CONTACT.phone} href={`tel:${CONTACT.phone.replace(/\s/g, "")}`} />
            <ContactRow icon={Github} label="github.com/Sudheesh26" href={CONTACT.github} />
            <ContactRow icon={Linkedin} label="linkedin.com/in/sudheesh-h" href={CONTACT.linkedin} />
          </div>
          <motion.form initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-2xl border border-white/5 bg-surface-2/80 p-6 backdrop-blur">
            <Field label="Name" error={errors.name?.message}>
              <input {...register("name")} className="w-full rounded-md border border-white/10 bg-surface-3 px-3 py-2 text-sm text-foreground outline-none transition focus:border-primary/60" placeholder="Your name" />
            </Field>
            <Field label="Email" error={errors.email?.message}>
              <input {...register("email")} type="email" className="w-full rounded-md border border-white/10 bg-surface-3 px-3 py-2 text-sm text-foreground outline-none transition focus:border-primary/60" placeholder="you@domain.com" />
            </Field>
            <Field label="Message" error={errors.message?.message}>
              <textarea {...register("message")} rows={5} className="w-full resize-none rounded-md border border-white/10 bg-surface-3 px-3 py-2 text-sm text-foreground outline-none transition focus:border-primary/60" placeholder="What are we building?" />
            </Field>
            <motion.button layout type="submit" disabled={isSubmitting || sent} className={`inline-flex items-center gap-2 rounded-md px-5 py-2.5 text-sm font-medium transition ${sent ? "bg-emerald-500/20 text-emerald-300" : "bg-primary text-primary-foreground hover:bg-red-glow"}`}>
              {sent ? (<><CheckCircle2 className="h-4 w-4" />Message Sent</>) : (<>{isSubmitting ? "Sending…" : "Send Message"}<ArrowRight className="h-4 w-4" /></>)}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="block">
      <span className="font-mono-tag mb-1.5 block text-text-faint">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-primary">{error}</span>}
    </label>
  );
}

function ContactRow({ icon: Icon, label, href }: { icon: ComponentType<{ className?: string }>; label: string; href: string }) {
  return (
    <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noreferrer" className="group flex items-center gap-4 rounded-xl border border-white/5 bg-surface-2/60 px-5 py-4 transition hover:border-primary/40">
      <div className="flex h-10 w-10 items-center justify-center rounded-md bg-surface-3 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground"><Icon className="h-4 w-4" /></div>
      <span className="text-sm text-foreground/85 group-hover:text-foreground">{label}</span>
    </a>
  );
}
