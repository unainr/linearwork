import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoCloud } from "@/components/LogoCloud";
import { Features } from "@/components/Features";
import { Testimonials } from "@/components/Testimonials";
import { Pricing } from "@/components/Pricing";
import { CTA } from "@/components/CTA";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "linear.work — Simple management for your remote team" },
      {
        name: "description",
        content:
          "Streamline collaboration, track progress, and keep everyone aligned. The calmest, fastest workspace for distributed teams.",
      },
      { property: "og:title", content: "linear.work — Simple management for your remote team" },
      {
        property: "og:description",
        content: "The calmest, fastest workspace for distributed teams.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-white">
      <Navbar />
      <Hero />
      <LogoCloud />
      <Features />
      <Testimonials />
      <Pricing />
      <CTA />
      <Footer />
    </main>
  );
}
