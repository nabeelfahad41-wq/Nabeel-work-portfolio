"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef, type ReactNode } from "react";

/** Shifts its content vertically against the scroll direction. Wrapper should clip overflow. */
export default function Parallax({
  children,
  amount = 60,
  className,
}: {
  children: ReactNode;
  amount?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-amount, amount]);
  return (
    <div ref={ref} className={className}>
      <motion.div className="parallax-inner" style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}
