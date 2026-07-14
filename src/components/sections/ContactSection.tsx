"use client";

import { site, phoneDigits } from "@/config/site";
import { Reveal } from "@/components/ui/Reveal";
import { PillButton } from "@/components/ui/PillButton";
import { ContactForm } from "@/components/forms/ContactForm";
import { useLang } from "@/i18n/LanguageProvider";

export function ContactSection() {
  const { t } = useLang();

  return (
    <section id="iletisim" className="border-t border-line py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <span aria-hidden className="mb-6 block h-px w-12 bg-accent" />
          <h2 className="heading-cta max-w-5xl text-balance text-foreground">
            {t.contactHeading}
          </h2>
        </Reveal>

        <div className="mt-10 grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Direct channels */}
          <Reveal delay={0.15}>
            <div>
              <div className="flex w-fit flex-col gap-3">
                <div className="flex flex-wrap gap-3">
                  <PillButton
                    href={`https://wa.me/${phoneDigits}`}
                    external
                    variant="secondary"
                  >
                    WhatsApp
                  </PillButton>
                  <PillButton href={site.linkedin} external variant="secondary">
                    LinkedIn
                  </PillButton>
                  <PillButton href={site.github} external variant="secondary">
                    GitHub
                  </PillButton>
                </div>
                <PillButton
                  href={`mailto:${site.email}`}
                  variant="secondary"
                  className="w-full"
                >
                  {t.ui.sendEmail}
                </PillButton>
              </div>

              <dl className="mt-10 space-y-4 border-t border-line pt-8">
                <div className="flex flex-col gap-1">
                  <dt className="text-[0.6rem] uppercase tracking-[0.2em] text-muted">
                    {t.ui.dt.email}
                  </dt>
                  <dd>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-sm text-foreground transition-colors hover:text-accent"
                    >
                      {site.email}
                    </a>
                  </dd>
                </div>
                <div className="flex flex-col gap-1">
                  <dt className="text-[0.6rem] uppercase tracking-[0.2em] text-muted">
                    {t.ui.dt.phone}
                  </dt>
                  <dd>
                    <a
                      href={`tel:+${phoneDigits}`}
                      className="text-sm text-foreground transition-colors hover:text-accent"
                    >
                      {site.phone}
                    </a>
                  </dd>
                </div>
                <div className="flex flex-col gap-1">
                  <dt className="text-[0.6rem] uppercase tracking-[0.2em] text-muted">
                    {t.ui.dt.location}
                  </dt>
                  <dd className="text-sm text-foreground">{site.location}</dd>
                </div>
              </dl>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
