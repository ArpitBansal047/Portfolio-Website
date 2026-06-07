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
};

export type Certificate = {
  title: string;
  issuer: string;
  file: string;
  type: "pdf" | "png";
  emoji: string;
  topic: string;
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
  link?: string;
  linkLabel?: string;
  linkVariant?: "youtube";
  image?: string;
  imageClass?: string;
  duolingo?: boolean;
};

export type HeroMetric = {
  value: string;
  title: string;
  detail: string;
};

export const heroMetrics: HeroMetric[] = [
  {
    value: "90%",
    title: "Manual work cut",
    detail:
      "GenAI charge-code tool turns Excel into SQL — teams skip hours of copy-paste every week.",
  },
  {
    value: "5h → 1h",
    title: "Faster test cycles",
    detail:
      "APEye runs Jenkins regression in one click — each developer saves ~4 hours per validation run.",
  },
  {
    value: "15–20%",
    title: "Productivity target",
    detail:
      "ComcastHub unifies scattered dev tools into one hub — less tab-hopping, more shipping.",
  },
  {
    value: "10+",
    title: "Devs use it daily",
    detail:
      "Account developers trigger APEye invoicing jobs every day — it is part of their routine.",
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
  resumePath: "/resume/Arpit_Bansal_Resume.pdf",
  github: "https://github.com/ArpitBansal047",
  linkedin: "https://www.linkedin.com/in/arpit0291",
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
  "I'm Arpit Bansal, a Software Developer at Amdocs. I build full-stack platforms and GenAI automation for telecom billing — the kind of work where a good tool saves hours every week for an entire team.",
  "Recent impact: ~90% less manual effort on charge-code tooling, regression cycles cut from five hours to one with APEye (used daily by 10+ developers), and ComcastHub as a unified workspace for account developers. Stack in production: React, Next.js, TypeScript, Python, Jenkins, Oracle, and Gemini-based workflows.",
  "I graduated from Thapar Institute (B.E. Computer Engineering, 2019–2023, CGPA 7.96). In school I was captain of the U-19 badminton team (2017–2019) and the U-17 chess team (2015–2017). I learn Spanish on a 2,051 day Duolingo streak, and build side projects like YOU — exploring mental-health tech and full-stack ideas outside production work.",
  "Open to full-time and remote-friendly roles across India.",
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
      "Led design and development of the official account website (Next.js 14, React 18, TypeScript, Tailwind, Framer Motion), unifying dev tools and targeting a 15–20% productivity boost.",
    stack: ["Next.js 14", "React 18", "TypeScript", "Tailwind", "Framer Motion"],
    image: "/images/amdocs/comcasthub.png",
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
  },
  {
    id: "csl-auction",
    number: "05",
    name: "CSL 2026 Auction App",
    category: "React · HTML · CSS",
    problem:
      "The upcoming CSL 2026 multi-sport tournament needed a live player auction interface for team formation.",
    impact:
      "Collaborated on an auction web app for CSL 2026 — HTML, React and CSS for live bidding during the league draft.",
    stack: ["React", "HTML", "CSS"],
    image: "/images/beyond/csl2026-auction.png",
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
    location: "Patiala, Punjab · CGPA 7.96",
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
      "Retail crypto traders bounce between exchanges, chart sites, and news feeds — nothing stays in one place.",
    impact:
      "Built in late 2021: a React dashboard wired to CoinRanking API with client-side caching, handling 10K+ price/news requests per day without hammering rate limits.",
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
      "Building live streaming usually means stitching auth, RTMP ingest, and playback across separate services — hard to learn or demo end-to-end.",
    impact:
      "Early 2022 build: React + Node multi-channel prototype with Google OAuth, WebSocket metadata, FLV.js playback, and OBS RTMP — ran 50+ live test events at ~99% uptime across three services.",
    stack: ["React", "Redux", "FLV.js", "Node-Media-Server"],
    image: "/images/projects/streamer.png",
    githubUrl: "https://github.com/ArpitBansal047/streamer",
    status: "live",
  },
  {
    id: "cyberpunks",
    number: "03",
    name: "Cyberpunks",
    category: "Web3 · NFT Gallery",
    glance: "NFT gallery with live API + offline fallback when rate-limited",
    problem:
      "NFT marketplaces often break when third-party APIs throttle or go dark — the UI should still feel alive.",
    impact:
      "OpenSea-inspired gallery with live collection fetch plus offline JSON fallback — browsing stays usable whenever the live API rate-limits or fails.",
    stack: ["React 17", "Axios", "Custom CSS"],
    image: "/images/projects/cyberpunks.png",
    githubUrl: "https://github.com/ArpitBansal047/cyberpunks",
    status: "live",
  },
];

export const wipProjects: WipProject[] = [
  {
    id: "you",
    name: "YOU",
    tagline: "AI-driven Web app for Clinical Wellness · Mar 2026 — Present",
    description:
      "YOU addresses a real gap: most people who need mental-health support never reach a therapist — cost, wait times, stigma, and no one to talk to at 2 AM. YOU combines GenAI-guided journaling and grounding exercises, peer communities, emergency support flows, and therapist booking in one secure app.",
    bullets: [
      "Problem we solve: fragmented wellness tools (one app for journaling, another for chat, none for crisis support) leave users alone between sessions — YOU unifies daily care, community, and clinical pathways.",
      "React 18/TypeScript + Firebase with Firestore security rules — real-time clinical notes/chats with low-latency sync for secure PII workflows.",
      "Gemini 1.5 Pro for 24/7 grounding exercises and journal analysis; Bento Grid UI + Framer Motion and an AI matching wizard to speed therapist discovery.",
    ],
    stack: ["React 18", "TypeScript", "Firebase", "Gemini 1.5", "Framer Motion"],
    screenshots: [
      { src: "/images/you/journal-tab.png", label: "Daily Journal" },
      { src: "/images/you/journal-entry.png", label: "Journal Entry" },
      { src: "/images/you/emergency.png", label: "Emergency Support" },
      { src: "/images/you/communities.png", label: "Communities" },
      { src: "/images/you/calm.png", label: "Learn to Calm Down" },
      { src: "/images/you/sessions.png", label: "Book Sessions" },
      { src: "/images/you/profile.png", label: "Profile" },
    ],
  },
  {
    id: "ravenswift",
    name: "RavenSwift",
    tagline: "Social Media App · June 2020",
    description:
      "\"Why use more apps if one is enough?\" — Flutter + Firebase prototype for the Indian Govt. app innovation program (UI built in 3 days).",
    bullets: [
      "Three pillars: Instagram-style social feed + 300-character microblogging, WhatsApp-inspired messaging with in-call games (truth/dare, audio/video), and anonymous education Q&A (Raven = knowledge, Swift = social stack).",
      "Planned features: public story comments, adult-content flag, multi-person live, govt. polls/surveys, and India-themed UI — revenue goal with 5% pledged to climate causes.",
    ],
    stack: ["Flutter", "Firebase", "Dart"],
    githubUrl: "https://github.com/ArpitBansal047/Ravenswift",
    screenshots: [
      { src: "/images/ravenswift/login.png", label: "Login / Sign Up" },
      { src: "/images/ravenswift/home.png", label: "Homepage" },
      { src: "/images/ravenswift/profile.png", label: "Profile" },
      { src: "/images/ravenswift/find-users.png", label: "Find Users" },
      { src: "/images/ravenswift/feed.png", label: "Activity Feed" },
    ],
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
  items: [
    {
      emoji: "🏆",
      title: "CSL 2025 - Multi Sports Tournament",
      description:
        "Organised CSL 2025 A to Z — budgeting, auctions, team formation, scheduling, and on-ground ops for a multi-sport league.",
      image: "/images/csl2025.png",
    },
    {
      emoji: "🎉",
      title: "Team Outings & Events",
      description:
        "Organised a 1-day team outing with fun activities for all members — logistics, budget, and engagement end to end.",
      image: "/images/beyond/team-outing.jpg",
    },
    {
      emoji: "🎬",
      title: "Dance & Singing",
      description: "Dance mashups and song covers on YouTube.",
      link: site.youtube,
      linkLabel: "Watch on YouTube",
      linkVariant: "youtube",
      image: "/images/beyond/singing.webp",
    },
    {
      emoji: "🏏",
      title: "Sports & More",
      description: "Guitar, Spanish, Finance, and Geopolitics.",
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
  },
  {
    title: "The Complete SQL Bootcamp",
    issuer: "Udemy · Jose Portilla",
    file: "/certificates/Udemy - The SQL Bootcamp (Jose Portilla).pdf",
    type: "pdf",
    emoji: "🗄️",
    topic: "Databases",
  },
  {
    title: "Data Science & Machine Learning",
    issuer: "Udemy · Jose Portilla",
    file: "/certificates/Udemy - Data Science and Machine Learning (Jose Portilla).pdf",
    type: "pdf",
    emoji: "🤖",
    topic: "ML / AI",
  },
  {
    title: "Software Engineering 101",
    issuer: "Udemy · Kurt Anderson",
    file: "/certificates/Udemy - Software Engineering 101 (Kurt Anderson).pdf",
    type: "pdf",
    emoji: "🏗️",
    topic: "Engineering",
  },
  {
    title: "An Entire MBA in 1 Course",
    issuer: "Udemy · Chris Haroun",
    file: "/certificates/Udemy - Entire MBA in 1 Course (Chris Haroun).pdf",
    type: "pdf",
    emoji: "📈",
    topic: "Business",
  },
  {
    title: "The Science of Well-Being",
    issuer: "Yale University · Coursera",
    file: "/certificates/Coursera - The Science of Well Being.png",
    type: "png",
    emoji: "🧠",
    topic: "Psychology",
  },
  {
    title: "Buddhism and Modern Psychology",
    issuer: "Coursera",
    file: "/certificates/Coursera - Buddhism and Modern Psychology.png",
    type: "png",
    emoji: "🪷",
    topic: "Mindfulness",
  },
  {
    title: "Spanish Vocabulary: Meeting People",
    issuer: "UC Davis · Coursera",
    file: "/certificates/Coursera - Spanish (Meeting People).pdf",
    type: "pdf",
    emoji: "🇪🇸",
    topic: "Language",
  },
];
