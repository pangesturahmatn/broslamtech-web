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
  Calendar
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
      className="py-8 sm:py-12 bg-slate-50 dark:bg-gradient-to-b dark:from-[#070B14] dark:via-[#0D1527] dark:to-[#070B14] relative overflow-hidden border-t border-slate-200 dark:border-white/10 transition-colors duration-300"
    >
      {/* Dynamic Ambient Glows (Only in dark mode) */}
      <div className="hidden dark:block absolute top-1/4 left-1/4 w-[500px] h-[350px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="hidden dark:block absolute bottom-1/4 right-1/4 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-1.5 mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 text-xs font-bold tracking-wider uppercase">
            <Newspaper className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>PORTAL INFORMASI &amp; MEDIA RESMI</span>
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Kabar Terkini, Wawasan &amp; Update Promo BroSlam.Tech
          </h2>
          
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-normal max-w-2xl mx-auto">
            Edukasi strategis manajemen bengkel, rilis arsitektur fitur terbaru, serta penawaran promo akselerasi digital untuk pemilik bengkel mandiri.
          </p>
        </div>

        {/* Vector Icon Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          
          <button
            type="button"
            onClick={() => setSelectedCat("all")}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all duration-300 cursor-pointer ${
              selectedCat === "all"
                ? "bg-amber-400 text-slate-950 font-extrabold shadow-md scale-105"
                : "bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
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
                ? "bg-amber-400 text-slate-950 font-extrabold shadow-md scale-105"
                : "bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
            }`}
          >
            <Flame className="w-3.5 h-3.5 text-amber-500 dark:text-amber-400" />
            <span>Promo Spesial</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCat("sistem")}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all duration-300 cursor-pointer ${
              selectedCat === "sistem"
                ? "bg-amber-400 text-slate-950 font-extrabold shadow-md scale-105"
                : "bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
            <span>Update Fitur ERP</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCat("bisnis")}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all duration-300 cursor-pointer ${
              selectedCat === "bisnis"
                ? "bg-amber-400 text-slate-950 font-extrabold shadow-md scale-105"
                : "bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
            }`}
          >
            <TrendingUp className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Manajemen &amp; Finansial</span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCat("marketing")}
            className={`px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all duration-300 cursor-pointer ${
              selectedCat === "marketing"
                ? "bg-amber-400 text-slate-950 font-extrabold shadow-md scale-105"
                : "bg-white dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10"
            }`}
          >
            <Megaphone className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
            <span>Marketing &amp; Retensi</span>
          </button>

        </div>

        {/* Dynamic News Cards with Dual Light/Dark Mode Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
          {filtered.map((art) => (
            <Link
              key={art.id}
              href={`/blog/${art.id}`}
              className={`rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 group cursor-pointer relative overflow-hidden backdrop-blur-xl hover:-translate-y-1.5 ${
                art.isPromo
                  ? "bg-amber-50/70 dark:bg-gradient-to-b dark:from-slate-900/90 dark:via-slate-900/60 dark:to-slate-950/90 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-md"
                  : "bg-white dark:bg-gradient-to-b dark:from-white/[0.08] dark:via-white/[0.03] dark:to-transparent border border-slate-200 dark:border-white/10 shadow-sm hover:shadow-lg dark:shadow-[0_10px_30px_rgba(0,0,0,0.4)] hover:border-amber-400 dark:hover:border-sky-400/40"
              }`}
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-white/10 text-slate-800 dark:text-amber-300 font-bold border border-slate-200 dark:border-white/10">
                    {art.category}
                  </span>
                  {art.isPromo && (
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-gradient-to-r dark:from-rose-500/25 dark:to-amber-500/25 text-amber-800 dark:text-amber-300 font-extrabold text-[10px] border border-amber-300 dark:border-amber-400/40 flex items-center gap-1">
                      <Flame className="w-3 h-3 text-amber-500 dark:text-amber-400 animate-pulse" />
                      <span>{art.promoBadge || "PROMO SPESIAL"}</span>
                    </span>
                  )}
                </div>

                <h3 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-300 transition-colors leading-snug">
                  {art.title}
                </h3>

                <div
                  className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed font-normal"
                  dangerouslySetInnerHTML={{ __html: art.content }}
                />
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-white/10 flex items-center justify-between text-[11px] mt-4">
                <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1">
                  <Calendar className="w-3 h-3 text-slate-400 dark:text-slate-500" />
                  <span>{art.date}</span>
                </span>
                
                <span className="font-bold text-amber-600 dark:text-amber-400 group-hover:text-amber-700 dark:group-hover:text-amber-300 flex items-center gap-1.5 transition-colors">
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
