"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import SectionHead from "./SectionHead";
import { Reveal } from "./motion/Reveal";
import { EXPERIENCE } from "@/data/experience";

export default function Experience() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 60%"] });
  const scaleY = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="experience" className="section" data-accent="green">
      <div className="wrap">
        <SectionHead
          num="05"
          label="Experience"
          title={["SEO intern to", <span className="acc" key="a">head of performance.</span>]}
          aside={<p>Started in SEO, moved into owning a company&apos;s whole digital function, and now lead performance marketing.</p>}
        />

        <div className="timeline" ref={ref}>
          <div className="timeline-rail" aria-hidden="true">
            <motion.div className="timeline-fill" style={{ scaleY }} />
          </div>
          <ol>
          {EXPERIENCE.map((e, i) => (
            <li className="tl-item" key={e.company}>
              <Reveal className="tl-marker" delay={0.05}>
                <span>{e.num}</span>
              </Reveal>
              <Reveal className="tl-when" delay={0.1}>
                <span className="meta">{e.range}</span>
                {e.current && <span className="now"><i />Current</span>}
              </Reveal>
              <Reveal className="tl-body" delay={0.15}>
                <h3 className="tl-company">{e.company}</h3>
                <p className="tl-role">{e.role}</p>
                <ul className="tl-impact">
                  {e.impact.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <ul className="chips small">
                  {e.stack.map((s) => <li key={s}>{s}</li>)}
                </ul>
              </Reveal>
              {i === 0 && <span className="tl-annot hide-sm" aria-hidden="true">↳ now</span>}
            </li>
          ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
