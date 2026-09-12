import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaBand from "@/components/CtaBand";
import IndustryScene from "@/components/IndustryScene";
import { INDUSTRIES } from "@/lib/industries";

export const metadata: Metadata = {
  alternates: { canonical: "/industries" },
  title: "Industries — Procela",
  description:
    "Data governance that connects processes, systems, data and owners into one accountable model — deployed on-premises or air-gapped. Built for regulated industries like utilities & energy, financial services, healthcare, government and manufacturing, and a fit for any organization.",
};

export default function IndustriesPage() {
  return (
    <>
      <SiteHeader />

      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="hero-eyebrow">Industries</span>
          <h1>Governance that connects your processes, systems and data &mdash; wherever you operate</h1>
          <p>
            Procela connects processes, systems, data and owners into one
            accountable model &mdash; value that fits any organization. It matters
            most in regulated, data-intensive worlds that can&apos;t send their
            data to someone else&apos;s cloud, so those are where we go deep:
          </p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <div className="ind-grid">
            {INDUSTRIES.map((ind) => (
              <Link
                className="ind-card"
                href={`/industries/${ind.slug}`}
                key={ind.slug}
              >
                <div className="ind-card-vis">
                  <IndustryScene slug={ind.slug} className="ind-scene" />
                </div>
                <h3>{ind.name}</h3>
                <p>{ind.blurb}</p>
                <div className="ind-regs">
                  {ind.regs.map((r) => (
                    <span className="ind-reg" key={r}>
                      {r}
                    </span>
                  ))}
                </div>
                <span className="ind-explore">
                  Explore {ind.name} <span aria-hidden="true">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Built for your constraints, not your category"
        body="Regulated, air-gapped, sovereign, or just complex — Procela connects your data to the people and processes behind it, whatever industry you call home. Let's map it to yours."
        primaryLabel="Request a demo"
        secondaryLabel="Explore the platform"
        secondaryHref="/platform"
      />

      <SiteFooter />
    </>
  );
}
