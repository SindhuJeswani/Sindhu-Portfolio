# Sindhu Jeswani — Personal Portfolio

A polished, production-ready personal portfolio website built with **Next.js 16**, **TypeScript**, **Tailwind CSS 4**, and **Framer Motion**.

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 (CSS-first config) |
| Motion | Framer Motion (scroll fade-ups, reduced-motion aware) |
| Icons | lucide-react |
| Fonts | Fraunces (serif) + Inter (sans) via `next/font/google` |
| Export | Static (`output: 'export'`) — deploys free on Vercel or GitHub Pages |

---

## Getting Started

### Prerequisites

- Node.js 18+
- npm 10+

### Install & Run Locally

```bash
# Clone
git clone https://github.com/sindhujeswani/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev
```

### Build for Production

```bash
npm run build
# Output is in the `out/` folder (static HTML/CSS/JS)
```

---

## Deployment

### Vercel (recommended — zero config)

```bash
# Install Vercel CLI once
npm i -g vercel

# Deploy from project root
vercel

# For production
vercel --prod
```

Or connect the GitHub repo in the [Vercel dashboard](https://vercel.com/new) — it auto-detects Next.js.

### GitHub Pages

1. In `next.config.ts`, add `basePath: '/portfolio'` if deploying to `username.github.io/portfolio` (not needed for `username.github.io`).
2. Push to GitHub.
3. Add a GitHub Actions workflow:

```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

4. In repo Settings → Pages → set source to `gh-pages` branch.

---

## Editing Content

All site content lives in one file: **[`data/content.ts`](./data/content.ts)**

Edit text, links, project descriptions, skills, and facts there without touching any component files.

---

## Assets You Still Need to Add

| File | Path | Notes |
|---|---|---|
| **CV PDF** | `public/Sindhu_Jeswani_CV.pdf` | The "Download CV" button links here |
| **OG image** | `public/og-image.png` | 1200 × 630 px; used for social sharing previews |

### Optional Additions

- **Profile photo**: No photo section is included by design (monogram "SJ" in the nav). If you want to add one later, place it at `public/profile.jpg` and add an `<Image>` in the `About` section.
- **Live demo links**: Update `demo:` fields in `data/content.ts` once projects are deployed.
- **Custom domain**: Set in Vercel dashboard or GitHub Pages settings, then update `siteConfig.meta.url` in `data/content.ts`.

---

## Project Structure

```
sindhu-portfolio/
├── app/
│   ├── globals.css        # Tailwind 4 + design tokens + utility classes
│   ├── layout.tsx         # Root layout, fonts, meta, JSON-LD
│   └── page.tsx           # Single page — assembles all sections
├── components/
│   ├── Nav.tsx            # Sticky header with theme toggle + mobile menu
│   ├── FadeUp.tsx         # Framer Motion scroll fade-up wrapper
│   ├── ThemeProvider.tsx  # Light/dark context, localStorage persistence
│   └── sections/
│       ├── Hero.tsx
│       ├── About.tsx
│       ├── FeaturedProject.tsx   # MeethaCart case study + SVG diagram
│       ├── Projects.tsx
│       ├── Skills.tsx
│       ├── Certifications.tsx
│       ├── Education.tsx
│       ├── Contact.tsx    # mailto-based form, no backend
│       └── Footer.tsx
├── data/
│   └── content.ts         # ← All editable content here
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── next.config.ts
└── README.md
```

---

## Design Tokens

| Token | Light | Dark |
|---|---|---|
| Background | `#FAF8F4` | `#161816` |
| Body text | `#2B2B2B` | `#ECEAE4` |
| Accent | `#2F5D50` | `#3D7A68` |
| Muted text | `#5F5F5F` | `#ECEAE4/55` |
| Hairline | `#B7C4BD` | `#B7C4BD/20` |
| Serif font | Fraunces | — |
| Sans font | Inter | — |

---

## License

Personal portfolio — all rights reserved. Code structure may be reused with attribution.
