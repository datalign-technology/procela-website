import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Guides & whitepapers — Procela",
  description:
    "In-depth guides and whitepapers on business-process-first data governance, the principal model, the edge connector, and standing up a governance program.",
};

const GUIDES = [
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

export default function GuidesPage() {
  return (
    <>
      <SiteHeader />

      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="hero-eyebrow">Guides</span>
          <h1>Guides &amp; whitepapers</h1>
          <p>
            Practical, in-depth reading for teams evaluating or running a governance
            program on Procela.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">Library</span>
          <h2 className="section-title">Long-form reading</h2>
          <div className="card-grid">
            {GUIDES.map((g) => (
              <Link className="card" href={g.href} key={g.title}>
                <span className="card-kicker">{g.kicker}</span>
                <h3>{g.title}</h3>
                <p>{g.body}</p>
                <span className="card-link">Read →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Want a guide tailored to your environment?"
        body="We'll walk through how these ideas apply to your stack directly."
        secondaryLabel="Back to resources"
        secondaryHref="/resources"
      />

      <SiteFooter />
    </>
  );
}
