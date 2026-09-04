import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site";
import { INDUSTRIES } from "@/lib/industries";

const ROUTES = [
  "",
  "/platform",
  "/industries",
  ...INDUSTRIES.map((i) => `/industries/${i.slug}`),
  "/how-it-works",
  "/tour",
  "/integrations",
  "/pricing",
  "/pilot",
  "/updates",
  "/security",
  "/resources",
  "/resources/guides",
  "/resources/blog",
  "/resources/docs",
  "/resources/dg-foundation-30-days",
  "/resources/principal-model",
  "/resources/edge-agents",
  "/resources/blog/what-belongs-on-a-governance-scorecard",
  "/resources/blog/govern-the-process-not-just-the-data",
  "/resources/blog/why-governance-programs-stall",
  "/resources/blog/keeping-ai-agents-accountable",
  "/resources/blog/continuous-compliance",
  "/demo",
  "/intro",
  "/privacy",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return ROUTES.map((path) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : path.startsWith("/resources/") ? 0.6 : 0.8,
  }));
}
