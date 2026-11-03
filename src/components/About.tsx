import Image from "next/image";
import { Reveal } from "./motion/Reveal";
import Parallax from "./motion/Parallax";
import Counter from "./motion/Counter";

const CHAPTERS = [
  {
    num: "I",
    title: "SEO roots",
    when: "Nearlearn · 2024",
    text: "Off-page SEO, backlink outreach and keyword research in SEMrush, Ahrefs and Search Console.",
  },
  {
    num: "II",
    title: "Owning digital",
    when: "Trasccon · 2025",
    text: "Ran a company's whole digital function on my own, working directly with leadership. Page 1 rankings and a Badge of Honor.",
  },
  {
    num: "III",
    title: "Leading performance",
    when: "Lead Workz · 2026",
    text: "Head of performance marketing for an agency: paid media, creative testing and lead acquisition cost across industries.",
  },
];

const STATS = [
  { to: 6.8, decimals: 1, suffix: "x", label: "Return on ad spend" },
  { to: 5079, suffix: "", label: "Meta conversations" },
  { to: 35, suffix: "+", label: "Keywords on page 1" },
  { to: 7000, suffix: "+", label: "New organic users" },
];

export default function About() {
  return (
    <section id="about" className="section ab" data-accent="crimson">
      <div className="wrap">
        <Reveal className="work-meta">
          <span><b>06</b> About</span>
          <span className="work-meta-rule" />
          <span>Nabeel</span>
        </Reveal>

        <div className="ab-top">
          <Reveal className="ab-portrait" y={40}>
            <Parallax className="ab-photo" amount={24}>
              <Image src="/nabeel-about.jpg" alt="Nabeel" fill quality={95} sizes="(max-width: 1023px) 100vw, 42vw" />
            </Parallax>
            <div className="ab-caption">
              <span>Nabeel</span>
              <span>Performance Marketer</span>
            </div>
          </Reveal>

          <div className="ab-intro">
            <Reveal>
              <p className="ab-hello">Hi, I&apos;m Nabeel —</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="ab-statement">
                strategy, execution and reporting from <em>one person</em>. I build a system,{" "}
                <em>measure it</em>, keep what works and <em>cut what doesn&apos;t</em>.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="ab-body">
                My MBA in Business Analytics and Marketing gave me the habit of tying every campaign
                to a number the business cares about. I work across paid media, SEO, websites and
                social, and I judge all of it by leads and revenue, not reach.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <dl className="ab-facts">
                <div><dt>Role</dt><dd>Head of Performance Marketing, Lead Workz</dd></div>
                <div><dt>Looking for</dt><dd>Growth · Performance · Marketing Expert</dd></div>
                <div><dt>Channels</dt><dd>Meta Ads · SEO · LinkedIn · CRO</dd></div>
                <div><dt>Based in</dt><dd>Bangalore, with Kerala roots and Malayalam-language campaign experience</dd></div>
                <div><dt>Status</dt><dd><i />Open to new roles</dd></div>
              </dl>
            </Reveal>
          </div>
        </div>

        <ol className="ab-chapters">
          {CHAPTERS.map((c, i) => (
            <Reveal className="ab-chapter" key={c.num} delay={i * 0.08}>
              <div className="ab-chapter-head">
                <span className="ab-chapter-num">{c.num}</span>
                <span className="ab-chapter-when">{c.when}</span>
              </div>
              <h3>{c.title}</h3>
              <p>{c.text}</p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="ab-stats">
          {STATS.map((s) => (
            <div className="ab-stat" key={s.label}>
              <b><Counter to={s.to} decimals={s.decimals} suffix={s.suffix} /></b>
              <span>{s.label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
