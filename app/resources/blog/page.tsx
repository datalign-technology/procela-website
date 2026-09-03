import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  alternates: { canonical: "/resources/blog" },
  title: "Blog — Procela",
  description:
    "Perspectives from the Procela team on data governance, AI participants in stewardship, and running programs in regulated environments.",
};

const POSTS = [
  {
    date: "September 2026",
    title: "What belongs on a governance scorecard",
    body: "Most governance dashboards measure activity, not outcomes. How to build a scorecard leadership actually trusts and acts on — plus a five-measure starter set.",
    href: "/resources/blog/what-belongs-on-a-governance-scorecard",
  },
  {
    date: "September 2026",
    title: "Govern the process, not just the data",
    body: "A finished catalog that nobody trusts is a common place to get stuck. Why starting from your business processes makes governance easier — with practical steps to try this week.",
    href: "/resources/blog/govern-the-process-not-just-the-data",
  },
  {
    date: "July 2026",
    title: "Why governance programs stall — and what actually gets them running",
    body: "Most programs don't fail for lack of tools. They fail because the program never becomes operational. Here's the pattern — and the fix.",
    href: "/resources/blog/why-governance-programs-stall",
  },
  {
    date: "June 2026",
    title: "AI agents are joining your governance program. Keep them accountable.",
    body: "Letting AI classify data or propose owners is only safe if every action is attributable. A look at accountable autonomy.",
    href: "/resources/blog/keeping-ai-agents-accountable",
  },
  {
    date: "May 2026",
    title: "The audit you can't cram for: making compliance continuous",
    body: "If audit prep is a project, you're already behind. How a closed governance loop turns audits into a query.",
    href: "/resources/blog/continuous-compliance",
  },
];

export default function BlogPage() {
  return (
    <>
      <SiteHeader />

      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="hero-eyebrow">Blog</span>
          <h1>From the team</h1>
          <p>
            Perspectives on data governance, AI participants in stewardship, and
            lessons from regulated environments.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">Latest</span>
          <h2 className="section-title">Recent posts</h2>
          <div className="card-grid">
            {POSTS.map((p) => (
              <Link className="card" href={p.href} key={p.title}>
                <span className="card-kicker">{p.date}</span>
                <h3>{p.title}</h3>
                <p>{p.body}</p>
                <span className="card-link">Read →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="See Procela against your environment"
        body="Prefer a conversation to a blog post? Let's talk about your governance program."
        secondaryLabel="Back to resources"
        secondaryHref="/resources"
      />

      <SiteFooter />
    </>
  );
}
