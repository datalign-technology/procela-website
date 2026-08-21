type Props = { slug: string; className?: string };

/**
 * Per-industry hero illustrations — bespoke line scenes drawn on the dark brand
 * tile. 240x240 viewBox, ~2px strokes in brand green with a filled focal badge,
 * so each industry page gets a distinct but cohesive visual. Keyed by slug.
 */
export default function IndustryScene({ slug, className }: Props) {
  return (
    <svg
      viewBox="18 26 204 192"
      width="100%"
      height="100%"
      fill="none"
      className={className}
      role="img"
      aria-hidden="true"
    >
      {SCENES[slug] ?? SCENES["utilities-energy"]}
    </svg>
  );
}

const P = "#7fca9c"; // primary stroke (brand green-light on dark)
const A = "#4a8c6a"; // accent fill (brand green)

/** Soft focal badge behind a glyph. */
function Badge({ cx, cy, r = 24 }: { cx: number; cy: number; r?: number }) {
  return (
    <>
      <circle cx={cx} cy={cy} r={r + 6} fill={A} fillOpacity={0.12} />
      <circle cx={cx} cy={cy} r={r} fill={A} fillOpacity={0.22} stroke={P} strokeWidth={1.5} />
    </>
  );
}

const common = {
  stroke: P,
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const SCENES: Record<string, React.ReactNode> = {
  // Utilities & Energy — transmission pylon, wires, energy badge
  "utilities-energy": (
    <>
      <path d="M28 202 H212" stroke={P} strokeWidth={2} strokeOpacity={0.3} strokeLinecap="round" />
      <g {...common}>
        <path d="M100 202 L115 96 M140 202 L125 96" />
        <path d="M104 176 H136 M108 148 H132 M112 122 H128" />
        <path d="M100 202 L136 176 M140 202 L104 176 M104 176 L132 148 M136 176 L108 148 M108 148 L128 122 M132 148 L112 122" strokeOpacity={0.7} />
        <path d="M80 110 H160" />
        <path d="M96 110 v10 M120 110 v-9 M144 110 v10" />
        <path d="M28 146 Q96 172 96 120" strokeOpacity={0.5} />
        <path d="M212 146 Q144 172 144 120" strokeOpacity={0.5} />
      </g>
      <Badge cx={120} cy={64} r={23} />
      <path d="M125 50 L110 70 H120 L116 84 L132 62 H121 Z" fill={P} />
    </>
  ),

  // Financial Services — columned bank + rising trend badge
  "financial-services": (
    <>
      <path d="M30 206 H210" stroke={P} strokeWidth={2} strokeOpacity={0.3} strokeLinecap="round" />
      <g {...common}>
        <path d="M64 96 L120 66 L176 96 Z" />
        <path d="M60 108 H180" />
        <path d="M72 108 V182 M96 108 V182 M120 108 V182 M144 108 V182 M168 108 V182" />
        <path d="M56 182 H184" />
        <path d="M48 196 H192" />
      </g>
      <Badge cx={168} cy={150} r={22} />
      <g stroke={P} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <path d="M156 158 L164 150 L170 155 L182 141" />
        <path d="M176 141 H182 V147" />
      </g>
    </>
  ),

  // Healthcare & Life Sciences — vitals monitor with ECG + cross badge
  "healthcare-life-sciences": (
    <>
      <g {...common}>
        <rect x="42" y="58" width="156" height="104" rx="10" />
        <path d="M42 138 H198" strokeOpacity={0.3} />
        <path d="M120 162 V178 M96 178 H144" />
        <path d="M54 112 H86 L96 88 L110 130 L122 100 L132 112 H186" />
      </g>
      <Badge cx={168} cy={92} r={19} />
      <path d="M168 82 V102 M158 92 H178" stroke={P} strokeWidth={3} strokeLinecap="round" />
    </>
  ),

  // Government & Public Sector — domed civic building
  "government-public-sector": (
    <>
      <path d="M32 206 H208" stroke={P} strokeWidth={2} strokeOpacity={0.3} strokeLinecap="round" />
      <g {...common}>
        <path d="M120 40 V52" />
        <path d="M100 92 A20 20 0 0 1 140 92" />
        <path d="M92 92 H148" />
        <path d="M74 112 L120 96 L166 112" />
        <path d="M70 122 H170" />
        <path d="M82 122 V182 M104 122 V182 M136 122 V182 M158 122 V182" />
        <path d="M64 182 H176" />
        <path d="M54 196 H186" />
      </g>
      <Badge cx={120} cy={148} r={20} />
      <path d="M120 138 L112 141 v8 c0 5 4 8 8 10 4 -2 8 -5 8 -10 v-8 z" fill={A} fillOpacity={0.25} stroke={P} strokeWidth={1.6} strokeLinejoin="round" />
      <path d="M116 148 l3 3 6 -6" stroke={P} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </>
  ),

  // Manufacturing & Critical Infrastructure — factory with gears
  "manufacturing-critical-infrastructure": (
    <>
      <path d="M28 200 H212" stroke={P} strokeWidth={2} strokeOpacity={0.3} strokeLinecap="round" />
      <g {...common}>
        <path d="M44 200 V132 L84 152 V132 L124 152 V132 L164 152 V96 H180 V200" />
        <path d="M156 96 V78 H172 V96" />
      </g>
      <g stroke={P} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        <circle cx="86" cy="176" r="15" fill={A} fillOpacity={0.18} />
        <circle cx="86" cy="176" r="5" />
        <path d="M86 158 v-6 M86 194 v6 M104 176 h6 M68 176 h-6 M99 163 l4 -4 M69 189 l-4 4 M99 189 l4 4 M69 163 l-4 -4" strokeOpacity={0.7} />
      </g>
    </>
  ),
};
