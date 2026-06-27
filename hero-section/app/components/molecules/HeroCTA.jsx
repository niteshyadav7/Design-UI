import Button from "../atoms/Button";
import SecondaryLink from "../atoms/SecondaryLink";

export default function HeroCTA({
  primaryLabel = "Get Started",
  primaryHref,
  primaryOnClick,
  secondaryLabel = "Read Documentation",
  secondaryHref = "#docs",
  secondaryOnClick,
}) {
  return (
    <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center md:mt-10">
      <Button
        label={primaryLabel}
        href={primaryHref}
        onClick={primaryOnClick}
      />
      <SecondaryLink
        label={secondaryLabel}
        href={secondaryHref}
        onClick={secondaryOnClick}
      />
    </div>
  );
}
