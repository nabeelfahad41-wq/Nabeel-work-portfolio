"use client";

import Image from "next/image";
import Magnetic from "./motion/Magnetic";
import { SITE } from "@/data/site";

const ROW_A = ["Nabeel", "Performance Marketer"];
const ROW_B = ["Meta Ads", "Google Search", "SEO", "6.8x ROAS", "Lead Generation"];

/** Jagged torn-paper edge: paper fills the side the edge hangs from. Seeded so it renders the same every time. */
function tearPath(seed: number, from: "top" | "bottom") {
  let x = 0;
  let r = seed;
  const rand = () => ((r = (r * 9301 + 49297) % 233280) / 233280);
  const pts: string[] = [];
  while (x <= 1200) {
    pts.push(`${x.toFixed(0)},${(14 + rand() * 26).toFixed(1)}`);
    x += 10 + rand() * 26;
  }
  pts.push(`1200,${(14 + rand() * 26).toFixed(1)}`);
  return from === "top" ? `M0,0 L${pts.join(" L")} L1200,0 Z` : `M0,48 L${pts.join(" L")} L1200,48 Z`;
}

function Tear({ edge, seed }: { edge: "top" | "bottom"; seed: number }) {
  return (
    <svg className={`hero-tear hero-tear--${edge}`} viewBox="0 0 1200 48" preserveAspectRatio="none" aria-hidden="true">
      <path d={tearPath(seed, edge)} />
    </svg>
  );
}

function Row({ words, className }: { words: string[]; className: string }) {
  const group = (hidden: boolean) => (
    <span className="hero-row-group" aria-hidden={hidden || undefined}>
      {[...words, ...words].map((w, i) => (
        <span key={i}>
          {w}
          <i aria-hidden="true">✦</i>
        </span>
      ))}
    </span>
  );
  return (
    <div className={`hero-row ${className}`} aria-hidden="true">
      <div className="hero-row-track">
        {group(false)}
        {group(true)}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="hero" data-accent="green">
      <div className="wrap hero-top">
        <div className="hero-intro rise" style={{ animationDelay: "0.1s" }}>
          <p className="hero-hello">Hello, I&apos;m</p>
          <h1 className="display hero-title">
            Nabeel<span className="sr-only">, Performance Marketer</span>
          </h1>
        </div>
        <a href="#contact" className="hero-avail rise" style={{ animationDelay: "0.3s" }}>
          <span className="dot" aria-hidden="true" />
          Open to new roles
        </a>
      </div>

      <div className="hero-band">
        <Tear edge="top" seed={7} />
        <div className="hero-rows">
          <Row words={ROW_A} className="hero-row--a" />
          <Row words={ROW_B} className="hero-row--b" />
        </div>

        <div className="hero-person rise rise-lg" style={{ animationDelay: "0.3s" }}>
          <Image
            src="/nabeel-hero-sticker.png"
            alt="Portrait of Nabeel"
            fill
            priority
            quality={95}
            sizes="(max-width: 767px) 80vw, 40vw"
          />
        </div>

        <div className="hero-card hero-card--roas rise" style={{ animationDelay: "0.8s" }}>
          <b>6.8x</b>
          <span>Return on ad spend<br />Design1Studio</span>
        </div>
        <div className="hero-card hero-card--conv rise" style={{ animationDelay: "0.95s" }}>
          <b>5,079</b>
          <span>Meta conversations<br />at ₹13.56 each</span>
        </div>

        <Tear edge="bottom" seed={23} />
      </div>

      <div className="wrap hero-bottom">
        <dl className="hero-facts rise" style={{ animationDelay: "0.5s" }}>
          <div><dt>Role</dt><dd>{SITE.title}</dd></div>
          <div><dt>Company</dt><dd>{SITE.company} · {SITE.location}</dd></div>
        </dl>
        <p className="hero-bio rise" style={{ animationDelay: "0.6s" }}>
          I run paid media, SEO and conversion systems, and measure every one of them in leads and
          revenue.
        </p>
        <div className="hero-ctas rise" style={{ animationDelay: "0.7s" }}>
          <Magnetic>
            <a href="#results" className="btn btn-primary" data-cursor="">
              View results <span className="arw">↓</span>
            </a>
          </Magnetic>
          <Magnetic>
            <a href="#contact" className="btn btn-ghost" data-cursor="">
              Get in touch <span className="arw">→</span>
            </a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
