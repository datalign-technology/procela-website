type LogoProps = {
  height?: number;
  className?: string;
  wordmark?: boolean;
  title?: string;
};

// Aspect ratios of the Procela brand SVGs (from their viewBoxes), so the width
// tracks the requested height. Swap the SVGs in /public if the mark changes.
const LOGO_RATIO = 200.76 / 56; // horizontal logo (mark + wordmark)
const ICON_RATIO = 200 / 224; // mark only

/**
 * Procela brand mark. Renders the scalable SVG so it stays crisp at any size
 * (public/procela-logo.svg, public/procela-icon.svg). Sized by `height`; width
 * is derived from the source aspect ratio.
 */
export default function Logo({
  height = 32,
  className,
  wordmark = true,
  title = "Procela",
}: LogoProps) {
  const src = wordmark ? "/procela-logo.svg" : "/procela-icon.svg";
  const width = Math.round(height * (wordmark ? LOGO_RATIO : ICON_RATIO));
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={title}
      width={width}
      height={height}
      className={className}
      decoding="async"
    />
  );
}
