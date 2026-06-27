import NavLinks from "./NavLinks";
import Button from "../atoms/Button";

export default function NavCTA() {
  return (
    <div className="flex items-center gap-4 md:gap-8">
      <NavLinks />
      <Button label="Try for free" />
    </div>
  );
}
