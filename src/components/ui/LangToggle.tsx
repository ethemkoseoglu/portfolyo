"use client";

import type { Lang } from "@/i18n/content";

/**
 * Minimal, editorial TR / EN toggle: no boxes — the active language is bright
 * with a thin champagne-gold underline, the other stays muted.
 */
export function LangToggle({
  lang,
  onChange,
  className = "",
}: {
  lang: Lang;
  onChange: (l: Lang) => void;
  className?: string;
}) {
  const item = (l: Lang) => (
    <button
      type="button"
      onClick={() => onChange(l)}
      aria-pressed={lang === l}
      className={`inline-flex min-h-[44px] items-center px-1.5 transition-colors duration-300 ${
        lang === l ? "text-foreground" : "text-muted hover:text-foreground"
      }`}
    >
      <span className="relative">
        {l.toUpperCase()}
        <span
          aria-hidden
          className={`absolute -bottom-1 left-1/2 h-px -translate-x-1/2 bg-accent transition-all duration-300 ${
            lang === l ? "w-4 opacity-100" : "w-0 opacity-0"
          }`}
        />
      </span>
    </button>
  );

  return (
    <div
      className={`inline-flex items-center gap-3 text-[0.7rem] font-semibold uppercase tracking-[0.18em] ${className}`}
      role="group"
      aria-label="Language"
    >
      {item("tr")}
      <span aria-hidden className="h-3 w-px bg-line" />
      {item("en")}
    </div>
  );
}
