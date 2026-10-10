"use client";

import React, { useState, useMemo } from "react";
import { allModulesData, ModuleItem } from "../data/modules-catalog";
import { X, Search, Layers, ExternalLink } from "lucide-react";

interface CatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CatalogModal({ isOpen, onClose }: CatalogModalProps) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCluster, setSelectedCluster] = useState<string>("all");

  const clusters = [
    { id: "all", label: "Semua Klaster" },
    { id: "A", label: "1. Servis & SPK (28)" },
    { id: "B", label: "2. Gudang & Part (24)" },
    { id: "C", label: "3. Kasir & Akuntansi (26)" },
    { id: "D", label: "4. SDM & Payroll (18)" },
    { id: "E", label: "5. CRM & Retensi (22)" },
    { id: "F", label: "6. Armada & GA (16)" },
    { id: "G", label: "7. Multi-Tenant (26)" },
  ];

  const filteredModules = useMemo(() => {
    return allModulesData.filter((m) => {
      const descriptionText = (m.desc || [m.func, m.feature, m.benefit].filter(Boolean).join(" ")).toLowerCase();
      const matchSearch =
        m.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        descriptionText.includes(searchTerm.toLowerCase()) ||
        m.category.toLowerCase().includes(searchTerm.toLowerCase());

      const matchCluster =
        selectedCluster === "all" ||
        m.category.toUpperCase().startsWith(selectedCluster.toUpperCase());

      return matchSearch && matchCluster;
    });
  }, [searchTerm, selectedCluster]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-slate-900 border border-slate-700/80 rounded-3xl shadow-2xl flex flex-col overflow-hidden text-slate-100">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-800 flex items-start justify-between gap-4">
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
              ARSITEKTUR LENGKAP SISTEM
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-white mt-1.5">
              Katalog Interaktif 164 Modul &amp; 380 API BroSlam.Tech ERP
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Cari berdasarkan nama fitur, alur kerja bengkel, atau divisi yang Anda butuhkan.
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter Bar & Search */}
        <div className="p-4 sm:p-6 bg-slate-950/60 border-b border-slate-800 space-y-3.5">
          {/* Clusters pills */}
          <div className="flex flex-wrap gap-1.5">
            {clusters.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCluster(c.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedCluster === c.id
                    ? "bg-amber-400 text-slate-950 font-black shadow-xs"
                    : "bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-750"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>

          {/* Search box */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Ketik kata kunci (contoh: WhatsApp, FIFO, Stall, Komisi, QRIS, Tools Man)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400 transition-colors"
            />
          </div>
        </div>

        {/* Table Content (Scrollable) */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-slate-800 text-[11px] font-black uppercase text-slate-400 tracking-wider">
                <th className="py-2.5 px-3 w-12">No</th>
                <th className="py-2.5 px-3 w-44">Kategori Divisi</th>
                <th className="py-2.5 px-3 w-56">Nama Modul</th>
                <th className="py-2.5 px-3">Fungsi Utama &amp; Nilai Bisnis Bagi Owner</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/60 text-slate-300">
              {filteredModules.length > 0 ? (
                filteredModules.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-800/40 transition-colors">
                    <td className="py-3 px-3 font-mono text-slate-500">{idx + 1}</td>
                    <td className="py-3 px-3 font-semibold text-amber-300/90">{item.category}</td>
                    <td className="py-3 px-3 font-bold text-white">{item.name}</td>
                    <td className="py-3 px-3 text-slate-300 leading-relaxed">
                      {item.desc || (
                        <span>
                          <strong className="text-slate-100">{item.func}</strong>{" "}
                          {item.benefit && <span className="text-amber-200/90">— {item.benefit}</span>}
                        </span>
                      )}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="py-12 text-center text-slate-500 font-medium">
                    Tidak ada modul yang cocok dengan kata kunci &quot;{searchTerm}&quot;
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-slate-800 bg-slate-950 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-semibold">
            Menampilkan <strong className="text-amber-400">{filteredModules.length}</strong> dari {allModulesData.length} modul
          </span>

          <div className="flex gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300 cursor-pointer"
            >
              Tutup
            </button>
            <a
              href="https://wa.me/6281359433350?text=Halo%20Pak%20Tomo,%20saya%20tertarik%20konsultasi%20modul%20BroSlam.Tech"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-black text-white flex items-center gap-1.5 cursor-pointer shadow-md"
            >
              <span>Konsultasi via WA</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
