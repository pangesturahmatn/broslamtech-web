"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, ChevronRight, Menu, X, ExternalLink, Sparkles, LogIn, Users, Tag } from "lucide-react";

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-lg shadow-blue-500/20 bg-slate-900 flex items-center justify-center border border-slate-800 group-hover:border-amber-400/50 transition-colors">
              <Image
                src="/assets/broslam-globe-logo.png"
                alt="BroSlam.Tech Logo"
                width={40}
                height={40}
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-black text-white tracking-tight leading-none group-hover:text-amber-400 transition-colors">
                BroSlam<span className="text-amber-400">.Tech</span>
              </span>
              <span className="text-[10px] font-bold text-slate-400 tracking-wider uppercase mt-1">
                Super Platform Digital
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-6 text-xs font-bold text-slate-300">
            <Link href="/#solusi" className="hover:text-amber-400 transition-colors">
              10 Pilar Sistem
            </Link>
            <Link href="/#showcase" className="hover:text-amber-400 transition-colors">
              Antarmuka Layar
            </Link>
            <Link href="/#kalkulator" className="hover:text-amber-400 transition-colors">
              Kalkulator Bocor
            </Link>
            <Link href="/#harga" className="hover:text-amber-400 transition-colors text-amber-300">
              Harga Sewa
            </Link>
            <Link href="/#portofolio" className="hover:text-amber-400 transition-colors">
              Portofolio
            </Link>
            <Link href="/tentang-kami" className="hover:text-amber-400 transition-colors flex items-center gap-1">
              <span>Tentang Kami</span>
              <span className="px-1.5 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[9px] font-black">4 Tim</span>
            </Link>
            <Link href="/#portal-berita" className="hover:text-amber-400 transition-colors">
              Berita &amp; Promo
            </Link>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://app.broslamtech.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-850 text-slate-200 border border-slate-700 font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shadow-sm hover:border-slate-600"
            >
              <LogIn className="w-3.5 h-3.5 text-amber-400" />
              <span>Portal Tenant</span>
              <ExternalLink className="w-3 h-3 text-slate-500" />
            </a>

            <button
              type="button"
              onClick={onOpenConsultation}
              className="px-4 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-xs tracking-wide shadow-lg shadow-amber-500/20 transition-all cursor-pointer active:scale-95 flex items-center gap-1.5"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Coba Demo</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950/95 border-b border-slate-800 px-6 py-6 space-y-4 animate-in slide-in-from-top-2">
          <nav className="flex flex-col space-y-3 text-sm font-semibold text-slate-300">
            <Link
              href="/#solusi"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400"
            >
              10 Pilar Sistem
            </Link>
            <Link
              href="/#showcase"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400"
            >
              Antarmuka Layar
            </Link>
            <Link
              href="/#kalkulator"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400"
            >
              Kalkulator Bocor
            </Link>
            <Link
              href="/#harga"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 text-amber-300"
            >
              Harga Sewa
            </Link>
            <Link
              href="/#portofolio"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400"
            >
              Portofolio Bengkel
            </Link>
            <Link
              href="/tentang-kami"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 text-blue-400"
            >
              Tentang Kami (Tim 4 Orang)
            </Link>
            <Link
              href="/#portal-berita"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400"
            >
              Berita &amp; Promo
            </Link>
            <Link
              href="/admin/blog"
              onClick={() => setMobileMenuOpen(false)}
              className="hover:text-amber-400 text-amber-400"
            >
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
              Portal Tenant SaaS
            </a>
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenConsultation) onOpenConsultation();
              }}
              className="w-full py-2.5 text-center rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 font-black text-xs"
            >
              Konsultasi &amp; Coba Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
