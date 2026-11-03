import type { ReactNode } from "react";
import { LineReveal, Reveal } from "./motion/Reveal";

export default function SectionHead({
  num,
  label,
  title,
  aside,
  compact = false,
}: {
  num: string;
  label: string;
  title: ReactNode[];
  aside?: ReactNode;
  compact?: boolean;
}) {
  return (
    <div className={`sec-head${compact ? " sec-head--compact" : ""}`}>
      <Reveal className="sec-label">
        <span className="sec-num">{num}</span>
        <span className="sec-rule" />
        <span>{label}</span>
      </Reveal>
      <LineReveal className="display sec-title" lines={title} />
      {aside && <Reveal className="sec-aside" delay={0.2}>{aside}</Reveal>}
    </div>
  );
}
