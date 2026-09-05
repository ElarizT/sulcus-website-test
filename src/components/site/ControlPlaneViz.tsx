const agents = [
  { x: 90, label: "AGENT A", sub: "planner" },
  { x: 300, label: "AGENT B", sub: "research" },
  { x: 510, label: "AGENT C", sub: "executor" },
  { x: 720, label: "AGENT D", sub: "verifier" },
  { x: 930, label: "AGENT E", sub: "async" },
];

const targets = [
  { x: 120, label: "TOOLS" },
  { x: 350, label: "MODELS" },
  { x: 580, label: "SHARED STATE" },
  { x: 810, label: "EXTERNAL SYSTEMS" },
];

export function ControlPlaneViz() {
  return (
    <figure className="panel overflow-hidden">
      <figcaption className="flex items-center justify-between border-b border-border px-4 py-2.5">
        <span className="label-mono">runtime · live execution</span>
        <span className="label-mono text-primary">supervised</span>
      </figcaption>
      <div className="overflow-x-auto">
        <svg
          viewBox="0 0 1040 420"
          className="h-[300px] w-full min-w-[720px] md:h-[420px]"
          role="img"
          aria-label="Multi-agent system supervised by the Sulcus control plane"
        >
          <defs>
            <linearGradient id="cp-bar" x1="0" x2="1">
              <stop offset="0%" stopColor="var(--signal)" stopOpacity="0.14" />
              <stop offset="50%" stopColor="var(--signal)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="var(--signal)" stopOpacity="0.14" />
            </linearGradient>
          </defs>

          {/* agents */}
          {agents.map((a, i) => (
            <g key={a.label}>
              <rect
                x={a.x}
                y={40}
                width={110}
                height={54}
                rx={3}
                fill="var(--surface-2)"
                stroke="var(--border-strong)"
              />
              <circle
                cx={a.x + 12}
                cy={54}
                r={3}
                fill="var(--signal)"
                className="anim-pulse-node"
                style={{ animationDelay: `${i * 0.45}s` }}
              />
              <text x={a.x + 24} y={58} fill="var(--foreground)" fontSize="11" fontFamily="var(--font-mono)">
                {a.label}
              </text>
              <text x={a.x + 12} y={80} fill="var(--muted-foreground)" fontSize="10" fontFamily="var(--font-mono)">
                {a.sub}
              </text>
              <path
                d={`M${a.x + 55} 94 L${a.x + 55} 176`}
                stroke="var(--signal)"
                strokeOpacity="0.55"
                strokeWidth="1"
                className="anim-flow"
                style={{ animationDelay: `${i * 0.7}s` }}
              />
            </g>
          ))}

          {/* peer-to-peer agent edges */}
          <path d="M200 67 H300" stroke="var(--accent)" strokeOpacity="0.4" strokeWidth="1" className="anim-flow" />
          <path d="M620 67 H720" stroke="var(--accent)" strokeOpacity="0.4" strokeWidth="1" className="anim-flow" />

          {/* control plane */}
          <rect x={40} y={176} width={960} height={68} rx={4} fill="url(#cp-bar)" stroke="var(--signal)" strokeOpacity="0.5" />
          <text x={64} y={205} fill="var(--foreground)" fontSize="13" fontFamily="var(--font-mono)" letterSpacing="3">
            SULCUS CONTROL PLANE
          </text>
          <text x={64} y={225} fill="var(--muted-foreground)" fontSize="11" fontFamily="var(--font-mono)">
            policy · coordination · event capture · intervention
          </text>
          {["events 12.4k/s", "policies 38", "paused 0"].map((t, i) => (
            <text
              key={t}
              x={640 + i * 130}
              y={215}
              fill="var(--signal)"
              fontSize="10"
              fontFamily="var(--font-mono)"
              opacity="0.85"
            >
              {t}
            </text>
          ))}

          {/* downstream */}
          {targets.map((t, i) => (
            <g key={t.label}>
              <path
                d={`M${t.x + 70} 244 L${t.x + 70} 320`}
                stroke="var(--border-strong)"
                strokeWidth="1"
                className="anim-flow"
                style={{ animationDelay: `${i * 0.9}s` }}
              />
              <rect x={t.x} y={320} width={140} height={46} rx={3} fill="var(--surface)" stroke="var(--border)" />
              <text
                x={t.x + 14}
                y={348}
                fill="var(--muted-foreground)"
                fontSize="10.5"
                fontFamily="var(--font-mono)"
                letterSpacing="1.5"
              >
                {t.label}
              </text>
            </g>
          ))}

          <text x={40} y={396} fill="var(--muted-foreground)" fontSize="10" fontFamily="var(--font-mono)" opacity="0.6">
            infrastructure
          </text>
          <line x1={40} y1={404} x2={1000} y2={404} stroke="var(--border)" strokeDasharray="2 6" />
        </svg>
      </div>
    </figure>
  );
}
