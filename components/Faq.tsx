"use client";

import { useState } from "react";

const ITEMS: { q: string; a: string }[] = [
  {
    q: "What does business-process-first governance actually mean?",
    a: "Procela starts with how your business actually works — value streams, processes, sub-processes, and steps — and maps the data and systems behind each one. Instead of a static framework, you get owners, RACI roles, policies, controls, lineage, and gaps tied to the processes they govern, all recorded with a tamper-evident audit trail.",
  },
  {
    q: "How does Procela differ from a data catalog?",
    a: "A catalog inventories your data assets. Procela is business-process-first — it maps value streams, processes, and steps to the data and systems behind them, then ties in owners, RACI roles, policies, controls, and gaps. It complements a catalog rather than replacing it: you run Procela alongside what you already have.",
  },
  {
    q: "Does Procela move or store our data?",
    a: "No. The on-prem edge connector reads schema, table, and column metadata plus row counts only — never column values, records, or file contents — and sends just that metadata to the platform over outbound HTTPS. Your data never leaves your perimeter, making Procela a fit for environments operating under frameworks like ITAR, CMMC, CUI, and HIPAA.",
  },
  {
    q: "How long does a Phase 1 governance program take to stand up?",
    a: "It depends on scope. The DG Foundation track is phased and designed to reach a governance baseline — stewardship assignments, recorded policies, and audit-ready lineage — with a target of around 30 days, starting with your highest-priority domains. Timelines are illustrative and vary by environment.",
  },
  {
    q: "Can AI agents participate in governance roles?",
    a: "Yes. Procela's principal model supports both human and AI participants as data stewards and domain owners. AI agents are AI-assisted and review-gated — their classifications and suggestions run on a schedule and are surfaced for a person to review and approve before anything is applied.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <div className="faq-list">
      {ITEMS.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={`faq-item${isOpen ? " open" : ""}`}>
            <button
              className="faq-q"
              aria-expanded={isOpen}
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              {item.q}
              <span className="faq-icon">+</span>
            </button>
            <div className="faq-a">{item.a}</div>
          </div>
        );
      })}
    </div>
  );
}
