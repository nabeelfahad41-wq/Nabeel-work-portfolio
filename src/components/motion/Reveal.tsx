"use client";

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef, type ReactNode } from "react";

export const EASE = [0.16, 1, 0.3, 1] as const;

/** Fade-and-rise when the element scrolls into view. */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: reduced ? 0 : y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.8, delay, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}

/** Masked line-by-line text reveal for display headings. The heading (never clipped) triggers the reveal. */
export function LineReveal({
  lines,
  className,
  delay = 0,
  as: Tag = "h2",
  animateOnMount = false,
}: {
  lines: ReactNode[];
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "p" | "div";
  animateOnMount?: boolean;
}) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -10% 0px" });
  const show = animateOnMount || inView;
  const El = Tag as "h2";
  return (
    <El className={className} ref={ref as React.Ref<HTMLHeadingElement>}>
      {lines.map((line, i) => (
        <span className="line-mask" key={i}>
          <motion.span
            className="line-inner"
            initial={{ y: reduced ? "0%" : "105%" }}
            animate={{ y: show || reduced ? "0%" : "105%" }}
            transition={{ duration: 1, delay: delay + i * 0.09, ease: EASE }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </El>
  );
}
