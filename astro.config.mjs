/* global process */
import { defineConfig } from 'astro/config';

// Vercel serves the site at the domain root; GitHub Pages serves it under /Portfolio.
const onVercel = process.env.VERCEL === '1';

export default defineConfig({
  site: onVercel ? 'https://rkjyothish.vercel.app' : 'https://jyothishrk.github.io',
  base: onVercel ? '/' : '/Portfolio',
  devToolbar: { enabled: false },
});
