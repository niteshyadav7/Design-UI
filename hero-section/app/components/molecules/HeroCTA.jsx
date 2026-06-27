import Button from "../atoms/Button";
import SecondaryLink from "../atoms/SecondaryLink";

export default function HeroCTA() {
  return (
    <div className="mt-6 flex flex-col items-start gap-4 sm:flex-row sm:items-center md:mt-10">
      <Button label="Get Started" />
      <SecondaryLink label="Read Documentation" href="#docs" />
    </div>
  );
}
