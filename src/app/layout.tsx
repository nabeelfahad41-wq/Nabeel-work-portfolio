import React from "react";
import type { Metadata } from "next";
import { Anton, Outfit, JetBrains_Mono, Great_Vibes, Allura } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import SmoothScroll from "@/components/motion/SmoothScroll";

const display = Anton({ subsets: ["latin"], weight: ["400"], variable: "--font-display", display: "swap" });
const sans = Outfit({ subsets: ["latin"], weight: ["300", "400", "500", "600"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono", display: "swap" });
const scriptLight = Allura({ subsets: ["latin"], weight: ["400"], variable: "--font-script-light", display: "swap" });
const script = Great_Vibes({ subsets: ["latin"], weight: ["400"], variable: "--font-script", display: "swap" });

const SITE_URL = "https://nabeel.vercel.app"; // TODO: update to your live domain
const TITLE = "Nabeel — Performance Marketer";
const DESCRIPTION =
  "Head of Performance Marketing at Lead Workz. Meta Ads, Google Search, SEO and CRO, measured in leads and revenue. 6.8x ROAS, 5,079 conversations at ₹13.56.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "Nabeel",
    "Performance Marketing",
    "Growth Marketing",
    "Meta Ads",
    "Google Ads",
    "SEO",
    "Lead Generation",
    "Bangalore",
  ],
  authors: [{ name: "Nabeel", url: SITE_URL }],
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Nabeel",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: "Nabeel",
      jobTitle: "Head of Performance Marketing",
      url: SITE_URL,
      sameAs: ["https://www.linkedin.com/in/fahad-nabeel-269996267/"],
      knowsAbout: [
        "Performance Marketing",
        "Meta Ads",
        "Google Search Ads",
        "Search Engine Optimization",
        "Conversion Rate Optimization",
        "Lead Generation",
      ],
    },
    {
      "@type": "WebSite",
      url: SITE_URL,
      name: TITLE,
      description: DESCRIPTION,
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable} ${script.variable} ${scriptLight.variable}`}
    >
      <body>
        <SmoothScroll />
        <Cursor />
        <Nav />
        {children}
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
