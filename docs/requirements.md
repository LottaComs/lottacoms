# LottaComs — Frontend Requirements

## Overview

LottaComs is a company landing page serving two distinct audiences: software buyers (RoboLab product) and hiring managers (talent/headhunting services). The site must quickly orient each visitor and route them toward the relevant section.

**Goals:**
- Communicate what LottaComs is and who it's for within 5 seconds of landing
- Convert visitors to contact form submissions
- Attract talent through job listings
- Build trust for due-diligence visitors

**Stack:** Astro 4 · React 18 · Tailwind CSS 3 · TypeScript (strict)
**Deployment:** Cloudflare Pages (hybrid — static pages + server API routes on Cloudflare Workers)

---

## Pages

### Home `/`

Primary entry point. Must split-route visitors toward Products or Services without feeling unfocused.

**Sections:**
1. **Hero** — Punchy one-liner describing LottaComs + primary CTA button ("Get in Touch")
2. **What We Do** — Two-column layout:
   - Software Products
   - Talent Services
3. **RoboLab Highlight** — Teaser card with link to Products page
4. **Social Proof** — Client logos or short testimonial(s)
5. **Footer CTA** — "Working on something? Let's talk."

---

### Products `/products`

Showcases RoboLab and future software products.

**Sections:**
1. **RoboLab Feature Card**
   - What it does
   - Who it's for
   - Key benefits
   - Screenshot placeholder
2. **Future Products Placeholder** — "More coming soon" card

---

### Services `/services`

Covers the headhunting and talent placement offering.

**Sections:**
1. **Service Overview** — What the service is and who it's for
2. **How It Works** — 3-step process
3. **Roles & Industries** — Types of roles or sectors recruited for

---

### About `/about`

Builds trust for visitors doing due diligence before reaching out.

**Sections:**
1. **Company Story** — Why LottaComs was started, what drives it
2. **Founders** — Two founders with names, photos, and short bios
3. *(Optional)* **Building in Public** — angle if appropriate for brand voice

---

### Jobs `/jobs`

Lists open positions. Each job is a Markdown file in `src/content/jobs/`.

**Sections:**
1. **Job Listing** — Cards for each open position showing title, location, type, and tags
2. **Job Detail** (`/jobs/[slug]`) — Full job description with inline application form

---

### Contact `/contact`

Conversion page. Keep it simple and frictionless.

**Sections:**
1. **Contact Form** — `POST /api/contact`
   - Name
   - Email
   - Topic (dropdown: Products / Talent / Other)
   - Message
   - Hidden `_gotcha` honeypot for spam protection
2. **Direct Email** — displayed for visitors who prefer it
3. **Social Links** — for both founders

---

### Success `/success`

Confirmation page shown after successful form submission (contact or job application). Redirected to via 303 from the API routes.

---

## Navigation

```
LottaComs logo   |   Products   Services   Jobs   About   [Contact]
```

- Logo links to `/`
- Contact rendered as a highlighted button (not a plain link) to keep it prominent
- Mobile: hamburger menu collapsing all nav links
- Language switcher (EN / JA / VN) in both desktop and mobile nav

---

## Global Requirements

### Layout
- Every page ends with a CTA pointing to `/contact` — visitors should never have to hunt for how to reach LottaComs
- Consistent header and footer across all pages
- Responsive — mobile-first

### Components
- Prefer `.astro` components for static content
- Use React only where interactivity is required (e.g., contact form validation, mobile nav toggle)

### Internationalization (i18n)
- Three locales: English (default, unprefixed), Japanese (`/ja/`), Vietnamese (`/vn/`)
- All pages are available in all locales
- Translations managed via `src/i18n/`

### Performance & Constraints
- `output: "hybrid"` in `astro.config.mjs` — pages are static by default, server routes opt in with `export const prerender = false`
- All pages must render to static HTML at build time; only API routes under `src/pages/api/` run on the server

### Accessibility
- Semantic HTML throughout
- All images require descriptive `alt` text
- Form fields require associated `<label>` elements
- Sufficient color contrast (WCAG AA minimum)

---

## Form Handling

Forms are self-hosted via server API routes (not a third-party service). See CLAUDE.md for implementation details and required Cloudflare bindings.

- **Contact form** (`POST /api/contact`) — name, email, topic, message → notification email to team
- **Job application form** (`POST /api/apply`) — name, email, message, file attachments → notification email with files to recruiting team
- Spam protection via hidden honeypot field on both forms
- Both forms redirect to `/success/` after submission

---

## Content Notes

- **Dual-audience awareness:** Software buyers and hiring managers land on the same home page. The "What We Do" split and the two distinct nav destinations (Products / Services) are the primary routing mechanism — copy and visuals must reinforce this split without feeling disjointed.
- **Social proof:** Placeholder slots should be included in the build even if content is TBD at launch; swap in real logos/testimonials without a layout change.
- **Founder bios:** Photo aspect ratio and layout should be consistent for both founders.
