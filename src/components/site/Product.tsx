import { Section, Headline, Lede } from "./primitives";
const capabilities = [
  [
    "Tool-name permissions",
    "Implemented",
    "Allow or deny registered tool names before execution. Deny rules win; use default_allow=False for an explicit allowlist.",
  ],
  [
    "Bounded tool calls",
    "Implemented",
    "Cap loop rounds and requested calls per loop, round, or tool. These are call-count controls, not hard CPU or spending limits.",
  ],
  [
    "Approval gates",
    "Implemented",
    "Pause eligible calls before invocation. Resume with caller-supplied decisions; incomplete decision sets execute nothing.",
  ],
  [
    "Approval checkpoints",
    "Implemented · local",
    "Save paused approval state as versioned JSON. Reconstruct compatible tools and runtimes to resume after a restart.",
  ],
  [
    "Runtime events",
    "Implemented",
    "Inspect structured lifecycle, tool, limit, and approval events. Event playback shows recorded history; it does not re-execute a workflow.",
  ],
  [
    "Process supervision",
    "Implemented · scoped",
    "Manage Sulcus agent processes with parent–child ownership, restart strategies, and restart budgets. A restart is not automatic recovery of every side effect.",
  ],
];
export function Product() {
  return (
    <Section id="capabilities" index="04" label="Available now" compact>
      <Headline>
        Concrete controls.
        <br />
        Visible outcomes.
      </Headline>
      <Lede className="mt-6">
        These runtime primitives are implemented in the 1.0 release candidate, each with a stated
        scope.
      </Lede>
      <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
        {capabilities.map(([title, status, body], i) => (
          <article key={title} className="bg-background p-7">
            <div className="flex items-center justify-between gap-3">
              <span className="label-mono text-primary">0{i + 1}</span>
              <span className="font-mono text-[10px] text-muted-foreground">{status}</span>
            </div>
            <h3 className="mt-6 text-xl font-semibold">{title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{body}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}
