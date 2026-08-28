import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaBand from "@/components/CtaBand";
import BrowserFrame from "@/components/BrowserFrame";

export const metadata: Metadata = {
  alternates: { canonical: "/how-it-works" },
  title: "How it works — Procela",
  description:
    "Procela's phased DG Foundation track stands up an audit-ready governance baseline in under 30 days: connect, classify, assign, govern, and audit.",
};

const STEPS = [
  {
    n: "01",
    title: "Connect",
    body: "Deploy the Procela edge connector inside your environment for on-prem databases — PostgreSQL, MySQL, SQL Server, Oracle — and dbt; connect cloud warehouses like Snowflake, BigQuery, Redshift, and Databricks directly. Either way, Procela reads only schema, table, and column metadata where the data lives. No data leaves your perimeter — only metadata flows to the platform.",
  },
  {
    n: "02",
    title: "Classify",
    body: "Reconcile discovered assets against your domains, and let Procela's AI agents propose classifications for anything unlabeled — routed for review before anything is applied.",
  },
  {
    n: "03",
    title: "Assign",
    body: "Map assets to data domains and assign owners, stewards, and agents. Procela suggests stewardship based on your org structure, so accountability is explicit from day one.",
  },
  {
    n: "04",
    title: "Govern",
    body: "Define policies in plain language. Procela records them as policies and controls against the assets they govern — access, retention, export controls — and tracks them in one place.",
  },
  {
    n: "05",
    title: "Audit",
    body: "Every classification, assignment, and policy change is captured in a tamper-evident log. Audit prep becomes a query, not a fire drill.",
  },
];

export default function HowItWorksPage() {
  return (
    <>
      <SiteHeader />

      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="hero-eyebrow">How it works</span>
          <h1>An audit-ready baseline in under 30 days</h1>
          <p>
            The DG Foundation track is phased and pragmatic — it starts with your
            highest-priority domains and closes the governance loop step by step.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">The DG Foundation track</span>
          <h2 className="section-title">Five steps to a running program</h2>
          <div className="steps">
            {STEPS.map((s) => (
              <div className="step" key={s.n}>
                <div className="step-num">{s.n}</div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">The closed loop</span>
          <h2 className="section-title">Governance that keeps pace</h2>
          <p className="section-body">
            Once the baseline is live, Procela keeps the loop moving: new assets are
            discovered and proposed for classification, stewardship is assigned, policies
            and controls are recorded, and the audit trail updates. AI-assisted suggestions
            surface the work; your team reviews and approves it instead of doing
            the busywork.
          </p>
        </div>
      </section>

      <hr className="divider" />

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">In the product</span>
          <h2 className="section-title">The program, running</h2>

          <div className="product-row">
            <div className="product-copy">
              <span className="product-kicker">Set up &amp; launch</span>
              <h3>One journey from empty org to running program</h3>
              <p>
                Procela walks the whole program through four stages — Capture, Assign,
                Govern, Operate — showing exactly what&apos;s done, what&apos;s derived
                automatically from your catalog, and the next actions to advance it.
              </p>
            </div>
            <BrowserFrame
              src="/screenshots/setup.webp"
              alt="Procela's Set up Procela journey showing four stages — Capture, Assign, Govern, and Operate — with per-stage progress and a prioritized list of next actions."
            />
          </div>

          <div className="product-row reverse">
            <div className="product-copy">
              <span className="product-kicker">Domains</span>
              <h3>Organize assets into governed domains</h3>
              <p>
                Group data assets under a single governance umbrella with assigned
                owners, stewards, and policies — the backbone of the classify and
                assign steps.
              </p>
            </div>
            <BrowserFrame
              src="/screenshots/domains.webp"
              alt="Procela data domains view with a domain list and a detail panel showing owner, stewards, and member data assets."
            />
          </div>

          <div className="product-row">
            <div className="product-copy">
              <span className="product-kicker">Organization</span>
              <h3>Model the org that governs the data</h3>
              <p>
                Map divisions, departments, and teams so ownership and stewardship
                land with the right people from the start.
              </p>
            </div>
            <BrowserFrame
              src="/screenshots/orgs.webp"
              alt="Procela organizations view showing an expanded hierarchy of divisions and departments with people counts."
            />
          </div>

          <div className="product-row reverse">
            <div className="product-copy">
              <span className="product-kicker">Council scorecard</span>
              <h3>Give the council one board to run on</h3>
              <p>
                Four measures — tier-1 coverage, classification, open issues, and
                exceptions — auto-derived from live data and rolled up from every
                division to the enterprise, so progress is visible, not anecdotal.
              </p>
            </div>
            <BrowserFrame
              src="/screenshots/council-scorecard.webp"
              alt="The Procela Governance Council Scorecard rolling four measures up from each division to the enterprise, with status badges and an auto-derived narrative."
            />
          </div>
        </div>
      </section>

      <CtaBand
        title="Map the first 30 days to your environment"
        body="We'll scope a phased rollout starting with your highest-priority data domains."
        secondaryLabel="Explore the platform"
        secondaryHref="/platform"
      />

      <SiteFooter />
    </>
  );
}
