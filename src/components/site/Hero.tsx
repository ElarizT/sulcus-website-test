import { Link } from "@tanstack/react-router";
import { Reveal } from "./primitives";
import { ControlPlaneViz } from "./ControlPlaneViz";
import markAsset from "@/assets/sulcus-mark.png.asset.json";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 md:pt-40">
      <div className="grid-bg pointer-events-none absolute inset-0 [mask-image:radial-gradient(70%_60%_at_50%_0%,black,transparent)]" />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px]"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 0%, color-mix(in oklab, var(--signal) 12%, transparent), transparent 70%)",
        }}
      />
      <img
        src={markAsset.url}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-24 hidden w-[560px] select-none opacity-[0.05] lg:block"
      />
      <div className="relative mx-auto w-full max-w-6xl px-6">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1">
            <span className="h-1.5 w-1.5 rounded-full bg-primary anim-pulse-node" />
            <span className="label-mono">AI agent infrastructure · control &amp; supervision</span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-8 max-w-4xl text-balance text-4xl font-semibold leading-[1.02] md:text-7xl">
            The control layer for <span className="text-primary text-glow">autonomous AI</span>.
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
            Sulcus provides the infrastructure to supervise, coordinate, observe, and control
            AI-agent systems in production.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#architecture"
              className="rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Explore the Architecture
            </a>
            <Link
              to="/contact"
              className="rounded-sm border border-border-strong px-5 py-3 text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Talk to the Team
            </Link>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <div className="mt-16 md:mt-20">
            <ControlPlaneViz />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
