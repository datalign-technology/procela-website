import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaBand from "@/components/CtaBand";
import ProductTour from "@/components/ProductTour";
import { TRAINING_PLAYLIST_URL } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/tour" },
  title: "Product tour — Procela",
  description:
    "Watch a short, silent product tour of Procela — from business process to trusted data: define processes, connect data, find gaps, ask questions, and certify ownership. Or step through the screens yourself.",
};

export default function TourPage() {
  return (
    <>
      <SiteHeader />

      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="hero-eyebrow">Product tour</span>
          <h1>From business process to trusted data</h1>
          <p>
            A quick, silent walk through Procela — define processes, connect data,
            find gaps, ask questions in plain English, and certify ownership. It
            plays on a loop; no sound needed. Prefer to go at your own pace? Step
            through the screens yourself below.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <div className="tour-video">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/tour/Procela_Product_Tour_poster.jpg"
              aria-label="Procela product tour: define processes, connect data, find gaps, certify data"
            >
              <source src="/tour/Procela_Product_Tour.webm" type="video/webm" />
              <source src="/tour/Procela_Product_Tour.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="tour-video-actions">
            <a
              className="btn-outline-lg"
              href={TRAINING_PLAYLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch the full walkthrough →
            </a>
          </div>
        </div>
      </section>

      <hr className="divider" />

      <section className="section">
        <div className="section-inner">
          <span className="eyebrow">Go at your own pace</span>
          <h2 className="section-title">Step through it yourself</h2>
          <p className="section-body">
            Prefer to explore screen by screen? Click through the interactive tour —
            or press play to advance automatically.
          </p>
        </div>
        <div className="tour-wrap">
          <ProductTour />
        </div>
      </section>

      <CtaBand
        title="Want to see it against your own environment?"
        body="A live walkthrough maps Procela to your systems and deployment — or start a pilot and prove it on one of your own domains."
        primaryLabel="Request a demo"
        secondaryLabel="Start a pilot"
        secondaryHref="/pilot"
      />

      <SiteFooter />
    </>
  );
}
