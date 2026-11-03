/**
 * Campaign case studies.
 *
 * Screenshot slots: every `shots` entry renders as an empty placeholder until you
 * give it a `src`. Drop the image in /public (e.g. /public/aaramgram-ads.png) and
 * set `src: "/aaramgram-ads.png"`. The first shot is the card image on the home page.
 */
export type Shot = { src?: string; caption: string };

export type Campaign = {
  slug: string;
  num: string;
  client: string;
  category: string;
  platform: string;
  headline: { value: string; label: string };
  summary: string;
  metrics: { value: string; label: string }[];
  strategy: string;
  result: string[];
  shots: Shot[];
  featured: boolean;
};

export const CAMPAIGNS: Campaign[] = [
  {
    slug: "design1studio",
    num: "01",
    client: "Design1Studio",
    category: "Interior design · Bangalore",
    platform: "Google, Meta",
    headline: { value: "6.8x", label: "Return on ad spend" },
    summary:
      "Google Search on high-intent interior design queries, plus Meta lead campaigns with creative testing, audience segmentation and retargeting.",
    metrics: [
      { value: "6.8x", label: "ROAS" },
      { value: "2", label: "Platforms: Google, Meta" },
    ],
    strategy:
      "Google Search captured high-intent Bangalore interior design queries, while Meta lead campaigns ran creative testing, audience segmentation and retargeting to bring warm prospects back.",
    result: [
      "6.8x return on ad spend across Google and Meta",
      "High-intent search paired with Meta retargeting",
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
    client: "Aaramgram",
    category: "Resort · Wayanad",
    platform: "Meta",
    headline: { value: "5,079", label: "Conversations" },
    summary: "Messaging campaigns with tight audience targeting and budget optimisation for guest enquiries.",
    metrics: [
      { value: "5,079", label: "Conversations" },
      { value: "₹13.56", label: "Per conversation" },
    ],
    strategy:
      "Meta messaging campaigns tuned for cost-efficient guest enquiries, with tight audience targeting and ongoing budget optimisation.",
    result: [
      "5,079 messaging conversations started",
      "₹13.56 average cost per conversation",
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
    client: "Go2Wayanad",
    category: "Booking agency · Wayanad",
    platform: "Meta",
    headline: { value: "1,985", label: "Conversations" },
    summary:
      "Messaging campaigns aimed at travellers looking for Wayanad stays, built for the lowest cost per enquiry.",
    metrics: [
      { value: "1,985", label: "Booking enquiries" },
      { value: "₹6.63", label: "Per conversation" },
    ],
    strategy:
      "Messaging campaigns aimed at travellers looking for Wayanad stays, structured and optimised for the lowest possible cost per enquiry.",
    result: [
      "1,985 booking enquiries for a Wayanad resort booking agency",
      "₹6.63 per conversation, the lowest cost in the portfolio",
    ],
    shots: [
      { caption: "Meta Ads Manager · conversations" },
      { caption: "Cost per result trend" },
      { caption: "Ad creatives" },
    ],
    featured: true,
  },
  {
    slug: "kuruva-island-resort",
    num: "04",
    client: "Kuruva Island Resort",
    category: "Resort · Kerala",
    platform: "Meta",
    headline: { value: "352", label: "Leads in 20 days" },
    summary: "Meta lead campaign built on local targeting and lead-form optimisation.",
    metrics: [
      { value: "352", label: "Leads in 20 days" },
      { value: "₹22", label: "Per result" },
    ],
    strategy: "A Meta lead campaign built on local targeting and lead-form optimisation.",
    result: ["352 leads in 20 days", "₹22 per result"],
    shots: [
      { caption: "Meta Ads Manager · lead results" },
      { caption: "Lead form" },
      { caption: "Ad creatives" },
    ],
    featured: false,
  },
  {
    slug: "aesthetic-design",
    num: "05",
    client: "Aesthetic Design",
    category: "Wall decor · Home decor",
    platform: "Meta",
    headline: { value: "1,503", label: "Conversations" },
    summary: "Messaging, brand awareness and hiring campaigns run alongside product promotions.",
    metrics: [
      { value: "1,503", label: "Conversations" },
      { value: "₹15.99", label: "Per conversation" },
    ],
    strategy: "Messaging, brand awareness and hiring campaigns run alongside product promotions.",
    result: ["1,503 messaging conversations", "₹15.99 per conversation"],
    shots: [
      { caption: "Meta Ads Manager · campaign results" },
      { caption: "Product promotion creatives" },
      { caption: "Brand awareness reach" },
    ],
    featured: false,
  },
  {
    slug: "trasccon",
    num: "06",
    client: "Trasccon",
    category: "SEO · Industrial B2B",
    platform: "Google Search, LinkedIn",
    headline: { value: "35+", label: "Keywords on page 1" },
    summary:
      "Keyword mapping, 40+ landing pages and internal linking took the site to 7,000+ new organic users.",
    metrics: [
      { value: "7,000+", label: "New organic users" },
      { value: "50.1K", label: "Impressions" },
      { value: "2.8K", label: "Clicks" },
    ],
    strategy:
      "Structured keyword mapping, 40+ SEO landing pages and internal linking. On LinkedIn, industry content, professional positioning and an engagement routine.",
    result: [
      "35+ keywords on Google page 1",
      "7,000+ new organic users, 50.1K impressions and 2.8K clicks over six months",
      "LinkedIn followers grown from 400 to 1,100 in six months",
      "Badge of Honor for high-impact results while running digital marketing independently",
    ],
    shots: [
      { caption: "Search Console · performance" },
      { caption: "Google Analytics · organic users" },
      { caption: "LinkedIn follower growth" },
    ],
    featured: true,
  },
  {
    slug: "lead-workz",
    num: "07",
    client: "Lead Workz",
    category: "Agency · Website development",
    platform: "Meta",
    headline: { value: "288", label: "Website development leads" },
    summary: "Meta lead generation for the agency's own website development service.",
    metrics: [
      { value: "288", label: "Leads" },
      { value: "₹82.18", label: "Per lead" },
    ],
    strategy:
      "Meta lead generation campaigns testing creatives, messaging and audience segments, with budgets managed against lead acquisition cost.",
    result: ["288 website development leads", "₹82.18 per lead"],
    shots: [
      { caption: "Meta Ads Manager · lead results" },
      { caption: "Ad creatives" },
    ],
    featured: false,
  },
  {
    slug: "rcane-pictures",
    num: "08",
    client: "RCANE Pictures",
    category: "Film promotion",
    platform: "YouTube, Demand Gen, Meta",
    headline: { value: "3", label: "Channels for film promotion" },
    summary: "YouTube, Demand Gen and Meta campaigns for film promotion.",
    metrics: [{ value: "3", label: "Channels: YouTube, Demand Gen, Meta" }],
    strategy: "YouTube, Demand Gen and Meta campaigns run together to promote a film release.",
    result: ["Film promotion across YouTube, Demand Gen and Meta"],
    shots: [
      { caption: "YouTube / Demand Gen results" },
      { caption: "Meta campaign results" },
    ],
    featured: false,
  },
];

export const FEATURED_CAMPAIGNS = CAMPAIGNS.filter((c) => c.featured);

export function getCampaign(slug: string): Campaign | undefined {
  return CAMPAIGNS.find((c) => c.slug === slug);
}

/** Headline numbers for the results ledger. */
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
