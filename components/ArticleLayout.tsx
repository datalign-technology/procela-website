import Link from "next/link";
import SiteHeader from "./SiteHeader";
import SiteFooter from "./SiteFooter";
import CtaBand from "./CtaBand";

type ArticleLayoutProps = {
  category: string;
  title: string;
  deck: string;
  meta: string;
  children: React.ReactNode;
};

export default function ArticleLayout({
  category,
  title,
  deck,
  meta,
  children,
}: ArticleLayoutProps) {
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: deck,
    articleSection: category,
    author: { "@type": "Organization", name: "Procela" },
    publisher: {
      "@type": "Organization",
      name: "Procela",
      logo: {
        "@type": "ImageObject",
        url: "https://www.procela.ai/procela-icon.png",
      },
    },
  };
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <SiteHeader />

      <div className="page-hero">
        <div className="page-hero-inner">
          <span className="hero-eyebrow">{category}</span>
          <h1>{title}</h1>
          <p>{deck}</p>
        </div>
      </div>

      <article className="prose">
        <p className="prose-meta">{meta}</p>
        {children}
        <p className="article-back">
          <Link href="/resources">← Back to resources</Link>
        </p>
      </article>

      <CtaBand
        title="See Procela against your environment"
        body="We'll walk through how this applies to your stack and stand up a governance baseline."
        secondaryLabel="Explore the platform"
        secondaryHref="/platform"
      />

      <SiteFooter />
    </>
  );
}
