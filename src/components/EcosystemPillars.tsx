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
    <section id="solusi" className="py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-black tracking-widest uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>ARSITEKTUR LENGKAP KOPRA SCALE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
            10 Pilar Ekosistem Bengkel 360°
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed max-w-2xl mx-auto">
            Sistem modular multi-cabang terintegrasi penuh: dari alur check-in baret mobil SA, monitor TV stall pitstop, kasir POS SAK ETAP, hingga WhatsApp reminder otomatis.
          </p>
        </div>

        {/* Tabs Bar (Scrollable on mobile) */}
        <div className="flex overflow-x-auto gap-2 pb-4 mb-8 no-scrollbar">
          {pillarsData.map((pillar) => {
            const isActive = pillar.id === activeTab;
            return (
              <button
                key={pillar.id}
                onClick={() => setActiveTab(pillar.id)}
                className={`shrink-0 px-4 py-2.5 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 border ${
                  isActive
                    ? "bg-[#0F172A] text-white border-[#0F172A] shadow-md scale-102"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100 hover:border-slate-300"
                }`}
              >
                <span>{pillar.tabLabel}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-md font-mono ${
                  isActive ? "bg-amber-400 text-black font-black" : "bg-slate-200 text-slate-600"
                }`}>
                  {pillar.features.length} Modul
                </span>
              </button>
            );
          })}
        </div>

        {/* Current Pillar Content Display */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-black text-slate-900">
                  {currentPillar.title}
                </h3>
              </div>
              <p className="text-xs text-slate-600 mt-1 max-w-3xl leading-relaxed">
                {currentPillar.desc}
              </p>
            </div>

            <button
              type="button"
              onClick={onOpenCatalogModal}
              className="shrink-0 px-4 py-2 rounded-xl bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-bold text-xs flex items-center gap-1.5 shadow-xs cursor-pointer"
            >
              <Search className="w-3.5 h-3.5" />
              <span>Cari di 164 Modul</span>
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-6">
            {currentPillar.features.map((feat, idx) => (
              <div
                key={idx}
                onClick={() => onOpenFeatureModal(feat)}
                className="bg-white hover:bg-slate-50 border border-slate-200 hover:border-amber-400 p-4.5 rounded-2xl shadow-xs transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <div className="flex items-start justify-between">
                    <span className="text-xs font-black text-slate-900 group-hover:text-blue-700 transition-colors">
                      {feat.title}
                    </span>
                    <span className="text-[10px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded-md font-mono font-bold border border-blue-100">
                      Modul
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {feat.desc}
                  </p>
                </div>

                <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold text-amber-600 group-hover:text-amber-700">
                  <span>Lihat Rincian Fitur</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
