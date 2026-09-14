"use client";

export const COOKIE_PREFS_EVENT = "procela:cookie-preferences";

/**
 * Footer link that re-opens the cookie consent banner so visitors can
 * change their earlier choice. Dispatches a window event the banner listens
 * for; styled to match the surrounding footer links.
 */
export default function CookiePreferencesButton() {
  return (
    <button
      type="button"
      className="footer-link-btn"
      onClick={() => window.dispatchEvent(new Event(COOKIE_PREFS_EVENT))}
    >
      Cookie preferences
    </button>
  );
}
