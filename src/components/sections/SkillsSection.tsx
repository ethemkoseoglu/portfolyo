"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SkillGroup } from "@/components/skills/SkillGroup";
import { useLang } from "@/i18n/LanguageProvider";

export function SkillsSection() {
  const { t } = useLang();

  return (
    <section id="yetkinlikler" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading title={t.sectionTitles.skills} />

        <div className="mt-8 grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {t.skills.map((category, i) => (
            <Reveal key={category.title} delay={(i % 2) * 0.06}>
              <SkillGroup category={category} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
