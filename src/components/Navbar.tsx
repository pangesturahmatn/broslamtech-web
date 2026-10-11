"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ExternalLink, Globe, LogIn } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { lang, toggleLang, t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/assets/broslam-globe-logo.png"
              alt="BroSlam.Tech Logo"
              width={40}
              height={40}
              className="object-contain drop-shadow-[0_4px_14px_rgba(14,165,233,0.45)] group-hover:scale-105 transition-transform"
              priority
            />
            <span className="text-xl font-black text-white tracking-tight">
              BroSlam<span className="text-[#FFB703]">.Tech</span>
            </span>
          </Link>

          {/* Corporate Navigation Links (Clean, Universal Company Profile Menu) */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-semibold text-white/85">
            <Link href="/" className="hover:text-[#FFB703] transition-colors">
              {t.nav.home}
            </Link>
            <Link href="/tentang-kami" className="hover:text-[#FFB703] transition-colors">
              {t.nav.about}
            </Link>
            <Link href="/#solusi" className="hover:text-[#FFB703] transition-colors">
              {t.nav.solutions}
            </Link>
            <Link href="/#harga" className="hover:text-[#FFB703] transition-colors text-amber-300 font-bold">
              {t.nav.pricing}
            </Link>
            <Link href="/#portofolio" className="hover:text-[#FFB703] transition-colors">
              {t.nav.portfolio}
            </Link>
            <Link href="/blog" className="hover:text-[#FFB703] transition-colors">
              {t.nav.blog}
            </Link>
            <button
              type="button"
              onClick={onOpenConsultation}
              className="hover:text-[#FFB703] transition-colors cursor-pointer"
            >
              {t.nav.contact}
            </button>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switcher Pill */}
            <button
              type="button"
              onClick={toggleLang}
              className="px-2.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[11px] font-bold text-white flex items-center gap-1.5 transition-all cursor-pointer shadow-xs"
              title="Ganti Bahasa / Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-amber-400" />
              <span>{lang === "ID" ? "ID" : "EN"}</span>
            </button>

            {/* Login Portal */}
            <a
              href="https://app.broslamtech.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full text-white/90 border border-white/30 bg-white/10 hover:bg-white/20 hover:border-white text-xs font-semibold backdrop-blur-md transition-all cursor-pointer flex items-center gap-1.5"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>{t.nav.login}</span>
            </a>

            {/* CTA Button */}
            <button
              type="button"
              onClick={onOpenConsultation}
              className="px-5 py-2 rounded-full bg-[#F7941D] hover:bg-[#FFA726] text-black font-bold text-xs tracking-wide shadow-[0_4px_12px_rgba(247,148,29,0.35)] transition-all cursor-pointer active:scale-95 border border-[#FFB703]"
            >
              {t.nav.demo}
            </button>
          </div>

          {/* Mobile Menu & Lang Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={toggleLang}
              className="px-2 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-white flex items-center gap-1"
            >
              <Globe className="w-3 h-3 text-amber-400" />
              <span>{lang}</span>
            </button>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 px-6 py-6 space-y-4 animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-3 text-sm font-semibold text-slate-300">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#FFB703]">
              {t.nav.home}
            </Link>
            <Link href="/tentang-kami" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#FFB703]">
              {t.nav.about}
            </Link>
            <Link href="/#solusi" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#FFB703]">
              {t.nav.solutions}
            </Link>
            <Link href="/#harga" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#FFB703] text-amber-300">
              {t.nav.pricing}
            </Link>
            <Link href="/#portofolio" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#FFB703]">
              {t.nav.portfolio}
            </Link>
            <Link href="/blog" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#FFB703]">
              {t.nav.blog}
            </Link>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenConsultation) onOpenConsultation();
              }}
              className="text-left hover:text-[#FFB703]"
            >
              {t.nav.contact}
            </button>
          </nav>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <a
              href="https://app.broslamtech.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-bold text-xs"
            >
              {t.nav.login}
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenConsultation) onOpenConsultation();
              }}
              className="w-full py-2.5 text-center rounded-xl bg-[#F7941D] text-black font-bold text-xs"
            >
              {t.nav.demo}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
