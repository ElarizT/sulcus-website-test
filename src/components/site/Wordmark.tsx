import { cn } from "@/lib/utils";

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <img src="/favicon.png" alt="" aria-hidden="true" className="h-5 w-5 object-contain" />
      <span
        className="font-display text-sm font-semibold tracking-[0.34em] text-foreground"
        style={{ fontFamily: "var(--font-display)" }}
      >
        SULCUS
      </span>
    </span>
  );
}
