/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        brand: {
          green: {
            50:  "#f3fae8",
            100: "#e5f4cc",
            200: "#c9e99a",
            300: "#a8d962",
            400: "#88c634",
            500: "#48A50C",
            600: "#357D05",
            700: "#337C04",
            800: "#285f03",
            900: "#1d4502",
          },
          gold: {
            DEFAULT: "#ECB32A",
            light: "#f5d270",
            dark: "#c4921c",
          },
        },
        // Semantic text / foreground colors — named by function, not shade
        content: {
          DEFAULT: "#111827", // gray-900 — headings, primary emphasis
          body:    "#4B5563", // gray-600 — paragraph text
          muted:   "#6B7280", // gray-500 — secondary / meta text
          subtle:  "#9CA3AF", // gray-400 — placeholders, decorative icons
          label:   "#374151", // gray-700 — form labels
        },
        // Semantic border / divider colors
        divider: {
          DEFAULT: "#E5E7EB", // gray-200 — card borders, standard dividers
          light:   "#F3F4F6", // gray-100 — header/nav subtle borders
          input:   "#D1D5DB", // gray-300 — form field borders
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
