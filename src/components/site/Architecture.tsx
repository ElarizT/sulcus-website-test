import { Section, Headline, Lede } from "./primitives";
export function Architecture() {
  return (
    <Section id="architecture" index="02" label="Where Sulcus sits">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <div>
          <Headline>
            Your application.
            <br />
            An explicit boundary.
          </Headline>
          <Lede className="mt-6">
            You own the prompts, registered functions, and approval decisions. Sulcus’s agent loop
            connects model requests to controlled tool execution.
          </Lede>
          <p className="mt-6 border-l-2 border-primary pl-5 text-sm leading-relaxed text-muted-foreground">
            Calls must go through this loop to receive these controls. Direct Python calls and
            existing framework tools are not automatically intercepted.
          </p>
          <a href="#langgraph" className="mt-7 inline-block text-sm text-primary hover:underline">
            Using LangGraph? See the integration scope ↓
          </a>
        </div>
        <figure className="panel p-5 md:p-7">
          <figcaption className="label-mono mb-6">Sulcus agent-loop execution path</figcaption>
          <div className="stack-node">
            Your application <span>prompts · tools · decisions</span>
          </div>
          <div className="stack-arrow" aria-hidden="true">
            ↓
          </div>
          <div className="border border-primary/50 bg-primary/5 p-5">
            <p className="font-mono text-sm text-primary">SULCUS AgentToolLoop</p>
            <p className="mt-2 text-xs text-muted-foreground">LLMRuntime ↔ your model provider</p>
            <div className="my-4 border-t border-primary/20" />
            <p className="text-sm leading-relaxed">
              Tool-name permissions → call limits → approval gate
            </p>
            <p className="mt-3 font-mono text-[11px] text-muted-foreground">
              Approval checkpoints · runtime events
            </p>
          </div>
          <div className="stack-arrow" aria-hidden="true">
            ↓
          </div>
          <div className="stack-node">
            ToolRuntime <span>registered name · argument validation</span>
          </div>
          <div className="stack-arrow" aria-hidden="true">
            ↓
          </div>
          <div className="stack-node">
            Your Python tool <span>APIs · external systems</span>
          </div>
        </figure>
      </div>
    </Section>
  );
}
