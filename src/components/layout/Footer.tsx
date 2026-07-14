"use client";

import Link from "next/link";
import { site, phoneDigits } from "@/config/site";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { useLang } from "@/i18n/LanguageProvider";

const columnTitle = "text-[0.65rem] uppercase tracking-[0.24em] text-muted";
const columnLink =
  "text-sm text-foreground/80 transition-colors hover:text-accent";

export function Footer() {
  const { t } = useLang();
  const projects = [...t.projects].sort((a, b) => a.order - b.order);

  return (
    <footer className="relative overflow-hidden border-t border-line">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 flex select-none justify-center overflow-hidden"
      >
        <span className="ghost-text translate-y-[22%] text-[clamp(2.5rem,17vw,15rem)]">
          ETHEM KÖSEOĞLU
        </span>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-5 pb-12 pt-16 sm:px-8 sm:pt-20">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <nav aria-label={t.footer.cols.menu} className="flex flex-col gap-4">
            <h3 className={columnTitle}>{t.footer.cols.menu}</h3>
            <ul className="flex flex-col gap-2.5">
              {t.nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={columnLink}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label={t.footer.cols.projects} className="flex flex-col gap-4">
            <h3 className={columnTitle}>{t.footer.cols.projects}</h3>
            <ul className="flex flex-col gap-2.5">
              {projects.map((project) => (
                <li key={project.slug}>
                  <Link href={`/projects/${project.slug}`} className={columnLink}>
                    {project.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex flex-col gap-4">
            <h3 className={columnTitle}>{t.footer.cols.links}</h3>
            <ul className="flex flex-col gap-2.5">
              <li>
                <a href={`mailto:${site.email}`} className={columnLink}>
                  {site.email}
                </a>
              </li>
              <li>
                <a href={`tel:+${phoneDigits}`} className={columnLink}>
                  {site.phone}
                </a>
              </li>
            </ul>
            <SocialLinks className="mt-1" />
          </div>

          <div className="flex flex-col gap-4">
            <h3 className={columnTitle}>{t.footer.cols.contact}</h3>
            <p className="max-w-xs text-sm leading-relaxed text-muted">
              {t.footer.reminder}
            </p>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-line pt-8 sm:mt-24 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted">{t.footer.copyright}</p>
          <p className="text-xs text-muted">{t.footer.tagline}</p>
        </div>
      </div>
    </footer>
  );
}
