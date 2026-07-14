"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import { site } from "@/config/site";
import { PillButton } from "@/components/ui/PillButton";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { MobileMenu } from "./MobileMenu";
import { LangToggle } from "@/components/ui/LangToggle";
import { useLang } from "@/i18n/LanguageProvider";

const iconLink =
  "inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("");
  const { lang, setLang, t } = useLang();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll-spy: highlight the nav item for the section currently in view.
  useEffect(() => {
    const ids = t.nav
      .map((item) => item.href.split("#")[1])
      .filter((id): id is string => Boolean(id));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const inView = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (inView[0]) setActive(inView[0].target.id);
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [t.nav]);

  const cvUrl = lang === "en" ? site.cvEn : site.cvTr;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
          scrolled
            ? "border-b border-line bg-background/80 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <nav
          aria-label={t.ui.contactLabel}
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8"
        >
          <Link
            href="/#ana-sayfa"
            className="font-heading text-sm font-bold uppercase tracking-[0.14em] text-foreground transition-colors hover:text-accent"
          >
            Ethem Köseoğlu
          </Link>

          <ul className="hidden items-center gap-8 lg:flex">
            {t.nav.map((item) => {
              const id = item.href.split("#")[1];
              const isActive = active === id;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={isActive ? "page" : undefined}
                    className={`relative text-[0.7rem] uppercase tracking-[0.18em] transition-colors ${
                      isActive
                        ? "text-foreground"
                        : "text-muted hover:text-foreground"
                    }`}
                  >
                    {item.label}
                    <span
                      aria-hidden
                      className={`absolute -bottom-1.5 left-0 h-px bg-accent transition-all duration-300 ${
                        isActive ? "w-full opacity-100" : "w-0 opacity-0"
                      }`}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-2.5">
            <div className="hidden items-center gap-2 md:flex">
              <a
                href={site.github}
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
                className={iconLink}
              >
                <GitHubIcon className="h-[15px] w-[15px]" />
              </a>
              <a
                href={site.linkedin}
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
                className={iconLink}
              >
                <LinkedInIcon className="h-[15px] w-[15px]" />
              </a>
              <a
                href={cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-1 text-[0.7rem] uppercase tracking-[0.16em] text-muted transition-colors hover:text-accent"
              >
                {t.ui.cv}
              </a>
              <LangToggle lang={lang} onChange={setLang} className="ml-1" />
            </div>
            <div className="hidden sm:block">
              <PillButton href="/#iletisim" variant="secondary">
                {t.ui.getInTouch}
              </PillButton>
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label={t.ui.openMenu}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-foreground transition-colors hover:border-accent hover:text-accent lg:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={1.5} aria-hidden />
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
