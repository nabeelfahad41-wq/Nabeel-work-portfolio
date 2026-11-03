import type { Metadata } from "next";
import CaseList from "@/components/CaseList";
import Contact from "@/components/Contact";
import ShotFrame from "@/components/ShotFrame";
import { Reveal } from "@/components/motion/Reveal";
import {
  CAMPAIGNS,
  CAMPAIGN_STEPS,
  PORTFOLIO_STRIP,
  RESULTS_TABLE,
  WEBSITES,
} from "@/data/projects";

export const metadata: Metadata = {
  title: "Portfolio — Nabeel",
  description:
    "Case studies from Nabeel: Meta, Google and YouTube campaigns, SEO and social growth, with the numbers reported to each client.",
};

function Label({ num, text }: { num: string; text: string }) {
  return (
    <div className="sec-label">
      <span className="sec-num">{num}</span>
      <span className="sec-rule" />
      <span>{text}</span>
    </div>
  );
}

export default function WorkPage() {
  return (
    <>
      <main className="page work-index" data-accent="crimson">
        <div className="wrap">
          <div className="work-meta">
            <span><b>IDX</b> Portfolio · Case studies</span>
            <span className="work-meta-rule" />
            <span>Meta · Google · SEO · Social</span>
            <span>({String(CAMPAIGNS.length).padStart(2, "0")})</span>
          </div>

          <header className="pidx-head">
            <h1 className="display pidx-h1">Campaigns, rankings &amp; the numbers behind them.</h1>
            <p className="pidx-script">run end to end.</p>
            <p className="pidx-intro">
              Every project below was run by me end to end: strategy, setup, creative testing, budget
              control and reporting. Results are the figures I reported to each client.
            </p>
          </header>

          <div className="rs-strip pf-strip">
            {PORTFOLIO_STRIP.map((s) => (
              <div key={s.value}>
                <b>{s.value}</b>
                <span>{s.label}</span>
              </div>
            ))}
          </div>

          <section className="pf-section" id="cases">
            <Label num="01" text="Case studies" />
            <CaseList campaigns={CAMPAIGNS} />
          </section>

          <section className="pf-section" id="compare">
            <Label num="02" text="Results at a glance" />
            <h2 className="display pf-title">Results <span className="acc">at a glance.</span></h2>
            <Reveal className="pf-table-wrap">
              <table className="pf-table">
                <thead>
                  <tr><th>Client</th><th>Industry</th><th>Channel</th><th>Result</th><th>Cost</th></tr>
                </thead>
                <tbody>
                  {RESULTS_TABLE.map((r) => (
                    <tr key={r.client}>
                      <td>{r.client}</td>
                      <td>{r.industry}</td>
                      <td>{r.channel}</td>
                      <td className="n">{r.result}</td>
                      <td className="n">{r.cost}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Reveal>
          </section>

          <section className="pf-section" id="method">
            <Label num="03" text="Method" />
            <h2 className="display pf-title">How I run <span className="acc">a campaign.</span></h2>
            <ol className="pf-steps">
              {CAMPAIGN_STEPS.map((s, i) => (
                <Reveal key={s.num} delay={i * 0.08} className="pf-step">
                  <span className="step-num">{s.num}</span>
                  <h3 className="step-title">{s.title}</h3>
                  <p>{s.desc}</p>
                </Reveal>
              ))}
            </ol>
          </section>

          <section className="pf-section" id="builds">
            <Label num="04" text="Websites" />
            <h2 className="display pf-title">Websites built <span className="acc">to convert.</span></h2>
            <div className="pf-sites">
              {WEBSITES.map((w, i) => (
                <Reveal key={w.name} delay={i * 0.06} className="pf-site">
                  <ShotFrame shot={w.shot} bar={w.name.toLowerCase()} sizes="(max-width: 767px) 100vw, 45vw" />
                  <div className="pf-site-body">
                    <span className="meta dim">{w.sector}</span>
                    <h3 className="wcard-name">{w.name}</h3>
                    <p>{w.text}</p>
                    <ul className="wcard-stack">
                      {w.tags.map((t) => <li key={t}>{t}</li>)}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Contact />
    </>
  );
}
