"use client";

import Link from "next/link";
import { useState } from "react";
import ShotFrame from "./ShotFrame";
import { KIND_LABEL, type Campaign, type CampaignKind } from "@/data/projects";

const FILTERS: ("all" | CampaignKind)[] = ["all", "paid", "seo", "social"];

/** Filterable list of full case studies for the portfolio page. */
export default function CaseList({ campaigns }: { campaigns: Campaign[] }) {
  const [filter, setFilter] = useState<"all" | CampaignKind>("all");
  const shown = campaigns.filter((c) => filter === "all" || c.kind === filter);

  return (
    <>
      <div className="pf-filters" role="group" aria-label="Filter case studies">
        {FILTERS.map((f) => {
          const count = f === "all" ? campaigns.length : campaigns.filter((c) => c.kind === f).length;
          return (
            <button key={f} type="button" aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {f === "all" ? "All" : KIND_LABEL[f]} <span>{String(count).padStart(2, "0")}</span>
            </button>
          );
        })}
      </div>

      <div className="pf-cases">
        {shown.map((c) => (
          <article className="pf-case" id={c.slug} key={c.slug}>
            <header className="pf-case-head">
              <div>
                <div className="wcard-meta">
                  <span className="wcard-num">{c.num}</span>
                  <span>{c.tag}</span>
                </div>
                <h2 className="display pf-case-name">{c.client}</h2>
                <p className="pf-case-sub">{c.sub}</p>
              </div>
              <div className="pf-case-num">
                <b>{c.headline.value}</b>
                <span className="meta">{c.headline.label}</span>
              </div>
            </header>

            <div className="pf-case-body">
              <dl className="pf-meta">
                {c.meta.map((m) => (
                  <div key={m.label}>
                    <dt className="meta dim">{m.label}</dt>
                    <dd>{m.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="pf-story">
                <p className="pf-summary">{c.summary}</p>

                <h3 className="meta acc-text">What I did</h3>
                <ul className="tl-impact">
                  {c.did.map((d) => <li key={d}>{d}</li>)}
                </ul>

                <dl className="pf-result">
                  {c.metrics.map((m) => (
                    <div key={m.label}>
                      <dt>{m.value}</dt>
                      <dd className="meta dim">{m.label}</dd>
                    </div>
                  ))}
                </dl>

                {c.recognition && (
                  <p className="pf-recog"><span className="meta acc-text">Recognition</span>{c.recognition}</p>
                )}

                <div className={`pf-shots${c.shots.length % 2 ? " is-odd" : ""}`}>
                  {c.shots.map((s) => (
                    <figure key={s.caption}>
                      {s.src ? (
                        <a href={s.src} target="_blank" rel="noopener noreferrer" data-cursor="Open">
                          <ShotFrame shot={s} bar={s.caption.split(" · ")[0]} sizes="(max-width: 1023px) 100vw, 60vw" />
                        </a>
                      ) : (
                        <ShotFrame shot={s} bar={s.caption.split(" · ")[0]} sizes="(max-width: 767px) 100vw, 30vw" />
                      )}
                      <figcaption className="meta dim">{s.caption}</figcaption>
                    </figure>
                  ))}
                </div>

                <Link href={`/work/${c.slug}`} className="link-arrow" data-cursor="">
                  Open case study <span>→</span>
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </>
  );
}
