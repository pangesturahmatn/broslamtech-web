"use client";

import React, { useState } from "react";
import { AlertTriangle, TrendingDown, ArrowRight, ShieldCheck, Zap } from "lucide-react";

export default function ProfitCalculator() {
  const [omsetJuta, setOmsetJuta] = useState<number>(150);
  const [cabang, setCabang] = useState<number>(2);

  const omsetPerBulan = omsetJuta * 1000000;
  const omsetTahunan = omsetPerBulan * 12;
  const totalLeakPerTahun = omsetTahunan * cabang * 0.07;
  const leakPerBulan = totalLeakPerTahun / 12;

  const partLeak = Math.round(totalLeakPerTahun * 0.5); // 3.5%
  const jasaLeak = Math.round(totalLeakPerTahun * 0.28); // ~2.0%
  const adminLeak = totalLeakPerTahun - partLeak - jasaLeak; // ~1.5%

  const formatRupiah = (val: number) => {
    return "Rp " + Math.round(val).toLocaleString("id-ID");
  };

  return (
    <section id="kalkulator" className="scroll-mt-20 sm:scroll-mt-24 py-8 sm:py-12 bg-white dark:bg-slate-950 relative overflow-hidden border-b border-slate-200 dark:border-slate-800 transition-colors">
      {/* Background glow */}
      

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="rounded-3xl bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 p-8 sm:p-12 shadow-lg backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Sliders */}
            <div className="lg:col-span-7 space-y-5 sm:space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold tracking-wider uppercase mb-3">
                  <AlertTriangle className="w-3.5 h-3.5 text-amber-600 dark:text-amber-400" />
                  <span>SIMULASI KEBOCORAN MODAL BENGKEL</span>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight leading-tight">
                  Berapa Uang yang Bocor di Bengkel Anda Setiap Bulan?
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
                  Tanpa sistem FIFO dan audit trail yang ketat, kebocoran terjadi dari selisih harga beli modal sparepart, part terpakai tanpa SPK, biaya bubut tidak tertagih, dan diskon liar tanpa persetujuan.
                </p>
              </div>

              {/* Slider 1: Omset */}
              <div className="space-y-3 bg-white dark:bg-slate-950 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="flex justify-between items-center text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                  <span>Omset Rata-Rata Bulanan per Cabang:</span>
                  <span className="text-base font-black text-amber-600 dark:text-amber-400">{formatRupiah(omsetPerBulan)}</span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="1000"
                  step="10"
                  value={omsetJuta}
                  onChange={(e) => setOmsetJuta(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-semibold">
                  <span>Rp 30 Juta</span>
                  <span>Rp 500 Juta</span>
                  <span>Rp 1 Miliar+</span>
                </div>
              </div>

              {/* Slider 2: Cabang */}
              <div className="space-y-3 bg-white dark:bg-slate-950 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-xs">
                <div className="flex justify-between items-center text-xs sm:text-sm font-bold text-slate-800 dark:text-slate-200">
                  <span>Jumlah Cabang Bengkel Aktif:</span>
                  <span className="text-base font-black text-amber-600 dark:text-amber-400">{cabang} Cabang</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={cabang}
                  onChange={(e) => setCabang(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-500"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-semibold">
                  <span>1 Cabang</span>
                  <span>10 Cabang</span>
                  <span>20 Cabang</span>
                </div>
              </div>
            </div>

            {/* Right Column: Leakage Result Card */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 sm:p-7 shadow-lg shadow-slate-900/5 dark:shadow-none relative overflow-hidden space-y-5">
                

                <div className="space-y-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    Estimasi Potensi Uang Bocor
                  </span>
                  <div className="text-3xl sm:text-4xl font-black text-rose-600 dark:text-rose-400 tracking-tight flex items-baseline gap-2">
                    <span>{formatRupiah(totalLeakPerTahun)}</span>
                    <span className="text-xs font-bold text-slate-400">/ tahun</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-600 dark:text-slate-400">
                    Setara <strong className="text-slate-900 dark:text-white">{formatRupiah(leakPerBulan)}</strong> setiap bulan lenyap tanpa disadari.
                  </div>
                </div>

                {/* Leak Breakdown */}
                <div className="space-y-2.5 pt-2 border-t border-slate-800 text-xs">
                  <div className="flex justify-between items-center text-slate-700 dark:text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-400"></span>
                      <span>Selisih Stok &amp; Modal Part (FIFO):</span>
                    </span>
                    <span className="font-bold text-slate-900 dark:text-slate-100">{formatRupiah(partLeak)}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-700 dark:text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                      <span>Jasa Luar/Bubut Tidak Tertagih:</span>
                    </span>
                    <span className="font-bold text-slate-900 dark:text-slate-100">{formatRupiah(jasaLeak)}</span>
                  </div>
                  <div className="flex justify-between items-center text-slate-700 dark:text-slate-300">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-blue-400"></span>
                      <span>Diskon Liar &amp; Selisih Kasir:</span>
                    </span>
                    <span className="font-bold text-slate-900 dark:text-slate-100">{formatRupiah(adminLeak)}</span>
                  </div>
                </div>

                <p className="text-[11px] text-slate-400 leading-relaxed italic border-t border-slate-800/80 pt-3">
                  *Rata-rata 7% kebocoran modal sparepart, ketidaktercatatan nota, dan selisih stok fisik dapat diselamatkan 100% dengan proteksi sistem BroSlam.Tech.
                </p>

                <a
                  href={`https://wa.me/6281359433350?text=${encodeURIComponent(
                    `Halo Pak Tomo & Tim BroSlam.Tech, saya sudah hitung simulasi kebocoran bengkel saya: ${cabang} cabang dengan omset ${formatRupiah(
                      omsetPerBulan
                    )}/bln berpotensi bocor ${formatRupiah(
                      totalLeakPerTahun
                    )}/tahun. Saya ingin konsultasi solusinya.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs sm:text-sm tracking-wide shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
                >
                  <span>Konsultasikan Solusi Kebocoran Ini</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
