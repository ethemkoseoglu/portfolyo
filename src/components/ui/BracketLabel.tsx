/**
 * Bracket meta label used on project detail pages, e.g. [ROL], [DURUM].
 * The brackets carry the gold accent as a small signature detail.
 */
export function BracketLabel({ label }: { label: string }) {
  return (
    <span className="text-[0.72rem] font-medium uppercase tracking-[0.18em] text-muted">
      <span className="text-accent">[</span>
      {label}
      <span className="text-accent">]</span>
    </span>
  );
}
