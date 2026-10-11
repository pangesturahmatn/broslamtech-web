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
      className="scroll-mt-24 py-10 sm:py-14 bg-slate-50/50 dark:bg-[#070B14] bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] dark:bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] relative overflow-hidden border-t border-slate-200 dark:border-white/10 transition-colors duration-300"
    >
      {/* Dynamic Ambient Glows (Only in dark mode) */}
      <div className="hidden dark:block absolute top-1/4 left-1/4 w-[500px] h-[350px] bg-amber-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="hidden dark:block absolute bottom-1/4 right-1/4 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-1.5 mb-5 sm:mb-6">
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
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
              selectedCat === "all"
                ? "bg-slate-900 text-white dark:bg-amber-400 dark:text-slate-950 font-bold shadow-sm"
                : "bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
            }`}
          >
            Semua Kabar ({articles.length})
          </button>

          <button
            type="button"
            onClick={() => setSelectedCat("promo")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
              selectedCat === "promo"
                ? "bg-slate-900 text-white dark:bg-amber-400 dark:text-slate-950 font-bold shadow-sm"
                : "bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
            }`}
          >
            Promo Spesial
          </button>

          <button
            type="button"
            onClick={() => setSelectedCat("sistem")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
              selectedCat === "sistem"
                ? "bg-slate-900 text-white dark:bg-amber-400 dark:text-slate-950 font-bold shadow-sm"
                : "bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
            }`}
          >
            Update Fitur ERP
          </button>

          <button
            type="button"
            onClick={() => setSelectedCat("bisnis")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
              selectedCat === "bisnis"
                ? "bg-slate-900 text-white dark:bg-amber-400 dark:text-slate-950 font-bold shadow-sm"
                : "bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
            }`}
          >
            Manajemen &amp; Finansial
          </button>

          <button
            type="button"
            onClick={() => setSelectedCat("marketing")}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 cursor-pointer ${
              selectedCat === "marketing"
                ? "bg-slate-900 text-white dark:bg-amber-400 dark:text-slate-950 font-bold shadow-sm"
                : "bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800"
            }`}
          >
            Marketing &amp; Retensi
          </button>

        </div>

        {/* Dynamic News Cards with Dual Light/Dark Mode Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
          {filtered.map((art) => (
            <Link
              key={art.id}
              href={`/blog/${art.slug || art.id}`}
              className={`rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 group cursor-pointer relative overflow-hidden backdrop-blur-xl hover:-translate-y-1.5 ${
                art.isPromo
                  ? "bg-amber-50/50 dark:bg-slate-900 border border-amber-300/80 dark:border-amber-500/40 shadow-sm hover:shadow-md"
                  : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 shadow-sm hover:shadow-md"
              }`}
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold border border-slate-200 dark:border-slate-700 text-[10.5px]">
                    {art.category}
                  </span>
                  {art.isPromo && (
                    <span className="px-2 py-0.5 rounded-md bg-amber-50 dark:bg-amber-500/10 text-amber-800 dark:text-amber-300 font-bold text-[10px] border border-amber-200 dark:border-amber-500/20">
                      {art.promoBadge || "PROMO SPESIAL"}
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

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] mt-4">
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
