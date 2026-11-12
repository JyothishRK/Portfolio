import { defineConfig } from 'eslint/config';
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import astro from 'eslint-plugin-astro';

export default defineConfig(
  { ignores: ['dist', '.astro', 'node_modules', 'reference'] },
  js.configs.recommended,
  ...tseslint.configs.strict,
  ...astro.configs.recommended,
);
