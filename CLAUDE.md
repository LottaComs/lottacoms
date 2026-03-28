# LottaComs — CLAUDE.md

## Project

Company landing page for LottaComs. Fully static site with a contact form. No server-side code.

## Stack

- **Astro 4** — site framework, `output: "static"`
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

Push to GitHub → Netlify auto-deploys. Config in [netlify.toml](netlify.toml):
- Build command: `npm run build`
- Publish dir: `dist`

## Contact form

Use Netlify Forms — no backend needed. Add `data-netlify="true"` to the `<form>` element and a hidden `<input type="hidden" name="form-name" value="..." />`. Netlify detects and handles it at build time.

## Constraints

- Keep `output: "static"` in [astro.config.mjs](astro.config.mjs) — no SSR, no server routes
- All pages must render to static HTML at build time
- Prefer `.astro` components for static content; use React only when interactivity is needed
