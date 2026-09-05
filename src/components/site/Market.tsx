import { Section, Headline, Lede, Reveal } from "./primitives";
import { cn } from "@/lib/utils";

const stack = [
  { name: "Foundation models", state: "established" },
  { name: "Model APIs", state: "established" },
  { name: "Agent frameworks", state: "established" },
  { name: "Vector databases", state: "established" },
  { name: "Inference infrastructure", state: "established" },
  { name: "Observability platforms", state: "established" },
  { name: "Control & supervision for production agents", state: "emerging", key: true },
];

export function Market() {
  return (
    <Section id="market" index="09" label="Market thesis">
      <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div>
          <Reveal>
            <Headline>A new infrastructure layer is emerging.</Headline>
          </Reveal>
          <Reveal delay={80}>
            <Lede className="mt-6">
              The AI ecosystem has built models, APIs, frameworks, retrieval, inference, and
              observability. Autonomous systems create one more requirement: a control and
              supervision layer for production agents.
            </Lede>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-8 border-l-2 border-primary pl-5 text-base leading-relaxed md:text-lg">
              If autonomous agents become a fundamental computing primitive, controlling their
              execution becomes fundamental infrastructure.
            </p>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-8 font-mono text-xs text-muted-foreground">
              Market sizing intentionally omitted. Sourced figures can be added to a dedicated
              market section.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="space-y-2">
            {stack.map((s) => (
              <div
                key={s.name}
                className={cn(
                  "flex items-center justify-between rounded-sm border px-5 py-4",
                  s.key ? "border-primary/60 bg-primary/[0.07]" : "border-border bg-surface/40",
                )}
                style={s.key ? { boxShadow: "var(--glow-signal)" } : undefined}
              >
                <span className={cn("text-sm", s.key ? "text-primary" : "text-foreground/85")}>
                  {s.name}
                </span>
                <span className="label-mono">{s.key ? "sulcus" : s.state}</span>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
