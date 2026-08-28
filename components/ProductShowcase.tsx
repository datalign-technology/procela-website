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
    id: "enterprise",
    tab: "Enterprise view",
    kicker: "Visibility",
    heading: "The whole estate in one view",
    body: "See processes, systems, data assets, domains and people connected across the organization — the full picture of your governance program, not scattered spreadsheets.",
    href: "/platform",
    src: "/screenshots/enterprise.webp",
    alt: "Procela enterprise view diagram showing processes, systems, data assets, domains, and people connected across the organization.",
    url: "app.procela.ai/enterprise-view",
  },
  {
    id: "processes",
    tab: "Processes",
    kicker: "Operating model",
    heading: "The business processes your data runs on",
    body: "Map value streams to processes, sub-processes and activities — each with a named owner, responsible role and the systems and data assets it touches. Governance anchored to how the business actually works, not an abstract diagram.",
    href: "/platform",
    src: "/screenshots/processes.webp",
    alt: "Procela process catalog showing a Value Stream, Process, Sub-Process and Activity hierarchy, each with an owner, responsible role, and the systems and data assets it touches.",
    url: "app.procela.ai/processes",
  },
  {
    id: "data-assets",
    tab: "Data assets",
    kicker: "Catalog",
    heading: "Every data asset, classified and owned",
    body: "One registry for every data asset — with sensitivity classification, a governance tier, a named owner, and the health rules that read over it. Discovered automatically, or added by hand.",
    href: "/platform",
    src: "/screenshots/data-assets.webp",
    alt: "Procela data asset registry listing assets with sensitivity tags, governance tier, domain, and owner.",
    url: "app.procela.ai/data-assets",
  },
  {
    id: "systems",
    tab: "Systems",
    kicker: "Inventory",
    heading: "Every system, with an owner",
    body: "Catalog the systems across your estate — each mapped to a named owner and steward, discovered by metadata-only edge agents. No more guessing who's accountable.",
    href: "/platform",
    src: "/screenshots/systems.webp",
    alt: "Procela systems catalog listing enterprise systems with their type, business criticality, and assigned owner.",
    url: "app.procela.ai/systems",
  },
  {
    id: "audit",
    tab: "Audit log",
    kicker: "Accountability",
    heading: "If it happened, it's in the record",
    body: "Every classification, assignment and policy change is captured in a tamper-evident, attributable log tied to a named principal — human or AI. Audits become a query.",
    href: "/security",
    src: "/screenshots/audit.webp",
    alt: "Procela audit log listing time-stamped create, update, sensitivity, and login events with the responsible actor.",
    url: "app.procela.ai/audit-log",
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
