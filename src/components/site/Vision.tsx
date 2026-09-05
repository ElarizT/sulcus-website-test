import { Section, Reveal } from "./primitives";
import markAsset from "@/assets/sulcus-mark.png.asset.json";

const traits = ["observable.", "controllable.", "coordinated.", "governable."];

export function Vision() {
  return (
    <Section id="vision" index="15" label="Vision" className="overflow-hidden">
      <div className="relative">
        <div className="grid-bg pointer-events-none absolute inset-0 -m-20 [mask-image:radial-gradient(60%_60%_at_30%_50%,black,transparent)]" />
        <img
          src={markAsset.url}
          alt=""
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 top-1/2 hidden w-[440px] -translate-y-1/2 select-none opacity-[0.06] lg:block"
        />
        <div className="relative">
          <Reveal>
            <h2 className="max-w-4xl text-balance text-3xl font-semibold leading-[1.05] md:text-6xl">
              Autonomous systems will need operating infrastructure.
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="mt-10 max-w-2xl text-pretty text-lg leading-relaxed text-muted-foreground">
              As AI systems become increasingly capable of acting independently, software
              infrastructure must evolve from simply executing code to supervising autonomous
              behavior.
            </p>
          </Reveal>
          <Reveal delay={160}>
            <div className="mt-12 flex flex-wrap gap-x-10 gap-y-4">
              {traits.map((t) => (
                <span key={t} className="font-display text-xl text-primary md:text-2xl">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={220}>
            <p className="mt-16 max-w-3xl border-t border-border pt-10 text-2xl font-semibold leading-tight md:text-4xl">
              We are building the infrastructure that makes autonomy deployable.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
