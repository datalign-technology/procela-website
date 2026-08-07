"use client";

import { useState } from "react";
import Link from "next/link";

type Row = {
  label: string;
  badge: string;
  active?: boolean;
  gray?: boolean;
  bordered?: boolean;
};

type Panel = {
  tab: string;
  heading: string;
  body: string;
  link: string;
  href: string;
  rows: Row[];
  arrows?: number[]; // indices after which to render a downward arrow
  note?: string;
};

const PANELS: Panel[] = [
  {
    tab: "Business-process catalog",
    heading: "Governance mapped to how your business runs",
    body: "Procela maps value streams, processes, and steps to the data and systems behind each one — building a governed catalog alongside your databases and warehouses, not on top of them.",
    link: "See the connector architecture →",
    href: "/integrations",
    arrows: [1, 2],
    rows: [
      { label: "Snowflake — schema & column metadata", badge: "input", gray: true },
      { label: "PostgreSQL — schema & column metadata", badge: "input", gray: true },
      {
        label: "Procela — business-process catalog",
        badge: "active",
        active: true,
        bordered: true,
      },
      { label: "Tamper-evident audit trail", badge: "output", gray: true },
    ],
  },
  {
    tab: "Stewardship & ownership",
    heading: "Clear ownership across every data domain",
    body: "Assign data owners, domain stewards, and AI agents to assets with RACI and DAMA roles and explicit decision rights. Procela's principal model supports human and AI participants in governance roles, with agents that are review-gated.",
    link: "Learn about the principal model →",
    href: "/platform",
    rows: [
      { label: "Hull #789 — Production Data Domain", badge: "owner assigned", active: true },
      { label: "SWBS 500 — Engineering Assets", badge: "steward active", active: true },
      { label: "CUI Financial Records", badge: "pending review", gray: true },
      { label: "AI Agent — Classification Review", badge: "review-gated", active: true },
    ],
  },
  {
    tab: "Policies & controls",
    heading: "Policies that flow from business rules, not spreadsheets",
    body: "Define governance policies and controls in plain language. Procela records them against the assets they govern, tracks them alongside gaps and issues, and maintains a full audit trail of every change and decision.",
    link: "See the policy workflow →",
    href: "/platform",
    rows: [
      { label: "CUI data — restricted access policy", badge: "recorded", active: true },
      { label: "PII retention — 90-day expiry rule", badge: "tracked", active: true },
      { label: "ITAR export classification check", badge: "in review", gray: true },
      { label: "CMMC audit trail — all change events", badge: "logging", active: true },
    ],
  },
  {
    tab: "Edge connector",
    heading: "Scan your sources without moving your data",
    body: "The on-prem edge connector deploys inside your environment via Kubernetes or Helm. It reads schema, table, and column metadata plus row counts — never values — over outbound HTTPS with a bearer token, so your data never leaves the perimeter.",
    link: "Read the edge connector spec →",
    href: "/security",
    note: "✓ metadata only · outbound HTTPS · no data egress",
    rows: [
      { label: "Edge Connector — On-premise PostgreSQL", badge: "connected", active: true },
      { label: "Edge Connector — On-premise Oracle DB", badge: "connected", active: true },
      { label: "Edge Connector — Snowflake warehouse", badge: "deploying", gray: true },
    ],
  },
];

export default function PlatformTabs() {
  const [active, setActive] = useState(0);
  const panel = PANELS[active];

  return (
    <>
      <div className="tabs" role="tablist" aria-label="Platform capabilities">
        {PANELS.map((p, i) => (
          <button
            key={p.tab}
            role="tab"
            aria-selected={active === i}
            className={`tab${active === i ? " active" : ""}`}
            onClick={() => setActive(i)}
          >
            {p.tab}
          </button>
        ))}
      </div>

      <div className="tab-panel" role="tabpanel">
        <div>
          <div className="tab-body-heading">{panel.heading}</div>
          <p className="tab-body-text">{panel.body}</p>
          <Link href={panel.href} className="tab-link">
            {panel.link}
          </Link>
        </div>
        <div className="tab-visual">
          {panel.rows.map((row, i) => (
            <div key={row.label}>
              <div
                className="tv-row"
                style={row.bordered ? { border: "1px solid var(--border-green)" } : undefined}
              >
                <span className={`tv-dot${row.gray ? " gray" : ""}`} />
                <span className="tv-label">{row.label}</span>
                <span className={`tv-badge${row.gray ? " gray" : ""}`}>{row.badge}</span>
              </div>
              {panel.arrows?.includes(i) && <div className="tv-arrow">↓</div>}
            </div>
          ))}
          {panel.note && <div className="tv-note">{panel.note}</div>}
        </div>
      </div>
    </>
  );
}
