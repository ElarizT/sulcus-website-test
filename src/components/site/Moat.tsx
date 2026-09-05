import { Section, Headline, Lede, Reveal } from "./primitives";

const items = [
  { t: "Runtime knowledge", b: "Deep understanding of how autonomous systems behave in production." },
  { t: "Execution data", b: "System-level execution histories can create valuable infrastructure knowledge." },
  { t: "Policy & control primitives", b: "The control model becomes embedded into production systems." },
  { t: "Developer integration", b: "Once integrated into an organization's agent infrastructure, switching costs increase." },
  { t: "Ecosystem position", b: "Sulcus can sit underneath multiple agent frameworks rather than betting on one." },
];

const frameworks = ["Framework A", "Framework B", "Framework C", "Custom runtimes"];
const apps = ["AI products", "Internal workflows", "Enterprise systems"];

export function Moat() {
  return (
    <Section id="defensibility" index="11" label="Defensibility">
      <Reveal>
        <Headline>The moat is the execution layer.</Headline>
      </Reveal>
      <Reveal delay={80}>
        <Lede className="mt-6">
          Long-term defensibility comes from being the layer where autonomous execution is observed,
          governed, and controlled.
        </Lede>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_1fr]">
        <div className="grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2">
          {items.map((i, idx) => (
            <Reveal key={i.t} delay={idx * 60} className="bg-background">
              <article className="h-full bg-surface/50 p-6">
                <h3 className="text-base font-semibold">{i.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{i.b}</p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="panel flex h-full flex-col justify-center gap-4 p-8">
            <div className="grid grid-cols-2 gap-2">
              {frameworks.map((f) => (
                <div key={f} className="rounded-sm border border-border bg-surface-2/60 px-3 py-3 text-center font-mono text-[11px] text-muted-foreground">
                  {f}
                </div>
              ))}
            </div>
            <div className="mx-auto h-5 w-px bg-border-strong" />
            <div
              className="rounded-sm border border-primary/60 bg-primary/[0.07] px-4 py-5 text-center font-mono text-xs tracking-[0.18em] text-primary"
              style={{ boxShadow: "var(--glow-signal)" }}
            >
              SULCUS
            </div>
            <div className="mx-auto h-5 w-px bg-border-strong" />
            <div className="grid grid-cols-3 gap-2">
              {apps.map((a) => (
                <div key={a} className="rounded-sm border border-border bg-surface-2/60 px-2 py-3 text-center font-mono text-[11px] text-muted-foreground">
                  {a}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
