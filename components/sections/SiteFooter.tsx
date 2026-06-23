import { Facebook, Instagram, Youtube } from "lucide-react";

import { Logo } from "@/components/ui/logo";

const socials = [
  { label: "Facebook", icon: Facebook },
  { label: "Instagram", icon: Instagram },
  { label: "Youtube", icon: Youtube },
];

const footerLinks = ["Privacy policy", "Terms of service", "Cookie settings"];

export function SiteFooter() {
  return (
    <footer className="flex w-full flex-col items-center overflow-clip bg-paper px-6 py-20 text-ink sm:px-10 lg:px-16">
      <div className="flex w-full max-w-[1280px] flex-col gap-16">
        <div className="flex flex-col gap-16 md:flex-row">
          <div className="flex flex-1 flex-col gap-8">
            <Logo />
            <div className="flex flex-col gap-6 text-[14px] leading-[1.5]">
              <div className="flex flex-col gap-1">
                <p className="font-semibold">Байршил</p>
                <p>Rokmon building, 3rd floor, Ulaanbaatar, Mongolia, 16050</p>
              </div>
              <div className="flex flex-col gap-1">
                <p className="font-semibold">Утасны дугаар</p>
                <a href="tel:+97688062224" className="underline">
                  +976 88062224
                </a>
              </div>
            </div>
            <div className="flex gap-3">
              {socials.map(({ label, icon: Icon }) => (
                <a key={label} href="#" aria-label={label} className="text-ink transition-colors hover:text-ink/60">
                  <Icon className="size-6" strokeWidth={1.5} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex max-w-[400px] flex-1 gap-8">
            <div className="flex flex-1 flex-col text-[16px] font-semibold leading-[1.5]">
              <a href="#" className="py-2">
                Link One
              </a>
            </div>
            <div className="flex flex-1 flex-col text-[16px] font-semibold leading-[1.5]">
              <p className="py-2">
                Даваа - Баасан
                <br />
                9:30 AM - 17:30 PM
              </p>
              <p className="py-2">
                Ням
                <br />
                10:30 AM - 13:00 PM
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <p className="text-center text-5xl font-bold leading-[1.2] tracking-[-2px] sm:text-7xl lg:text-[134px] lg:tracking-[-5.36px]">
            ӨӨРӨӨР АЖИЛЛАЯ
          </p>
          <div className="flex flex-col gap-8">
            <div className="h-px w-full bg-[var(--ink-15)]" />
            <div className="flex flex-col gap-4 text-[14px] leading-[1.5] sm:flex-row sm:items-start sm:justify-between">
              <p>© 2026 Dino Clinic. Бүх эрх хуулиар хамгаалагдсан.</p>
              <div className="flex flex-wrap gap-6">
                {footerLinks.map((link) => (
                  <a key={link} href="#" className="underline">
                    {link}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
