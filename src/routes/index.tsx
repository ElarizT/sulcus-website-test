import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Problem } from "@/components/site/Problem";
import { Approach } from "@/components/site/Approach";
import { Architecture } from "@/components/site/Architecture";
import { Coordination } from "@/components/site/Coordination";
import { Product } from "@/components/site/Product";
import { CodeDemo } from "@/components/site/CodeDemo";
import { WhyNow } from "@/components/site/WhyNow";
import { Market } from "@/components/site/Market";
import { Compare } from "@/components/site/Compare";
import { Moat } from "@/components/site/Moat";
import { BusinessModel } from "@/components/site/BusinessModel";
import { Customers } from "@/components/site/Customers";
import { FlagshipDemo } from "@/components/site/FlagshipDemo";
import { Vision } from "@/components/site/Vision";
import { Team } from "@/components/site/Team";
import { InvestorCTA } from "@/components/site/InvestorCTA";
import { Footer } from "@/components/site/Footer";

const TITLE = "Sulcus — The control layer for autonomous AI";
const DESC =
  "Sulcus provides the infrastructure to supervise, coordinate, observe, and control AI-agent systems in production.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Sulcus",
          url: "https://sulcus.dev",
          description: DESC,
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <main>
        <Hero />
        <Problem />
        <Approach />
        <Architecture />
        <Coordination />
        <Product />
        <CodeDemo />
        <WhyNow />
        <Market />
        <Compare />
        <Moat />
        <BusinessModel />
        <Customers />
        <FlagshipDemo />
        <Vision />
        <Team />
        <InvestorCTA />
      </main>
      <Footer />
    </div>
  );
}
