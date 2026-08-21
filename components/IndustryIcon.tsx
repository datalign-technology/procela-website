type Props = { slug: string; size?: number; className?: string };

/**
 * Per-industry line icons — 24x24 grid, 1.6 stroke, currentColor — matching the
 * brand Icon set. Keyed by an industry slug from lib/industries.
 */
export default function IndustryIcon({ slug, size = 24, className }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {PATHS[slug] ?? PATHS["utilities-energy"]}
    </svg>
  );
}

const PATHS: Record<string, React.ReactNode> = {
  "utilities-energy": <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />,
  "financial-services": (
    <>
      <path d="M3 9l9-5 9 5" />
      <path d="M5 9v9M19 9v9M9 18v-5M15 18v-5M3 21h18" />
    </>
  ),
  "healthcare-life-sciences": <path d="M3 12h4l2 5 4-10 2 5h6" />,
  "government-public-sector": (
    <>
      <path d="M4 21h16M5 21V9l7-5 7 5v12M9 21v-6h6v6" />
    </>
  ),
  "manufacturing-critical-infrastructure": (
    <path d="M3 21V10l6 4V10l6 4V6l6 4v11H3Z" />
  ),
};
