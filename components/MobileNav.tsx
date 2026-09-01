"use client";

import { useState } from "react";
import Link from "next/link";

const LINKS = [
  { href: "/platform", label: "Platform" },
  { href: "/industries", label: "Industries" },
  { href: "/tour", label: "Tour" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/integrations", label: "Integrations" },
  { href: "/pricing", label: "Pricing" },
  { href: "/resources", label: "Resources" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <div className="mobile-nav" onKeyDown={(e) => e.key === "Escape" && close()}>
      <button
        type="button"
        className="nav-toggle"
        aria-label={open ? "Close menu" : "Open menu"}
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen((o) => !o)}
      >
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
          {open ? (
            <path d="M6 6l12 12M18 6 6 18" />
          ) : (
            <>
              <path d="M4 7h16" />
              <path d="M4 12h16" />
              <path d="M4 17h16" />
            </>
          )}
        </svg>
      </button>

      {open && (
        <div className="mobile-menu" id="mobile-menu">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={close}>
              {l.label}
            </Link>
          ))}
          <Link className="mobile-subitem" href="/resources/docs" onClick={close}>
            Documentation
          </Link>
          <Link className="mobile-subitem" href="/resources/guides" onClick={close}>
            Guides
          </Link>
          <Link className="mobile-subitem" href="/resources/blog" onClick={close}>
            Blog
          </Link>
          <Link href="/pilot" onClick={close}>
            Start a pilot
          </Link>
          <Link className="btn-green" href="/demo" onClick={close}>
            Request a demo
          </Link>
        </div>
      )}
    </div>
  );
}
