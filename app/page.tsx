import { ReworkHero } from "@/components/sections/ReworkHero";
import { SiteFooter } from "@/components/sections/SiteFooter";
import { SiteNavbar } from "@/components/sections/SiteNavbar";
import { StepsSection } from "@/components/sections/StepsSection";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <SiteNavbar />
      <ReworkHero />
      <StepsSection />
      <SiteFooter />
    </main>
  );
}
