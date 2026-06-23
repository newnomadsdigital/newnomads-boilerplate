import Image from "next/image";

const STORY = [
  {
    heading:
      "Luna — Харилцагчдадаа үнэ цэнэ, өсөлт, амжилтыг авчирдаг брэндинг агентлаг",
    paragraphs: [
      "Бид шинэ брэндийг эхнээс нь бүтээж, аль хэдийн зах зээлд байр сууриа олсон брэндүүдийг шинэ түвшинд гаргадаг.",
      "Үүний тулд зах зээлийн судалгаа, өрсөлдөх орчны шинжилгээ хийж, брэнд стратеги, позиционинг, нэршил (naming), визуал төрх, сав баглаа боодлын дизайн, мөн брэндийн нэгдсэн маркетингийн харилцааны системийг боловсруулдаг.",
      "Хэрэглэгчийн үнэнч байдлыг нэмэгдүүлэх, маркетингийн зардлыг оновчлох, бүтээгдэхүүнд нэмүү өртөг бий болгох, байгууллагын эерэг нэр хүндийг төлөвшүүлэх зэрэг олон төрлийн зорилтыг Luna цогц байдлаар шийдвэрлэдэг.",
    ],
  },
  {
    heading: "Luna — Монголын тэргүүлэгч брэндинг агентлаг",
    paragraphs: [
      "Luna агентлагийн бүтээлийн санд олон арван амжилттай брэндийн төсөл, олон салбарын туршлага, бизнесийн бодит үр дүн бий.",
      "Манай багт стратегичид, дизайнерууд, контент бүтээгчид болон брэндинг чиглэлийн туршлагатай мэргэжилтнүүд нэгдэн ажиллаж, брэнд бүрт онцгой шийдэл боловсруулдаг.",
      "Бид зөвхөн лого эсвэл дизайн бүтээдэггүй. Харин бизнесийн үнэ цэнэ, хэрэглэгчийн итгэлцэл, брэндийн урт хугацааны өсөлтийг бий болгох системийг бүтээдэг.",
      "Luna нь Монголын брэндинг, дизайн, бүтээлч үйлдвэрлэлийн хөгжлийг түгээн дэлгэрүүлэхийн зэрэгцээ дотоодын брэндүүдийг олон улсын түвшинд өрсөлдөхүйц үнэ цэнтэй брэнд болгон хөгжүүлэх зорилготой ажилладаг.",
    ],
  },
];

export function LunaIntro() {
  return (
    <section id="about" className="bg-white">
      <div className="luna-container luna-section">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-16">
          <div className="flex justify-center lg:block">
            <div className="lg:sticky lg:top-28">
              <Image
                src="/assets/luna/luna-seal.svg"
                alt="Luna Branding Agency лого"
                width={539}
                height={539}
                className="h-auto w-full max-w-[320px] lg:max-w-[460px]"
              />
            </div>
          </div>

          <div className="flex flex-col gap-12">
            {STORY.map((block) => (
              <article key={block.heading} className="flex flex-col gap-6">
                <h2 className="max-w-[640px] text-2xl font-medium leading-tight tracking-tight text-luna-ink">
                  {block.heading}
                </h2>
                <div className="flex flex-col gap-4">
                  {block.paragraphs.map((paragraph) => (
                    <p
                      key={paragraph}
                      className="text-base leading-relaxed text-luna-ink/80"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
