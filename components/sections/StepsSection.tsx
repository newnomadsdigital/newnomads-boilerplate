import { Box } from "lucide-react";

const steps = [
  { title: "Номоо ав.", text: "Эхний ухаалаг шийдвэрээ гарга." },
  { title: "Хуучин дүрмээ хая.", text: "Үр дүнгүй зуршлаасаа зоригтой татгалз." },
  { title: "Өөрөөр ажилла.", text: "Өөрөөр ажиллаж, илүүг бүтээ." },
];

export function StepsSection() {
  return (
    <section
      id="steps"
      className="flex w-full scroll-mt-24 flex-col items-center overflow-clip bg-surface px-6 py-20 sm:px-10 lg:px-16 lg:py-28"
    >
      <div className="flex w-full max-w-[1280px] flex-col items-start gap-12 lg:flex-row lg:gap-20">
        <div className="flex flex-1 flex-col gap-4 text-ink">
          <p className="text-[16px] font-semibold leading-[1.5]">Энгийн. Гэхдээ үр дүнтэй.</p>
          <h2 className="text-3xl font-medium leading-[1.2] tracking-[-0.52px] sm:text-4xl lg:text-[52px]">
            Өөрөөр бас ухаалгаар эхлэх 3 алхам
          </h2>
        </div>

        <ol className="flex flex-1 flex-col gap-4">
          {steps.map((step, index) => {
            const isLast = index === steps.length - 1;

            return (
              <li key={step.title} className="flex gap-10">
                <div className="flex flex-col items-center">
                  <Box className="size-12 text-ink" strokeWidth={1.5} aria-hidden />
                  {!isLast ? <span className="mt-2 w-px flex-1 bg-[var(--ink-15)]" /> : null}
                </div>
                <div className="flex flex-1 flex-col gap-4 pb-2 text-ink">
                  <h3 className="text-[22px] font-medium leading-[1.4] tracking-[-0.22px]">
                    {step.title}
                  </h3>
                  <p className="text-[16px] leading-[1.5]">{step.text}</p>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
