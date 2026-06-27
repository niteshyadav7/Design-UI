import HeroSection from "./components/templates/HeroSection";

export default function Home() {
  return (
    <HeroSection
      navbarProps={{
        brandLabel: "DesignUI",
        ctaLabel: "Get Started",
        ctaHref: "#get-started",
        navLinks: [
          { href: "#features", label: "Features" },
          { href: "#pricing", label: "Pricing" },
          { href: "#docs", label: "Docs" },
        ],
      }}
      heroProps={{
        title: "Stunning Hero Sections for Startups",
        subtitle:
          "A completely modular atomic design template built with Next.js, Tailwind CSS v4, and modern CSS micro-animations. Beautifully structured and ready to deploy.",
        primaryLabel: "Deploy Template",
        primaryHref: "https://github.com/niteshyadav7/Design-UI",
        secondaryLabel: "Documentation",
        secondaryHref: "#docs",
      }}
    />
  );
}
