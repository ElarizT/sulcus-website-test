import { createFileRoute, Link } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { Reveal } from "@/components/site/primitives";
import markAsset from "@/assets/sulcus-mark.png.asset.json";

const TITLE = "Contact — Sulcus";
const DESC =
  "Talk to the Sulcus team about control and supervision infrastructure for production AI-agent systems.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const channels = [
  { label: "Sofiia", value: "sofiia@sulcus.dev" },
  { label: "Elariz", value: "elariz@sulcus.dev" },
  { label: "Milan", value: "milan@sulcus.dev" },
];

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main className="mx-auto max-w-6xl px-6 pb-28 pt-36">
        <Reveal>
          <img
            src={markAsset.url}
            alt=""
            aria-hidden="true"
            className="mb-8 h-14 w-14 select-none object-contain"
          />
          <span className="label-mono block text-primary">Contact</span>
          <h1 className="mt-6 max-w-3xl text-balance text-4xl font-semibold leading-[1.05] md:text-6xl">
            Talk to the team.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            Sulcus is early. We speak with investors, technical founders, and teams running agents
            in production.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 grid gap-px overflow-hidden rounded-lg border border-border bg-border sm:grid-cols-3">
            {channels.map((c) => (
              <div key={c.label} className="bg-surface/50 p-6">
                <p className="label-mono">{c.label}</p>
                <a
                  href={`mailto:${c.value}`}
                  className="mt-4 block font-mono text-sm text-primary hover:underline"
                >
                  {c.value}
                </a>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={160}>
          <Link to="/" className="mt-10 inline-block text-sm text-muted-foreground hover:text-foreground">
            ← Back to overview
          </Link>
        </Reveal>
      </main>
      <Footer />
    </div>
  );
}
