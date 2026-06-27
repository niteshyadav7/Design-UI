import Image from "next/image";
import HeroCTA from "../molecules/HeroCTA";

export default function HeroContent() {
  return (
    <div className="relative flex min-h-screen w-full flex-col justify-end p-4 md:p-14">
      {/* Background image with gradient mask */}
      <div className="pointer-events-none absolute inset-4 overflow-hidden md:inset-10">
        <Image
          src="/hero-bg.png"
          alt="Background"
          fill
          priority
          className="object-cover object-center opacity-40"
          style={{
            maskImage:
              "linear-gradient(to top, transparent 5%, black 50%), linear-gradient(to bottom, transparent 5%, black 40%), linear-gradient(to left, transparent 5%, black 50%), linear-gradient(to right, transparent 5%, black 50%)",
            maskComposite: "intersect",
            WebkitMaskImage:
              "linear-gradient(to top, transparent 5%, black 50%), linear-gradient(to bottom, transparent 5%, black 40%), linear-gradient(to left, transparent 5%, black 50%), linear-gradient(to right, transparent 5%, black 50%)",
            WebkitMaskComposite: "source-in",
          }}
        />
      </div>

      {/* Decorative border frame — 4 thin lines creating an inset rectangle */}
      {/* Top */}
      <div className="pointer-events-none absolute inset-x-0 top-4 h-px w-full bg-neutral-800 md:top-10" />
      {/* Bottom */}
      <div className="pointer-events-none absolute inset-x-0 bottom-4 h-px w-full bg-neutral-800 md:bottom-10" />
      {/* Left */}
      <div className="pointer-events-none absolute inset-y-0 left-4 h-full w-px bg-neutral-800 md:left-10" />
      {/* Right */}
      <div className="pointer-events-none absolute inset-y-0 right-4 h-full w-px bg-neutral-800 md:right-10" />

      {/* Content — bottom-aligned */}
      <div className="relative z-40 p-4 md:p-4">
        <h1 className="max-w-3xl text-3xl font-medium tracking-tight text-neutral-200 sm:text-4xl md:text-6xl lg:text-8xl">
          Build the future of your business
        </h1>
        <p className="mt-4 max-w-xl text-base text-neutral-400 md:mt-6 md:text-lg">
          Ship products faster with AI-powered tools that understand your vision.
          No complex setup needed—just describe what you want and watch it come
          to life.
        </p>
        <HeroCTA />
      </div>
    </div>
  );
}
