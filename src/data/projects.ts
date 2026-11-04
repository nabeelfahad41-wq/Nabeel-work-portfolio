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
      { src: "/work/design1studio-google-ads.png", caption: "Google Ads · campaign overview" },
      { src: "/work/design1studio-meta-campaigns.png", caption: "Meta Ads Manager · lead campaigns" },
      { src: "/work/design1studio-meta-leads.png", caption: "Meta Ads Manager · leads performance" },
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
      { src: "/work/aaramgram-messaging.png", caption: "Meta Ads Manager · messaging results" },
      { src: "/work/aaramgram-video.png", caption: "Meta Ads Manager · video engagement" },
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
      { src: "/work/go2wayanad-messaging.png", caption: "Meta Ads Manager · messaging results" },
      { src: "/work/go2wayanad-campaigns.png", caption: "Meta Ads Manager · campaigns" },
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
      { src: "/work/aesthetic-design-messaging.png", caption: "Meta Ads Manager · messaging results" },
      { src: "/work/aesthetic-design-campaigns.png", caption: "Meta Ads Manager · campaigns" },
    ],
    featured: false,
  },
  {
    slug: "koza-aesthetic-clinic",
    num: "05",
    kind: "paid",
    client: "Koza – Aesthetic Clinic",
    category: "Aesthetic & skincare clinic",
    tag: "Paid media · Aesthetic clinic",
    sub: "Aesthetic and skincare clinic",
    platform: "Meta",
    headline: { value: "1,104", label: "Conversations" },
    summary:
      "Managed Meta advertising campaigns for an aesthetic clinic, promoting skincare and facial treatment services to generate customer enquiries.",
    meta: [
      { label: "Platform", value: "Meta Ads" },
      { label: "Objective", value: "Messaging conversations" },
      { label: "Services", value: "Carbon Facial, Hydra Facial and other aesthetic treatments" },
    ],
    did: [
      "Executed service-specific campaigns for Carbon Facial, Hydra Facial and other aesthetic treatments.",
      "Developed promotional creatives and targeted campaigns to attract potential customers.",
      "Managed campaign optimisation to improve enquiry generation and cost efficiency.",
    ],
    metrics: [
      { value: "1,104", label: "Messaging conversations" },
      { value: "₹50.54", label: "Per conversation" },
      { value: "1.3M+", label: "Impressions" },
    ],
    shots: [
      { src: "/work/koza-messaging.png", caption: "Meta Ads Manager · messaging results" },
      { src: "/work/koza-campaigns.png", caption: "Meta Ads Manager · campaigns" },
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
      { src: "/work/lead-workz-leads.png", caption: "Meta Ads Manager · lead results" },
      { src: "/work/lead-workz-campaigns.png", caption: "Meta Ads Manager · campaigns" },
      { src: "/work/lead-workz-google-ads.png", caption: "Google Ads · overview" },
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
      { src: "/work/rcane-youtube.png", caption: "YouTube · brand film video views" },
      { src: "/work/rcane-google-ads.png", caption: "Google Ads · Demand Gen campaigns" },
      { src: "/work/rcane-meta.png", caption: "Meta Ads Manager · ad sets" },
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
      { src: "/work/trasccon-search-console.png", caption: "Search Console · performance" },
      { src: "/work/trasccon-analytics.png", caption: "Google Analytics · users" },
      { src: "/work/trasccon-ranking.png", caption: "Google Search · page 1 ranking" },
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
      { src: "/work/social-linkedin.png", caption: "LinkedIn · Trasccon page analytics" },
      { src: "/work/social-instagram.png", caption: "Instagram · Adlystio profile" },
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
  { value: "1,104", title: "Messaging conversations for Koza Aesthetic Clinic.", text: "Service-specific Meta campaigns for Carbon Facial, Hydra Facial and other treatments at ₹50.54 per conversation, reaching 1.3 million+ impressions." },
  { value: "400→1.1K", title: "LinkedIn followers for Trasccon in six months.", text: "Industry content, professional positioning and an engagement routine." },
  { value: "Badge", title: "Badge of Honor at Trasccon", text: "for high-impact results while running digital marketing independently." },
];

/** Dashboard screenshot slots shown under the results ledger. Set `src` once you have the image. */
export const DASHBOARDS: Shot[] = [
  { src: "/work/design1studio-meta-campaigns.png", caption: "Meta Ads Manager · Design1Studio lead campaigns" },
  { src: "/work/design1studio-google-ads.png", caption: "Google Ads · Design1Studio overview" },
  { src: "/work/trasccon-search-console.png", caption: "Search Console · Trasccon performance" },
];

/** Portfolio page: headline strip. */
export const PORTFOLIO_STRIP = [
  { value: "9,671", label: "Meta conversations across Aaramgram, Go2Wayanad, Aesthetic Design and Koza" },
  { value: "1.3M+", label: "Impressions for Koza Aesthetic Clinic on Meta" },
  { value: "6.8x", label: "Return on ad spend for Design1Studio" },
  { value: "35+", label: "Keywords on Google page 1 for Trasccon" },
];

/** Portfolio page: results at a glance. */
export const RESULTS_TABLE = [
  { client: "Design1Studio", industry: "Interior design", channel: "Google and Meta", result: "6.8x ROAS", cost: "n/a" },
  { client: "Aaramgram", industry: "Resort", channel: "Meta", result: "5,079 conversations", cost: "₹13.56 each" },
  { client: "Go2Wayanad", industry: "Booking agency", channel: "Meta", result: "1,985 conversations", cost: "₹6.63 each" },
  { client: "Aesthetic Design", industry: "Wall decor", channel: "Meta", result: "1,503 conversations", cost: "₹15.99 each" },
  { client: "Koza – Aesthetic Clinic", industry: "Aesthetic clinic", channel: "Meta", result: "1,104 conversations", cost: "₹50.54 each" },
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
  { name: "Trasccon.com", sector: "Industrial manufacturing", text: "40+ SEO landing pages and strategic keyword mapping on an SEO-first architecture, aimed at B2B lead generation.", tags: ["WordPress", "SEO-first"], shot: { src: "/work/site-trasccon.png", caption: "Trasccon.com · homepage" } as Shot },
  { name: "NavodayaPower.com", sector: "Industrial B2B", text: "Advanced product filtering and a clean interface built for an industrial audience.", tags: ["Custom development", "Performance"], shot: { src: "/work/site-navodaya.png", caption: "NavodayaPower.com · homepage" } as Shot },
  { name: "SDS", sector: "Security services · Sreesecure Design Solutions Pvt. Ltd.", text: "Corporate website for a security service company, with product and service pages, a blog and careers, employee and customer login portals, and a get-a-quote path for enquiries.", tags: ["Corporate site", "Lead capture"], shot: { src: "/work/site-sds.png", caption: "SDS · homepage" } as Shot },
  { name: "Leadworkz.com", sector: "Digital marketing agency", text: "Fast pages with scroll-based interactions on a modern design system.", tags: ["Next.js", "GSAP"], shot: { src: "/work/site-leadworkz.png", caption: "Leadworkz.com · homepage" } as Shot },
];
