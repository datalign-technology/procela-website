import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Resources — Procela",
  description:
    "Documentation, guides, and briefings on business-process-first data governance, the principal model, the edge connector, and standing up a DG Foundation program.",
};

const CATEGORIES = [
  {
    kicker: "Documentation",
    title: "Product docs",
    body: "Reference for deploying the edge connector, connecting your data sources, modeling principals, and recording policies.",
    link: "Browse the docs",
    href: "/resources/docs",
  },
  {
    kicker: "Guides",
    title: "Whitepapers & guides",
    body: "Deeper reading on business-process-first governance, the principal model, and running programs in regulated environments.",
    link: "Read the guides",
    href: "/resources/guides",
  },
  {
    kicker: "Blog",
    title: "From the team",
    body: "Perspectives on data governance, AI participants in stewardship, and lessons from the field.",
    link: "Visit the blog",
    href: "/resources/blog",
  },
];

const FEATURED = [
  {
    kicker: "Guide",
    title: "Standing up a DG Foundation program in 30 days",
    body: "A phased playbook for reaching an audit-ready governance baseline, starting with your highest-priority domains.",
    href: "/resources/dg-foundation-30-days",
  },
  {
    kicker: "Whitepaper",
    title: "The principal model: human and AI governance actors",
    body: "How Procela models authority for stewards, owners, and agents — and the three-tier autonomy framework behind it.",
    href: "/resources/principal-model",
  },
  {
    kicker: "Architecture",
    title: "The edge connector and the no-egress deployment model",
    body: "How metadata-only scanning over outbound HTTPS keeps source data inside your perimeter.",
    href: "/resources/edge-agents",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <SiteHeader />

      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="hero-eyebrow">Resources</span>
          <h1>Everything you need to go deeper</h1>
          <p>
            Documentation, guides, and briefings for teams evaluating or running a
            governance program on Procela.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">Explore</span>
          <h2 className="section-title">Where to start</h2>
          <div className="card-grid">
            {CATEGORIES.map((c) => (
              <Link className="card" href={c.href} key={c.title}>
                <span className="card-kicker">{c.kicker}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
                <span className="card-link">{c.link} →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">Featured</span>
          <h2 className="section-title">Recommended reading</h2>
          <div className="card-grid">
            {FEATURED.map((f) => (
              <Link className="card" href={f.href} key={f.title}>
                <span className="card-kicker">{f.kicker}</span>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
                <span className="card-link">Read →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Prefer a walkthrough?"
        body="Skip the reading — we'll show you Procela against your environment directly."
        secondaryLabel="How it works"
        secondaryHref="/how-it-works"
      />

      <SiteFooter />
    </>
  );
}
