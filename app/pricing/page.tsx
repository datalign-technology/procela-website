import type { Metadata } from "next";
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
    body: "Everything in Professional, plus on-premise or air-gapped deployment via Helm and Kubernetes, unlimited organizations and domains, advanced compliance evidence, premium support with an SLA, and hands-on program stand-up. For defense, financial services, healthcare, and critical infrastructure.",
  },
];

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
        body="Every environment is different — deployment, scale, and compliance needs shape the plan. Tell us about yours and we'll prepare a tailored quote."
        primaryLabel="Request a quote"
        secondaryLabel="Explore the platform"
        secondaryHref="/platform"
      />

      <SiteFooter />
    </>
  );
}
