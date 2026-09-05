import { Reveal } from "./primitives";
import { DOCS, REPO } from "./content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-border pt-32 pb-16 md:pt-44 md:pb-24"
    >
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:linear-gradient(black,transparent)]" />
      <div className="relative mx-auto max-w-6xl px-6">
        <p className="label-mono flex flex-wrap items-center gap-3">
          <span className="h-1.5 w-1.5 bg-primary" />
          Python agent runtime
          <span className="border border-border-strong px-2 py-1">1.0 release candidate</span>
        </p>
        <h1 className="mt-8 max-w-5xl text-[clamp(3.2rem,7.5vw,6.5rem)] font-semibold leading-[0.98]">
          Runtime control
          <br />
          for <span className="text-primary">AI agents.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
          Put explicit checks between a tool request and its execution. Sulcus applies tool-name
          permissions, call limits, and approval gates to calls routed through its agent loop.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <a className="button-primary" href="#developers">
            Try the code <span aria-hidden="true">↗</span>
          </a>
          <a className="button-secondary" href={DOCS}>
            Read the docs
          </a>
          <a className="px-4 py-3 text-sm text-muted-foreground hover:text-primary" href={REPO}>
            GitHub ↗
          </a>
        </div>
        <Reveal>
          <div className="mt-12 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border pt-6 font-mono text-xs text-muted-foreground">
            <span>Agent requests</span>
            <span aria-hidden="true">→</span>
            <span className="text-primary">Sulcus checks</span>
            <span aria-hidden="true">→</span>
            <span>Your tool executes</span>
            <span className="basis-full text-[11px] md:ml-auto md:basis-auto">
              Explicit integration. Inspectable outcomes.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
