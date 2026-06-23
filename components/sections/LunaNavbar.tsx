"use client";

import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Бидний тухай", href: "#about" },
  { label: "Үйлчилгээ", href: "#services" },
  { label: "Хийсэн ажлууд", href: "#portfolio" },
  { label: "Хүсэлт", href: "#contact" },
];

export function LunaNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-luna-orange text-white">
      <nav className="luna-container flex h-14 items-center justify-between px-6 sm:px-10 lg:px-11">
        <a href="#top" className="flex items-center" aria-label="Luna Branding Agency">
          <Image
            src="/assets/luna/luna-wordmark-white.svg"
            alt="Luna Branding Agency"
            width={316}
            height={24}
            priority
            className="h-[18px] w-auto sm:h-5"
          />
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base text-white/90 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full border-2 border-white px-5 py-1 text-base font-medium text-white transition-colors hover:bg-white hover:text-luna-orange"
          >
            Холбоо барих
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className="inline-flex h-9 w-9 items-center justify-center rounded-md text-white lg:hidden"
          aria-label={open ? "Цэс хаах" : "Цэс нээх"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-white/20 lg:hidden">
          <div className="luna-container flex flex-col gap-1 px-6 py-4 sm:px-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-2 py-2 text-base text-white/90 transition-colors hover:bg-white/10 hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full border-2 border-white px-5 py-2 text-base font-medium text-white"
            >
              Холбоо барих
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
