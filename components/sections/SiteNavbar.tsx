import { Logo } from "@/components/ui/logo";
import { PressButton } from "@/components/ui/press-button";

const navLinks = ["Хуучин дүрэм", "Шийдэл", "Гарах өөрчлөлт"];

export function SiteNavbar() {
  return (
    <header className="flex h-[72px] w-full items-center justify-center bg-paper px-6 sm:px-10 lg:px-16">
      <nav className="flex w-full items-center justify-between">
        <Logo />

        <div className="flex items-center gap-8">
          <ul className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="whitespace-nowrap text-[16px] leading-[1.5] text-ink transition-colors hover:text-ink/60"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <PressButton className="px-5 py-2">Ном захиалах</PressButton>
        </div>
      </nav>
    </header>
  );
}
