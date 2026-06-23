import { LunaNavbar } from "@/components/sections/LunaNavbar";
import { LunaHero } from "@/components/sections/LunaHero";
import { LunaIntro } from "@/components/sections/LunaIntro";
import { LunaServices } from "@/components/sections/LunaServices";
import { LunaPortfolio } from "@/components/sections/LunaPortfolio";
import { LunaCallout } from "@/components/sections/LunaCallout";
import { LunaContact } from "@/components/sections/LunaContact";
import { LunaFooter } from "@/components/sections/LunaFooter";

export default function Home() {
  return (
    <>
      <LunaNavbar />
      <main id="top" className="flex-1">
        <LunaHero />
        <LunaIntro />
        <LunaServices />
        <LunaPortfolio />
        <LunaCallout />
        <LunaContact />
      </main>
      <LunaFooter />
    </>
  );
}
