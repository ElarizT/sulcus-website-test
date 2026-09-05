import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Wordmark } from "./Wordmark";
import { cn } from "@/lib/utils";

const links = [
  { href: "#problem", label: "Problem" },
  { href: "#architecture", label: "Architecture" },
  { href: "#product", label: "Product" },
  { href: "#demo", label: "Demo" },
  { href: "#vision", label: "Vision" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled ? "border-b border-border bg-background/85 backdrop-blur-xl" : "border-b border-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" aria-label="Sulcus home">
          <Wordmark />
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/contact"
            className="rounded-sm border border-border-strong px-3.5 py-1.5 text-sm text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Talk to the team
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="label-mono text-foreground">{open ? "Close" : "Menu"}</span>
        </button>
      </nav>

      {open && (
        <div className="border-t border-border bg-background/95 px-6 py-5 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-sm text-muted-foreground"
              >
                {l.label}
              </a>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="text-sm text-primary">
              Talk to the team
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
