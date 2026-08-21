import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaBand from "@/components/CtaBand";
import IndustryIcon from "@/components/IndustryIcon";
import { INDUSTRIES } from "@/lib/industries";

export const metadata: Metadata = {
  alternates: { canonical: "/industries" },
  title: "Industries — Procela",
  description:
    "Data governance for regulated, data-intensive industries — utilities & energy, financial services, healthcare, government, and manufacturing — deployed on-premises or air-gapped.",
};

export default function IndustriesPage() {
  return (
    <>
      <SiteHeader />

      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="hero-eyebrow">Industries</span>
          <h1>Governance for the industries that can&apos;t afford to get data wrong</h1>
          <p>
            Procela is built for regulated, data-intensive organizations that need
            accountability and lineage — and can&apos;t send their data to someone
            else&apos;s cloud to get it. Pick your world:
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
                <div className="ind-card-top">
                  <span className="ind-ico">
                    <IndustryIcon slug={ind.slug} size={24} />
                  </span>
                  <h3>{ind.name}</h3>
                </div>
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
        title="Don't see your industry?"
        body="If your data is regulated, sensitive, or simply can't leave your environment, Procela fits. Let's map it to your world."
        primaryLabel="Request a demo"
        secondaryLabel="Explore the platform"
        secondaryHref="/platform"
      />

      <SiteFooter />
    </>
  );
}
