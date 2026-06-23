import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(80),
  email: z.string().trim().email().max(160),
  message: z.string().trim().min(10).max(1200),
});

export const sendContactMessage = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => schema.parse(data))
  .handler(async ({ data }) => {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      console.log("[contact] No RESEND_API_KEY set — logging message:", data);
      return { ok: true, logged: true };
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Portfolio Contact <onboarding@resend.dev>",
        to: "its.sudheeshh@gmail.com",
        replyTo: data.email,
        subject: `Portfolio message from ${data.name}`,
        text: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
      }),
    });

    if (!res.ok) {
      const body = await res.text();
      console.error("[contact] Resend error:", res.status, body);
      throw new Error("Failed to send message");
    }

    return { ok: true };
  });
