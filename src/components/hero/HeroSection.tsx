"use client";

import { useLang } from "@/i18n/LanguageProvider";

/** Minimal editorial hero: title only + a single tamed ghost word. */
export function HeroSection() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(50% 40% at 25% 20%, rgba(201,169,110,0.09), transparent 70%)",
        }}
      />
      <span
        aria-hidden
        className="ghost-text pointer-events-none absolute -right-4 top-[38%] hidden select-none text-[clamp(3rem,12vw,9rem)] opacity-60 sm:block"
      >
        EK
      </span>

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-36">
        <h1 className="max-w-4xl text-balance font-heading text-[clamp(2.1rem,5.2vw,4.75rem)] font-bold leading-[1.0] tracking-[-0.02em] text-foreground">
          {t.hero.title}
        </h1>
      </div>
    </section>
  );
}
