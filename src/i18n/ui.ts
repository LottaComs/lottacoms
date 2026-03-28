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
    "Whether you need the right software or the right people — we'd love to hear about it.",
  "footer.cta.button": "Get in touch",
  "footer.tagline": "It's the community, community.",
  "footer.copyright": "All rights reserved.",

  // ── Home ────────────────────────────────────────────────────
  "home.meta.description":
    "We build software tools and find great talent for technology teams.",
  "home.hero.eyebrow": "Software & Talent",
  "home.hero.heading": "We build the tools.\nWe find the people.",
  "home.hero.body":
    "LottaComs makes software that teams love — and when you need the right people to build and run it, we can find them.",
  "home.hero.cta.contact": "Get in touch",
  "home.hero.cta.products": "See what we build",

  "home.what.eyebrow": "What we do",
  "home.what.heading": "Two ways we can help",
  "home.what.software.title": "Software Products",
  "home.what.software.body":
    "We design and build software for real teams with real problems. Our flagship product is Robolab — built to make automation accessible, without the enterprise headaches.",
  "home.what.software.link": "Explore our products →",
  "home.what.talent.title": "Talent Services",
  "home.what.talent.body":
    "Finding great technical talent is hard. We've done it, we know the market, and we take a hands-on approach to matching the right people with the right teams.",
  "home.what.talent.link": "Learn how it works →",

  "home.robolab.eyebrow": "Featured product",
  "home.robolab.heading": "Meet Robolab",
  "home.robolab.body":
    "Robolab helps teams automate the repetitive parts of their workflow — without writing a novel's worth of infrastructure code. Built for engineers who want results, not another platform to maintain.",
  "home.robolab.cta.see": "See Robolab",
  "home.robolab.cta.demo": "Request a demo",
  "home.robolab.feature.fast": "Fast to set up",
  "home.robolab.feature.config": "No-fuss configuration",
  "home.robolab.feature.observability": "Built-in observability",
  "home.robolab.feature.team": "Team-friendly",

  "home.social.eyebrow": "Trusted by teams",
  "home.social.heading": "What people are saying",
  "home.social.t1.quote":
    "\"LottaComs didn't just find us a great engineer — they found us someone who actually fit how our team works. That's rare.\"",
  "home.social.t1.name": "Alex M.",
  "home.social.t1.role": "Engineering Lead",
  "home.social.t2.quote":
    '"Robolab cut our deployment prep time in half. The setup was surprisingly straightforward for something so powerful."',
  "home.social.t2.name": "Sam T.",
  "home.social.t2.role": "Platform Engineer",

  // ── Products ────────────────────────────────────────────────
  "products.meta.title": "Products",
  "products.meta.description":
    "Robolab and future software products from LottaComs.",
  "products.header.eyebrow": "Products",
  "products.header.heading": "What we build",
  "products.header.body":
    "We focus on tools that actually get used — practical, well-crafted software for teams that value their time.",

  "products.robolab.badge": "Available now",
  "products.robolab.heading": "Robolab",
  "products.robolab.body1":
    "Robolab helps engineering teams automate the slow, repetitive parts of their workflow. No bloated platform. No six-week onboarding. Just a focused tool that does what it says.",
  "products.robolab.body2":
    "Built for teams who want to ship faster without gluing together a dozen separate tools. Whether you're automating deployments, test pipelines, or internal ops — Robolab adapts to how you already work.",
  "products.robolab.benefits.label": "Key benefits",
  "products.robolab.b1.title": "Fast to set up",
  "products.robolab.b1.body":
    "Running in minutes, not days. Works with your existing stack — no migrations required.",
  "products.robolab.b2.title": "Team-friendly",
  "products.robolab.b2.body":
    "Designed so your whole team can use it, not just the person who configured it.",
  "products.robolab.b3.title": "Built-in observability",
  "products.robolab.b3.body":
    "Know what's running, what failed, and why — without bolting on another monitoring tool.",
  "products.robolab.b4.title": "No platform lock-in",
  "products.robolab.b4.body":
    "Your automations stay yours. Export, version-control, and run them anywhere.",

  "products.demo.caption": "Demo screenshot coming soon",
  "products.demo.link": "request a live demo",

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
  "services.header.heading": "Finding people is hard.\nWe make it easier.",
  "services.header.body":
    "We're engineers and operators who've been on both sides of the hiring table. We know what good looks like — and we know how to find it.",

  "services.what.heading": "What we do",
  "services.what.body1":
    "We help technology companies find and place technical talent — software engineers, platform and infrastructure specialists, engineering leaders, and more.",
  "services.what.body2":
    "We don't shotgun CVs. We take time to understand your team, your culture, and what \"great\" actually means for the role. Then we go find it.",
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
    "We only put forward people we'd hire ourselves. You get a small shortlist of quality over a long list of maybe.",

  "services.roles.eyebrow": "Specialisms",
  "services.roles.heading": "Roles we recruit for",
  "services.roles.body":
    "We focus on technical roles where understanding the work is non-negotiable. If it's in the list, we know it well.",

  // ── About ───────────────────────────────────────────────────
  "about.meta.title": "About",
  "about.meta.description":
    "The story behind LottaComs and the people who built it.",
  "about.header.eyebrow": "About",
  "about.header.heading": "Why we started LottaComs",
  "about.header.body":
    "A small team with an opinion on how software and hiring should work.",

  "about.story.heading": "The story",
  "about.story.p1":
    "LottaComs started from a simple frustration: the tools available to small engineering teams were either too basic to be useful or too complex to be worth it. And finding the right people to work with them? Even harder.",
  "about.story.p2":
    "We've worked in engineering and operations at companies of all sizes. We've felt the pain of bad tooling and mis-hires. LottaComs is our attempt to do something about both.",
  "about.story.p3":
    "Our software is built to be genuinely useful to the teams using it — not to impress a procurement committee. Our talent work is done by people who've actually worked in engineering, not just recruited for it.",
  "about.story.p4":
    "We're building in public, moving carefully, and staying small on purpose. We'd rather do two things well than ten things badly.",

  "about.founders.eyebrow": "The team",
  "about.founders.heading": "The founders",
  "about.f1.name": "Founder One",
  "about.f1.role": "Co-founder",
  "about.f1.bio":
    "Bio coming soon. Reach out via the contact page if you'd like to connect.",
  "about.f2.name": "Founder Two",
  "about.f2.role": "Co-founder",
  "about.f2.bio":
    "Bio coming soon. Reach out via the contact page if you'd like to connect.",

  "about.values.eyebrow": "How we work",
  "about.values.heading": "What we believe",
  "about.v1.title": "Small is fine",
  "about.v1.body":
    "Staying lean means we can care about every customer. We don't want to scale past the point of caring.",
  "about.v2.title": "Do it properly",
  "about.v2.body":
    "Whether it's a line of code or a candidate recommendation — if we wouldn't stand behind it, we don't ship it.",
  "about.v3.title": "Community first",
  "about.v3.body":
    "LottaComs is built around the idea that good communities produce good work. We take that seriously.",

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
