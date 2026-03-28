# LottaComs — Frontend Requirements

## Overview

LottaComs is a company landing page serving two distinct audiences: software buyers (Robolab product) and hiring managers (talent/headhunting services). The site must quickly orient each visitor and route them toward the relevant section.

**Goals:**
- Communicate what LottaComs is and who it's for within 5 seconds of landing
- Convert visitors to contact form submissions
- Build trust for due-diligence visitors
- Remain polished and lean — 5 pages maximum

**Stack:** Astro 4 · React 18 · Tailwind CSS 3 · TypeScript (strict)
**Deployment:** Netlify (static, no SSR)

---

## Pages

### Home `/`

Primary entry point. Must split-route visitors toward Products or Services without feeling unfocused.

**Sections:**
1. **Hero** — Punchy one-liner describing LottaComs + primary CTA button ("Get in Touch")
2. **What We Do** — Two-column layout:
   - Software Products
   - Talent Services
3. **Robolab Highlight** — Teaser card with link to Products page
4. **Social Proof** — Client logos or short testimonial(s)
5. **Footer CTA** — "Working on something? Let's talk."

---

### Products `/products`

Showcases Robolab and future software products.

**Sections:**
1. **Robolab Feature Card**
   - What it does
   - Who it's for
   - Key benefits
   - Screenshot or demo link
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

### Contact `/contact`

Conversion page. Keep it simple and frictionless.

**Sections:**
1. **Contact Form** (Netlify Forms)
   - Name
   - Email
   - Topic (dropdown: Products / Talent / Other)
   - Message
2. **Direct Email** — displayed for visitors who prefer it
3. **LinkedIn Links** — for both founders

**Implementation note:** Use `data-netlify="true"` on the `<form>` element and a hidden `<input type="hidden" name="form-name" value="contact" />`. No backend required.

---

## Navigation

```
LottaComs logo   |   Products   Services   About   [Contact]
```

- Logo links to `/`
- Contact rendered as a highlighted button (not a plain link) to keep it prominent
- Mobile: hamburger menu collapsing all nav links

---

## Global Requirements

### Layout
- Every page ends with a CTA pointing to `/contact` — visitors should never have to hunt for how to reach LottaComs
- Consistent header and footer across all pages
- Responsive — mobile-first

### Components
- Prefer `.astro` components for static content
- Use React only where interactivity is required (e.g., contact form validation, mobile nav toggle)

### Performance & Constraints
- `output: "static"` must remain in `astro.config.mjs` — no SSR, no server routes
- All pages must render to static HTML at build time
- No external runtime dependencies beyond what's already in the stack

### Accessibility
- Semantic HTML throughout
- All images require descriptive `alt` text
- Form fields require associated `<label>` elements
- Sufficient color contrast (WCAG AA minimum)

---

## Content Notes

- **Dual-audience awareness:** Software buyers and hiring managers land on the same home page. The "What We Do" split and the two distinct nav destinations (Products / Services) are the primary routing mechanism — copy and visuals must reinforce this split without feeling disjointed.
- **Social proof:** Placeholder slots should be included in the build even if content is TBD at launch; swap in real logos/testimonials without a layout change.
- **Founder bios:** Photo aspect ratio and layout should be consistent for both founders.
