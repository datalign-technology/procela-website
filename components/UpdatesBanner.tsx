"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import { UPDATES } from "@/lib/updates";

const MAX = 5;
const INTERVAL = 5000;

export default function UpdatesBanner() {
  const items = UPDATES.slice(0, MAX);
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
    setActive((i) => (i + 1) % items.length);
  }, [items.length]);

  useEffect(() => {
    if (reduced || paused || items.length < 2) return;
    const t = window.setInterval(advance, INTERVAL);
    return () => window.clearInterval(t);
  }, [reduced, paused, items.length, advance]);

  if (items.length === 0) return null;

  const item = items[active];
  const inner = (
    <>
      <span className="updbar-label">{item.label}</span>
      <span className="updbar-title">{item.title}</span>
      <span className="updbar-arrow" aria-hidden="true">→</span>
    </>
  );

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
        {item.external ? (
          <a
            className="updbar-item"
            key={active}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            {inner}
          </a>
        ) : (
          <Link className="updbar-item" key={active} href={item.href}>
            {inner}
          </Link>
        )}

        {items.length > 1 && (
          <div className="updbar-dots" role="tablist" aria-label="Choose an update">
            {items.map((u, i) => (
              <button
                key={u.href}
                type="button"
                role="tab"
                aria-selected={active === i}
                aria-label={u.title}
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
