# Portfolio

Personal portfolio of R K Jyothish. A one-page static site built with Astro, GSAP and Lenis.

## Develop

```bash
npm install
npm run dev
```

Then open `http://localhost:4321/`.

## Checks

```bash
npm run check   # types
npm run lint    # ESLint and Prettier
npm run build   # production build into dist/
```

## Where things live

- `src/data/site.ts`: every piece of text and every number on the page. Edit content here.
- `src/components/`: one component per page section.
- `src/scripts/`: one animation module per section. All motion is skipped for reduced-motion users.
- `src/styles/global.css`: design tokens (colors, fonts, spacing).
- `reference/`: the original single-file preview the design was built from.

## Deploy

Vercel deploys automatically on every push: pull requests get a preview, and `main` goes to rkjyothish.vercel.app. `vercel.json` tells it to build with Astro, and `package.json` pins the Node version Astro needs.
