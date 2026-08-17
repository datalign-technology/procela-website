import Image from "next/image";

type LogoProps = {
  height?: number;
  className?: string;
  wordmark?: boolean;
  title?: string;
};

// Aspect ratios of the Procela app's brand assets, so the marketing site
// renders the exact same logo/icon the product does. Swap the PNGs in
// /public if the app's brand mark changes.
const LOGO_RATIO = 836 / 240; // full logo (icon + wordmark)
const ICON_RATIO = 195 / 192; // icon only

/**
 * Procela brand mark — the same glyph and wordmark used in the product app
 * (public/procela-logo.png, public/procela-icon.png). Sized by `height`;
 * width is derived from the source aspect ratio.
 */
export default function Logo({
  height = 32,
  className,
  wordmark = true,
  title = "Procela",
}: LogoProps) {
  const src = wordmark ? "/procela-logo.png" : "/procela-icon.png";
  const width = Math.round(height * (wordmark ? LOGO_RATIO : ICON_RATIO));
  return (
    <Image
      src={src}
      alt={title}
      width={width}
      height={height}
      className={className}
      priority
    />
  );
}
