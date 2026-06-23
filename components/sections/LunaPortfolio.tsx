import { ImageIcon } from "lucide-react";

import { LunaButton, LunaLinkButton } from "@/components/ui/luna-button";

type Project = {
  title: string;
  ratio: string;
  description?: string;
  tags?: string[];
};

const DESCRIPTION =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.";
const TAGS = ["Tag one", "Tag two", "Tag three"];

const PROJECTS: Project[] = [
  { title: "Project name here", ratio: "aspect-[4/3]" },
  {
    title: "Project name here",
    ratio: "aspect-[4/5]",
    description: DESCRIPTION,
    tags: TAGS,
  },
  { title: "Project name here", ratio: "aspect-[16/10]" },
  {
    title: "Project name here",
    ratio: "aspect-square",
    description: DESCRIPTION,
    tags: TAGS,
  },
  { title: "Project name here", ratio: "aspect-[4/3]" },
  {
    title: "Project name here",
    ratio: "aspect-[16/10]",
    description: DESCRIPTION,
    tags: TAGS,
  },
];

export function LunaPortfolio() {
  return (
    <section id="portfolio" className="bg-white">
      <div className="luna-container luna-section flex flex-col items-center gap-16">
        <div className="flex max-w-[768px] flex-col items-center gap-4 text-center">
          <p className="text-base font-semibold text-luna-ink">Portfolio</p>
          <h2 className="text-h2 font-normal text-luna-ink">
            Short heading goes here
          </h2>
          <p className="text-body-lg text-luna-ink/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="w-full columns-1 gap-8 sm:columns-2 lg:columns-3">
          {PROJECTS.map((project, index) => (
            <article
              key={index}
              className="mb-8 flex break-inside-avoid flex-col gap-6"
            >
              <div
                className={`luna-placeholder flex w-full items-center justify-center ${project.ratio}`}
              >
                <ImageIcon
                  className="h-12 w-12 text-luna-ink/20"
                  strokeWidth={1.5}
                />
              </div>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col gap-2">
                  <h3 className="text-h5 font-normal text-luna-ink">
                    {project.title}
                  </h3>
                  {project.description ? (
                    <p className="text-base leading-relaxed text-luna-ink/80">
                      {project.description}
                    </p>
                  ) : null}
                </div>

                {project.tags ? (
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="border border-luna-ink/15 bg-luna-ink/5 px-2.5 py-1 text-sm font-semibold text-luna-ink"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                ) : null}

                {project.description ? (
                  <LunaLinkButton label="View project" />
                ) : null}
              </div>
            </article>
          ))}
        </div>

        <LunaButton variant="outline">View all</LunaButton>
      </div>
    </section>
  );
}
