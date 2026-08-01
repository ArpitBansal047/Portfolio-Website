export type LinkedInLetter = {
  id: string;
  /** Closed envelope stamp */
  flapTitle: string;
  /** Postcard headline after open */
  title: string;
  /** Opening line(s) of the LinkedIn post */
  hook: string;
  /** Extra postcard lines */
  body: string[];
  /** Indices in body that render bold */
  boldBody?: number[];
  /** True = hook renders bold */
  boldHook?: boolean;
  /** Stamp / teaser line under the copy (per post type) */
  stampLine: string;
  topic: string;
  mailDate: string;
  sortDate: string;
  status: "scheduled" | "live";
  url?: string;
  siteAnchor?: string;
  postcardImage?: string;
  showInRack?: boolean;
};

/**
 * WEEKLY ADD — paste into `linkedInLetters`.
 * hook + body = teaser only. stampLine = LinkedIn teaser under the lines.
 */

const STAMP_SHIPPED = "Full story on LinkedIn — this is just the stamp.";

export const linkedInLetters: LinkedInLetter[] = [
  {
    id: "portfolio-launch",
    flapTitle: "Hi, there!",
    title: "Finally shipped the personal website I kept saying I’d build “someday.”",
    hook: "Resume that runs like code, isHireable(), dark mode, sound toggle, small FAQ bot.",
    boldHook: true,
    body: ["Officially my 1st post here — more tech + side projects to come."],
    stampLine: STAMP_SHIPPED,
    topic: "Build in public · Web",
    mailDate: "23 Jul 2026",
    sortDate: "2026-07-23",
    status: "live",
    url: "https://www.linkedin.com/posts/arpit0291_webdev-buildinpublic-reactjs-share-7486129433238691842-cELM/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC1QblMB1AgtTews8iBBA2YYuIBrcG4CuKw",
    postcardImage: "/images/linkedin/portfolio-launch.png?v=6",
    siteAnchor: "#projects",
    showInRack: true,
  },
  {
    id: "you",
    flapTitle: "YOU",
    title: "YOU....need this",
    hook: "Therapy still isn’t “normal” until something’s already on fire. Until then we treat the brain like it should just… handle it.",
    body: [],
    stampLine: STAMP_SHIPPED,
    topic: "Mental health · HealthTech",
    mailDate: "1 Aug 2026",
    sortDate: "2026-08-01",
    status: "live",
    url: "https://www.linkedin.com/posts/arpit0291_mentalhealth-healthtech-buildinpublic-share-7489345904324546560-iuGE/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAC1QblMB1AgtTews8iBBA2YYuIBrcG4CuKw",
    postcardImage: "/images/linkedin/you.png?v=3",
    siteAnchor: "#you",
    showInRack: true,
  },
  {
    id: "procrastinator",
    flapTitle: "Always Late",
    title: "Procrastination",
    hook: "I sat down to practice coding. My brain approved a different project: anything else.",
    body: ["Wanted to rebuild the skill after a gap. Resistance was still there."],
    stampLine: "Teaser mode. The long cut stayed on LinkedIn.",
    topic: "Procrastination · Psychology",
    mailDate: "12 Aug 2026",
    sortDate: "2026-08-12",
    status: "scheduled",
    postcardImage: "/images/linkedin/delay.png?v=3",
    showInRack: true,
  },
  {
    id: "calling",
    flapTitle: "CALL ME!",
    title: "Calling as a skill",
    hook: "We’re lonely. We post “check on your people.” Then someone actually calls — and we open Reels mid-sentence.",
    body: [],
    stampLine: "If this nicks something in you, open the real post.",
    topic: "Attention · Loneliness",
    mailDate: "21 Aug 2026",
    sortDate: "2026-08-21",
    status: "scheduled",
    postcardImage: "/images/linkedin/call.png?v=3",
    showInRack: true,
  },
  {
    id: "hair",
    flapTitle: "HAIRLOSSS....T",
    title: "Dear hair, this isn’t working.",
    hook: "You used to show up every morning. Now every morning is a soft launch… with fewer features.",
    body: ["I opened one hair-loss video. The algorithm took that personally."],
    stampLine: "Hope has better UX than reality — rest is on LinkedIn.",
    topic: "Hair loss · Men’s mental health",
    mailDate: "4 Sep 2026",
    sortDate: "2026-09-04",
    status: "scheduled",
    postcardImage: "/images/linkedin/hair.png?v=3",
    showInRack: true,
  },
];

/** Left → older · focus = newest live · right → upcoming */
export const timelineLinkedInLetters = linkedInLetters
  .filter((letter) => letter.showInRack !== false)
  .sort((a, b) => a.sortDate.localeCompare(b.sortDate));

export const getStackFocusId = (todayIso = new Date().toISOString().slice(0, 10)) => {
  const visible = timelineLinkedInLetters;
  const liveNewest = [...visible]
    .filter((l) => l.status === "live")
    .sort((a, b) => b.sortDate.localeCompare(a.sortDate))[0];
  if (liveNewest) return liveNewest.id;

  const upcoming = visible
    .filter((l) => l.sortDate >= todayIso)
    .sort((a, b) => a.sortDate.localeCompare(b.sortDate))[0];
  if (upcoming) return upcoming.id;

  return visible[visible.length - 1]?.id ?? null;
};
