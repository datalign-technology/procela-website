import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaBand from "@/components/CtaBand";
import Icon, { type IconName } from "@/components/Icon";
import OrchestrationDiagram from "@/components/OrchestrationDiagram";
import BrowserFrame from "@/components/BrowserFrame";

export const metadata: Metadata = {
  alternates: { canonical: "/platform" },
  title: "Platform — Procela",
  description:
    "Procela is a business-process-first governance platform: business-process catalog, stewardship, recorded policies and controls, and metadata-only edge connectivity.",
};

const PILLARS: { icon: IconName; kicker: string; title: string; body: string }[] = [
  {
    icon: "orchestration",
    kicker: "Business-process-first governance",
    title: "Start with how your business actually works",
    body: "Procela maps value streams, processes, sub-processes, and steps — and the data and systems behind each one. It complements the databases, warehouses, and tools you already run, sitting alongside them to answer what none can on their own: what process, what data, who owns it, and is it governed.",
  },
  {
    icon: "stewardship",
    kicker: "Stewardship & ownership",
    title: "Clear accountability across every data domain",
    body: "Assign data owners, domain stewards, and AI agents to assets with RACI and DAMA roles and explicit decision rights. Procela's principal model treats human and AI participants as first-class governance actors, each operating under explicit, auditable authority.",
  },
  {
    icon: "policy",
    kicker: "Policies & controls",
    title: "Policies that flow from business rules, not spreadsheets",
    body: "Define governance policies and controls in plain language. Procela records them against the assets they govern, tracks them alongside gaps and issues, and maintains a full, tamper-evident audit trail of every change and decision.",
  },
  {
    icon: "edge",
    kicker: "Edge connector",
    title: "Scan your sources without moving your data",
    body: "The on-prem edge connector deploys inside your environment via Kubernetes or Helm. It reads schema, table, and column metadata plus row counts — never values — and sends only that metadata over outbound HTTPS. Your data never leaves your perimeter.",
  },
];

const AUTONOMY = [
  {
    kicker: "Advisory",
    title: "Recommends, a human decides",
    body: "The agent surfaces suggestions — a classification, an owner, a policy match — and a human decides. A model for keeping authority with people in your highest-sensitivity domains.",
  },
  {
    kicker: "Propose & approve",
    title: "Prepares changes for review",
    body: "The agent prepares changes and routes them for approval. Nothing is accepted until a steward signs off, and every decision is logged. Procela's AI today is assistive and review-gated.",
  },
  {
    kicker: "Shared authority",
    title: "A concept for splitting human and AI roles",
    body: "The three-tier model describes how human and AI actors can share governance authority — a way to reason about who advises, who prepares, and who approves. It frames how Procela's review-gated agents fit into your program.",
  },
];

export default function PlatformPage() {
  return (
    <>
      <SiteHeader />

      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="hero-eyebrow">Platform</span>
          <h1>Governance, mapped to how your business runs</h1>
          <p>
            Procela is the connective tissue of your governance program — tying the
            processes, people, systems, and data you already have into one aligned,
            auditable system.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">Four pillars, one platform</span>
          <h2 className="section-title">Everything a governance program needs to run</h2>
          <div className="feature-list">
            {PILLARS.map((p) => (
              <div className="feature-row" key={p.kicker}>
                <div>
                  <div className="feature-icon">
                    <Icon name={p.icon} size={22} />
                  </div>
                  <div className="feature-kicker">{p.kicker}</div>
                </div>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">How it fits together</span>
          <h2 className="section-title">One governance program, alongside the tools you already run</h2>
          <p className="section-body">
            Procela connects to the databases, warehouses, and transformation tools you
            already run for metadata-only governance, and ties what it finds to owners,
            processes, and controls — without becoming another silo.
          </p>
          <OrchestrationDiagram />
        </div>
      </section>

      <hr className="divider" />

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">In the product</span>
          <h2 className="section-title">See governance actually running</h2>

          <div className="product-row">
            <div className="product-copy">
              <span className="product-kicker">Enterprise view</span>
              <h3>One view across the entire enterprise</h3>
              <p>
                Processes, systems, data assets, and domains — and how they connect —
                in a single pane, so leadership can see the whole governance program at
                a glance.
              </p>
            </div>
            <BrowserFrame
              src="/screenshots/enterprise.webp"
              alt="Procela enterprise view showing counts of processes, systems, data assets, and domains with their relationships."
            />
          </div>

          <div className="product-row reverse">
            <div className="product-copy">
              <span className="product-kicker">Stewardship &amp; ownership</span>
              <h3>Every person, role, and domain in one place</h3>
              <p>
                A live directory of owners, stewards, and agents across your
                organization — with app and governance roles assigned and
                accountable.
              </p>
            </div>
            <BrowserFrame
              src="/screenshots/people.webp"
              alt="Procela People view listing owners and stewards with their roles and titles across the organization."
            />
          </div>

          <div className="product-row">
            <div className="product-copy">
              <span className="product-kicker">Systems &amp; data</span>
              <h3>A live inventory of where your data lives</h3>
              <p>
                Every system and data asset catalogued and typed — the foundation
                the governance program is built on.
              </p>
            </div>
            <BrowserFrame
              src="/screenshots/systems.webp"
              alt="Procela Systems view showing a catalogued inventory of applications and platforms by type."
            />
          </div>

          <div className="product-row reverse">
            <div className="product-copy">
              <span className="product-kicker">Lineage</span>
              <h3>See how data flows between your systems</h3>
              <p>
                Map which system feeds which — as a table or a directed graph —
                with flow type and frequency on every edge, or import it straight
                from a dbt Cloud job. One picture of how data moves, kept
                audit-ready.
              </p>
            </div>
            <BrowserFrame
              src="/screenshots/lineage.webp"
              alt="Procela Data Lineage view showing a directed graph of flows between systems, each edge labeled with flow type and frequency."
            />
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">The principal model</span>
          <h2 className="section-title">Human and AI governance actors, under explicit authority</h2>
          <p className="section-body">
            Every steward, owner, and agent in Procela is a &ldquo;principal&rdquo; with a
            defined scope of authority. A three-tier model describes how human and AI
            actors share that authority — from advising, to preparing changes, to
            approving them. Procela&apos;s AI today is assistive and review-gated:
            it suggests classifications, owners, and domains, and a human approves
            before anything is applied.
          </p>
          <div className="card-grid">
            {AUTONOMY.map((a) => (
              <div className="card" key={a.kicker}>
                <span className="card-kicker">{a.kicker}</span>
                <h3>{a.title}</h3>
                <p>{a.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="See the platform against your environment"
        body="We'll walk through how Procela connects to your existing stack and stands up a governance baseline."
        secondaryLabel="View integrations"
        secondaryHref="/integrations"
      />

      <SiteFooter />
    </>
  );
}
