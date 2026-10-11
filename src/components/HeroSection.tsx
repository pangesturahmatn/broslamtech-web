"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ArrowDown, ShieldCheck, Lock, ArrowRight, MessageSquare, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onOpenConsultation?: () => void;
  onOpenCatalog?: () => void;
}

export default function HeroSection({ onOpenConsultation, onOpenCatalog }: HeroSectionProps) {
  const [companyId, setCompanyId] = useState("");
  const [userId, setUserId] = useState("");

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to SaaS tenant login
    const targetUrl = companyId.trim()
      ? `https://app.broslamtech.com/login?tenant=${encodeURIComponent(companyId.trim())}`
      : "https://app.broslamtech.com/login";
    window.open(targetUrl, "_blank");
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex items-center text-white overflow-hidden">
      {/* Real Modern Workshop Hero Background (Bright, High-Visibility, Not Muddy Black) */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/modern_workshop_hero.jpg"
          alt="Modern Workshop Hero"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Crisp Gradient Overlay: allows the bright workshop lights & cars to shine through */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/55 via-slate-950/75 to-slate-950/95"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Clean Kopra Headline & Narrative */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 text-xs font-bold tracking-wider uppercase backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-amber-400 shrink-0" /><span>SATU SENTUHAN JARI, SELESAI DALAM HITUNGAN DETIK</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight leading-[1.2] drop-shadow-[0_4px_18px_rgba(0,0,0,0.6)]">
              Aplikasi Digital Super Platform{" "}
              <span className="text-[#FFB703]">Untuk Bengkel</span>{" "}
              by BroSlam.Tech
            </h1>

            {/* Subtitle */}
            <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed max-w-2xl drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]">
              Satu sentuhan jari, selesai dalam hitungan detik. Kendalikan usaha anda, lindungi modal sparepart FIFO murni, pantau kinerja mekanik, hingga laporan keuangan tanpa pusing rekap manual, bisnis lancar tanpa waswas.
            </p>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="px-6 py-3 rounded-full bg-[#F7941D] hover:bg-[#FFA726] text-black font-bold text-xs sm:text-sm tracking-wide shadow-[0_4px_16px_rgba(247,148,29,0.4)] transition-all cursor-pointer active:scale-95 border border-[#FFB703] flex items-center gap-2"
              >
                <span>Konsultasi &amp; Coba Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={onOpenCatalog}
                className="px-6 py-3 rounded-full bg-slate-900/80 hover:bg-slate-800 text-white border border-white/30 font-semibold text-xs sm:text-sm transition-all shadow-md flex items-center gap-2 cursor-pointer backdrop-blur-md"
              >
                <span>Lihat 164 Modul Sistem</span>
                <span className="px-2 py-0.5 rounded-full bg-amber-400 text-black text-[10px] font-black">
                  380 API
                </span>
              </button>
            </div>

            {/* Scroll Indicator */}
            <a
              href="#solusi"
              className="inline-flex items-center gap-2 text-xs font-semibold text-white/80 hover:text-amber-300 transition-colors pt-6"
            >
              <span>Scroll for more</span>
              <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
            </a>
          </div>

          {/* Right Column: Crisp White Floating Login Gate Card (Exact Kopra Mandiri Style) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="w-full max-w-[390px] bg-white rounded-2xl p-7 shadow-[0_20px_50px_rgba(0,0,0,0.45)] border border-white/20 text-slate-900">
              <h3 className="text-xl font-extrabold text-slate-900 mb-5 tracking-tight">
                Welcome to BroSlam.Tech
              </h3>

              <form onSubmit={handleLoginSubmit} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    Company ID
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: BENGKEL-01"
                    value={companyId}
                    onChange={(e) => setCompanyId(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#002D62] focus:ring-2 focus:ring-[#002D62]/15 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1.5">
                    User ID
                  </label>
                  <input
                    type="text"
                    placeholder="Contoh: owner@bengkel.com"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-white border border-slate-300 rounded-lg text-xs font-medium text-slate-900 placeholder-slate-400 focus:outline-none focus:border-[#002D62] focus:ring-2 focus:ring-[#002D62]/15 transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 mt-2 bg-[#0F172A] hover:bg-[#1E293B] text-white font-bold text-xs rounded-lg transition-all shadow-md cursor-pointer flex items-center justify-center gap-1.5"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </form>

              <div className="text-center mt-3.5">
                <a
                  href="https://wa.me/6281359433350?text=Halo%20Tim%20BroSlam.Tech,%20saya%20butuh%20bantuan%20pemulihan%20akun%20atau%20pendaftaran%20bengkel%20baru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] text-slate-500 hover:text-blue-600 transition-colors"
                >
                  Need to recover your account? <strong className="text-blue-600 underline">Click Here</strong>
                </a>
              </div>

              {/* Security certification */}
              <div className="mt-5 pt-3.5 border-t border-slate-200 flex items-center justify-center gap-1.5 text-[11px] text-slate-500 font-medium">
                <Lock className="w-3 h-3 text-sky-600" />
                <span>Security certified by <strong className="text-sky-600">digicert</strong> • 256-Bit SSL</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Green WhatsApp Button (Bottom Right) */}
      <a
        href="https://wa.me/6281359433350?text=Halo%20BroSlam.Tech,%20saya%20tertarik%20konsultasi%20aplikasi%20bengkel%20mobil"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white text-xs font-bold shadow-[0_6px_20px_rgba(37,211,102,0.45)] border border-white/25 flex items-center gap-2 transition-all hover:-translate-y-0.5 cursor-pointer"
      >
        <MessageSquare className="w-4 h-4 fill-white" />
        <span>Chat WhatsApp</span>
      </a>

    </section>
  );
}
