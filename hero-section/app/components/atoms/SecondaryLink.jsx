export default function SecondaryLink({ label = "Read Documentation", href = "#" }) {
  return (
    <a
      href={href}
      className="text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-200"
    >
      {label} →
    </a>
  );
}
