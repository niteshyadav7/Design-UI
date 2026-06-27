import Logo from "../atoms/Logo";
import NavCTA from "../molecules/NavCTA";

export default function Navbar({
  brandLabel = "Startup",
  brandHref = "/",
  brandIcon,
  navLinks,
  ctaLabel = "Try for free",
  ctaHref,
  ctaOnClick,
}) {
  return (
    <nav className="absolute inset-x-4 top-4 z-50 flex items-center justify-between px-4 py-4 md:inset-x-10 md:top-10 md:px-6">
      <Logo label={brandLabel} href={brandHref} icon={brandIcon} />
      <NavCTA
        links={navLinks}
        ctaLabel={ctaLabel}
        ctaHref={ctaHref}
        ctaOnClick={ctaOnClick}
      />
    </nav>
  );
}
