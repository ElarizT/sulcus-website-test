import { useEffect, useState } from "react";
import { Section, Headline, Lede, Reveal, useInView } from "./primitives";

const CODE = `from sulcus import Supervisor

supervisor = Supervisor(
    policy="production",
    max_parallel_agents=10
)

with supervisor.run(agent_system):
    result = agent_system.execute(task)`;

function useTypewriter(text: string, active: boolean, speed = 14) {
  const [out, setOut] = useState("");
  useEffect(() => {
    if (!active) return;
    let i = 0;
    const id = setInterval(() => {
      i += 1;
      setOut(text.slice(0, i));
      if (i >= text.length) clearInterval(id);
    }, speed);
    return () => clearInterval(id);
  }, [text, active, speed]);
  return out;
}

export function CodeDemo() {
  const { ref, visible } = useInView<HTMLDivElement>(0.3);
  const typed = useTypewriter(CODE, visible);

  return (
    <Section id="developers" index="07" label="Developer experience">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:items-center">
        <div>
          <Reveal>
            <Headline>Designed to fit into the stack, not replace it.</Headline>
          </Reveal>
          <Reveal delay={80}>
            <Lede className="mt-6">
              Sulcus is intended to wrap existing agent architectures rather than require teams to
              rebuild them. Supervision is applied around the runtime you already use.
            </Lede>
          </Reveal>
          <Reveal delay={140}>
            <div className="mt-8 space-y-3 border-l border-border pl-5">
              {[
                "Wraps agent execution instead of owning it",
                "Policy defined as configuration, enforced at runtime",
                "Framework and runtime compatibility — roadmap",
              ].map((t) => (
                <p key={t} className="font-mono text-xs text-muted-foreground">
                  {t}
                </p>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <div ref={ref} className="panel overflow-hidden" style={{ boxShadow: "var(--shadow-panel)" }}>
            <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
              <span className="label-mono">supervisor.py</span>
              <span className="label-mono text-primary">conceptual</span>
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-[13px] leading-relaxed text-foreground/90">
              <code>
                {typed}
                <span className="ml-0.5 inline-block h-4 w-2 translate-y-0.5 bg-primary" style={{ animation: "sulcus-caret 1s steps(1) infinite" }} />
              </code>
            </pre>
            <div className="border-t border-border px-4 py-2.5">
              <span className="label-mono">
                illustrative API · not a released interface
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
