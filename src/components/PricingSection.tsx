"use client";

import React from "react";
import { pricingTiers } from "../data/pricing-data";
import { Check, Star, ArrowRight, ShieldCheck, CreditCard, Sparkles, Zap } from "lucide-react";

export default function PricingSection() {
  return (
    <section
      id="harga"
      className="py-24 bg-white dark:bg-gradient-to-b dark:from-[#070B14] dark:via-[#0C1326] dark:to-[#070B14] relative overflow-hidden border-b border-slate-200 dark:border-white/10 transition-colors duration-300"
    >
      {/* Background ambient lighting in dark mode */}
      <div className="hidden dark:block absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/30 text-amber-600 dark:text-amber-300 text-xs font-bold tracking-widest uppercase">
            <Zap className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
            <span>STRATEGI HARGA KHUSUS UMKM BENGKEL MOBIL</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Harga Sewa yang Sangat Ringan di Kantong UMKM
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Dibuat dengan sistem langganan bulanan yang lebih murah dari sebungkus rokok per hari, tapi memberi keuntungan &amp; kendali besar bagi bisnis bengkel Anda.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-12">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 relative backdrop-blur-xl hover:-translate-y-2 ${
                tier.isPopular
                  ? "bg-white dark:bg-gradient-to-b dark:from-slate-900/95 dark:via-slate-900/80 dark:to-slate-950/95 border-2 border-amber-400 shadow-xl shadow-amber-500/10 dark:shadow-[0_15px_40px_rgba(245,158,11,0.25)] md:-translate-y-2 hover:shadow-2xl"
                  : "bg-slate-50 dark:bg-white/[0.04] hover:bg-white dark:hover:bg-white/[0.07] border border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/25 shadow-sm hover:shadow-xl"
              }`}
            >
              {/* Popular ribbon */}
              {tier.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 via-yellow-400 to-amber-500 text-slate-950 text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                  <Star className="w-3 h-3 fill-slate-950 text-slate-950" />
                  <span>PALING LARIS &amp; REKOMENDASI</span>
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
                <div className="py-3 border-y border-slate-200 dark:border-white/10">
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
                <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-200 pt-2">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 leading-snug">
                      <Check className="w-4 h-4 text-emerald-500 dark:text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-200 dark:border-white/10">
                <a
                  href={`https://wa.me/6281359433350?text=${encodeURIComponent(
                    `Halo Pak Tomo & Tim BroSlam.Tech, saya tertarik berlangganan paket: ${tier.name} (${tier.pricePerMonth}/bln). Mohon panduan aktivasi sistemnya.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3.5 px-5 rounded-2xl text-xs font-bold tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    tier.isPopular
                      ? "bg-gradient-to-r from-amber-400 via-amber-300 to-yellow-400 hover:from-amber-300 hover:to-yellow-300 text-slate-950 shadow-md hover:shadow-lg active:scale-95"
                      : "bg-slate-900 hover:bg-slate-800 text-white dark:bg-white/10 dark:hover:bg-white/15 dark:text-white border border-slate-900 dark:border-white/15"
                  }`}
                >
                  <span>Pilih Paket Ini</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          ))}
        </div>

        {/* Sync Info Note */}
        <div className="p-4 rounded-2xl bg-slate-50 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-xs text-slate-700 dark:text-slate-300 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left shadow-xs backdrop-blur-md">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500 dark:text-amber-400 shrink-0" />
            <span>
              <strong>Sinkronisasi Sistem:</strong> 3 paket komersial di atas selaras langsung dengan 4 tingkat lisensi teknis menu Developer (Bronze/Silver &rarr; Starter, Gold &rarr; Pro Growth, Diamond &rarr; Enterprise Suite).
            </span>
          </div>

          <div className="shrink-0 flex items-center gap-2 px-3.5 py-1.5 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-[11px] text-slate-700 dark:text-slate-300">
            <CreditCard className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>Metode Pembayaran: <strong>Transfer Bank BCA</strong></span>
          </div>
        </div>

      </div>
    </section>
  );
}
