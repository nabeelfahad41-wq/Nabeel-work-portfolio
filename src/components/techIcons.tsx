import type { IconType } from "react-icons";
import {
  SiMeta, SiGoogleads, SiYoutube, SiWhatsapp, SiGoogleanalytics, SiGooglesearchconsole, SiSemrush,
  SiWordpress, SiShopify, SiFigma, SiNextdotjs,
} from "react-icons/si";
import { FaLinkedin } from "react-icons/fa6";
import {
  TbTargetArrow, TbRepeat, TbArrowsSplit, TbFilter, TbKey, TbLayoutGrid, TbSettingsSearch, TbLink,
  TbUsers, TbChartBar,
} from "react-icons/tb";

/** Icon for each skill item, keyed by the label shown in site data. */
export const TECH_ICONS: Record<string, IconType> = {
  "Meta Ads": SiMeta,
  "Google Search": SiGoogleads,
  "YouTube & Demand Gen": SiYoutube,
  "Lead generation": TbTargetArrow,
  "Click-to-WhatsApp": SiWhatsapp,
  Retargeting: TbRepeat,
  "A/B testing": TbArrowsSplit,
  "Funnel strategy": TbFilter,
  "Keyword strategy": TbKey,
  "Landing page scaling": TbLayoutGrid,
  "Technical SEO": TbSettingsSearch,
  "Backlink outreach": TbLink,
  "LinkedIn growth": FaLinkedin,
  "Social media": TbUsers,
  "Google Analytics": SiGoogleanalytics,
  "Search Console": SiGooglesearchconsole,
  SEMrush: SiSemrush,
  Ahrefs: TbChartBar,
  WordPress: SiWordpress,
  Shopify: SiShopify,
  Figma: SiFigma,
  "Next.js": SiNextdotjs,
};
