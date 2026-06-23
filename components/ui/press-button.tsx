"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type PressButtonVariant = "solid" | "outline";

export interface PressButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: PressButtonVariant;
}

const variantClassMap: Record<PressButtonVariant, string> = {
  solid: "border-ink-soft bg-ink text-white hover:brightness-110",
  outline: "border-[var(--ink-15)] bg-transparent text-ink hover:bg-ink/5",
};

const MAGNETIC_STRENGTH = 0.3;
const MAGNETIC_MAX_OFFSET = 10;

function clamp(value: number, max: number) {
  return Math.min(Math.max(value, -max), max);
}

// Signature CTA from Figma 2169:2112 — 1.5px sides/top with a 4px bottom border
// that collapses on press for a tactile, premium feel. The wrapper adds a
// magnetic pull toward the cursor while hovering, separate from the button's
// own press transform so the two animations compose instead of fighting.
export const PressButton = React.forwardRef<HTMLButtonElement, PressButtonProps>(
  ({ className, variant = "solid", type = "button", ...props }, ref) => {
    const wrapperRef = React.useRef<HTMLSpanElement>(null);
    const [magnet, setMagnet] = React.useState({ x: 0, y: 0 });

    const handleMouseMove = (event: React.MouseEvent<HTMLSpanElement>) => {
      const rect = wrapperRef.current?.getBoundingClientRect();
      if (!rect) return;
      setMagnet({
        x: clamp((event.clientX - (rect.left + rect.width / 2)) * MAGNETIC_STRENGTH, MAGNETIC_MAX_OFFSET),
        y: clamp((event.clientY - (rect.top + rect.height / 2)) * MAGNETIC_STRENGTH, MAGNETIC_MAX_OFFSET),
      });
    };

    const resetMagnet = () => setMagnet({ x: 0, y: 0 });

    return (
      <span
        ref={wrapperRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={resetMagnet}
        className="inline-block"
        style={{
          transform: `translate(${magnet.x}px, ${magnet.y}px)`,
          transition:
            magnet.x === 0 && magnet.y === 0
              ? "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)"
              : "transform 0.15s ease-out",
        }}
      >
        <button
          ref={ref}
          type={type}
          className={cn(
            "inline-flex items-center justify-center whitespace-nowrap rounded-[6px]",
            "border-b-4 border-l-[1.5px] border-r-[1.5px] border-t-[1.5px] border-solid",
            "px-6 py-2.5 text-[16px] font-medium leading-[1.5]",
            "transition-[transform,filter] duration-150",
            "active:translate-y-[2px] active:border-b-[1.5px]",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink/40 focus-visible:ring-offset-2",
            variantClassMap[variant],
            className,
          )}
          {...props}
        />
      </span>
    );
  },
);

PressButton.displayName = "PressButton";
