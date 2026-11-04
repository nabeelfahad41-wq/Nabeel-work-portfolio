import SectionHead from "./SectionHead";
import { Reveal } from "./motion/Reveal";
import { TESTIMONIALS } from "@/data/site";

/** Client testimonials. */
export default function CaseStudy() {
  return (
    <section id="clients" className="section section-alt" data-accent="green">
      <div className="wrap">
        <SectionHead
          compact
          num="08"
          label="Clients say"
          title={["Words from people", <span className="acc" key="a">I worked for.</span>]}
        />

        <div className="quotes">
          {TESTIMONIALS.map((t, i) => (
            <Reveal className="quote" key={t.from} delay={i * 0.1}>
              <span className="quote-mark" aria-hidden="true">“</span>
              <blockquote>{t.quote}</blockquote>
              <p className="quote-from meta"><i />{t.from}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
