# LottaComs — CLAUDE.md

## Project

Company landing page for LottaComs with self-hosted form handling.

## Stack

- **Astro 4** — site framework, `output: "hybrid"` (static pages + server API routes)
- **React 18** — available for interactive components via `@astrojs/react`
- **Tailwind CSS 3** — styling via `@astrojs/tailwind`
- **TypeScript** — strict mode

## Dev environment

Devcontainer is defined in [.devcontainer/devcontainer.json](.devcontainer/devcontainer.json). Uses Node 22 (Bookworm). Open in VS Code and choose **Reopen in Container** — `npm install` runs automatically.

Dev server runs on port 4321 (`npm run dev`).

## Commands

```bash
npm run dev       # start dev server at localhost:4321
npm run build     # production build → dist/
npm run preview   # preview the build locally
```

## Deployment

Push to GitHub → Cloudflare Pages auto-deploys.
- Build command: `npm run build`
- Output dir: `dist`
- Security headers in [public/_headers](public/_headers)

## Constraints

- Keep `output: "hybrid"` in [astro.config.mjs](astro.config.mjs) — pages are static by default, server routes opt in with `export const prerender = false`
- All pages must render to static HTML at build time; only API routes under `src/pages/api/` run on the server

## Form handling

Self-hosted via Astro server API routes running on the Cloudflare Worker.

- **Contact form** → `POST /api/contact` → sends email to `info@lottacoms.com` via Resend
- **Job application form** → `POST /api/apply` → stores attachments in R2, sends email to `tuyendung@lottacoms.com` via Resend
- Spam protection: hidden `_gotcha` honeypot field
- After submission, both endpoints redirect to `/success/`

### Required Cloudflare bindings

| Binding | Type | Purpose |
|---|---|---|
| `SUBMISSIONS_BUCKET` | R2 bucket | Stores job application file attachments |
| `RESEND_API_KEY` | Secret | Resend transactional email API key |
| `CONTACT_EMAIL_TO` | Var | Contact form recipient (`info@lottacoms.com`) |
| `APPLY_EMAIL_TO` | Var | Application form recipient (`tuyendung@lottacoms.com`) |
| `EMAIL_FROM` | Var | Sender address for outbound emails |

---

## Marketing landing page — content & UI/UX

### Messaging

- Lead with the customer's problem, not the product's features. The hero headline should answer "what's in it for me?" in one line.
- Follow the problem → solution → proof → CTA arc through the page.
- Use concrete, specific language ("cut response time by 40%") over vague superlatives ("best-in-class solution").
- One primary CTA per section; never compete with yourself. Secondary actions (e.g. "Learn more") should be visually subordinate.
- Social proof (logos, testimonials, case studies) belongs directly after the first CTA, not buried at the bottom.

### Visual hierarchy & layout

- Above the fold: headline, sub-headline (one sentence), single CTA, and one supporting visual. Nothing else.
- Sections should alternate visual weight (full-bleed → contained, dark → light) to create rhythm and prevent fatigue.
- Every section needs a job: hero, problem, solution, social proof, features, final CTA. Remove any section that doesn't serve one of these jobs.
- Maintain ample white space — resist the urge to fill every gap. Crowded layouts signal low quality.
- Mobile-first layout. Stack columns vertically on small screens; never rely on horizontal overflow.

### Tone of voice

- Underpromise and overdeliver — never claim more than you can back up with specifics.
- Honest and modest: say what you can and can't do; "we don't know" is a valid answer.
- Friendly but direct — no filler, no corporate warmth-washing.
- No jargon, platitudes, or mission-statement language ("best-in-class", "synergy", "we're all family here", "passionate about X"). If it sounds like a pitch deck, cut it.

### Typography & copy

- Headlines: ≤ 10 words. Sub-headlines: ≤ 20 words.
- Body copy: short paragraphs (2–3 sentences max). Use bullets only for genuinely list-like content.
- Avoid jargon unless the target audience uses it themselves.
- Use sentence case for headings (not Title Case or ALL CAPS) unless brand style requires otherwise.

### Accessibility & performance

- Contrast ratio ≥ 4.5:1 for body text, ≥ 3:1 for large text (WCAG AA minimum).
- All interactive elements must be keyboard-navigable and have visible focus rings.
- Images require descriptive `alt` text; decorative images get `alt=""`.
- Lazy-load below-the-fold images (`loading="lazy"`); keep hero images small and pre-loaded.
- Core Web Vitals targets: LCP < 2.5 s, CLS < 0.1, INP < 200 ms.

---

## Astro conventions

- Prefer `.astro` components for static content; use React only when interactivity is needed.
- Co-locate component styles with the component using Astro's scoped `<style>` or Tailwind classes — no global CSS for component-level concerns.
- Pass data down via props; avoid global stores unless state must be shared across unrelated interactive islands.
- `client:load` is the heaviest hydration strategy — prefer `client:visible` for below-the-fold islands and `client:idle` for non-critical UI.
- Add `transition:persist` to stable chrome elements (header, nav, footer) so View Transitions keeps them mounted across page changes instead of re-rendering and flickering.
- Fetch external data (CMS, API) at build time in the component frontmatter, not at runtime in the browser.
- Keep `src/pages/` flat and predictable; one file = one route. Shared layouts live in `src/layouts/`, reusable UI in `src/components/`.
- Images: use Astro's `<Image />` component (`astro:assets`) for automatic optimisation and format conversion.

## React conventions (within Astro)

- React components are islands — they should be self-contained and minimal. Don't wrap large page sections in React just because one small part needs interactivity.
- Prefer controlled components for forms; uncontrolled refs are fine for one-off DOM interactions.
- Extract repeated JSX into small, single-responsibility components rather than conditionally rendering inside one large component.
- State lives as close to where it's used as possible. Lift state only when two sibling components genuinely need to share it.
- Avoid `useEffect` for data that can be fetched at build time in Astro's frontmatter.
- Type all props with TypeScript interfaces; avoid `any`.
