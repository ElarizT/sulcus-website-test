import { useState } from "react";
import { Section, Headline, Lede } from "./primitives";
const outcomes = [
  {
    label: "Allowed",
    status: "COMPLETED",
    note: "The tool is permitted, the call is within its limits, and approval is disabled for this example. The registered callable runs after argument validation.",
    lines: [
      "request   publish_report()",
      "policy    tool name allowed",
      "limits    requested call within limit",
      "approval  not required",
      "execute   registered callable invoked",
      "result    tool completed",
    ],
  },
  {
    label: "Denied",
    status: "NOT EXECUTED",
    note: "A deny rule matches the tool name. The loop returns a tool error without invoking the callable. Whether the loop stops or continues depends on its error configuration.",
    lines: [
      "request   publish_report()",
      "policy    tool name denied",
      "execute   callable not invoked",
      "result    permission denial returned",
    ],
  },
  {
    label: "Approval required",
    status: "AWAITING DECISION",
    note: "Policy and call limits pass. The loop returns a checkpoint before the pending callable runs. The application must provide every pending decision to resume.",
    lines: [
      "request   publish_report()",
      "policy    tool name allowed",
      "limits    requested call within limit",
      "approval  caller decision required",
      "state     approval checkpoint returned",
      "execute   waiting for complete decisions",
    ],
  },
];
export function ExecutionControl() {
  const [selected, setSelected] = useState(2);
  const outcome = outcomes[selected]!;
  return (
    <Section id="execution" index="01" label="One requested action">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <Headline>
            A tool request
            <br />
            is a decision point.
          </Headline>
          <Lede className="mt-6">
            An agent can ask to publish a report. When the request goes through Sulcus, your runtime
            configuration determines whether that registered tool can run—or must wait for approval.
          </Lede>
          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            This boundary works for a single agent. No second model is required to make the
            permission or approval check.
          </p>
          <p className="mt-8 label-mono">Explore three configurations →</p>
        </div>
        <div className="panel min-w-0 overflow-hidden">
          <div className="flex flex-wrap justify-between gap-2 border-b border-border px-5 py-3">
            <span className="label-mono">Tool request / publish_report</span>
            <span className="label-mono">Illustrative trace</span>
          </div>
          <div className="flex flex-wrap gap-2 p-4" role="group" aria-label="Execution scenario">
            {outcomes.map((item, i) => (
              <button
                key={item.label}
                type="button"
                aria-pressed={selected === i}
                onClick={() => setSelected(i)}
                className={`rounded-sm border px-3 py-2 font-mono text-xs transition-colors ${selected === i ? "border-primary bg-primary/10 text-primary" : "border-border text-muted-foreground hover:border-border-strong"}`}
              >
                {item.label}
              </button>
            ))}
          </div>
          <div aria-live="polite" aria-atomic="true" className="px-5 pb-6">
            <p className="mb-4 font-mono text-xs text-primary">● {outcome.status}</p>
            <ol className="min-h-44 space-y-2 font-mono text-xs leading-relaxed">
              {outcome.lines.map((line, i) => (
                <li key={line} className="flex gap-3">
                  <span className="text-muted-foreground/60">0{i + 1}</span>
                  <span className="whitespace-pre-wrap break-words">{line}</span>
                </li>
              ))}
            </ol>
            <p className="border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
              {outcome.note}
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
