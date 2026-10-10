"use client";

import React from "react";
import { portfolioClients } from "../data/portfolio-data";
import { Building2, CheckCircle2, MapPin, Wrench, ShieldCheck, Star } from "lucide-react";

export default function PortfolioSection() {
  return (
    <section id="portofolio" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-black tracking-widest uppercase">
            <Building2 className="w-3.5 h-3.5" />
            <span>PORTOFOLIO BENGKEL &amp; CLIENT SHOWCASE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Dipercaya Oleh Jaringan Bengkel Mobil Terkemuka
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Terbukti mengawal operasional harian bengkel multi-cabang dengan puluhan ribu unit entry, perputaran stok FIFO, dan nol selisih kasir.
          </p>
        </div>

        {/* Portfolio Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {portfolioClients.map((client) => (
            <div
              key={client.id}
              className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl group"
            >
              <div className="space-y-4">
                {/* Header item */}
                <div className="flex items-start justify-between">
                  <div className="px-3 py-1 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 font-mono text-xs font-black tracking-wider">
                    {client.logoBadge}
                  </div>
                  <div className="flex items-center gap-1 text-[11px] font-bold text-emerald-400 bg-emerald-500/10 px-2.5 py-0.5 rounded-full border border-emerald-500/20">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Terverifikasi Live</span>
                  </div>
                </div>

                <div>
                  <h3 className="text-base font-black text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {client.name}
                  </h3>
                  <p className="text-xs text-amber-200/80 font-medium mt-0.5">
                    {client.category}
                  </p>
                </div>

                <div className="space-y-1.5 text-xs text-slate-400 pt-2 border-t border-slate-800">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span>{client.locations}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Wrench className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                    <span>Kapasitas: <strong className="text-slate-200">{client.stallCount}</strong></span>
                  </div>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-950 border border-slate-800/80 text-xs text-slate-300 leading-relaxed">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block mb-1">
                    Dampak Operasional:
                  </span>
                  {client.achievement}
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span className="flex items-center gap-1 text-amber-400">
                  <Star className="w-3 h-3 fill-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400" />
                  <Star className="w-3 h-3 fill-amber-400" />
                </span>
                <span className="font-semibold text-slate-400">Production Live</span>
              </div>
            </div>
          ))}
        </div>

        {/* Banner CTA Bergabung */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <h4 className="text-base font-black text-white">
              Ingin Bengkel Mobil Anda Bergabung ke Ekosistem BroSlam.Tech?
            </h4>
            <p className="text-xs text-slate-400 max-w-2xl leading-relaxed">
              Dapatkan pendampingan setup data stok awal, penataan alur kasir, training mekanik, dan monitoring holding gratis selama masa onboarding.
            </p>
          </div>
          <a
            href="https://wa.me/6281359433350?text=Halo%20Pak%20Tomo,%20saya%20ingin%20mendaftarkan%20bengkel%20saya%20menjadi%20mitra%20portofolio%20BroSlam.Tech"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 text-xs font-black shadow-md transition-all cursor-pointer"
          >
            Konsultasi Onboarding Gratis
          </a>
        </div>

      </div>
    </section>
  );
}
