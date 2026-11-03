import { STACK_MARQUEE } from "@/data/site";

function Group() {
  return (
    <ul className="marquee-group">
      {STACK_MARQUEE.map((s, i) => (
        <li key={s} className="marquee-item">
          <span className="marquee-idx">{String(i + 1).padStart(2, "0")}</span>
          {s}
          <i aria-hidden="true">✦</i>
        </li>
      ))}
    </ul>
  );
}
export default function Marquee() {
  return (
    <section className="marquee" aria-label="Channels and tools">
      <div className="marquee-label">
        <span className="marquee-label-script">Channels</span>
        <span className="marquee-label-meta">I run</span>
      </div>
      <div className="marquee-viewport">
        <div className="marquee-track">
          <Group />
          <div aria-hidden="true"><Group /></div>
        </div>
      </div>
    </section>
  );
}
