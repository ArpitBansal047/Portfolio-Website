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
4. Optional: set a custom domain in Netlify site settings.

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
