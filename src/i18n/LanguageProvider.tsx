"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { dictionaries, type Dict, type Lang } from "./content";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  /** Aktif dilin sözlüğü. */
  t: Dict;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

/**
 * Tüm siteyi saran dil sağlayıcısı. Seçilen dil localStorage'a kaydedilir ve
 * <html lang> güncellenir. İlk render "tr", ardından kayıtlı tercih uygulanır.
 */
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("tr");

  useEffect(() => {
    const saved = window.localStorage.getItem("lang");
    if (saved === "tr" || saved === "en") {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLangState(saved);
      document.documentElement.lang = saved;
    }
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    window.localStorage.setItem("lang", l);
    document.documentElement.lang = l;
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dictionaries[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLang must be used within a LanguageProvider");
  }
  return ctx;
}
