import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import EvalDownloadGate from "@/components/EvalDownloadGate";
import Faq from "@/components/Faq";
import {
  EVAL_FILE_NAME,
  EVAL_REPO_URL,
  EVAL_CLONE_URL,
} from "@/lib/eval";

export const metadata: Metadata = {
  alternates: { canonical: "/download" },
  title: "Free trial — Evaluate Procela on your own machine",
  description:
    "Download the free Procela evaluation build and run the whole platform locally from pre-built images — no source checkout, no build step, no GitHub account. Create an account to get the download link and quick-start steps.",
};

const WHATS_INSIDE = [
  {
    title: "The whole platform, locally",
    body: "Backend, frontend, and database run together from pre-built images — the same application you'd deploy, on your own machine.",
  },
  {
    title: "Pre-loaded demo data",
    body: "Sign in with a Test Account and explore a seeded governance program — catalog, scorecard, lineage, and audit trail — with nothing to set up.",
  },
  {
    title: "No source, no build, no login",
    body: "The download is a small bundle that pulls public images. No private repository, no GitHub account, and no docker login required.",
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
        Create an account below to download <code className="cmd">{EVAL_FILE_NAME}</code>, then unzip
        it and open the folder. Prefer git? <code className="cmd">git clone {EVAL_CLONE_URL}</code>.
      </>
    ),
  },
  {
    stage: "Configure · optional",
    title: "No edits needed",
    body: (
      <>
        The build boots with no manual configuration. Optionally,{" "}
        <code className="cmd">cp .env.example .env</code> and set{" "}
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
        the public images and brings up the full platform — no <code className="cmd">docker login</code>.
      </>
    ),
  },
  {
    stage: "Open",
    title: "Sign in and explore",
    body: (
      <>
        Open <code className="cmd">http://localhost:3000</code> and sign in using the Test Accounts
        on the login screen.
      </>
    ),
  },
];

const EVAL_FAQ: { q: string; a: string }[] = [
  {
    q: "What do I need to run the evaluation?",
    a: "Docker Desktop (or Docker Engine with Compose), on macOS, Windows, or Linux. You don't need a GitHub account, and you don't need to run docker login — the images are public. The bundle pulls them on first run, so the initial start takes a few minutes.",
  },
  {
    q: "Do I have to edit any configuration?",
    a: "No. The 0.1.2 compose boots with no manual edits. Copying .env.example to .env and setting your own JWT_SECRET is optional — do it only if you want to.",
  },
  {
    q: "How do I sign in once it's running?",
    a: "Open http://localhost:3000 and use the Test Accounts shown on the sign-in screen. The build ships with a seeded demo governance program, so there's a full catalog, scorecard, lineage, and audit trail to explore right away.",
  },
  {
    q: "Does the evaluation send any of my data to Procela?",
    a: "No. It runs entirely on your own machine. Nothing is sent back to Procela — it's the same no-egress posture as a real deployment, so you can run it on an isolated network.",
  },
  {
    q: "Can I connect my own data sources?",
    a: "The evaluation comes pre-loaded with a demo program so you can explore immediately. Connecting your own systems through the metadata-only edge connector is part of a pilot or deployment — tell us about your environment and we'll scope it with you.",
  },
  {
    q: "How is the evaluation different from a production deployment?",
    a: "The evaluation uses Test Accounts and runs locally from pre-built images with demo data. A production deployment adds your single sign-on, your own data sources via the edge connector, and cloud, on-premise, or air-gapped deployment via Helm and Kubernetes — with support and a defined SLA.",
  },
];

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: EVAL_FAQ.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
};

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
            checkout, no build step, no GitHub account. Create an account and
            we&apos;ll send you the download link and the quick-start steps.
            Evaluation use only.
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
                installed. The bundle is small — it pulls the public application
                images on first run, so the initial start takes a few minutes.
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
          <div className="eval-accounts">
            <span className="step-stage">Test Accounts</span>
            <p>
              The sign-in screen offers one-click Test Accounts — no password.
              Start with the admin to see the whole program, then switch roles to
              see how it looks to different owners.
            </p>
            <ul>
              <li>
                <strong>Super admin</strong> — full access to everything: catalog,
                scorecard, lineage, audit, and settings.
              </li>
              <li>
                <strong>Editor (Chief Data Officer)</strong> — a scoped,
                role-specific view of the program.
              </li>
            </ul>
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
            For evaluation use only. Prefer to deploy to a server instead?{" "}
            <Link href="/demo">Talk to us about a pilot</Link>. You can also browse
            the evaluation repo on{" "}
            <a href={EVAL_REPO_URL} rel="noopener" target="_blank">
              GitHub
            </a>
            .
          </p>
        </div>
      </section>

      <hr className="divider" />

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">Questions</span>
          <h2 className="section-title">Evaluation FAQ</h2>
          <Faq items={EVAL_FAQ} />
        </div>
      </section>

      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </>
  );
}
