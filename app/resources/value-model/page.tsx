import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StarterKitGate from "@/components/StarterKitGate";

export const metadata: Metadata = {
  alternates: { canonical: "/resources/value-model" },
  title: "Governance Value Model Worksheet — Procela",
  description:
    "A free worksheet for putting a defensible number on your data governance program: un-fakeable signals, translated into risk reduced, cost and time saved, and decisions enabled — priced with a model your finance team helped build.",
};

const CONTENTS = [
  {
    name: "A worked example",
    body: "The model filled in with illustrative numbers — signals, assumptions, and a total you can read top to bottom.",
  },
  {
    name: "A blank you can fill in",
    body: "The same layout with the formulas ready; replace the amber cells with your own numbers.",
  },
  {
    name: "Unit economics, agreed with Finance",
    body: "Loaded hourly cost, the cost of a reportable incident, and the value of a day saved — the inputs that make the total defensible.",
  },
  {
    name: "Signals from your catalog",
    body: "Classification of sensitive data and owner coverage, captured as a baseline and re-read each quarter.",
  },
  {
    name: "The three value stories",
    body: "Risk reduced, cost and time saved, and decisions enabled — each computed from a signal times a value you set.",
  },
  {
    name: "A live total that traces to its inputs",
    body: "Change an assumption and the total updates. No invented figures — every number points back to a cell you own.",
  },
];

export default function ValueModelPage() {
  return (
    <>
      <SiteHeader />

      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="hero-eyebrow">Free template</span>
          <h1>The Governance Value Model Worksheet</h1>
          <p>
            A practical Excel worksheet for putting a defensible number on your
            data governance program — un-fakeable signals, translated into risk
            reduced, cost and time saved, and decisions enabled, and priced with a
            model your finance team helped build. No invented ROI figure.
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
          <span className="eyebrow">Get the worksheet</span>
          <h2 className="section-title">Tell us where to send it</h2>
          <p className="section-body">
            Enter your details and the workbook downloads right away. We&apos;ll
            only use them to follow up about your governance program.
          </p>
          <StarterKitGate
            file="/downloads/procela-governance-value-model.xlsx"
            intent="value-model"
            resource="Governance Value Model Worksheet"
            submitLabel="Get the Value Model Worksheet"
            successBody="Thanks — your Governance Value Model Worksheet should download automatically. If it doesn't, use the button below."
            downloadLabel="Download the Value Model Worksheet (.xlsx)"
          />
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
