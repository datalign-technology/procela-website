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
    "Business-process-first governance that connects processes, systems, data and owners — a process catalog, stewardship and RACI, recorded policies and controls — and stands up an audit-ready baseline in under 30 days, connecting to your sources without moving your data.",
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
    kicker: "Connect your sources",
    title: "Connect however suits you — no agent required",
    body: "Connect cloud warehouses — Snowflake, BigQuery, Redshift, Databricks — directly; deploy the optional on-prem edge connector for databases behind your firewall; or catalog sources by hand, import them (spreadsheet or dbt), or through the API. However you connect, Procela reads only metadata — schema, tables, columns, row counts — never values, so your data never leaves your perimeter.",
  },
];

// The phased DG Foundation track — six steps to an audit-ready baseline.
const STEPS = [
  {
    n: "01",
    stage: "Capture",
    title: "Connect",
    body: "Connect cloud warehouses — Snowflake, BigQuery, Redshift, Databricks — directly, or deploy the optional edge connector for on-prem databases (PostgreSQL, MySQL, SQL Server, Oracle) and dbt. Prefer not to run a connector at all? Catalog sources by hand, import them (spreadsheet or dbt), or use the API. Either way Procela reads only metadata where the data lives — no data leaves your perimeter — and the rest of the program runs the same.",
  },
  {
    n: "02",
    stage: "Capture",
    title: "Map",
    body: "Lay your business processes over the catalog — which process depends on which data, in which system. Mapping process to data, and the systems behind it, is what turns a list of assets into governance you can reason about.",
  },
  {
    n: "03",
    stage: "Capture",
    title: "Classify",
    body: "Reconcile discovered assets against your domains, and let Procela's AI agents propose classifications for anything unlabeled — routed for review before anything is applied.",
  },
  {
    n: "04",
    stage: "Assign",
    title: "Assign",
    body: "Map assets to data domains and assign owners, stewards, and agents. Procela suggests stewardship based on your org structure, so accountability is explicit from day one.",
  },
  {
    n: "05",
    stage: "Govern",
    title: "Govern",
    body: "Define policies in plain language. Procela records them as policies and controls against the assets they govern — access, retention, export controls — and tracks them in one place.",
  },
  {
    n: "06",
    stage: "Operate",
    title: "Audit",
    body: "Every classification, assignment, and policy change is captured in a tamper-evident log. Audit prep becomes a query, not a fire drill — and the loop keeps running as new assets arrive.",
  },
];

// Merged product tour — the strongest screens across the catalog and program.
const PRODUCT = [
  {
    kicker: "Process catalog",
    title: "Governance anchored to how the business runs",
    body: "Map value streams to processes, sub-processes, and activities in a two-pane catalog — each with a named owner, the systems and data it touches, and a readiness check that shows exactly what's left to activate it.",
    src: "/screenshots/processes.webp",
    alt: "Procela's two-pane Process Catalog — a value-stream / process / activity tree on the left and a detail panel on the right showing the selected process's owner and activation readiness.",
  },
  {
    kicker: "Enterprise view",
    title: "One view across the entire enterprise",
    body: "Processes, systems, data assets, and domains — and how they connect — in a single pane, so leadership can see the whole governance program at a glance.",
    src: "/screenshots/enterprise.webp",
    alt: "Procela enterprise view showing counts of processes, systems, data assets, and domains with their relationships.",
  },
  {
    kicker: "Domains",
    title: "Organize assets into governed domains",
    body: "Group data assets under a single governance umbrella with assigned owners, stewards, and policies — the backbone of the classify and assign steps.",
    src: "/screenshots/domains.webp",
    alt: "Procela data domains view with a domain list and a detail panel showing owner, stewards, and member data assets.",
  },
  {
    kicker: "Lineage",
    title: "See how data flows between your systems",
    body: "Map which system feeds which — as a table or a directed graph — with flow type and frequency on every edge, or import it straight from a dbt Cloud job. One picture of how data moves, kept audit-ready.",
    src: "/screenshots/lineage.webp",
    alt: "Procela Data Lineage view showing a directed graph of flows between systems, each edge labeled with flow type and frequency.",
  },
  {
    kicker: "Stewardship & ownership",
    title: "Every person, role, and domain in one place",
    body: "A live directory of owners, stewards, and agents across your organization — with app and governance roles assigned and accountable.",
    src: "/screenshots/people.webp",
    alt: "Procela People view listing owners and stewards with their roles and titles across the organization.",
  },
  {
    kicker: "Council scorecard",
    title: "Give the council one board to run on",
    body: "Four measures — tier-1 coverage, classification, open issues, and exceptions — auto-derived from live data and rolled up from every division to the enterprise, so progress is visible, not anecdotal.",
    src: "/screenshots/council-scorecard.webp",
    alt: "The Procela Governance Council Scorecard rolling four measures up from each division to the enterprise, with status badges and an auto-derived narrative.",
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

const MCP_SAFEGUARDS = [
  {
    kicker: "Read-first",
    title: "Writes are opt-in and gated",
    body: "The read tools change nothing. A separate switch enables a small set of write tools — assign owner, set status, create task — each behind the same permission the app requires and confirmed by the client before it runs.",
  },
  {
    kicker: "Metadata only",
    title: "Context, never source data",
    body: "Agents see the process hierarchy, ownership, gaps, health, and governance scope — the same business metadata the in-app assistant sees. No row-level source data is ever exposed.",
  },
  {
    kicker: "Least privilege",
    title: "Scoped to the caller's role",
    body: "Each agent authenticates as its own revocable service token, capped to Viewer or Editor and scoped to one org and its divisions. It can never see or do more than that role allows — never an escalation path.",
  },
  {
    kicker: "Audited",
    title: "Every call in the record",
    body: "Reads and writes are written to the tamper-evident, hash-chained audit log — writes with before-and-after state — before anything is returned. Non-bypassable.",
  },
  {
    kicker: "Per-tenant",
    title: "Off by default, opt-in",
    body: "The surface is reachable only after an admin opts the tenant in, on top of deployment-level kill switches. On-prem or air-gapped deployments can keep it off entirely.",
  },
  {
    kicker: "Human-in-the-loop",
    title: "Confirm before a change",
    body: "Write tools carry MCP annotations so the agent's client asks the operator to approve before making a change — the human stays in the decision.",
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
            processes, systems, data and the people accountable for them into one
            aligned, auditable system, and standing up an audit-ready baseline in
            under 30 days.
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

      <section className="section" id="how-it-works">
        <div className="section-inner">
          <span className="eyebrow">How it works · the DG Foundation track</span>
          <h2 className="section-title">An audit-ready baseline in under 30 days</h2>
          <p className="section-body">
            The DG Foundation track is phased and pragmatic — it starts with your
            highest-priority domains and closes the governance loop step by step,
            moving through four stages: Capture, Assign, Govern, and Operate.
          </p>
          <div className="steps">
            {STEPS.map((s) => (
              <div className="step" key={s.n}>
                <div className="step-num">{s.n}</div>
                <div>
                  <span className="step-stage">{s.stage}</span>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">The closed loop</span>
          <h2 className="section-title">Governance that keeps pace</h2>
          <p className="section-body">
            Once the baseline is live, Procela keeps the loop moving: new assets are
            discovered or imported and proposed for classification, stewardship is
            assigned, policies and controls are recorded, and the audit trail updates.
            AI-assisted suggestions surface the work; your team reviews and approves it
            instead of doing the busywork.
          </p>
        </div>
      </section>

      <hr className="divider" />

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">In the product</span>
          <h2 className="section-title">See governance actually running</h2>

          {PRODUCT.map((row, i) => (
            <div className={`product-row${i % 2 === 1 ? " reverse" : ""}`} key={row.kicker}>
              <div className="product-copy">
                <span className="product-kicker">{row.kicker}</span>
                <h3>{row.title}</h3>
                <p>{row.body}</p>
              </div>
              <BrowserFrame src={row.src} alt={row.alt} />
            </div>
          ))}
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

      <hr className="divider" />

      <section className="section" id="agent-access">
        <div className="section-inner">
          <span className="eyebrow">Agent access (MCP)</span>
          <h2 className="section-title">Governance context for your whole AI agent fleet</h2>
          <p className="section-body">
            Procela includes a Model Context Protocol (MCP) server, so the AI
            agents your teams already use — Claude Desktop, IDE assistants, your
            own copilots — can ask your governed catalog what a person would:
            what process depends on this data, who owns it, and is it governed?
            Where you allow it, an agent can also make audited changes. It&apos;s
            governance context for your whole agent fleet, without a bespoke
            integration — and it inherits the same identity, tenant isolation,
            RBAC, and audit trail as the rest of Procela.
          </p>

          <div className="product-row">
            <div className="product-copy">
              <span className="product-kicker">In the product</span>
              <h3>Turn it on per tenant, give each agent its own token</h3>
              <p>
                An org admin opts the tenant in and mints a revocable,
                org-scoped service token for each agent — capped to Viewer
                (read-only) or Editor (adds writes). Every token is listed, shown
                once, and revoked in a click.
              </p>
            </div>
            <BrowserFrame
              src="/screenshots/agent-access.webp"
              alt="Procela's Agent access (MCP) settings panel — a per-tenant enable toggle and a list of revocable, role-capped service tokens for AI agents."
            />
          </div>

          <div className="card-grid">
            {MCP_SAFEGUARDS.map((s) => (
              <div className="card" key={s.kicker}>
                <span className="card-kicker">{s.kicker}</span>
                <h3>{s.title}</h3>
                <p>{s.body}</p>
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
