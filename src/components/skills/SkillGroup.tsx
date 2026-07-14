import type { SkillCategory } from "@/lib/types";

/**
 * A skill category rendered as calm, editorial flowing text (no boxed chips):
 * a bold title and the skills separated by thin champagne-gold dots. Uses
 * flex-wrap so long lists wrap cleanly within their column.
 */
export function SkillGroup({ category }: { category: SkillCategory }) {
  return (
    <div className="border-t border-line pt-5">
      <h3 className="font-heading text-sm font-bold uppercase tracking-[0.14em] text-foreground">
        {category.title}
      </h3>
      <div className="mt-4 flex flex-wrap gap-x-2 gap-y-1.5 text-[0.95rem] leading-relaxed text-foreground/70">
        {category.skills.map((skill, i) => (
          <span key={skill} className="whitespace-nowrap">
            {i > 0 ? (
              <span aria-hidden className="mr-2 text-accent/60">
                ·
              </span>
            ) : null}
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
