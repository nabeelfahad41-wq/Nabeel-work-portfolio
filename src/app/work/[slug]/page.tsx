import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ShotFrame from "@/components/ShotFrame";
import { CAMPAIGNS, getCampaign } from "@/data/projects";

export function generateStaticParams() {
  return CAMPAIGNS.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const campaign = getCampaign(slug);
  if (!campaign) return {};
  return { title: `${campaign.client} — Nabeel`, description: campaign.summary };
}

export default async function CampaignPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = getCampaign(slug);
  if (!c) notFound();

  const idx = CAMPAIGNS.findIndex((x) => x.slug === slug);
  const next = CAMPAIGNS[(idx + 1) % CAMPAIGNS.length];
  const [hero, ...gallery] = c.shots;

  return (
    <main className="page" data-accent="green">
      <div className="wrap">
        <Link href="/work" className="link-arrow page-back">
          <span>←</span> Full portfolio
        </Link>

        <div className="sec-label">
          <span className="sec-num">{c.num}</span>
          <span className="sec-rule" />
          <span>{c.category}</span>
        </div>
        <h1 className="display page-title">{c.client}</h1>

        <dl className="page-meta">
          <div><dt className="meta dim">Headline</dt><dd>{c.headline.value} {c.headline.label.toLowerCase()}</dd></div>
          {c.meta.slice(0, 3).map((m) => (
            <div key={m.label}><dt className="meta dim">{m.label}</dt><dd>{m.value}</dd></div>
          ))}
        </dl>

        <div className="page-media">
          <ShotFrame shot={hero} bar={hero.caption.split(" · ")[0]} sizes="100vw" priority />
        </div>

        {gallery.length > 0 && (
          <div className="page-shots">
            {gallery.map((g) => (
              <figure key={g.caption}>
                <ShotFrame shot={g} bar={g.caption.split(" · ")[0]} sizes="(max-width: 767px) 100vw, 50vw" />
                <figcaption className="meta dim">{g.caption}</figcaption>
              </figure>
            ))}
          </div>
        )}

        <div className="page-body">
          <section className="page-row">
            <h2 className="meta acc-text">Numbers</h2>
            <dl className="page-metrics">
              {c.metrics.map((m) => (
                <div key={m.label}>
                  <dt className="stat-num">{m.value}</dt>
                  <dd className="meta">{m.label}</dd>
                </div>
              ))}
            </dl>
          </section>
          <section className="page-row">
            <h2 className="meta acc-text">Overview</h2>
            <p>{c.summary}</p>
          </section>
          <section className="page-row">
            <h2 className="meta acc-text">What I did</h2>
            <ul className="tl-impact">
              {c.did.map((d) => <li key={d}>{d}</li>)}
            </ul>
          </section>
          {c.recognition && (
            <section className="page-row">
              <h2 className="meta acc-text">Recognition</h2>
              <p>{c.recognition}</p>
            </section>
          )}
        </div>

        <Link href={`/work/${next.slug}`} className="page-next" data-cursor="Next">
          <span className="meta dim">Next campaign · {next.num}</span>
          <span className="display">{next.client} →</span>
        </Link>
      </div>
    </main>
  );
}
