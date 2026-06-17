"use client";

import { useState, useCallback, useEffect } from "react";
import { type Lang, t as translate } from "@/app/lib/data";

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "es";
  try {
    const saved = localStorage.getItem("fitmagra-lang") as Lang;
    if (saved === "es" || saved === "en") return saved;
    // Try browser preference
    const browserLang = navigator.language?.slice(0, 2).toLowerCase();
    if (browserLang === "en") return "en";
  } catch {}
  return "es";
}

export function useLanguage() {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  // Sync html[lang] attribute whenever language changes
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    document.documentElement.lang = l;
    try {
      localStorage.setItem("fitmagra-lang", l);
    } catch {}
  }, []);

  const t = useCallback(
    (key: string) => {
      return translate(lang, key as Parameters<typeof translate>[1]);
    },
    [lang]
  );

  return { lang, setLang, t };
}
