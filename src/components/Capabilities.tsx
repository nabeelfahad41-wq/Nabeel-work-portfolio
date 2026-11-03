import SectionHead from "./SectionHead";
import { Reveal } from "./motion/Reveal";
import { SKILLS } from "@/data/site";
import { TECH_ICONS } from "./techIcons";

export default function Capabilities() {
  return (
    <section id="skills" className="section" data-accent="crimson">
      <div className="bg-word" aria-hidden="true">GROWTH</div>
      <div className="wrap">
        <SectionHead
          num="04"
          label="Skills"
          title={["What I", <span className="acc" key="a">work with.</span>]}
          aside={<p>Paid media, SEO and the tools behind them. Grouped by discipline, each with the clients where it delivered.</p>}
        />

        <div className="caps">
          {SKILLS.map((c, i) => (
            <Reveal className="cap" key={c.code} delay={i * 0.08}>
              <div className="cap-head">
                <span className="meta acc-text">{c.code}</span>
                <span className="cap-glyph" aria-hidden="true">{(["◧", "◨", "◩"][i]) ?? ""}</span>
              </div>
              <h3 className="cap-title">{c.title}</h3>
              <p className="cap-note">{c.note}</p>
              <ul className="cap-list">
                {c.items.map((it) => {
                  const Icon = TECH_ICONS[it];
                  return (
                    <li key={it}>
                      <span className="cap-icon" aria-hidden="true">{Icon && <Icon />}</span>
                      {it}
                    </li>
                  );
                })}
              </ul>
              <div className="cap-foot">
                <span className="meta dim">Delivered for</span>
                <span>{c.shipped}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
