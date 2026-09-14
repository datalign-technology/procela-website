"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { COOKIE_PREFS_EVENT } from "./CookiePreferencesButton";

const STORAGE_KEY = "procela-cookie-consent";

/**
 * A lightweight cookie-consent banner. Records the visitor's choice
 * ("accepted" | "declined") in localStorage so non-essential cookies
 * (e.g. analytics) can be gated on it later. Essential cookies needed to
 * run the site are always used. The banner only appears until a choice
 * is made, and never renders on the server to avoid a hydration mismatch.
 */
export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const choice = localStorage.getItem(STORAGE_KEY);
      if (choice !== "accepted" && choice !== "declined") setVisible(true);
    } catch {
      // localStorage blocked (private mode, etc.) — show the banner; the
      // choice simply won't persist across sessions.
      setVisible(true);
    }
  }, []);

  // Let the footer "Cookie preferences" link re-open the banner at any time.
  useEffect(() => {
    const reopen = () => setVisible(true);
    window.addEventListener(COOKIE_PREFS_EVENT, reopen);
    return () => window.removeEventListener(COOKIE_PREFS_EVENT, reopen);
  }, []);

  function record(choice: "accepted" | "declined") {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
    } catch {
      /* nothing we can do if storage is blocked */
    }
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="cookie-banner" role="dialog" aria-live="polite" aria-label="Cookie consent">
      <p className="cookie-text">
        We use cookies to run this site and, with your consent, to measure how
        it&apos;s used. See our <Link href="/privacy">Privacy Policy</Link>.
      </p>
      <div className="cookie-actions">
        <button type="button" className="cookie-btn cookie-decline" onClick={() => record("declined")}>
          Decline
        </button>
        <button type="button" className="cookie-btn cookie-accept" onClick={() => record("accepted")}>
          Accept
        </button>
      </div>
    </div>
  );
}
