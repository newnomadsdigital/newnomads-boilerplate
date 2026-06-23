import Image from "next/image";

import { PressButton } from "@/components/ui/press-button";

export function ReworkHero() {
  return (
    <section className="flex w-full flex-col items-center overflow-clip bg-paper px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
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

        <div className="relative h-[420px] w-full overflow-hidden rounded-[16px] sm:h-[600px] lg:h-[800px]">
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
    </section>
  );
}
