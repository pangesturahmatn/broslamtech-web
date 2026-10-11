"use client";

import React from "react";
import { pricingTiers } from "../data/pricing-data";
import { Check, ArrowRight, Layers, HelpCircle } from "lucide-react";

interface PricingSectionProps {
  onOpenCatalog?: () => void;
}

export default function PricingSection({ onOpenCatalog }: PricingSectionProps) {
  return (
    <section
      id="harga"
      className="scroll-mt-20 sm:scroll-mt-24 py-10 sm:py-14 bg-slate-50/70 dark:bg-gradient-to-b dark:from-[#070B14] dark:via-[#0C1326] dark:to-[#070B14] bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] relative overflow-hidden border-b border-slate-200 dark:border-white/10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-1.5 mb-6 sm:mb-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug [text-wrap:balance]">
            Harga Sewa yang Sangat Ringan di Kantong UMKM
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-normal">
            Dibuat dengan sistem langganan bulanan yang lebih murah dari sebungkus rokok per hari, tapi memberi keuntungan &amp; kendali besar bagi bisnis bengkel Anda.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6 items-stretch mb-6">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-2xl flex flex-col justify-between transition-all duration-300 relative backdrop-blur-xl hover:-translate-y-1 ${
                tier.isPopular
                  ? "pt-8 pb-6 px-5 sm:px-6 bg-white dark:bg-slate-900 border-2 border-amber-500 dark:border-amber-400 shadow-xl shadow-slate-900/5 dark:shadow-none md:-translate-y-1"
                  : "p-5 sm:p-6 bg-slate-50 dark:bg-white/[0.04] hover:bg-white dark:hover:bg-white/[0.07] border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/25 shadow-sm hover:shadow-md"
              }`}
            >
              {/* Popular ribbon (Cleanly floating with zero overlap) */}
              {tier.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3.5 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[11px] font-black uppercase tracking-wider shadow-md border border-amber-300">
                  <span>Paling Diminati</span>
                </div>
              )}

              <div className="space-y-4">
                {/* Tier Badge */}
                <div className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                  {tier.tierBadge}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                    {tier.targetAudience}
                  </p>
                </div>

                {/* Price block */}
                <div className="py-3 border-y border-slate-200 dark:border-slate-800">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                      {tier.pricePerMonth}
                    </span>
                    <span className="text-xs text-slate-500 dark:text-slate-400 font-semibold">/ bln</span>
                  </div>
                  <div className="text-xs font-bold text-amber-600 dark:text-amber-400 mt-1">
                    {tier.priceDailyNote}
                  </div>
                </div>

                {/* Features checklist */}
                <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-200 pt-1">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 leading-snug">
                      <Check className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button & Read More Link */}
              <div className="pt-4 mt-4 border-t border-slate-200 dark:border-slate-800 space-y-2.5">
                <a
                  href={`https://wa.me/6281359433350?text=${encodeURIComponent(
                    `Halo Pak Tomo & Tim BroSlam.Tech, saya tertarik berlangganan paket: ${tier.name} (${tier.pricePerMonth}/bln). Mohon panduan aktivasi sistemnya.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-5 rounded-xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    tier.isPopular
                      ? "bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-md hover:shadow-lg active:scale-95"
                      : "bg-slate-900 hover:bg-slate-800 text-white dark:bg-white/10 dark:hover:bg-white/15 dark:text-white border border-slate-900 dark:border-white/15 active:scale-95"
                  }`}
                >
                  <span>Pilih Paket Ini</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href="#perbandingan"
                  className="w-full text-center text-[11px] text-slate-500 hover:text-amber-600 dark:text-slate-400 dark:hover:text-amber-400 font-medium block transition-colors"
                >
                  Pelajari modul paket ini &darr;
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Read More / Compare All 164 Modules Banner */}
        <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-sm mb-4">
          <div className="flex items-center gap-3 text-center sm:text-left">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-600 dark:text-amber-400 shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                Ingin Melihat Daftar Lengkap Semua 164 Modul &amp; 380 API?
              </h4>
              <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400">
                Bandingkan kapabilitas sistem dari kasir POS, mekanik pitstop, akuntansi SAK ETAP, hingga WhatsApp Gateway.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenCatalog ? onOpenCatalog : () => {
              const el = document.getElementById('solusi');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 text-xs font-bold transition-all shadow-xs flex items-center gap-2 cursor-pointer"
          >
            <span>Buka Katalog 164 Modul</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
