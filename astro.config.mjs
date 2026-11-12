import { defineConfig } from 'astro/config';

// Served by GitHub Pages as a project site, so every URL sits under /Portfolio.
export default defineConfig({
  site: 'https://jyothishrk.github.io',
  base: '/Portfolio',
  devToolbar: { enabled: false },
});
