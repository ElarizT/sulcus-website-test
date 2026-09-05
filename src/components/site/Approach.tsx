import { Section, Headline, Lede, Reveal } from "./primitives";
import { cn } from "@/lib/utils";

const layers = [
  { name: "APPLICATION", note: "product surface" },
  { name: "AGENT FRAMEWORK", note: "how agents are built" },
  { name: "SULCUS CONTROL & SUPERVISION LAYER", note: "how autonomous systems are operated", key: true },
  { name: "TOOLS / MODELS / DATA / EXTERNAL SYSTEMS", note: "what agents act on" },
  { name: "INFRASTRUCTURE", note: "compute, storage, network" },
];

export function Approach() {
  return (
    <Section id="approach" index="03" label="The approach">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.05fr] lg:items-center">
        <div>
          <Reveal>
            <Headline>From agent framework to production infrastructure.</Headline>
          </Reveal>
          <Reveal delay={80}>
            <Lede className="mt-6">
              Agent frameworks — LangGraph and others — help developers construct agent workflows.
              Sulcus operates at a different layer.
            </Lede>
          </Reveal>
          <Reveal delay={140}>
            <p className="mt-6 border-l-2 border-primary pl-5 text-base leading-relaxed md:text-lg">
              Frameworks define how agents are built. Sulcus focuses on how autonomous systems are
              operated and controlled.
            </p>
          </Reveal>
        </div>

        <Reveal delay={120}>
          <div className="space-y-2">
            {layers.map((l, i) => (
              <div key={l.name}>
                <div
                  className={cn(
                    "flex flex-wrap items-center justify-between gap-2 rounded-sm border px-5 py-4 transition-colors",
                    l.key
                      ? "border-primary/60 bg-primary/[0.07]"
                      : "border-border bg-surface/40",
                  )}
                  style={l.key ? { boxShadow: "var(--glow-signal)" } : undefined}
                >
                  <span
                    className={cn(
                      "font-mono text-xs tracking-[0.14em]",
                      l.key ? "text-primary" : "text-foreground/80",
                    )}
                  >
                    {l.name}
                  </span>
                  <span className="font-mono text-[11px] text-muted-foreground">{l.note}</span>
                </div>
                {i < layers.length - 1 && (
                  <div className="mx-auto h-4 w-px bg-border-strong" aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
