"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { UPDATES, type Update } from "@/lib/updates";

const MAX = 6;
const INTERVAL = 5000;

function ItemLink({ item }: { item: Update }) {
  const inner = (
    <>
      <span className="updbar-label">{item.label}</span>
      <span className="updbar-title">{item.title}</span>
      <span className="updbar-arrow" aria-hidden="true">→</span>
    </>
  );
  return item.external ? (
    <a className="updbar-item" href={item.href} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  ) : (
    <Link className="updbar-item" href={item.href}>
      {inner}
    </Link>
  );
}

export default function UpdatesBanner() {
  const items = UPDATES.slice(0, MAX);
  const [perView, setPerView] = useState(2);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(false);

  // One item at a time on narrow screens, two side-by-side otherwise.
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 760px)");
    const update = () => setPerView(mq.matches ? 1 : 2);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  // Group items into pages of `perView`.
  const pages: Update[][] = [];
  for (let i = 0; i < items.length; i += perView) {
    pages.push(items.slice(i, i + perView));
  }
  const pageCount = pages.length || 1;

  // Keep the active page in range when perView changes.
  useEffect(() => {
    setActive((a) => (a >= pageCount ? 0 : a));
  }, [pageCount]);

  const advance = useCallback(() => {
    setActive((a) => (a + 1) % pageCount);
  }, [pageCount]);

  useEffect(() => {
    if (reduced || paused || pageCount < 2) return;
    const t = window.setInterval(advance, INTERVAL);
    return () => window.clearInterval(t);
  }, [reduced, paused, pageCount, advance]);

  if (items.length === 0) return null;

  const page = pages[Math.min(active, pageCount - 1)] ?? [];

  return (
    <div
      className="updbar"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      aria-label="Latest updates"
    >
      <div className="updbar-inner">
        <div className="updbar-track" key={active}>
          {page.map((item, i) => (
            <div className="updbar-cell" key={item.href}>
              {i > 0 && <span className="updbar-divider" aria-hidden="true" />}
              <ItemLink item={item} />
            </div>
          ))}
        </div>

        {pageCount > 1 && (
          <div className="updbar-dots" role="tablist" aria-label="Choose updates">
            {pages.map((_, i) => (
              <button
                key={i}
                type="button"
                role="tab"
                aria-selected={active === i}
                aria-label={`Updates ${i + 1} of ${pageCount}`}
                className={`updbar-dot${active === i ? " active" : ""}`}
                onClick={() => setActive(i)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
