import { Section, Headline, Lede, Reveal } from "./primitives";
import { cn } from "@/lib/utils";

const cols = [
  "Agent frameworks",
  "Observability",
  "Security / governance",
  "Workflow orchestration",
  "Sulcus",
];

type Mark = "yes" | "partial" | "no";

const rows: { label: string; marks: Mark[] }[] = [
  { label: "Build agent workflows", marks: ["yes", "no", "no", "partial", "no"] },
  { label: "Trace execution", marks: ["partial", "yes", "no", "partial", "yes"] },
  { label: "Policy enforcement", marks: ["no", "no", "yes", "partial", "yes"] },
  { label: "Multi-agent coordination", marks: ["partial", "no", "no", "partial", "yes"] },
  { label: "Runtime supervision", marks: ["no", "partial", "partial", "no", "yes"] },
  { label: "Intervention", marks: ["no", "no", "partial", "partial", "yes"] },
  { label: "Execution control", marks: ["partial", "no", "no", "partial", "yes"] },
  { label: "Replay / system reconstruction", marks: ["no", "partial", "no", "partial", "yes"] },
];

const glyph: Record<Mark, string> = { yes: "●", partial: "◐", no: "—" };

export function Compare() {
  return (
    <Section id="positioning" index="10" label="Positioning">
      <Reveal>
        <Headline>Layers, not competitors.</Headline>
      </Reveal>
      <Reveal delay={80}>
        <Lede className="mt-6">
          Sulcus is not competing to be another agent framework. It aims to sit underneath and
          around them. Focus areas below reflect typical category scope, not vendor comparisons.
        </Lede>
      </Reveal>

      <Reveal delay={120}>
        <div className="mt-12 overflow-x-auto rounded-lg border border-border">
          <table className="w-full min-w-[720px] border-collapse text-sm">
            <caption className="sr-only">Capability focus by infrastructure layer</caption>
            <thead>
              <tr className="bg-surface-2/60">
                <th scope="col" className="p-4 text-left label-mono">capability</th>
                {cols.map((c) => (
                  <th
                    key={c}
                    scope="col"
                    className={cn(
                      "p-4 text-left text-xs font-medium",
                      c === "Sulcus" ? "text-primary" : "text-muted-foreground",
                    )}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label} className="border-t border-border">
                  <th scope="row" className="p-4 text-left font-normal text-foreground/90">
                    {r.label}
                  </th>
                  {r.marks.map((m, i) => (
                    <td
                      key={cols[i]}
                      className={cn(
                        "p-4 font-mono",
                        cols[i] === "Sulcus" ? "bg-primary/[0.05] text-primary" : "text-muted-foreground",
                      )}
                    >
                      <span className="sr-only">{m}</span>
                      <span aria-hidden="true">{glyph[m]}</span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
      <Reveal delay={160}>
        <p className="mt-5 font-mono text-xs text-muted-foreground">
          ● primary focus · ◐ partial · — out of scope. Sulcus capabilities describe the product
          direction under development.
        </p>
      </Reveal>
    </Section>
  );
}
