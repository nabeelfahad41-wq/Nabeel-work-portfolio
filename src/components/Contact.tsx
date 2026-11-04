import Link from "next/link";
import { LineReveal, Reveal } from "./motion/Reveal";
import Magnetic from "./motion/Magnetic";
import { SITE } from "@/data/site";

export default function Contact() {
  return (
    <section id="contact" className="section contact" data-accent="green">
      <div className="wrap">
        <Reveal className="sec-label">
          <span className="sec-num">08</span>
          <span className="sec-rule" />
          <span>Contact</span>
        </Reveal>

        <div className="contact-grid">
          <LineReveal
            className="display contact-title"
            lines={["Hiring for growth", <span key="l2">or <span className="acc">performance?</span></span>]}
          />

          <div className="contact-side">
            <Reveal className="contact-sub" delay={0.1}>
              <p className="lead">Open to Growth Marketing, Performance Marketing and Marketing Expert roles.</p>
            </Reveal>

            <Reveal className="contact-ctas" delay={0.2}>
              <Magnetic strength={0.35}>
                <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg" data-cursor="">
                  Message on WhatsApp <span className="arw">→</span>
                </a>
              </Magnetic>
              <Magnetic>
                <Link href="/work" className="btn btn-ghost" data-cursor="">
                  View portfolio <span className="arw">→</span>
                </Link>
              </Magnetic>
            </Reveal>
          </div>
        </div>

        <Reveal className="contact-links" delay={0.25}>
          <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer">
            <span className="meta dim">WhatsApp</span>
            {SITE.whatsappLabel}
          </a>
          <a href={SITE.linkedin} target="_blank" rel="noopener noreferrer">
            <span className="meta dim">LinkedIn</span>
            LinkedIn ↗
          </a>
          <div>
            <span className="meta dim">Location</span>
            {SITE.location}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
