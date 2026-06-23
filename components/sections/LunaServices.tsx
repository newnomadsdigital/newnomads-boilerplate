import { Sparkles } from "lucide-react";

import { LunaButton, LunaLinkButton } from "@/components/ui/luna-button";

const SMALL_CARDS = [
  {
    heading: "Medium length section heading goes here",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    heading: "Medium length section heading goes here",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export function LunaServices() {
  return (
    <section id="services" className="bg-white">
      <div className="luna-container luna-section flex flex-col items-center gap-20">
        <h2 className="max-w-[768px] text-center text-h2 font-normal text-luna-ink">
          Explore our branding and design services
        </h2>

        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-[2.1fr_1fr_1fr]">
          {/* Featured card */}
          <article className="flex flex-col justify-center gap-8 border border-luna-ink/15 bg-luna-foreground p-12 md:col-span-2 lg:col-span-1">
            <div className="flex flex-col gap-6">
              <Sparkles className="h-12 w-12 text-luna-ink" strokeWidth={1.5} />
              <div className="flex flex-col gap-6">
                <h3 className="text-h3 font-normal text-luna-ink">
                  Short heading here
                </h3>
                <p className="text-base leading-relaxed text-luna-ink/90">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-6">
              <LunaButton variant="outline">Button</LunaButton>
              <LunaLinkButton label="Button" className="hover:text-luna-ink/70" />
            </div>
          </article>

          {/* Two compact cards */}
          {SMALL_CARDS.map((card, index) => (
            <article
              key={index}
              className="flex flex-col gap-6 border border-luna-ink/15 bg-luna-foreground p-6"
            >
              <div className="flex flex-col gap-4">
                <Sparkles className="h-12 w-12 text-luna-ink" strokeWidth={1.5} />
                <div className="flex flex-col gap-2">
                  <h3 className="text-h5 font-normal text-luna-ink">
                    {card.heading}
                  </h3>
                  <p className="text-base leading-relaxed text-luna-ink/90">
                    {card.text}
                  </p>
                </div>
              </div>
              <LunaLinkButton label="Button" className="hover:text-luna-ink/70" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
