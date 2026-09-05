import { Section, Headline, Lede } from "./primitives";
import { SOURCE } from "./content";
export function LangGraph() {
  return (
    <Section id="langgraph" index="05" label="LangGraph today" compact>
      <div className="flex flex-wrap items-start justify-between gap-5">
        <Headline>
          Keep the graph.
          <br />
          Know the boundary.
        </Headline>
        <span className="border border-border-strong px-3 py-2 label-mono">
          Initial adapter · partial integration
        </span>
      </div>
      <Lede className="mt-6">
        Wrap a compiled graph to collect callback-exposed execution events and inspect its native
        state and checkpoint references. LangGraph continues to own execution and persistence.
      </Lede>
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <article className="panel p-7">
          <p className="label-mono text-primary">Adapter provides</p>
          <ul className="mt-5 space-y-4 text-sm leading-relaxed">
            <li>Run, node/chain, LLM, and tool lifecycle events where callbacks expose them.</li>
            <li>Native state and checkpoint-history inspection.</li>
            <li>Helpers for native interrupt/resume and explicit state updates.</li>
          </ul>
        </article>
        <article className="panel p-7">
          <p className="label-mono">Graph / application retains</p>
          <ul className="mt-5 space-y-4 text-sm leading-relaxed text-muted-foreground">
            <li>Tool execution, persistence, and interrupt placement.</li>
            <li>The meaning of approval and denial values.</li>
            <li>Its own tool policies, call limits, and approval enforcement.</li>
          </ul>
        </article>
      </div>
      <p className="mt-6 border-l-2 border-primary pl-5 text-sm leading-relaxed text-muted-foreground">
        <code>pause()</code> confirms an existing LangGraph interrupt; it does not stop a running
        node. The adapter does not automatically apply Sulcus tool policies, limits, or approval
        gates, and does not provide general cancellation.
      </p>
      <a
        className="mt-6 inline-block text-sm text-primary hover:underline"
        href={`${SOURCE}/sulcus/integrations/langgraph/adapter.py`}
      >
        Inspect the adapter source ↗
      </a>
    </Section>
  );
}
