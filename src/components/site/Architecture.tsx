import { useState } from "react";
import { Section, Headline, Lede, Reveal } from "./primitives";
import { cn } from "@/lib/utils";

type Node = {
  id: string;
  title: string;
  body: string;
  x: number;
  y: number;
  w: number;
  tier: "runtime" | "control" | "surface";
};

const nodes: Node[] = [
  { id: "runtime", title: "Agent Runtime", body: "Where autonomous agents execute.", x: 40, y: 30, w: 230, tier: "runtime" },
  { id: "graph", title: "Execution Graph", body: "Represents dependencies, state transitions, and agent workflows.", x: 300, y: 30, w: 230, tier: "runtime" },
  { id: "state", title: "State & Coordination", body: "Handles shared state and coordination between concurrent agents.", x: 560, y: 30, w: 240, tier: "runtime" },
  { id: "control", title: "Control Plane", body: "Sulcus supervises execution and enforces system-level policies.", x: 40, y: 170, w: 760, tier: "control" },
  { id: "events", title: "Event Layer", body: "Captures execution events, decisions, state changes, tool calls, and failures.", x: 40, y: 300, w: 180, tier: "surface" },
  { id: "policy", title: "Policy Engine", body: "Defines what agents can and cannot do.", x: 240, y: 300, w: 180, tier: "surface" },
  { id: "obs", title: "Observability", body: "Provides a complete execution history and system-level visibility.", x: 440, y: 300, w: 180, tier: "surface" },
  { id: "intervene", title: "Intervention", body: "Allows operators or automated policies to pause, redirect, isolate, or terminate execution.", x: 640, y: 300, w: 160, tier: "surface" },
];

export function Architecture() {
  const [active, setActive] = useState<string>("control");
  const current = nodes.find((n) => n.id === active)!;

  return (
    <Section id="architecture" index="04" label="Architecture">
      <Reveal>
        <Headline>Built for systems that act.</Headline>
      </Reveal>
      <Reveal delay={80}>
        <Lede className="mt-6">
          A supervision plane between autonomous agents and everything they touch. Select a
          component to inspect its role.
        </Lede>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-12 grid gap-6 lg:grid-cols-[1.6fr_1fr]">
          <div className="panel overflow-hidden">
            <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
              <span className="label-mono">system topology</span>
              <span className="label-mono text-primary">event flow active</span>
            </div>
            <div className="overflow-x-auto p-4">
              <svg viewBox="0 0 840 400" className="h-[340px] w-full min-w-[640px]" role="img" aria-label="Sulcus architecture diagram">
                {/* connectors */}
                {["155,100 155,170", "415,100 415,170", "680,100 680,170"].map((pts, i) => (
                  <polyline
                    key={pts}
                    points={pts}
                    fill="none"
                    stroke="var(--signal)"
                    strokeOpacity="0.6"
                    strokeWidth="1"
                    className="anim-flow"
                    style={{ animationDelay: `${i * 0.6}s` }}
                  />
                ))}
                {[130, 330, 530, 720].map((x, i) => (
                  <polyline
                    key={x}
                    points={`${x},240 ${x},300`}
                    fill="none"
                    stroke="var(--border-strong)"
                    strokeWidth="1"
                    className="anim-flow"
                    style={{ animationDelay: `${i * 0.5}s` }}
                  />
                ))}

                {nodes.map((n) => {
                  const isActive = n.id === active;
                  const h = n.tier === "control" ? 70 : 70;
                  return (
                    <g
                      key={n.id}
                      onMouseEnter={() => setActive(n.id)}
                      onClick={() => setActive(n.id)}
                      className="cursor-pointer"
                    >
                      <rect
                        x={n.x}
                        y={n.y}
                        width={n.w}
                        height={h}
                        rx={3}
                        fill={n.tier === "control" ? "color-mix(in oklab, var(--signal) 9%, var(--surface))" : "var(--surface-2)"}
                        stroke={isActive || n.tier === "control" ? "var(--signal)" : "var(--border-strong)"}
                        strokeOpacity={isActive ? 1 : n.tier === "control" ? 0.6 : 0.8}
                      />
                      <text
                        x={n.x + 14}
                        y={n.y + 28}
                        fontSize="12"
                        fontFamily="var(--font-mono)"
                        fill={n.tier === "control" || isActive ? "var(--signal)" : "var(--foreground)"}
                      >
                        {n.title}
                      </text>
                      <text x={n.x + 14} y={n.y + 48} fontSize="10" fontFamily="var(--font-mono)" fill="var(--muted-foreground)">
                        {n.tier === "control" ? "supervision · policy · intervention" : n.tier}
                      </text>
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>

          <aside className="panel flex flex-col p-6">
            <span className="label-mono text-primary">{current.tier}</span>
            <h3 className="mt-4 text-2xl font-semibold">{current.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{current.body}</p>
            <div className="mt-8 space-y-px overflow-hidden rounded-sm border border-border">
              {nodes.map((n) => (
                <button
                  key={n.id}
                  type="button"
                  onClick={() => setActive(n.id)}
                  className={cn(
                    "flex w-full items-center justify-between px-3 py-2.5 text-left font-mono text-xs transition-colors",
                    n.id === active
                      ? "bg-primary/10 text-primary"
                      : "bg-surface/40 text-muted-foreground hover:text-foreground",
                  )}
                >
                  {n.title}
                  <span>{n.id === active ? "●" : "○"}</span>
                </button>
              ))}
            </div>
          </aside>
        </div>
      </Reveal>
    </Section>
  );
}
