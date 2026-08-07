import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  title: "The edge connector and the no-egress deployment model — Procela",
  description:
    "How Procela's edge connector reads source metadata over outbound HTTPS and records a tamper-evident audit trail — governing data without ever moving it out of your perimeter.",
};

export default function Article() {
  return (
    <ArticleLayout
      category="Architecture"
      title="The edge connector and the no-egress deployment model"
      deck="How metadata-only scanning over outbound HTTPS keeps source data inside your perimeter."
      meta="By the Procela team · 6 min read"
    >
      <p>
        For the organizations Procela is built for, one constraint dominates every
        architecture decision: the data cannot move. Export-controlled engineering
        data, CUI, and regulated health and financial records can&apos;t be copied to
        a vendor&apos;s cloud for processing. So Procela is designed around a simple
        principle — <strong>governance comes to the data, not the other way around</strong>.
      </p>

      <h2>The no-egress principle</h2>
      <p>
        Procela&apos;s edge connector runs <em>inside</em> your environment. It reads
        schema, table, and column metadata where the data lives and sends only that
        metadata — asset structure, classifications, lineage, policy state — back to
        the platform. Source records never cross your perimeter. This is what makes
        Procela a fit for ITAR, CMMC, CUI, and HIPAA programs where data residency is
        non-negotiable.
      </p>

      <h2>How the edge connector works</h2>
      <p>
        The connector deploys via Kubernetes or Helm into your infrastructure — a VPC,
        an on-premise cluster, or a secured enclave. Rather than pulling data out to
        scan it, it reads catalog metadata and row counts in place: only structural
        metadata is returned, never the underlying values.
      </p>

      <h2>Identity: outbound HTTPS with a bearer token</h2>
      <p>
        The connector pairs with the platform using a one-time pairing code, then
        authenticates every request with a bearer token over outbound HTTPS. Because
        the connection is outbound-only, you don&apos;t open inbound ports into your
        environment. The connector&apos;s identity is also the anchor for the audit
        trail — every action it takes is attributable to a named principal.
      </p>

      <h2>Tamper-evident audit trail</h2>
      <p>
        Procela records an append-only, hash-chained audit trail of what the connector
        does: what was scanned, what was classified, what policies were recorded.
        Because the trail is tamper-evident, an auditor can trust that what
        they&apos;re reading is what actually happened.
      </p>

      <h2>What actually leaves the perimeter</h2>
      <p>
        Only metadata: asset identifiers, classifications, ownership and stewardship
        assignments, policy decisions, and lineage. No column values, no records, no
        file contents. If it would be sensitive to move, it doesn&apos;t move.
      </p>

      <h2>Deployment topologies</h2>
      <ul>
        <li>
          <strong>Cloud VPC.</strong> A connector in your AWS VPC reads metadata from
          supported sources like Redshift and RDS Postgres in-region.
        </li>
        <li>
          <strong>On-premise.</strong> A connector inside your data center reaches
          legacy databases that never touch the internet.
        </li>
        <li>
          <strong>Hybrid.</strong> Multiple connectors across environments report into
          one governance program, giving you a single view without consolidating the
          data.
        </li>
      </ul>

      <h2>The result</h2>
      <p>
        You get a unified, audit-ready governance program across every source — while
        your data stays exactly where your security and compliance teams require it to
        be.
      </p>
    </ArticleLayout>
  );
}
