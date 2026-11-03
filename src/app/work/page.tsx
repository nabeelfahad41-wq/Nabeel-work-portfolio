import type { Metadata } from "next";
import { CAMPAIGNS } from "@/data/projects";
import ProjectIndex from "@/components/ProjectIndex";

export const metadata: Metadata = {
  title: "Portfolio — Nabeel",
  description: "Every campaign Nabeel has run: strategy and results across Meta, Google, YouTube and SEO.",
};

export default function WorkPage() {
  return (
    <main className="page work-index" data-accent="crimson">
      <div className="wrap">
        <div className="work-meta">
          <span><b>IDX</b> Full portfolio</span>
          <span className="work-meta-rule" />
          <span>Meta · Google · SEO</span>
          <span>({String(CAMPAIGNS.length).padStart(2, "0")})</span>
        </div>

        <header className="pidx-head">
          <h1 className="display pidx-h1">Campaign Index</h1>
          <p className="pidx-script">every result, on record.</p>
          <p className="pidx-intro">
            Resorts, interior design, home decor, industrial B2B and film. Open any campaign for the
            strategy and results.
          </p>
        </header>

        <ProjectIndex campaigns={CAMPAIGNS} />
      </div>
    </main>
  );
}
