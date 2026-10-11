"use client";

import React, { useState } from "react";
import { pillarsData, PillarItem, PillarFeature } from "../data/pillars-data";
import { Sparkles, Layers, Search, ArrowRight, ShieldCheck, CheckCircle } from "lucide-react";

interface EcosystemPillarsProps {
  onOpenFeatureModal: (feature: PillarFeature) => void;
  onOpenCatalogModal: () => void;
}

export default function EcosystemPillars({
  onOpenFeatureModal,
  onOpenCatalogModal,
}: EcosystemPillarsProps) {
  const [activeTab, setActiveTab] = useState(pillarsData[0]?.id || "pillar-workshop");
  const currentPillar = pillarsData.find((p) => p.id === activeTab) || pillarsData[0];

  return (
    <section id="solusi" className="py-8 sm:py-12 bg-white dark:bg-gradient-to-b dark:from-[#070B14] dark:via-[#0A1020] dark:to-[#070B14] border-b border-slate-200 dark:border-white/10 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3.5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-700 dark:text-blue-400 text-xs font-bold tracking-widest uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>ARSITEKTUR LENGKAP KOPRA SCALE</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            10 Pilar Ekosistem Bengkel 360°
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-normal max-w-2xl mx-auto">
            Sistem modular multi-cabang terintegrasi penuh: dari alur check-in baret mobil SA, monitor TV stall pitstop, kasir POS SAK ETAP, hingga WhatsApp reminder otomatis.
          </p>
        </div>

        {/* Tabs Bar (Scrollable on mobile) */}
        <div className="flex overflow-x-auto gap-2.5 pb-4 mb-8 no-scrollbar">
          {pillarsData.map((pillar) => {
            const isActive = pillar.id === activeTab;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`shrink-0 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-2 border ${
                  isActive
                    ? "bg-amber-400 text-slate-950 border-amber-400 shadow-md shadow-amber-400/20 scale-102 font-extrabold"
                    : "bg-slate-50 dark:bg-white/[0.04] text-slate-700 dark:text-slate-300 border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/10"
                }`}
              >
                <span>{pillar.tabLabel}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-md font-mono font-bold ${
                  isActive
                    ? "bg-slate-950 text-amber-300"
                    : "bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300"
                }`}>
                  {pillar.features.length} Modul
                </span>
              </button>
            );
          })}
        </div>

        {/* Current Pillar Content Display */}
        <div className="bg-slate-50 dark:bg-slate-900/60 dark:backdrop-blur-xl border border-slate-200 dark:border-white/10 rounded-3xl p-6 sm:p-8 shadow-sm dark:shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200 dark:border-white/10">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {currentPillar.title}
                </h3>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 max-w-3xl leading-relaxed">
                {currentPillar.desc}
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenCatalogModal}
              className="shrink-0 px-4 py-2 rounded-xl bg-white dark:bg-white/10 hover:bg-slate-100 dark:hover:bg-white/15 border border-slate-300 dark:border-white/15 text-slate-800 dark:text-white font-bold text-xs flex items-center gap-2 shadow-xs cursor-pointer transition-all"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Cari di 164 Modul</span>
            </button>
          </div>

          {/* Features Grid with Hover Transitions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4.5 pt-6">
            {currentPillar.features.map((feat, idx) => (
              <div
                key={idx}
                onClick={() => onOpenFeatureModal(feat)}
                className="bg-white dark:bg-white/[0.04] hover:bg-slate-50 dark:hover:bg-white/[0.08] border border-slate-200 dark:border-white/10 hover:border-amber-400 dark:hover:border-amber-400/50 p-5 rounded-2xl shadow-xs hover:shadow-lg dark:hover:shadow-[0_12px_30px_rgba(245,158,11,0.12)] hover:-translate-y-1.5 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-bold text-slate-900 dark:text-white group-hover:text-amber-500 dark:group-hover:text-amber-300 transition-colors">
                      {feat.title}
                    </span>
                    <span className="text-[10px] text-blue-700 dark:text-blue-300 bg-blue-50 dark:bg-blue-500/10 px-2 py-0.5 rounded-md font-mono font-bold border border-blue-100 dark:border-blue-500/20">
                      Modul
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 dark:border-white/5 flex items-center justify-between text-[11px] font-bold text-amber-600 dark:text-amber-400 group-hover:text-amber-500">
                  <span>Lihat Rincian Fitur</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
