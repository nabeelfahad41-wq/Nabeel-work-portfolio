"use client";

import Link from "next/link";
import { useState } from "react";
import type { Campaign } from "@/data/projects";

export default function ProjectIndex({ campaigns }: { campaigns: Campaign[] }) {
  const [active, setActive] = useState(0);

  return (
    <div className="pidx">
      <ol className="pidx-list">
        {campaigns.map((c, i) => (
          <li key={c.slug}>
            <Link
              href={`/work/${c.slug}`}
              className={`pidx-row${i === active ? " is-active" : ""}`}
              onMouseEnter={() => setActive(i)}
              onFocus={() => setActive(i)}
              data-cursor="View"
            >
              <span className="pidx-num">{c.num}</span>
              <span className="pidx-main">
                <span className="pidx-title">{c.client}</span>
                <span className="pidx-cat">{c.category} · {c.platform}</span>
              </span>
              <span className="pidx-year">
                <b>{c.headline.value}</b> {c.headline.label}
              </span>
              <span className="pidx-arrow" aria-hidden="true">→</span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
