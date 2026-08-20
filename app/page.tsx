import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import BrowserFrame from "@/components/BrowserFrame";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import PlatformTabs from "@/components/PlatformTabs";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import { FAQ_ITEMS } from "@/lib/faq";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_ITEMS.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

const INTEGRATIONS = [
  "Snowflake",
  "Databricks",
  "BigQuery",
  "Redshift",
  "PostgreSQL",
  "SQL Server",
  "Oracle",
  "dbt",
];

const STATS = [
  { num: "4", label: "Governance pillars in one platform" },
  { num: "5", label: "Steps in the DG Foundation track" },
  { num: "3", label: "Bronze, Silver & Gold governance tiers" },
  { num: "0", label: "Data moved outside your environment" },
];

const VERTICALS = [
  {
    vertical: "Defense & Shipbuilding",
    body: "Span hull- and program-partitioned data domains under CUI and ITAR controls, and give program stakeholders a single, auditable governance view — without moving data off-premises.",
  },
  {
    vertical: "Financial Services",
    body: "Map the processes behind your data and record the policies and controls that govern them, with audit-ready lineage that helps shrink audit prep from weeks to days.",
  },
  {
    vertical: "Healthcare & Life Sciences",
    body: "Track HIPAA, SOC 2, and internal policy in one place your stewards actually use — backed by a complete, tamper-evident audit trail.",
  },
];

const STACK = [
  {
    role: "Your data sources",
    name: "Snowflake · Postgres · Oracle",
    desc: "Databases and warehouses where your data lives — Procela connects to read metadata only.",
  },
  {
    role: "Your transformation layer",
    name: "dbt · Databricks",
    desc: "Models and pipelines that shape your data, mapped to the processes they serve.",
  },
  {
    role: "Business-process governance",
    name: "Procela",
    desc: "The layer that ties people, process, systems, and data into one auditable program.",
    featured: true,
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      {/* HERO */}
      <div className="hero-band">
        <header className="hero">
          <span className="hero-eyebrow">Enterprise Data Governance Platform</span>
          <h1>
            Governance that <em>aligns</em>
            <br />
            people, process, systems,
            <br />
            and data
          </h1>
          <p className="hero-sub">
            Procela is a business-process-first governance platform. It maps how
            your business works to the data and systems behind it — aligning
            people, process, tools, and data into a single, auditable governance
            program.
          </p>
          <div className="hero-actions">
            <Link className="btn-primary-lg" href="/demo">
              Request a demo
            </Link>
            <Link className="btn-outline-lg" href="/platform">
              Explore the platform
            </Link>
          </div>
        </header>
        <div className="hero-shot">
          <BrowserFrame
            src="/screenshots/hero.webp"
            alt="The Procela dashboard showing governance posture — coverage, data health, and tier mix — with trend charts across value streams, processes, data assets, and systems."
            priority
          />
        </div>
      </div>

      {/* LOGO STRIP */}
      <div className="logo-strip">
        <span className="logo-strip-label">Connects to your data sources</span>
        {INTEGRATIONS.map((name) => (
          <span key={name} className="logo-pill">
            {name}
          </span>
        ))}
      </div>

      {/* STATS */}
      <div className="stats-bar">
        {STATS.map((s) => (
          <div className="stat" key={s.label}>
            <div className="stat-num">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>

      <hr className="divider" />

      {/* WITHOUT / WITH */}
      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">The problem</span>
          <h2 className="section-title">
            Governance without process context is just documentation
          </h2>
          <p className="section-body">
            Most programs have the tools. What they&apos;re missing is the
            business-process context that ties scattered policies to the data and
            owners behind them.
          </p>
          <div className="contrast-grid">
            <div className="contrast-side">
              <div className="contrast-label bad">
                <span className="ci">
                  <Icon name="cross" size={15} />
                </span>
                Without Procela
              </div>
              <div className="contrast-heading">
                Policies in spreadsheets. Stewards without accountability. Tools that
                don&apos;t talk.
              </div>
              <p className="contrast-body">
                Discovery runs in one system. Access controls live in another.
                Ownership assignments exist in a SharePoint nobody checks. Audits take
                weeks. Compliance is a fire drill.
              </p>
            </div>
            <div className="contrast-side with">
              <div className="contrast-label good">
                <span className="ci">
                  <Icon name="check" size={15} />
                </span>
                With Procela
              </div>
              <div className="contrast-heading">
                One governance program. Process context. People, systems, and data
                aligned.
              </div>
              <p className="contrast-body">
                Owners and RACI roles are assigned to every process. Policies and
                controls are recorded against the assets they govern. Gaps, lineage,
                and a tamper-evident audit trail close the loop.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* PLATFORM TABS */}
      <section className="section" id="platform">
        <div className="section-inner">
          <span className="eyebrow">Platform</span>
          <h2 className="section-title">Context and control, across every layer</h2>
          <PlatformTabs />
        </div>
      </section>

      <hr className="divider" />

      {/* BUILT FOR */}
      <section className="section" id="how-it-works">
        <div className="section-inner">
          <span className="eyebrow">Built for regulated enterprises</span>
          <h2 className="section-title">
            Governance that holds up in the hardest environments
          </h2>
          <div className="customers-grid">
            {VERTICALS.map((v) => (
              <div className="customer-card" key={v.vertical}>
                <div className="customer-vertical">{v.vertical}</div>
                <p className="customer-body">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* STACK */}
      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">Integrations</span>
          <h2 className="section-title">
            Procela complements your data stack
          </h2>
          <p className="section-body">
            Procela sits alongside your existing databases, warehouses, and tools —
            connecting to your sources for metadata-only governance without replacing
            what&apos;s already working.
          </p>
          <div className="stack-row">
            {STACK.map((item) => (
              <div
                className={`stack-item${item.featured ? " featured" : ""}`}
                key={item.name}
              >
                <div className="stack-role">{item.role}</div>
                <div className="stack-name">{item.name}</div>
                <div className="stack-desc">{item.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ marginTop: "2rem" }}>
            <Link className="tab-link" href="/integrations">
              See all integrations →
            </Link>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* FAQ */}
      <section className="section" id="resources">
        <div className="section-inner">
          <span className="eyebrow">Common questions</span>
          <h2 className="section-title">What organizations ask before they start</h2>
          <Faq />
        </div>
      </section>

      {/* FINAL CTA */}
      <CtaBand
        title="For leaders who need governance that actually runs"
        body="Procela is built for regulated, complex enterprises. Let's talk about your environment."
      />

      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
