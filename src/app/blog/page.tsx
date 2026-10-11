"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import {
  Newspaper,
  ArrowRight,
  Calendar,
  User,
  ArrowLeft,
  Tag,
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

      <main className="pt-28 pb-20 flex-1 relative overflow-hidden">
        {/* Ambient lighting */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute top-1/2 left-1/4 w-[450px] h-[300px] bg-amber-500/10 rounded-full blur-[130px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          
          {/* Header */}
          <div className="space-y-4 max-w-3xl pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs text-amber-400 hover:text-amber-300 font-bold transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Beranda BroSlam.Tech</span>
            </Link>

            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
              Portal Wawasan, Berita &amp; Promo BroSlam.Tech
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
              Pusat edukasi manajemen otomotif, arsitektur ERP bengkel, pembaruan rilis sistem, dan penawaran promo resmi.
            </p>
          </div>

          {/* Filter Pills with Vector Icons */}
          <div className="flex flex-wrap gap-2.5 pt-4 border-t border-white/10">
            <button
              type="button"
              onClick={() => setSelectedCat("all")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                selectedCat === "all"
                  ? "bg-amber-400 text-slate-950 font-extrabold shadow-md scale-105"
                  : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Semua Kabar ({articles.length})</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedCat("promo")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                selectedCat === "promo"
                  ? "bg-amber-400 text-slate-950 font-extrabold shadow-md scale-105"
                  : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
              }`}
            >
              <Flame className="w-3.5 h-3.5 text-amber-400" />
              <span>Promo Spesial</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedCat("sistem")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                selectedCat === "sistem"
                  ? "bg-amber-400 text-slate-950 font-extrabold shadow-md scale-105"
                  : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
              }`}
            >
              <Cpu className="w-3.5 h-3.5 text-sky-400" />
              <span>Update Fitur ERP</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedCat("bisnis")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                selectedCat === "bisnis"
                  ? "bg-amber-400 text-slate-950 font-extrabold shadow-md scale-105"
                  : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
              }`}
            >
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              <span>Manajemen &amp; Finansial</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedCat("marketing")}
              className={`px-4 py-2.5 rounded-xl text-xs font-bold flex items-center gap-2 transition-all duration-300 cursor-pointer ${
                selectedCat === "marketing"
                  ? "bg-amber-400 text-slate-950 font-extrabold shadow-md scale-105"
                  : "bg-white/5 hover:bg-white/10 text-slate-300 border border-white/10"
              }`}
            >
              <Megaphone className="w-3.5 h-3.5 text-purple-400" />
              <span>Marketing &amp; Retensi</span>
            </button>
          </div>

          {/* Grid Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((art) => (
              <Link
                key={art.id}
                href={`/blog/${art.id}`}
                className={`rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 group cursor-pointer backdrop-blur-xl hover:-translate-y-2 ${
                  art.isPromo
                    ? "bg-gradient-to-b from-slate-900/90 to-slate-950 border-2 border-amber-500/40 shadow-xl hover:border-amber-400 hover:shadow-[0_20px_45px_rgba(245,158,11,0.2)]"
                    : "bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 hover:border-sky-400/30 shadow-lg hover:shadow-[0_20px_40px_rgba(14,165,233,0.15)]"
                }`}
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-1 rounded-full bg-white/10 text-amber-300 font-bold border border-white/10">
                      {art.category}
                    </span>
                    {art.isPromo && (
                      <span className="px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 font-black text-[10px] border border-rose-500/30 flex items-center gap-1">
                        <Flame className="w-3 h-3 text-rose-400" />
                        <span>{art.promoBadge || "PROMO"}</span>
                      </span>
                    )}
                  </div>

                  <h2 className="text-base font-bold text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {art.title}
                  </h2>

                  <div
                    className="text-xs text-slate-300 line-clamp-3 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: art.content }}
                  />
                </div>

                <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs mt-6">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-slate-500" />
                    <span>{art.date}</span>
                  </span>
                  
                  <span className="font-bold text-amber-400 group-hover:text-amber-300 flex items-center gap-1.5 transition-colors">
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
