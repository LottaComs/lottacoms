import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), tailwind({ applyBaseStyles: false })],
  output: "hybrid",

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

  adapter: cloudflare()
});