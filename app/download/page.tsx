import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import EvalDownloadGate from "@/components/EvalDownloadGate";
import { EVAL_VERSION, EVAL_SIZE, EVAL_RELEASE_URL } from "@/lib/eval";

export const metadata: Metadata = {
  alternates: { canonical: "/download" },
  title: "Free trial — Evaluate Procela on your own machine",
  description:
    "Download the free Procela evaluation build and run the whole platform locally from pre-built images — no source checkout, no build step. Create an account to get the download link and quick-start steps.",
};

const WHATS_INSIDE = [
  {
    title: "The whole platform, locally",
    body: "Backend, frontend, and database run together from pre-built images — the same application you'd deploy, on your own machine.",
  },
  {
    title: "Pre-loaded demo data",
    body: "Sign in as a demo account and explore a seeded governance program — catalog, scorecard, lineage, and audit trail — with nothing to set up.",
  },
  {
    title: "No source, no build",
    body: "The download is a small Docker Compose bundle that pulls the published images. No repository checkout and no build step.",
  },
  {
    title: "Runs in your environment",
    body: "Everything stays on your machine. Nothing is sent to Procela — it's the same no-egress posture as a real deployment.",
  },
];

const STEPS = [
  {
    stage: "Download",
    title: "Get the bundle and unzip it",
    body: (
      <>
        Create an account below to download <code className="cmd">procela-eval-{EVAL_VERSION}.zip</code>{" "}
        ({EVAL_SIZE}), then unzip it and <code className="cmd">cd procela-eval-{EVAL_VERSION}</code>.
      </>
    ),
  },
  {
    stage: "Configure",
    title: "Set a secret",
    body: (
      <>
        Copy the example env file with <code className="cmd">cp .env.example .env</code> and set{" "}
        <code className="cmd">JWT_SECRET</code> to any long random string.
      </>
    ),
  },
  {
    stage: "Run",
    title: "Start the stack",
    body: (
      <>
        Run <code className="cmd">docker compose -f docker-compose.eval.yml up</code>. Docker pulls
        the published images and brings up the full platform.
      </>
    ),
  },
  {
    stage: "Open",
    title: "Sign in and explore",
    body: (
      <>
        Open <code className="cmd">http://localhost:3000</code> and sign in as a demo account. The
        test mail inbox is at <code className="cmd">http://localhost:8025</code>.
      </>
    ),
  },
];

export default function DownloadPage() {
  return (
    <>
      <SiteHeader />

      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="hero-eyebrow">Free evaluation</span>
          <h1>Try Procela on your own machine</h1>
          <p>
            Run the whole platform locally from pre-built images — no source
            checkout, no build step. Create an account and we&apos;ll send you the
            download link and the quick-start steps. Evaluation use only.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">What you get</span>
          <h2 className="section-title">The full platform, running in minutes</h2>
          <div className="card-grid">
            {WHATS_INSIDE.map((c) => (
              <div className="card" key={c.title}>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
          <div className="kit-callout">
            <div className="kit-text">
              <span className="kit-eyebrow">Before you start</span>
              <p>
                You&apos;ll need Docker Desktop (or Docker Engine with Compose)
                installed. The bundle is tiny — it pulls the application images on
                first run, so the initial start takes a few minutes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">Quick start</span>
          <h2 className="section-title">Four steps to a running instance</h2>
          <div className="steps">
            {STEPS.map((s, i) => (
              <div className="step" key={s.title}>
                <div className="step-num">{i + 1}</div>
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
          <span className="eyebrow">Download</span>
          <h2 className="section-title">Create an account to download</h2>
          <p className="section-body">
            Tell us who you are and the evaluation build downloads right away.
            We&apos;ll email you the link and setup steps so they&apos;re handy
            when you&apos;re ready.
          </p>
          <EvalDownloadGate />
          <p className="eval-fineprint">
            For evaluation use only, under the Evaluation License included in the
            download. Prefer to deploy to a server instead?{" "}
            <Link href="/demo">Talk to us about a pilot</Link>. You can also view
            the release on{" "}
            <a href={EVAL_RELEASE_URL} rel="noopener" target="_blank">
              GitHub
            </a>
            .
          </p>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
