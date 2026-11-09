import { SOCIAL_LINKS } from "@/lib/site";

type Props = {
  className?: string;
  size?: number;
};

/**
 * Icon links to Procela's LinkedIn and YouTube. Monochrome (currentColor) so
 * they match the surrounding nav / footer text and pick up its hover color.
 */
export default function SocialLinks({ className = "social-links", size = 18 }: Props) {
  return (
    <div className={className}>
      <a
        className="social-link"
        href={SOCIAL_LINKS.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Procela on LinkedIn (opens in a new tab)"
        title="Procela on LinkedIn"
      >
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.86 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.73C24 .77 23.2 0 22.22 0Z" />
        </svg>
      </a>
      <a
        className="social-link"
        href={SOCIAL_LINKS.youtube}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Procela on YouTube (opens in a new tab)"
        title="Procela on YouTube"
      >
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M23.5 6.2a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.2C0 8.08 0 12 0 12s0 3.92.5 5.8a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.8ZM9.6 15.57V8.43L15.82 12 9.6 15.57Z" />
        </svg>
      </a>
    </div>
  );
}
