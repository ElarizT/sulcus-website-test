import { Link } from "@tanstack/react-router";
import { Reveal } from "./primitives";
import markAsset from "@/assets/sulcus-mark.png.asset.json";

export function InvestorCTA() {
  return (
    <section id="contact-cta" className="relative overflow-hidden border-t border-border">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 100%, color-mix(in oklab, var(--signal) 12%, transparent), transparent 70%)",
        }}
      />
      <div className="relative mx-auto max-w-4xl px-6 py-28 text-center md:py-40">
        <Reveal>
          <img
            src={markAsset.url}
            alt=""
            aria-hidden="true"
            className="mx-auto mb-10 h-16 w-16 select-none object-contain text-glow md:h-20 md:w-20"
          />
        </Reveal>
        <Reveal>
          <h2 className="text-balance text-3xl font-semibold leading-[1.05] md:text-6xl">
            The next generation of software will act.
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg text-muted-foreground">
            We&apos;re building the infrastructure that keeps it under control.
          </p>
        </Reveal>
        <Reveal delay={140}>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <Link
              to="/contact"
              className="rounded-sm bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Talk to Sulcus
            </Link>
            <a
              href="#architecture"
              className="rounded-sm border border-border-strong px-5 py-3 text-sm font-medium transition-colors hover:border-primary hover:text-primary"
            >
              View Technical Architecture
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
