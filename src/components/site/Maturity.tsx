import { Section, Headline, Lede } from "./primitives";
import { SOURCE } from "./content";
export function Maturity() {
  return (
    <Section id="status" index="06" label="Status & boundaries" compact>
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Headline>
            What works today.
            <br />
            What’s next.
          </Headline>
          <Lede className="mt-6">
            Sulcus 1.0.0rc1 is ready for local evaluation. Start with the example, then assess its
            boundaries against your application.
          </Lede>
          <a
            className="mt-6 inline-block text-sm text-primary hover:underline"
            href={`${SOURCE}/docs/README.md`}
          >
            Read the technical documentation ↗
          </a>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {[
            [
              "Python first; native features optional",
              "Tools, the agent loop, approval checkpoints, and events work without Rust. The bundled full runtime and dashboard need additional dependencies, including the native core.",
            ],
            [
              "Local persistence",
              "Approval checkpoints use JSON; cold memory records use JSONL. Checkpoints contain sensitive workflow data and have no encryption, signature, or distributed consumption ledger.",
            ],
            [
              "Timeouts are not cancellation",
              "A loop timeout can stop waiting while a Python tool keeps running. ToolRuntime’s own timeout is checked after return. Neither guarantees prevention of late side effects.",
            ],
            [
              "Next: production hardening",
              "No production-grade distributed runtime or exactly-once side-effect guarantee. Process isolation is not a complete security sandbox. LangGraph integration remains limited.",
            ],
          ].map(([title, body]) => (
            <div key={title} className="py-6">
              <h3 className="text-base font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
