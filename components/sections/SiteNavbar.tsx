"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import { Logo } from "@/components/ui/logo";
import { PressButton } from "@/components/ui/press-button";
import { cn } from "@/lib/utils";

type ScrollSection = "home" | "steps" | "footer";

type NavLink = { id: ScrollSection; label: string; href: string };

const navLinks: NavLink[] = [
  { id: "home", label: "Нүүр", href: "#hero" },
  { id: "steps", label: "Хуучин дүрэм", href: "#steps" },
  { id: "footer", label: "Гарах өөрчлөлт", href: "#footer" },
];

const sectionElementIds: Record<ScrollSection, string> = {
  home: "hero",
  steps: "steps",
  footer: "footer",
};

export function SiteNavbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<ScrollSection>("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const navListRef = useRef<HTMLUListElement>(null);
  const linkRefs = useRef<Partial<Record<ScrollSection, HTMLAnchorElement | null>>>({});
  const [pill, setPill] = useState<{ left: number; width: number } | null>(null);

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = (Object.keys(sectionElementIds) as ScrollSection[])
      .map((id) => ({ id, el: document.getElementById(sectionElementIds[id]) }))
      .filter((entry): entry is { id: ScrollSection; el: HTMLElement } => Boolean(entry.el));

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const mostVisible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        const match = sections.find((section) => section.el === mostVisible?.target);
        if (match) setActiveSection(match.id);
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] },
    );

    sections.forEach((section) => observer.observe(section.el));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLinkActive = (link: NavLink) => pathname === "/" && activeSection === link.id;

  useLayoutEffect(() => {
    const updatePill = () => {
      const list = navListRef.current;
      const activeLink = pathname === "/" ? linkRefs.current[activeSection] : null;
      if (!list || !activeLink) {
        setPill(null);
        return;
      }
      const listRect = list.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      setPill({ left: linkRect.left - listRect.left, width: linkRect.width });
    };

    updatePill();
    window.addEventListener("resize", updatePill);
    return () => window.removeEventListener("resize", updatePill);
  }, [activeSection, pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 flex h-[72px] w-full items-center justify-center bg-paper px-6 transition-shadow duration-300 sm:px-10 lg:px-16",
        isScrolled && "shadow-[0_1px_0_0_var(--ink-15)]",
      )}
    >
      <nav className="flex w-full items-center justify-between">
        <Logo />

        <div className="flex items-center gap-8">
          <ul ref={navListRef} className="relative hidden items-center gap-8 md:flex">
            <span
              aria-hidden
              className="absolute inset-y-0 left-0 z-0 rounded-full bg-black/[0.06] transition-[transform,width] duration-300 ease-[cubic-bezier(0.65,0,0.35,1)]"
              style={{
                width: pill?.width ?? 0,
                transform: `translateX(${pill?.left ?? 0}px)`,
                opacity: pill ? 1 : 0,
              }}
            />
            {navLinks.map((link) => {
              const active = isLinkActive(link);

              return (
                <li key={link.id} className="relative z-10">
                  <Link
                    ref={(node) => {
                      linkRefs.current[link.id] = node;
                    }}
                    href={link.href}
                    className={cn(
                      "whitespace-nowrap rounded-full px-3 py-1 text-[16px] leading-[1.5] text-ink transition-colors duration-300 ease-out hover:text-ink/60",
                      active && "hover:text-ink",
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <PressButton className="px-5 py-2">Ном захиалах</PressButton>
        </div>
      </nav>
    </header>
  );
}
