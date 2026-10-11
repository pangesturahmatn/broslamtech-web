"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Newspaper, ArrowRight, Calendar, User, Tag, PlusCircle } from "lucide-react";
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
    <section id="portal-berita" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-black tracking-widest uppercase">
            <Newspaper className="w-3.5 h-3.5" />
            <span>PORTAL INFORMASI &amp; MEDIA RESMI</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Kabar Terkini, Wawasan &amp; Update Promo BroSlam.Tech
          </h2>
          <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
            Edukasi strategis manajemen bengkel, rilis arsitektur fitur terbaru, serta penawaran promo akselerasi digital.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => setSelectedCat("all")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedCat === "all"
                ? "bg-amber-400 text-slate-950 font-black shadow-md shadow-amber-500/20"
                : "bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
            }`}
          >
            Semua Kabar ({articles.length})
          </button>
          <button
            onClick={() => setSelectedCat("promo")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedCat === "promo"
                ? "bg-amber-400 text-slate-950 font-black shadow-md shadow-amber-500/20"
                : "bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
            }`}
          >
            🔥 Promo Spesial
          </button>
          <button
            onClick={() => setSelectedCat("sistem")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedCat === "sistem"
                ? "bg-amber-400 text-slate-950 font-black shadow-md shadow-amber-500/20"
                : "bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
            }`}
          >
            Update Fitur ERP
          </button>
          <button
            onClick={() => setSelectedCat("bisnis")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedCat === "bisnis"
                ? "bg-amber-400 text-slate-950 font-black shadow-md shadow-amber-500/20"
                : "bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
            }`}
          >
            Manajemen &amp; Finansial
          </button>
          <button
            onClick={() => setSelectedCat("marketing")}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedCat === "marketing"
                ? "bg-amber-400 text-slate-950 font-black shadow-md shadow-amber-500/20"
                : "bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
            }`}
          >
            Marketing &amp; Retensi
          </button>
        </div>

        {/* News Grid (Links directly to /blog/[id]) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {filtered.map((art) => (
            <Link
              key={art.id}
              href={`/blog/${art.id}`}
              className={`rounded-3xl p-5 flex flex-col justify-between transition-all group ${
                art.isPromo
                  ? "bg-gradient-to-b from-slate-900 to-slate-950 border-2 border-amber-500/40 shadow-xl hover:border-amber-400"
                  : "bg-slate-900/80 border border-slate-800 hover:border-slate-700 shadow-lg"
              }`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-[11px]">
                  <span className="px-2 py-0.5 rounded-full bg-slate-800 text-amber-300 font-bold border border-slate-700">
                    {art.category}
                  </span>
                  {art.isPromo && (
                    <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-black text-[10px] border border-rose-500/30">
                      {art.promoBadge || "PROMO"}
                    </span>
                  )}
                </div>
                <h3 className="text-sm font-black text-white group-hover:text-amber-300 transition-colors leading-snug">
                  {art.title}
                </h3>
                <div
                  className="text-xs text-slate-400 line-clamp-3 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: art.content }}
                />
              </div>

              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-[11px] mt-4">
                <span className="text-slate-400">
                  {art.date}
                </span>
                <span className="font-black text-amber-400 group-hover:text-amber-300 flex items-center gap-1 transition-colors">
                  <span>Baca Artikel</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        </div>
    </section>
  );
}
