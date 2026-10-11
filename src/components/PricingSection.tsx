"use client";

import React from "react";
import { pricingTiers } from "../data/pricing-data";
import { Check, Star, ArrowRight, ShieldCheck, CreditCard, Sparkles } from "lucide-react";

export default function PricingSection() {
  return (
    <section id="harga" className="py-24 bg-slate-50 dark:bg-slate-900 relative overflow-hidden border-b border-slate-200 dark:border-slate-800 transition-colors">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black tracking-widest uppercase">
            <span>STRATEGI HARGA KHUSUS UMKM BENGKEL MOBIL</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Harga Sewa yang Sangat Ringan di Kantong UMKM
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Dibuat dengan sistem langganan bulanan yang lebih murah dari sebungkus rokok per hari, tapi memberi keuntungan &amp; kendali besar bagi bisnis bengkel Anda.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch mb-10">
          {pricingTiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all relative ${
                tier.isPopular
                  ? "bg-white dark:bg-slate-950 border-2 border-amber-400 shadow-xl shadow-amber-500/10 md:-translate-y-2"
                  : "bg-white dark:bg-slate-950/70 border border-slate-200 dark:border-slate-800 hover:border-slate-300 shadow-md"
              }`}
            >
              {/* Popular ribbon */}
              {tier.isPopular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-amber-500 to-yellow-500 text-slate-950 text-[11px] font-black uppercase tracking-wider flex items-center gap-1.5 shadow-md">
                  <Star className="w-3 h-3 fill-slate-950 text-slate-950" />
                  <span>PALING LARIS &amp; REKOMENDASI</span>
                </div>
              )}

              <div className="space-y-4">
                {/* Tier Badge */}
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  {tier.tierBadge}
                </div>

                <div>
                  <h3 className="text-xl font-black text-slate-900 dark:text-white">
                    {tier.name}
                  </h3>
                  <p className="text-xs text-slate-400 mt-1">
                    {tier.targetAudience}
                  </p>
                </div>

                {/* Price block */}
                <div className="py-2 border-y border-slate-800/80">
                  <div className="flex items-baseline gap-1.5">
                    <span className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                      {tier.pricePerMonth}
                    </span>
                    <span className="text-xs text-slate-400 font-semibold">/ bln</span>
                  </div>
                  <div className="text-xs font-bold text-amber-400 mt-0.5">
                    {tier.priceDailyNote}
                  </div>
                </div>

                {/* Features checklist */}
                <ul className="space-y-2.5 text-xs text-slate-700 dark:text-slate-300 pt-1">
                  {tier.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-2.5 leading-snug">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-800/80">
                <a
                  href={`https://wa.me/6281359433350?text=${encodeURIComponent(
                    `Halo Pak Tomo & Tim BroSlam.Tech, saya tertarik berlangganan paket: ${tier.name} (${tier.pricePerMonth}/bln). Mohon panduan aktivasi sistemnya.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 px-5 rounded-2xl text-xs font-black tracking-wide flex items-center justify-center gap-2 transition-all cursor-pointer ${
                    tier.isPopular
                      ? "bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 shadow-lg shadow-amber-500/25 active:scale-95"
                      : "bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700"
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
        <div className="p-4 rounded-2xl bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs text-slate-700 dark:text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left shadow-xs">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
            <span>
              <strong>Sinkronisasi Sistem:</strong> 3 paket komersial di atas selaras langsung dengan 4 tingkat lisensi teknis menu Developer (Bronze/Silver ➔ Starter, Gold ➔ Pro Growth, Diamond ➔ Enterprise/Full Suite).
            </span>
          </div>

          <div className="shrink-0 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-[11px] text-slate-800 dark:text-slate-300">
            <CreditCard className="w-3.5 h-3.5 text-blue-400" />
            <span>Metode Pembayaran Resmi: <strong>Transfer Bank BCA</strong> (Invoice diterbitkan setelah registrasi)</span>
          </div>
        </div>

      </div>
    </section>
  );
}
