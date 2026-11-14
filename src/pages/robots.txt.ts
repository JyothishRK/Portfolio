import type { APIRoute } from 'astro';

// Open to every crawler, AI ones included (GPTBot, ClaudeBot, PerplexityBot...).
export const GET: APIRoute = ({ site }) =>
  new Response(`User-agent: *\nAllow: /\n\nSitemap: ${new URL('sitemap.xml', site)}\n`);
