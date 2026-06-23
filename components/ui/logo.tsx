import Image from "next/image";

import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/assets/rework/logo.svg"
      alt="Өөрөөр ажиллая"
      width={84}
      height={36}
      priority
      className={cn("h-9 w-[84px]", className)}
    />
  );
}
