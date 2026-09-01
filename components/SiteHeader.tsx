import Link from "next/link";
import Logo from "./Logo";
import MobileNav from "./MobileNav";

export default function SiteHeader() {
  return (
    <>
      <div className="announcement">
        <span className="ann-badge">New</span>
        Introducing Procela — business-process-first governance for regulated enterprises.{" "}
        <Link className="ann-link" href="/demo">
          Request a demo →
        </Link>
      </div>

      <nav className="nav">
        <Link className="nav-brand" href="/" aria-label="Procela home">
          <Logo height={32} />
        </Link>
        <div className="nav-links">
          <Link href="/platform">Platform</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/tour">Tour</Link>
          <Link href="/how-it-works">How it works</Link>
          <Link href="/integrations">Integrations</Link>
          <Link href="/pricing">Pricing</Link>
          <div className="nav-dropdown">
            <Link className="nav-dropdown-trigger" href="/resources" aria-haspopup="true">
              Resources
              <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M6 9l6 6 6-6" />
              </svg>
            </Link>
            <div className="nav-dropdown-menu" role="menu">
              <Link href="/resources/docs" role="menuitem">Documentation</Link>
              <Link href="/resources/guides" role="menuitem">Guides</Link>
              <Link href="/resources/blog" role="menuitem">Blog</Link>
            </div>
          </div>
        </div>
        <div className="nav-actions">
          <Link className="btn-green" href="/demo">
            Request a demo
          </Link>
        </div>
        <MobileNav />
      </nav>
      <span id="main-content" tabIndex={-1} />
    </>
  );
}
