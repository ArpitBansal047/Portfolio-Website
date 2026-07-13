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
};

export const FAQ_STARTER_IDS = ["amdocs-exp", "strongest-project", "open-roles"];

export const recruiterFaq: FaqItem[] = [
  {
    id: "amdocs-exp",
    category: "Experience",
    question: "What's your experience at Amdocs?",
    answer:
      "3+ years at Amdocs in Pune. Currently Software Developer (Jul 2025–Present); previously Software Engineer Associate (Jul 2023–Jul 2025). I build full-stack internal platforms, GenAI automation, and Jenkins orchestration for telecom billing teams.",
  },
  {
    id: "strongest-project",
    category: "Projects",
    question: "What's your strongest project?",
    answer:
      "ComcastHub — I led design and development of a centralized developer hub (Next.js 14, React, TypeScript, Tailwind) targeting 15–20% productivity gains, deployed on AWS with Jest for UI reliability. Side project: YOU — a GenAI clinical wellness platform with Firebase realtime sync under 150ms and Gemini-powered journaling.",
  },
  {
    id: "open-roles",
    category: "Availability",
    question: "Are you open to full-time roles?",
    answer:
      "Yes — open to full-time and remote-friendly roles across India. Based in Pune, Maharashtra. Reach me via the contact form, email, or WhatsApp.",
  },
  {
    id: "years-exp",
    category: "Experience",
    question: "How many years of professional experience do you have?",
    answer: "3+ years of professional software development experience, all at Amdocs since July 2023.",
  },
  {
    id: "current-role",
    category: "Experience",
    question: "What is your current job title?",
    answer: "Software Developer at Amdocs (since Jul 2025). Previously Software Engineer Associate (Jul 2023–Jul 2025).",
  },
  {
    id: "why-amdocs-impact",
    category: "Experience",
    question: "What impact have you delivered at Amdocs?",
    answer:
      "Key wins: 85% automation on Cipher EOC (90→40 min daily runs), 90% reduction in manual SQL work via BPT Charge Code Tool, 80% faster test cycles with APEye (5h→1h), and ComcastHub targeting 15–20% developer productivity.",
  },
  {
    id: "genai-production",
    category: "Skills",
    question: "Do you use GenAI in production?",
    answer:
      "Yes. Built the BPT Charge Code Tool using GenAI to parse Excel and generate relational SQL. On YOU, I use Gemini 1.5 Pro for journal analysis and grounding exercises with a structured backend pipeline.",
  },
  {
    id: "stack-primary",
    category: "Skills",
    question: "What's your primary tech stack?",
    answer:
      "React 18, TypeScript, Next.js 14, Python, Node.js, Java, AWS, Docker, Kubernetes, Jenkins, PostgreSQL, Oracle, Firebase, Redis, and REST/microservices patterns.",
  },
  {
    id: "system-design",
    category: "Skills",
    question: "Do you know system design?",
    answer:
      "Yes — I work with microservices, LLD/HLD concepts, REST APIs, caching (Redis), and cloud-native deployment on AWS. Production tools I built required orchestrating Oracle DB, SSH, Selenium, and Jenkins pipelines.",
  },
  {
    id: "aws-k8s",
    category: "Skills",
    question: "What's your AWS and Kubernetes experience?",
    answer:
      "Deployed ComcastHub on AWS for scalability. Kubernetes and Docker are part of my DevOps skillset alongside Jenkins CI/CD pipelines used daily by 10+ developers via APEye.",
  },
  {
    id: "testing",
    category: "Skills",
    question: "How do you approach testing?",
    answer:
      "PyTest for Python automation (Cipher EOC), Jest for ComcastHub UI reliability, and Jenkins-driven regression via APEye for integration-level validation in billing workflows.",
  },
  {
    id: "you-project",
    category: "Projects",
    question: "Tell me about the YOU project.",
    answer:
      "YOU is a GenAI clinical wellness platform: realtime chat and journaling on React/TypeScript/Firebase (<150ms sync), Firestore security rules for PII, RBAC, JWT auth, PHQ-9 therapist matching (60% faster assignment), and Gemini 1.5 Pro for 24/7 care access.",
  },
  {
    id: "streamer-project",
    category: "Projects",
    question: "Tell me about Streamer.",
    answer:
      "A live streaming prototype (React + Node.js) with WebSocket metadata, OBS RTMP integration, Google OAuth 2.0, and FLV.js playback — built for multi-channel broadcasting with high uptime across live events.",
  },
  {
    id: "comcasthub",
    category: "Projects",
    question: "What is ComcastHub?",
    answer:
      "The official internal account developer website I led — Next.js 14, React 18, TypeScript, Tailwind, Framer Motion. Unifies scattered dev tools into one hub, deployed on AWS, with Jest for UI reliability.",
  },
  {
    id: "apeye",
    category: "Projects",
    question: "What is APEye?",
    answer:
      "A Jenkins job orchestration tool with a RunJobs extension for Invoicing jobs. One-click regression runs cut test cycles from 5 hours to 1 hour — used daily by 10+ developers.",
  },
  {
    id: "education",
    category: "Education",
    question: "What's your educational background?",
    answer:
      "B.E. Computer Engineering from Thapar Institute of Engineering and Technology (2019–2023, 7.96 CGPA). Secondary: 10 CGPA. Senior secondary: 94.8%.",
  },
  {
    id: "location",
    category: "Availability",
    question: "Where are you based?",
    answer: "Pune, Maharashtra, India. Open to remote-friendly and hybrid roles.",
  },
  {
    id: "notice-period",
    category: "Availability",
    question: "What is your notice period?",
    answer: "Happy to discuss notice period and start date directly — use the contact form or email.",
  },
  {
    id: "salary",
    category: "Availability",
    question: "What are your salary expectations?",
    answer: "Open to discussing compensation based on role scope, level, and location. Please reach out via email or LinkedIn.",
  },
  {
    id: "remote",
    category: "Availability",
    question: "Are you open to remote work?",
    answer: "Yes — open to full-time roles with remote-friendly arrangements across India.",
  },
  {
    id: "leadership",
    category: "Experience",
    question: "Any leadership experience outside coding?",
    answer:
      "Organised CSL 2025 multi-sport tournament end-to-end (budget, auctions, scheduling). At YHills, led 25 campus leads across 40 colleges. Captain of U-19 badminton and U-17 chess teams in school.",
  },
  {
    id: "why-hire",
    category: "Experience",
    question: "Why should we hire you?",
    answer:
      "I ship tools that save teams hours every week — with measurable impact (85–90% automation, 80% faster cycles). I combine full-stack delivery, GenAI, and DevOps in production telecom billing environments.",
  },
  {
    id: "team-size",
    category: "Experience",
    question: "Have you worked in teams?",
    answer:
      "Yes — collaborated on Cipher EOC, CSL auction app, and cross-functional billing teams. APEye and ComcastHub serve 10+ developers daily across account teams.",
  },
  {
    id: "internship",
    category: "Experience",
    question: "Tell me about your internship.",
    answer:
      "Business Development Executive Intern at YHills Edutech (Jan–Jun 2023): engaged 500+ learners monthly and recruited 25 campus leads across 40 colleges, accelerating regional acquisition by 30%.",
  },
  {
    id: "frontend-depth",
    category: "Skills",
    question: "How strong is your frontend experience?",
    answer:
      "Production: Next.js 14, React 18, TypeScript, Tailwind, Framer Motion (ComcastHub). Side projects: React + Firebase realtime apps, OAuth flows, and responsive UI with accessibility in mind.",
  },
  {
    id: "backend-depth",
    category: "Skills",
    question: "How strong is your backend experience?",
    answer:
      "Python automation (Streamlit, Paramiko, Selenium, pandas), Node.js streaming services, Oracle/PostgreSQL, Firebase/Firestore security rules, JWT/OAuth 2.0, and REST API design.",
  },
  {
    id: "biggest-metric",
    category: "Experience",
    question: "What's your biggest measurable impact?",
    answer:
      "BPT Charge Code Tool: 90% reduction in manual data entry and deployment errors. APEye: 80% faster test turnaround (5h→1h) for the entire dev team.",
  },
  {
    id: "certifications",
    category: "Education",
    question: "Do you have certifications?",
    answer:
      "Yes — including Modern React with Redux (Udemy), SQL Bootcamp, Data Science & ML, Software Engineering 101, and Coursera courses in Well-Being and Spanish. See the Certifications section on this site.",
  },
  {
    id: "contact-best",
    category: "Availability",
    question: "What's the best way to contact you?",
    answer:
      "Email: bansal.arpit02@gmail.com · WhatsApp/Phone: +91 8146126152 · LinkedIn or the contact form on this page.",
  },
  {
    id: "portfolio-url",
    category: "Projects",
    question: "Where can I find your portfolio and resume?",
    answer:
      "Portfolio: arpit29.netlify.app · Resume downloadable from the hero section or left rail on this site.",
  },
];
