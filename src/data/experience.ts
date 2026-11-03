export type ExperienceItem = {
  num: string;
  company: string;
  role: string;
  range: string;
  current: boolean;
  stack: string[];
  impact: string[];
};

export const EXPERIENCE: ExperienceItem[] = [
  {
    num: "01",
    company: "Lead Workz",
    role: "Head of Performance Marketing",
    range: "Feb 2026 — Present",
    current: true,
    stack: ["Meta Ads", "Lead generation", "Creative testing", "Budget management"],
    impact: [
      "Lead paid media for an agency that serves real estate, interior design, website development and other industries.",
      "Run Meta lead generation campaigns, testing creatives, messaging and audience segments.",
      "Manage campaign budgets and lead acquisition costs, including 288 website development leads.",
    ],
  },
  {
    num: "02",
    company: "Trasccon Interconnection Solutions",
    role: "Growth Lead",
    range: "Jan 2025 — Jan 2026",
    current: false,
    stack: ["SEO", "Landing pages", "LinkedIn", "UX"],
    impact: [
      "Ran the whole digital function on my own, working directly with leadership.",
      "Ranked 35+ high-volume keywords on page 1 and optimised the site for SEO, UX and scale.",
      "Doubled LinkedIn following in six months. Awarded the Badge of Honor.",
    ],
  },
  {
    num: "03",
    company: "Nearlearn",
    role: "SEO Analyst Intern",
    range: "Sep 2024 — Nov 2024",
    current: false,
    stack: ["SEMrush", "Ahrefs", "Search Console", "Off-page SEO"],
    impact: [
      "Off-page SEO, backlink outreach, keyword research and SERP evaluation.",
      "Worked in SEMrush, Ahrefs and Search Console to lift domain rank and visibility.",
    ],
  },
  {
    num: "04",
    company: "Bangalore University",
    role: "MBA, Business Analytics and Marketing",
    range: "2024",
    current: false,
    stack: ["Consumer behaviour", "Brand strategy", "BI tools"],
    impact: ["Consumer behaviour, brand strategy, data analysis and BI tools."],
  },
];
