import { Wordmark } from "./Wordmark";
import { DOCS, REPO } from "./content";
export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col justify-between gap-8 px-6 py-12 md:flex-row">
        <div>
          <a href="/" aria-label="Sulcus home">
            <Wordmark />
          </a>
          <p className="mt-4 text-sm text-muted-foreground">Runtime control for AI agents.</p>
          <p className="mt-5 font-mono text-[11px] text-muted-foreground">
            © {new Date().getFullYear()} Sulcus
          </p>
        </div>
        <nav
          aria-label="Footer"
          className="flex flex-wrap gap-x-7 gap-y-4 text-sm text-muted-foreground"
        >
          <a href={DOCS}>Documentation ↗</a>
          <a href={REPO}>GitHub ↗</a>
          <a href="/#status">Current status</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}
