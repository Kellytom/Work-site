import { defineConfig } from 'astro/config';


import pagefind from "astro-pagefind";
import preact from '@astrojs/preact';





// https://astro.build/config
export default defineConfig({
  integrations: [
    preact(),
    pagefind(),
  ],
  // Enable TypeScript support
  typescript: {
    strictMode: true,
  },
  // Use relative base for static output
  base: '',
  build: {
    assets: 'assets'
  },
  // Configure dev server
  server: {
    port: 3000,
    host: true
  }
});
