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
    <section id="solusi" className="py-24 bg-slate-950 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-black tracking-widest uppercase">
            <Layers className="w-3.5 h-3.5" />
            <span>ARSITEKTUR LENGKAP KOPRA SCALE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight">
            10 Pilar Ekosistem Bengkel 360°
          </h2>
          <p className="text-sm md:text-base text-slate-400 leading-relaxed">
            Seluruh denyut nadi bengkel Anda terkoneksi secara harmonis. Dari kedatangan mobil di stall, pergerakan part di rak gudang, hingga laporan laba rugi di meja direksi.
          </p>
        </div>

        {/* Tab Pills Nav (10 Pillars) */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {pillarsData.map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setActiveTab(p.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer border ${
                activeTab === p.id
                  ? "bg-amber-400 text-slate-950 border-amber-400 font-black shadow-md shadow-amber-400/20 scale-105"
                  : "bg-slate-900/80 text-slate-400 hover:text-white border-slate-800 hover:border-slate-700"
              }`}
            >
              <span>${idx + 1}. ${p.tabLabel.replace(/^\d+\.\s*/, "")}</span>
            </button>
          ))}
        </div>

        {/* Active Pillar Card Showcase */}
        {currentPillar && (
          <div className="p-6 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 shadow-2xl backdrop-blur-xl animate-in fade-in duration-300">
            {/* Header Group */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 mb-8 border-b border-slate-800 gap-4">
              <div>
                <span className="text-[10px] font-black tracking-widest uppercase text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                  PILAR UTAMA SISTEM
                </span>
                <h3 className="text-xl sm:text-2xl font-black text-white mt-2">
                  {currentPillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1 max-w-2xl">
                  {currentPillar.desc}
                </p>
              </div>

              <button
                type="button"
                onClick={onOpenCatalogModal}
                className="shrink-0 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-amber-300 hover:text-amber-200 border border-amber-500/30 text-xs font-bold transition-all flex items-center gap-2 cursor-pointer self-start sm:self-center"
              >
                <Search className="w-3.5 h-3.5 text-amber-400" />
                <span>Buka Katalog 164 Modul</span>
              </button>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {currentPillar.features.map((feat, fIdx) => (
                <div
                  key={fIdx}
                  className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800/80 hover:border-amber-500/40 transition-all duration-200 flex flex-col justify-between group hover:-translate-y-1 hover:shadow-xl hover:shadow-amber-500/5"
                >
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                      <span className="text-[9.5px] uppercase font-bold text-slate-500">
                        Fitur #{fIdx + 1}
                      </span>
                    </div>
                    <h4 className="text-sm font-black text-white group-hover:text-amber-300 transition-colors">
                      {feat.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-3 border-t border-slate-850 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => onOpenFeatureModal(feat)}
                      className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-1.5 transition-colors cursor-pointer"
                    >
                      <span>🔍 Rincian &amp; Manfaat</span>
                      <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        )}

        {/* Global Catalog Banner Callout */}
        <div className="mt-12 p-6 rounded-2xl bg-gradient-to-r from-amber-500/10 via-slate-900 to-slate-900 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-sm sm:text-base font-black text-white">
                Mencari modul spesifik bengkel Anda?
              </h4>
              <p className="text-xs text-slate-400 mt-0.5">
                Katalog interaktif kami mencakup 164 modul operasional dan 380 API di 7 klaster divisi bengkel.
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onOpenCatalogModal}
            className="shrink-0 px-5 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
          >
            Buka Katalog Lengkap →
          </button>
        </div>

      </div>
    </section>
  );
}
