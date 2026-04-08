interface Attachment {
  filename: string;
  content: string; // base64
  content_type: string;
}

interface EmailOptions {
  apiKey: string;
  from: string;
  to: string;
  replyTo: string;
  subject: string;
  html: string;
  attachments?: Attachment[];
}

export async function sendEmail(options: EmailOptions): Promise<void> {
  const body: Record<string, unknown> = {
    from: options.from,
    to: [options.to],
    reply_to: options.replyTo,
    subject: options.subject,
    html: options.html,
  };

  if (options.attachments?.length) {
    body.attachments = options.attachments;
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${options.apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Resend API error (${res.status}): ${text}`);
  }
}

// 5 MB threshold for inline attachments
const INLINE_ATTACHMENT_LIMIT = 5 * 1024 * 1024;

export function shouldInlineAttachments(files: File[]): boolean {
  const total = files.reduce((sum, f) => sum + f.size, 0);
  return total <= INLINE_ATTACHMENT_LIMIT;
}

export async function filesToAttachments(files: File[]): Promise<Attachment[]> {
  const results: Attachment[] = [];
  for (const file of files) {
    if (file.size === 0) continue;
    const buffer = await file.arrayBuffer();
    const base64 = btoa(
      new Uint8Array(buffer).reduce((s, b) => s + String.fromCharCode(b), ""),
    );
    results.push({
      filename: file.name,
      content: base64,
      content_type: file.type,
    });
  }
  return results;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function row(label: string, value: string): string {
  return `<tr><td style="padding:8px 12px;font-weight:600;vertical-align:top;color:#374151">${escapeHtml(label)}</td><td style="padding:8px 12px;color:#111827">${escapeHtml(value)}</td></tr>`;
}

export function buildContactEmailHtml(fields: {
  name: string;
  email: string;
  topic: string;
  message: string;
}): string {
  return `
<div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto">
  <h2 style="color:#15803d;margin-bottom:16px">New contact message</h2>
  <table style="width:100%;border-collapse:collapse;border:1px solid #e5e7eb;border-radius:8px">
    ${row("Name", fields.name)}
    ${row("Email", fields.email)}
    ${row("Topic", fields.topic)}
  </table>
  <div style="margin-top:16px;padding:16px;background:#f9fafb;border-radius:8px;white-space:pre-wrap;color:#111827">${escapeHtml(fields.message)}</div>
</div>`.trim();
}

export function buildApplicationEmailHtml(fields: {
  name: string;
  email: string;
  position: string;
  jobNumber: string;
  message: string;
  fileNames: string[];
}): string {
  const filesRow =
    fields.fileNames.length > 0
      ? row("Attachments", fields.fileNames.join(", "))
      : "";

  return `
<div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto">
  <h2 style="color:#15803d;margin-bottom:16px">New job application</h2>
  <table style="width:100%;border-collapse:collapse;border:1px solid #e5e7eb;border-radius:8px">
    ${row("Name", fields.name)}
    ${row("Email", fields.email)}
    ${row("Position", fields.position)}
    ${row("Job #", fields.jobNumber)}
    ${filesRow}
  </table>
  <div style="margin-top:16px;padding:16px;background:#f9fafb;border-radius:8px;white-space:pre-wrap;color:#111827">${escapeHtml(fields.message)}</div>
</div>`.trim();
}

export function buildApplicationConfirmationHtml(fields: {
  name: string;
  position: string;
  message: string;
  fileNames: string[];
}): string {
  const filesList =
    fields.fileNames.length > 0
      ? `<p style="color:#111827;line-height:1.6"><strong>Attached files:</strong></p><ul style="color:#111827;margin:0 0 16px 0;padding-left:20px">${fields.fileNames.map((f) => `<li>${escapeHtml(f)}</li>`).join("")}</ul>`
      : "";

  return `
<div style="font-family:system-ui,sans-serif;max-width:600px;margin:0 auto">
  <h2 style="color:#15803d;margin-bottom:16px">We received your application</h2>
  <p style="color:#111827;line-height:1.6">Hi ${escapeHtml(fields.name)},</p>
  <p style="color:#111827;line-height:1.6">Thanks for applying for <strong>${escapeHtml(fields.position)}</strong> at LottaComs. We've received your application and will review it shortly.</p>
  <p style="color:#111827;line-height:1.6"><strong>Your message:</strong></p>
  <div style="padding:16px;background:#f9fafb;border-radius:8px;white-space:pre-wrap;color:#111827;margin-bottom:16px">${escapeHtml(fields.message)}</div>
  ${filesList}
  <p style="color:#111827;line-height:1.6">If we think there's a good fit, we'll be in touch within a few business days.</p>
  <p style="color:#6b7280;font-size:14px;margin-top:24px;border-top:1px solid #e5e7eb;padding-top:16px">This is an automated message from LottaComs. Please don't reply to this email.</p>
</div>`.trim();
}
