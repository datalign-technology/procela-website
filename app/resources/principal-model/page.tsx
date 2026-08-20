import type { Metadata } from "next";
import ArticleLayout from "@/components/ArticleLayout";
import BrowserFrame from "@/components/BrowserFrame";

export const metadata: Metadata = {
  alternates: { canonical: "/resources/principal-model" },
  title: "The principal model: human and AI governance actors — Procela",
  description:
    "How Procela models authority for stewards, owners, and agents — and the three-tier autonomy framework that lets AI participate in governance safely.",
};

export default function Article() {
  return (
    <ArticleLayout
      category="Whitepaper"
      title="The principal model: human and AI governance actors"
      deck="How Procela models authority for stewards, owners, and agents — and the three-tier autonomy framework behind it."
      meta="By the Procela team · 8 min read"
    >
      <p>
        Governance is ultimately about accountability: who is responsible for a piece
        of data, and what are they allowed to do with it. As AI systems begin to take
        on real governance work — classifying assets, proposing owners, flagging
        policy violations — that question gets sharper. A recommendation is only
        trustworthy if you know exactly who or what made it, and under what authority.
        Procela&apos;s answer is the <strong>principal model</strong>.
      </p>

      <h2>What is a principal?</h2>
      <p>
        A principal is any actor that can hold a governance role — a human or an AI
        agent — with a defined scope of authority. Every action in Procela is
        attributable to a named principal, and every principal&apos;s authority is
        explicit. There are no anonymous, ambient decisions.
      </p>

      <h2>Human principals</h2>
      <p>
        Data owners and domain stewards are the familiar roles. Owners are
        accountable for a domain; stewards do the day-to-day work of classification,
        review, and remediation. In Procela these aren&apos;t just labels in a
        spreadsheet — they carry an explicit scope of authority, and their decisions
        are logged against them.
      </p>

      <h2>AI principals</h2>
      <p>
        The important move is treating AI agents as first-class principals rather than
        as background automation. An agent that reviews classifications or proposes
        stewardship assignments is a named actor with its own scope and its own audit
        trail. You can see what it did, why, and on whose authority — just as you can
        for a human.
      </p>

      <div className="article-figure">
        <BrowserFrame
          src="/screenshots/agents.webp"
          alt="Procela agents view listing AI, pipeline, and service-account principals with their type and status."
        />
        <p className="article-caption">
          AI agents and service accounts modeled as named principals, each with a
          type and status.
        </p>
      </div>

      <h2>A framework for autonomy: three tiers</h2>
      <p>
        Not every governance task warrants the same level of independence from an
        agent. A useful way to reason about how humans and AI share authority is to
        think in three tiers:
      </p>
      <ul>
        <li>
          <strong>Advisory.</strong> The agent recommends — a classification, an
          owner, a policy match — and a human decides. Best for your highest-sensitivity
          data.
        </li>
        <li>
          <strong>Propose &amp; approve.</strong> The agent prepares changes and
          routes them for approval. Nothing takes effect until a steward signs off,
          and every decision is logged.
        </li>
        <li>
          <strong>Autonomous.</strong> For well-understood, low-risk work, the agent
          acts inside policy boundaries you define — with a complete audit trail.
        </li>
      </ul>
      <p>
        Procela&apos;s AI agents today operate in the more conservative end of that
        spectrum: they are AI-assisted, run on a schedule, and are review-gated, so a
        human confirms their work before it takes effect. The framework is a way to
        talk about how much authority you extend to an agent for a given kind of
        work — from low-risk catalog hygiene to strictly advisory handling of
        export-controlled data.
      </p>

      <h2>Authority, scope, and auditability</h2>
      <p>
        Every principal&apos;s authority is bounded and inspectable. Because roles and
        process ownership are explicit, Procela can derive a full RACI matrix —
        who&apos;s Responsible, Accountable, Consulted, and Informed for every activity
        — automatically.
      </p>

      <div className="article-figure">
        <BrowserFrame
          src="/screenshots/raci.webp"
          alt="Procela RACI matrix mapping process activities to responsible, accountable, consulted, and informed principals."
        />
        <p className="article-caption">
          A RACI matrix generated from process ownership and governance-role
          assignments.
        </p>
      </div>

      <p>
        Combined with a tamper-evident log of every classification, assignment, and
        policy decision, that means you can always answer the auditor&apos;s core
        question: who did this, and were they allowed to?
      </p>

      <h2>Why it matters for regulated environments</h2>
      <p>
        In defense, financial services, and healthcare, &ldquo;the system did
        it&rdquo; is not an acceptable answer. The principal model makes AI
        participation defensible by keeping it accountable — every actor named, every
        authority explicit, every action logged.
      </p>
    </ArticleLayout>
  );
}
