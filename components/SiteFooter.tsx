import Link from "next/link";
import Logo from "./Logo";
import CookiePreferencesButton from "./CookiePreferencesButton";

export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <Logo height={22} className="opacity-60" />
      </div>
      <div className="footer-links">
        <Link href="/platform">Platform</Link>
        <Link href="/industries">Industries</Link>
        <Link href="/integrations">Integrations</Link>
        <Link href="/pricing">Pricing</Link>
        <Link href="/security">Security</Link>
        <Link href="/careers">Careers</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <Link href="/demo">Contact</Link>
        <CookiePreferencesButton />
      </div>
      <span className="footer-copy">
        © {new Date().getFullYear()} Datalign Technology LLC · DBA Procela
      </span>
    </footer>
  );
}
