import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  alternates: { canonical: "/careers" },
  title: "Careers — Procela",
  description:
    "Help build the system of record for data governance. Procela is an early team building governance for regulated environments — see our open roles and how to apply.",
};

const VALUES = [
  {
    kicker: "Ownership",
    title: "You own real problems",
    body: "We're a small team, so scope is wide and impact is direct. You'll own work end to end — from the customer problem to what ships — not a narrow slice of someone else's plan.",
  },
  {
    kicker: "Substance",
    title: "Hard problems, done properly",
    body: "Metadata-only architecture, no data egress, tamper-evident audit trails, AI under review-gated controls. Governance for regulated environments rewards care over shortcuts.",
  },
  {
    kicker: "Pragmatism",
    title: "Ship, learn, repeat",
    body: "We favor working software and real customer feedback over grand plans. Small, honest increments that add up — the same way we tell customers to run a governance program.",
  },
  {
    kicker: "Trust",
    title: "Remote-friendly and low-ceremony",
    body: "Clear goals, written communication, and the autonomy to do your best work. We keep meetings few and decisions transparent.",
  },
];

type Job = {
  slug: string;
  title: string;
  tags: string[];
  location: string;
  summary: string;
  responsibilities: string[];
  qualifications: string[];
};

const JOBS: Job[] = [
  {
    slug: "principal-sales-engineer",
    title: "Principal Sales Engineer",
    tags: ["Remote", "Contract"],
    location:
      "Remote (United States) — with willingness to work on-site in the Greater Orlando area and travel to customer locations as needed.",
    summary:
      "The Principal Sales Engineer partners closely with sales leadership and account teams to understand customer challenges, design solutions on the Procela platform, and deliver compelling technical presentations and demonstrations. You'll lead discovery sessions, translate complex data governance requirements into clear architectures, and provide pre-sales technical guidance for prospects in regulated, data-intensive industries.",
    responsibilities: [
      "Partner with sales leadership and account teams to understand customer challenges and design solutions on the Procela platform.",
      "Lead discovery sessions and deliver technical presentations and product demonstrations.",
      "Translate complex data governance requirements into clear architectures and pre-sales technical guidance.",
      "Prepare solution proposals and respond to technical RFPs and RFIs.",
      "Support proof-of-concept engagements for prospects in regulated, data-intensive industries.",
      "Collaborate with product and engineering teams on feedback from the field.",
      "Mentor other sales engineers and contribute to technical enablement materials.",
      "Build trusted relationships with customer stakeholders — business leaders, IT, security, and data governance teams.",
    ],
    qualifications: [
      "Strong sales engineering and technical support skills, with experience designing and explaining complex enterprise solutions.",
      "Effective communication and customer-service skills, and the ability to work with both technical and non-technical stakeholders.",
      "Proven sales skills, including opportunity qualification, solution positioning, and support for closing strategic deals.",
      "Experience in data governance, enterprise data platforms, or AI/ML solutions in regulated industries is highly beneficial.",
      "Ability to translate business requirements into technical architectures and clearly articulate trade-offs and implementation paths.",
      "Demonstrated experience leading technical sales cycles, proof-of-concept projects, and executive-level presentations.",
      "Bachelor's degree in Computer Science, Engineering, Information Systems, or a related field — or equivalent practical experience.",
    ],
  },
];

function applyHref(job: Job) {
  const subject = encodeURIComponent(`Application: ${job.title}`);
  return `mailto:careers@procela.ai?subject=${subject}`;
}

export default function CareersPage() {
  return (
    <>
      <SiteHeader />

      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="hero-eyebrow">Careers</span>
          <h1>Build the system of record for data governance</h1>
          <p>
            Procela helps organizations know who owns their data and how it all
            fits together — processes, systems, data, and the people accountable
            for them. We&apos;re early, deliberate, and building for environments
            where accountability actually matters.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">Why Procela</span>
          <h2 className="section-title">What it&apos;s like to work here</h2>
          <p className="section-body">
            We&apos;re a small team solving a real, unglamorous problem for
            regulated industries. That means wide ownership, a high bar for craft,
            and a bias toward shipping.
          </p>
          <div className="card-grid">
            {VALUES.map((v) => (
              <div className="card" key={v.kicker}>
                <span className="card-kicker">{v.kicker}</span>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">Open roles</span>
          <h2 className="section-title">Where we&apos;re hiring</h2>

          {JOBS.map((job) => (
            <article className="job" key={job.slug} id={job.slug}>
              <h3 className="job-title">{job.title}</h3>
              <div className="pill-row">
                {job.tags.map((t) => (
                  <span className="pill" key={t}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="prose">
                <p>{job.summary}</p>
                <h2>What you&apos;ll do</h2>
                <ul>
                  {job.responsibilities.map((r) => (
                    <li key={r}>{r}</li>
                  ))}
                </ul>
                <h2>What we&apos;re looking for</h2>
                <ul>
                  {job.qualifications.map((q) => (
                    <li key={q}>{q}</li>
                  ))}
                </ul>
                <h2>Location</h2>
                <p>{job.location}</p>
                <h2>How to apply</h2>
                <p>
                  Email{" "}
                  <a href={applyHref(job)}>careers@procela.ai</a> with a short
                  intro, your resume or a link to your work, and anything that
                  shows how you think about technical selling. We read every note.
                </p>
              </div>
              <a className="btn-green" href={applyHref(job)}>
                Apply for {job.title}
              </a>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        title="Don't see the right role?"
        body="We're always glad to hear from strong people who care about this problem — a couple of paragraphs on what you'd want to build and a link to your work is plenty."
        primaryLabel="Email careers@procela.ai"
        primaryHref="mailto:careers@procela.ai"
        secondaryLabel="See what we're building"
        secondaryHref="/platform"
      />

      <SiteFooter />
    </>
  );
}
