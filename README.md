# Arpit Bansal — Portfolio Website

Personal portfolio for **Arpit Bansal**, Software Developer at Amdocs (Pune, India).  
Showcases production tools, side projects, certifications, and contact info — built as a fast, responsive single-page app with scroll-driven animations and a 3D tech stack.

---

## Live site

Deploy via [Netlify](https://www.netlify.com/) using the included `netlify.toml` (build command: `npm run build`, publish directory: `dist`).

---

## What this site includes

| Section | Purpose |
|--------|---------|
| **Hero** | Name, role, location, resume & contact CTAs, impact metrics |
| **About** | Bio, profile photo, career summary |
| **Career** | Amdocs experience + horizontal tools showcase (ComcastHub, BPT Charge, Cipher EOC, APEye, CSL Auction) |
| **Projects** | Personal apps — Cryptoverse, Cyberpunks, Streamer |
| **Apps** | YOU (mental health) & RavenSwift with screenshot galleries |
| **Certificates** | PDF/PNG previews with lightbox |
| **Tech Stack** | Interactive 3D skill balls (React Three Fiber + physics) |
| **Education** | Thapar University & school timeline |
| **Beyond Code** | Sports, events, Duolingo streak, YouTube |
| **Contact** | Email, GitHub, LinkedIn, YouTube |

All copy, projects, and images are driven from a single data file: `src/data/portfolio.ts`.

---

## Tech stack

- **React 18** + **TypeScript** + **Vite**
- **GSAP** + ScrollTrigger — landing animations, section reveals
- **Three.js** / **React Three Fiber** / **Rapier** — 3D tech stack scene
- **CSS** — mobile-first responsive layout (breakpoints in `Breakpoints.css`, `Responsive.css`)

---

## Project structure

```
Portfolio-Website/
├── public/
│   ├── images/          # Profile, Amdocs screenshots, project assets
│   ├── certificates/    # Certificate PDFs & previews
│   └── resume/          # Resume PDF
├── src/
│   ├── components/      # UI sections (Landing, Career, TechStack, …)
│   ├── data/
│   │   └── portfolio.ts # ← Edit content here
│   └── main.tsx
├── netlify.toml         # Netlify deploy config
└── package.json
```

---

## Getting started

**Requirements:** Node.js 18+

```bash
git clone https://github.com/ArpitBansal047/Portfolio-Website.git
cd Portfolio-Website
npm install
npm run dev
```

Open **http://localhost:5173**

| Command | Description |
|---------|-------------|
| `npm run dev` | Local dev server |
| `npm run build` | Production build → `dist/` |
| `npm run preview` | Preview production build |
| `npm run lint` | ESLint |

---

## Customization

1. **Content** — edit `src/data/portfolio.ts` (name, projects, links, metrics, about text).
2. **Images** — add files under `public/images/` and update paths in `portfolio.ts`.
3. **Resume** — replace `public/resume/Arpit_Bansal_Resume.pdf`.
4. **SEO** — update meta tags & JSON-LD in `index.html`.

---

## Deployment (Netlify)

1. Push this repo to GitHub.
2. Netlify → **Add new site** → Import from Git.
3. Settings are auto-read from `netlify.toml`:
   - Build: `npm run build`
   - Publish: `dist`
   - Node: `20`
4. Optional: set a custom domain in Netlify site settings.

### Before / after every deploy — checklist

| Check | Why |
|-------|-----|
| `npm run build` passes locally | Catches TypeScript & Vite errors before Netlify fails |
| `npm run preview` — test Apps carousel, Amdocs tools, mobile | Production build behaves differently from `dev` |
| Hard refresh or incognito | Avoids cached JS/images from old deploys |
| Chrome tab shows **AB** favicon + **Arpit Bansal — Software Developer** | Branding & SEO |
| Resume PDF opens: `/resume/Arpit_Bansal_Resume.pdf` | Static file must exist in `public/` |
| Project `liveUrl` links work | Update in `portfolio.ts` after deploying side projects |
| **Deploys → Clear cache and deploy site** after image or favicon changes | Netlify CDN can serve stale assets |
| Add `og:image` in `index.html` with full Netlify URL once live | LinkedIn/WhatsApp link previews need absolute image URL |
| Netlify **Domain settings → HTTPS** enabled | Free SSL; verify green padlock |
| Set site name e.g. `arpit-bansal.netlify.app` | Easier to share on resume & LinkedIn |

### Browser tab branding

- **Favicon:** `public/favicon.svg` — **AB** monogram on dark background (readable at 16×16 px). Portfolios use initials or a simple mark, not a photo.
- **Tab title:** `Arpit Bansal — Software Developer` (name + current role; keep under ~55 characters).
- **Theme color:** `#0b080c` matches the site background (mobile browser chrome).

To replace the logo later: edit `public/favicon.svg` and `public/apple-touch-icon.svg`, then redeploy with cache clear.

---

## Attribution

Animation and layout patterns were initially inspired by [MoncyDev/Portfolio-Website](https://github.com/MoncyDev/Portfolio-Website). This repository is a **full rewrite and customization** with original content, data model, career sections, and responsive fixes by Arpit Bansal.

---

## Author

**Arpit Bansal**  
Software Developer @ Amdocs · Pune, India

- GitHub: [@ArpitBansal047](https://github.com/ArpitBansal047)
- LinkedIn: [arpit0291](https://www.linkedin.com/in/arpit0291)
- Email: bansal.arpit02@gmail.com

---

## License

Copyright © 2026 Arpit Bansal. See [LICENSE](LICENSE).
