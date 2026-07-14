import type { Experience } from "@/lib/types";
import { Reveal } from "@/components/ui/Reveal";

/**
 * Minimal hairline timeline: period, company, role. No descriptions.
 */
export function ExperienceTimeline({ experiences }: { experiences: Experience[] }) {
  return (
    <div className="border-b border-line">
      {experiences.map((exp, i) => (
        <Reveal
          key={exp.company}
          delay={i * 0.06}
          className="flex flex-col gap-1 border-t border-line py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8"
        >
          <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:gap-4">
            {exp.period ? (
              <span className="shrink-0 text-xs uppercase tracking-[0.16em] text-accent sm:w-24">
                {exp.period}
              </span>
            ) : null}
            <h3 className="font-heading text-xl font-bold tracking-tight text-foreground sm:text-2xl">
              {exp.company}
            </h3>
          </div>
          <p className="font-body text-sm italic text-muted">{exp.role}</p>
        </Reveal>
      ))}
    </div>
  );
}
