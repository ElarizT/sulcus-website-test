import { Section, Headline, Lede, Reveal } from "./primitives";

const problems = [
  {
    n: "01",
    title: "Visibility",
    body: "You need to understand what autonomous systems are doing, not merely what the final output was.",
  },
  {
    n: "02",
    title: "Control",
    body: "Agents need explicit boundaries around what they can execute, access, and modify.",
  },
  {
    n: "03",
    title: "Coordination",
    body: "Multiple agents may operate concurrently, creating race conditions, conflicting actions, and complex dependencies.",
  },
  {
    n: "04",
    title: "Reliability",
    body: "Autonomous systems can fail in ways traditional deterministic applications do not.",
  },
  {
    n: "05",
    title: "Intervention",
    body: "Production systems require the ability to pause, inspect, redirect, or terminate execution.",
  },
];

function Chain({ items, tone }: { items: string[]; tone: "muted" | "signal" }) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-2">
      {items.map((item, i) => (
        <span key={item} className="flex items-center gap-2">
          <span
            className={
              tone === "signal"
                ? "rounded-sm border border-primary/40 bg-primary/5 px-2.5 py-1 font-mono text-xs text-primary"
                : "rounded-sm border border-border px-2.5 py-1 font-mono text-xs text-muted-foreground"
            }
          >
            {item}
          </span>
          {i < items.length - 1 && <span className="font-mono text-xs text-border-strong">→</span>}
        </span>
      ))}
    </div>
  );
}

export function Problem() {
  return (
    <Section id="problem" index="02" label="The problem">
      <Reveal>
        <Headline>Autonomy changes the infrastructure problem.</Headline>
      </Reveal>
      <Reveal delay={80}>
        <Lede className="mt-6">
          Traditional software assumes relatively deterministic execution. Agentic systems do not.
        </Lede>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="panel p-6">
            <p className="label-mono mb-4">deterministic execution</p>
            <Chain tone="muted" items={["Application", "Function", "Result"]} />
          </div>
          <div className="panel p-6">
            <p className="label-mono mb-4">agentic execution</p>
            <Chain
              tone="signal"
              items={[
                "Agent",
                "Decision",
                "Tool",
                "New state",
                "Another agent",
                "Parallel execution",
                "Unexpected event",
              ]}
            />
          </div>
        </div>
      </Reveal>

      <div className="mt-6 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-3">
        {problems.map((p, i) => (
          <Reveal key={p.n} delay={i * 70} className="bg-background">
            <article className="group h-full bg-surface/50 p-6 transition-colors hover:bg-surface-2/60">
              <div className="flex items-baseline justify-between">
                <span className="label-mono text-primary">{p.n}</span>
                <span className="h-px w-6 bg-border-strong transition-all group-hover:w-10 group-hover:bg-primary" />
              </div>
              <h3 className="mt-6 text-lg font-semibold">{p.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
            </article>
          </Reveal>
        ))}
        <Reveal delay={350} className="bg-background">
          <div className="flex h-full items-end bg-surface/20 p-6">
            <p className="text-sm leading-relaxed">
              Observability tells you what happened.{" "}
              <span className="text-primary">Sulcus is designed to help you control what happens next.</span>
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
