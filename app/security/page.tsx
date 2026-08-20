import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaBand from "@/components/CtaBand";
import Icon, { type IconName } from "@/components/Icon";
import BrowserFrame from "@/components/BrowserFrame";

export const metadata: Metadata = {
  alternates: { canonical: "/security" },
  title: "Security — Procela",
  description:
    "Built for regulated environments: no data egress, a metadata-only edge connector, tamper-evident audit logs, SSO/SCIM/MFA, and ITAR/CMMC/CUI/HIPAA support.",
};

const PRINCIPLES: { icon: IconName; kicker: string; title: string; body: string }[] = [
  {
    icon: "shield",
    kicker: "No data egress",
    title: "Your data never leaves your perimeter",
    body: "The Procela edge connector runs inside your environment and sends only metadata to the platform. Source data stays put — making Procela suitable for the most restricted environments.",
  },
  {
    icon: "edge",
    kicker: "Edge connector",
    title: "Metadata scanning, in your infrastructure",
    body: "The connector deploys via Kubernetes or Helm and reads schema, table, and column metadata where the data lives — never row values. It authenticates with a bearer token over outbound HTTPS and carries a tamper-evident audit log of everything it does.",
  },
  {
    icon: "audit",
    kicker: "Auditability",
    title: "Every action is logged and attributable",
    body: "Classifications, assignments, and policy changes are captured in an append-only trail tied to a named principal — human or AI — so audits become a query.",
  },
  {
    icon: "lock",
    kicker: "Least privilege",
    title: "Explicit authority for every principal",
    body: "The principal model scopes exactly what each steward, owner, and agent may do. AI agents operate under review-gated controls, so proposed changes are approved before they take effect.",
  },
  {
    icon: "security",
    kicker: "Enterprise identity",
    title: "Your directory, your access controls",
    body: "Single sign-on via OIDC or SAML, SCIM provisioning, multi-factor authentication with passkeys (WebAuthn), and role-based access across five tiers. Connector credentials and other secrets are encrypted at rest.",
  },
];

const COMPLIANCE = [
  "ITAR",
  "CMMC",
  "CUI",
  "HIPAA",
  "SOC 2",
  "NIST 800-171",
];

export default function SecurityPage() {
  return (
    <>
      <SiteHeader />

      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="hero-eyebrow">Security</span>
          <h1>Built for the most regulated environments</h1>
          <p>
            Procela was designed for organizations where data can&apos;t move and every
            action has to be accountable — defense, financial services, healthcare,
            and critical infrastructure.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">Security posture</span>
          <h2 className="section-title">Governance without giving up control of your data</h2>
          <div className="feature-list">
            {PRINCIPLES.map((p) => (
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
          <span className="eyebrow">Compliance</span>
          <h2 className="section-title">Aligned to the frameworks you answer to</h2>
          <p className="section-body">
            Procela&apos;s architecture — no data egress, an edge connector over outbound
            HTTPS, and tamper-evident audit trails — is designed to support governance
            programs operating under frameworks like:
          </p>
          <div className="pill-row">
            {COMPLIANCE.map((c) => (
              <span className="pill" key={c}>
                {c}
              </span>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">Accountability by design</span>
          <h2 className="section-title">If it happened, it&apos;s in the record</h2>

          <div className="product-row">
            <div className="product-copy">
              <span className="product-kicker">Audit trail</span>
              <h3>Every change, attributable and time-stamped</h3>
              <p>
                Creates, updates, and deletes across the program are captured in a
                tamper-evident log — the answer to who changed what, and when.
              </p>
            </div>
            <BrowserFrame
              src="/screenshots/audit.webp"
              alt="Procela audit log listing time-stamped create, update, and login events with the responsible actor."
            />
          </div>

          <div className="product-row reverse">
            <div className="product-copy">
              <span className="product-kicker">Gap detection</span>
              <h3>See where governance is thin before an auditor does</h3>
              <p>
                Procela surfaces ownership gaps, ungoverned assets, and coverage holes
                across your program — so you can close them proactively.
              </p>
            </div>
            <BrowserFrame
              src="/screenshots/gaps.webp"
              alt="Procela gap detection view showing total, critical, and warning governance gaps with an ownership-gap breakdown."
            />
          </div>
        </div>
      </section>

      <CtaBand
        title="Review Procela's security architecture"
        body="We'll walk your security and compliance teams through the deployment model and controls."
        primaryLabel="Talk to us"
        secondaryLabel="Explore the platform"
        secondaryHref="/platform"
      />

      <SiteFooter />
    </>
  );
}
