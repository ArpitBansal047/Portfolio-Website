export type StackRationale = {
  tech: string;
  why: string;
  alternative?: string;
};

export type CaseStudy = {
  problemDetail: string;
  approach: string[];
  stackRationale: StackRationale[];
  outcomes: string[];
};

export type Project = {
  id: string;
  number: string;
  name: string;
  category: string;
  glance?: string;
  problem: string;
  problemBrief?: string;
  impact: string;
  impactBrief?: string;
  stack: string[];
  image: string;
  /** Logo / diagram cards should contain instead of cover-crop. */
  imageFit?: "cover" | "contain";
  previewUrl?: string;
  liveUrl?: string;
  githubUrl?: string;
  status?: "live" | "wip" | "incomplete";
  caseStudy?: CaseStudy;
};

export type WipProject = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  descriptionBrief?: string;
  impact?: string;
  impactBrief?: string;
  stack: string[];
  bullets?: string[];
  githubUrl?: string;
  galleryUrl?: string;
  uiLink?: string;
  screenshots: { src: string; label: string }[];
  caseStudy?: CaseStudy;
};

export type Certificate = {
  title: string;
  issuer: string;
  file: string;
  type: "pdf" | "png";
  emoji: string;
  topic: string;
  section: CertificateSection;
  impactLine: string;
  themeColor: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  kind: "work" | "education";
  badge?: "chess" | "badminton" | "book";
};

export const educationBulletIcons = {
  book: "/images/education/books.png",
  badminton: "/images/education/badminton-shuttle.png",
  chess: "/images/education/chess-king.png",
} as const;

export const duolingoMeta = {
  streakLine: "2,100 day streak on Duolingo for learning Spanish",
  scoreLine: "Current score 63 — Limited working proficiency",
};

export type BeyondItem = {
  emoji: string;
  title: string;
  description: string;
  leadershipImpact?: string;
  metric?: string;
  link?: string;
  linkLabel?: string;
  linkVariant?: "youtube";
  image?: string;
  imageClass?: string;
};

export type CertificateSection = "technical" | "non-technical";

export type HeroMetricAnimation =
  | { kind: "percent"; target: number }
  | { kind: "hours-compare"; from: number; to: number }
  | { kind: "percent-range"; min: number; max: number }
  | { kind: "count-plus"; target: number };

export type HeroMetric = {
  value: string;
  title: string;
  detail: string;
  animation: HeroMetricAnimation;
};

export const heroMetrics: HeroMetric[] = [
  {
    value: "90%",
    title: "Manual Work Cut",
    detail: "BPT GenAI tool",
    animation: { kind: "percent", target: 90 },
  },
  {
    value: "5h → 1h",
    title: "Faster Test Cycles",
    detail: "Jenkins orchestration",
    animation: { kind: "hours-compare", from: 5, to: 1 },
  },
  {
    value: "15–20%",
    title: "Productivity Target",
    detail: "ComcastHub unified dev hub",
    animation: { kind: "percent-range", min: 15, max: 20 },
  },
  {
    value: "31M+",
    title: "Subscribers Touched",
    detail: "Charter EIP credit engine",
    animation: { kind: "count-plus", target: 31 },
  },
];

export const site = {
  name: "Arpit Bansal",
  tabTitle: "Arpit Bansal — Software Developer",
  title: "Software Developer",
  location: "Pune, Maharashtra, India",
  availability: "Open to full-time roles",
  email: "bansal.arpit02@gmail.com",
  phone: "+91-8146126152",
  whatsapp:
    "https://wa.me/918146126152?text=Hi%20Arpit%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.",
  resumePath: "/resume/Arpit_Bansal.pdf",
  github: "https://github.com/ArpitBansal047",
  linkedin: "https://www.linkedin.com/in/arpit-bansal-103731192",
  youtube: "https://www.youtube.com/@arpitbansal3263",
  profileImage: "/images/profile.jpg",
  /** Live site origin — used for deep links you can paste in LinkedIn */
  origin: "https://arpit29.netlify.app",
};

/** Deep links — paste in LinkedIn / Slack. Local: http://localhost:5173/#… */
export const deepLinks = {
  home: `${site.origin}/`,
  about: `${site.origin}/#about`,
  career: `${site.origin}/#career`,
  amdocs: `${site.origin}/#amdocs-work`,
  projects: `${site.origin}/#projects`,
  apps: `${site.origin}/#apps`,
  you: `${site.origin}/#you`,
  websites: `${site.origin}/#websites`,
  education: `${site.origin}/#education`,
  techstack: `${site.origin}/#techstack`,
  certificates: `${site.origin}/#certificates`,
  beyond: `${site.origin}/#beyond`,
  feed: `${site.origin}/#infeed`,
  infeed: `${site.origin}/#infeed`,
  contact: `${site.origin}/#contact`,
} as const;

export const portfolioSiteMeta = {
  builtWith: ["React 18", "TS", "Vite", "GSAP", "R3F"],
};

export const portfolioNotes = {
  amdocsConfidential: "Internal production tools — no public live demos.",
  youWip: "Work in progress — limited public detail.",
  techStackViewport: "Richest on larger screens; touch and drag still work on mobile.",
};

export const aboutParagraphs = [
  "I'm Arpit Bansal, a Software Developer at Amdocs in Pune (3+ years). I build production systems across React, Node.js, Java, Python, and C++ — with hands-on GenAI (Gemini 1.5 Pro) — spanning large-scale billing, REST APIs, and reconciliation for millions of customers.",
  "I collaborate closely with billing and operations teams, and I also ship AI-native products independently from scratch. Open to full-time roles across India, including remote-friendly teams.",
];

export const amdocsMeta = {
  role: "Software Developer",
  company: "Amdocs",
  logo: "/images/logos/amdocs.png",
  website: "https://www.amdocs.com",
  period: "Jul 2023 — Present",
  location: "Pune, Maharashtra",
  description:
    "Amdocs is a software and services company that helps telecom and media businesses manage billing and digital operations.",
};

export const amdocsProjects: Project[] = [
  {
    id: "comcasthub",
    number: "01",
    name: "ComcastHub",
    category: "Internal Platform · Next.js",
    problem:
      "Account developers used scattered internal tools with no unified hub — costing each developer 2–3 hours every week.",
    problemBrief:
      "Account developers lost 2–3 hrs/week juggling scattered internal tools with no unified hub.",
    impact:
      "Led development of ComcastHub (Next.js, React, TypeScript, Tailwind) — centralized developer tooling targeting a 15–20% productivity boost, deployed on AWS with Jest for UI reliability.",
    impactBrief:
      "Led ComcastHub on AWS (Next.js/React/TS) — 15–20% productivity target, Jest-backed UI reliability.",
    stack: ["Next.js 14", "React 18", "TypeScript", "Tailwind", "AWS", "Jest"],
    image: "/images/amdocs/comcasthub.png",
    caseStudy: {
      problemDetail:
        "Developers juggled 8+ internal tools across tabs — losing 2–3 hours weekly to context switching and inconsistent UX.",
      approach: [
        "Mapped top daily workflows into hub modules after developer interviews.",
        "Built Next.js 14 App Router with TypeScript and shared Tailwind design tokens.",
        "Deployed on AWS with Jest coverage on critical navigation flows.",
      ],
      stackRationale: [
        { tech: "Next.js 14", why: "Fast SSR pages for internal tools", alternative: "CRA" },
        { tech: "AWS", why: "Team-standard cloud hosting & scale", alternative: "On-prem" },
        { tech: "Jest", why: "Catch shared-nav regressions early", alternative: "Manual QA only" },
      ],
      outcomes: ["Unified dev hub", "15–20% productivity target", "Safer UI releases on AWS"],
    },
  },
  {
    id: "cipher-eoc",
    number: "02",
    name: "Cipher EOC",
    category: "Billing Automation · Streamlit",
    problem:
      "Daily End-of-Cycle billing workflows took ~90 minutes of manual steps across Oracle, SSH, and browser tasks.",
    problemBrief:
      "Daily End-of-Cycle billing workflows took ~90 minutes of manual Oracle, SSH, and browser steps.",
    impact:
      "Automated 85% of daily billing workflows with Cipher EOC (Python/Streamlit) — cutting execution from 90 to 40 minutes using Oracle DB, Paramiko SSH, and Selenium Edge, validated with PyTest.",
    impactBrief:
      "Cipher EOC automates 85% of EOC workflows — daily runtime cut from 90 to ~40 minutes.",
    stack: ["Python", "Streamlit", "Oracle", "Selenium", "Paramiko", "PyTest"],
    image: "/images/amdocs/cipher-eoc.png",
    caseStudy: {
      problemDetail:
        "End-of-Cycle billing required ~90 minutes of manual Oracle queries, SSH steps, and browser tasks every day.",
      approach: [
        "Built Streamlit UI so operators trigger workflows with one click.",
        "Automated Oracle DB, Paramiko SSH, and Selenium Edge browser steps.",
        "PyTest suite for regression on critical automation paths.",
      ],
      stackRationale: [
        { tech: "Streamlit", why: "Fast internal UI for ops teams", alternative: "React" },
        { tech: "Selenium", why: "Legacy browser-only billing screens", alternative: "API-only" },
      ],
      outcomes: ["85% workflow automation", "90 → 40 min daily runs", "PyTest-validated paths"],
    },
  },
  {
    id: "eip-credit",
    number: "03",
    name: "Unlimited Premium EIP Credit",
    category: "Billing Engine · Charter",
    problem:
      "Promo offsets and installment charges for Unlimited Premium needed a reliable way to credit only eligible active subscriber lines at Charter scale.",
    problemBrief:
      "Charter needed config-driven EIP credits that net installment charges against promo offsets for eligible lines only.",
    impact:
      "Implemented a config-driven Unlimited Premium EIP credit engine for Charter (31M+ customers) in the Amdocs billing layer — netting installment charges against promo offsets and crediting only eligible active subscriber lines.",
    impactBrief:
      "Config-driven EIP credit engine for Charter 31M+ customers — eligible active lines only.",
    stack: ["Java", "Billing Layer", "Config-driven", "Charter"],
    image: "/images/amdocs/eip-charter.png",
    imageFit: "cover",
    caseStudy: {
      problemDetail:
        "Unlimited Premium promotions required installment charges to be offset by promo credits without over-crediting inactive or ineligible lines across a national Charter base.",
      approach: [
        "Modeled eligibility rules as config so promo offsets stay maintainable.",
        "Netted installment charges against promo credits in the billing layer.",
        "Credited only active subscriber lines that matched eligibility criteria.",
      ],
      stackRationale: [
        { tech: "Config-driven rules", why: "Promo logic changes without redeploying core billing", alternative: "Hard-coded Java" },
        { tech: "Amdocs billing layer", why: "Runs inside production rating/credit path", alternative: "Offline batch-only" },
      ],
      outcomes: ["31M+ customer footprint", "Eligible-line-only credits", "Promo offset accuracy"],
    },
  },
  {
    id: "bpt-charge",
    number: "04",
    name: "BPT Charge Code Tool",
    category: "GenAI · Python Automation",
    problem:
      "Teams manually converted Excel charge-code inputs into SQL files — slow, repetitive, and prone to human error.",
    problemBrief:
      "Teams manually converted Excel charge-code inputs into SQL — slow, repetitive, and error-prone.",
    impact:
      "Developed the GenAI-powered BPT Charge Code Tool in Python to automate Excel parsing and relational SQL script generation — reducing manual data entry and deployment errors by 90%.",
    impactBrief:
      "GenAI Python tool: Excel → relational SQL — 90% less manual entry and deploy errors.",
    stack: ["Python", "GenAI", "SQL", "Excel"],
    image: "/images/amdocs/bpt-charge.webp",
    caseStudy: {
      problemDetail:
        "Billing teams manually converted Excel charge-code spreadsheets into multi-table SQL — error-prone across dozens of tables.",
      approach: [
        "Parsed Excel with pandas; mapped columns to Oracle schemas via config files.",
        "Used GenAI to infer relational links and generate batched SQL scripts.",
        "Added validation to flag ambiguous mappings before deploy.",
      ],
      stackRationale: [
        { tech: "Python", why: "Fast Excel parsing and script generation", alternative: "Java" },
        { tech: "GenAI", why: "Handles variable Excel layouts", alternative: "Pure rules" },
      ],
      outcomes: ["90% less manual entry", "Fewer deployment errors", "Faster charge-code setup"],
    },
  },
  {
    id: "britebill-recon",
    number: "05",
    name: "BriteBill Reconciliation",
    category: "Migration · C++ Daemon",
    problem:
      "Comcast BriteBill migration needed automated reconciliation so rejected accounts were flagged for reprocessing instead of silent data gaps.",
    problemBrief:
      "BriteBill migration for 10M+ customers needed automated file ingest and reject flagging.",
    impact:
      "Established the reconciliation subsystem for Amdocs Comcast BriteBill migration (10M+ customers) — a C++ daemon ingesting reconciliation files and auto-flagging rejected accounts for reprocessing.",
    impactBrief:
      "C++ reconciliation daemon for BriteBill migration — 10M+ customers, auto-flag rejects.",
    stack: ["C++", "Reconciliation", "BriteBill", "File ingest"],
    image: "/images/amdocs/britebill-recon.jpg",
    imageFit: "cover",
    caseStudy: {
      problemDetail:
        "During Comcast BriteBill migration, reconciliation files had to be ingested continuously so rejected accounts were not lost in the pipeline.",
      approach: [
        "Built a C++ daemon to ingest reconciliation files on an ongoing basis.",
        "Auto-flagged rejected accounts for reprocessing workflows.",
        "Tuned for Comcast-scale volume (10M+ customers).",
      ],
      stackRationale: [
        { tech: "C++", why: "High-throughput file ingest in existing Amdocs runtime", alternative: "Python batch" },
        { tech: "Daemon process", why: "Continuous reconciliation without manual kicks", alternative: "Cron-only scripts" },
      ],
      outcomes: ["10M+ customer migration support", "Auto-flagged rejects", "Fewer silent data gaps"],
    },
  },
  {
    id: "service-promo",
    number: "06",
    name: "Service Promotion APIs",
    category: "REST · Java Microservices",
    problem:
      "A national carrier needed subscriber-scoped promo lifecycle APIs — create, retrieve, and plan-state configuration — inside a multi-tenant Service Promotion Framework.",
    problemBrief:
      "National carrier needed Add/Get Service Promotion REST APIs for 1.4M+ subscribers.",
    impact:
      "Engineered Add and Get Service Promotion REST endpoints in Java within a multi-tenant Service Promotion Framework — subscriber-scoped promo lifecycle (creation, retrieval, plan-state) for a 1.4M+ national carrier base.",
    impactBrief:
      "Java REST Add/Get Service Promotion APIs — multi-tenant promo lifecycle for 1.4M+ subs.",
    stack: ["Java", "REST APIs", "Multi-tenant", "Service Promotion"],
    image: "/images/amdocs/service-promo-comcast.png",
    imageFit: "cover",
    caseStudy: {
      problemDetail:
        "Promo lifecycle logic had to stay subscriber-scoped and multi-tenant-safe for a national carrier with 1.4M+ subscribers.",
      approach: [
        "Implemented Add and Get Service Promotion REST endpoints in Java.",
        "Encoded creation, retrieval, and plan-state configuration in the framework.",
        "Kept tenant isolation and subscriber scoping as first-class constraints.",
      ],
      stackRationale: [
        { tech: "Java", why: "Matches Amdocs service-layer standards", alternative: "Node.js" },
        { tech: "REST", why: "Clear contract for promo consumers", alternative: "SOAP-only" },
      ],
      outcomes: ["1.4M+ subscriber base", "Add/Get promo APIs", "Multi-tenant safety"],
    },
  },
  {
    id: "apeye",
    number: "07",
    name: "APEye",
    category: "DevOps · Jenkins Orchestration",
    problem:
      "Regression validation required manual Jenkins job runs — test cycles stretched to 5 hours per developer.",
    problemBrief:
      "Manual Jenkins regression runs stretched validation cycles to half a workday.",
    impact:
      "Extended APEye’s job orchestration with a custom Jenkins integration and RunJobs extension to onboard Invoicing test jobs — collapsing regression cycles from 5 hours to 1 hour.",
    impactBrief:
      "Jenkins RunJobs extension for Invoicing — regression cycles collapsed from 5h to 1h.",
    stack: ["Jenkins", "Python", "CI/CD", "RunJobs"],
    image: "/images/amdocs/apeye.png",
    caseStudy: {
      problemDetail:
        "Developers triggered regression jobs by hand — multi-hour cycles blocking releases.",
      approach: [
        "Extended APEye orchestration over Jenkins REST API.",
        "Added RunJobs extension for Invoicing-specific job chains.",
        "Surfaced job status in a lightweight internal UI.",
      ],
      stackRationale: [
        { tech: "Jenkins", why: "Enterprise CI standard at Amdocs", alternative: "GitHub Actions" },
        { tech: "Python", why: "Quick Jenkins API integration", alternative: "Java EJB" },
      ],
      outcomes: ["5h → 1h regression cycles", "80% faster turnaround", "Invoicing jobs onboarded"],
    },
  },
];

/** YHills internship — shown directly below Amdocs */
export const yhillsExperience: Experience & {
  logo: string;
  website: string;
  summary: string;
  metrics: string[];
} = {
  kind: "work",
  role: "Business Development Executive",
  company: "YHills Edutech",
  logo: "/images/logos/yhills.png",
  website: "https://yhills.com/",
  summary:
    "Ed-tech platform (60k+ learners) — live mentorship, project-based courses, and campus outreach across India.",
  period: "Jan 2023 — May 2023",
  location: "Noida, Uttar Pradesh",
  metrics: ["500+ learners / month", "25 campus leads · 40 colleges"],
  bullets: [
    "Consultatively engaged 500+ learners monthly via calls/chats; hit enrollment targets through value-based selling.",
    "Recruited 25 campus leads across 40 colleges — 30% more signups via referral network.",
  ],
};

/** Education only — horizontal timeline (secondary → senior secondary → college) */
export const educationExperiences: Experience[] = [
  {
    kind: "education",
    role: "Secondary (X)",
    company: "B.C.M. Sen. Sec. School, Basant City",
    period: "2015 — 2017",
    location: "Ludhiana, Punjab · 10 CGPA",
    bullets: ["Captain of U-17 School Chess Team."],
    badge: "chess",
  },
  {
    kind: "education",
    role: "Senior Secondary (XII)",
    company: "B.C.M. Sen. Sec. School, Basant City",
    period: "2017 — 2019",
    location: "Ludhiana, Punjab · 94.8%",
    bullets: ["Captain of U-19 School Badminton Team."],
    badge: "badminton",
  },
  {
    kind: "education",
    role: "B.E. Computer Engineering",
    company: "Thapar Institute of Engineering & Technology",
    period: "2019 — 2023",
    location: "Patiala, Punjab · 7.96 CGPA",
    bullets: ["Computer Engineering — focus on\nsoftware systems and DSA."],
    badge: "book",
  },
];

export const projects: Project[] = [
  {
    id: "cryptoverse",
    number: "01",
    name: "Cryptoverse",
    category: "FinTech · Crypto Dashboard",
    glance: "Unified crypto dashboard · 10K+ API calls/day with client-side caching",
    problem:
      "Retail crypto traders bounce between exchanges, chart sites, and news feeds — nothing stays in one place, and API rate limits make dashboards fragile.",
    impact:
      "Built a unified React dashboard on CoinRanking API with Redux Toolkit Query caching — 10K+ price and news requests per day without hammering rate limits. Includes portfolio tracking, charts, and news in one view.",
    stack: ["React", "Redux Toolkit Query", "Ant Design", "Chart.js"],
    image: "/images/projects/cryptoverse.png",
    githubUrl: "https://github.com/ArpitBansal047/cryptoverse",
    status: "live",
  },
  {
    id: "streamer",
    number: "02",
    name: "Streamer",
    category: "Live Video · Multi-channel",
    glance: "Multi-channel live streaming · WebSocket + OBS + Google OAuth",
    problem:
      "Live streaming is hard to learn end-to-end — auth, real-time video distribution, WebSocket metadata, and multi-channel broadcasting usually live in separate repos.",
    impact:
      "Architected a multi-channel streaming prototype with React and Node.js — WebSocket streaming, OBS integration for real-time video distribution, and Google OAuth 2.0 — built for high-availability multi-channel broadcasting.",
    stack: ["React", "Node.js", "WebSockets", "OBS", "OAuth 2.0"],
    image: "/images/projects/streamer.png",
    githubUrl: "https://github.com/ArpitBansal047/streamer",
    status: "live",
  },
];

export const wipProjects: WipProject[] = [
  {
    id: "you",
    name: "YOU",
    tagline: "AI clinical wellness · GenAI + Firebase · Mar 2026 — Present",
    description:
      "Real-time wellness platform with chat, clinical journaling, and automated therapist matching — built so people who need support aren’t stuck waiting for a 9–5 appointment.",
    descriptionBrief:
      "Real-time GenAI wellness platform — chat, clinical journaling, and automated therapist matching.",
    impact:
      "Pioneered a GenAI clinical wellness platform with under-150ms Firebase sync, Gemini 1.5 Pro journal pipelines, and PHQ-9-based therapist matching secured with JWT.",
    impactBrief:
      "GenAI clinical wellness — Firebase realtime chat, Gemini journals, PHQ-9 matching with JWT.",
    bullets: [
      "React/TypeScript + Firebase realtime chat under 150 ms sync; Firestore Security Rules with RBAC for PII.",
      "Gemini 1.5 Pro AI backend processes journals and streams grounding exercises for 24/7 care access.",
      "Automated PHQ-9-based therapist-matching workflow secured with JWT authentication.",
    ],
    stack: ["React 18", "TypeScript", "Firebase", "Gemini 1.5", "Stitch", "Framer Motion"],
    screenshots: [
      { src: "/images/you/journal-tab.png", label: "Daily Journal" },
      { src: "/images/you/journal-entry.png", label: "Journal Entry" },
      { src: "/images/you/emergency.png", label: "Emergency Support" },
      { src: "/images/you/communities.png", label: "Communities" },
      { src: "/images/you/calm.png", label: "Learn to Calm Down" },
      { src: "/images/you/sessions.png", label: "Book Sessions" },
      { src: "/images/you/profile.png", label: "Profile" },
    ],
    caseStudy: {
      problemDetail:
        "Mental-health support is fragmented — users bounce between journaling apps, crisis lines, and booking tools with no continuity between sessions.",
      approach: [
        "Architected Firebase realtime chat with Firestore rules for PII isolation.",
        "Built Gemini backend for journal processing and grounding exercises.",
        "PHQ-9 assessment pipeline for automated therapist matching with JWT sessions.",
      ],
      stackRationale: [
        { tech: "Firebase", why: "Realtime sync under 150ms without managing WebSocket infra", alternative: "Postgres + Socket.io" },
        { tech: "Gemini 1.5 Pro", why: "Long-context journal analysis", alternative: "Smaller models" },
        { tech: "JWT", why: "Stateless secure patient sessions", alternative: "Session cookies" },
      ],
      outcomes: ["10K+ account scale design", "60% faster therapist matching", "24/7 AI care access"],
    },
  },
];

export const beyondCode = {
  items: [
    {
      emoji: "🏆",
      title: "Comcast Sports League 2026",
      metric: "Organizer · 500+ participants",
      description: "Organizing our annual multi-sport league at work.",
      leadershipImpact:
        "I handle planning, vendors, scheduling, and day-of operations — and designed a React auction app for live player bidding during the draft.",
      image: "/images/beyond/csl2026.png",
    },
    {
      emoji: "🎉",
      title: "Team Outings & Events",
      metric: "Organizer · full-day offsite",
      description: "Planned and ran a company team outing.",
      leadershipImpact:
        "I coordinated activities, logistics, and budget across teams so everyone could participate.",
      image: "/images/beyond/team-outing.jpg",
    },
    {
      emoji: "🎬",
      title: "Dance & Singing",
      description: "Dance mashups and song covers — a creative outlet outside work.",
      link: site.youtube,
      linkLabel: "Watch on YouTube",
      linkVariant: "youtube",
      image: "/images/beyond/singing.webp",
    },
    {
      emoji: "🏏",
      title: "Sports & More",
      metric: "Office tournaments · cricket, badminton & chess",
      description: "Competitive sports at work — cricket, badminton, and chess.",
      leadershipImpact:
        "Best Bowler in an office cricket tournament; also won badminton and chess events. Sports keep me calm under pressure — habits I bring to code reviews, demos, and mentoring.",
      image: "/images/beyond/sports-more.jpg",
      imageClass: "beyond-img-zoom",
    },
  ] as BeyondItem[],
};

export const certificates: Certificate[] = [
  {
    title: "Modern React with Redux",
    issuer: "Udemy · Stephen Grider",
    file: "/certificates/Udemy - Modern React With Redux (Stephen Grider).pdf",
    type: "pdf",
    emoji: "⚛️",
    topic: "Frontend",
    section: "technical",
    impactLine: "Production React patterns — hooks, Redux, and scalable component design.",
    themeColor: "#f4f4f5",
  },
  {
    title: "The Complete SQL Bootcamp",
    issuer: "Udemy · Jose Portilla",
    file: "/certificates/Udemy - The SQL Bootcamp (Jose Portilla).pdf",
    type: "pdf",
    emoji: "🗄️",
    topic: "Databases",
    section: "technical",
    impactLine: "PostgreSQL and Oracle query work in billing systems — joins, indexes, optimization.",
    themeColor: "#f4f4f5",
  },
  {
    title: "Software Engineering 101",
    issuer: "Udemy · Kurt Anderson",
    file: "/certificates/Udemy - Software Engineering 101 (Kurt Anderson).pdf",
    type: "pdf",
    emoji: "🏗️",
    topic: "Engineering",
    section: "technical",
    impactLine: "SDLC, planning, and engineering process — how I approach production delivery.",
    themeColor: "#f4f4f5",
  },
  {
    title: "An Entire MBA in 1 Course",
    issuer: "Udemy · Chris Haroun",
    file: "/certificates/Udemy - Entire MBA in 1 Course (Chris Haroun).pdf",
    type: "pdf",
    emoji: "📈",
    topic: "Business",
    section: "non-technical",
    impactLine: "Business context for internal platforms and stakeholder trade-offs.",
    themeColor: "#f4f4f5",
  },
  {
    title: "The Science of Well-Being",
    issuer: "Coursera · Yale University",
    file: "/certificates/Coursera - The Science of Well Being.png",
    type: "png",
    emoji: "🧠",
    topic: "Psychology",
    section: "non-technical",
    impactLine: "Informed the mental-health UX research behind the YOU wellness platform.",
    themeColor: "#f4f4f5",
  },
  {
    title: "Spanish: Meeting people",
    issuer: "Coursera · UC Davis",
    file: "/certificates/Coursera - Spanish (Meeting People).pdf",
    type: "pdf",
    emoji: "🇪🇸",
    topic: "Language",
    section: "non-technical",
    impactLine: "Pairs with a 2,100-day Duolingo streak — continuous learning habit.",
    themeColor: "#f4f4f5",
  },
];
