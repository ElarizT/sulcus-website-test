import { Section, Headline, Lede, Reveal } from "./primitives";

const pairs = [
  { a: "Agent A", b: "Tool 1" },
  { a: "Agent B", b: "Tool 2" },
  { a: "Agent C", b: "Database" },
  { a: "Agent D", b: "Agent A" },
];

const risks = [
  "conflicting state",
  "duplicated actions",
  "race conditions",
  "inconsistent decisions",
  "cascading failures",
];

export function Coordination() {
  return (
    <Section id="coordination" index="05" label="When agents stop acting alone">
      <Reveal>
        <Headline>Autonomy requires coordination.</Headline>
      </Reveal>
      <Reveal delay={80}>
        <Lede className="mt-6">
          As agent systems become multi-agent and asynchronous, execution itself becomes a systems
          problem. Sulcus provides the control primitives required to reason about that execution.
        </Lede>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        <Reveal className="lg:col-span-2">
          <div className="panel p-6">
            <p className="label-mono">simultaneous execution</p>
            <div className="mt-5 space-y-3">
              {pairs.map((p, i) => (
                <div key={p.a} className="flex items-center gap-3">
                  <span className="w-24 font-mono text-xs text-foreground">{p.a}</span>
                  <span className="relative h-px flex-1 overflow-hidden bg-border">
                    <span
                      className="absolute inset-y-0 left-0 w-1/3 bg-primary/70 anim-pulse-node"
                      style={{ animationDelay: `${i * 0.4}s` }}
                    />
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">→ {p.b}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-sm border border-primary/50 bg-primary/[0.06] px-5 py-4">
              <p className="font-mono text-xs tracking-[0.14em] text-primary">
                SULCUS · COORDINATION &amp; SUPERVISION
              </p>
              <p className="mt-2 text-sm text-muted-foreground">
                Ordering, locks, policy checks, and arbitration applied above the execution
                environment.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="panel h-full p-6">
            <p className="label-mono">failure modes without a control layer</p>
            <ul className="mt-5 space-y-3">
              {risks.map((r) => (
                <li key={r} className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="h-1 w-1 rounded-full bg-destructive" />
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
