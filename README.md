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

**One-time setup:**

1. Open [TrustRank → Settings → Pages](https://github.com/edransy/TrustRank/settings/pages)
2. Under **Build and deployment**, set **Source** to **Deploy from a branch**
3. Set **Branch** to `gh-pages` and folder `/ (root)`
4. Click **Save**

The workflow builds `out/` and pushes it to the `gh-pages` branch on every push to `main`. No GitHub Actions Pages integration is required.

Live URL: `https://edransy.github.io/TrustRank/`

**First deploy:** push to `main`, wait for the workflow to finish, then refresh the Pages settings — the `gh-pages` branch is created automatically by the deploy step.

## Source of truth

Page content and styling are a strict match of `content/trustrank_whitepaper.html`, which mirrors the root `trustrank_whitepaper.html` in the parent project. Edit that HTML file to update the published page.

## Tech stack

- [Next.js](https://nextjs.org/) 16 (static export)
- [KaTeX](https://katex.org/) for math rendering
- GitHub Actions for Pages deployment
