import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaBand from "@/components/CtaBand";
import ProductTour from "@/components/ProductTour";

export const metadata: Metadata = {
  alternates: { canonical: "/tour" },
  title: "Product tour — Procela",
  description:
    "Take a self-guided, interactive tour of Procela — the council scorecard, enterprise view, process catalog, data assets, lineage, gap detection, and audit log — no signup required.",
};

export default function TourPage() {
  return (
    <>
      <SiteHeader />

      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="hero-eyebrow">Interactive product tour</span>
          <h1>See Procela, one screen at a time</h1>
          <p>
            A self-guided walk through the product — from the governance council
            scorecard to the audit log. Step through at your own pace, or press play.
            No signup, no sales call.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="tour-wrap">
          <ProductTour />
        </div>
      </section>

      <CtaBand
        title="Want to see it against your own environment?"
        body="A live walkthrough with our team maps Procela to your systems, domains, and deployment — cloud, on-premise, or air-gapped."
        primaryLabel="Request a demo"
        secondaryLabel="Explore the platform"
        secondaryHref="/platform"
      />

      <SiteFooter />
    </>
  );
}
