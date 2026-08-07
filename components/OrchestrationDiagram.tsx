import "./OrchestrationDiagram.css";

type Box = {
  y: number;
  delay: string;
  title: string;
  sub?: string;
  title2?: string;
};

type Roi = {
  x: number;
  w: number;
  cx: number;
  delay: string;
  num: string;
  l1: string;
  l2: string;
};

type Path = { id: string; d: string };

type Dot = { path: string; dur: string; begin: string };

const INPUTS: Box[] = [
  { y: 40, delay: ".04s", title: "Enterprise systems", sub: "HR · ERP · Asset management" },
  { y: 124, delay: ".08s", title: "People & teams", sub: "Owners · stewards · org" },
  { y: 208, delay: ".12s", title: "Workflows & intake", sub: "Approvals · escalation" },
  { y: 292, delay: ".16s", title: "Data & assets", sub: "Sources · domains · catalog" },
  { y: 376, delay: ".20s", title: "Compliance", title2: "requirements" },
];

const OUTPUTS: Box[] = [
  { y: 40, delay: ".58s", title: "Change confidence", sub: "Know before you change" },
  { y: 124, delay: ".64s", title: "Data health", sub: "Quality across the estate" },
  { y: 208, delay: ".70s", title: "Ownership &", title2: "accountability" },
  { y: 292, delay: ".76s", title: "Audit readiness", sub: "Compliant on demand" },
  { y: 376, delay: ".82s", title: "Reduced risk", sub: "Policies & controls tracked" },
];

const ROI: Roi[] = [
  { x: 20, w: 146, cx: 93, delay: ".88s", num: "<30", l1: "days to governance", l2: "baseline" },
  { x: 178, w: 146, cx: 251, delay: ".95s", num: "80%", l1: "reduction in", l2: "audit prep time" },
  { x: 336, w: 146, cx: 409, delay: "1.02s", num: "100%", l1: "assets with", l2: "assigned owners" },
  { x: 494, w: 166, cx: 577, delay: "1.09s", num: "0", l1: "data moved outside", l2: "your perimeter" },
];

// Left connectors: input → center
const LEFT_PATHS: Path[] = [
  { id: "lp0", d: "M198 67  C250 67,252 220,280 220" },
  { id: "lp1", d: "M198 151 C244 151,252 220,280 220" },
  { id: "lp2", d: "M198 235 L280 220" },
  { id: "lp3", d: "M198 319 C244 319,252 220,280 220" },
  { id: "lp4", d: "M198 403 C250 403,252 220,280 220" },
];

// Right connectors: center → output
const RIGHT_PATHS: Path[] = [
  { id: "rp0", d: "M402 200 C438 200,440 67,482 67" },
  { id: "rp1", d: "M402 214 C438 214,440 151,482 151" },
  { id: "rp2", d: "M402 224 C438 224,440 235,482 235" },
  { id: "rp3", d: "M402 234 C438 234,440 319,482 319" },
  { id: "rp4", d: "M402 244 C438 244,440 403,482 403" },
];

const LEFT_DOTS: Dot[] = [
  { path: "lp0", dur: "1.1s", begin: "0s" },
  { path: "lp0", dur: "1.1s", begin: "0.22s" },
  { path: "lp1", dur: "1.3s", begin: "0.1s" },
  { path: "lp1", dur: "1.3s", begin: "0.4s" },
  { path: "lp2", dur: "0.9s", begin: "0.05s" },
  { path: "lp2", dur: "0.9s", begin: "0.35s" },
  { path: "lp3", dur: "1.2s", begin: "0.15s" },
  { path: "lp3", dur: "1.2s", begin: "0.45s" },
  { path: "lp4", dur: "1.4s", begin: "0.2s" },
  { path: "lp4", dur: "1.4s", begin: "0.5s" },
];

const RIGHT_DOTS: Dot[] = [
  { path: "rp0", dur: "1.1s", begin: "0s" },
  { path: "rp0", dur: "1.1s", begin: "0.28s" },
  { path: "rp1", dur: "1.3s", begin: "0.1s" },
  { path: "rp1", dur: "1.3s", begin: "0.45s" },
  { path: "rp2", dur: "1.0s", begin: "0.05s" },
  { path: "rp2", dur: "1.0s", begin: "0.38s" },
  { path: "rp3", dur: "1.2s", begin: "0.15s" },
  { path: "rp3", dur: "1.2s", begin: "0.5s" },
  { path: "rp4", dur: "1.4s", begin: "0.2s" },
  { path: "rp4", dur: "1.4s", begin: "0.55s" },
];

const labelStyle = {
  fontSize: "11px",
  letterSpacing: ".09em",
  fill: "#b8b6ae",
} as const;

function InputBox({ box }: { box: Box }) {
  return (
    <g className="bi nh" style={{ animationDelay: box.delay }}>
      <rect x="20" y={box.y} width="178" height="54" rx="10" fill="#fff" stroke="#d3d1c7" strokeWidth="0.5" />
      <rect x="20" y={box.y} width="5" height="54" rx="3" fill="#4A8C6A" />
      {box.title2 ? (
        <>
          <text className="th" x="112" y={box.y + 22} textAnchor="middle">{box.title}</text>
          <text className="th" x="112" y={box.y + 40} textAnchor="middle">{box.title2}</text>
        </>
      ) : (
        <>
          <text className="th" x="112" y={box.y + 23} textAnchor="middle">{box.title}</text>
          <text className="ts" x="112" y={box.y + 42} textAnchor="middle">{box.sub}</text>
        </>
      )}
    </g>
  );
}

function OutputBox({ box }: { box: Box }) {
  return (
    <g className="bo nh" style={{ animationDelay: box.delay }}>
      <rect x="482" y={box.y} width="178" height="54" rx="10" fill="#fff" stroke="#d3d1c7" strokeWidth="0.5" />
      <rect x="655" y={box.y} width="5" height="54" rx="3" fill="#70C090" />
      {box.title2 ? (
        <>
          <text className="th" x="570" y={box.y + 22} textAnchor="middle">{box.title}</text>
          <text className="th" x="570" y={box.y + 40} textAnchor="middle">{box.title2}</text>
        </>
      ) : (
        <>
          <text className="th" x="570" y={box.y + 23} textAnchor="middle">{box.title}</text>
          <text className="ts" x="570" y={box.y + 42} textAnchor="middle">{box.sub}</text>
        </>
      )}
    </g>
  );
}

export default function OrchestrationDiagram() {
  return (
    <div className="orchestration-diagram">
      <svg width="100%" viewBox="0 0 680 610" xmlns="http://www.w3.org/2000/svg">
        <title>Procela governance diagram</title>
        <defs>
          <marker id="arr-in" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M2 1L8 5L2 9" fill="none" stroke="#4A8C6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
          <marker id="arr-out" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M2 1L8 5L2 9" fill="none" stroke="#4A8C6A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </marker>
          <clipPath id="avatar-clip">
            <circle cx="340" cy="220" r="18" />
          </clipPath>
        </defs>

        {/* Column labels */}
        <text x="110" y="26" textAnchor="middle" style={labelStyle}>WHAT YOU CONNECT</text>
        <text x="570" y="26" textAnchor="middle" style={labelStyle}>WHAT YOU GET</text>

        {/* Inputs */}
        {INPUTS.map((box) => (
          <InputBox key={`in-${box.y}`} box={box} />
        ))}

        {/* Left base lines */}
        {LEFT_PATHS.map((p) => (
          <path key={p.id} id={p.id} fill="none" stroke="#4A8C6A" strokeWidth="1" opacity=".13" d={p.d} />
        ))}
        {/* Left arrowheads (static) */}
        {LEFT_PATHS.map((p) => (
          <path key={`${p.id}-arr`} fill="none" stroke="#4A8C6A" strokeWidth="2" markerEnd="url(#arr-in)" d={p.d} />
        ))}

        {/* Right base lines (center → output) */}
        {RIGHT_PATHS.map((p) => (
          <path key={p.id} id={p.id} fill="none" stroke="#4A8C6A" strokeWidth="1" opacity=".13" d={p.d} />
        ))}
        {/* Right arrowheads (static) */}
        {RIGHT_PATHS.map((p) => (
          <path key={`${p.id}-arr`} fill="none" stroke="#4A8C6A" strokeWidth="2" markerEnd="url(#arr-out)" d={p.d} />
        ))}

        {/* Center node */}
        <g className="cb" style={{ animationDelay: ".22s" }}>
          <circle cx="340" cy="220" r="24" fill="none" stroke="#4A8C6A" strokeWidth="1" className="pr" />
          <rect x="278" y="170" width="124" height="114" rx="14" fill="#E8F3EC" stroke="#4A8C6A" strokeWidth="1.5" />
          <image href="/procela_avatar.jpg" x="322" y="200" width="36" height="36" clipPath="url(#avatar-clip)" preserveAspectRatio="xMidYMid slice" />
          <circle cx="340" cy="220" r="18" fill="none" stroke="#4A8C6A" strokeWidth="1.5" />
          <text x="340" y="262" textAnchor="middle" style={{ fontSize: "11px", letterSpacing: ".09em", fill: "#3D7558" }}>GOVERNANCE</text>
        </g>

        {/* Outputs */}
        {OUTPUTS.map((box) => (
          <OutputBox key={`out-${box.y}`} box={box} />
        ))}

        {/* ROI strip */}
        <line x1="20" y1="462" x2="660" y2="462" stroke="#d3d1c7" strokeWidth="0.5" />
        <text x="340" y="484" textAnchor="middle" style={labelStyle}>ILLUSTRATIVE TARGETS</text>
        {ROI.map((r) => (
          <g className="ri nh" style={{ animationDelay: r.delay }} key={`roi-${r.x}`}>
            <rect x={r.x} y="494" width={r.w} height="104" rx="10" fill="#f1efe8" stroke="#d3d1c7" strokeWidth="0.5" />
            <text x={r.cx} y="532" textAnchor="middle" style={{ fontSize: "24px", fontWeight: 500, fill: "#4A8C6A" }}>{r.num}</text>
            <text className="ts" x={r.cx} y="552" textAnchor="middle">{r.l1}</text>
            <text className="ts" x={r.cx} y="568" textAnchor="middle">{r.l2}</text>
          </g>
        ))}

        {/* Animated dots: input → center */}
        {LEFT_DOTS.map((dot, i) => (
          <circle key={`ld-${i}`} r="3" fill="#4A8C6A" opacity="0.7" className="dot-left">
            <animateMotion dur={dot.dur} repeatCount="indefinite" begin={dot.begin}>
              <mpath href={`#${dot.path}`} />
            </animateMotion>
          </circle>
        ))}

        {/* Animated dots: center → output */}
        {RIGHT_DOTS.map((dot, i) => (
          <circle key={`rd-${i}`} r="3" fill="#70C090" opacity="0.8" className="dot-right">
            <animateMotion dur={dot.dur} repeatCount="indefinite" begin={dot.begin}>
              <mpath href={`#${dot.path}`} />
            </animateMotion>
          </circle>
        ))}
      </svg>
    </div>
  );
}
