"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import Magnetic from "./motion/Magnetic";
import { SITE } from "@/data/site";

export default function Hero() {
  const reduced = useReducedMotion();
  const { scrollY } = useScroll();
  const wordY = useTransform(scrollY, [0, 800], reduced ? [0, 0] : [0, 120]);
  const portraitY = useTransform(scrollY, [0, 800], reduced ? [0, 0] : [0, 60]);

  return (
    <section id="hero" className="hero" data-accent="crimson">
      <div className="hero-orb" aria-hidden="true" />

      <div className="wrap hero-top">
        <p className="hero-hello rise" style={{ animationDelay: "0.1s" }}>Hello, I&apos;m</p>
        <a href="#contact" className="hero-top-avail rise" style={{ animationDelay: "0.15s" }}>
          Open to new roles <i aria-hidden="true">✦</i>
        </a>
      </div>

      <motion.div className="hero-word" aria-hidden="true" style={{ y: wordY }}>
        <div className="hero-word-stack">
          <span className="rise rise-lg" style={{ animationDelay: "0.2s" }}>Nabeel</span>
          <span className="hero-word-sub rise rise-lg" style={{ animationDelay: "0.35s" }}></span>
          <span className="hero-word-role rise" style={{ animationDelay: "0.5s" }}>Performance Marketer</span>
        </div>
      </motion.div>

      <div className="wrap hero-stage">
        <motion.div className="hero-portrait" style={{ y: portraitY }}>
          <div className="hero-portrait-inner rise rise-lg" style={{ animationDelay: "0.45s" }}>
            <Image
              src="/nabeel-hero-studio.png"
              alt="Portrait of Nabeel"
              fill
              priority
              quality={95}
              sizes="(max-width: 767px) 90vw, 46vw"
            />
          </div>
        </motion.div>

        <div className="hero-left">
          <h1 className="display hero-h1 rise" style={{ animationDelay: "0.8s" }}>
            <span className="sr-only">Nabeel, </span>
            <span className="sr-only">Performance Marketer</span>
          </h1>
          <p className="hero-bio rise" style={{ animationDelay: "0.95s" }}>
            {SITE.title} at {SITE.company}. I run paid media, SEO and conversion systems, and measure
            every one of them in leads and revenue.
          </p>
          <div className="hero-exp rise" style={{ animationDelay: "1.05s" }}>
            <b>6.8x</b>
            <span>Return on<br />ad spend</span>
          </div>
          <div className="hero-ctas rise" style={{ animationDelay: "1.15s" }}>
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

      </div>

    </section>
  );
}
