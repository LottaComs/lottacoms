export const prerender = false;

import type { APIContext } from "astro";
import {
  sendEmail,
  buildApplicationEmailHtml,
  buildApplicationConfirmationHtml,
  shouldInlineAttachments,
  filesToAttachments,
} from "../../lib/email";
import { uploadAttachments } from "../../lib/storage";

export async function POST({ request, locals, redirect }: APIContext) {
  const { env } = locals.runtime;
  const formData = await request.formData();

  // Honeypot — bots fill this hidden field
  if (formData.get("_gotcha")) {
    return redirect("/success/", 303);
  }

  const name = (formData.get("name") as string)?.trim();
  const email = (formData.get("email") as string)?.trim();
  const message = (formData.get("message") as string)?.trim();
  const position = (formData.get("position") as string)?.trim() ?? "";
  const jobNumber = (formData.get("job_number") as string)?.trim() ?? "";

  if (!name || !email || !message) {
    return new Response("Missing required fields", { status: 400 });
  }

  // Collect uploaded files
  const files = formData.getAll("attachment").filter(
    (entry): entry is File => entry instanceof File && entry.size > 0,
  );

  // Always store in R2 as durable backup
  const submissionId = `${new Date().toISOString().replace(/[:.]/g, "-")}_${crypto.randomUUID()}`;
  let storedFiles: Awaited<ReturnType<typeof uploadAttachments>> = [];
  if (files.length > 0) {
    storedFiles = await uploadAttachments(
      env.SUBMISSIONS_BUCKET,
      submissionId,
      files,
    );
  }

  // Build email
  const html = buildApplicationEmailHtml({
    name,
    email,
    position,
    jobNumber,
    message,
    fileNames: storedFiles.map((f) => f.filename),
  });

  // Attach files inline if small enough, otherwise just reference them
  const emailAttachments =
    files.length > 0 && shouldInlineAttachments(files)
      ? await filesToAttachments(files)
      : undefined;

  await Promise.all([
    sendEmail({
      apiKey: env.RESEND_API_KEY,
      from: env.EMAIL_FROM,
      to: env.APPLY_EMAIL_TO,
      replyTo: email,
      subject: `Application: ${position} — ${name}`,
      html,
      attachments: emailAttachments,
    }),
    sendEmail({
      apiKey: env.RESEND_API_KEY,
      from: env.EMAIL_FROM,
      to: email,
      replyTo: env.APPLY_EMAIL_TO,
      subject: `Your application for ${position} at LottaComs`,
      html: buildApplicationConfirmationHtml({ name, position, message, fileNames: storedFiles.map((f) => f.filename) }),
    }),
  ]);

  return redirect("/success/", 303);
}
