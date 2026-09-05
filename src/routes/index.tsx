import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { ExecutionControl } from "@/components/site/ExecutionControl";
import { Architecture } from "@/components/site/Architecture";
import { CodeDemo } from "@/components/site/CodeDemo";
import { Product } from "@/components/site/Product";
import { LangGraph } from "@/components/site/LangGraph";
import { Maturity } from "@/components/site/Maturity";
import { DeveloperCTA } from "@/components/site/DeveloperCTA";
import { Footer } from "@/components/site/Footer";
import { TITLE, DESCRIPTION } from "@/components/site/content";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://sulcus.dev/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "https://sulcus.dev/" }],
  }),
  component: Index,
});
function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main id="main">
        <Hero />
        <ExecutionControl />
        <Architecture />
        <CodeDemo />
        <Product />
        <LangGraph />
        <Maturity />
        <DeveloperCTA />
      </main>
      <Footer />
    </div>
  );
}
