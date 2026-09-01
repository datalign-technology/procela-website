"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import BrowserFrame from "./BrowserFrame";

type Slide = {
  id: string;
  label: string;
  src: string;
  alt: string;
  url: string;
};

const SLIDES: Slide[] = [
  {
    id: "council",
    label: "Council scorecard",
    src: "/screenshots/hero.webp",
    alt: "The Procela Governance Council Scorecard — an executive view rolling four measures (tier-1 coverage, classification, open issues, and exceptions) up from each division to the enterprise, with auto-derived status badges, a 'what moved' and 'for the council' narrative, and a record of saved monthly snapshots.",
    url: "app.procela.ai/council-scorecard",
  },
  {
    id: "enterprise",
    label: "Enterprise view",
    src: "/screenshots/enterprise.webp",
    alt: "Procela enterprise view showing processes, systems, data assets, domains, and people connected across the organization.",
    url: "app.procela.ai/enterprise-view",
  },
  {
    id: "lineage",
    label: "Data lineage",
    src: "/screenshots/lineage.webp",
    alt: "Procela data lineage view showing a directed graph of flows between systems, each edge labeled with flow type and frequency.",
    url: "app.procela.ai/data-lineage",
  },
  {
    id: "processes",
    label: "Processes",
    src: "/screenshots/processes.webp",
    alt: "Procela process catalog showing a Value Stream, Process, Sub-Process, and Activity hierarchy, each with an owner, responsible role, and the systems and data assets it touches.",
    url: "app.procela.ai/processes",
  },
];

const INTERVAL = 5000;

export default function HeroSlideshow() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const advance = useCallback(() => {
    setActive((i) => (i + 1) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (reduced || paused) return;
    const t = window.setInterval(advance, INTERVAL);
    return () => window.clearInterval(t);
  }, [reduced, paused, advance, active]);

  const select = (i: number) => setActive(i);

  return (
    <div
      className="hero-slideshow"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Procela product screenshots"
    >
      <div className="hero-slides">
        {SLIDES.map((s, i) => (
          <div
            className={`hero-slide${active === i ? " active" : ""}`}
            key={s.id}
            aria-hidden={active !== i}
          >
            <BrowserFrame src={s.src} alt={s.alt} url={s.url} priority={i === 0} />
          </div>
        ))}
      </div>
      <div className="hero-dots" role="tablist" aria-label="Choose a screenshot">
        {SLIDES.map((s, i) => (
          <button
            key={s.id}
            type="button"
            role="tab"
            aria-selected={active === i}
            aria-label={s.label}
            className={`hero-dot${active === i ? " active" : ""}`}
            onClick={() => select(i)}
          >
            <span className="hero-dot-label">{s.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
