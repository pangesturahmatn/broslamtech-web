"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, Zap, Server, PhoneCall } from "lucide-react";

interface HeroSectionProps {
  onOpenConsultation?: () => void;
  onOpenCatalog?: () => void;
}

export default function HeroSection({ onOpenConsultation, onOpenCatalog }: HeroSectionProps) {
  const [bengkelName, setBengkelName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [waNumber, setWaNumber] = useState("");
  const [branchCount, setBranchCount] = useState("1");

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Halo Pak Tomo & Tim BroSlam.Tech, saya tertarik konsultasi Super Platform Bengkel.

*Nama Bengkel:* ${bengkelName || "-"}
*Owner:* ${ownerName || "-"}
*No WA:* ${waNumber || "-"}
*Jumlah Cabang:* ${branchCount} Cabang`
    );
    window.open(`https://wa.me/6281359433350?text=${text}`, "_blank");
  };

  return (
    <section className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center bg-slate-950">
      {/* Background Hero Image with Deep Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/modern_workshop_hero.jpg"
          alt="Modern Workshop Hero"
          fill
          className="object-cover object-center opacity-25 filter blur-[1px]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/90 to-slate-950"></div>
        {/* Luxury Glow radial circles */}
        <div className="absolute top-1/4 left-1/4 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Narrative & Proof Badges */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black tracking-widest uppercase shadow-inner">
              <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "6s" }} />
              <span>SUPER PLATFORM DIGITAL BENGKEL MOBIL MULTI-CABANG</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12]">
              Puncak Akselerasi <span className="bg-gradient-to-r from-amber-400 via-amber-200 to-yellow-400 bg-clip-text text-transparent">Profit &amp; Kendali Mutlak</span> Bengkel Mobil Anda.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
              Sinergi ketangguhan <strong>Gunung Bromo &amp; Gunung Slamet</strong> untuk ekosistem otomotif modern Indonesia. 
              Kendalikan 1 hingga 50 cabang dalam satu genggaman: HPP FIFO presisi, integrasi WhatsApp otomatis, pantau mekanik real-time, dan akuntansi SAK ETAP standar perbankan.
            </p>

            {/* Action buttons row */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                type="button"
                onClick={onOpenConsultation}
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-sm tracking-wide shadow-xl shadow-amber-500/25 flex items-center gap-2.5 transition-all cursor-pointer active:scale-95 group"
              >
                <span>Konsultasi &amp; Coba Demo</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={onOpenCatalog}
                className="px-6 py-3.5 rounded-2xl bg-slate-900/80 hover:bg-slate-850 text-slate-200 hover:text-white border border-slate-700/80 font-bold text-sm tracking-wide transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Lihat 164 Modul Sistem</span>
                <span className="px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-300 text-[10px] font-black border border-amber-500/30">
                  380 API
                </span>
              </button>
            </div>

            {/* Key Value Checks */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 text-xs font-semibold text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Anti-Bocor Suku Cadang FIFO</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Tanpa Biaya Vendor WA Gateway</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                <span>Bantuan Onboarding &amp; Data Excel</span>
              </div>
            </div>
          </div>

          {/* Right Column: Instant Consultation Card (Kopra Style Form) */}
          <div className="lg:col-span-5">
            <div className="relative p-6 sm:p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-2xl backdrop-blur-xl space-y-5">
              <div className="border-b border-slate-800 pb-4">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                    VIP DEMO ACCESS
                  </span>
                  <span className="text-xs text-emerald-400 font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    Online
                  </span>
                </div>
                <h3 className="text-lg font-black text-white mt-2">Jadwalkan Live Demo BroSlam.Tech</h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Simulasikan langsung arsitektur 10 pilar pada operasional bengkel Anda.
                </p>
              </div>

              <form onSubmit={handleQuickSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Nama Bengkel Mobil
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Maju Motor Auto Care"
                    value={bengkelName}
                    onChange={(e) => setBengkelName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                    Nama Pemilik / Direktur
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Nama Anda"
                    value={ownerName}
                    onChange={(e) => setOwnerName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400 transition-colors"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                      No. WhatsApp Aktif
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="0812xxxxxxx"
                      value={waNumber}
                      onChange={(e) => setWaNumber(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-amber-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-1">
                      Jumlah Cabang
                    </label>
                    <select
                      value={branchCount}
                      onChange={(e) => setBranchCount(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950/80 border border-slate-700/80 text-white text-xs focus:outline-none focus:border-amber-400 transition-colors cursor-pointer"
                    >
                      <option value="1">1 Cabang Tunggal</option>
                      <option value="2-3">2 - 3 Cabang</option>
                      <option value="4-10">4 - 10 Cabang</option>
                      <option value=">10">Lebih dari 10 Cabang</option>
                    </select>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-xs uppercase tracking-wider shadow-lg shadow-amber-500/20 transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Kirim &amp; Hubungi Pak Tomo</span>
                </button>
              </form>

              <div className="pt-2 text-center text-[10.5px] text-slate-500 font-medium">
                🔒 Data rahasia terlindungi • Garansi implementasi tanpa jeda operasional
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Metrics Bar */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl md:text-3xl font-black text-amber-400">164 Modul</div>
            <div className="text-xs text-slate-400 font-semibold mt-1">Ekosistem Terintegrasi Penuh</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl md:text-3xl font-black text-white">380 Endpoint</div>
            <div className="text-xs text-slate-400 font-semibold mt-1">REST API Arsitektur Mandiri</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl md:text-3xl font-black text-emerald-400">99.9% Uptime</div>
            <div className="text-xs text-slate-400 font-semibold mt-1">Enterprise Cloud &amp; Multi-Tenant</div>
          </div>
          <div className="p-4 rounded-2xl bg-slate-900/40 border border-slate-800/60">
            <div className="text-2xl md:text-3xl font-black text-amber-400">0 Bocor Modal</div>
            <div className="text-xs text-slate-400 font-semibold mt-1">Proteksi Rumus HPP FIFO Murni</div>
          </div>
        </div>

      </div>
    </section>
  );
}
