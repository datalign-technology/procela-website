import Image from "next/image";
import { versionedShot } from "@/lib/screenshots";

type BrowserFrameProps = {
  src: string;
  alt: string;
  /** Intrinsic image width/height for aspect ratio (defaults to the 2000x1250 captures). */
  width?: number;
  height?: number;
  /** URL shown in the fake address bar. */
  url?: string;
  priority?: boolean;
  className?: string;
};

/**
 * A product screenshot in a clean browser chrome — traffic-light dots and an
 * address pill — with a rounded, shadowed frame. Used to present real app
 * captures on marketing sections.
 */
export default function BrowserFrame({
  src,
  alt,
  width = 2000,
  height = 1250,
  url = "app.procela.ai",
  priority = false,
  className,
}: BrowserFrameProps) {
  return (
    <figure className={`browser${className ? " " + className : ""}`}>
      <div className="browser-bar">
        <span className="browser-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="browser-url">{url}</span>
      </div>
      <Image
        src={versionedShot(src)}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        sizes="(max-width: 700px) 100vw, 960px"
        className="browser-img"
      />
    </figure>
  );
}
