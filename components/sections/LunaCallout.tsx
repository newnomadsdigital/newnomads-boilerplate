import { LunaButton, LunaLinkButton } from "@/components/ui/luna-button";

export function LunaCallout() {
  return (
    <section className="bg-luna-slate">
      <div className="luna-container luna-section">
        <div className="flex max-w-[560px] flex-col gap-8">
          <div className="flex flex-col gap-4">
            <p className="text-base font-semibold text-white">Tagline</p>
            <h2 className="text-h2 font-normal text-white">
              Medium length section heading goes here
            </h2>
            <p className="text-body-lg text-white/80">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <LunaButton
              variant="outline"
              className="border-white/30 text-white hover:border-white/60"
            >
              Button
            </LunaButton>
            <LunaLinkButton
              label="Button"
              className="text-white hover:text-white/80"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
