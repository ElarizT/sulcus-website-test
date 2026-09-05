import { useEffect, useState } from "react";
import { Section, Headline, Lede, Reveal, useInView } from "./primitives";
import { cn } from "@/lib/utils";

type Step = {
  actor: string;
  event: string;
  tone: "normal" | "warn" | "control" | "ok";
};

const steps: Step[] = [
  { actor: "ingress", event: "task received · id=tsk_8f21", tone: "normal" },
  { actor: "agent.a", event: "decomposed task into 4 subtasks", tone: "normal" },
  { actor: "agent.b", event: "research: 12 sources retrieved", tone: "normal" },
  { actor: "agent.c", event: "tool_call: billing.write(amount=…)", tone: "normal" },
  { actor: "agent.d", event: "anomaly detected in subtask 3", tone: "warn" },
  { actor: "sulcus.policy", event: "violation: write outside approved scope", tone: "warn" },
  { actor: "sulcus.control", event: "execution paused · graph frozen", tone: "control" },
  { actor: "operator", event: "inspecting execution graph", tone: "control" },
  { actor: "sulcus.control", event: "policy amended · execution resumed", tone: "ok" },
];

const toneClass: Record<Step["tone"], string> = {
  normal: "text-muted-foreground",
  warn: "text-warn",
  control: "text-primary",
  ok: "text-primary",
};

const graphNodes = [
  { id: "A", x: 60, y: 40 },
  { id: "B", x: 200, y: 20 },
  { id: "C", x: 200, y: 110 },
  { id: "D", x: 340, y: 65 },
];

export function FlagshipDemo() {
  const { ref, visible } = useInView<HTMLDivElement>(0.25);
  const [i, setI] = useState(0);

  useEffect(() => {
    if (!visible) return;
    const id = setInterval(() => setI((v) => (v + 1) % (steps.length + 2)), 1100);
    return () => clearInterval(id);
  }, [visible]);

  const paused = i >= 6 && i <= 8;
  const shown = steps.slice(0, Math.min(i, steps.length));

  return (
    <Section id="demo" index="14" label="Flagship demo">
      <Reveal>
        <Headline>See autonomy under control.</Headline>
      </Reveal>
      <Reveal delay={80}>
        <Lede className="mt-6">
          A simulated production run: agents execute, a policy is violated, Sulcus pauses execution,
          an operator inspects the graph, and the workflow resumes under a modified policy.
        </Lede>
      </Reveal>

      <Reveal delay={120}>
        <div ref={ref} className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border lg:grid-cols-[1.1fr_1fr]">
          <div className="bg-surface/60">
            <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
              <span className="label-mono">event stream</span>
              <span className={cn("label-mono", paused ? "text-warn" : "text-primary")}>
                {paused ? "paused" : "running"}
              </span>
            </div>
            <ul className="h-[320px] space-y-2 overflow-hidden p-4 font-mono text-xs">
              {shown.map((s, idx) => (
                <li key={`${s.actor}-${idx}`} className="flex gap-3">
                  <span className="w-28 shrink-0 text-foreground/70">{s.actor}</span>
                  <span className={toneClass[s.tone]}>{s.event}</span>
                </li>
              ))}
              {shown.length < steps.length && (
                <li className="flex gap-3 text-primary">
                  <span className="w-28 shrink-0">…</span>
                  <span className="anim-pulse-node">awaiting next event</span>
                </li>
              )}
            </ul>
          </div>

          <div className="bg-surface/30">
            <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
              <span className="label-mono">execution graph</span>
              <span className="label-mono">tsk_8f21</span>
            </div>
            <div className="p-4">
              <svg viewBox="0 0 420 170" className="h-[220px] w-full" role="img" aria-label="Live execution graph">
                <path d="M96 54 H196" stroke="var(--border-strong)" strokeWidth="1" className="anim-flow" />
                <path d="M96 54 L196 124" stroke="var(--border-strong)" strokeWidth="1" className="anim-flow" />
                <path d="M236 34 L336 79" stroke="var(--border-strong)" strokeWidth="1" className="anim-flow" />
                <path d="M236 124 L336 79" stroke="var(--border-strong)" strokeWidth="1" className="anim-flow" />
                {graphNodes.map((n, idx) => {
                  const isActive = idx < Math.min(i, 4);
                  const flagged = paused && n.id === "C";
                  return (
                    <g key={n.id}>
                      <rect
                        x={n.x - 26}
                        y={n.y - 14}
                        width={52}
                        height={28}
                        rx={3}
                        fill="var(--surface-2)"
                        stroke={flagged ? "var(--warn)" : isActive ? "var(--signal)" : "var(--border-strong)"}
                      />
                      <text
                        x={n.x}
                        y={n.y + 4}
                        textAnchor="middle"
                        fontSize="11"
                        fontFamily="var(--font-mono)"
                        fill={flagged ? "var(--warn)" : isActive ? "var(--signal)" : "var(--muted-foreground)"}
                      >
                        {n.id}
                      </text>
                    </g>
                  );
                })}
              </svg>

              <div
                className={cn(
                  "mt-2 rounded-sm border px-4 py-3 font-mono text-[11px]",
                  paused ? "border-warn/60 text-warn" : "border-primary/50 text-primary",
                )}
              >
                {paused
                  ? "sulcus · intervention active — execution halted at node C"
                  : "sulcus · supervising 4 nodes, 0 violations"}
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
