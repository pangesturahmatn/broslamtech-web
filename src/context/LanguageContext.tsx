"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

export type Language = "ID" | "EN";

interface Translations {
  nav: {
    home: string;
    about: string;
    solutions: string;
    pricing: string;
    portfolio: string;
    blog: string;
    contact: string;
    login: string;
    demo: string;
  };
}

const dictionaries: Record<Language, Translations> = {
  ID: {
    nav: {
      home: "Beranda",
      about: "Tentang Kami",
      solutions: "Solusi",
      pricing: "Harga",
      portfolio: "Portofolio",
      blog: "Blog",
      contact: "Kontak",
      login: "Login Portal",
      demo: "Coba Demo",
    },
  },
  EN: {
    nav: {
      home: "Home",
      about: "About Us",
      solutions: "Solutions",
      pricing: "Pricing",
      portfolio: "Portfolio",
      blog: "Blog",
      contact: "Contact",
      login: "Portal Login",
      demo: "Try Demo",
    },
  },
};

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  toggleLang: () => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType>({
  lang: "ID",
  setLang: () => {},
  toggleLang: () => {},
  t: dictionaries.ID,
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("ID");

  useEffect(() => {
    const saved = localStorage.getItem("broslam_lang") as Language;
    if (saved === "ID" || saved === "EN") {
      setLangState(saved);
    }
  }, []);

  const setLang = (l: Language) => {
    setLangState(l);
    localStorage.setItem("broslam_lang", l);
  };

  const toggleLang = () => {
    const next = lang === "ID" ? "EN" : "ID";
    setLang(next);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t: dictionaries[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
