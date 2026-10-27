import type { Metadata } from "next";
import Link from "next/link";
import ArticleLayout from "@/components/ArticleLayout";

export const metadata: Metadata = {
  alternates: { canonical: "/resources/blog/procela-free-evaluation" },
  title: "Procela is now free to evaluate — run the whole platform locally",
  description:
    "You can now run the entire Procela platform on your own machine, free, from pre-built images — no source checkout, no build step, no GitHub account, and nothing sent back to us. Here's what's in the evaluation build and how to get it.",
};

export default function Post() {
  return (
    <ArticleLayout
      category="Release"
      title="Procela is now free to evaluate — on your own machine"
      deck="Run the entire platform locally from pre-built images. No sales call, no cloud sandbox, no data leaving your environment."
      meta="By the Procela team · October 2026 · 4 min read"
    >
      <p>
        The most common thing we hear from teams evaluating governance tooling
        is some version of &ldquo;I just want to see the thing run.&rdquo; Not a
        slide deck, not a guided demo on a screen share — the actual product, in
        their hands, long enough to form an opinion. So we made that possible:
        Procela now ships a free evaluation build you can run on your own machine.
      </p>

      <h2>What it is</h2>
      <p>
        The evaluation build is the whole platform — backend, frontend, and
        database — packaged to run locally with Docker Compose from pre-built,
        public images. There&apos;s no source checkout and no build step. You
        don&apos;t need a GitHub account, you don&apos;t need to run{" "}
        <code className="cmd">docker login</code>, and you don&apos;t have to edit
        any configuration: the current build boots as-is.
      </p>
      <p>
        Download the bundle (or clone it), run one{" "}
        <code className="cmd">docker compose</code> command, and open{" "}
        <code className="cmd">http://localhost:3000</code>. Sign in with one of the
        Test Accounts on the login screen and you land in a seeded governance
        program with a full catalog, scorecard, lineage, and audit trail already
        populated — nothing to set up before you can look around.
      </p>

      <div className="kit-callout">
        <div className="kit-text">
          <span className="kit-eyebrow">Free evaluation</span>
          <p>
            Run the whole platform locally from pre-built images — create an
            account and download the evaluation build in a couple of minutes.
          </p>
        </div>
        <Link className="btn-green" href="/download">
          Get the free trial →
        </Link>
      </div>

      <h2>Why it runs on your machine, not ours</h2>
      <p>
        We could have stood up a hosted sandbox. We didn&apos;t, on purpose.
        Procela&apos;s whole posture is that it runs inside your environment —
        metadata only, no data egress — so the honest way to evaluate it is the
        way you&apos;d actually run it: on infrastructure you control, with
        nothing phoning home. The evaluation build keeps that property. Everything
        stays on your machine, which means you can run it on an isolated network
        and see for yourself that nothing leaves it.
      </p>

      <h2>What you can do in the first ten minutes</h2>
      <p>
        The seeded program is a worked example, so you&apos;re not starting from a
        blank slate. You can:
      </p>
      <ul>
        <li>
          Walk the business-process catalog and see how processes map to the
          systems and data behind them.
        </li>
        <li>
          Open the governance council scorecard — tier-1 coverage,
          classification, open issues, and exceptions, rolled up by division.
        </li>
        <li>
          Trace lineage across systems, and check ownership and RACI against real
          names.
        </li>
        <li>
          Look at gap detection, then open the audit log and see every action
          attributed.
        </li>
        <li>
          Try agent access (MCP): hand an AI agent a role-capped, revocable token
          and watch its reads and writes land in the same audit trail as a
          person&apos;s.
        </li>
      </ul>

      <h2>What it isn&apos;t</h2>
      <p>
        We&apos;d rather set expectations than oversell. The evaluation build runs
        on demo data, not yours — it&apos;s there so you can see how the platform
        behaves, not to govern your estate. Connecting your own systems through
        the metadata-only edge connector, wiring up single sign-on, and deploying
        to a server (cloud, on-premise, or air-gapped) are part of a pilot or a
        real deployment. And it&apos;s licensed for evaluation use only. When you
        want to point it at your environment,{" "}
        <Link href="/demo">talk to us</Link> and we&apos;ll scope it with you.
      </p>

      <h2>How to get it</h2>
      <p>
        Head to the{" "}
        <Link href="/download">download page</Link>, create an account, and the
        build downloads right away — with the four-step quick start and an
        evaluation FAQ on the same page. If you&apos;d rather see it driven first,
        the <Link href="/tour">interactive tour</Link> walks the same screens in
        the browser.
      </p>
    </ArticleLayout>
  );
}
