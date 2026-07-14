"use client";

import { site } from "@/config/site";
import { useLang } from "@/i18n/LanguageProvider";

/** Minimal editorial hero: an identity line + the thesis statement. */
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
      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-16 pt-28 sm:px-8 sm:pb-20 sm:pt-36">
        <p className="mb-6 text-xs uppercase tracking-[0.18em] text-muted sm:text-sm">
          <span className="text-foreground">{site.name}</span>
          <span className="mx-2.5 text-accent" aria-hidden>
            —
          </span>
          {t.hero.role}
        </p>
        <h1 className="max-w-4xl text-balance font-heading text-[clamp(2.1rem,5.2vw,4.75rem)] font-bold leading-[1.05] tracking-[-0.02em] text-foreground">
          {t.hero.title}
        </h1>
      </div>
    </section>
  );
}
