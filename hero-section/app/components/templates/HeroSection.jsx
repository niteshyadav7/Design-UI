import Navbar from "../organisms/Navbar";
import HeroContent from "../organisms/HeroContent";

export default function HeroSection({ navbarProps = {}, heroProps = {} }) {
  return (
    <div className="relative w-full bg-neutral-950">
      <Navbar {...navbarProps} />
      <HeroContent {...heroProps} />
    </div>
  );
}
