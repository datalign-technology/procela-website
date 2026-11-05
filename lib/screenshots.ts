// Cache-busting version for the product screenshots.
//
// Every refresh overwrites the same files (/screenshots/*.webp), so browsers,
// the CDN, and especially the Next.js image optimizer (which caches optimized
// output keyed by the source URL) will keep serving the OLD capture unless the
// URL changes. Appending ?v=SHOTS_VERSION gives each refresh a brand-new URL,
// so the current capture shows up everywhere with no hard-refresh needed.
//
// BUMP THIS whenever the screenshots are refreshed (use the capture date).
export const SHOTS_VERSION = "20261105";

/** Append the capture version to a /screenshots/ path for cache-busting.
 *  Leaves non-screenshot paths untouched. */
export function versionedShot(src: string): string {
  if (!src.startsWith("/screenshots/")) return src;
  return `${src}${src.includes("?") ? "&" : "?"}v=${SHOTS_VERSION}`;
}
