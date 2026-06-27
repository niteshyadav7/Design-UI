export default function NavLink({ href, label, className = "", ...props }) {
  return (
    <a
      href={href}
      className={`hidden text-sm font-medium text-neutral-600 dark:text-neutral-400 transition-colors hover:text-neutral-900 dark:hover:text-neutral-100 sm:block ${className}`}
      {...props}
    >
      {label}
    </a>
  );
}
