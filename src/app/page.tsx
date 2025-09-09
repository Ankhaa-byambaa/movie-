import { NavigationMenu } from "@/components/ui/navigation-menu";
import { Footer } from "./component/home/Footer";
import { SectionMain } from "./component/home/SectionMain";
import { ModeToggle } from "./component/home/ThemeToggle";
import { TrailerSection } from "./component/home/TrailerSection";

export default function Home() {
  return (
    <>
      <div className="flex gap-[52px] flex-col ">
        <NavigationMenu></NavigationMenu>
        <TrailerSection />
        <SectionMain mainTitle="Updating" />
        <SectionMain mainTitle="Popular" />
        <SectionMain mainTitle="Top Rated" />
        <Footer></Footer>
      </div>
    </>
  );
}
