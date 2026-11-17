"use client";

import React, { useState } from "react";
import {
  CheckCircle2,
  XCircle,
  Download,
  FileText,
  Sparkles,
  ShieldCheck,
  Building2,
  Wrench,
  Boxes,
  MessageSquare,
  BadgeDollarSign,
  Users,
  ArrowRight,
  Layers,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import {
  packageComparisonCategories,
  MatrixCategory,
} from "../data/package-comparison-data";

interface PackageComparisonTableProps {
  onOpenCatalog?: () => void;
}

export default function PackageComparisonTable({
  onOpenCatalog,
}: PackageComparisonTableProps) {
  // All categories open by default
  const [openCategories, setOpenCategories] = useState<Record<string, boolean>>({
    "1. Kapasitas & Lisensi Bengkel": true,
    "2. Operasional Servis & Kasir POS": true,
    "3. Gudang, Sparepart & Pembelian": true,
    "4. CRM, Marketing & WhatsApp Gateway": true,
    "5. Keuangan & Akuntansi (SAK ETAP)": true,
    "6. SDM, Payroll & Komisi Karyawan": true,
    "7. Holding, Multi-Cabang & Keamanan SaaS": true,
  });

  const toggleCategory = (catName: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [catName]: !prev[catName],
    }));
  };

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case "Building2":
        return <Building2 className="w-4 h-4 text-blue-500" />;
      case "Wrench":
        return <Wrench className="w-4 h-4 text-amber-500" />;
      case "Boxes":
        return <Boxes className="w-4 h-4 text-emerald-500" />;
      case "MessageSquare":
        return <MessageSquare className="w-4 h-4 text-green-500" />;
      case "BadgeDollarSign":
        return <BadgeDollarSign className="w-4 h-4 text-yellow-500" />;
      case "Users":
        return <Users className="w-4 h-4 text-indigo-500" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-4 h-4 text-teal-500" />;
      default:
        return <Layers className="w-4 h-4 text-slate-500" />;
    }
  };

  const renderValue = (val: string | boolean, isPopular: boolean = false) => {
    if (typeof val === "boolean") {
      if (val) {
        return (
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold ${
              isPopular
                ? "bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30"
                : "bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/30"
            }`}
          >
            <CheckCircle2
              className={`w-3.5 h-3.5 ${
                isPopular
                  ? "text-amber-600 dark:text-amber-400"
                  : "text-emerald-600 dark:text-emerald-400"
              }`}
            />
            <span>Termasuk</span>
          </span>
        );
      }
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800/80 text-slate-400 dark:text-slate-500 text-xs font-medium border border-slate-200 dark:border-slate-800">
          <XCircle className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500" />
          <span>Tidak Ada</span>
        </span>
      );
    }

    return (
      <span
        className={`inline-block px-2.5 py-1 rounded-lg text-xs font-semibold leading-tight text-center ${
          isPopular
            ? "bg-amber-50 dark:bg-amber-500/10 text-slate-900 dark:text-amber-200 border border-amber-200 dark:border-amber-500/20"
            : "bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 border border-slate-200 dark:border-slate-700"
        }`}
      >
        {val}
      </span>
    );
  };

  return (
    <div id="matriks-paket" className="scroll-mt-24 pt-8 sm:pt-12">
      {/* Table Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-2 mb-6 sm:mb-8 px-4">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 dark:bg-amber-500/15 border border-amber-500/25 text-amber-700 dark:text-amber-300 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Matriks Perbandingan Fitur Resmi</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Bandingkan Fitur Starter, Pro Growth &amp; Enterprise
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-normal">
          Detail lengkap cakupan modul, batasan pengguna, dan kecanggihan sistem di setiap tingkatan paket.
        </p>

        {/* Download Buttons Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
          <a
            href="/Brosur_Matriks_Perbandingan_Paket_BroSlamTech.pdf"
            download="Brosur_Matriks_Perbandingan_Paket_BroSlamTech.pdf"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-900 hover:bg-slate-800 text-white dark:bg-white dark:hover:bg-slate-100 dark:text-slate-950 text-xs font-bold shadow-sm transition-all hover:scale-102 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Unduh Brosur PDF Resmi</span>
          </a>

          <a
            href="/Brosur_Matriks_Perbandingan_Paket_BroSlamTech.docx"
            download="Brosur_Matriks_Perbandingan_Paket_BroSlamTech.docx"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 border border-slate-300 dark:border-slate-700 text-xs font-bold transition-all cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>Unduh Format Word (DOCX)</span>
          </a>

          <button
            type="button"
            onClick={
              onOpenCatalog
                ? onOpenCatalog
                : () => {
                    const el = document.getElementById("solusi");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }
            }
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/30 text-xs font-bold transition-all cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
            <span>Buka Katalog 164 Modul</span>
          </button>
        </div>
      </div>

      {/* Main Responsive Table */}
      <div className="overflow-x-auto rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-md">
        <table className="w-full text-left border-collapse min-w-[720px]">
          {/* Header Row */}
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 sticky top-0 z-10">
              <th className="py-4 px-5 text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider w-[40%]">
                Fitur &amp; Kemampuan Sistem
              </th>

              {/* Starter */}
              <th className="py-4 px-3 text-center w-[20%] border-l border-slate-200 dark:border-slate-800">
                <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                  Tier: BRONZE
                </div>
                <div className="text-sm font-extrabold text-slate-900 dark:text-white mt-0.5">
                  Starter
                </div>
                <div className="text-xs font-bold text-slate-600 dark:text-slate-300">
                  Rp 399.000 <span className="text-[10px] font-normal text-slate-500">/bln</span>
                </div>
              </th>

              {/* Pro Growth (Popular Highlight) */}
              <th className="py-4 px-3 text-center w-[20%] bg-amber-500/10 dark:bg-amber-500/15 border-l-2 border-r-2 border-amber-500 dark:border-amber-400 relative">
                <div className="inline-block px-2 py-0.5 rounded-full bg-amber-500 text-slate-950 text-[9px] font-black uppercase tracking-wider mb-1">
                  Paling Diminati ⭐
                </div>
                <div className="text-[10px] font-bold text-amber-700 dark:text-amber-300 uppercase tracking-widest">
                  Tier: GOLD
                </div>
                <div className="text-sm font-extrabold text-slate-900 dark:text-amber-100 mt-0.5">
                  Pro Growth
                </div>
                <div className="text-xs font-bold text-amber-600 dark:text-amber-300">
                  Rp 799.000 <span className="text-[10px] font-normal text-amber-600/80">/bln</span>
                </div>
              </th>

              {/* Enterprise */}
              <th className="py-4 px-3 text-center w-[20%] border-r border-slate-200 dark:border-slate-800">
                <div className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
                  Tier: DIAMOND
                </div>
                <div className="text-sm font-extrabold text-slate-900 dark:text-white mt-0.5">
                  Enterprise
                </div>
                <div className="text-xs font-bold text-slate-600 dark:text-slate-300">
                  Rp 1.499.000 <span className="text-[10px] font-normal text-slate-500">/bln</span>
                </div>
              </th>
            </tr>
          </thead>

          {/* Table Body by Categories */}
          <tbody>
            {packageComparisonCategories.map((cat: MatrixCategory) => {
              const isOpen = openCategories[cat.category] ?? true;

              return (
                <React.Fragment key={cat.category}>
                  {/* Category Header Row (Clickable Accordion) */}
                  <tr
                    onClick={() => toggleCategory(cat.category)}
                    className="bg-slate-100/80 dark:bg-slate-800/80 hover:bg-slate-200/60 dark:hover:bg-slate-800 border-y border-slate-200 dark:border-slate-700 cursor-pointer select-none transition-colors"
                  >
                    <td colSpan={4} className="py-3 px-5">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5 font-bold text-xs sm:text-sm text-slate-900 dark:text-white">
                          {getCategoryIcon(cat.iconName)}
                          <span>{cat.category}</span>
                          <span className="text-[11px] font-normal text-slate-500 dark:text-slate-400">
                            ({cat.rows.length} kriteria)
                          </span>
                        </div>
                        <div className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200">
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </div>
                      </div>
                    </td>
                  </tr>

                  {/* Rows inside category */}
                  {isOpen &&
                    cat.rows.map((row, rIdx) => (
                      <tr
                        key={rIdx}
                        className="border-b border-slate-100 dark:border-slate-800/60 hover:bg-slate-50/70 dark:hover:bg-slate-800/30 transition-colors"
                      >
                        {/* Feature Name & Note */}
                        <td className="py-3 px-5 align-middle">
                          <div className="font-semibold text-xs sm:text-sm text-slate-800 dark:text-slate-200">
                            {row.name}
                          </div>
                          {row.note && (
                            <div className="text-[11px] text-slate-500 dark:text-slate-400 mt-0.5">
                              {row.note}
                            </div>
                          )}
                        </td>

                        {/* Starter Value */}
                        <td className="py-3 px-3 text-center align-middle border-l border-slate-100 dark:border-slate-800">
                          {renderValue(row.starter, false)}
                        </td>

                        {/* Pro Growth Value (Highlighted) */}
                        <td className="py-3 px-3 text-center align-middle bg-amber-500/[0.04] dark:bg-amber-500/[0.06] border-l-2 border-r-2 border-amber-500/40 dark:border-amber-400/40">
                          {renderValue(row.proGrowth, true)}
                        </td>

                        {/* Enterprise Value */}
                        <td className="py-3 px-3 text-center align-middle border-r border-slate-100 dark:border-slate-800">
                          {renderValue(row.enterprise, false)}
                        </td>
                      </tr>
                    ))}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Guarantee & Free Trial Banner */}
      <div className="mt-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 text-white shadow-xl relative overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-xs font-bold">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>Garansi 0 Kebocoran Data (100% Isolated Tenant Database)</span>
            </div>
            <h4 className="text-base sm:text-lg font-bold text-white">
              Coba Gratis Versi Tertinggi (Diamond Full Suite) Selama 30 Hari!
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
              Kami sediakan database bengkel mandiri khusus nama bengkel Anda untuk uji coba langsung tanpa takut bentrok data dengan bengkel lain. Jika cocok, Anda bebas memilih lanjut ke paket Starter, Pro Growth, atau Enterprise.
            </p>
          </div>

          <a
            href={`https://wa.me/6281359433350?text=${encodeURIComponent(
              "Halo Pak Tomo & Tim BroSlam.Tech, saya ingin mengajukan Free Trial 1 Bulan Versi Diamond (Full Suite) untuk bengkel kami. Mohon bantu buatkan akun tenant mandirinya."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 text-xs sm:text-sm font-extrabold flex items-center justify-center gap-2 transition-all shadow-lg hover:scale-102 cursor-pointer"
          >
            <span>Klaim Free Trial 30 Hari</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

