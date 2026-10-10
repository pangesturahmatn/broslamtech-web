"use client";

import React from "react";
import { Check, X, Minus, Sparkles } from "lucide-react";

interface ComparisonRow {
  feature: string;
  retailPos: string;
  excel: string;
  broslam: string;
}

const rows: ComparisonRow[] = [
  {
    feature: "Alur Stall, SPK, SA & Mekanik",
    retailPos: "✕ Tidak Ada",
    excel: "✕ Manual & Rumit",
    broslam: "✓ Bawaan Sistem Lengkap",
  },
  {
    feature: "Kalkulasi HPP Sparepart FIFO Murni",
    retailPos: "~ Rata-rata Biasa",
    excel: "✕ Rawan Salah Rumus",
    broslam: "✓ FIFO Batch Otomatis",
  },
  {
    feature: "Kirim Nota & Reminder WhatsApp Otomatis",
    retailPos: "~ Bayar Vendor Mahal",
    excel: "✕ Ketik Manual Satu-satu",
    broslam: "✓ Terpasang (Dual-Engine)",
  },
  {
    feature: "Live TV Stall & Monitor Ruang Tunggu",
    retailPos: "✕ Tidak Ada",
    excel: "✕ Tidak Ada",
    broslam: "✓ Siap di Android TV",
  },
  {
    feature: "Audit Kotak Perkakas Kunci (Tools Man)",
    retailPos: "✕ Tidak Ada",
    excel: "✕ Kertas Sering Hilang",
    broslam: "✓ Digital Checklist Mingguan",
  },
  {
    feature: "Peta Wilayah & Integrasi BPS",
    retailPos: "✕ Tidak Ada",
    excel: "✕ Tidak Ada",
    broslam: "✓ Heatmap & Live API BPS",
  },
  {
    feature: "Anti-Fraud Laporan Sore ke HP Owner",
    retailPos: "✕ Terbatas",
    excel: "✕ Nol (Bisa Diedit Siapapun)",
    broslam: "✓ Live Alert Rollback WA",
  },
  {
    feature: "Buku Servis Digital Mandiri (PWA Customer)",
    retailPos: "✕ Tidak Ada",
    excel: "✕ Tidak Ada",
    broslam: "✓ Modern Tanpa Install",
  },
  {
    feature: "Laporan Konsolidasi Multi-Cabang",
    retailPos: "~ Bayar per Akun Tambahan",
    excel: "✕ File Terpisah-pisah",
    broslam: "✓ Terpusat di 1 Akun Owner",
  },
];

export default function ComparisonSection() {
  return (
    <section className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black tracking-widest uppercase">
            <span>PERBANDINGAN NYATA</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Mengapa Bengkel Mobil Tidak Cukup Hanya Pakai Excel atau POS Biasa?
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Lihat perbedaan mendasar antara software kasir ritel umum dengan BroSlam.Tech ERP yang dirancang spesifik untuk ekosistem bengkel mobil modern.
          </p>
        </div>

        {/* Comparison Table */}
        <div className="overflow-x-auto rounded-3xl border border-slate-800 bg-slate-900/60 shadow-2xl backdrop-blur-md">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead>
              <tr className="border-b border-slate-800 bg-slate-950/80">
                <th className="py-5 px-6 font-bold text-slate-300 w-2/5">Fitur &amp; Kebutuhan Kunci</th>
                <th className="py-5 px-4 font-semibold text-slate-400 text-center w-1/5">Software Kasir Ritel (POS)</th>
                <th className="py-5 px-4 font-semibold text-slate-400 text-center w-1/5">Excel Manual</th>
                <th className="py-5 px-4 font-black text-amber-300 text-center w-1/5 bg-amber-500/10 border-l border-amber-500/20">
                  <span className="flex items-center justify-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    <span>BroSlam.Tech ERP</span>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-800/70">
              {rows.map((row, idx) => (
                <tr key={idx} className="hover:bg-slate-850/50 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-200">
                    {row.feature}
                  </td>
                  <td className="py-4 px-4 text-center text-slate-400 font-medium">
                    <span className="inline-block px-2.5 py-1 rounded-lg bg-slate-800/80 text-rose-300 text-xs">
                      {row.retailPos}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center text-slate-400 font-medium">
                    <span className="inline-block px-2.5 py-1 rounded-lg bg-slate-800/80 text-rose-300 text-xs">
                      {row.excel}
                    </span>
                  </td>
                  <td className="py-4 px-4 text-center font-bold text-amber-200 bg-amber-500/5 border-l border-amber-500/20">
                    <span className="inline-block px-3 py-1 rounded-lg bg-amber-500/20 text-amber-300 text-xs font-black border border-amber-500/30">
                      {row.broslam}
                    </span>
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
