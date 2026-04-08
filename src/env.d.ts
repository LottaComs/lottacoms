/// <reference path="../.astro/types.d.ts" />

interface Env {
  SUBMISSIONS_BUCKET: R2Bucket;
  RESEND_API_KEY: string;
  CONTACT_EMAIL_TO: string;
  APPLY_EMAIL_TO: string;
  EMAIL_FROM: string;
}

declare namespace App {
  interface Locals extends import("@astrojs/cloudflare").Runtime<Env> {}
}
