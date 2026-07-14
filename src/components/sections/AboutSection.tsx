"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { useLang } from "@/i18n/LanguageProvider";

export function AboutSection() {
  const { t } = useLang();

  return (
    <section id="hakkimda" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading title={t.sectionTitles.about} />
        <Reveal className="mt-8 max-w-3xl">
          <p className="font-body text-xl leading-relaxed text-foreground/85 sm:text-2xl">
            {t.aboutBio}
          </p>
        </Reveal>

        {/* Konumlandırma pilarları */}
        <Reveal className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs uppercase tracking-[0.16em] text-muted">
          {t.aboutValues.map((value, i) => (
            <span key={value} className="flex items-center gap-4">
              {i > 0 ? (
                <span aria-hidden className="h-1 w-1 rounded-full bg-accent" />
              ) : null}
              <span>{value}</span>
            </span>
          ))}
        </Reveal>

        {/* En güçlü güven kanıtı — öne çıkar */}
        <Reveal className="mt-8 max-w-2xl border-l-2 border-accent pl-5">
          <p className="text-sm leading-relaxed text-foreground/80">
            <span className="font-medium text-accent">
              {t.achievement.program}
            </span>{" "}
            — {t.achievement.title}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
