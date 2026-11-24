import type { Metadata } from "next";
import { Fragment } from "react";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaBand from "@/components/CtaBand";
import Icon, { type IconName } from "@/components/Icon";

export const metadata: Metadata = {
  alternates: { canonical: "/pricing" },
  title: "Pricing — Procela",
  description:
    "Procela is priced by the scope you govern and how you deploy — cloud, on-premise, or air-gapped — not per seat. Request a tailored quote.",
};

const EDITIONS: { kicker: string; title: string; body: string }[] = [
  {
    kicker: "Foundation",
    title: "Stand up your first program",
    body: "Everything to reach an audit-ready baseline on your highest-priority domain — the business-process catalog, process-to-data mapping, data domains, ownership and RACI, the governance council scorecard, and gap detection. Runs in the cloud with single sign-on.",
  },
  {
    kicker: "Professional",
    title: "Run governance across the enterprise",
    body: "Adds AI-assisted classification and stewardship suggestions, the full governance program and decision rights, executive reporting and the council scorecard over time, business glossary and lineage — across multiple domains and organizations, with SAML SSO and SCIM provisioning.",
  },
  {
    kicker: "Enterprise · Regulated",
    title: "Built for the most restricted environments",
    body: "Everything in Professional, plus on-premise or air-gapped deployment via Helm and Kubernetes, unlimited organizations and domains, advanced compliance evidence, premium support with an SLA, and hands-on program stand-up. For financial services, healthcare, government, and critical infrastructure.",
  },
];

// The three editions as comparison columns, in order.
const COMPARE_COLUMNS: { name: string; tagline: string }[] = [
  { name: "Foundation", tagline: "Stand up your first program" },
  { name: "Professional", tagline: "Run governance enterprise-wide" },
  { name: "Enterprise · Regulated", tagline: "For the most restricted environments" },
];

// A cell is a check (true), a dash (false), or a short text value.
type Cell = boolean | string;
const COMPARE: { group: string; rows: { label: string; hint?: string; cells: [Cell, Cell, Cell] }[] }[] = [
  {
    group: "Scope & scale",
    rows: [
      { label: "Data domains in scope", cells: ["Single priority domain", "Multiple domains", "Unlimited"] },
      { label: "Organizations / business units", cells: ["One", "Multiple", "Unlimited"] },
      { label: "Viewers", hint: "Read access across your team", cells: ["Unlimited", "Unlimited", "Unlimited"] },
    ],
  },
  {
    group: "Core governance",
    rows: [
      { label: "Business-process catalog", cells: [true, true, true] },
      { label: "Process-to-data mapping", cells: [true, true, true] },
      { label: "Data domains, ownership & RACI", cells: [true, true, true] },
      { label: "Governance council scorecard", cells: [true, true, true] },
      { label: "Gap detection", cells: [true, true, true] },
    ],
  },
  {
    group: "Program depth",
    rows: [
      { label: "AI-assisted classification & stewardship", cells: [false, true, true] },
      { label: "Full governance program & decision rights", cells: [false, true, true] },
      { label: "Business glossary", cells: [false, true, true] },
      { label: "Data lineage", cells: [false, true, true] },
      { label: "Executive reporting & scorecard history", cells: [false, true, true] },
    ],
  },
  {
    group: "Deployment",
    rows: [
      { label: "Cloud (AWS)", cells: [true, true, true] },
      { label: "On-premise (Helm / Kubernetes)", cells: [false, false, true] },
      { label: "Air-gapped", cells: [false, false, true] },
    ],
  },
  {
    group: "Identity & provisioning",
    rows: [
      { label: "Single sign-on (SSO)", cells: [true, true, true] },
      { label: "SAML SSO & SCIM provisioning", cells: [false, true, true] },
    ],
  },
  {
    group: "Compliance & support",
    rows: [
      { label: "Advanced compliance evidence", cells: [false, false, true] },
      { label: "Premium support with SLA", cells: [false, false, true] },
      { label: "Hands-on program stand-up", cells: [false, false, true] },
    ],
  },
];

function CompareCell({ value }: { value: Cell }) {
  if (value === true) {
    return (
      <span className="yes" role="img" aria-label="Included">
        <Icon name="check" size={18} />
      </span>
    );
  }
  if (value === false) {
    return (
      <span className="no" role="img" aria-label="Not included">
        —
      </span>
    );
  }
  return <>{value}</>;
}

const MECHANICS: { icon: IconName; kicker: string; title: string; body: string }[] = [
  {
    icon: "layers",
    kicker: "Scope, not seats",
    title: "You're not billed per viewer",
    body: "Procela is licensed by the breadth of what you govern — the systems and data assets in scope and the business units you cover. Viewers are unlimited, so your whole team can use the catalog without a per-seat penalty.",
  },
  {
    icon: "edge",
    kicker: "Deployment",
    title: "Cloud, on-premise, or air-gapped",
    body: "Run Procela in the cloud on AWS, on-premise via Helm and Kubernetes, or fully air-gapped for the most restricted environments. How you deploy is part of how a plan is scoped.",
  },
  {
    icon: "orchestration",
    kicker: "AI usage",
    title: "Metered, governed, and reviewed",
    body: "AI-assisted suggestions come with an allowance on each plan, and per-organization budgets keep spend under control. A human always reviews before anything is applied.",
  },
  {
    icon: "integration",
    kicker: "Land and expand",
    title: "Start with one domain, grow from there",
    body: "Begin with the 30-day DG Foundation program on a single domain, then add organizations and domains as the program matures. Your license grows with your governed estate.",
  },
];

export default function PricingPage() {
  return (
    <>
      <SiteHeader />

      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="hero-eyebrow">Pricing</span>
          <h1>Priced to the scope you govern</h1>
          <p>
            Procela is licensed by the breadth of your governed estate and how you
            deploy — not per seat, so your whole team can use the catalog. Start with one
            domain and expand across the enterprise. Tell us about your environment and
            we&apos;ll put together a quote.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">Editions</span>
          <h2 className="section-title">Three ways to run Procela</h2>
          <div className="card-grid">
            {EDITIONS.map((e) => (
              <div className="card" key={e.kicker}>
                <span className="card-kicker">{e.kicker}</span>
                <h3>{e.title}</h3>
                <p>{e.body}</p>
                <Link className="card-link" href="/demo">
                  Request a quote →
                </Link>
              </div>
            ))}
          </div>
          <div className="kit-callout">
            <div className="kit-text">
              <span className="kit-eyebrow">Free evaluation</span>
              <p>
                Want to try it yourself first? Run the whole platform locally from
                pre-built images — no quote, no sales call. Create an account and
                download the evaluation build.
              </p>
            </div>
            <Link className="btn-green" href="/download">
              Evaluate for free →
            </Link>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">Compare editions</span>
          <h2 className="section-title">What&apos;s included at each level</h2>
          <div className="compare-wrap">
            <table className="compare">
              <thead>
                <tr>
                  <th scope="col" className="compare-corner">
                    Capabilities
                  </th>
                  {COMPARE_COLUMNS.map((c) => (
                    <th scope="col" key={c.name}>
                      {c.name}
                      <span>{c.tagline}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((group) => (
                  <Fragment key={group.group}>
                    <tr className="compare-group">
                      <th scope="colgroup" colSpan={4}>
                        {group.group}
                      </th>
                    </tr>
                    {group.rows.map((row) => (
                      <tr key={row.label}>
                        <th scope="row" className="feat">
                          {row.label}
                          {row.hint && <span className="feat-hint">{row.hint}</span>}
                        </th>
                        {row.cells.map((cell, i) => (
                          <td key={COMPARE_COLUMNS[i].name}>
                            <CompareCell value={cell} />
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <th scope="row" className="compare-corner" aria-hidden="true" />
                  {COMPARE_COLUMNS.map((c) => (
                    <td key={c.name}>
                      <Link className="compare-cta" href="/demo">
                        Request a quote →
                      </Link>
                    </td>
                  ))}
                </tr>
              </tfoot>
            </table>
          </div>
          <p className="compare-note">
            Each edition includes everything in the one before it. Not sure which fits?
            Start free with the{" "}
            <Link href="/download">evaluation build</Link> or{" "}
            <Link href="/demo">tell us about your environment</Link> and we&apos;ll
            recommend a scope.
          </p>
        </div>
      </section>

      <hr className="divider" />

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">How pricing works</span>
          <h2 className="section-title">Aligned to value, not headcount</h2>
          <div className="feature-list">
            {MECHANICS.map((m) => (
              <div className="feature-row" key={m.kicker}>
                <div>
                  <div className="feature-icon">
                    <Icon name={m.icon} size={22} />
                  </div>
                  <div className="feature-kicker">{m.kicker}</div>
                </div>
                <div>
                  <h3>{m.title}</h3>
                  <p>{m.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's scope Procela to your environment"
        body="Every environment is different — deployment, scale, and compliance needs shape the plan. Start with a pilot on one domain, or tell us about yours and we'll prepare a tailored quote."
        primaryLabel="Request a quote"
        secondaryLabel="Start a pilot"
        secondaryHref="/pilot"
      />

      <SiteFooter />
    </>
  );
}
