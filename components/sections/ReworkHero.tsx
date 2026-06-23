"use client";

import Image from "next/image";
import { useRef, useState, type MouseEvent } from "react";

import { PressButton } from "@/components/ui/press-button";

const MAX_TILT_DEGREES = 10;
const PUSH_BACK_DEPTH = 50; // px — translateZ while hovering, pushes the card away from the viewer

export function ReworkHero() {
  const tiltRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0, active: false });

  const handleMouseMove = (event: MouseEvent<HTMLDivElement>) => {
    const rect = tiltRef.current?.getBoundingClientRect();
    if (!rect) return;

    const relX = (event.clientX - rect.left) / rect.width - 0.5;
    const relY = (event.clientY - rect.top) / rect.height - 0.5;

    setTilt({ rotateX: relY * -MAX_TILT_DEGREES, rotateY: relX * MAX_TILT_DEGREES, active: true });
  };

  const resetTilt = () => setTilt({ rotateX: 0, rotateY: 0, active: false });

  return (
    <section
      id="hero"
      className="flex w-full scroll-mt-24 flex-col items-center overflow-clip bg-paper px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
    >
      <div className="flex w-full max-w-[1280px] flex-col items-center gap-16 lg:gap-20">
        <div className="flex w-full max-w-[768px] flex-col items-center gap-8 text-center text-ink">
          <div className="flex flex-col items-center gap-6">
            <h1 className="text-4xl font-medium leading-[1.2] tracking-[-0.72px] sm:text-6xl lg:text-[72px]">
              ӨӨРӨӨР АЖИЛЛАЯ
            </h1>
            <p className="text-[18px] leading-[1.5]">
              Амьдралаа золиослолгүйгээр амжилтад хүрэх арга.
              <br />
              Дэлхийн бестселлер — «Өөрөөр ажиллая» (Rework).
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <PressButton variant="solid">Одоо захиалах</PressButton>
            <PressButton variant="outline">Номын хэсгээс</PressButton>
          </div>
        </div>

        <div className="w-full" style={{ perspective: "1200px" }}>
          <div
            ref={tiltRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={resetTilt}
            className="relative h-[420px] w-full overflow-hidden rounded-[16px] sm:h-[600px] lg:h-[800px]"
            style={{
              transform: `rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg) translateZ(${tilt.active ? -PUSH_BACK_DEPTH : 0}px)`,
              transition: tilt.active ? "transform 0.1s ease-out" : "transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <Image
              src="/assets/rework/book-hero.jpg"
              alt="«Өөрөөр ажиллая» номыг гарт барьж буй зураг"
              fill
              priority
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
