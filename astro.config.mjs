import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind()],
  output: "static",
  server: {
    host: true,
  },
  i18n: {
    defaultLocale: "en",
    locales: ["en", "ja", "vn"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
