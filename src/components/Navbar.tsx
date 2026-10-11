"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "../context/LanguageContext";
import { useTheme } from "../context/ThemeContext";
import { Menu, X, Sun, Moon, LogIn, ArrowRight } from "lucide-react";

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#070B14]/85 backdrop-blur-xl border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* 1. Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/assets/broslam-globe-logo.png"
              alt="BroSlam.Tech Logo"
              width={38}
              height={38}
              className="object-contain drop-shadow-[0_4px_14px_rgba(247,148,29,0.35)] group-hover:scale-105 transition-transform"
              priority
            />
            <span className="text-xl font-black text-white tracking-tight">
              BroSlam<span className="text-amber-400">.Tech</span>
            </span>
          </Link>

          {/* 2. Corporate Navigation Links (Clean, Universal Company Profile Menu) */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-semibold text-slate-200">
            <Link href="/" className="hover:text-amber-400 transition-colors">
              {t.nav.home}
            </Link>
            <Link href="/tentang-kami" className="hover:text-amber-400 transition-colors">
              {t.nav.about}
            </Link>
            <Link href="/#solusi" className="hover:text-amber-400 transition-colors">
              {t.nav.solutions}
            </Link>
            <Link href="/#harga" className="hover:text-amber-400 text-amber-300 font-bold transition-colors">
              {t.nav.pricing}
            </Link>
            <Link href="/#portofolio" className="hover:text-amber-400 transition-colors">
              {t.nav.portfolio}
            </Link>
            <Link href="/blog" className="hover:text-amber-400 transition-colors">
              {t.nav.blog}
            </Link>
          </nav>

          {/* 3. Streamlined, Professional Action Buttons (Simplified like Kopra Mandiri) */}
          <div className="hidden sm:flex items-center gap-4">
            
            {/* Minimalist Switcher Group (Language & Theme combined without clutter) */}
            <div className="flex items-center gap-3 border-r border-white/15 pr-4 text-xs font-semibold text-slate-300">
              {/* Plain Text Language Toggle ID | EN */}
              <button
                type="button"
                onClick={toggleLang}
                className="hover:text-white transition-colors cursor-pointer flex items-center gap-1 select-none"
                title="Ganti Bahasa / Switch Language"
              >
                <span className={lang === "ID" ? "text-amber-400 font-bold" : "text-slate-400 hover:text-white"}>ID</span>
                <span className="text-white/30">|</span>
                <span className={lang === "EN" ? "text-amber-400 font-bold" : "text-slate-400 hover:text-white"}>EN</span>
              </button>

              {/* Minimalist Theme Icon */}
              <button
                type="button"
                onClick={toggleTheme}
                className="p-1 rounded-lg text-slate-400 hover:text-amber-400 transition-colors cursor-pointer"
                title={theme === "light" ? "Beralih ke Mode Gelap" : "Beralih ke Mode Terang"}
              >
                {theme === "light" ? (
                  <Moon className="w-4 h-4" />
                ) : (
                  <Sun className="w-4 h-4 text-amber-400" />
                )}
              </button>
            </div>

            {/* Enterprise Client Login (Sleek Outline Pill) */}
            <a
              href="https://app.broslamtech.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full text-slate-200 hover:text-white border border-white/20 hover:border-white/50 bg-white/5 hover:bg-white/10 text-xs font-semibold transition-all cursor-pointer flex items-center gap-1.5"
            >
              <LogIn className="w-3.5 h-3.5 text-slate-300" />
              <span>{t.nav.login}</span>
            </a>

            {/* Primary Action CTA (Distinctive Gold Pill) */}
            <button
              type="button"
              onClick={onOpenConsultation}
              className="px-5 py-2.5 rounded-full bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs tracking-wide shadow-[0_4px_16px_rgba(251,191,36,0.3)] hover:shadow-[0_6px_20px_rgba(251,191,36,0.45)] transition-all cursor-pointer active:scale-95 flex items-center gap-1.5"
            >
              <span>{t.nav.demo}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Trigger & Mini Switcher */}
          <div className="flex items-center gap-3 lg:hidden">
            <button
              type="button"
              onClick={toggleLang}
              className="text-xs font-bold text-amber-400"
            >
              {lang}
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              className="p-1 text-slate-400 hover:text-white"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4 text-amber-400" />}
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#070B14]/95 border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-3 text-sm font-semibold text-slate-300">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400 py-1">
              {t.nav.home}
            </Link>
            <Link href="/tentang-kami" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400 py-1">
              {t.nav.about}
            </Link>
            <Link href="/#solusi" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400 py-1">
              {t.nav.solutions}
            </Link>
            <Link href="/#harga" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400 text-amber-300 py-1">
              {t.nav.pricing}
            </Link>
            <Link href="/#portofolio" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400 py-1">
              {t.nav.portfolio}
            </Link>
            <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="hover:text-amber-400 py-1">
              {t.nav.blog}
            </Link>
          </nav>

          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <a
              href="https://app.broslamtech.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center rounded-xl bg-white/10 border border-white/20 text-slate-200 font-bold text-xs"
            >
              {t.nav.login}
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenConsultation) onOpenConsultation();
              }}
              className="w-full py-2.5 text-center rounded-xl bg-amber-400 text-slate-950 font-bold text-xs shadow-md"
            >
              {t.nav.demo}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
