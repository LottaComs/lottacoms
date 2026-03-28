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
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
