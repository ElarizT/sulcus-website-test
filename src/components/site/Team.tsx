import { Section, Headline, Lede, Reveal } from "./primitives";

const people = [
  { role: "Founder", note: "Profile to be added." },
  { role: "Co-founder", note: "Profile to be added." },
  { role: "Technical Founder / Engineering", note: "Profile to be added." },
  { role: "Advisors", note: "Advisor profiles to be added." },
];

export function Team() {
  return (
    <Section id="team" index="16" label="Team">
      <Reveal>
        <Headline>Engineers building infrastructure.</Headline>
      </Reveal>
      <Reveal delay={80}>
        <Lede className="mt-6">
          Profiles, biographies, and links are being finalized.
        </Lede>
      </Reveal>

      <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {people.map((p, i) => (
          <Reveal key={p.role} delay={i * 70} className="bg-background">
            <article className="h-full bg-surface/50 p-6">
              <div className="flex h-24 w-24 items-center justify-center rounded-sm border border-dashed border-border-strong bg-surface-2/50">
                <span className="label-mono">photo</span>
              </div>
              <h3 className="mt-6 text-base font-semibold">{p.role}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.note}</p>
              <p className="mt-6 font-mono text-[11px] text-muted-foreground/70">linkedin · pending</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
