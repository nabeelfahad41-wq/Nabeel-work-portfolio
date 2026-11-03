import Link from "next/link";
import { LineReveal, Reveal } from "./motion/Reveal";
import ShotFrame from "./ShotFrame";
import { CAMPAIGNS, FEATURED_CAMPAIGNS } from "@/data/projects";

export default function Projects() {
  return (
    <section id="work" className="section work" data-accent="crimson">
      <div className="wrap">
        <Reveal className="work-meta">
          <span><b>03</b> Selected campaigns</span>
          <span className="work-meta-rule" />
          <span>Meta · Google · SEO</span>
          <span>({String(FEATURED_CAMPAIGNS.length).padStart(2, "0")})</span>
        </Reveal>

        <div className="work-head">
          <LineReveal className="display work-title" lines={["Selected Work"]} />
          <Reveal className="work-script" delay={0.3}>
            <span>measured in leads.</span>
          </Reveal>
          <Reveal className="work-intro" delay={0.2}>
            <p>
              My best campaigns, each judged by leads and revenue, not reach. The rest are in the
              full portfolio.
            </p>
          </Reveal>
        </div>

        <div className="wcards">
          {FEATURED_CAMPAIGNS.map((c) => (
            <article className="wcard" key={c.slug}>
              <Reveal className="wcard-info">
                <div className="wcard-meta">
                  <span className="wcard-num">{c.num}</span>
                  <span>{c.category}</span>
                </div>

                <h3 className="wcard-name">{c.client}</h3>
                <p className="wcard-problem">{c.summary}</p>

                <dl className="wcard-impact">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <dt>{m.value}</dt>
                      <dd>{m.label}</dd>
                    </div>
                  ))}
                </dl>

                <ul className="wcard-stack">
                  {c.platform.split(", ").map((s) => <li key={s}>{s}</li>)}
                </ul>

                <div className="wcard-links">
                  <Link href={`/work/${c.slug}`} className="pill pill-dark" data-cursor="">
                    Strategy & results <span>→</span>
                  </Link>
                </div>
              </Reveal>

              <Reveal className="wcard-media-wrap" delay={0.1}>
                <Link href={`/work/${c.slug}`} className="wcard-media" data-cursor="View">
                  <ShotFrame shot={c.shots[0]} bar={c.shots[0].caption.split(" · ")[0]} />
                </Link>
                <div className="wcard-caption">
                  <span className="wcard-status"><i />{c.platform}</span>
                  <span>{c.client}</span>
                </div>
              </Reveal>
            </article>
          ))}
        </div>

        <Reveal className="work-foot">
          <p>
            Also managed: Lead Workz (288 website development leads at ₹82.18 each) and RCANE Pictures
            (YouTube, Demand Gen and Meta campaigns for film promotion). Full strategy and results for
            every project are on the portfolio page.
          </p>
          <Link href="/work" className="pill pill-dark pill-lg" data-cursor="">
            Full portfolio ({String(CAMPAIGNS.length).padStart(2, "0")}) <span>→</span>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
