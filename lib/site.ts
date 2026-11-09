// The one canonical origin for the site. Every SEO surface — sitemap,
// robots, canonical tags, JSON-LD, Open Graph — must use this exact host
// so search engines consolidate ranking signals on a single URL.
// NOTE: pair this with a 301 redirect from the apex (procela.ai) to www
// at the hosting layer, or both hosts serve duplicate content.
export const SITE_URL = "https://www.procela.ai";

// Official Procela social profiles. Used by the header, mobile menu and
// footer icon links, and by the Organization JSON-LD `sameAs` list so search
// engines can tie these profiles to the site.
export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/company/procela",
  youtube: "https://www.youtube.com/@procelahq",
} as const;
