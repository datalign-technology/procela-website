/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Enforce the canonical host: 301-redirect the apex (procela.ai) to
  // www.procela.ai so search engines consolidate on one origin and don't
  // index both as duplicates. Mirrors SITE_URL in lib/site.ts. (Harmless if
  // the hosting layer already does this — the redirect only fires for the
  // apex host, and www requests never match the condition, so no loop.)
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "procela.ai" }],
        destination: "https://www.procela.ai/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
