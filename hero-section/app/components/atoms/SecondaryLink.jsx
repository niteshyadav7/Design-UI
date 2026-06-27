export default function SecondaryLink({
  label = "Read Documentation",
  href = "#",
  className = "",
  ...props
}) {
  return (
    <a
      href={href}
      className={`text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-200 ${className}`}
      {...props}
    >
      {label} →
    </a>
  );
}
