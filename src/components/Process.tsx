"use client";

import { motion, useReducedMotion } from "framer-motion";
import SectionHead from "./SectionHead";
import { EASE } from "./motion/Reveal";
import { PROCESS } from "@/data/site";

export default function Process() {
  const reduced = useReducedMotion();
  return (
    <section id="process" className="section section-green" data-accent="green">
      <div className="wrap">
        <SectionHead
          num="07"
          label="How I run campaigns"
          title={["Build it, measure it,", <span className="acc" key="a">keep what works.</span>]}
        />

        <div className="process">
          <motion.div
            className="process-line"
            aria-hidden="true"
            initial={{ scale: reduced ? 1 : 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, margin: "0px 0px -20% 0px" }}
            transition={{ duration: 1.6, ease: EASE }}
          />
          <ol>
          {PROCESS.map((s, i) => (
            <motion.li
              className="step"
              key={s.num}
              initial={{ opacity: 0, y: reduced ? 0 : 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -15% 0px" }}
              transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease: EASE }}
            >
              <span className="step-node" aria-hidden="true" />
              <span className="step-num">{s.num}</span>
              <h3 className="step-title">{s.title}</h3>
              <p>{s.desc}</p>
            </motion.li>
          ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
