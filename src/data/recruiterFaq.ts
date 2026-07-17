export type FaqCategory =
  | "Experience"
  | "Projects"
  | "Skills"
  | "Education"
  | "Availability";

export type FaqItem = {
  id: string;
  category: FaqCategory;
  question: string;
  answer: string;
  keywords?: string[];
};

const tokenize = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^\w\s]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2);

export const matchFaqQuery = (item: FaqItem, rawQuery: string): boolean => {
  const q = rawQuery.trim().toLowerCase();
  if (!q) return true;

  const haystack = [
    item.question,
    item.answer,
    ...(item.keywords ?? []),
  ]
    .join(" ")
    .toLowerCase();

  if (haystack.includes(q)) return true;

  const tokens = tokenize(q);
  if (tokens.length === 0) return true;

  const matched = tokens.filter(
    (token) =>
      haystack.includes(token) ||
      item.keywords?.some((kw) => kw.includes(token) || token.includes(kw))
  );

  return matched.length >= Math.min(2, tokens.length);
};

export const recruiterFaq: FaqItem[] = [
  {
    id: "amdocs-exp",
    category: "Experience",
    question: "What's your experience at Amdocs?",
    keywords: ["amdocs", "years", "telecom", "billing", "pune", "work history", "company"],
    answer:
      "I've spent 3+ years at Amdocs in Pune, working on telecom billing and internal developer platforms.\n\nToday I'm a Software Developer (since July 2025). Before that I was a Software Engineer Associate (July 2023 to July 2025). My day-to-day is building tools that other engineers rely on — not slide decks.",
  },
  {
    id: "strongest-project",
    category: "Projects",
    question: "What's your strongest project?",
    keywords: ["best", "flagship", "comcast", "you", "highlight", "proud"],
    answer:
      "At work, ComcastHub is my strongest delivery: I led the internal developer hub on Next.js 14 and AWS, aimed at a 15–20% productivity gain for account developers.\n\nYOU is my flagship side build — a clinical wellness app with Firebase realtime sync, JWT-secured sessions, and Gemini-powered journaling. Both show full-stack ownership end to end.",
  },
  {
    id: "open-roles",
    category: "Availability",
    question: "Are you open to full-time roles?",
    keywords: ["hiring", "job", "available", "looking", "open", "full time", "employed"],
    answer:
      "Yes — I'm open to full-time roles across India, including remote-friendly teams.\n\nI'm based in Pune. The fastest way to reach me is the contact form on this site, email, or WhatsApp.",
  },
  {
    id: "years-exp",
    category: "Experience",
    question: "How many years of professional experience do you have?",
    keywords: ["experience", "years", "seniority", "tenure", "how long"],
    answer:
      "I have 3+ years of professional software development experience.\n\nAll of it has been at Amdocs in Pune, starting in July 2023.",
  },
  {
    id: "current-role",
    category: "Experience",
    question: "What is your current job title?",
    keywords: ["title", "role", "position", "designation", "current job"],
    answer:
      "I'm a Software Developer at Amdocs (since July 2025).\n\nBefore that I was a Software Engineer Associate from July 2023 to July 2025.",
  },
  {
    id: "why-amdocs-impact",
    category: "Experience",
    question: "What impact have you delivered at Amdocs?",
    keywords: ["impact", "results", "metrics", "achievements", "delivered", "wins"],
    answer:
      "A few numbers that matter to teams I work with:\n\n• Cipher EOC automation covers 75% of daily workflows — runtime reduced to ~40 minutes.\n• BPT Charge Code Tool reduced manual SQL work by ~90% using GenAI.\n• APEye shortened regression cycles from 5 hours to 1 hour — used daily by 10+ developers.\n• ComcastHub targets a 15–20% productivity lift by unifying scattered dev tools.",
  },
  {
    id: "genai-production",
    category: "Skills",
    question: "Do you use GenAI in production?",
    keywords: ["genai", "ai", "gemini", "llm", "machine learning", "production"],
    answer:
      "Yes — in real production workflows, not just demos.\n\nI built the BPT Charge Code Tool to parse Excel and generate relational SQL with GenAI. On YOU, Gemini 1.5 Pro powers journal analysis and grounding exercises behind a structured backend pipeline.",
  },
  {
    id: "stack-primary",
    category: "Skills",
    question: "What's your primary tech stack?",
    keywords: ["stack", "technologies", "tools", "react", "python", "typescript", "skills"],
    answer:
      "Day to day I work across React 18, TypeScript, Next.js 14, Python, Node.js, Java, AWS, Docker, Jenkins, Oracle, Firebase, and REST/microservices patterns.\n\nI pick tools based on what the team already runs in production — not hype.",
  },
  {
    id: "system-design",
    category: "Skills",
    question: "Do you know system design?",
    keywords: ["system design", "architecture", "lld", "hld", "microservices", "scalability"],
    answer:
      "Yes — I apply system design in production, not just on whiteboards.\n\nThat includes microservices, LLD/HLD thinking, REST APIs, and cloud-native deployment on AWS. Tools like Cipher EOC and APEye required orchestrating Oracle DB, SSH, Selenium, and Jenkins pipelines together.",
  },
  {
    id: "aws-devops",
    category: "Skills",
    question: "What's your AWS and DevOps experience?",
    keywords: ["aws", "docker", "cloud", "devops", "jenkins", "ci/cd"],
    answer:
      "I deployed ComcastHub on AWS for scalability and work regularly with Docker and Jenkins CI/CD.\n\nAPEye alone is part of the daily workflow for 10+ developers on the account — so reliability matters as much as architecture.",
  },
  {
    id: "testing",
    category: "Skills",
    question: "How do you approach testing?",
    keywords: ["testing", "qa", "pytest", "jest", "quality", "automation"],
    answer:
      "I match the test layer to the risk.\n\nPyTest for Python automation on Cipher EOC, Jest for ComcastHub UI reliability, and Jenkins-driven regression through APEye for integration-level validation in billing workflows.",
  },
  {
    id: "you-project",
    category: "Projects",
    question: "Tell me about the YOU project.",
    keywords: ["you", "wellness", "mental health", "firebase", "clinical", "side project"],
    answer:
      "YOU is a GenAI clinical wellness platform I am building outside work.\n\nIt combines realtime chat and journaling on React/TypeScript/Firebase (sub-150ms sync), Firestore security rules for PII, RBAC, JWT auth, PHQ-9 therapist matching, and Gemini 1.5 Pro for 24/7 care access when a human therapist is not available.\n\nIt is still work in progress — the site shows an intentional public summary; I can share more architecture detail in conversation as it matures.",
  },
  {
    id: "streamer-project",
    category: "Projects",
    question: "Tell me about Streamer.",
    keywords: ["streamer", "streaming", "rtmp", "video", "twitch", "websocket"],
    answer:
      "Streamer is an earlier full-stack experiment — a live streaming prototype.\n\nIt uses React + Node.js with WebSocket metadata, OBS RTMP integration, Google OAuth 2.0, and FLV.js playback. I ran 50+ live test events with roughly 99% uptime across three services.",
  },
  {
    id: "comcasthub",
    category: "Projects",
    question: "What is ComcastHub?",
    keywords: ["comcasthub", "comcast", "internal", "developer hub", "nextjs"],
    answer:
      "ComcastHub is the official internal account developer website I led.\n\nBuilt with Next.js 14, React 18, TypeScript, Tailwind, and Framer Motion — it unifies scattered dev tools into one hub, deployed on AWS, with Jest covering critical navigation flows.",
  },
  {
    id: "apeye",
    category: "Projects",
    question: "What is APEye?",
    keywords: ["apeye", "jenkins", "testing", "regression", "invoicing"],
    answer:
      "APEye is a Jenkins job orchestration tool with a RunJobs extension for Invoicing jobs.\n\nOne-click regression runs cut test cycles from 5 hours to 1 hour — and 10+ developers use it every day.",
  },
  {
    id: "education",
    category: "Education",
    question: "What's your educational background?",
    keywords: ["education", "degree", "college", "university", "cgpa", "thapar"],
    answer:
      "I have a B.E. in Computer Engineering from Thapar Institute of Engineering and Technology (2019–2023, 7.96 CGPA).\n\nEarlier: 10 CGPA in secondary school and 94.8% in senior secondary.",
  },
  {
    id: "location",
    category: "Availability",
    question: "Where are you based?",
    keywords: ["location", "based", "pune", "india", "relocate", "city"],
    answer:
      "I'm based in Pune, Maharashtra, India.\n\nI'm open to remote-friendly and hybrid roles across India.",
  },
  {
    id: "notice-period",
    category: "Availability",
    question: "What is your notice period?",
    keywords: ["notice", "start date", "joining", "when can you join"],
    answer:
      "Happy to discuss notice period and start date directly.\n\nThe contact form, email, or LinkedIn are the best channels for that conversation.",
  },
  {
    id: "salary",
    category: "Availability",
    question: "What are your salary expectations?",
    keywords: ["salary", "compensation", "ctc", "pay", "package"],
    answer:
      "I'm open to discussing compensation based on role scope, level, and location.\n\nPlease reach out via email or LinkedIn — I prefer a quick call once we align on the role itself.",
  },
  {
    id: "remote",
    category: "Availability",
    question: "Are you open to remote work?",
    keywords: ["remote", "wfh", "work from home", "hybrid", "onsite"],
    answer:
      "Yes — I'm open to full-time roles with remote-friendly arrangements across India.\n\nHybrid in Pune also works if the team is local.",
  },
  {
    id: "leadership",
    category: "Experience",
    question: "Any leadership experience outside coding?",
    keywords: ["leadership", "management", "organize", "captain", "csl", "team lead"],
    answer:
      "Yes — quite a bit outside the IDE.\n\nI organize Comcast Sports League (CSL) 2026 at work — including designing a live player auction app — and plan company team outings. At YHills I led 25 campus leads across 40 colleges. I was Best Bowler in an office cricket tournament and have won badminton and chess events too.",
  },
  {
    id: "why-hire",
    category: "Experience",
    question: "Why should we hire you?",
    keywords: ["why hire", "why you", "value", "differentiator", "strengths"],
    answer:
      "I ship tools that save teams hours every week — with numbers to back it up (~90% manual work cut on BPT, 75% Cipher EOC automation, 80% faster test cycles on APEye).\n\nI combine full-stack delivery, GenAI, and DevOps in production telecom billing environments, and I communicate clearly with both engineers and stakeholders.",
  },
  {
    id: "team-size",
    category: "Experience",
    question: "Have you worked in teams?",
    keywords: ["team", "collaboration", "cross functional", "agile", "people"],
    answer:
      "Yes — most of my impact has been collaborative.\n\nCipher EOC, billing workflows, and cross-functional platform work involved teams across the account. APEye and ComcastHub serve 10+ developers daily.",
  },
  {
    id: "internship",
    category: "Experience",
    question: "Tell me about your internship.",
    keywords: ["internship", "yhills", "business development", "campus"],
    answer:
      "I was a Business Development Executive at YHills Edutech (Jan–May 2023).\n\nI engaged 500+ learners monthly and recruited 25 campus leads across 40 colleges — accelerating regional acquisition by about 30%.",
  },
  {
    id: "frontend-depth",
    category: "Skills",
    question: "How strong is your frontend experience?",
    keywords: ["frontend", "react", "ui", "ux", "nextjs", "typescript"],
    answer:
      "Production-grade frontend is a core strength.\n\nComcastHub uses Next.js 14, React 18, TypeScript, Tailwind, and Framer Motion. Side projects add Firebase realtime apps, OAuth flows, and responsive UI with accessibility in mind.",
  },
  {
    id: "backend-depth",
    category: "Skills",
    question: "How strong is your backend experience?",
    keywords: ["backend", "api", "database", "python", "node", "oracle"],
    answer:
      "I build backends that survive production billing environments.\n\nPython automation (Streamlit, Paramiko, Selenium, pandas), Node.js streaming services, Oracle SQL, Firebase/Firestore security rules, JWT/OAuth 2.0, and REST API design.",
  },
  {
    id: "biggest-metric",
    category: "Experience",
    question: "What's your biggest measurable impact?",
    keywords: ["biggest", "metric", "number", "roi", "saved time"],
    answer:
      "Two stand out:\n\nBPT Charge Code Tool — ~90% reduction in manual data entry and deployment errors.\n\nAPEye — 80% faster test turnaround (5h → 1h) for the entire dev team.",
  },
  {
    id: "certifications",
    category: "Education",
    question: "Do you have certifications?",
    keywords: ["certifications", "certificates", "udemy", "coursera", "courses"],
    answer:
      "Yes — including Modern React with Redux (Udemy), SQL Bootcamp, Software Engineering 101, and Coursera courses in Well-Being and Spanish.\n\nSee the Certifications section on this site — grouped into technical and non-technical.",
  },
  {
    id: "contact-best",
    category: "Availability",
    question: "What's the best way to contact you?",
    keywords: ["contact", "email", "phone", "whatsapp", "reach", "linkedin"],
    answer:
      "Fastest options:\n\nEmail: bansal.arpit02@gmail.com\nWhatsApp/Phone: +91 8146126152\nLinkedIn or the contact form on this page.",
  },
  {
    id: "portfolio-url",
    category: "Projects",
    question: "Where can I find your portfolio and resume?",
    keywords: ["portfolio", "resume", "cv", "website", "download"],
    answer:
      "Portfolio: arpit29.netlify.app\n\nResume is downloadable from the hero section or the resume button on the bottom-left of this site.",
  },
  {
    id: "live-demos-confidential",
    category: "Projects",
    question: "Can I see live demos of your Amdocs work?",
    keywords: ["live demo", "demo", "confidential", "nda", "internal", "amdocs", "production access"],
    answer:
      "Amdocs tools are internal and confidential — there are no public live demos.\n\nThis site uses approved summaries, screenshots, and case-study detail only. I'm happy to walk through architecture and impact on a call.",
  },
  {
    id: "why-open-to-roles",
    category: "Availability",
    question: "Why are you open to new opportunities?",
    keywords: ["why leave", "why change", "why looking", "motivation", "new job", "switch"],
    answer:
      "I'm looking for the right full-time role where I can keep shipping high-impact engineering work — ideally full-stack, platform, or GenAI tooling.\n\nI'm grateful for what I've built at Amdocs and open to teams that value production delivery and measurable outcomes.",
  },
  {
    id: "visa-sponsorship",
    category: "Availability",
    question: "Do you need visa sponsorship?",
    keywords: ["visa", "sponsorship", "work permit", "international", "abroad"],
    answer:
      "I'm based in India and am primarily looking at roles across India, including remote-friendly teams.\n\nFor international roles, happy to discuss work authorization case by case.",
  },
  {
    id: "relocate",
    category: "Availability",
    question: "Are you open to relocating?",
    keywords: ["relocate", "relocation", "move", "another city", "hybrid", "onsite"],
    answer:
      "I'm based in Pune and open to hybrid or onsite roles in major Indian tech hubs.\n\nRemote-first across India also works well for me.",
  },
  {
    id: "graduation-year",
    category: "Education",
    question: "When did you graduate?",
    keywords: ["graduate", "graduation", "passed out", "batch", "2023", "degree year"],
    answer:
      "I completed my B.E. in Computer Engineering from Thapar Institute in 2023.\n\nI joined Amdocs in July 2023 and have been there since.",
  },
  {
    id: "github-profile",
    category: "Projects",
    question: "Where is your GitHub?",
    keywords: ["github", "code", "repository", "repos", "open source"],
    answer:
      "GitHub: github.com/ArpitBansal047\n\nPublic repos include Cryptoverse and Streamer. YOU is work in progress with a limited public write-up on this site.",
  },
  {
    id: "billing-domain",
    category: "Experience",
    question: "Do you have telecom or billing domain experience?",
    keywords: ["billing", "telecom", "bss", "oss", "invoicing", "domain", "amdocs"],
    answer:
      "Yes — 3+ years in telecom billing at Amdocs.\n\nI've worked on End-of-Cycle billing automation (Cipher EOC), charge-code tooling, Jenkins regression for invoicing chains (APEye), and internal developer platforms for account engineers.",
  },
  {
    id: "references",
    category: "Availability",
    question: "Can you provide references?",
    keywords: ["references", "referral", "manager", "recommendation", "background check"],
    answer:
      "Yes — I can share professional references at the right stage of the process.\n\nReach out via email or LinkedIn and we can coordinate after we've aligned on the role.",
  },
  {
    id: "leetcode-dsa",
    category: "Skills",
    question: "How is your DSA and problem-solving?",
    keywords: ["dsa", "leetcode", "algorithms", "coding interview", "problem solving", "data structures"],
    answer:
      "Strong fundamentals from a Computer Engineering degree at Thapar and daily production engineering.\n\nI use DSA where it matters in systems work — parsing, automation pipelines, and efficient data handling in billing tooling.",
  },
  {
    id: "cryptoverse",
    category: "Projects",
    question: "Tell me about Cryptoverse.",
    keywords: ["cryptoverse", "crypto", "dashboard", "redux", "fintech"],
    answer:
      "Cryptoverse is a unified crypto dashboard I built with React and Redux Toolkit Query.\n\nIt handles 10K+ API calls per day with client-side caching, portfolio tracking, charts, and news — GitHub: github.com/ArpitBansal047/cryptoverse.",
  },
];
