"use client";

import React from "react";
import { PillarFeature } from "../data/pillars-data";
import { X, ExternalLink, ShieldCheck, CheckCircle2 } from "lucide-react";

interface ModuleDetailModalProps {
  feature: PillarFeature | null;
  onClose: () => void;
}

export default function ModuleDetailModal({ feature, onClose }: ModuleDetailModalProps) {
  if (!feature) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5 text-slate-100">
        
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
              {feature.modalCategory || "RINCIAN MODUL SISTEM"}
            </span>
            <h3 className="text-xl font-black text-white mt-2 leading-tight">
              {feature.modalTitle || feature.title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Function Box */}
        <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 space-y-1.5">
          <h5 className="text-[11px] font-black uppercase tracking-wider text-slate-400">
            Fungsi &amp; Fitur Kunci Sistem:
          </h5>
          <p className="text-xs text-slate-300 leading-relaxed">
            {feature.modalFunction || feature.desc}
          </p>
        </div>

        {/* Benefit Box */}
        {feature.modalBenefit && (
          <div className="p-4 rounded-2xl bg-amber-500/10 border border-amber-500/30 space-y-1.5 text-amber-200">
            <h5 className="text-[11px] font-black uppercase tracking-wider text-amber-300 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
              <span>Keunggulan Finansial &amp; Operasional Bagi Owner:</span>
            </h5>
            <p className="text-xs leading-relaxed text-slate-200">
              {feature.modalBenefit}
            </p>
          </div>
        )}

        {/* Actions */}
        <div className="pt-2 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300 cursor-pointer"
          >
            Tutup
          </button>
          <a
            href={`https://wa.me/6281359433350?text=${encodeURIComponent(
              `Halo Pak Tomo, saya ingin tanya lebih lanjut tentang modul: ${feature.modalTitle || feature.title}`
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 text-xs font-black flex items-center gap-1.5 cursor-pointer shadow-md"
          >
            <span>Tanyakan via WA</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>
    </div>
  );
}
