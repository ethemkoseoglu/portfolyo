"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { useLang } from "@/i18n/LanguageProvider";

export function AboutSection() {
  const { t } = useLang();

  return (
    <section id="hakkimda" className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading title={t.sectionTitles.about} />
        <Reveal className="mt-8 max-w-3xl">
          <p className="font-body text-xl leading-relaxed text-foreground/85 sm:text-2xl">
            {t.aboutBio}
          </p>
        </Reveal>
      </div>
    </section>
  );
}
