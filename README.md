# TrustRank Whitepaper

Formal mathematical model for TrustRank — the crypto-native descendant of PageRank. Trust as a stake-grounded eigenvector, defended by slashing.

Published as a static Next.js site via GitHub Pages.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
```

Static output is written to `out/`.

## Deploy to GitHub Pages

1. Push this directory to [edransy/TrustRank](https://github.com/edransy/TrustRank) on GitHub.
2. In the repo **Settings → Pages**, set **Build and deployment** source to **GitHub Actions**.
3. Push to `main` — the included workflow builds and deploys automatically.

Live URL: `https://edransy.github.io/TrustRank/`

## Source of truth

Page content and styling are a strict match of `content/trustrank_whitepaper.html`, which mirrors the root `trustrank_whitepaper.html` in the parent project. Edit that HTML file to update the published page.

## Tech stack

- [Next.js](https://nextjs.org/) 16 (static export)
- [KaTeX](https://katex.org/) for math rendering
- GitHub Actions for Pages deployment
