import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  alternates: { canonical: "/careers" },
  title: "Careers — Procela",
  description:
    "Help build the system of record for data governance. Procela is an early, remote-friendly team working on governance for regulated environments. See how to reach us.",
};

const VALUES = [
  {
    kicker: "Ownership",
    title: "You own real problems",
    body: "We're a small team, so scope is wide and impact is direct. You'll own features end to end — from the customer problem to what ships — not a narrow slice of someone else's plan.",
  },
  {
    kicker: "Substance",
    title: "Hard problems, done properly",
    body: "Metadata-only architecture, no data egress, tamper-evident audit trails, AI under review-gated controls. Governance for regulated environments rewards care over shortcuts.",
  },
  {
    kicker: "Pragmatism",
    title: "Ship, learn, repeat",
    body: "We favor working software and real customer feedback over grand plans. Small, honest increments that add up — the same way we tell customers to run a governance program.",
  },
  {
    kicker: "Trust",
    title: "Remote-friendly and low-ceremony",
    body: "Clear goals, written communication, and the autonomy to do your best work. We keep meetings few and decisions transparent.",
  },
];

export default function CareersPage() {
  return (
    <>
      <SiteHeader />

      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="hero-eyebrow">Careers</span>
          <h1>Build the system of record for data governance</h1>
          <p>
            Procela helps organizations know who owns their data and how it all
            fits together — processes, systems, data, and the people accountable
            for them. We&apos;re early, deliberate, and building for environments
            where accountability actually matters.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">Why Procela</span>
          <h2 className="section-title">What it&apos;s like to work here</h2>
          <p className="section-body">
            We&apos;re a small team solving a real, unglamorous problem for
            regulated industries. That means wide ownership, a high bar for craft,
            and a bias toward shipping.
          </p>
          <div className="card-grid">
            {VALUES.map((v) => (
              <div className="card" key={v.kicker}>
                <span className="card-kicker">{v.kicker}</span>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">Open roles</span>
          <h2 className="section-title">We don&apos;t have open positions posted right now</h2>
          <p className="section-body">
            But we&apos;re always glad to hear from strong engineers, designers,
            and go-to-market people who care about this problem. If that&apos;s
            you, tell us what you&apos;d want to work on and what you&apos;ve built
            — we read every note.
          </p>
          <p className="section-body">
            Email us at{" "}
            <a
              href="mailto:careers@procela.ai"
              style={{ color: "var(--green-text)", fontWeight: 600, textDecoration: "underline" }}
            >
              careers@procela.ai
            </a>
            . Please include a short intro and a link to your work (GitHub,
            portfolio, or LinkedIn).
          </p>
        </div>
      </section>

      <CtaBand
        title="Think you'd be a fit?"
        body="Send us a note — a couple of paragraphs on what you'd want to build and a link to your work is plenty."
        primaryLabel="Email careers@procela.ai"
        primaryHref="mailto:careers@procela.ai"
        secondaryLabel="See what we're building"
        secondaryHref="/platform"
      />

      <SiteFooter />
    </>
  );
}
