import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StarterKitGate from "@/components/StarterKitGate";

export const metadata: Metadata = {
  alternates: { canonical: "/resources/scorecard-template" },
  title: "Governance Scorecard Template — Procela",
  description:
    "A free, ready-to-use governance scorecard: a worked sample plus a blank template, built around five outcome measures leadership can trust and act on.",
};

const CONTENTS = [
  {
    name: "Sample scorecard (worked example)",
    body: "See what good looks like — five measures with example numbers, targets, trend, and a one-line “so what.”",
  },
  {
    name: "Your scorecard (blank)",
    body: "The same five measures, pre-listed with definitions, ready for you to fill in.",
  },
  {
    name: "R / A / G status built in",
    body: "A colour-coded status column so a miss is visible at a glance.",
  },
  {
    name: "An owner and a source per measure",
    body: "Columns that keep every number traceable — evidence, not opinion.",
  },
  {
    name: "A target and an action",
    body: "Each measure carries a threshold and the next step when it’s missed.",
  },
  {
    name: "The five design rules",
    body: "A one-page reminder of what keeps a scorecard credible, on the “Start here” tab.",
  },
];

export default function ScorecardTemplatePage() {
  return (
    <>
      <SiteHeader />

      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="hero-eyebrow">Free template</span>
          <h1>The Governance Scorecard Template</h1>
          <p>
            A practical Excel scorecard for governance leads — a worked sample
            plus a blank you can fill in, built around the five outcome measures
            leadership actually trusts and acts on.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">What&apos;s inside</span>
          <h2 className="section-title">One workbook, three tabs</h2>
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
          <span className="eyebrow">Get the template</span>
          <h2 className="section-title">Tell us where to send it</h2>
          <p className="section-body">
            Enter your details and the workbook downloads right away. We&apos;ll
            only use them to follow up about your governance program.
          </p>
          <StarterKitGate
            file="/downloads/procela-governance-scorecard-template.xlsx"
            resource="Governance Scorecard Template"
            submitLabel="Get the Scorecard Template"
            successBody="Thanks — your Governance Scorecard Template should download automatically. If it doesn't, use the button below."
            downloadLabel="Download the Scorecard Template (.xlsx)"
          />
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
