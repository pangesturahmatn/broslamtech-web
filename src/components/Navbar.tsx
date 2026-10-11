"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ExternalLink, Sparkles, LogIn } from "lucide-react";

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/75 backdrop-blur-md border-b border-white/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 sm:h-20">
          
          {/* Brand Logo & Name (Clean, Compact, No Clutter) */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src="/assets/broslam-globe-logo.png"
              alt="BroSlam.Tech Logo"
              width={42}
              height={42}
              className="object-contain drop-shadow-[0_4px_14px_rgba(14,165,233,0.45)] group-hover:scale-105 transition-transform"
              priority
            />
            <span className="text-xl font-black text-white tracking-tight">
              BroSlam<span className="text-[#FFB703]">.Tech</span>
            </span>
          </Link>

          {/* Desktop Navigation Links (Concise, Neat, Small Font 0.8rem / 13px) */}
          <nav className="hidden lg:flex items-center gap-7 text-[13px] font-semibold text-white/85">
            <Link href="/#solusi" className="hover:text-[#FFB703] transition-colors">
              Solusi 360°
            </Link>
            <Link href="/#showcase" className="hover:text-[#FFB703] transition-colors">
              Antarmuka
            </Link>
            <Link href="/#kalkulator" className="hover:text-[#FFB703] transition-colors">
              Kalkulator
            </Link>
            <Link href="/#harga" className="hover:text-[#FFB703] transition-colors text-amber-300 font-bold">
              Harga Sewa
            </Link>
            <Link href="/#portofolio" className="hover:text-[#FFB703] transition-colors">
              Portofolio
            </Link>
            <Link href="/tentang-kami" className="hover:text-[#FFB703] transition-colors flex items-center gap-1.5">
              <span>Tentang Kami</span>
              <span className="px-1.5 py-0.2 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-bold">4 Tim</span>
            </Link>
            <Link href="/#portal-berita" className="hover:text-[#FFB703] transition-colors">
              Berita
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="https://app.broslamtech.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-full text-white/90 border border-white/30 bg-white/10 hover:bg-white/20 hover:border-white text-xs font-semibold backdrop-blur-md transition-all cursor-pointer flex items-center gap-1.5"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Login Portal</span>
            </a>

            <button
              type="button"
              onClick={onOpenConsultation}
              className="px-5 py-2 rounded-full bg-[#F7941D] hover:bg-[#FFA726] text-black font-bold text-xs tracking-wide shadow-[0_4px_12px_rgba(247,148,29,0.35)] transition-all cursor-pointer active:scale-95 border border-[#FFB703]"
            >
              Coba Demo
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 px-6 py-6 space-y-4 animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-3 text-sm font-semibold text-slate-300">
            <Link href="/#solusi" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#FFB703]">
              Solusi 360°
            </Link>
            <Link href="/#showcase" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#FFB703]">
              Antarmuka Layar
            </Link>
            <Link href="/#kalkulator" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#FFB703]">
              Kalkulator Bocor
            </Link>
            <Link href="/#harga" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#FFB703] text-amber-300">
              Harga Sewa
            </Link>
            <Link href="/#portofolio" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#FFB703]">
              Portofolio Bengkel
            </Link>
            <Link href="/tentang-kami" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#FFB703] text-blue-400">
              Tentang Kami (Tim 4 Orang)
            </Link>
            <Link href="/#portal-berita" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#FFB703]">
              Berita &amp; Promo
            </Link>
            <Link href="/admin/blog" onClick={() => setMobileMenuOpen(false)} className="hover:text-[#FFB703] text-amber-400">
              ✍️ Panel Admin Promo &amp; Blog
            </Link>
          </nav>

          <div className="pt-4 border-t border-slate-800 flex flex-col gap-3">
            <a
              href="https://app.broslamtech.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 text-center rounded-xl bg-slate-900 border border-slate-700 text-slate-200 font-bold text-xs"
            >
              Login Portal Tenant
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenConsultation) onOpenConsultation();
              }}
              className="w-full py-2.5 text-center rounded-xl bg-[#F7941D] text-black font-bold text-xs"
            >
              Coba Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
