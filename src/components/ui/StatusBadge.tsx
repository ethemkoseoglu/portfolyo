/**
 * Small uppercase status label with a hairline border — never a colorful pill.
 */
export function StatusBadge({ status }: { status: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line px-3 py-1 text-[0.6rem] uppercase tracking-[0.2em] text-muted">
      {status}
    </span>
  );
}
