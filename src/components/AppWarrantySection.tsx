"use client";

import React from "react";
import { Sparkles, Video, AlertTriangle, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export default function AppWarrantySection() {
  const steps = [
    {
      page: "HALAMAN 1",
      badge: "COVER & VISI BESAR",
      title: "Puncak Akselerasi Profit Multi-Cabang",
      desc: "Menyatukan kekuatan Gunung Bromo & Slamet menjadi platform otomotif paling kokoh di Indonesia.",
      icon: Sparkles,
      color: "text-amber-400",
    },
    {
      page: "HALAMAN 2",
      badge: "FITUR AI & ENGINE OTOMATIS",
      title: "Smart AI Assistant & Diagnostic Engine",
      desc: "Prediksi rotasi kilometer mobil, rekomendasi template servis otomatis, dan audit anomali kasir seketika.",
      icon: Video,
      color: "text-blue-400",
    },
    {
      page: "HALAMAN 3",
      badge: "KERUWETAN TANPA SISTEM",
      title: "Menghentikan Kebocoran Finansial Manual",
      desc: "Mengatasi bon kertas tercecer, selisih stok sparepart fisik, manipulasi komisi, dan subkon bubut tak tertagih.",
      icon: AlertTriangle,
      color: "text-rose-400",
    },
    {
      page: "HALAMAN 4",
      badge: "SOLUSI APLIKASI UTUH",
      title: "164 Modul Ekosistem Bengkel 360°",
      desc: "Dari check-in baret mobil SA, monitor TV stall pitstop, kasir POS SAK ETAP, hingga WhatsApp reminder otomatis.",
      icon: CheckCircle2,
      color: "text-emerald-400",
    },
    {
      page: "HALAMAN 5",
      badge: "JAMINAN WARRANTY RESMI",
      title: "Garansi Sistem, SLA 99.9% & Backup Cloud",
      desc: "Jaminan keamanan isolasi multi-tenant, zero kebocoran data antar-bengkel, dan pendampingan migrasi dari Excel lama.",
      icon: ShieldCheck,
      color: "text-amber-400",
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white dark:bg-gradient-to-b dark:from-[#070B14] dark:via-[#0B1224] dark:to-[#070B14] relative overflow-hidden border-t border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-900 border border-slate-800 text-amber-400 text-xs font-black tracking-widest uppercase">
            <span>ALUR PRESENTASI &amp; JAMINAN SISTEM</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            5 Tahap Transformasi Menuju Bengkel Modern
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Struktur roadmap komprehensif yang dirancang untuk memastikan investasi sistem digital Anda memberikan imbal hasil (ROI) maksimal sejak bulan pertama.
          </p>
        </div>

        {/* 5-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-3 mb-8">
          {steps.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl bg-slate-50 dark:bg-white/[0.04] hover:bg-white dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/10 hover:border-amber-400 p-5 flex flex-col justify-between hover:-translate-y-1.5 transition-all duration-300 shadow-sm hover:shadow-xl backdrop-blur-md"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-wider text-amber-400">
                      {s.page}
                    </span>
                    <Icon className={`w-4 h-4 ${s.color}`} />
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase text-slate-500 tracking-wider block">
                      {s.badge}
                    </span>
                    <h4 className="text-xs font-bold text-slate-900 dark:text-white mt-1 leading-snug">
                      {s.title}
                    </h4>
                  </div>
                  <p className="text-[11px] text-slate-600 dark:text-slate-400 leading-relaxed">
                    {s.desc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 dark:border-white/10 mt-4 flex items-center justify-between text-[10px] text-slate-500 dark:text-slate-400 font-mono">
                  <span>Tahap 0{idx + 1}</span>
                  <span className="flex items-center gap-1 text-emerald-400 font-bold"><CheckCircle2 className="w-3 h-3 text-emerald-400" /> Standard</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
