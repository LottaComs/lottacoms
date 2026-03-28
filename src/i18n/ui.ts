export const defaultLang = "en";
export const locales = ["en", "ja", "vn"] as const;
export type Lang = (typeof locales)[number];

export const langLabels: Record<Lang, string> = {
  en: "EN",
  ja: "日本語",
  vn: "Tiếng Việt",
};

// HTML lang attribute per locale (vn uses BCP 47 "vi")
export const htmlLang: Record<Lang, string> = {
  en: "en",
  ja: "ja",
  vn: "vi",
};

const en = {
  // ── Nav ────────────────────────────────────────────────────
  "nav.products": "Products",
  "nav.services": "Services",
  "nav.about": "About",
  "nav.contact": "Contact",
  "nav.aria.home": "LottaComs home",
  "nav.aria.toggle": "Toggle menu",

  // ── Footer ──────────────────────────────────────────────────
  "footer.cta.label": "Let's talk",
  "footer.cta.heading": "Working on something?",
  "footer.cta.body":
    "Whether it's about software or finding the right person — drop us a line.",
  "footer.cta.button": "Get in touch",
  "footer.tagline": "It's the Community.",
  "footer.copyright": "All rights reserved.",

  // ── Home ────────────────────────────────────────────────────
  "home.meta.description":
    "We build software tools and source technical talent for technology teams.",
  "home.hero.eyebrow": "Software & Talent",
  "home.hero.heading": "We build the tools.\nWe find the people.",
  "home.hero.body":
    "LottaComs makes software built for real teams — and when you need the right people to build and run it, we can find them.",
  "home.hero.cta.contact": "Get in touch",
  "home.hero.cta.products": "See what we build",

  "home.what.eyebrow": "What we do",
  "home.what.heading": "Two ways we can help",
  "home.what.software.title": "Software Products",
  "home.what.software.body":
    "We design and build software for real teams with real problems. Our flagship product is Robolab — a fleet management platform for autonomous mobile robots, built without the enterprise overhead.",
  "home.what.software.link": "Explore our products →",
  "home.what.talent.title": "Talent Services",
  "home.what.talent.body":
    "Finding great technical talent is hard. We know the Vietnam and Japan market, and we take a hands-on approach to matching the right people with the right teams.",
  "home.what.talent.link": "Learn how it works →",

  "home.robolab.eyebrow": "Featured product",
  "home.robolab.heading": "Meet Robolab",
  "home.robolab.body":
    "Robolab is a fleet management platform for autonomous mobile robots. Dispatch missions, coordinate traffic, and monitor your entire AMR fleet in real time — from a single dashboard, backed by a clean REST API.",
  "home.robolab.cta.see": "See Robolab",
  "home.robolab.feature.fast": "Fast to set up",
  "home.robolab.feature.config": "No-fuss configuration",
  "home.robolab.feature.observability": "Built-in observability",
  "home.robolab.feature.team": "Team-friendly",

  // ── Products ────────────────────────────────────────────────
  "products.meta.title": "Products",
  "products.meta.description":
    "Robolab and future software products from LottaComs.",
  "products.header.eyebrow": "Products",
  "products.header.heading": "What we build",
  "products.header.body":
    "We focus on tools that get used — practical, well-crafted software for teams that value their time.",

  "products.robolab.badge": "Coming soon",
  "products.robolab.heading": "Robolab",
  "products.robolab.body1":
    "Robolab is a fleet management platform for autonomous mobile robots — AGVs, AMRs, and IMRs. One dashboard to manage your vehicles, dispatch missions, and monitor operations across your facility in real time.",
  "products.robolab.body2":
    "Built API-first with a clean REST interface and a purpose-built web UI. Model your facility as a topological map, define routes, and start dispatching missions — no proprietary vendor stack, no weeks of integration work.",
  "products.robolab.benefits.label": "What it does",
  "products.robolab.b1.title": "Full vehicle control",
  "products.robolab.b1.body":
    "Command any vehicle in your fleet — switch modes, move, pause, resume, reset, or cancel — from the dashboard or REST API. Every action is one click or one call away.",
  "products.robolab.b2.title": "Intelligent mission planning",
  "products.robolab.b2.body":
    "Robolab automatically selects the right vehicle, computes the optimal route, and coordinates traffic windows to prevent conflicts — no manual scheduling required.",
  "products.robolab.b3.title": "Topological facility maps",
  "products.robolab.b3.body":
    "Model your floor as a graph of nodes and edges. Robolab validates connectivity before activation and routes all missions through the map — update the map, not the firmware.",
  "products.robolab.b4.title": "Digital twin simulation",
  "products.robolab.b4.body":
    "Spin up an isolated simulation from a live system snapshot, step through time with media-player controls, and validate changes before they touch the real floor.",

  "products.demo.caption": "Screenshot coming soon",

  "products.coming.eyebrow": "What's next",
  "products.coming.heading": "More coming soon",
  "products.coming.body":
    "We're building in public. More tools are in the works — follow along or reach out if you have a problem worth solving.",
  "products.coming.label": "Next product",
  "products.coming.sub": "Brewing. Stay tuned.",

  // ── Services ────────────────────────────────────────────────
  "services.meta.title": "Services",
  "services.meta.description":
    "Technical talent sourcing and headhunting by LottaComs.",
  "services.header.eyebrow": "Talent Services",
  "services.header.heading":
    "Finding the right people is hard.\nWe've made that our focus.",
  "services.header.body":
    "We specialise in sourcing technical and leadership talent for software companies in Vietnam and Japan. No cold-list blasting — just careful, relationship-driven search.",

  "services.what.heading": "What we do",
  "services.what.body1":
    "We help technology companies find and place technical talent — software engineers, platform and infrastructure specialists, engineering leaders, and more.",
  "services.what.body2":
    "We don't shotgun CVs. We take time to understand your team, your culture, and what a good hire looks like for the role. Then we go and find that person.",
  "services.who.heading": "Who it's for",
  "services.who.i1": "Engineering-led startups moving fast",
  "services.who.i2": "Scale-ups building out a technical function",
  "services.who.i3": "Established teams replacing or expanding key roles",
  "services.who.i4": "Companies struggling with niche or senior searches",

  "services.how.eyebrow": "How it works",
  "services.how.heading": "Simple by design",
  "services.how.s1.num": "01",
  "services.how.s1.title": "We listen first",
  "services.how.s1.body":
    "A no-pressure call to understand the role, your team dynamics, and what success looks like. No forms, no tick-boxes.",
  "services.how.s2.num": "02",
  "services.how.s2.title": "We go looking",
  "services.how.s2.body":
    "We use our network and do real outreach — not just the people actively job-hunting. The best candidates usually aren't.",
  "services.how.s3.num": "03",
  "services.how.s3.title": "You meet real matches",
  "services.how.s3.body":
    "We only put forward candidates who genuinely fit what you described — not whoever's available. You get a small shortlist of quality over a long list of maybes.",

  "services.roles.eyebrow": "Specialisms",
  "services.roles.heading": "Roles we recruit for",
  "services.roles.body":
    "Our focus is technical and leadership roles at software companies. We work to understand the requirements well enough to find people who'll thrive in them.",

  // ── About ───────────────────────────────────────────────────
  "about.meta.title": "About",
  "about.meta.description":
    "The story behind LottaComs and the people who built it.",
  "about.header.eyebrow": "About",
  "about.header.heading": "We burned out on corporate nonsense",
  "about.header.body":
    "So we did something about it. Two people, two skill sets, one small company.",

  "about.story.heading": "The story",
  "about.story.p1":
    "Both of us left the corporate world for the same reason: the overhead wasn't worth it. The politics, the performative busyness, the gap between what the work actually required and what the organisation demanded — it wears you down.",
  "about.story.p2":
    "LottaComs is what came after. One of us builds software. The other places people. We're not trying to become a large agency or a high-growth startup. We're building the kind of place we'd want to work.",
  "about.story.p3":
    "That means staying small, being honest about what we can and can't do, and treating every client and candidate like a real person rather than a transaction. It's not a radical idea — it's just harder to hold onto inside a big company.",
  "about.story.p4":
    "We think of LottaComs as a village: people who've opted out of the corporate game and want to build something on their own terms, with people they trust.",

  "about.founders.eyebrow": "The team",
  "about.founders.heading": "Who we are",
  "about.f1.name": "Nguyen Huu Bao Trung",
  "about.f1.role": "Founder — Software & Systems",
  "about.f1.bio":
    "System consultant and engineer. Works primarily with Japanese clients on requirement definition and system design. Builds software products using AI-assisted development. Native-level Japanese, working English.",
  "about.f2.name": "Co-founder",
  "about.f2.role": "Talent Services",
  "about.f2.bio":
    "Former talent acquisition manager at a mid-size Vietnamese corporation. Specialises in recruiting senior and leadership roles at software companies across Vietnam and Japan. Focused on the hiring side — not the engineering side.",

  "about.values.eyebrow": "How we work",
  "about.values.heading": "What we believe",
  "about.v1.title": "No fake family",
  "about.v1.body":
    "We don't do the \"we're all family here\" line. LottaComs is a community of people who chose each other — that's more meaningful, and more honest.",
  "about.v2.title": "Honest about our limits",
  "about.v2.body":
    'We\'d rather say "we don\'t know" or "that\'s not for us" than overpromise. Scope creep and scope-stretch both come from the same insecurity.',
  "about.v3.title": "Small and intentional",
  "about.v3.body":
    "We're not trying to scale. We want to do fewer things well and work with people we'd genuinely recommend to a friend.",

  // ── Contact ─────────────────────────────────────────────────
  "contact.meta.title": "Contact",
  "contact.meta.description":
    "Get in touch with LottaComs about products or talent services.",
  "contact.header.eyebrow": "Contact",
  "contact.header.heading": "Let's talk",
  "contact.header.body":
    "Whether it's about Robolab, a hiring challenge, or just a question — drop us a line. We read everything.",

  "contact.form.heading": "Send a message",
  "contact.form.name": "Name",
  "contact.form.name.ph": "Your name",
  "contact.form.email": "Email",
  "contact.form.email.ph": "you@example.com",
  "contact.form.topic": "Topic",
  "contact.form.topic.ph": "Select a topic",
  "contact.form.topic.products": "Products (Robolab)",
  "contact.form.topic.talent": "Talent Services",
  "contact.form.topic.other": "Other",
  "contact.form.message": "Message",
  "contact.form.message.ph": "Tell us what's on your mind...",
  "contact.form.submit": "Send message",

  "contact.other.heading": "Other ways to reach us",
  "contact.email.title": "Email",
  "contact.email.body": "We aim to reply within one business day.",
  "contact.li1.title": "LinkedIn — Founder One",
  "contact.li1.body": "Connect directly on LinkedIn.",
  "contact.li2.title": "LinkedIn — Founder Two",
  "contact.li2.body": "Connect directly on LinkedIn.",
  "contact.note.headsup": "Heads up:",
  "contact.note.body":
    "We're a small team, so responses may take a day or two. We'll always get back to you — no message goes unanswered.",
} as const;

type UIKeys = keyof typeof en;

// Skeleton translations — only nav/global strings are provided;
// all other keys fall back to English via useTranslations().
const ja: Partial<Record<UIKeys, string>> = {
  "nav.products": "製品",
  "nav.services": "サービス",
  "nav.about": "会社概要",
  "nav.contact": "お問い合わせ",
  "nav.aria.home": "LottaComsホーム",
  "nav.aria.toggle": "メニューを切り替える",
  "footer.cta.button": "お問い合わせ",
  "footer.tagline": "コミュニティこそがすべて。",
};

const vn: Partial<Record<UIKeys, string>> = {
  "nav.products": "Sản phẩm",
  "nav.services": "Dịch vụ",
  "nav.about": "Giới thiệu",
  "nav.contact": "Liên hệ",
  "nav.aria.home": "Trang chủ LottaComs",
  "nav.aria.toggle": "Chuyển đổi menu",
  "footer.cta.button": "Liên hệ ngay",
  "footer.tagline": "Cộng đồng là tất cả.",
};

export const ui: Record<Lang, Partial<Record<UIKeys, string>>> = { en, ja, vn };
export type { UIKeys };
