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
  impact: string;
  stack: string[];
  image: string;
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

export type WorkHighlight = {
  name: string;
  summary: string;
  image: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  location: string;
  bullets: string[];
  kind: "work" | "education";
  highlights?: WorkHighlight[];
  badge?: "chess" | "badminton" | "book";
};

export const educationBulletIcons = {
  book: "/images/education/books.png",
  badminton: "/images/education/badminton-shuttle.png",
  chess: "/images/education/chess-king.png",
} as const;

export const duolingoMeta = {
  streakLine: "2,051 day streak on Duolingo for learning Spanish",
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
  duolingo?: boolean;
};

export type CertificateSection = "technical" | "non-technical";

export type HeroMetric = {
  value: string;
  title: string;
  detail: string;
};

export const heroMetrics: HeroMetric[] = [
  {
    value: "90%",
    title: "Manual Work Cut",
    detail: "BPT GenAI tool",
  },
  {
    value: "5h → 1h",
    title: "Faster Test Cycles",
    detail: "Jenkins orchestration",
  },
  {
    value: "15–20%",
    title: "Productivity Target",
    detail: "ComcastHub unified dev hub",
  },
  {
    value: "10+",
    title: "Devs Use It Daily",
    detail: "APEye regression tool",
  },
];

export const site = {
  name: "Arpit Bansal",
  tabTitle: "Arpit Bansal — Software Developer",
  headline:
    "I build full-stack apps, GenAI automation tools & developer platforms.",
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
  heroDeveloperImage: "/images/hero-coding.jfif",
};

export const portfolioSiteMeta = {
  stack: ["React 18", "TypeScript", "Vite", "GSAP", "Three.js", "React Three Fiber"],
  description:
    "This portfolio is a React 18 + TypeScript SPA with Vite, GSAP scroll animations, and React Three Fiber physics for the interactive tech stack.",
};

export const aboutParagraphs = [
  "I'm Arpit Bansal, a Software Developer at Amdocs in Pune. I build billing platforms, internal developer tools, and GenAI automation for telecom — shipping work that saves teams hours every week and holds up in production.",
  "Recent impact: led ComcastHub (Next.js 14, TypeScript, Tailwind) to unify dev tools and project 15–20% productivity gains; built a GenAI Python tool that cut manual charge-code setup by ~90%; helped automate Cipher EOC daily runs by more than half (now about 40 minutes); and improved APEye so regression cycles dropped from five hours to one — used daily by 10+ developers.",
  "In production I work with React, Next.js, TypeScript, Python, Jenkins, Oracle, Streamlit, and Gemini workflows. Side project YOU is a clinical wellness app with Firebase realtime sync, Gemini 1.5 Pro features, and JWT-secured sessions.",
  "Beyond code: I organize Comcast Sports League 2026 (including a live player auction app), plan team outings, and compete in office tournaments. Previously led campus outreach at YHills across 40 colleges. Open to full-time roles across India, including remote-friendly teams.",
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
    impact:
      "Helped lead design and development of the official account website (Next.js 14, React 18, TypeScript, Tailwind, Framer Motion), unifying dev tools and targeting a 15–20% productivity boost.",
    stack: ["Next.js 14", "React 18", "TypeScript", "Tailwind", "Framer Motion"],
    image: "/images/amdocs/comcasthub.png",
    caseStudy: {
      problemDetail:
        "Developers juggled 8+ internal tools across tabs — losing 2–3 hours weekly to context switching and inconsistent UX.",
      approach: [
        "Mapped top daily workflows into 4 hub modules after developer interviews.",
        "Built Next.js 14 App Router with TypeScript and shared Tailwind design tokens.",
        "Deployed on AWS with Jest coverage on critical navigation flows.",
      ],
      stackRationale: [
        { tech: "Next.js 14", why: "Fast SSR pages for internal tools", alternative: "CRA" },
        { tech: "AWS", why: "Team-standard cloud hosting", alternative: "On-prem" },
        { tech: "Jest", why: "Catch shared-nav regressions early", alternative: "Manual QA only" },
      ],
      outcomes: ["Unified dev hub", "15–20% productivity target", "Safer UI releases"],
    },
  },
  {
    id: "bpt-charge",
    number: "02",
    name: "BPT Charge Code Tool",
    category: "GenAI · Python Automation",
    problem:
      "Teams manually converted Excel charge-code inputs into SQL files — slow, repetitive, and prone to human error.",
    impact:
      "Developed a GenAI-powered Python script that ingests Excel and auto-generates SQL for related tables — 90% less manual effort, 75% faster setup, and eliminated copy-paste errors.",
    stack: ["Python", "GenAI", "SQL", "Excel"],
    image: "/images/amdocs/bpt-charge.jfif",
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
      outcomes: ["90% less manual entry", "75% faster setup", "Zero copy-paste SQL errors"],
    },
  },
  {
    id: "cipher-eoc",
    number: "03",
    name: "Cipher EOC",
    category: "Billing Automation · Streamlit",
    problem:
      "Daily End-of-Cycle billing workflows took ~90 minutes of manual steps across Oracle, SSH, and browser tasks.",
    impact:
      "Collaborated on a Python/Streamlit tool automating 90% of EOC workflows — cut daily runs from 90min to 40min (50% faster) using Oracle/oracledb, Paramiko, Selenium, pandas.",
    stack: ["Python", "Streamlit", "Oracle", "Selenium", "pandas"],
    image: "/images/amdocs/cipher-eoc.png",
    caseStudy: {
      problemDetail:
        "End-of-Cycle billing required ~90 minutes of manual Oracle queries, SSH steps, and browser tasks every day.",
      approach: [
        "Built Streamlit UI so operators trigger workflows with one click.",
        "Automated Oracle/oracledb, Paramiko SSH, and Selenium browser steps.",
        "PyTest suite for regression on critical automation paths.",
      ],
      stackRationale: [
        { tech: "Streamlit", why: "Fast internal UI for ops teams", alternative: "React" },
        { tech: "Selenium", why: "Legacy browser-only billing screens", alternative: "API-only" },
      ],
      outcomes: ["85% workflow automation", "90 to 40 min daily runs", "50% faster execution"],
    },
  },
  {
    id: "apeye",
    number: "04",
    name: "APEye",
    category: "DevOps · Jenkins Orchestration",
    problem:
      "Regression validation required manual Jenkins job runs — test cycles stretched to 5 hours per developer.",
    impact:
      "Improved 1-click job orchestration with Jenkins integration and a new RunJobs extension for Invoicing jobs — test cycles dropped from 5hrs to 1hr (80% faster); used by 10+ developers daily.",
    stack: ["Jenkins", "Python", "CI/CD", "RunJobs"],
    image: "/images/amdocs/apeye.png",
    caseStudy: {
      problemDetail:
        "Developers manually triggered Jenkins regression jobs — 5-hour test cycles blocking releases.",
      approach: [
        "Built one-click orchestration over Jenkins REST API.",
        "Added RunJobs extension for Invoicing-specific job chains.",
        "Surfaced job status in a lightweight internal UI.",
      ],
      stackRationale: [
        { tech: "Jenkins", why: "Enterprise CI standard at Amdocs", alternative: "GitHub Actions" },
        { tech: "Python", why: "Quick Jenkins API integration", alternative: "Java EJB" },
      ],
      outcomes: ["5h to 1h test cycles", "80% faster turnaround", "10+ daily active users"],
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
  role: "Business Development Executive Intern",
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
    category: "Live Video · RTMP Platform",
    glance: "Twitch-style RTMP prototype · 50+ live tests, ~99% uptime",
    problem:
      "Live streaming is hard to learn end-to-end — auth, RTMP ingest, WebSocket metadata, and browser playback usually live in separate repos.",
    impact:
      "Built a Twitch-style prototype: React frontend, Node-Media-Server for RTMP, Google OAuth 2.0 sign-in, OBS integration, WebSocket live viewer counts, and FLV.js playback — 50+ live test events at ~99% uptime across three services.",
    stack: ["React", "Redux", "FLV.js", "OBS", "Node-Media-Server"],
    image: "/images/projects/streamer.png",
    githubUrl: "https://github.com/ArpitBansal047/streamer",
    status: "live",
  },
];

export const wipProjects: WipProject[] = [
  {
    id: "you",
    name: "YOU",
    tagline: "AI-driven clinical wellness app · GenAI + Firebase · Mar 2026 — Present",
    description:
      "Most people who need mental-health support never reach a therapist — cost, stigma, and no one to talk to at 2 AM. YOU combines GenAI journaling, peer communities, emergency support, and therapist booking in one secure app.",
    bullets: [
      "React 18/TypeScript + Firebase — realtime clinical notes and chats with Firestore security rules for secure PII.",
      "Gemini 1.5 Pro for 24/7 grounding exercises and journal analysis; Stitch + Framer Motion for UI.",
      "PHQ-9 assessment flow with JWT sessions — faster therapist matching in testing.",
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

export const skillCategories = [
  {
    title: "Languages & Frameworks",
    skills: [
      "Python",
      "Java (Core)",
      "C++",
      "SQL",
      "React.js",
      "Node.js",
      "TypeScript",
      "HTML/CSS/JS",
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      "GitHub",
      "Jenkins (CI/CD)",
      "Linux",
      "Cursor",
      "Copilot",
      "Stitch",
      "Google Studio",
      "Maven",
    ],
  },
  {
    title: "Core CS & AI",
    skills: [
      "DSA",
      "OOPs",
      "DBMS",
      "SDLC",
      "GenAI / Gemini",
      "APIs",
      "System Design",
      "Scripting",
    ],
  },
];

export const beyondCode = {
  title: "Beyond Code",
  subtitle: "Leadership and teamwork outside the IDE — skills I bring back to engineering.",
  items: [
    {
      emoji: "🏆",
      title: "Comcast Sports League (CSL) 2026",
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
    themeColor: "#61dafb",
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
    themeColor: "#3b82f6",
  },
  {
    title: "Data Science & Machine Learning",
    issuer: "Udemy · Jose Portilla",
    file: "/certificates/Udemy - Data Science and Machine Learning (Jose Portilla).pdf",
    type: "pdf",
    emoji: "🤖",
    topic: "ML / AI",
    section: "technical",
    impactLine: "Foundation for GenAI tooling, data pipelines, and structured analysis.",
    themeColor: "#22c55e",
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
    themeColor: "#f59e0b",
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
    themeColor: "#ec4899",
  },
  {
    title: "The Science of Well-Being",
    issuer: "Yale University · Coursera",
    file: "/certificates/Coursera - The Science of Well Being.png",
    type: "png",
    emoji: "🧠",
    topic: "Psychology",
    section: "non-technical",
    impactLine: "Informed the mental-health UX research behind the YOU wellness platform.",
    themeColor: "#a855f7",
  },
  {
    title: "Buddhism and Modern Psychology",
    issuer: "Coursera",
    file: "/certificates/Coursera - Buddhism and Modern Psychology.png",
    type: "png",
    emoji: "🪷",
    topic: "Mindfulness",
    section: "non-technical",
    impactLine: "Mindfulness research applied to grounding exercises in YOU.",
    themeColor: "#14b8a6",
  },
  {
    title: "Spanish Vocabulary: Meeting People",
    issuer: "UC Davis · Coursera",
    file: "/certificates/Coursera - Spanish (Meeting People).pdf",
    type: "pdf",
    emoji: "🇪🇸",
    topic: "Language",
    section: "non-technical",
    impactLine: "Pairs with a 2,051-day Duolingo streak — continuous learning habit.",
    themeColor: "#ef4444",
  },
];
