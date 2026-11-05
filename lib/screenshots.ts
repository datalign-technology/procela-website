// Cache-busting version for the product screenshots.
//
// Every refresh overwrites the same screenshots, so browsers, the CDN, and the
// Next.js image optimizer (which caches by source URL) would keep serving the
// OLD capture unless the URL changes. We bust the cache by putting the version
// in the FILENAME — /screenshots/hero.20261105.webp — not a ?query. A query on
// a next/image source breaks Amplify's image optimizer; a versioned filename
// stays a clean path to a real static file (the mechanism that always worked),
// so the image still loads AND each refresh is a brand-new URL.
//
// The files in public/screenshots/ must be named with this exact version. The
// refresh workflow writes name.<VERSION>.webp and removes the old ones.
// BUMP THIS whenever the screenshots are refreshed (use the capture date).
export const SHOTS_VERSION = "20261105";

/** Rewrite /screenshots/name.webp to the versioned filename on disk,
 *  /screenshots/name.<VERSION>.webp. Leaves other paths untouched. */
export function versionedShot(src: string): string {
  if (!src.startsWith("/screenshots/") || !src.endsWith(".webp")) return src;
  return src.replace(/\.webp$/, `.${SHOTS_VERSION}.webp`);
}
