import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Enable TypeScript support
  typescript: {
    strictMode: true,
  },
  // Configure build output
  build: {
    assets: 'assets'
  },
  // Configure dev server
  server: {
    port: 3000,
    host: true
  }
});
