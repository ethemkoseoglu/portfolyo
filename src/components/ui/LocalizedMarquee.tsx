"use client";

import { Marquee } from "./Marquee";
import { useLang } from "@/i18n/LanguageProvider";

/** Dile göre marquee içeriğini render eder. */
export function LocalizedMarquee() {
  const { t } = useLang();
  return <Marquee items={t.marquee} />;
}
