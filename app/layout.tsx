import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import { SITE_URL } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

const siteUrl = SITE_URL;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Procela — Enterprise Data Governance Platform",
  description:
    "Procela is a business-process-first governance platform that aligns people, process, systems, and data into a single, auditable governance program.",
  keywords: [
    "data governance",
    "business process governance",
    "governance catalog",
    "data stewardship",
    "policy management",
    "data lineage",
    "audit trail",
    "regulated enterprise",
    "CMMC",
    "ITAR",
    "HIPAA",
  ],
  icons: {
    icon: [{ url: "/procela-icon.png", type: "image/png" }],
    apple: [{ url: "/procela-icon.png" }],
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    title: "Procela — Enterprise Data Governance Platform",
    description:
      "Business-process-first governance that aligns people, process, systems, and data into a single, auditable governance program.",
    siteName: "Procela",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Procela — Enterprise Data Governance Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Procela — Enterprise Data Governance Platform",
    description:
      "Business-process-first governance that aligns people, process, systems, and data into a single, auditable governance program.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Procela",
    legalName: "Datalign Technology LLC",
    url: siteUrl,
    logo: `${siteUrl}/procela-icon.png`,
    description:
      "Procela is a business-process-first governance platform that aligns people, process, systems, and data into a single, auditable data governance program.",
    sameAs: [] as string[],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Procela",
    url: siteUrl,
    publisher: { "@type": "Organization", name: "Procela" },
  };

  const softwareJsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Procela",
    applicationCategory: "BusinessApplication",
    applicationSubCategory: "Data Governance Platform",
    operatingSystem: "Web, on-premise (Kubernetes / Helm), AWS",
    url: siteUrl,
    description:
      "Business-process-first data governance for regulated enterprises: a metadata-only edge connector, stewardship and RACI, recorded policies and controls, gap detection, lineage, and a tamper-evident audit trail — deployable on-premise or air-gapped.",
    offers: { "@type": "Offer", availability: "https://schema.org/InStock" },
    publisher: { "@type": "Organization", name: "Procela" },
  };

  const jsonLd = [orgJsonLd, websiteJsonLd, softwareJsonLd];

  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}
    >
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
        {jsonLd.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </body>
    </html>
  );
}
