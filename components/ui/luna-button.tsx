import * as React from "react";
import { ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";

type LunaButtonVariant = "outline" | "solid";

export interface LunaButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: LunaButtonVariant;
}

const base =
  "inline-flex items-center justify-center gap-2 font-medium text-luna-ink transition-all duration-200 " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-luna-ink/30 focus-visible:ring-offset-2 " +
  "disabled:pointer-events-none disabled:opacity-60";

// The Relume "chunky bottom border" button: thin sides/top, thick bottom edge.
const variants: Record<LunaButtonVariant, string> = {
  outline:
    "border-[1.5px] border-b-4 border-luna-ink/15 bg-transparent px-6 py-2.5 " +
    "hover:-translate-y-0.5 hover:border-luna-ink/30 active:translate-y-0 active:border-b-[1.5px]",
  solid:
    "border-[1.5px] border-b-4 border-luna-line bg-white px-6 py-2.5 " +
    "hover:-translate-y-0.5 active:translate-y-0 active:border-b-[1.5px]",
};

export const LunaButton = React.forwardRef<HTMLButtonElement, LunaButtonProps>(
  ({ className, variant = "outline", type = "button", ...props }, ref) => (
    <button
      ref={ref}
      type={type}
      className={cn(base, variants[variant], className)}
      {...props}
    />
  ),
);

LunaButton.displayName = "LunaButton";

export interface LunaLinkButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function LunaLinkButton({
  label,
  className,
  type = "button",
  ...props
}: LunaLinkButtonProps) {
  return (
    <button
      type={type}
      className={cn(
        "group inline-flex items-center gap-2 font-medium text-luna-ink",
        "transition-colors hover:text-luna-foreground focus-visible:outline-none",
        "focus-visible:ring-2 focus-visible:ring-luna-ink/30 focus-visible:ring-offset-2",
        className,
      )}
      {...props}
    >
      {label}
      <ChevronRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
    </button>
  );
}
