import Navbar from "../organisms/Navbar";
import HeroContent from "../organisms/HeroContent";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function HeroSection({ navbarProps = {}, heroProps = {} }) {
  return (
    <BackgroundBeamsWithCollision className="flex-col w-full bg-white dark:bg-neutral-950 transition-colors duration-300">
      <Navbar {...navbarProps} />
      <HeroContent {...heroProps} />
    </BackgroundBeamsWithCollision>
  );
}
