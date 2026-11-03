import SectionHead from "./SectionHead";
import ShotFrame from "./ShotFrame";
import { Reveal } from "./motion/Reveal";
import { DASHBOARDS, RESULTS } from "@/data/projects";

const STRIP = [
  { value: "6.8x", label: "Return on ad spend for Design1Studio on Google and Meta" },
  { value: "5,079", label: "Meta conversations for Aaramgram at ₹13.56 each" },
  { value: "₹6.63", label: "Per conversation across 1,985 for Go2Wayanad" },
  { value: "35+", label: "Keywords on Google page 1 and 7,000+ new organic users for Trasccon" },
];

export default function Results() {
  return (
    <section id="results" className="section section-alt" data-accent="crimson">
      <div className="bg-word" aria-hidden="true">ROAS</div>
      <div className="wrap">
        <SectionHead
          num="02"
          label="Results"
          title={["Numbers I can", <span className="acc" key="a">show screenshots for.</span>]}
          aside={<p>Every figure below comes straight from the ad manager or Search Console.</p>}
        />

        <Reveal className="rs-strip">
          {STRIP.map((s) => (
            <div key={s.value}>
              <b>{s.value}</b>
              <span>{s.label}</span>
            </div>
          ))}
        </Reveal>

        <ol className="rs-ledger">
          {RESULTS.map((r, i) => (
            <Reveal className="rs-row" key={r.title} delay={i * 0.04}>
              <span className="rs-num">{r.value}</span>
              <p><strong>{r.title}</strong> {r.text}</p>
            </Reveal>
          ))}
        </ol>

        <div className="rs-dash">
          {DASHBOARDS.map((d, i) => (
            <Reveal key={d.caption} delay={i * 0.08}>
              <ShotFrame shot={d} bar={d.caption.split(" · ")[0]} sizes="(max-width: 1023px) 100vw, 33vw" />
              <p className="rs-dash-cap meta"><span className="acc-text">0{i + 1}</span> {d.caption}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
