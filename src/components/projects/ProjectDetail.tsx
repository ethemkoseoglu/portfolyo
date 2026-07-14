"use client";

import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { BracketLabel } from "@/components/ui/BracketLabel";
import { Reveal } from "@/components/ui/Reveal";
import { PillButton } from "@/components/ui/PillButton";
import { useLang } from "@/i18n/LanguageProvider";

function DetailSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal className="border-t border-line pt-6">
      <h2 className="font-heading text-xs font-medium uppercase tracking-[0.24em] text-muted">
        {title}
      </h2>
      <div className="mt-4">{children}</div>
    </Reveal>
  );
}

const backLink =
  "inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-muted transition-colors hover:text-accent";

export function ProjectDetail({ slug }: { slug: string }) {
  const { t } = useLang();
  const project = t.projects.find((p) => p.slug === slug);
  if (!project) {
    notFound();
  }
  const ui = t.ui;

  return (
    <article className="pt-14">
      {/* Header */}
      <header className="border-b border-line">
        <div className="mx-auto max-w-5xl px-5 py-12 sm:px-8 sm:py-16">
          <Link href="/#projeler" className={backLink}>
            <ArrowLeft className="h-4 w-4" strokeWidth={2} aria-hidden />
            {ui.backToProjects}
          </Link>

          <div className="mt-6 flex flex-wrap items-start justify-between gap-6">
            <h1 className="heading-section text-foreground">{project.name}</h1>
            {project.logo ? (
              <span className="flex items-center justify-center rounded-lg bg-[#eae6dc] p-3.5 ring-1 ring-inset ring-black/[0.06]">
                <span className="relative block h-10 w-32">
                  <Image
                    src={project.logo.src}
                    alt={project.logo.alt}
                    fill
                    sizes="160px"
                    className="object-contain"
                  />
                </span>
              </span>
            ) : null}
          </div>

          <dl className="mt-8 flex flex-col gap-5 sm:flex-row sm:flex-wrap sm:gap-x-14 sm:gap-y-6">
            <div>
              <dt>
                <BracketLabel label={ui.bracket.role} />
              </dt>
              <dd className="mt-2 text-sm text-foreground">{project.role}</dd>
            </div>
            <div>
              <dt>
                <BracketLabel label={ui.bracket.status} />
              </dt>
              <dd className="mt-2">
                <StatusBadge status={project.status} />
              </dd>
            </div>
            {project.tech.length > 0 ? (
              <div>
                <dt>
                  <BracketLabel label={ui.bracket.tech} />
                </dt>
                <dd className="mt-2 max-w-md text-sm text-foreground">
                  {project.tech.join(" · ")}
                </dd>
              </div>
            ) : null}
          </dl>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.focus.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-line px-3 py-1 text-[0.6rem] uppercase tracking-[0.14em] text-muted"
              >
                {tag}
              </li>
            ))}
          </ul>

          {project.liveUrl ? (
            <div className="mt-8">
              <PillButton href={project.liveUrl} external variant="primary">
                {ui.viewLive}
                <ArrowUpRight className="h-4 w-4" strokeWidth={2} aria-hidden />
              </PillButton>
            </div>
          ) : null}

          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-foreground/85">
            {project.detail}
          </p>

          {project.achievementNote ? (
            <p className="mt-6 max-w-2xl border-l-2 border-accent pl-5 text-sm leading-relaxed text-foreground/80">
              {project.achievementNote}
            </p>
          ) : null}
        </div>
      </header>

      {/* Body */}
      <div className="mx-auto max-w-5xl space-y-10 px-5 py-12 sm:px-8 sm:py-16">
        <DetailSection title={ui.detail.problem}>
          <p className="max-w-2xl text-base leading-relaxed text-foreground/80">
            {project.problem}
          </p>
        </DetailSection>

        <DetailSection title={ui.detail.solution}>
          <p className="max-w-2xl text-base leading-relaxed text-foreground/80">
            {project.solution}
          </p>
        </DetailSection>

        {project.contribution ? (
          <DetailSection title={ui.detail.contribution}>
            <p className="max-w-2xl text-base leading-relaxed text-foreground/80">
              {project.contribution}
            </p>
          </DetailSection>
        ) : null}

        <DetailSection title={ui.detail.features}>
          <ul className="grid max-w-3xl gap-x-8 gap-y-2.5 sm:grid-cols-2">
            {project.features.map((feature) => (
              <li
                key={feature}
                className="flex items-start gap-3 text-sm text-foreground/80"
              >
                <span className="mt-1 text-accent" aria-hidden>
                  —
                </span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </DetailSection>

        <DetailSection title={ui.detail.learned}>
          <ul className="max-w-2xl space-y-2.5">
            {project.lessons.map((lesson) => (
              <li
                key={lesson}
                className="flex items-start gap-3 text-base leading-relaxed text-foreground/80"
              >
                <span className="mt-1.5 text-accent" aria-hidden>
                  —
                </span>
                <span>{lesson}</span>
              </li>
            ))}
          </ul>
        </DetailSection>

        {project.results && project.results.length > 0 ? (
          <DetailSection title={ui.detail.results}>
            <dl className="grid gap-8 sm:grid-cols-3">
              {project.results.map((result) => (
                <div key={result.label}>
                  <dt className="text-[0.6rem] uppercase tracking-[0.2em] text-muted">
                    {result.label}
                  </dt>
                  <dd className="mt-2 font-heading text-3xl font-bold text-foreground">
                    {result.value}
                  </dd>
                </div>
              ))}
            </dl>
          </DetailSection>
        ) : null}
      </div>
    </article>
  );
}
