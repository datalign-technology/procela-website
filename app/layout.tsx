import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
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

const siteUrl = "https://procela.ai";

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </body>
    </html>
  );
}
