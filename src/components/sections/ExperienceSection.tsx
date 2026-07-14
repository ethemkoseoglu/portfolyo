"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceTimeline } from "@/components/experience/ExperienceTimeline";
import { useLang } from "@/i18n/LanguageProvider";

export function ExperienceSection() {
  const { t } = useLang();

  return (
    <section id="deneyim" className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading title={t.sectionTitles.experience} />
        <div className="mt-8">
          <ExperienceTimeline experiences={t.experiences} />
        </div>
      </div>
    </section>
  );
}
