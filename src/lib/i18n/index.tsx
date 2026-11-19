"use client";

import React, { createContext, useContext, useEffect, useState, useMemo } from "react";
import type { SupportedLocale, Translations } from "./types";
import { fr } from "./dictionaries/fr";
import { en } from "./dictionaries/en";

const dictionaries: Record<SupportedLocale, Translations> = {
  fr,
  en,
};

interface I18nContextType {
  locale: SupportedLocale;
  setLocale: (locale: SupportedLocale) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType>({
  locale: "fr",
  setLocale: () => {},
  t: fr,
});

export const LOCALE_STORAGE_KEY = "mookoop_locale";

export function I18nProvider({
  children,
  initialLocale = "fr",
}: {
  children: React.ReactNode;
  initialLocale?: SupportedLocale;
}) {
  const [locale, setLocaleState] = useState<SupportedLocale>(initialLocale);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(LOCALE_STORAGE_KEY) as SupportedLocale | null;
      if (stored === "fr" || stored === "en") {
        setLocaleState(stored);
        return;
      }
      // Detect browser language if not explicitly set
      if (typeof navigator !== "undefined" && navigator.language) {
        const lang = navigator.language.toLowerCase();
        if (lang.startsWith("en")) {
          setLocaleState("en");
        } else if (lang.startsWith("fr")) {
          setLocaleState("fr");
        }
      }
    } catch {
      // localStorage may fail in restricted/private modes
    }
  }, []);

  const setLocale = (nextLocale: SupportedLocale) => {
    setLocaleState(nextLocale);
    try {
      localStorage.setItem(LOCALE_STORAGE_KEY, nextLocale);
    } catch {
      // ignore
    }
  };

  const t = useMemo(() => dictionaries[locale] || fr, [locale]);

  return (
    <I18nContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  return useContext(I18nContext);
}

export { fr, en };
export type { SupportedLocale, Translations };
