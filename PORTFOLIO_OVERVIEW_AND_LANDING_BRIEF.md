# Arpit Bansal — Portfolio Overview & Landing Design Brief

**Purpose:** Reference doc for portfolio maintenance, recruiter positioning, and **AI-assisted landing page redesign** (Stitch, Figma AI, Midjourney prompts, etc.).

**Last updated:** July 2026  
**Live stack:** React 18 · TypeScript · Vite · GSAP · Three.js / React Three Fiber  
**Repo:** `C:\Apps\Portfolio-Website`

---

## 1. Short summary (copy-paste ready)

### Technical (2 sentences)

Personal portfolio SPA built with React 18, TypeScript, and Vite. It uses GSAP ScrollSmoother for scroll UX, a Rapier-physics 3D tech stack (React Three Fiber), light/dark themes, optional ambient sound, custom cursor, loading screen, and a keyword-matched recruiter FAQ panel — all data-driven from `portfolio.ts`.

### Content (2 sentences)

Showcases Arpit Bansal as an Amdocs Software Developer in Pune who ships GenAI automation and internal platforms with measurable impact (90% manual work cut, 5h→1h test cycles, tools used by 10+ devs daily). Beyond production work, it highlights flagship side project YOU (clinical wellness), web experiments (Cryptoverse, Streamer), certificates, leadership (CSL 2026 organizer + auction app), and office sports wins.

---

## 2. Who this is for

| Audience | What they should take away in ~60 seconds |
|----------|-------------------------------------------|
| **Recruiters / hiring managers** | Production impact with numbers, full-stack + GenAI, open to full-time roles in India |
| **Engineering interviewers** | Depth via case studies, stack rationale, real telecom billing context |
| **Peers** | Polished portfolio-as-a-project; interactive 3D stack |

---

## 3. Site structure (scroll order)

```
Loading screen (progress % → Welcome click)
    ↓
Navbar (fixed): avatar · email (desktop) · nav links · theme/sound
    ↓
LANDING ← redesign target
About
Career (Amdocs horizontal projects + YHills)
Projects hub:
  ├── YOU (flagship WIP, screenshot carousel)
  ├── Web Experiments (Cryptoverse, Streamer carousel)
  ├── 3D Tech Stack (physics balls)
  └── Certificates (technical + non-technical, PDF download)
Education timeline
Beyond Code (4 tiles) + Duolingo flying owl
Contact (social + form)
    ↓
Floaters: Resume (left) · Recruiter chatbot (right)
```

---

## 4. Feature inventory

### Core content
- **Hero metrics (4 cards):** 90% manual cut · 5h→1h tests · 15–20% productivity · 10+ daily devs
- **Amdocs projects (4):** ComcastHub, BPT Charge Code, Cipher EOC, APEye — each with problem/impact/stack + optional case study
- **Personal projects:** YOU (WIP), Cryptoverse, Streamer
- **Certificates (8):** Udemy/Coursera PDFs with per-cert theme colors
- **Beyond Code:** CSL 2026, team outings, dance/singing (YouTube), sports (Best Bowler cricket + office tournaments)
- **Education:** BCM School → Thapar B.E. Computer Engineering (7.96 CGPA)

### Interactive / UX
- Recruiter FAQ chatbot (30+ entries, no AI API)
- GSAP scroll animations + split text on section titles
- 3D physics tech stack (25 skills, draggable)
- Light / dark mode (persisted)
- Ambient sound + UI click sounds (opt-in)
- Custom blend-mode cursor (desktop)
- Image lightbox + download on photos/screenshots
- Mobile hamburger drawer nav (≤768px)

### Data architecture
- `src/data/portfolio.ts` — site copy, projects, certs, beyond code, metrics
- `src/data/recruiterFaq.ts` — chatbot Q&A
- `src/data/techStackData.ts` — 3D stack labels

---

## 5. Brand & visual system (for AI design tools)

### Typography
- **Font:** Geist (Google Fonts) — weights 300–600
- **Display:** Large uppercase name, letter-spaced
- **Body:** Clean sans, muted secondary text

### Colors (CSS variables — must work in both themes)

| Token | Dark | Light |
|-------|------|-------|
| Background | `#09090b` | `#f8fafc` |
| Surface | `#18181b` | `#ffffff` |
| Text primary | `#f4f4f5` | `#09090b` |
| Text muted | `#a1a1aa` | `#27272a` |
| Accent (purple) | `#a78bfa` | `#6d28d9` |
| Accent secondary (cyan) | `#38bdf8` | `#0369a1` |
| Border | `#3f3f46` | `#d4d4d8` |

### Mood / aesthetic
- **Dark-first** developer portfolio (light mode supported)
- Purple/violet accent with soft pink blur orbs (`landing-circle1` animation)
- Premium, minimal, motion-forward — not corporate blue
- Recruiter-friendly: clarity over flash; numbers visible early
- References: MoncyDev portfolio template lineage, modern GSAP dev sites

### Existing decorative elements (keep or evolve)
- Fixed blur gradient orbs (pink/purple) top-left
- Nav fade gradient at top on scroll
- No hero photo currently in landing (profile only in navbar + loading)
- `heroDeveloperImage` exists in data (`/images/hero-coding.jfif`) — **unused in landing today**

---

## 6. Current landing — what exists today

**File:** `src/components/Landing.tsx` · `src/components/styles/Landing.css`

### Layout (mobile-first, centered column)
1. `Hello! I'm` (accent, light weight)
2. **ARPIT / BANSAL** (large display name)
3. `Software Developer` (uppercase role)
4. **Swapping GSAP lines** (hidden until JS loads):
   - Line A: `Full-Stack` ↔ `Developer`
   - Line B: `GenAI · React` ↔ `Automation`
5. `Open to roles` pill
6. Email link (mobile-visible; desktop also in navbar)
7. **4 metric cards** in a grid
8. CTAs: **Download Resume** (primary) · **Contact Me** (ghost)

### What landing does NOT show yet
- Location (Pune) — only in About/contact
- Company name (Amdocs) in hero
- Profile or coding hero image
- One-line value prop from `site.headline`
- Links to GitHub/LinkedIn in hero (only in contact + floaters)

### Key copy from data (use in redesign)

```
Name: Arpit Bansal
Role: Software Developer
Location: Pune, Maharashtra, India
Availability: Open to full-time roles (remote-friendly across India)

Headline: I build full-stack apps, GenAI automation tools & developer platforms.

Email: bansal.arpit02@gmail.com
Phone: +91-8146126152

Hero metrics:
  90%       — Manual work cut (GenAI charge-code Excel→SQL)
  5h → 1h   — Faster test cycles (APEye Jenkins orchestration)
  15–20%    — Productivity target (ComcastHub unified dev hub)
  10+       — Devs use it daily (APEye regression tool)
```

---

## 7. AI landing design brief (paste into Stitch / Figma / ChatGPT)

### Prompt starter

> Design a hero/landing section for a **software developer portfolio** (desktop + mobile).
>
> **Person:** Arpit Bansal, Software Developer at Amdocs, Pune, India. Builds GenAI automation and internal developer platforms for telecom billing. Open to full-time roles.
>
> **Goal:** Recruiter understands impact in under 10 seconds. Show **quantified metrics** prominently. Feel modern, dark-mode-first, purple accent — not generic corporate.
>
> **Must include:**
> - Greeting + large name (ARPIT BANSAL)
> - Role: Software Developer
> - Value line: full-stack + GenAI + developer platforms
> - 4 metric highlights: 90% manual cut · 5h→1h test cycles · 15–20% productivity · 10+ daily users
> - CTAs: Download Resume (primary) · Contact Me (secondary)
> - Optional: subtle coding/tech visual, Pune location, Amdocs context
>
> **Style:** Geist font, dark bg `#09090b`, accent purple `#a78bfa`, soft blurred gradient orbs, generous whitespace, card-based metrics, mobile-stacked layout.
>
> **Avoid:** Stock photo clichés, cluttered skill badges in hero, rainbow gradients, busy particle backgrounds competing with metrics.
>
> **Inspiration:** High-end GSAP developer portfolios — cinematic but readable.

### Layout suggestions for AI to explore

| Option | Description |
|--------|-------------|
| **A — Split hero** | Left: name + role + CTAs. Right: metric grid or abstract 3D/code visual |
| **B — Metric-first** | Name smaller; 4 metrics as hero band immediately below fold line |
| **C — Statement hero** | One bold line: *"I cut manual billing work 90% with GenAI"* then name + CTAs |
| **D — Bento grid** | Name block + 4 metric cells + resume CTA in asymmetric bento (matches YOU app style) |

### Responsive rules
- **Desktop (≥1024px):** Two-column or wide single column; metrics in 2×2 or 4×1 row
- **Tablet (769–1023px):** Slightly smaller type; metrics 2×2
- **Mobile (≤768px):** Single column; name → role → metrics → CTAs; no horizontal scroll; tap targets ≥44px

### Integration constraints (if implementing in React)
- Must coexist with fixed navbar (top ~80–100px padding)
- GSAP may animate swap headlines — leave hook points or static fallback
- Use CSS variables for theme (`--accentColor`, `--textPrimary`, etc.)
- No layout shift when swapping text loads (`opacity: 0` → `.is-live`)
- Resume path: `/resume/Arpit_Bansal.pdf`
- Scroll target for Contact: `#contact`

---

## 8. Uniqueness analysis

| vs typical portfolio | This site |
|--------------------|-----------|
| Project cards only | Problem → impact → stack + case studies |
| Contact form only | FAQ chatbot with 30+ recruiter answers |
| Static skill list | Interactive 3D physics tech stack |
| Code-only identity | Beyond Code + Duolingo + sports leadership |
| Light template | Custom theme, sound, loading ritual, custom cursor |

**Honest rating:** ~7/10 uniqueness for a personal portfolio — strong recruiter UX and technical polish; template lineage visible in scroll/typography patterns.

---

## 9. Gaps & improvement backlog

| Item | Priority |
|------|----------|
| Landing redesign (this doc) | High |
| Use `heroDeveloperImage` or profile in hero | Medium |
| Show `site.headline` on landing | Medium |
| YOU live demo URL in hero/projects | Medium |
| TechStack chunk ~3 MB — lighter mobile fallback | Medium |
| Verify `public/resume/Arpit_Bansal.pdf` before deploy | High |
| Cryptoverse — add live demo or mark clearly incomplete | Low |
| Delete dev artifact `resume_extract.txt` | Low |

---

## 10. Interview & resume alignment

**Elevator pitch (30 sec):**  
Software Developer at Amdocs, Pune. I build internal platforms and GenAI tools for telecom billing — cut manual charge-code work ~90%, shortened test cycles from 5 hours to 1, and ship tools 10+ developers use daily. Side project YOU is a clinical wellness app with Firebase and Gemini. Open to full-time roles across India.

**Top proof points:** ComcastHub · BPT GenAI · Cipher EOC · APEye · YOU · CSL organizer + auction app

**Stack to mention:** React, Next.js, TypeScript, Python, Jenkins, Oracle, Firebase, Gemini, Stitch

---

## 11. Files to edit for landing redesign

| File | Purpose |
|------|---------|
| `src/components/Landing.tsx` | Hero structure & copy |
| `src/components/styles/Landing.css` | Layout & responsive styles |
| `src/data/portfolio.ts` | `site`, `heroMetrics` content |
| `src/components/utils/initialFX.ts` | GSAP swap animations for headline |
| `src/index.css` | Theme tokens (do not hardcode colors) |

---

*Document created for portfolio maintenance and AI-assisted landing design. Share Section 7 verbatim with design AI tools.*
