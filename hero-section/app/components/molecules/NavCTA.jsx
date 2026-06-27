import NavLinks from "./NavLinks";
import Button from "../atoms/Button";

export default function NavCTA({
  links,
  ctaLabel = "Try for free",
  ctaHref,
  ctaOnClick,
}) {
  return (
    <div className="flex items-center gap-4 md:gap-8">
      <NavLinks items={links} />
      <Button label={ctaLabel} href={ctaHref} onClick={ctaOnClick} />
    </div>
  );
}
