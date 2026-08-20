// The one canonical origin for the site. Every SEO surface — sitemap,
// robots, canonical tags, JSON-LD, Open Graph — must use this exact host
// so search engines consolidate ranking signals on a single URL.
// NOTE: pair this with a 301 redirect from the apex (procela.ai) to www
// at the hosting layer, or both hosts serve duplicate content.
export const SITE_URL = "https://www.procela.ai";
