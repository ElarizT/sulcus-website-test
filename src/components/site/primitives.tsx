import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function useInView<T extends HTMLElement>(threshold = 0.15) {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        }
      },
      { threshold, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, visible };
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      data-visible={visible}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn("reveal", className)}
    >
      {children}
    </div>
  );
}

export function Section({
  id,
  index,
  label,
  className,
  children,
}: {
  id?: string;
  index?: string;
  label?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className={cn("relative border-t border-border", className)}>
      <div className="mx-auto w-full max-w-6xl px-6 py-24 md:py-32">
        {(index || label) && (
          <Reveal>
            <div className="mb-10 flex items-center gap-3">
              {index && <span className="label-mono text-primary">{index}</span>}
              {index && label && <span className="h-px w-8 bg-border-strong" />}
              {label && <span className="label-mono">{label}</span>}
            </div>
          </Reveal>
        )}
        {children}
      </div>
    </section>
  );
}

export function Headline({
  children,
  className,
  as: As = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <As
      className={cn(
        "text-balance text-3xl font-semibold leading-[1.05] md:text-5xl",
        className,
      )}
    >
      {children}
    </As>
  );
}

export function Lede({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <p className={cn("max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg", className)}>
      {children}
    </p>
  );
}
