import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  alternates: { canonical: "/resources/dg-foundation-30-days" },
  title: "Standing up a DG Foundation program in 30 days — Procela",
  description:
    "A phased playbook for reaching an audit-ready data governance baseline in under 30 days, starting with your highest-priority domains.",
};

export default function Article() {
  return (
    <ArticleLayout
      category="Guide"
      title="Standing up a DG Foundation program in 30 days"
      deck="A phased playbook for reaching an audit-ready governance baseline, starting with your highest-priority domains."
      meta="By the Procela team · 7 min read"
    >
      <p>
        Most data governance initiatives stall not because the tools are missing,
        but because the program never becomes <em>operational</em>. Policies live in
        documents, ownership is ambiguous, and the connection between discovery,
        access control, and audit is manual. The DG Foundation track is designed to
        get past that — to a running baseline you can defend in an audit — in about
        thirty days.
      </p>

      <h2>What a &ldquo;baseline&rdquo; actually means</h2>
      <p>
        A governance baseline isn&apos;t a finished program; it&apos;s the smallest
        version that stands on its own. Concretely, at the end of the first phase you
        should have:
      </p>
      <ul>
        <li>Your highest-priority data domains modeled and connected;</li>
        <li>Owners and stewards assigned, with explicit authority;</li>
        <li>Policies and controls recorded against the assets they govern; and</li>
        <li>Audit-ready lineage on every governed asset.</li>
      </ul>
      <p>
        The scope is deliberately narrow. You are not trying to govern everything —
        you are proving the loop closes for the data that matters most.
      </p>

      <h2>Week 1 — Connect and scope</h2>
      <p>
        Deploy Procela&apos;s edge connector inside your environment and connect your
        databases, warehouses, and dbt — sources like PostgreSQL, SQL Server, Oracle,
        Snowflake, BigQuery, Redshift, and Databricks. Only metadata leaves your
        perimeter. In parallel, pick the domains for Phase 1 — usually the ones under
        the most regulatory pressure, such as CUI, PII, or export-controlled
        engineering data.
      </p>

      <h2>Week 2 — Classify and reconcile</h2>
      <p>
        Register your in-scope assets and let Procela&apos;s AI suggest classifications,
        then reconcile them against your chosen domains. The AI-assisted suggestions
        are review-gated, so a steward confirms anything unlabeled before it takes
        effect. The goal here is coverage: every asset in scope has a known
        classification and a home domain.
      </p>

      <h2>Week 3 — Assign stewardship</h2>
      <p>
        Map owners, stewards, and agents to domains and assets. Procela derives a RACI
        matrix from those role and process-ownership assignments, so accountability is
        explicit rather than implied. This is the step most programs skip — and the
        reason audits turn into fire drills later.
      </p>

      <h2>Week 4 — Govern and audit</h2>
      <p>
        Author your first policies in plain language and record the controls that
        implement them — access, retention, export controls — against the assets they
        govern. Every change lands in a tamper-evident audit trail, so audit prep
        becomes a query rather than a project.
      </p>

      <h2>Common pitfalls</h2>
      <ul>
        <li>
          <strong>Boiling the ocean.</strong> Trying to govern every domain at once
          guarantees you finish none. Phase 1 is a wedge, not the whole program.
        </li>
        <li>
          <strong>Ownership by committee.</strong> If everyone owns a domain, no one
          does. Assign a single accountable owner per domain.
        </li>
        <li>
          <strong>Policies without owners or controls.</strong> A policy that
          isn&apos;t recorded against a governed asset, with an accountable owner and
          the control that implements it, is just documentation.
        </li>
      </ul>

      <h2>After Phase 1</h2>
      <p>
        Once the baseline is live, expanding is mostly a matter of adding domains — the
        catalog, stewardship model, and audit trail are already in place. The hard
        part, going from zero to a running program, is behind you.
      </p>
    </ArticleLayout>
  );
}
