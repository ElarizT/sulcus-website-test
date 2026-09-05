import { DOCS, REPO } from "./content";
import demoUrl from "../../examples/approval_demo.py?url";
export function DeveloperCTA() {
  return (
    <section className="relative overflow-hidden border-t border-border">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-50" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-24">
        <p className="label-mono text-primary">Start with one tool call</p>
        <h2 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight md:text-6xl">
          Put Sulcus in
          <br />
          the execution path.
        </h2>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground">
          Route one tool through the runtime. Inspect the policy check, approval pause, and result
          before connecting your own tools.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a className="button-primary" href={demoUrl} download="approval_demo.py">
            Download the example ↓
          </a>
          <a className="button-secondary" href={DOCS}>
            Documentation ↗
          </a>
          <a className="px-4 py-3 text-sm text-muted-foreground hover:text-primary" href={REPO}>
            Browse source ↗
          </a>
        </div>
      </div>
    </section>
  );
}
