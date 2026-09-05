import { useEffect, useState } from "react";
import { Wordmark } from "./Wordmark";
import { DOCS, REPO } from "./content";
const links = [
  { href: "/#execution", label: "How it works" },
  { href: "/#capabilities", label: "Capabilities" },
  { href: "/#langgraph", label: "LangGraph" },
  { href: "/#status", label: "Status" },
];
export function Nav() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const close = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", close);
    return () => window.removeEventListener("keydown", close);
  }, []);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/95 backdrop-blur-xl">
      <a href="#main" className="skip-link">
        Skip to content
      </a>
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
      >
        <a href="/" aria-label="Sulcus home">
          <Wordmark />
        </a>
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a href={DOCS} className="text-sm text-primary">
            Docs ↗
          </a>
          <a
            href={REPO}
            className="rounded-sm border border-border-strong px-3 py-1.5 text-sm hover:border-primary"
          >
            GitHub ↗
          </a>
        </div>
        <button
          className="label-mono md:hidden"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>
      {open && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="flex flex-col gap-5 border-t border-border px-6 py-6 md:hidden"
        >
          {[
            ...links,
            { href: DOCS, label: "Documentation ↗" },
            { href: REPO, label: "GitHub ↗" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
