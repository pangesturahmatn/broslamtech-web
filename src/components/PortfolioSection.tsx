"use client";

import React, { useState, useEffect } from "react";
import { portfolioClients as defaultClients } from "../data/portfolio-data";
import { Building2, CheckCircle2, MapPin, Wrench, ChevronLeft, ChevronRight } from "lucide-react";

export default function PortfolioSection() {
  const [clients, setClients] = useState(defaultClients);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Fetch dynamic clients from API if updated by admin
  useEffect(() => {
    fetch("/api/portfolio")
      .then((res) => res.json())
      .then((json) => {
        if (json.success && Array.isArray(json.data) && json.data.length > 0) {
          setClients(json.data);
        }
      })
      .catch((err) => console.error("Fetch portfolio err:", err));
  }, []);

  useEffect(() => {
    if (isPaused || clients.length === 0) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % clients.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [isPaused, clients.length]);

  if (clients.length === 0) return null;
  const currentClient = clients[currentIndex] || clients[0];

  return (
    <section id="portofolio" className="py-8 sm:py-10 bg-white dark:bg-[#070B14] relative overflow-hidden border-t border-slate-200 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto space-y-1.5 mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold tracking-widest uppercase">
            <Building2 className="w-3.5 h-3.5" />
            <span>PORTOFOLIO BENGKEL &amp; CLIENT SHOWCASE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug [text-wrap:balance]">
            Dipercaya Oleh Jaringan Bengkel Mobil Terkemuka
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-normal sm:leading-relaxed">
            Terbukti mengawal operasional harian bengkel multi-cabang dengan puluhan ribu unit entry, perputaran stok FIFO, dan nol selisih kasir.
          </p>
        </div>

        {/* Rotating Client Showcase */}
        <div
          className="relative max-w-3xl mx-auto mb-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="bg-slate-50 dark:bg-slate-900/90 border border-slate-200 dark:border-slate-800 rounded-2xl p-5 sm:p-6 shadow-md dark:shadow-xl transition-all duration-500">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-3">
                <span className="px-3.5 py-1 rounded-xl bg-amber-100 dark:bg-amber-500/15 border border-amber-300 dark:border-amber-500/30 text-amber-800 dark:text-amber-300 font-mono text-xs font-black">
                  {currentClient.logoBadge}
                </span>
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-slate-900 dark:text-white">
                    {currentClient.name}
                  </h3>
                  <p className="text-xs text-amber-600 dark:text-amber-300/80 font-medium">
                    {currentClient.category}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-200 dark:border-emerald-500/20">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Terverifikasi Live Production</span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-2.5 text-xs text-slate-700 dark:text-slate-300 border-b border-slate-200 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>Lokasi: <strong className="text-slate-900 dark:text-white">{currentClient.locations}</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-slate-400" />
                <span>Kapasitas: <strong className="text-slate-900 dark:text-white">{currentClient.stallCount}</strong></span>
              </div>
            </div>

            <div className="pt-2.5 space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Dampak Operasional Nyata:
              </span>
              <p className="text-xs sm:text-sm text-slate-800 dark:text-slate-200 leading-relaxed italic bg-white dark:bg-slate-950 p-3 rounded-xl border border-slate-200 dark:border-slate-800">
                &ldquo;{currentClient.achievement}&rdquo;
              </p>
            </div>
          </div>

          {/* Controls */}
          <button
            type="button"
            onClick={() => setCurrentIndex((prev) => (prev - 1 + clients.length) % clients.length)}
            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 shadow-md flex items-center justify-center transition-all cursor-pointer"
            aria-label="Previous client"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={() => setCurrentIndex((prev) => (prev + 1) % clients.length)}
            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-700 shadow-md flex items-center justify-center transition-all cursor-pointer"
            aria-label="Next client"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Selector Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
            {clients.map((client: any, idx: number) => (
              <button
                key={client.id}
                onClick={() => setCurrentIndex(idx)}
                className={`px-3 py-1 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  currentIndex === idx
                    ? "bg-amber-400 text-black font-black scale-105"
                    : "bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {client.name.split(" ")[0]} {client.name.split(" ")[1] || ""}
              </button>
            ))}
          </div>
        </div>

        {/* Banner CTA Bergabung */}
        <div className="rounded-3xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-5 sm:p-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-sm">
          <div className="space-y-1">
            <h4 className="text-base font-black text-slate-900 dark:text-white">
              Ingin Bengkel Mobil Anda Bergabung ke Ekosistem BroSlam.Tech?
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              Dapatkan pendampingan setup data stok awal, penataan alur kasir, training mekanik, dan monitoring holding gratis selama masa onboarding.
            </p>
          </div>
          <a
            href="https://wa.me/6281359433350?text=Halo%20Pak%20Tomo,%20saya%20ingin%20mendaftarkan%20bengkel%20saya%20menjadi%20mitra%20portofolio%20BroSlam.Tech"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-black shadow-md transition-all cursor-pointer"
          >
            Konsultasi Onboarding Gratis
          </a>
        </div>

      </div>
    </section>
  );
}
