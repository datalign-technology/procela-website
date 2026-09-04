import type { Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import CtaBand from "@/components/CtaBand";
import { UPDATES } from "@/lib/updates";

export const metadata: Metadata = {
  alternates: { canonical: "/updates" },
  title: "Updates — Procela",
  description:
    "The latest from Procela — new writing, product updates, and announcements on business-process-first data governance.",
};

export default function UpdatesPage() {
  return (
    <>
      <SiteHeader />

      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="hero-eyebrow">Updates</span>
          <h1>What&apos;s new at Procela</h1>
          <p>
            New writing, product updates, and announcements — the latest on
            business-process-first data governance.
          </p>
        </div>
      </div>

      <section className="section">
        <div className="section-inner">
          <div className="card-grid">
            {UPDATES.map((u) => {
              const body = (
                <>
                  <span className="card-kicker">
                    {u.label} · {u.date}
                  </span>
                  <h3>{u.title}</h3>
                  <span className="card-link">
                    {u.external ? "Read ↗" : "Read →"}
                  </span>
                </>
              );
              return u.external ? (
                <a
                  className="card"
                  href={u.href}
                  key={u.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {body}
                </a>
              ) : (
                <Link className="card" href={u.href} key={u.href}>
                  {body}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand
        title="See Procela against your environment"
        body="Prefer a conversation? Let's talk about your governance program."
        secondaryLabel="Read the blog"
        secondaryHref="/resources/blog"
      />

      <SiteFooter />
    </>
  );
}
