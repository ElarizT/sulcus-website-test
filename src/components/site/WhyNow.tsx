import { Section, Headline, Lede, Reveal } from "./primitives";

const stages = [
  "Traditional software",
  "AI assistants",
  "Tool-using agents",
  "Autonomous workflows",
  "Multi-agent systems",
  "Persistent autonomous systems",
];

export function WhyNow() {
  return (
    <Section id="why-now" index="08" label="Why now">
      <Reveal>
        <Headline>The autonomy curve is accelerating.</Headline>
      </Reveal>
      <Reveal delay={80}>
        <Lede className="mt-6">
          As AI systems move from generating information to taking actions, the infrastructure
          requirements change.
        </Lede>
      </Reveal>

      <Reveal delay={120}>
        <ol className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-6">
          {stages.map((s, i) => (
            <li key={s} className="relative bg-surface/50 p-5">
              <div className="flex items-center gap-2">
                <span
                  className="h-1.5 w-1.5 rounded-full bg-primary anim-pulse-node"
                  style={{ animationDelay: `${i * 0.3}s`, opacity: 0.3 + i * 0.14 }}
                />
                <span className="label-mono">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <p className="mt-6 text-sm font-medium leading-snug">{s}</p>
              <div
                className="mt-6 h-0.5 rounded-full bg-primary"
                style={{ width: `${18 + i * 16}%`, opacity: 0.35 + i * 0.12 }}
              />
            </li>
          ))}
        </ol>
      </Reveal>

      <Reveal delay={160}>
        <p className="mt-10 max-w-3xl text-base leading-relaxed md:text-lg">
          The more autonomy a system has, the more{" "}
          <span className="text-primary">control, observability, coordination, and governance</span>{" "}
          become load-bearing infrastructure rather than optional tooling.
        </p>
      </Reveal>
    </Section>
  );
}
