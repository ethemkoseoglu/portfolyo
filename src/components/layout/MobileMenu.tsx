"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { site } from "@/config/site";
import { SocialLinks } from "@/components/ui/SocialLinks";
import { LangToggle } from "@/components/ui/LangToggle";
import { useLang } from "@/i18n/LanguageProvider";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

/**
 * Full-height animated navigation drawer for small screens. Locks body scroll,
 * closes on Escape / link click, and honors reduced-motion.
 */
export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const reduce = useReducedMotion();
  const { lang, setLang, t } = useLang();
  const cvUrl = lang === "en" ? site.cvEn : site.cvTr;

  // Lock scroll + close on Escape while open.
  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          className="fixed inset-0 z-[90] flex flex-col bg-background lg:hidden"
          initial={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: -12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex items-center justify-between border-b border-line px-6 py-5">
            <span className="font-heading text-sm font-bold uppercase tracking-[0.14em]">
              Ethem Köseoğlu
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label={t.ui.closeMenu}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              <X className="h-5 w-5" strokeWidth={1.5} aria-hidden />
            </button>
          </div>

          <nav
            aria-label="Menu"
            className="flex flex-1 flex-col justify-center gap-2 px-6"
          >
            {t.nav.map((item, i) => (
              <motion.div
                key={item.href}
                initial={reduce ? false : { opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.05 + i * 0.05 }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block py-2 font-heading text-4xl font-bold uppercase tracking-tight text-foreground transition-colors hover:text-accent sm:text-5xl"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          <div className="flex flex-col gap-4 border-t border-line px-6 py-6">
            <div className="flex items-center justify-between">
              <span className="text-[0.65rem] uppercase tracking-[0.2em] text-muted">
                {t.ui.language}
              </span>
              <LangToggle lang={lang} onChange={setLang} />
            </div>
            <a
              href={cvUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="inline-flex min-h-[44px] w-full items-center justify-center rounded-full border border-line text-xs uppercase tracking-[0.16em] text-foreground transition-colors hover:border-accent hover:text-accent"
            >
              {t.ui.cv} (PDF)
            </a>
            <div className="flex items-center justify-between">
              <span className="text-[0.65rem] uppercase tracking-[0.2em] text-muted">
                {t.ui.contactLabel}
              </span>
              <SocialLinks />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
