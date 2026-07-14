interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

/**
 * Section title (h2). Kept lean — no ghost word, no side label — so content
 * sits close beneath it.
 */
export function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <div>
      <h2 className="heading-section text-foreground">{title}</h2>
      {subtitle ? (
        <p className="mt-4 max-w-2xl font-body text-base leading-relaxed text-muted">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}
