import type { MetadataRoute } from "next";

const siteUrl = "https://procela.ai";

const ROUTES = [
  "",
  "/platform",
  "/how-it-works",
  "/integrations",
  "/pricing",
  "/security",
  "/resources",
  "/resources/guides",
  "/resources/blog",
  "/resources/docs",
  "/resources/dg-foundation-30-days",
  "/resources/principal-model",
  "/resources/edge-agents",
  "/resources/blog/why-governance-programs-stall",
  "/resources/blog/keeping-ai-agents-accountable",
  "/resources/blog/continuous-compliance",
  "/demo",
  "/intro",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return ROUTES.map((path) => ({
    url: `${siteUrl}${path}`,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/resources/") ? 0.6 : 0.8,
  }));
}
