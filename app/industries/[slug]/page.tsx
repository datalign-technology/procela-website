import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaBand from "@/components/CtaBand";
import Icon, { type IconName } from "@/components/Icon";
import IndustryIcon from "@/components/IndustryIcon";
import { INDUSTRIES, getIndustry } from "@/lib/industries";

type Params = { params: { slug: string } };

const HELP_ICONS: IconName[] = ["layers", "integration", "shield"];

export function generateStaticParams() {
  return INDUSTRIES.map((ind) => ({ slug: ind.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const ind = getIndustry(params.slug);
  if (!ind) return {};
  return {
    alternates: { canonical: `/industries/${ind.slug}` },
    title: `${ind.name} — Procela`,
    description: ind.metaDescription,
  };
}

export default function IndustryPage({ params }: Params) {
  const ind = getIndustry(params.slug);
  if (!ind) notFound();

  return (
    <>
      <SiteHeader />

      <div className="ind-hero">
        <div className="ind-hero-inner">
          <div>
            <div className="crumb">
              <Link href="/industries">Industries</Link>
              <span aria-hidden="true">›</span>
              <span>{ind.name}</span>
            </div>
            <h1>{ind.h1}</h1>
            <p className="ind-lead">{ind.lead}</p>
            <div className="hero-actions">
              <Link className="btn-primary-lg" href="/demo">
                Request a demo
              </Link>
              <Link className="btn-outline-lg" href="/platform">
                Explore the platform
              </Link>
            </div>
            <div className="pill-row" style={{ marginTop: "1.75rem" }}>
              {ind.regs.map((r) => (
                <span className="pill" key={r}>
                  {r}
                </span>
              ))}
            </div>
          </div>
          <div className="ind-hero-vis">
            <span className="big">
              <IndustryIcon slug={ind.slug} size={52} />
            </span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">The challenge</span>
          <h2 className="section-title">What makes governance hard here</h2>
          <div className="detail-cards">
            {ind.challenges.map((c) => (
              <div className="detail-card warn" key={c.title}>
                <div className="detail-ico">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M12 3 21 19H3L12 3Z" />
                    <path d="M12 10v4M12 17v.01" />
                  </svg>
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
          <span className="eyebrow">How Procela helps</span>
          <h2 className="section-title">Governance built for your constraints</h2>
          <div className="detail-cards">
            {ind.helps.map((h, i) => (
              <div className="detail-card" key={h.title}>
                <div className="detail-ico">
                  <Icon name={HELP_ICONS[i]} size={20} />
                </div>
                <h3>{h.title}</h3>
                <p>{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="value-band">
        <div className="value-inner">
          <span className="eyebrow">The value</span>
          <h2>{ind.valueHeading}</h2>
          <div className="value-outcomes">
            {ind.outcomes.map((o) => (
              <div className="value-outcome" key={o}>
                <span className="vk">
                  <Icon name="check" size={18} />
                </span>
                <span>{o}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <CtaBand
        title={`See Procela in your ${ind.shortName} environment`}
        body="A 30-minute walkthrough, mapped to your own systems."
        primaryLabel="Request a demo"
        secondaryLabel="Explore the platform"
        secondaryHref="/platform"
      />

      <SiteFooter />
    </>
  );
}
