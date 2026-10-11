"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  MessageCircle,
  ExternalLink,
  ShieldCheck,
  CreditCard,
  KeyRound,
  Calculator,
  Newspaper,
  Sparkles,
  Building2,
  Users2
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-[#050811] border-t border-slate-200 dark:border-slate-800/80 py-12 text-slate-600 dark:text-slate-400 text-xs relative overflow-hidden transition-colors duration-300">
      {/* Subtle bottom ambient light in dark mode */}
      <div className="hidden dark:block absolute bottom-0 left-1/3 w-[500px] h-[250px] bg-blue-600/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden shadow-sm bg-white dark:bg-slate-900 flex items-center justify-center border border-slate-200 dark:border-white/15">
                <Image
                  src="/assets/broslam-globe-logo.png"
                  alt="BroSlam.Tech Logo"
                  width={38}
                  height={38}
                  className="object-contain"
                />
              </div>
              <div className="text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                BroSlam<span className="text-amber-500 dark:text-amber-400">.Tech</span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-300 font-normal">
              Super Platform Digital untuk Pemilik &amp; Manajemen Multi-Cabang Bengkel Mobil di Indonesia. Terinspirasi dari keteguhan Gunung Bromo &amp; Gunung Slamet, mengakselerasi profit bertumbuh ke atas.
            </p>
          </div>

          {/* Solusi & Harga */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Solusi &amp; Harga
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <Link href="/#solusi" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors text-slate-600 dark:text-slate-300 block">
                  10 Pilar Ekosistem 360°
                </Link>
              </li>
              <li>
                <Link href="/#harga" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors text-slate-900 dark:text-white font-semibold block">
                  Harga Sewa Mulai Rp 399rb
                </Link>
              </li>
              <li>
                <Link href="/#portofolio" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors text-slate-600 dark:text-slate-300 block">
                  Portofolio Bengkel Terkemuka
                </Link>
              </li>
              <li>
                <Link href="/tentang-kami" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors text-slate-600 dark:text-slate-300 block">
                  Dewan Eksekutif &amp; Kepemimpinan
                </Link>
              </li>
            </ul>
          </div>

          {/* Akses Portal */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Akses Portal
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <a
                  href="https://app.broslamtech.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors text-slate-900 dark:text-white font-semibold inline-flex items-center gap-1.5"
                >
                  <span>Login Single Sign-On (SSO)</span>
                  <ExternalLink className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                </a>
              </li>
              <li>
                <Link href="/#kalkulator" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors text-slate-600 dark:text-slate-300 block">
                  Kalkulator Kebocoran Uang
                </Link>
              </li>
              <li>
                <Link href="/#portal-berita" className="hover:text-amber-600 dark:hover:text-amber-400 transition-colors text-slate-600 dark:text-slate-300 block">
                  Portal Berita &amp; Wawasan
                </Link>
              </li>
            </ul>
          </div>

          {/* Rekening & Konsultasi */}
          <div className="space-y-3.5">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Rekening &amp; Konsultasi
            </h4>
            <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 space-y-1.5 shadow-xs">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                <CreditCard className="w-3 h-3 text-sky-600 dark:text-sky-400" />
                <span>Rekening Resmi Langganan:</span>
              </span>
              <div className="text-xs font-bold text-slate-900 dark:text-white">
                Metode Pembayaran: Bank BCA
              </div>
              <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-relaxed">
                Invoice &amp; nomor rekening transfer resmi diterbitkan via WhatsApp CS
              </div>
            </div>

            <a
              href="https://wa.me/6281359433350?text=Halo%20Tim%20BroSlam.Tech,%20saya%20tertarik%20konsultasi%20Super%20Platform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 dark:bg-slate-800 dark:hover:bg-slate-700 text-white font-bold text-xs border border-slate-800 dark:border-slate-700 transition-all duration-300 cursor-pointer active:scale-95 shadow-xs"
            >
              <MessageCircle className="w-4 h-4 text-emerald-100" />
              <span>Chat WhatsApp Resmi</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 dark:text-slate-400">
          <div>
            &copy; 2026 BroSlam.Tech. Seluruh Hak Cipta Dilindungi.
          </div>
          <div className="flex flex-wrap items-center gap-3 font-medium">
            <span className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors">Digital Super Platform</span>
            <span>•</span>
            <span className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors">Multi-Tenant Architecture</span>
            <span>•</span>
            <span className="hover:text-slate-700 dark:hover:text-slate-300 transition-colors">SAK ETAP Compliant</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
