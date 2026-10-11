"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Newspaper,
  ArrowRight,
  Flame,
  Cpu,
  TrendingUp,
  Megaphone,
  Layers,
  Sparkles,
  Calendar,
  Clock
} from "lucide-react";
import initialArticles from "../data/news-articles.json";

export default function NewsPortal() {
  const [articles, setArticles] = useState<any[]>(initialArticles);
  const [selectedCat, setSelectedCat] = useState<string>("all");

  useEffect(() => {
    fetch("/api/news")
      .then((res) => res.json())
      .then((json) => {
        if (json.success && Array.isArray(json.data) && json.data.length > 0) {
          setArticles(json.data);
        }
      })
      .catch((err) => console.log("Using local initial articles:", err));
  }, []);

  const filtered = selectedCat === "all"
    ? articles
    : selectedCat === "promo"
      ? articles.filter((a) => a.isPromo || a.catTag === "promo")
      : articles.filter((a) => a.catTag === selectedCat);

  return (
    <section
      id="portal-berita"
      className="py-24 bg-gradient-to-b from-[#070B14] via-[#0D1527] to-[#070B14] relative overflow-hidden border-t border-white/10 transition-colors"
    >
      {/* Dynamic Ambient Glows (Menghilangkan kesan kaku & hitam pekat) */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[350px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-500/15 to-indigo-500/15 border border-blue-400/30 text-blue-300 text-xs font-bold tracking-widest uppercase shadow-sm">
            <Newspaper className="w-3.5 h-3.5 text-blue-400" />
            <span>PORTAL INFORMASI &amp; MEDIA RESMI</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight">
            Kabar Terkini, Wawasan &amp; Update Promo BroSlam.Tech
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-2xl mx-auto">
            Edukasi strategis manajemen bengkel, rilis arsitektur fitur terbaru, serta penawaran promo akselerasi digital untuk pemilik bengkel mandiri.
          </p>
        </div>

        {/* Clean Vector Icon Category Filter Pills (No Raw Emojis) */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          
          <button
            type="button"
            onClick={() => setSelectedCat("all")}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all duration-300 cursor-pointer ${
              selectedCat === "all"
                ? "bg-amber-400 text-slate-950 font-extrabold shadow-lg shadow-amber-400/25 scale-105"
                : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 hover:border-white/20"
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Semua Kabar ({articles.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCat("promo")}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all duration-300 cursor-pointer ${
              selectedCat === "promo"
                ? "bg-amber-400 text-slate-950 font-extrabold shadow-lg shadow-amber-400/25 scale-105"
                : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 hover:border-white/20"
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-amber-400" />
            <span>Promo Spesial</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCat("sistem")}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all duration-300 cursor-pointer ${
              selectedCat === "sistem"
                ? "bg-amber-400 text-slate-950 font-extrabold shadow-lg shadow-amber-400/25 scale-105"
                : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 hover:border-white/20"
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-sky-400" />
            <span>Update Fitur ERP</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCat("bisnis")}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all duration-300 cursor-pointer ${
              selectedCat === "bisnis"
                ? "bg-amber-400 text-slate-950 font-extrabold shadow-lg shadow-amber-400/25 scale-105"
                : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 hover:border-white/20"
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
            <span>Manajemen &amp; Finansial</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCat("marketing")}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all duration-300 cursor-pointer ${
              selectedCat === "marketing"
                ? "bg-amber-400 text-slate-950 font-extrabold shadow-lg shadow-amber-400/25 scale-105"
                : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10 hover:border-white/20"
            }`}
          >
            <Megaphone className="w-3.5 h-3.5 text-purple-400" />
            <span>Marketing &amp; Retensi</span>
          </button>

        </div>

        {/* Dynamic News Cards with Fluid Hover & Glassmorphism */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filtered.map((art) => (
            <Link
              key={art.id}
              href={`/blog/${art.id}`}
              className={`rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 group cursor-pointer relative overflow-hidden backdrop-blur-xl hover:-translate-y-2 ${
                art.isPromo
                  ? "bg-gradient-to-b from-slate-900/90 via-slate-900/60 to-slate-950/90 border border-amber-500/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:border-amber-400 hover:shadow-[0_20px_45px_rgba(245,158,11,0.22)]"
                  : "bg-gradient-to-b from-white/[0.08] via-white/[0.03] to-transparent border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:border-sky-400/40 hover:shadow-[0_20px_40px_rgba(14,165,233,0.18)]"
              }`}
            >
              {/* Top ambient card light reflection */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="space-y-3.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="px-2.5 py-1 rounded-full bg-white/10 text-amber-300 font-bold border border-white/10">
                    {art.category}
                  </span>
                  {art.isPromo && (
                    <span className="px-2.5 py-0.5 rounded-full bg-gradient-to-r from-rose-500/25 to-amber-500/25 text-amber-300 font-extrabold text-[10px] border border-amber-400/40 flex items-center gap-1 shadow-xs">
                      <Flame className="w-3 h-3 text-amber-400 animate-pulse" />
                      <span>{art.promoBadge || "PROMO SPESIAL"}</span>
                    </span>
                  )}
                </div>

                <h3 className="text-sm font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                  {art.title}
                </h3>

                <div
                  className="text-xs text-slate-300 line-clamp-3 leading-relaxed font-normal"
                  dangerouslySetInnerHTML={{ __html: art.content }}
                />
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] mt-6">
                <span className="text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-slate-500" />
                  <span>{art.date}</span>
                </span>
                
                <span className="font-bold text-amber-400 group-hover:text-amber-300 flex items-center gap-1.5 transition-colors">
                  <span>Baca Selengkapnya</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
