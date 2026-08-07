import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Documentation — Procela",
  description:
    "An overview of Procela's product documentation: deployment, integrations, principals and roles, policies, and auditing. Full docs available on request.",
};

const AREAS = [
  {
    kicker: "Getting started",
    title: "Concepts & first program",
    body: "Core concepts — domains, principals, policies, and the closed governance loop — and how to stand up a first program.",
  },
  {
    kicker: "Deployment",
    title: "The edge connector",
    body: "How the connector deploys via Kubernetes or Helm, the no-egress model, outbound-HTTPS authentication, and metadata-only scanning.",
  },
  {
    kicker: "Integrations",
    title: "Connecting your data sources",
    body: "Connecting databases and warehouses such as PostgreSQL, SQL Server, Oracle, Snowflake, BigQuery, Redshift, and Databricks, plus dbt.",
  },
  {
    kicker: "Roles",
    title: "Principals & authority",
    body: "Modeling human and AI principals, defining scope of authority, and the review-gated model for how they share governance work.",
  },
  {
    kicker: "Policy",
    title: "Policies & controls",
    body: "Recording governance policies and controls against the assets they govern, and tracking them with a full audit trail.",
  },
  {
    kicker: "Compliance",
    title: "Auditing & lineage",
    body: "Working with the tamper-evident audit trail, asset lineage, and generating audit-ready reporting.",
  },
];

export default function DocsPage() {
  return (
    <>
      <SiteHeader />

      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="hero-eyebrow">Documentation</span>
          <h1>Product documentation</h1>
          <p>
            Reference for deploying, connecting, and operating Procela. Here&apos;s how
            the documentation is organized — full docs are available to customers and
            evaluation teams.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">Documentation areas</span>
          <h2 className="section-title">What the docs cover</h2>
          <div className="card-grid">
            {AREAS.map((a) => (
              <div className="card" key={a.title}>
                <span className="card-kicker">{a.kicker}</span>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Request access to the full documentation"
        body="Detailed guides and API reference are available to customers and teams in evaluation. Tell us about your environment and we'll get you set up."
        primaryLabel="Request access"
        secondaryLabel="Explore the platform"
        secondaryHref="/platform"
      />

      <SiteFooter />
    </>
  );
}
