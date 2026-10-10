"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { PlusCircle, Newspaper, Tag, Send, CheckCircle2, ArrowLeft, RefreshCw } from "lucide-react";

export default function AdminBlogPage() {
  const [articles, setArticles] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  // Form states
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Update Fitur ERP");
  const [catTag, setCatTag] = useState("sistem");
  const [author, setAuthor] = useState("Tim R&D BroSlam.Tech");
  const [imageUrl, setImageUrl] = useState("/assets/modern_workshop_hero.jpg");
  const [isPromo, setIsPromo] = useState(false);
  const [promoBadge, setPromoBadge] = useState("PROMO AKTIF");
  const [content, setContent] = useState("");

  const fetchArticles = async () => {
    try {
      const res = await fetch("/api/news");
      const json = await res.json();
      if (json.success) {
        setArticles(json.data);
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMsg("");

    try {
      const res = await fetch("/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          category,
          catTag,
          author,
          imageUrl,
          isPromo,
          promoBadge,
          content: `<p>${content.replace(/\n/g, "</p><p>")}</p>`,
        }),
      });

      const json = await res.json();
      if (json.success) {
        setSuccessMsg("Artikel / Promo berhasil dipublikasikan secara dinamis!");
        setTitle("");
        setContent("");
        setIsPromo(false);
        fetchArticles();
      } else {
        alert("Gagal: " + json.error);
      }
    } catch (err: any) {
      alert("Error: " + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-4 sm:p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Top Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-800">
          <div className="space-y-1">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-bold mb-2 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Beranda BroSlam.Tech</span>
            </Link>
            <h1 className="text-2xl sm:text-3xl font-black text-white flex items-center gap-2">
              <Newspaper className="w-7 h-7 text-amber-400" />
              <span>Panel Manajemen Dinamis: Berita, Wawasan &amp; Promo</span>
            </h1>
            <p className="text-xs text-slate-400">
              Kelola postingan portal broslamtech.com secara dinamis tanpa perlu edit kode HTML manual.
            </p>
          </div>

          <button
            onClick={fetchArticles}
            className="self-start sm:self-center px-4 py-2 rounded-xl bg-slate-850 hover:bg-slate-800 border border-slate-700 text-xs font-bold text-slate-300 flex items-center gap-2 cursor-pointer transition-colors"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span>Segarkan Data</span>
          </button>
        </div>

        {successMsg && (
          <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-bold flex items-center gap-2 animate-in fade-in">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" />
            <span>{successMsg}</span>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Form input (Left Column) */}
          <div className="lg:col-span-5 bg-slate-900 border border-slate-800 rounded-3xl p-6 space-y-5">
            <h3 className="text-base font-black text-white flex items-center gap-2">
              <PlusCircle className="w-4 h-4 text-amber-400" />
              <span>Tambah Berita / Promo Baru</span>
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block text-slate-300 font-bold mb-1">Judul Artikel / Promo *</label>
                <input
                  type="text"
                  required
                  placeholder="Contoh: Promo Spesial Pembukaan Cabang Baru..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-slate-300 font-bold mb-1">Kategori</label>
                  <select
                    value={category}
                    onChange={(e) => {
                      setCategory(e.target.value);
                      if (e.target.value.includes("Promo")) {
                        setCatTag("promo");
                        setIsPromo(true);
                      } else if (e.target.value.includes("Sistem")) {
                        setCatTag("sistem");
                      } else if (e.target.value.includes("Finansial")) {
                        setCatTag("bisnis");
                      } else {
                        setCatTag("marketing");
                      }
                    }}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value="Update Fitur ERP">Update Fitur ERP</option>
                    <option value="Promo Spesial">Promo Spesial</option>
                    <option value="Manajemen & Finansial">Manajemen & Finansial</option>
                    <option value="Marketing & Retensi">Marketing & Retensi</option>
                  </select>
                </div>

                <div>
                  <label className="block text-slate-300 font-bold mb-1">Penulis</label>
                  <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400"
                  />
                </div>
              </div>

              {/* Promo Switch */}
              <div className="p-3 rounded-2xl bg-slate-950 border border-slate-800 space-y-2">
                <label className="flex items-center gap-2 cursor-pointer font-bold text-amber-300">
                  <input
                    type="checkbox"
                    checked={isPromo}
                    onChange={(e) => setIsPromo(e.target.checked)}
                    className="rounded accent-amber-400"
                  />
                  <span>Tandai Sebagai Promo Spesial / Banner Highlight</span>
                </label>
                {isPromo && (
                  <input
                    type="text"
                    placeholder="Badge Promo (contoh: DISKON 25% Q4)"
                    value={promoBadge}
                    onChange={(e) => setPromoBadge(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-800 text-xs text-white"
                  />
                )}
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">URL Gambar Cover</label>
                <input
                  type="text"
                  placeholder="/assets/modern_workshop_hero.jpg atau link gambar"
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-slate-300 font-bold mb-1">Konten Teks Lengkap *</label>
                <textarea
                  required
                  rows={5}
                  placeholder="Tuliskan isi informasi, ketentuan promo, atau artikel wawasan di sini..."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-white focus:outline-none focus:border-amber-400"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full py-3 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-xs shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{submitting ? "Memproses..." : "Publikasikan Sekarang"}</span>
              </button>
            </form>
          </div>

          {/* List of articles (Right Column) */}
          <div className="lg:col-span-7 space-y-4">
            <h3 className="text-base font-black text-white">
              Daftar Artikel &amp; Promo Aktif ({articles.length})
            </h3>

            {loading ? (
              <div className="p-8 text-center text-slate-400 text-xs">Memuat daftar artikel...</div>
            ) : (
              <div className="space-y-3">
                {articles.map((item) => (
                  <div
                    key={item.id}
                    className="rounded-2xl bg-slate-900/80 border border-slate-800 p-4 flex items-start gap-4 hover:border-slate-700 transition-all"
                  >
                    <div className="space-y-1.5 flex-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded-full bg-slate-800 text-amber-300 font-bold text-[10px] border border-slate-700">
                          {item.category}
                        </span>
                        {item.isPromo && (
                          <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 font-black text-[10px] border border-rose-500/30">
                            {item.promoBadge || "PROMO"}
                          </span>
                        )}
                        <span className="text-slate-400 text-[10px]">
                          {item.date} • {item.author}
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white leading-snug">
                        {item.title}
                      </h4>
                      <div
                        className="text-xs text-slate-400 line-clamp-2"
                        dangerouslySetInnerHTML={{ __html: item.content }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
