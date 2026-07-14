"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { useLang } from "@/i18n/LanguageProvider";

const columnTitle = "text-[0.72rem] uppercase tracking-[0.18em] text-muted";

export function EducationSection() {
  const { t } = useLang();
  const { items, certifications, languages } = t.education;
  const bigg = t.achievement;

  return (
    <section id="egitim" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading title={t.sectionTitles.education} />

        {/* Highlighted program (BiGG+) */}
        <Reveal className="mt-8 flex flex-col gap-3 border-y border-line py-6 sm:flex-row sm:items-center sm:justify-between sm:gap-8">
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.18em] text-accent">
              {bigg.program} · {t.ui.program}
            </p>
            <p className="mt-2 font-heading text-xl font-bold text-foreground">
              {bigg.title}
            </p>
          </div>
          <p className="shrink-0 text-[0.65rem] uppercase tracking-[0.2em] text-accent">
            {bigg.tags.join(" · ")}
          </p>
        </Reveal>

        <div className="mt-10 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          <Reveal>
            <h3 className={columnTitle}>{t.ui.eduCols.education}</h3>
            <ul className="mt-4">
              {items.map((item) => (
                <li key={item.degree} className="border-t border-line py-4">
                  <p className="text-[0.6rem] uppercase tracking-[0.18em] text-accent">
                    {item.period}
                  </p>
                  <p className="mt-1.5 font-heading text-base font-bold text-foreground">
                    {item.degree}
                  </p>
                  <p className="mt-0.5 text-sm text-muted">{item.school}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.06}>
            <h3 className={columnTitle}>{t.ui.eduCols.certifications}</h3>
            <ul className="mt-4">
              {certifications.map((cert) => (
                <li key={cert.title} className="border-t border-line py-4">
                  <p className="text-sm font-medium leading-snug text-foreground">
                    {cert.title}
                  </p>
                  <p className="mt-0.5 text-sm text-muted">{cert.issuer}</p>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.12}>
            <h3 className={columnTitle}>{t.ui.eduCols.languages}</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {languages.map((lang) => (
                <li
                  key={lang.name}
                  className="rounded-full border border-line px-3 py-1.5 text-[0.65rem] uppercase tracking-[0.1em] text-muted"
                >
                  <span className="text-foreground">{lang.name}</span>
                  <span className="mx-1.5 text-accent" aria-hidden>
                    ·
                  </span>
                  {lang.level}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
