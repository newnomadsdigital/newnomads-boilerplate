import Image from "next/image";

export function LunaHero() {
  return (
    <section className="px-3 pt-3 sm:px-4 sm:pt-4">
      <div className="relative h-[82vh] max-h-[846px] min-h-[560px] w-full overflow-hidden rounded-[19px]">
        <Image
          src="/assets/luna/hero-bike.png"
          alt="Бараан дэвсгэр дээр шар COLNAGO бичигтэй уралдааны дугуй"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />

        {/* Subtle depth so the glass bar reads against the dark frame */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

        {/* Bottom glass bar */}
        <div className="absolute inset-x-3 bottom-3 sm:inset-x-[2.85%] sm:bottom-[6%]">
          <div className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-black/40 px-6 py-5 shadow-soft backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between sm:px-8 sm:py-6">
            <h1 className="max-w-[600px] animate-fade-up text-balance text-xl font-normal leading-[1.2] tracking-[-0.01em] text-white sm:text-2xl">
              Бид брэндийн утга учир, үнэ цэнэ, ирээдүйг тодорхойлдог.
            </h1>

            <a
              href="#about"
              className="shrink-0 text-base text-white/80 transition-colors hover:text-white sm:text-lg"
            >
              Scroll to view our work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
