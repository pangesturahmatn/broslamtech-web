"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { Newspaper, ArrowRight, Calendar, User, ArrowLeft, Tag } from "lucide-react";
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
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors flex flex-col justify-between selection:bg-amber-500 selection:text-slate-950">
      <Navbar />

      <main className="pt-28 pb-20 flex-1">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Header */}
          <div className="space-y-4 max-w-3xl">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-bold transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Beranda BroSlam.Tech</span>
            </Link>

            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Portal Wawasan, Berita &amp; Promo BroSlam.Tech
            </h1>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Pusat edukasi manajemen otomotif, arsitektur ERP bengkel, pembaruan rilis sistem, dan penawaran promo resmi.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-900">
            <button
              onClick={() => setSelectedCat("all")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCat === "all"
                  ? "bg-amber-400 text-slate-950 font-black shadow-md"
                  : "bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
              }`}
            >
              Semua Kabar ({articles.length})
            </button>
            <button
              onClick={() => setSelectedCat("promo")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCat === "promo"
                  ? "bg-amber-400 text-slate-950 font-black shadow-md"
                  : "bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
              }`}
            >
              🔥 Promo Spesial
            </button>
            <button
              onClick={() => setSelectedCat("sistem")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCat === "sistem"
                  ? "bg-amber-400 text-slate-950 font-black shadow-md"
                  : "bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
              }`}
            >
              Update Fitur ERP
            </button>
            <button
              onClick={() => setSelectedCat("bisnis")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCat === "bisnis"
                  ? "bg-amber-400 text-slate-950 font-black shadow-md"
                  : "bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
              }`}
            >
              Manajemen &amp; Finansial
            </button>
            <button
              onClick={() => setSelectedCat("marketing")}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                selectedCat === "marketing"
                  ? "bg-amber-400 text-slate-950 font-black shadow-md"
                  : "bg-slate-900 text-slate-300 hover:text-white border border-slate-800"
              }`}
            >
              Marketing &amp; Retensi
            </button>
          </div>

          {/* Grid of Articles */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((art) => (
              <Link
                key={art.id}
                href={`/blog/${art.id}`}
                className="rounded-3xl bg-slate-900/80 border border-slate-800 hover:border-slate-700 p-6 flex flex-col justify-between transition-all group shadow-xl"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-1 rounded-full bg-slate-800 text-amber-300 font-bold border border-slate-700">
                      {art.category}
                    </span>
                    {art.isPromo && (
                      <span className="px-2.5 py-1 rounded-full bg-rose-500/20 text-rose-300 font-black border border-rose-500/30">
                        {art.promoBadge || "PROMO"}
                      </span>
                    )}
                  </div>
                  <h3 className="text-base font-black text-white group-hover:text-amber-300 transition-colors leading-snug">
                    {art.title}
                  </h3>
                  <div
                    className="text-xs text-slate-400 line-clamp-3 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: art.content }}
                  />
                </div>

                <div className="pt-6 border-t border-slate-800/80 flex items-center justify-between text-xs text-slate-400 mt-6">
                  <span>{art.date}</span>
                  <span className="font-bold text-amber-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                    <span>Baca Selengkapnya</span>
                    <ArrowRight className="w-3.5 h-3.5" />
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
