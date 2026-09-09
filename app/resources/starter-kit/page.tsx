import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StarterKitGate from "@/components/StarterKitGate";

export const metadata: Metadata = {
  alternates: { canonical: "/resources/starter-kit" },
  title: "Data Governance Starter Kit — Procela",
  description:
    "A free Excel starter kit for companies beginning a data governance program: domain scoping, ownership and policy registers, a gap log, a 90-day plan, and a scorecard.",
};

const CONTENTS = [
  {
    name: "Domain scoping worksheet",
    body: "Scope one high-value domain and draw a hard boundary around it — the systems and data it touches.",
  },
  {
    name: "Ownership & stewardship register",
    body: "Put real names against real data: owner, steward, and backup for each area.",
  },
  {
    name: "Policy register",
    body: "A few policies you'll actually enforce — each tied to who enforces it and how you'd prove it.",
  },
  {
    name: "Gap log",
    body: "Track what isn't governed yet, ranked by severity and owner.",
  },
  {
    name: "90-day plan tracker",
    body: "A first-quarter shape, pre-filled with milestones you can adapt.",
  },
  {
    name: "Governance scorecard",
    body: "The five outcome measures worth reporting to leadership, ready to fill in.",
  },
];

export default function StarterKitPage() {
  return (
    <>
      <SiteHeader />

      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="hero-eyebrow">Free template</span>
          <h1>The Data Governance Starter Kit</h1>
          <p>
            A practical Excel workbook for teams beginning a governance program —
            the templates that turn the advice in our writing into something you
            can start using today.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">What&apos;s inside</span>
          <h2 className="section-title">Six templates, one workbook</h2>
          <div className="card-grid">
            {CONTENTS.map((c) => (
              <div className="card" key={c.name}>
                <h3>{c.name}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">Get the kit</span>
          <h2 className="section-title">Tell us where to send it</h2>
          <p className="section-body">
            Enter your details and the workbook downloads right away. We&apos;ll
            only use them to follow up about your governance program.
          </p>
          <StarterKitGate />
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
