export default function NavLink({ href, label }) {
  return (
    <a
      href={href}
      className="hidden text-sm font-medium text-neutral-400 transition-colors hover:text-neutral-100 sm:block"
    >
      {label}
    </a>
  );
}
