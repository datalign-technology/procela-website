"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import BrowserFrame from "./BrowserFrame";

type Hotspot = { x: number; y: number; text: string };

type Step = {
  id: string;
  chip: string;
  kicker: string;
  title: string;
  body: string;
  src: string;
  alt: string;
  url: string;
  href: string;
  hotspots: Hotspot[];
};

const STEPS: Step[] = [
  {
    id: "council",
    chip: "Council scorecard",
    kicker: "The board view",
    title: "One board your governance council runs on",
    body: "Four measures — tier-1 coverage, classification, open issues and exceptions — auto-derived from live data and rolled up from every division to the enterprise, with a narrative you can publish each month.",
    src: "/screenshots/hero.webp",
    alt: "The Procela Governance Council Scorecard rolling four measures up from each division to the enterprise, with status badges and an auto-derived narrative.",
    url: "app.procela.ai/council-scorecard",
    href: "/platform",
    hotspots: [
      { x: 21, y: 34, text: "Four measures, auto-derived from live data." },
      { x: 52, y: 60, text: "Every division rolled up to one enterprise number." },
    ],
  },
  {
    id: "enterprise",
    chip: "Enterprise view",
    kicker: "The whole estate",
    title: "The whole estate in one connected view",
    body: "Processes, systems, data assets, domains and people — connected into a single model, not scattered across spreadsheets. The full picture of your governance program at a glance.",
    src: "/screenshots/enterprise.webp",
    alt: "Procela enterprise view showing processes, systems, data assets, domains, and people connected across the organization.",
    url: "app.procela.ai/enterprise-view",
    href: "/platform",
    hotspots: [
      { x: 50, y: 45, text: "One connected model — processes, systems, assets, domains, people." },
      { x: 30, y: 70, text: "Follow any thread from a person to the data they own." },
    ],
  },
  {
    id: "processes",
    chip: "Processes",
    kicker: "The operating model",
    title: "Governance anchored to how the business runs",
    body: "Map value streams to processes, sub-processes and activities — each with a named owner, responsible role, and the systems and data assets it touches. Governance grounded in real work, not an abstract diagram.",
    src: "/screenshots/processes.webp",
    alt: "Procela process catalog showing a Value Stream, Process, Sub-Process and Activity hierarchy, each with an owner and responsible role.",
    url: "app.procela.ai/processes",
    href: "/platform",
    hotspots: [
      { x: 40, y: 33, text: "Value Stream → Process → Sub-Process → Activity." },
      { x: 66, y: 54, text: "Every step has a named owner and responsible role." },
    ],
  },
  {
    id: "data-assets",
    chip: "Data assets",
    kicker: "The catalog",
    title: "Every data asset, classified and owned",
    body: "One registry for every data asset — with sensitivity classification, a governance tier, a named owner, and the health rules that read over it. Discovered automatically, or added by hand.",
    src: "/screenshots/data-assets.webp",
    alt: "Procela data asset registry listing assets with sensitivity tags, governance tier, domain, and owner.",
    url: "app.procela.ai/data-assets",
    href: "/platform",
    hotspots: [
      { x: 60, y: 30, text: "Sensitivity, governance tier and owner on every asset." },
      { x: 28, y: 54, text: "Discovered by metadata-only edge agents, or added by hand." },
    ],
  },
  {
    id: "lineage",
    chip: "Data lineage",
    kicker: "How data moves",
    title: "See how data flows between your systems",
    body: "Map which system feeds which — as a table or a directed graph — with flow type and frequency on every edge, or import it straight from a dbt Cloud job. One audit-ready picture of how data moves.",
    src: "/screenshots/lineage.webp",
    alt: "Procela data lineage view showing a directed graph of flows between systems, each edge labeled with flow type and frequency.",
    url: "app.procela.ai/data-lineage",
    href: "/platform",
    hotspots: [
      { x: 50, y: 46, text: "Every flow between systems — typed and directional." },
      { x: 72, y: 62, text: "Import straight from a dbt Cloud job." },
    ],
  },
  {
    id: "gaps",
    chip: "Gap detection",
    kicker: "What needs attention",
    title: "Find what isn't governed yet",
    body: "Procela reads across the catalog and surfaces the gaps — ungoverned assets, unowned domains, orphaned assets, unassigned people — triaged by severity so the council knows exactly what to work on next.",
    src: "/screenshots/gaps.webp",
    alt: "Procela gap detection view showing governance gaps broken down by category and severity.",
    url: "app.procela.ai/gap-detection",
    href: "/security",
    hotspots: [
      { x: 30, y: 24, text: "Triaged by severity — critical, warning, informational." },
      { x: 64, y: 40, text: "Ungoverned assets, unowned domains, unassigned people." },
    ],
  },
  {
    id: "audit",
    chip: "Audit log",
    kicker: "The record",
    title: "If it happened, it's on the record",
    body: "Every classification, assignment and policy change is captured in a tamper-evident, attributable log tied to a named principal — human or AI. Audit prep becomes a query, not a fire drill.",
    src: "/screenshots/audit.webp",
    alt: "Procela audit log listing time-stamped create, update, sensitivity, and login events with the responsible actor.",
    url: "app.procela.ai/audit-log",
    href: "/security",
    hotspots: [
      { x: 30, y: 32, text: "Every change tied to a named principal — human or AI." },
      { x: 64, y: 50, text: "Tamper-evident and exportable — audits become a query." },
    ],
  },
];

const AUTOPLAY_MS = 7000;

export default function ProductTour() {
  const [step, setStep] = useState(0);
  const [pin, setPin] = useState<number | null>(null);
  const [playing, setPlaying] = useState(false);
  const [reduced, setReduced] = useState(false);
  const railRef = useRef<HTMLDivElement>(null);

  const current = STEPS[step];
  const atEnd = step === STEPS.length - 1;

  // Reduced motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const goto = useCallback((i: number) => {
    setStep(((i % STEPS.length) + STEPS.length) % STEPS.length);
    setPin(null);
  }, []);

  // Deep link: read on mount
  useEffect(() => {
    const h = window.location.hash.replace("#", "");
    const idx = STEPS.findIndex((s) => s.id === h);
    if (idx >= 0) setStep(idx);
  }, []);

  // Deep link: reflect current step
  useEffect(() => {
    const url = `${window.location.pathname}#${current.id}`;
    window.history.replaceState(null, "", url);
  }, [current.id]);

  // Keep the active rail chip in view
  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const el = rail.querySelector<HTMLElement>(`[data-idx="${step}"]`);
    el?.scrollIntoView({ block: "nearest", inline: "center" });
  }, [step]);

  // Autoplay
  useEffect(() => {
    if (!playing || reduced) return;
    const t = window.setTimeout(() => {
      if (atEnd) setPlaying(false);
      else goto(step + 1);
    }, AUTOPLAY_MS);
    return () => window.clearTimeout(t);
  }, [playing, reduced, step, atEnd, goto]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goto(step + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goto(step - 1);
    }
  };

  return (
    <div className="tour" onKeyDown={onKeyDown}>
      {/* Step rail */}
      <div className="tour-rail" role="tablist" aria-label="Tour steps" ref={railRef}>
        {STEPS.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            data-idx={i}
            aria-selected={step === i}
            className={`tour-chip${step === i ? " active" : ""}`}
            onClick={() => goto(i)}
          >
            <span className="tour-chip-num">{i + 1}</span>
            {s.chip}
          </button>
        ))}
      </div>

      <div className="tour-main">
        {/* Stage with hotspots */}
        <div className="tour-stage">
          <div className="tour-shot" key={current.id}>
            <BrowserFrame src={current.src} alt={current.alt} url={current.url} priority={step === 0} />
            <div className="tour-overlay" aria-hidden="true">
              {current.hotspots.map((h, i) => (
                <button
                  key={i}
                  type="button"
                  className={`tour-pin${pin === i ? " active" : ""}`}
                  style={{ left: `${h.x}%`, top: `${h.y}%` }}
                  onClick={() => setPin(pin === i ? null : i)}
                  onMouseEnter={() => setPin(i)}
                  aria-label={h.text}
                >
                  <span className="tour-pin-dot">{i + 1}</span>
                  <span className="tour-callout">{h.text}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Caption */}
        <div className="tour-caption" key={`cap-${current.id}`}>
          <span className="tour-progress-label">
            Step {step + 1} of {STEPS.length}
          </span>
          <span className="product-kicker">{current.kicker}</span>
          <h2 className="tour-title">{current.title}</h2>
          <p className="tour-body">{current.body}</p>
          <ul className="tour-points">
            {current.hotspots.map((h, i) => (
              <li key={i}>
                <button
                  type="button"
                  className={`tour-point${pin === i ? " active" : ""}`}
                  onClick={() => setPin(pin === i ? null : i)}
                >
                  <span className="tour-point-num">{i + 1}</span>
                  <span>{h.text}</span>
                </button>
              </li>
            ))}
          </ul>
          <Link href={current.href} className="tab-link tour-deep">
            Explore this in the platform →
          </Link>
        </div>
      </div>

      {/* Controls */}
      <div className="tour-controls">
        <div className="tour-bar" aria-hidden="true">
          <span style={{ width: `${((step + 1) / STEPS.length) * 100}%` }} />
        </div>
        <div className="tour-buttons">
          <button
            type="button"
            className="tour-btn"
            onClick={() => goto(step - 1)}
            disabled={step === 0}
          >
            ← Back
          </button>
          {!reduced && (
            <button
              type="button"
              className="tour-btn tour-play"
              onClick={() => setPlaying((p) => !p)}
              aria-pressed={playing}
            >
              {playing ? "❚❚ Pause" : "▶ Play tour"}
            </button>
          )}
          {atEnd ? (
            <Link href="/demo" className="tour-btn tour-btn-primary">
              Request a demo →
            </Link>
          ) : (
            <button type="button" className="tour-btn tour-btn-primary" onClick={() => goto(step + 1)}>
              Next →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
