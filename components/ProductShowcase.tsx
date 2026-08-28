"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import BrowserFrame from "./BrowserFrame";

type View = {
  id: string;
  tab: string;
  kicker: string;
  heading: string;
  body: string;
  href: string;
  src: string;
  alt: string;
  url: string;
};

const VIEWS: View[] = [
  {
    id: "systems",
    tab: "Systems",
    kicker: "Catalog",
    heading: "Every system, with an owner",
    body: "Catalog the systems across your estate — each mapped to a named owner and steward, discovered by metadata-only edge agents. No more guessing who's accountable.",
    href: "/platform",
    src: "/screenshots/systems.webp",
    alt: "Procela systems catalog listing enterprise systems with their type, business criticality, and assigned owner.",
    url: "app.procela.ai/systems",
  },
  {
    id: "council",
    tab: "Council scorecard",
    kicker: "Governance",
    heading: "One board your governance council runs on",
    body: "Four measures — tier-1 coverage, classification, open issues and exceptions — auto-derived from live data and rolled up from every division to the enterprise, with a “what moved” and “for the council” narrative you can publish each month.",
    href: "/platform",
    src: "/screenshots/council-scorecard.webp",
    alt: "The Procela Governance Council Scorecard rolling four measures up from each division to the enterprise, with status badges, an auto-derived narrative, and saved monthly snapshots.",
    url: "app.procela.ai/council-scorecard",
  },
  {
    id: "scorecard",
    tab: "Maturity",
    kicker: "Maturity",
    heading: "Know exactly where your program stands",
    body: "A governance maturity scorecard across every dimension — process documentation, data governance, domain and people coverage — so you can show progress and see what to fix next.",
    href: "/platform",
    src: "/screenshots/scorecard.webp",
    alt: "Procela governance maturity scorecard showing an overall maturity score with dimension breakdowns for process documentation, data governance, domain coverage, governance structure, and people coverage.",
    url: "app.procela.ai/scorecard",
  },
  {
    id: "audit",
    tab: "Audit log",
    kicker: "Accountability",
    heading: "If it happened, it's in the record",
    body: "Every classification, assignment and policy change is captured in a tamper-evident, attributable log tied to a named principal — human or AI. Audits become a query.",
    href: "/security",
    src: "/screenshots/audit.webp",
    alt: "Procela audit log listing time-stamped create, update, and login events with the responsible actor.",
    url: "app.procela.ai/audit-log",
  },
  {
    id: "enterprise",
    tab: "Enterprise view",
    kicker: "Visibility",
    heading: "The whole estate in one view",
    body: "See systems, data assets, domains and people connected across the organization — the full picture of your governance program, not scattered spreadsheets.",
    href: "/platform",
    src: "/screenshots/enterprise.webp",
    alt: "Procela enterprise view showing systems, data assets, domains, and people connected across the organization.",
    url: "app.procela.ai/enterprise-view",
  },
];

export default function ProductShowcase() {
  const [active, setActive] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const view = VIEWS[active];

  const onKeyDown = (e: React.KeyboardEvent) => {
    let next = active;
    if (e.key === "ArrowRight") next = (active + 1) % VIEWS.length;
    else if (e.key === "ArrowLeft") next = (active - 1 + VIEWS.length) % VIEWS.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = VIEWS.length - 1;
    else return;
    e.preventDefault();
    setActive(next);
    tabRefs.current[next]?.focus();
  };

  return (
    <div className="showcase">
      <div className="tabs" role="tablist" aria-label="Product views" onKeyDown={onKeyDown}>
        {VIEWS.map((v, i) => (
          <button
            key={v.id}
            ref={(el) => {
              tabRefs.current[i] = el;
            }}
            id={`showcase-tab-${v.id}`}
            role="tab"
            aria-selected={active === i}
            aria-controls={`showcase-panel-${v.id}`}
            tabIndex={active === i ? 0 : -1}
            className={`tab${active === i ? " active" : ""}`}
            onClick={() => setActive(i)}
          >
            {v.tab}
          </button>
        ))}
      </div>

      <div
        className="tab-panel showcase-panel"
        role="tabpanel"
        id="showcase-panel"
        aria-labelledby={`showcase-tab-${view.id}`}
      >
        <div className="showcase-copy" key={view.id}>
          <span className="product-kicker">{view.kicker}</span>
          <div className="tab-body-heading">{view.heading}</div>
          <p className="tab-body-text">{view.body}</p>
          <Link href={view.href} className="tab-link">
            Explore the platform →
          </Link>
        </div>
        {/* All frames are mounted and stacked so they preload when the section
            scrolls into view — switching tabs is then instant, with no flash. */}
        <div className="showcase-frames">
          {VIEWS.map((v, i) => (
            <div
              className={`sc-frame${active === i ? " active" : ""}`}
              key={v.id}
              aria-hidden={active !== i}
            >
              <BrowserFrame src={v.src} alt={v.alt} url={v.url} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
