export const prerender = false;

import type { APIContext } from "astro";
import { sendEmail, buildContactEmailHtml } from "../../lib/email";

export async function POST({ request, locals, redirect }: APIContext) {
  const { env } = locals.runtime;
  const formData = await request.formData();

  // Honeypot — bots fill this hidden field
  if (formData.get("_gotcha")) {
    return redirect("/success/", 303);
  }

  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const topic = (formData.get("topic") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();

  if (!name || !email || !topic || !message) {
    return new Response("Missing required fields", { status: 400 });
  }

  const html = buildContactEmailHtml({ name, email, topic, message });

  await sendEmail({
    apiKey: env.RESEND_API_KEY,
    from: env.EMAIL_FROM,
    to: env.CONTACT_EMAIL_TO,
    replyTo: email,
    subject: `Contact: ${topic} — ${name}`,
    html,
  });

  return redirect("/success/", 303);
}
