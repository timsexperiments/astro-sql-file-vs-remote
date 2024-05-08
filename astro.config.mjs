import { defineConfig } from 'astro/config';
import cloudflare from "@astrojs/cloudflare";

import db from "@astrojs/db";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare({
    platformProxy: {
      enabled: true
    }
  }),
  integrations: [db(), tailwind()]
});