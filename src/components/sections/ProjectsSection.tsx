"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectRow } from "@/components/projects/ProjectRow";
import { useLang } from "@/i18n/LanguageProvider";

export function ProjectsSection() {
  const { t } = useLang();
  const projects = [...t.projects].sort((a, b) => a.order - b.order);

  return (
    <section id="projeler" className="py-14 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading title={t.sectionTitles.projects} />
        <div className="mt-8 border-b border-line">
          {projects.map((project) => (
            <ProjectRow key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
