"use client";

import { useState, useCallback } from "react";
import { type Lang, t as translate } from "@/app/lib/data";

function getInitialLang(): Lang {
  if (typeof window === "undefined") return "es";
  try {
    const saved = localStorage.getItem("fitmagra-lang") as Lang;
    if (saved === "es" || saved === "en") return saved;
  } catch {}
  return "es";
}

export function useLanguage() {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
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
