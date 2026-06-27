import NavLink from "../atoms/NavLink";

const defaultLinks = [
  { href: "#features", label: "Features" },
  { href: "#pricing", label: "Pricing" },
  { href: "#blog", label: "Blog" },
  { href: "#docs", label: "Docs" },
];

export default function NavLinks({ items = defaultLinks }) {
  return (
    <>
      {items.map((link) => (
        <NavLink key={link.href} href={link.href} label={link.label} />
      ))}
    </>
  );
}
