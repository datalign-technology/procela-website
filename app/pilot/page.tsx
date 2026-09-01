import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import DemoForm from "@/components/DemoForm";
import Icon, { type IconName } from "@/components/Icon";

export const metadata: Metadata = {
  alternates: { canonical: "/pilot" },
  title: "Start a pilot — Procela",
  description:
    "Run a scoped, time-boxed Procela pilot on one high-priority data domain — deployed in your own environment (cloud, on-premise, or air-gapped) and guided by our team to an audit-ready baseline.",
};

const INCLUDES: { icon: IconName; title: string; body: string }[] = [
  {
    icon: "layers",
    title: "Scoped to one domain",
    body: "We start with a single high-priority data domain — the business-process catalog, process-to-data mapping, ownership and RACI — so you see real governance, not a sandbox.",
  },
  {
    icon: "shield",
    title: "In your environment",
    body: "Deployed where your data lives — cloud, on-premise, or fully air-gapped. Edge agents read metadata in place; nothing leaves your perimeter.",
  },
  {
    icon: "stewardship",
    title: "Guided by our team",
    body: "We stand it up with you — connecting sources, seeding the catalog, and mapping owners — so your team learns the platform on real work.",
  },
  {
    icon: "audit",
    title: "An audit-ready baseline",
    body: "You finish with a working governance baseline you keep — coverage, classification, ownership, and a complete audit trail — not a demo that disappears.",
  },
];

const PHASES = [
  {
    n: "01",
    title: "Scope",
    body: "We pick one domain and the sources in play, and agree what an audit-ready baseline looks like for it. A short call, not a procurement marathon.",
  },
  {
    n: "02",
    title: "Deploy",
    body: "Procela goes into your environment via Helm or Kubernetes — cloud, on-premise, or air-gapped. The edge connector reads metadata where the data lives.",
  },
  {
    n: "03",
    title: "Stand up the baseline",
    body: "Together we catalog systems and assets, classify and assign owners, and record the policies and controls that govern them — the DG Foundation track, on your data.",
  },
  {
    n: "04",
    title: "Review & plan",
    body: "We walk the results with your stakeholders — coverage, gaps, and the audit trail — and map how the program expands from here across domains and organizations.",
  },
];

export default function PilotPage() {
  return (
    <>
      <SiteHeader />

      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="hero-eyebrow">Start a pilot</span>
          <h1>Prove Procela on your own data — in weeks, not quarters</h1>
          <p>
            A pilot is a scoped, time-boxed proof of value: one high-priority
            domain, deployed inside your environment and guided by our team to a
            real, audit-ready governance baseline you keep.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">What&apos;s included</span>
          <h2 className="section-title">A real baseline, not a sandbox</h2>
          <p className="section-body">
            Because Procela runs where your data lives, a pilot is the honest way
            to evaluate it — on your systems, your domains, and your deployment
            model.
          </p>
          <div className="card-grid">
            {INCLUDES.map((c) => (
              <div className="card" key={c.title}>
                <div className="feature-icon">
                  <Icon name={c.icon} size={22} />
                </div>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">How the pilot runs</span>
          <h2 className="section-title">Four steps to a working baseline</h2>
          <div className="steps">
            {PHASES.map((s) => (
              <div className="step" key={s.n}>
                <div className="step-num">{s.n}</div>
                <div>
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
          <span className="eyebrow">Start a pilot</span>
          <h2 className="section-title">Tell us where you&apos;d start</h2>
          <p className="section-body">
            Share the domain you&apos;d pilot first and how you&apos;d want to
            deploy. We&apos;ll scope it with you and map it to your environment.
          </p>
          <DemoForm intent="pilot" />
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
