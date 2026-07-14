/**
 * Infinite horizontal marquee strip (pure CSS animation; paused under
 * prefers-reduced-motion via globals.css). Two identical tracks translate
 * -50% for a seamless loop. Separator dots carry the gold accent.
 */
export function Marquee({ items }: { items: string[] }) {
  return (
    <div className="relative overflow-hidden border-y border-line py-5 sm:py-6">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((track) => (
          <ul
            key={track}
            aria-hidden={track === 1}
            className="flex shrink-0 items-center gap-8 pr-8 sm:gap-12 sm:pr-12"
          >
            {items.map((item, i) => (
              <li
                key={`${track}-${i}`}
                className="flex shrink-0 items-center gap-8 font-heading text-lg uppercase tracking-[0.16em] text-muted sm:gap-12 sm:text-2xl"
              >
                <span>{item}</span>
                <span className="text-accent" aria-hidden>
                  ·
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}
