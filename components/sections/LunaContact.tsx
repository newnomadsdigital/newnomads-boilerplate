"use client";

import { useState } from "react";
import { ChevronDown, Mail, MapPin, Phone } from "lucide-react";

import { LunaButton } from "@/components/ui/luna-button";

const FIELD =
  "h-12 w-full rounded-none border border-luna-ink/15 bg-luna-ink/5 px-3 text-base text-luna-ink " +
  "placeholder:text-luna-ink/50 outline-none transition focus:border-luna-ink/40 focus:bg-white/50";

const LABEL = "text-base text-luna-ink";

const CONTACT_ROWS = [
  { icon: Mail, label: "email@example.com", href: "mailto:email@example.com" },
  { icon: Phone, label: "+1 (555) 000-0000", href: "tel:+15550000000" },
  { icon: MapPin, label: "123 Sample St, Sydney NSW 2000 AU" },
];

const CHOICES = [
  "First choice",
  "Second choice",
  "Third choice",
  "Fourth choice",
  "Fifth choice",
  "Other",
];

export function LunaContact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="bg-luna-peach">
      <div className="luna-container luna-section">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left: details */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-base font-semibold text-luna-ink">Tagline</p>
              <h2 className="text-h2 font-normal text-luna-ink">Contact us</h2>
              <p className="text-body-lg text-luna-ink/80">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <div className="flex flex-col gap-4 py-2">
              {CONTACT_ROWS.map((row) => {
                const Icon = row.icon;
                const content = (
                  <span className="flex items-center gap-4 text-base text-luna-ink">
                    <Icon className="h-6 w-6 shrink-0" strokeWidth={1.5} />
                    <span className={row.href ? "underline" : undefined}>
                      {row.label}
                    </span>
                  </span>
                );

                return row.href ? (
                  <a key={row.label} href={row.href} className="w-fit">
                    {content}
                  </a>
                ) : (
                  <div key={row.label}>{content}</div>
                );
              })}
            </div>
          </div>

          {/* Right: form */}
          <form
            className="flex flex-col gap-6"
            onSubmit={(event) => {
              event.preventDefault();
              setSent(true);
            }}
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className={LABEL}>
                  First name
                </label>
                <input id="firstName" name="firstName" className={FIELD} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className={LABEL}>
                  Last name
                </label>
                <input id="lastName" name="lastName" className={FIELD} />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className={LABEL}>
                  Email
                </label>
                <input id="email" name="email" type="email" className={FIELD} />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className={LABEL}>
                  Phone number
                </label>
                <input id="phone" name="phone" type="tel" className={FIELD} />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="topic" className={LABEL}>
                Choose a topic
              </label>
              <div className="relative">
                <select
                  id="topic"
                  name="topic"
                  defaultValue=""
                  className={`${FIELD} appearance-none pr-10`}
                >
                  <option value="" disabled>
                    Select one...
                  </option>
                  <option value="branding">Branding</option>
                  <option value="design">Design</option>
                  <option value="strategy">Strategy</option>
                </select>
                <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-6 w-6 -translate-y-1/2 text-luna-ink" />
              </div>
            </div>

            <fieldset className="flex flex-col gap-4 py-2">
              <legend className="pb-2 text-base text-luna-ink">
                Which best describes you?
              </legend>
              <div className="grid gap-4 sm:grid-cols-2">
                {CHOICES.map((choice) => (
                  <label
                    key={choice}
                    className="flex items-center gap-3 text-base text-luna-ink"
                  >
                    <input
                      type="radio"
                      name="describe"
                      value={choice}
                      className="h-[18px] w-[18px] accent-luna-ink"
                    />
                    {choice}
                  </label>
                ))}
              </div>
            </fieldset>

            <div className="flex flex-col gap-2">
              <label htmlFor="message" className={LABEL}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                placeholder="Type your message..."
                className="min-h-[180px] w-full resize-y rounded-none border border-luna-ink/15 bg-luna-ink/5 p-3 text-base text-luna-ink placeholder:text-luna-ink/50 outline-none transition focus:border-luna-ink/40 focus:bg-white/50"
              />
            </div>

            <label className="flex items-center gap-2 pb-2 text-sm text-luna-ink">
              <input
                type="checkbox"
                name="acceptTerms"
                required
                className="h-[18px] w-[18px] accent-luna-ink"
              />
              <span>
                I accept the <span className="underline">Terms</span>
              </span>
            </label>

            <div className="flex items-center gap-4">
              <LunaButton type="submit" variant="solid">
                Submit
              </LunaButton>
              {sent ? (
                <p className="text-base text-luna-ink" role="status">
                  Баярлалаа! Бид тантай удахгүй холбогдоно.
                </p>
              ) : null}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
