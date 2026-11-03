/**
 * Campaign case studies.
 *
 * Screenshot slots: every `shots` entry renders as an empty placeholder until you
 * give it a `src`. Drop the image in /public (e.g. /public/aaramgram-ads.png) and
 * set `src: "/aaramgram-ads.png"`. The first shot is the card image on the home page.
 */
export type Shot = { src?: string; caption: string };

export type CampaignKind = "paid" | "seo" | "social";

export type Campaign = {
  slug: string;
  num: string;
  kind: CampaignKind;
  client: string;
  /** Short sector line, e.g. "Resort · Wayanad". */
  category: string;
  /** Tag shown above the name on the portfolio page. */
  tag: string;
  /** One-line description of the client. */
  sub: string;
  platform: string;
  headline: { value: string; label: string };
  summary: string;
  meta: { label: string; value: string }[];
  did: string[];
  metrics: { value: string; label: string }[];
  recognition?: string;
  shots: Shot[];
  featured: boolean;
};

export const CAMPAIGNS: Campaign[] = [
  {
    slug: "design1studio",
    num: "01",
    kind: "paid",
    client: "Design1Studio",
    category: "Interior design · Bangalore",
    tag: "Paid media · Interior design",
    sub: "Interior design and renovation, Bangalore",
    platform: "Google, Meta",
    headline: { value: "6.8x", label: "Return on ad spend" },
    summary:
      "Performance marketing for an interior design company that specialises in residential interiors and renovation. I ran search and social side by side so the account captured people who were searching and people who could be persuaded.",
    meta: [
      { label: "Platforms", value: "Google Ads, Meta Ads" },
      { label: "Audience", value: "Homeowners in Bangalore planning interiors or renovation" },
      { label: "Goal", value: "Business enquiries" },
    ],
    did: [
      "Ran Google Search campaigns aimed at high-intent interior design searches in Bangalore.",
      "Ran Meta lead generation campaigns with creative testing, audience segmentation and retargeting.",
      "Tested creatives in a structured A/B setup to find the winning variation before moving budget.",
      "Optimised budgets and conversion performance to drive business enquiries.",
    ],
    metrics: [
      { value: "6.8x", label: "ROAS" },
      { value: "2", label: "Platforms" },
    ],
    shots: [
      { caption: "Google Ads · ROAS overview" },
      { caption: "Meta Ads Manager · lead campaigns" },
      { caption: "Top performing creatives" },
    ],
    featured: true,
  },
  {
    slug: "aaramgram",
    num: "02",
    kind: "paid",
    client: "Aaramgram",
    category: "Resort · Wayanad",
    tag: "Paid media · Resort",
    sub: "Resort in Wayanad, Kerala",
    platform: "Meta",
    headline: { value: "5,079", label: "Conversations" },
    summary:
      "Messaging-focused campaigns for a Wayanad resort, built to turn ad impressions into direct conversations with potential guests at a low cost per conversation.",
    meta: [
      { label: "Platform", value: "Meta Ads" },
      { label: "Objective", value: "Messaging conversations" },
      { label: "Goal", value: "Guest enquiries and booking interest" },
    ],
    did: [
      "Developed messaging-focused ad campaigns around guest enquiries.",
      "Managed audience targeting and campaign budget optimisation.",
      "Optimised delivery for cost-efficient conversations.",
    ],
    metrics: [
      { value: "5,079", label: "Conversations" },
      { value: "₹13.56", label: "Per conversation" },
    ],
    shots: [
      { caption: "Meta Ads Manager · messaging results" },
      { caption: "Audience breakdown" },
      { caption: "Ad creatives" },
    ],
    featured: true,
  },
  {
    slug: "go2wayanad",
    num: "03",
    kind: "paid",
    client: "Go2Wayanad",
    category: "Booking agency · Wayanad",
    tag: "Paid media · Travel",
    sub: "Resort booking agency, Wayanad",
    platform: "Meta",
    headline: { value: "₹6.63", label: "Per conversation" },
    summary:
      "Messaging campaigns for a resort booking agency, aimed at travellers interested in Wayanad stays. The lowest cost per conversation in my portfolio.",
    meta: [
      { label: "Platform", value: "Meta Ads" },
      { label: "Objective", value: "Messaging conversations" },
      { label: "Audience", value: "Travellers looking for Wayanad stays and holidays" },
    ],
    did: [
      "Ran messaging campaigns that generate booking enquiries.",
      "Managed audience targeting and campaign optimisation.",
      "Kept the focus on cost-efficient conversations with potential travellers.",
    ],
    metrics: [
      { value: "1,985", label: "Conversations" },
      { value: "₹6.63", label: "Per conversation" },
    ],
    shots: [
      { caption: "Meta Ads Manager · conversations" },
      { caption: "Cost per result trend" },
      { caption: "Ad creatives" },
    ],
    featured: true,
  },
  {
    slug: "aesthetic-design",
    num: "04",
    kind: "paid",
    client: "Aesthetic Design",
    category: "Wall decor · Home decor",
    tag: "Paid media · Decor",
    sub: "Wall decor and home decor brand",
    platform: "Meta",
    headline: { value: "1,503", label: "Conversations" },
    summary:
      "Meta advertising for a wall decor brand, covering product visibility, audience engagement and customer enquiries in one account.",
    meta: [
      { label: "Platform", value: "Meta Ads" },
      { label: "Objective", value: "Messaging, awareness, hiring" },
      { label: "Goal", value: "Visibility, engagement and customer enquiries" },
    ],
    did: [
      "Ran messaging campaigns to attract potential customers.",
      "Ran brand awareness campaigns to expand reach.",
      "Built and managed hiring campaigns alongside promotional activity.",
    ],
    metrics: [
      { value: "1,503", label: "Conversations" },
      { value: "₹15.99", label: "Per conversation" },
    ],
    shots: [
      { caption: "Meta Ads Manager · campaign results" },
      { caption: "Product promotion creatives" },
      { caption: "Brand awareness reach" },
    ],
    featured: false,
  },
  {
    slug: "kuruva-island-resort",
    num: "05",
    kind: "paid",
    client: "Kuruva Island Resort",
    category: "Resort · Kerala",
    tag: "Paid media · Resort",
    sub: "Resort in Kerala",
    platform: "Meta",
    headline: { value: "352", label: "Leads in 20 days" },
    summary: "A short, focused lead generation sprint for a resort, using local targeting and lead-form optimisation.",
    meta: [
      { label: "Platform", value: "Meta Ads" },
      { label: "Objective", value: "Lead generation" },
      { label: "Window", value: "20 days" },
    ],
    did: [
      "Targeted local audiences around the resort.",
      "Optimised the lead form to raise completion and lead quality.",
    ],
    metrics: [
      { value: "352", label: "Leads" },
      { value: "₹22", label: "Per result" },
      { value: "20", label: "Days" },
    ],
    shots: [
      { caption: "Meta Ads Manager · lead results" },
      { caption: "Lead form" },
      { caption: "Ad creatives" },
    ],
    featured: false,
  },
  {
    slug: "lead-workz",
    num: "06",
    kind: "paid",
    client: "Lead Workz",
    category: "Digital agency · Client acquisition",
    tag: "Paid media · B2B and B2C",
    sub: "Digital marketing agency, client acquisition",
    platform: "Meta",
    headline: { value: "288", label: "Leads" },
    summary:
      "Lead generation to win new agency clients across several industries. I run this as Head of Performance Marketing at Lead Workz.",
    meta: [
      { label: "Platform", value: "Meta Ads" },
      { label: "Objective", value: "Lead generation" },
      { label: "Verticals", value: "Real estate, interior design, website development and more" },
    ],
    did: [
      "Ran industry-specific campaigns for real estate, interior design, website development and other categories.",
      "Tested different creatives, messaging approaches and audience segments.",
      "Managed campaign budgets and lead acquisition costs.",
    ],
    metrics: [
      { value: "288", label: "Website dev leads" },
      { value: "₹82.18", label: "Per lead" },
    ],
    shots: [
      { caption: "Meta Ads Manager · lead results" },
      { caption: "Ad creatives" },
    ],
    featured: false,
  },
  {
    slug: "rcane-pictures",
    num: "07",
    kind: "paid",
    client: "RCANE Pictures",
    category: "Film production · Entertainment",
    tag: "Paid media · Film",
    sub: "Film production and entertainment",
    platform: "YouTube, Demand Gen, Meta",
    headline: { value: "3", label: "Channels" },
    summary: "Multi-platform campaigns to promote films, build awareness and widen film visibility.",
    meta: [
      { label: "Platforms", value: "YouTube, Google Demand Gen, Meta Ads" },
      { label: "Objective", value: "Awareness and engagement" },
    ],
    did: [
      "Ran YouTube video view campaigns for film trailers and brand films.",
      "Managed Google Demand Gen campaigns.",
      "Ran Meta awareness and engagement campaigns to reach relevant audiences.",
    ],
    metrics: [{ value: "3", label: "Channels" }],
    shots: [
      { caption: "YouTube / Demand Gen results" },
      { caption: "Meta campaign results" },
    ],
    featured: false,
  },
  {
    slug: "trasccon",
    num: "08",
    kind: "seo",
    client: "Trasccon",
    category: "SEO · Industrial B2B",
    tag: "SEO · Industrial B2B",
    sub: "Trasccon Interconnection Solutions, where I was Growth Lead",
    platform: "Organic search",
    headline: { value: "35+", label: "Keywords on page 1" },
    summary:
      "A complete SEO programme for an industrial manufacturer: landing page scaling, keyword targeting and technical optimisation. The growth came from a system, not luck.",
    meta: [
      { label: "Channel", value: "Organic search" },
      { label: "Stack", value: "WordPress, Search Console" },
      { label: "Window", value: "6 months of reporting" },
    ],
    did: [
      "Mapped keywords to pages and built 40+ SEO landing pages for B2B lead generation.",
      "Strengthened internal linking and optimised the site for SEO, UX and scale.",
      "Ran the whole digital function independently, working with leadership.",
    ],
    metrics: [
      { value: "35+", label: "Page 1 keywords" },
      { value: "7,000+", label: "New organic users" },
      { value: "50.1K", label: "Impressions" },
      { value: "2.8K", label: "Clicks" },
    ],
    recognition: "Awarded the Badge of Honor at Trasccon for high-impact results.",
    shots: [
      { caption: "Search Console · performance" },
      { caption: "Google Analytics · organic users" },
      { caption: "Keyword rankings" },
    ],
    featured: true,
  },
  {
    slug: "social-growth",
    num: "09",
    kind: "social",
    client: "LinkedIn & Instagram growth",
    category: "Social · Organic",
    tag: "Social · Organic",
    sub: "Trasccon (LinkedIn) and Adlystio (Instagram)",
    platform: "LinkedIn, Instagram",
    headline: { value: "1,100", label: "LinkedIn followers" },
    summary: "Organic brand building for a B2B manufacturer on LinkedIn and a niche brand on Instagram.",
    meta: [
      { label: "Channels", value: "LinkedIn, Instagram" },
      { label: "Approach", value: "Niche positioning and consistency" },
    ],
    did: [
      "Published industry-relevant content with professional positioning and a steady engagement routine on Trasccon's LinkedIn.",
      "Built a content-first Instagram presence for Adlystio around niche positioning and visual storytelling.",
    ],
    metrics: [
      { value: "400 → 1,100", label: "Trasccon LinkedIn, 6 months" },
      { value: "400+", label: "Adlystio organic Instagram followers" },
    ],
    shots: [
      { caption: "LinkedIn · follower growth" },
      { caption: "Instagram · Adlystio profile" },
    ],
    featured: false,
  },
];

export const FEATURED_CAMPAIGNS = CAMPAIGNS.filter((c) => c.featured);

export function getCampaign(slug: string): Campaign | undefined {
  return CAMPAIGNS.find((c) => c.slug === slug);
}

export const KIND_LABEL: Record<CampaignKind, string> = {
  paid: "Paid media",
  seo: "SEO",
  social: "Social",
};

/** Headline numbers for the results ledger on the home page. */
export const RESULTS = [
  { value: "6.8x", title: "Return on ad spend for Design1Studio.", text: "Google Search on high-intent Bangalore interior design queries, plus Meta lead campaigns with creative testing, segmentation and retargeting." },
  { value: "5,079", title: "Messaging conversations for Aaramgram, a Wayanad resort.", text: "Meta campaigns tuned for cost-efficient guest enquiries at ₹13.56 per conversation." },
  { value: "₹6.63", title: "Per conversation for Go2Wayanad.", text: "1,985 booking enquiries for a Wayanad resort booking agency." },
  { value: "35+", title: "Page 1 rankings at Trasccon.", text: "Structured keyword mapping, 40+ SEO landing pages and internal linking brought in 7,000+ new organic users, 50.1K impressions and 2.8K clicks over six months." },
  { value: "352", title: "Leads in 20 days for Kuruva Island Resort.", text: "Local targeting and lead-form optimisation on Meta at ₹22 per result." },
  { value: "400→1.1K", title: "LinkedIn followers for Trasccon in six months.", text: "Industry content, professional positioning and an engagement routine." },
  { value: "Badge", title: "Badge of Honor at Trasccon", text: "for high-impact results while running digital marketing independently." },
];

/** Dashboard screenshot slots shown under the results ledger. Set `src` once you have the image. */
export const DASHBOARDS: Shot[] = [
  { caption: "Meta Ads Manager · account overview" },
  { caption: "Google Ads · ROAS report" },
  { caption: "Search Console · Trasccon performance" },
];

/** Portfolio page: headline strip. */
export const PORTFOLIO_STRIP = [
  { value: "8,567", label: "Meta conversations across Aaramgram, Go2Wayanad and Aesthetic Design" },
  { value: "640", label: "Leads from Kuruva Island Resort and Lead Workz" },
  { value: "6.8x", label: "Return on ad spend for Design1Studio" },
  { value: "35+", label: "Keywords on Google page 1 for Trasccon" },
];

/** Portfolio page: results at a glance. */
export const RESULTS_TABLE = [
  { client: "Design1Studio", industry: "Interior design", channel: "Google and Meta", result: "6.8x ROAS", cost: "n/a" },
  { client: "Aaramgram", industry: "Resort", channel: "Meta", result: "5,079 conversations", cost: "₹13.56 each" },
  { client: "Go2Wayanad", industry: "Booking agency", channel: "Meta", result: "1,985 conversations", cost: "₹6.63 each" },
  { client: "Aesthetic Design", industry: "Wall decor", channel: "Meta", result: "1,503 conversations", cost: "₹15.99 each" },
  { client: "Kuruva Island Resort", industry: "Resort", channel: "Meta", result: "352 leads, 20 days", cost: "₹22 each" },
  { client: "Lead Workz", industry: "Digital agency", channel: "Meta", result: "288 leads", cost: "₹82.18 each" },
  { client: "Trasccon", industry: "Industrial B2B", channel: "SEO", result: "35+ page 1 keywords", cost: "n/a" },
];

/** Portfolio page: how I run a campaign. */
export const CAMPAIGN_STEPS = [
  { num: "01", title: "Funnel first", desc: "Awareness, consideration and conversion each get a campaign with one clear job." },
  { num: "02", title: "Read the data", desc: "CTR, CPC and CPA tracked daily. Weak ads are cut quickly and winners get the budget." },
  { num: "03", title: "Test creative", desc: "Several creatives per ad set, iterated on real performance data." },
  { num: "04", title: "Align the click", desc: "Ad, landing page and message say the same thing so the conversion does not leak." },
];

/** Portfolio page: websites built to convert. Set `shot.src` to add a screenshot. */
export const WEBSITES = [
  { name: "Trasccon.com", sector: "Industrial manufacturing", text: "40+ SEO landing pages and strategic keyword mapping on an SEO-first architecture, aimed at B2B lead generation.", tags: ["WordPress", "SEO-first"], shot: { caption: "Trasccon.com · homepage" } as Shot },
  { name: "NavodayaPower.com", sector: "Industrial B2B", text: "Advanced product filtering and a clean interface built for an industrial audience.", tags: ["Custom development", "Performance"], shot: { caption: "NavodayaPower.com · product filter" } as Shot },
  { name: "RainCountryResorts.com", sector: "Hospitality", text: "Visual storytelling and a conversion-driven layout that reflects the resort experience.", tags: ["Visual design", "SEO"], shot: { caption: "RainCountryResorts.com · homepage" } as Shot },
  { name: "Leadworkz.com", sector: "Digital marketing agency", text: "Fast pages with scroll-based interactions on a modern design system.", tags: ["Next.js", "GSAP"], shot: { caption: "Leadworkz.com · homepage" } as Shot },
];
