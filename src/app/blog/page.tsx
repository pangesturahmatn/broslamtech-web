"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  Calendar,
  ArrowLeft,
  ArrowRight,
  Flame,
  Cpu,
  TrendingUp,
  Megaphone,
  Layers
} from "lucide-react";
import initialArticles from "../../data/news-articles.json";

export default function BlogListingPage() {
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
      .catch((err) => console.log("Using local articles:", err));
  }, []);

  const filtered = selectedCat === "all"
    ? articles
    : selectedCat === "promo"
      ? articles.filter((a) => a.isPromo || a.catTag === "promo")
      : articles.filter((a) => a.catTag === selectedCat);

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-[#070B14] dark:text-white transition-colors flex flex-col justify-between selection:bg-amber-400 selection:text-slate-950">
      <Navbar />

      <main className="pt-24 sm:pt-28 pb-20 flex-1 relative overflow-hidden">
        {/* Subtle ambient lighting only in dark mode */}
        <div className="hidden dark:block absolute top-1/4 right-1/4 w-[500px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="hidden dark:block absolute top-1/2 left-1/4 w-[450px] h-[300px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
          
          {/* Header */}
          <div className="space-y-3 max-w-3xl pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-amber-600 dark:text-amber-400 hover:text-amber-500 font-bold transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Beranda BroSlam.Tech</span>
            </Link>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight [text-wrap:balance]">
              Portal Wawasan, Berita &amp; Promo BroSlam.Tech
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-normal max-w-2xl font-normal">
              Pusat edukasi manajemen otomotif, arsitektur ERP bengkel, pembaruan rilis sistem, dan penawaran promo resmi.
            </p>
          </div>

          {/* Filter Pills with Full Light/Dark Contrast */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200 dark:border-slate-800">
            <button
              type="button"
              onClick={() => setSelectedCat("all")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all duration-200 cursor-pointer ${
                selectedCat === "all"
                  ? "bg-amber-500 text-slate-950 shadow-sm"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-300 dark:border-slate-800"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Semua Kabar ({articles.length})</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedCat("promo")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all duration-200 cursor-pointer ${
                selectedCat === "promo"
                  ? "bg-amber-500 text-slate-950 shadow-sm"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-300 dark:border-slate-800"
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-amber-500" />
              <span>Promo Spesial</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedCat("sistem")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all duration-200 cursor-pointer ${
                selectedCat === "sistem"
                  ? "bg-amber-500 text-slate-950 shadow-sm"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-300 dark:border-slate-800"
              }`}
            >
              <Cpu className="w-3.5 h-3.5 text-sky-600 dark:text-sky-400" />
              <span>Update Fitur ERP</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedCat("bisnis")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all duration-200 cursor-pointer ${
                selectedCat === "bisnis"
                  ? "bg-amber-500 text-slate-950 shadow-sm"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-300 dark:border-slate-800"
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Manajemen &amp; Finansial</span>
            </button>

            <button
              type="button"
              onClick={() => setSelectedCat("marketing")}
              className={`px-3.5 py-2 rounded-xl text-xs font-bold flex items-center gap-2 transition-all duration-200 cursor-pointer ${
                selectedCat === "marketing"
                  ? "bg-amber-500 text-slate-950 shadow-sm"
                  : "bg-slate-100 hover:bg-slate-200 text-slate-700 border border-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-slate-300 dark:border-slate-800"
              }`}
            >
              <Megaphone className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
              <span>Marketing &amp; Retensi</span>
            </button>
          </div>

          {/* Grid Articles: Crystal-Clear Contrast in Light & Dark Mode */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filtered.map((art) => (
              <Link
                key={art.id}
                href={`/blog/${art.slug || art.id}`}
                className={`rounded-2xl p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 group cursor-pointer hover:-translate-y-1.5 shadow-sm hover:shadow-md ${
                  art.isPromo
                    ? "bg-amber-50/40 dark:bg-slate-900 border border-amber-300/80 dark:border-amber-500/40"
                    : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700"
                }`}
              >
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold border border-slate-200 dark:border-slate-700 text-[11px]">
                      {art.category}
                    </span>
                    {art.isPromo && (
                      <span className="px-2.5 py-0.5 rounded-full bg-rose-50 dark:bg-rose-500/20 text-rose-700 dark:text-rose-300 font-extrabold text-[10px] border border-rose-200 dark:border-rose-500/30 flex items-center gap-1">
                        <Flame className="w-3 h-3 text-rose-500 dark:text-rose-400" />
                        <span>{art.promoBadge || "PROMO"}</span>
                      </span>
                    )}
                  </div>

                  {/* Title: High Contrast in Both Modes */}
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors leading-snug">
                    {art.title}
                  </h2>

                  {/* Snippet */}
                  <div
                    className="text-xs text-slate-600 dark:text-slate-300 line-clamp-3 leading-relaxed font-normal"
                    dangerouslySetInnerHTML={{ __html: art.content }}
                  />
                </div>

                <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs mt-6">
                  <span className="text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{art.date}</span>
                  </span>
                  
                  <span className="font-bold text-amber-600 dark:text-amber-400 group-hover:text-amber-700 dark:group-hover:text-amber-300 flex items-center gap-1.5 transition-colors">
                    <span>Baca Lengkap</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </span>
                </div>
              </Link>
            ))}
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
