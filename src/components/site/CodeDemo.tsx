import demo from "../../examples/approval_demo.py?raw";
import demoUrl from "../../examples/approval_demo.py?url";
import { Section, Headline, Lede } from "./primitives";
import { SOURCE } from "./content";
const code = demo
  .slice(
    demo.indexOf("# website-snippet-start") + "# website-snippet-start".length,
    demo.indexOf("# website-snippet-end"),
  )
  .trim();
export function CodeDemo() {
  return (
    <Section id="developers" index="03" label="Real code / offline example">
      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <Headline>
            Ask. Check.
            <br />
            Approve. Execute.
          </Headline>
          <Lede className="mt-6">
            A registered <code>publish_report</code> tool stays uncalled until the application
            approves it. This example uses a scripted provider and simulates publication in memory.
          </Lede>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
            The excerpt uses a configured <code>AgentToolLoop</code>. The complete file includes
            public imports, tool registration, the provider, and assertions. No API key or Rust
            dependency is required.
          </p>
          <a
            className="mt-7 inline-block text-sm text-primary hover:underline"
            href={demoUrl}
            download="approval_demo.py"
          >
            Download the complete Python example ↓
          </a>
          <div className="mt-7 border-t border-border pt-5">
            <p className="label-mono">With Sulcus installed</p>
            <code className="mt-3 block break-words font-mono text-xs">
              python approval_demo.py
            </code>
            <a
              className="mt-4 inline-block text-sm text-muted-foreground hover:text-primary"
              href={`${SOURCE}/docs/installation.md`}
            >
              Source installation instructions ↗
            </a>
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            Verified against development revision 1070b5e (1.0.0rc1). The approval decision is
            supplied by application code, not an authenticated approval service.
          </p>
        </div>
        <div className="panel min-w-0 overflow-hidden">
          <div className="flex flex-wrap justify-between gap-2 border-b border-border px-5 py-3">
            <span className="label-mono">approval_demo.py / excerpt</span>
            <span className="label-mono text-primary">Public APIs</span>
          </div>
          <pre
            tabIndex={0}
            aria-label="Python approval example"
            className="overflow-x-auto p-5 font-mono text-[11px] leading-6 md:text-xs"
          >
            <code>{code}</code>
          </pre>
          <div className="border-t border-border bg-primary/5 p-5 font-mono text-xs leading-6">
            <p className="label-mono mb-2">Expected output / offline demo</p>
            <p>Before approval: 0 tool executions</p>
            <p className="text-primary">After approval: 1 simulated publication</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
