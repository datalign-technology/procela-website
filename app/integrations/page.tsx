import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  alternates: { canonical: "/integrations" },
  title: "Integrations — Procela",
  description:
    "Metadata-only connectors for the data sources you already run — PostgreSQL, MySQL, SQL Server, Oracle, MongoDB, Snowflake, BigQuery, Redshift, Databricks, and dbt.",
};

const INTEGRATIONS = [
  {
    role: "Warehouse",
    name: "Snowflake",
    desc: "Scans schema, table, and column metadata to build a governed catalog — audit-only, no data moved.",
  },
  {
    role: "Lakehouse",
    name: "Databricks",
    desc: "Scans schema, table, and column metadata to build a governed catalog — audit-only, no data moved.",
  },
  {
    role: "Warehouse",
    name: "BigQuery",
    desc: "Scans schema, table, and column metadata to build a governed catalog — audit-only, no data moved.",
  },
  {
    role: "Warehouse",
    name: "Redshift",
    desc: "Scans schema, table, and column metadata to build a governed catalog — audit-only, no data moved.",
  },
  {
    role: "Database",
    name: "PostgreSQL",
    desc: "Scans schema, table, and column metadata to build a governed catalog — audit-only, no data moved.",
  },
  {
    role: "Database",
    name: "MySQL",
    desc: "Scans schema, table, and column metadata to build a governed catalog — audit-only, no data moved.",
  },
  {
    role: "Database",
    name: "SQL Server",
    desc: "Scans schema, table, and column metadata to build a governed catalog — audit-only, no data moved.",
  },
  {
    role: "Database",
    name: "Oracle",
    desc: "Scans schema, table, and column metadata to build a governed catalog — audit-only, no data moved.",
  },
  {
    role: "Database",
    name: "MongoDB",
    desc: "Scans collection and field metadata to build a governed catalog — audit-only, no data moved.",
  },
  {
    role: "Transformation",
    name: "dbt",
    desc: "Reads model, source, and lineage metadata from dbt and dbt Cloud to enrich the governed catalog — audit-only, no data moved.",
  },
];

export default function IntegrationsPage() {
  return (
    <>
      <SiteHeader />

      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="hero-eyebrow">Integrations</span>
          <h1>Metadata-only connectors for the data sources you run</h1>
          <p>
            Procela connects to the databases, warehouses, and transformation tools you
            already run — building a governed catalog from metadata alone, without ripping
            and replacing what&apos;s working.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">Connects to</span>
          <h2 className="section-title">Your data stays put. Only metadata flows to Procela.</h2>
          <p className="section-body">
            Your databases, warehouses, and transformation tools stay where they are.
            Procela sits alongside them — reading schema, table, and column metadata to
            build a single governed catalog, and complementing the sources you already run.
          </p>
          <div className="card-grid">
            {INTEGRATIONS.map((i) => (
              <div className="card" key={i.name}>
                <span className="card-kicker">{i.role}</span>
                <h3>{i.name}</h3>
                <p>{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">How it connects</span>
          <h2 className="section-title">An edge connector inside your perimeter</h2>
          <p className="section-body">
            For on-prem databases, the edge connector runs inside your VPC or data center
            and pairs to Procela with a one-time code — no inbound ports. It reads
            schema, table, and column metadata plus row counts — never values — and sends
            only that metadata over outbound HTTPS with a bearer token. Cloud warehouses
            connect directly, reading the same catalog metadata. No column values, no
            records, no file contents ever leave your perimeter. Procela runs on
            AWS (ECS/RDS) or fully on-prem via Helm and Kubernetes.
          </p>
        </div>
      </section>

      <CtaBand
        title="Connect Procela to your environment"
        body="Bring your sources — we'll show you how the edge connector builds a governed catalog from metadata alone."
        secondaryLabel="How it works"
        secondaryHref="/how-it-works"
      />

      <SiteFooter />
    </>
  );
}
