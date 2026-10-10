"use client";

import React, { useState } from "react";
import { newsArticlesData, NewsArticle } from "../data/news-articles";
import { Newspaper, ArrowRight, Calendar, User, X } from "lucide-react";

export default function NewsPortal() {
  const [selectedCat, setSelectedCat] = useState<string>("all");
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);

  const filtered = selectedCat === "all"
    ? newsArticlesData
    : newsArticlesData.filter((a) => a.catTag === selectedCat);

  return (
    <section id="portal-berita" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-black tracking-widest uppercase">
            <Newspaper className="w-3.5 h-3.5" />
            <span>PORTAL INFORMASI &amp; MEDIA RESMI</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Kabar Terkini, Wawasan &amp; Update Sistem BroSlam.Tech
          </h2>
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
            Edukasi strategis manajemen bengkel, rilis arsitektur fitur terbaru, serta wawasan profitabilitas multi-cabang terpercaya.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-10">
          <button
            onClick={() => setSelectedCat("all")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedCat === "all"
                ? "bg-amber-500 text-slate-950 font-black shadow-md shadow-amber-500/20"
                : "bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
            }`}
          >
            Semua Kabar
          </button>
          <button
            onClick={() => setSelectedCat("sistem")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedCat === "sistem"
                ? "bg-amber-500 text-slate-950 font-black shadow-md shadow-amber-500/20"
                : "bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
            }`}
          >
            Update Fitur ERP
          </button>
          <button
            onClick={() => setSelectedCat("bisnis")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedCat === "bisnis"
                ? "bg-amber-500 text-slate-950 font-black shadow-md shadow-amber-500/20"
                : "bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
            }`}
          >
            Manajemen &amp; Finansial
          </button>
          <button
            onClick={() => setSelectedCat("marketing")}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
              selectedCat === "marketing"
                ? "bg-amber-500 text-slate-950 font-black shadow-md shadow-amber-500/20"
                : "bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
            }`}
          >
            Marketing &amp; Retensi
          </button>
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {filtered.map((art, idx) => (
            <article
              key={idx}
              className="rounded-3xl bg-slate-900/80 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-all group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2.5 py-1 rounded-full bg-slate-800 text-amber-300 font-bold border border-slate-700">
                    {art.category}
                  </span>
                  <span className="text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {art.date}
                  </span>
                </div>
                <h3 className="text-base font-black text-white group-hover:text-amber-300 transition-colors leading-snug">
                  {art.title}
                </h3>
                <div
                  className="text-xs text-slate-400 line-clamp-3 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: art.content }}
                />
              </div>

              <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs mt-6">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <User className="w-3.5 h-3.5 text-slate-400" />
                  <span>{art.author}</span>
                </span>
                <button
                  type="button"
                  onClick={() => setActiveArticle(art)}
                  className="font-black text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Baca</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Submission Banner */}
        <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-base font-black text-white">
              Punya Wawasan atau Rilis Update Baru?
            </h4>
            <p className="text-xs text-slate-400 mt-1 max-w-2xl leading-relaxed">
              Tim Customer Service &amp; Administrator dapat mengajukan artikel panduan atau berita bengkel langsung ke portal resmi broslamtech.com.
            </p>
          </div>
          <a
            href="https://wa.me/6281359433350?text=Halo%20Tim%20BroSlam.Tech,%20saya%20ingin%20mengirimkan%20konten%20artikel%20berita%20untuk%20portal%20broslamtech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 px-5 py-3 rounded-2xl bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 text-xs font-bold transition-all flex items-center gap-2 cursor-pointer shadow-md"
          >
            <span>✍️ Kirim Berita / Konten Manual</span>
          </a>
        </div>

      </div>

      {/* Article Detail Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-5 text-slate-100 max-h-[90vh] overflow-y-auto">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-full border border-amber-500/20">
                  {activeArticle.category}
                </span>
                <h3 className="text-xl font-black text-white mt-2 leading-tight">
                  {activeArticle.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-slate-400 mt-2">
                  <span>📅 {activeArticle.date}</span>
                  <span>•</span>
                  <span>✍️ {activeArticle.author}</span>
                </div>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div
              className="text-xs sm:text-sm text-slate-300 leading-relaxed space-y-3 pt-3 border-t border-slate-800 prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: activeArticle.content }}
            />

            <div className="pt-4 flex justify-end">
              <button
                onClick={() => setActiveArticle(null)}
                className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-300 cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
