import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import DemoForm from "@/components/DemoForm";

export const metadata: Metadata = {
  alternates: { canonical: "/demo" },
  title: "Request a demo — Procela",
  description:
    "See Procela against your environment. Request a walkthrough of the business-process-first data governance platform.",
};

export default function DemoPage() {
  return (
    <>
      <SiteHeader />

      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="hero-eyebrow">Request a demo</span>
          <h1>Let&apos;s talk about your environment</h1>
          <p>
            Procela is built for regulated, complex enterprises. Tell us a little
            about your stack and we&apos;ll tailor the walkthrough.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <DemoForm />
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
