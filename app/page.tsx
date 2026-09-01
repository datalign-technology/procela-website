import type { Metadata } from "next";
import Link from "next/link";
import Icon from "@/components/Icon";
import HeroSlideshow from "@/components/HeroSlideshow";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import ProductShowcase from "@/components/ProductShowcase";
import { FAQ_ITEMS } from "@/lib/faq";
import { INDUSTRIES } from "@/lib/industries";

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

const HERO_BADGES = [
  "Air-gapped deployment",
  "Metadata only — no data egress",
  "Full audit trail",
];

const ROLES = [
  {
    kicker: "Chief Data Officer",
    title: "Prove the program works",
    body: "Coverage, maturity and posture in one view — the evidence your board and audit committee expect, without the quarterly scramble.",
  },
  {
    kicker: "Data Steward",
    title: "Own your domain",
    body: "Every asset you steward, its health and its open issues — with tasks and reviews routed to you, not lost in email.",
  },
  {
    kicker: "Compliance & Risk",
    title: "Answer with evidence",
    body: "Trace lineage, confirm ownership and export a complete audit trail — so every review starts from fact, not a fire drill.",
  },
];

const SECURITY_ITEMS = [
  {
    icon: "shield" as const,
    title: "On-prem & air-gapped",
    body: "Deploy in your data center or a fully isolated network. No outbound dependency.",
  },
  {
    icon: "edge" as const,
    title: "Metadata only",
    body: "Agents catalog structure and ownership — never the underlying records.",
  },
  {
    icon: "audit" as const,
    title: "Complete audit trail",
    body: "Every change captured and exportable for review and evidence.",
  },
  {
    icon: "lock" as const,
    title: "Role-based access",
    body: "Owners, stewards and admins see exactly what their role allows.",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader />

      {/* HERO */}
      <div className="hero-band">
        <div className="hero-band-inner">
          <header className="hero">
            <span className="hero-eyebrow">Enterprise data governance</span>
            <h1>
              The system of record for who <em>owns</em> your data
            </h1>
            <p className="hero-sub">
              Procela unifies systems, assets, owners and domains into one
              governed catalog — with the program, quality and lineage regulated
              enterprises are held to. Deployed entirely within your environment.
            </p>
            <div className="hero-actions">
              <Link className="btn-primary-lg" href="/demo">
                Request a demo
              </Link>
              <Link className="btn-outline-lg" href="/platform">
                Explore the platform
              </Link>
            </div>
            <div className="hero-badges">
              {HERO_BADGES.map((b) => (
                <span className="hero-badge" key={b}>
                  <Icon name="shield" size={15} />
                  {b}
                </span>
              ))}
            </div>
          </header>
          <div className="hero-shot">
            <HeroSlideshow />
          </div>
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

      {/* PRODUCT SHOWCASE — tabbed screenshots */}
      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">See it in action</span>
          <h2 className="section-title">One place to run your governance program</h2>
          <ProductShowcase />
        </div>
      </section>

      <hr className="divider" />

      {/* PLATFORM — bento */}
      <section className="section" id="platform">
        <div className="section-inner">
          <span className="eyebrow">The platform</span>
          <h2 className="section-title">Everything governance needs, in one place</h2>
          <p className="section-body">
            Discovery, accountability, quality and lineage — connected, not stitched
            together from tools that were never meant to talk.
          </p>
          <div className="bento-grid">
            <div className="bento-card span2">
              <div className="bento-icon">
                <Icon name="layers" size={22} />
              </div>
              <h3>A living catalog</h3>
              <p>
                Systems, data assets, people and domains discovered by metadata-only
                edge agents and linked into one connected model.
              </p>
              <div className="bento-mini">
                <div className="bento-row">
                  <span>Meter Data Management</span>
                  <span className="bento-chip">Devon K.</span>
                </div>
                <div className="bento-row">
                  <span>Billing Engine</span>
                  <span className="bento-chip">Amelia F.</span>
                </div>
                <div className="bento-row">
                  <span>Customer CRM Portal</span>
                  <span className="bento-chip">Priya R.</span>
                </div>
              </div>
            </div>

            <div className="bento-card">
              <div className="bento-icon">
                <Icon name="security" size={22} />
              </div>
              <h3>Governance posture</h3>
              <div className="bento-donut">
                <b>100%</b>
              </div>
            </div>

            <div className="bento-card dark">
              <div className="bento-icon">
                <Icon name="shield" size={22} />
              </div>
              <h3>Air-gapped by design</h3>
              <p>
                Deploy on-prem or fully isolated. Metadata only — your data never
                leaves the building.
              </p>
            </div>

            <div className="bento-card">
              <div className="bento-icon">
                <Icon name="audit" size={22} />
              </div>
              <h3>Data quality</h3>
              <p>Health scores and rules per asset.</p>
              <div className="bento-bar">
                <span style={{ width: "82%" }} />
              </div>
            </div>

            <div className="bento-card">
              <div className="bento-icon">
                <Icon name="integration" size={22} />
              </div>
              <h3>End-to-end lineage</h3>
              <p>Trace any asset across every system.</p>
            </div>

            <div className="bento-card span2">
              <div className="bento-icon">
                <Icon name="stewardship" size={22} />
              </div>
              <h3>The governance program, operationalized</h3>
              <p>
                Owners, stewards and councils; program maturity; RACI and reviews
                routed to the right people — the DAMA operating model, built in.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* SOLUTIONS BY ROLE */}
      <section className="section" id="how-it-works">
        <div className="section-inner">
          <span className="eyebrow">Built for</span>
          <h2 className="section-title">Built for the people accountable for data</h2>
          <p className="section-body">
            One platform, mapped to the roles your governance program already defines.
          </p>
          <div className="roles-grid">
            {ROLES.map((r) => (
              <div className="role-card" key={r.kicker}>
                <div className="role-kicker">{r.kicker}</div>
                <h3>{r.title}</h3>
                <p>{r.body}</p>
                <Link className="role-link" href="/platform">
                  Explore the platform <span aria-hidden="true">→</span>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      {/* INDUSTRIES */}
      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">Industries</span>
          <h2 className="section-title">
            Built for regulated, data-intensive industries
          </h2>
          <p className="section-body">
            Procela runs where your data lives — on-premises or air-gapped — for
            the sectors that can&apos;t afford to get data wrong.
          </p>
          <div className="ind-links">
            {INDUSTRIES.map((i) => (
              <Link key={i.slug} href={`/industries/${i.slug}`} className="ind-link">
                {i.name}
              </Link>
            ))}
          </div>
          <div style={{ marginTop: "1.75rem" }}>
            <Link href="/industries" className="tab-link">
              See all industries →
            </Link>
          </div>
        </div>
      </section>

      {/* SECURITY & DEPLOYMENT — dark band */}
      <section className="secure-band">
        <div className="secure-inner">
          <div>
            <span className="eyebrow">Security &amp; deployment</span>
            <h2>Your data never leaves the building</h2>
            <p className="secure-lead">
              Procela runs entirely inside your environment. Edge agents read
              metadata in place — no pipelines, no copies, no cloud round-trip. The
              differentiator regulated enterprises can&apos;t compromise on.
            </p>
            <Link className="secure-link" href="/security">
              See the security architecture <span aria-hidden="true">→</span>
            </Link>
          </div>
          <div className="secure-grid">
            {SECURITY_ITEMS.map((s) => (
              <div className="secure-item" key={s.title}>
                <div className="secure-ico">
                  <Icon name={s.icon} size={20} />
                </div>
                <h4>{s.title}</h4>
                <p>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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
