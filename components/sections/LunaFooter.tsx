import Image from "next/image";

import { LunaButton } from "@/components/ui/luna-button";

const NAV_LINKS = ["Link One", "Link Two", "Link Three", "Link Four", "Link Five"];
const LEGAL_LINKS = ["Privacy Policy", "Terms of Service", "Cookies Settings"];

export function LunaFooter() {
  return (
    <footer className="bg-white">
      <div className="luna-container flex flex-col gap-20 px-6 py-20 sm:px-10 lg:px-16">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
          <div className="flex flex-col gap-8">
            <Image
              src="/assets/luna/luna-wordmark-ink.svg"
              alt="Luna Branding Agency"
              width={316}
              height={24}
              className="h-5 w-auto"
            />
            <div className="flex max-w-[480px] flex-wrap gap-x-8 gap-y-3">
              {NAV_LINKS.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-sm font-semibold text-luna-ink transition-colors hover:text-luna-foreground"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          <div className="flex w-full flex-col gap-4 lg:w-[400px]">
            <p className="text-base font-semibold text-luna-ink">Subscribe</p>
            <form
              className="flex flex-col gap-3"
              action="#"
              aria-label="Newsletter subscription"
            >
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  required
                  placeholder="Enter your email"
                  aria-label="Enter your email"
                  className="h-12 flex-1 rounded-none border border-luna-ink/15 bg-luna-ink/5 px-3 text-base text-luna-ink placeholder:text-luna-ink/50 outline-none transition focus:border-luna-ink/40 focus:bg-white"
                />
                <LunaButton variant="outline" type="submit" className="shrink-0">
                  Subscribe
                </LunaButton>
              </div>
              <p className="text-xs text-luna-ink/80">
                By subscribing you agree to with our{" "}
                <a href="#" className="underline">
                  Privacy Policy
                </a>
              </p>
            </form>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="h-px w-full bg-luna-ink/15" />
          <div className="flex flex-col gap-4 text-sm text-luna-ink sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {LEGAL_LINKS.map((link) => (
                <a key={link} href="#" className="underline">
                  {link}
                </a>
              ))}
            </div>
            <p>© 2024 Luna. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
