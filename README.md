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

**One-time setup (required):**

1. Open [TrustRank → Settings → Pages](https://github.com/edransy/TrustRank/settings/pages)
2. Under **Build and deployment**, set **Source** to **GitHub Actions** (not “Deploy from a branch”)
3. Save — no branch or folder selection is needed

**Then push to `main`:**

```bash
git push origin main
```

The workflow builds `out/` and deploys automatically.

Live URL: `https://edransy.github.io/TrustRank/`

If the Actions run still fails with “Get Pages site failed”, Pages is not enabled yet — complete step 2 above, then re-run the workflow from the Actions tab.

## Source of truth

Page content and styling are a strict match of `content/trustrank_whitepaper.html`, which mirrors the root `trustrank_whitepaper.html` in the parent project. Edit that HTML file to update the published page.

## Tech stack

- [Next.js](https://nextjs.org/) 16 (static export)
- [KaTeX](https://katex.org/) for math rendering
- GitHub Actions for Pages deployment
