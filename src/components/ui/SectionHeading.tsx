interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

/**
 * Section opener (h2). A short gold rule marks the start of every section,
 * giving the page a consistent rhythm and a clear visual hierarchy.
 */
export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div>
      <span aria-hidden className="mb-6 block h-px w-12 bg-accent" />
      <h2 className="heading-section text-foreground">{title}</h2>
      {subtitle ? (
        <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-muted">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
