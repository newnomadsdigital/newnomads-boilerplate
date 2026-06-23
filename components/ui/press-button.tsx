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

// Signature CTA from Figma 2169:2112 — 1.5px sides/top with a 4px bottom border
// that collapses on press for a tactile, premium feel.
export const PressButton = React.forwardRef<HTMLButtonElement, PressButtonProps>(
  ({ className, variant = "solid", type = "button", ...props }, ref) => {
    return (
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
    );
  },
);

PressButton.displayName = "PressButton";
