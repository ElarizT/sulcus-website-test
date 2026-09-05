import { Section, Headline, Lede, Reveal } from "./primitives";

const segments = [
  { t: "AI-native startups", b: "Companies building autonomous AI products." },
  { t: "Enterprise AI teams", b: "Organizations deploying agentic workflows internally." },
  { t: "Financial services", b: "High-value workflows requiring control, auditability, and governance." },
  { t: "Cybersecurity", b: "Autonomous systems operating against complex environments." },
  { t: "Software engineering", b: "Multi-agent coding and software development systems." },
  { t: "Operations", b: "Agents interacting with business systems and executing workflows." },
];

export function Customers() {
  return (
    <Section id="customers" index="13" label="Target customers / initial market">
      <Reveal>
        <Headline>Built for teams pushing agents into production.</Headline>
      </Reveal>
      <Reveal delay={80}>
        <Lede className="mt-6">
          Initial market focus. These are target segments, not existing customers.
        </Lede>
      </Reveal>

      <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
        {segments.map((s, i) => (
          <Reveal key={s.t} delay={i * 60} className="bg-background">
            <article className="h-full bg-surface/50 p-7">
              <span className="label-mono text-primary">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-5 text-lg font-semibold">{s.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.b}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
