import { Section, Headline, Lede, Reveal } from "./primitives";

const model = [
  "Usage-based pricing",
  "Enterprise contracts",
  "Infrastructure / runtime usage",
  "Premium governance and control features",
  "Enterprise deployment options",
];

const loop = [
  "Developer adoption",
  "Production deployment",
  "Increased agent execution",
  "Increased infrastructure usage",
  "Expansion within enterprise",
];

export function BusinessModel() {
  return (
    <Section id="business" index="12" label="Business model">
      <Reveal>
        <Headline>Infrastructure economics.</Headline>
      </Reveal>
      <Reveal delay={80}>
        <Lede className="mt-6">
          Revenue scales with supervised execution. Pricing is not yet defined; the structure below
          is the conceptual model.
        </Lede>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
        <Reveal>
          <div className="panel h-full p-7">
            <p className="label-mono">potential model</p>
            <ul className="mt-6 space-y-4">
              {model.map((m) => (
                <li key={m} className="flex gap-3 text-sm text-foreground/85">
                  <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary" />
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="panel h-full p-7">
            <p className="label-mono">expansion loop</p>
            <div className="mt-6 space-y-3">
              {loop.map((l, i) => (
                <div key={l} className="flex items-center gap-4">
                  <span className="label-mono w-6 text-primary">{String(i + 1).padStart(2, "0")}</span>
                  <div
                    className="flex-1 rounded-sm border border-border bg-surface-2/50 px-4 py-3 text-sm"
                    style={{ marginLeft: `${i * 12}px` }}
                  >
                    {l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
