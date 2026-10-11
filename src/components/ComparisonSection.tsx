"use client";

import React from "react";
import { CheckCircle2, XCircle, AlertCircle, Sparkles } from "lucide-react";

interface ComparisonRow {
  feature: string;
  retailPos: { label: string; status: "no" | "partial" | "yes" };
  excel: { label: string; status: "no" | "partial" | "yes" };
  broslam: { label: string; status: "yes" };
}

const rows: ComparisonRow[] = [
  {
    feature: "Alur Stall, SPK, SA & Mekanik",
    retailPos: { label: "Tidak Ada", status: "no" },
    excel: { label: "Manual & Rumit", status: "no" },
    broslam: { label: "Bawaan Sistem Lengkap", status: "yes" },
  },
  {
    feature: "Kalkulasi HPP Sparepart FIFO Murni",
    retailPos: { label: "Rata-rata Biasa", status: "partial" },
    excel: { label: "Rawan Salah Rumus", status: "no" },
    broslam: { label: "FIFO Batch Otomatis", status: "yes" },
  },
  {
    feature: "Kirim Nota & Reminder WhatsApp Otomatis",
    retailPos: { label: "Bayar Vendor Mahal", status: "partial" },
    excel: { label: "Ketik Manual Satu-satu", status: "no" },
    broslam: { label: "Terpasang (Dual-Engine)", status: "yes" },
  },
  {
    feature: "Live TV Stall & Monitor Ruang Tunggu",
    retailPos: { label: "Tidak Ada", status: "no" },
    excel: { label: "Tidak Ada", status: "no" },
    broslam: { label: "Siap di Android TV", status: "yes" },
  },
  {
    feature: "Audit Kotak Perkakas Kunci (Tools Man)",
    retailPos: { label: "Tidak Ada", status: "no" },
    excel: { label: "Kertas Sering Hilang", status: "no" },
    broslam: { label: "Digital Checklist Mingguan", status: "yes" },
  },
  {
    feature: "Peta Wilayah & Integrasi BPS",
    retailPos: { label: "Tidak Ada", status: "no" },
    excel: { label: "Tidak Ada", status: "no" },
    broslam: { label: "Heatmap & Live API BPS", status: "yes" },
  },
  {
    feature: "Anti-Fraud Laporan Sore ke HP Owner",
    retailPos: { label: "Terbatas", status: "partial" },
    excel: { label: "Nol (Bisa Diedit Siapapun)", status: "no" },
    broslam: { label: "Live Alert Rollback WA", status: "yes" },
  },
  {
    feature: "Buku Servis Digital Mandiri (PWA Customer)",
    retailPos: { label: "Tidak Ada", status: "no" },
    excel: { label: "Tidak Ada", status: "no" },
    broslam: { label: "Modern Tanpa Install", status: "yes" },
  },
  {
    feature: "Laporan Konsolidasi Multi-Cabang",
    retailPos: { label: "Bayar per Akun Tambahan", status: "partial" },
    excel: { label: "File Terpisah-pisah", status: "no" },
    broslam: { label: "Terpusat di 1 Akun Owner", status: "yes" },
  },
];

function RenderStatusBadge({ item }: { item: { label: string; status: "no" | "partial" | "yes" } }) {
  if (item.status === "yes") {
    return (
      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/15 border border-amber-400/30 text-amber-300 text-xs font-bold shadow-xs">
        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 shrink-0" />
        <span>{item.label}</span>
      </span>
    );
  }
  if (item.status === "partial") {
    return (
      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-slate-800 text-slate-400 text-xs font-medium border border-white/5">
        <AlertCircle className="w-3.5 h-3.5 text-slate-500 shrink-0" />
        <span>{item.label}</span>
      </span>
    );
  }
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-rose-500/10 text-rose-400 text-xs font-medium border border-rose-500/20">
      <XCircle className="w-3.5 h-3.5 text-rose-400 shrink-0" />
      <span>{item.label}</span>
    </span>
  );
}

export default function ComparisonSection() {
  return (
    <section className="py-12 sm:py-16 bg-white dark:bg-gradient-to-b dark:from-[#070B14] dark:via-[#090E1C] dark:to-[#070B14] relative overflow-hidden border-b border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold tracking-widest uppercase">
            <span>PERBANDINGAN NYATA</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Mengapa Bengkel Mobil Tidak Cukup Hanya Pakai Excel atau POS Biasa?
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Lihat perbedaan mendasar antara software kasir ritel umum dengan BroSlam.Tech ERP yang dirancang spesifik untuk ekosistem bengkel mobil modern.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-3xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-slate-900/60 backdrop-blur-xl shadow-lg dark:shadow-2xl">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10 bg-white dark:bg-slate-950/80">
                <th className="py-5 px-6 font-bold text-slate-900 dark:text-slate-200 w-2/5">Fitur &amp; Kebutuhan Kunci</th>
                <th className="py-5 px-4 font-semibold text-slate-600 dark:text-slate-400 text-center w-1/5">Software Kasir Ritel (POS)</th>
                <th className="py-5 px-4 font-semibold text-slate-600 dark:text-slate-400 text-center w-1/5">Excel Manual</th>
                <th className="py-5 px-4 font-black text-amber-300 text-center w-1/5 bg-amber-500/10 border-l border-amber-500/20">
                  <span className="flex items-center justify-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>BroSlam.Tech ERP</span>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-white/5">
              {rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-white/[0.03] transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900 dark:text-slate-200">
                    {row.feature}
                  </td>
                  <td className="py-4 px-4 text-center font-medium">
                    <RenderStatusBadge item={row.retailPos} />
                  </td>
                  <td className="py-4 px-4 text-center font-medium">
                    <RenderStatusBadge item={row.excel} />
                  </td>
                  <td className="py-4 px-4 text-center font-bold bg-amber-500/5 border-l border-amber-500/20">
                    <RenderStatusBadge item={row.broslam} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
