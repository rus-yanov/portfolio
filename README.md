# Backend Engineer Portfolio

A clean, one-page portfolio built with Next.js + TypeScript + Tailwind CSS. All content lives in `src/data/content.ts`.

## Local Setup

```bash
npm install
npm run dev
```

The site will be available at `http://localhost:3000`.

## Build

```bash
npm run build
```

Because `output: "export"` is enabled, the static site is generated into `out/`.

## Netlify Deploy

1. Push the repository to GitHub.
2. In Netlify, create a new site from Git.
3. Set build command to `npm run build`.
4. Set publish directory to `out`.

Netlify will deploy the static build.

## Content Updates

Edit `src/data/content.ts`. The UI renders directly from this file.
