"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { versionedShot } from "@/lib/screenshots";

type BrowserFrameProps = {
  src: string;
  alt: string;
  /** Intrinsic image width/height for aspect ratio (defaults to the 2000x1250 captures). */
  width?: number;
  height?: number;
  /** URL shown in the fake address bar. */
  url?: string;
  priority?: boolean;
  className?: string;
  /** Click the screenshot to open a full-size lightbox. Default true; pass
   *  false where the frame has its own interaction model (e.g. the tour). */
  zoomable?: boolean;
};

/**
 * A product screenshot in a clean browser chrome — traffic-light dots and an
 * address pill — with a rounded, shadowed frame. Clicking the screenshot opens
 * a full-size lightbox (unless zoomable is false).
 */
export default function BrowserFrame({
  src,
  alt,
  width = 2000,
  height = 1250,
  url = "app.procela.ai",
  priority = false,
  className,
  zoomable = true,
}: BrowserFrameProps) {
  const resolved = versionedShot(src);
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  // While the lightbox is open: close on Escape and lock background scroll.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open]);

  const zoomProps = zoomable
    ? {
        role: "button" as const,
        tabIndex: 0,
        "aria-label": `Enlarge screenshot: ${alt}`,
        style: { cursor: "zoom-in" as const },
        onClick: () => setOpen(true),
        onKeyDown: (e: React.KeyboardEvent) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            setOpen(true);
          }
        },
      }
    : {};

  return (
    <figure className={`browser${className ? " " + className : ""}`}>
      <div className="browser-bar">
        <span className="browser-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="browser-url">{url}</span>
      </div>
      <Image
        src={resolved}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(max-width: 700px) 100vw, 960px"
        className="browser-img"
        {...zoomProps}
      />
      {zoomable && (
        <span className="browser-zoom-hint" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3M11 8v6M8 11h6" />
          </svg>
          Enlarge
        </span>
      )}
      {zoomable &&
        open &&
        mounted &&
        createPortal(
          <div
            className="lightbox"
            role="dialog"
            aria-modal="true"
            aria-label={alt}
            onClick={() => setOpen(false)}
          >
            <button
              type="button"
              className="lightbox-close"
              aria-label="Close enlarged screenshot"
              onClick={() => setOpen(false)}
              autoFocus
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6 6 18" />
              </svg>
            </button>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className="lightbox-img" src={resolved} alt={alt} />
          </div>,
          document.body,
        )}
    </figure>
  );
}
