import DotGridIcon from "./DotGridIcon";

export default function Button({ label = "Try for free", href }) {
  const Tag = href ? "a" : "button";
  const linkProps = href ? { href } : {};

  return (
    <Tag
      {...linkProps}
      className="group/button relative flex cursor-pointer items-center gap-2 rounded-lg border border-white/20 bg-black py-2 pr-4 pl-11 tracking-tight"
    >
      {/* Sliding dot-grid icon */}
      <div className="absolute inset-y-0 left-1 z-40 my-auto flex size-8 flex-col items-center justify-center gap-px rounded-[5px] bg-yellow-500 transition-all duration-400 ease-out group-hover/button:left-[calc(100%-2.3rem)] group-hover/button:rotate-180 group-hover/button:transform">
        <DotGridIcon />
      </div>

      {/* Hover overlay — clip-path reveal */}
      <div className="absolute -inset-px rounded-lg bg-white/20 transition-[clip-path] duration-400 ease-out [clip-path:inset(0_100%_0_0)] group-hover/button:[clip-path:inset(0_0%_0_0)]" />

      {/* Label */}
      <span className="inline-block text-white transition-transform duration-400 group-hover/button:-translate-x-8">
        {label}
      </span>
    </Tag>
  );
}
