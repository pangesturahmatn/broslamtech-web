"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Lock,
  ShieldCheck,
  LogOut,
  Newspaper,
  Building2,
  Users,
  PlusCircle,
  Trash2,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  Eye,
  EyeOff,
  RefreshCw,
  Sparkles
} from "lucide-react";

export default function AdminDashboardPage() {
  // Session Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [passcode, setPasscode] = useState("");
  const [showPasscode, setShowPasscode] = useState(false);
  const [authError, setAuthError] = useState("");
  const [activeTab, setActiveTab] = useState<"news" | "portfolio" | "team">("news");

  // News States
  const [articles, setArticles] = useState<any[]>([]);
  const [loadingNews, setLoadingNews] = useState(false);
  const [newsTitle, setNewsTitle] = useState("");
  const [newsCategory, setNewsCategory] = useState("Update Fitur ERP");
  const [newsCatTag, setNewsCatTag] = useState("sistem");
  const [newsAuthor, setNewsAuthor] = useState("Tim R&D BroSlam.Tech");
  const [newsImageUrl, setNewsImageUrl] = useState("/assets/modern_workshop_hero.jpg");
  const [newsIsPromo, setNewsIsPromo] = useState(false);
  const [newsPromoBadge, setNewsPromoBadge] = useState("PROMO AKTIF");
  const [newsContent, setNewsContent] = useState("");
  const [newsSubmitting, setNewsSubmitting] = useState(false);
  const [newsMsg, setNewsMsg] = useState("");

  // Portfolio States
  const [clients, setClients] = useState<any[]>([]);
  const [loadingClients, setLoadingClients] = useState(false);
  const [clientName, setClientName] = useState("");
  const [clientCategory, setClientCategory] = useState("Spesialis Kaki-Kaki & Mesin Mobil Modern");
  const [clientLocations, setClientLocations] = useState("Jawa Tengah & Jawa Barat");
  const [clientStallCount, setClientStallCount] = useState("8+ Stall Pitstop");
  const [clientAchievement, setClientAchievement] = useState("");
  const [clientLogoBadge, setClientLogoBadge] = useState("");
  const [clientSubmitting, setClientSubmitting] = useState(false);
  const [clientMsg, setClientMsg] = useState("");

  // Team States
  const [teamMembers, setTeamMembers] = useState<any[]>([]);
  const [loadingTeam, setLoadingTeam] = useState(false);
  const [memberName, setMemberName] = useState("");
  const [memberRole, setMemberRole] = useState("VP");
  const [memberTitle, setMemberTitle] = useState("Vice President");
  const [memberCompanySubtitle, setMemberCompanySubtitle] = useState("Dewan Eksekutif — BroSlam.Tech");
  const [memberQuote, setMemberQuote] = useState("");
  const [memberAvatar, setMemberAvatar] = useState("/assets/team/fuad.jpg");
  const [memberBio, setMemberBio] = useState("");
  const [memberFocus, setMemberFocus] = useState("Operations, Growth");
  const [teamSubmitting, setTeamSubmitting] = useState(false);
  const [teamMsg, setTeamMsg] = useState("");

  // Check existing session
  useEffect(() => {
    const saved = sessionStorage.getItem("broslam_admin_session");
    if (saved === "verified") {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch data upon authentication
  useEffect(() => {
    if (isAuthenticated) {
      fetchNews();
      fetchPortfolio();
      fetchTeam();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError("");
    // Dedicated passcode protection
    if (passcode === "broslam2026" || passcode === "admin2026") {
      sessionStorage.setItem("broslam_admin_session", "verified");
      setIsAuthenticated(true);
      setPasscode("");
    } else {
      setAuthError("Kunci otorisasi salah. Silakan periksa kembali passcode admin.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("broslam_admin_session");
    setIsAuthenticated(false);
  };

  // API Call Handlers
  const fetchNews = async () => {
    setLoadingNews(true);
    try {
      const res = await fetch("/api/news");
      const json = await res.json();
      if (json.success) setArticles(json.data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingNews(false);
    }
  };

  const handleAddNews = async (e: React.FormEvent) => {
    e.preventDefault();
    setNewsSubmitting(true);
    setNewsMsg("");
    try {
      const res = await fetch("/api/news", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: newsTitle,
          category: newsCategory,
          catTag: newsCatTag,
          author: newsAuthor,
          imageUrl: newsImageUrl,
          isPromo: newsIsPromo,
          promoBadge: newsPromoBadge,
          content: newsContent,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setNewsMsg("Artikel / Promo berhasil dipublikasikan ke portal publik!");
        setNewsTitle("");
        setNewsContent("");
        fetchNews();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setNewsSubmitting(false);
    }
  };

  const handleDeleteNews = async (id: string) => {
    if (!confirm("Hapus artikel ini dari portal publik?")) return;
    try {
      await fetch(`/api/news?id=${id}`, { method: "DELETE" });
      fetchNews();
    } catch (e) {
      console.error(e);
    }
  };

  const fetchPortfolio = async () => {
    setLoadingClients(true);
    try {
      const res = await fetch("/api/portfolio");
      const json = await res.json();
      if (json.success) setClients(json.data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingClients(false);
    }
  };

  const handleAddPortfolio = async (e: React.FormEvent) => {
    e.preventDefault();
    setClientSubmitting(true);
    setClientMsg("");
    try {
      const res = await fetch("/api/portfolio", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: clientName,
          category: clientCategory,
          locations: clientLocations,
          stallCount: clientStallCount,
          achievement: clientAchievement,
          logoBadge: clientLogoBadge,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setClientMsg("Klien bengkel baru berhasil ditambahkan!");
        setClientName("");
        setClientAchievement("");
        setClientLogoBadge("");
        fetchPortfolio();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setClientSubmitting(false);
    }
  };

  const handleDeleteClient = async (id: string) => {
    if (!confirm("Hapus klien bengkel ini dari daftar portofolio?")) return;
    try {
      await fetch(`/api/portfolio?id=${id}`, { method: "DELETE" });
      fetchPortfolio();
    } catch (e) {
      console.error(e);
    }
  };

  const fetchTeam = async () => {
    setLoadingTeam(true);
    try {
      const res = await fetch("/api/team");
      const json = await res.json();
      if (json.success) setTeamMembers(json.data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingTeam(false);
    }
  };

  const handleAddTeam = async (e: React.FormEvent) => {
    e.preventDefault();
    setTeamSubmitting(true);
    setTeamMsg("");
    try {
      const res = await fetch("/api/team", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: memberName,
          role: memberRole,
          title: memberTitle,
          companySubtitle: memberCompanySubtitle,
          quote: memberQuote,
          avatar: memberAvatar,
          bio: memberBio,
          focus: memberFocus,
        }),
      });
      const json = await res.json();
      if (json.success) {
        setTeamMsg("Profil dewan eksekutif / testimoni berhasil ditambahkan!");
        setMemberName("");
        setMemberQuote("");
        setMemberBio("");
        fetchTeam();
      }
    } catch (e) {
      console.error(e);
    } finally {
      setTeamSubmitting(false);
    }
  };

  const handleDeleteTeam = async (id: string) => {
    if (!confirm("Hapus anggota tim / testimoni ini?")) return;
    try {
      await fetch(`/api/team?id=${id}`, { method: "DELETE" });
      fetchTeam();
    } catch (e) {
      console.error(e);
    }
  };

  // -------------------------------------------------------------
  // VIEW: AUTHENTICATION LOGIN GATE (Isolated, No public links)
  // -------------------------------------------------------------
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#070B14] flex items-center justify-center p-4 selection:bg-amber-400 selection:text-slate-950">
        <div className="max-w-md w-full bg-slate-900/90 border border-white/10 rounded-3xl p-8 sm:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl text-center">
          
          <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-tr from-amber-500/20 to-sky-500/20 border border-white/15 flex items-center justify-center text-amber-400 shadow-inner">
            <ShieldCheck className="w-8 h-8" />
          </div>

          <h1 className="text-2xl font-black text-white tracking-tight">
            BroSlam<span className="text-amber-400">.Tech</span>
          </h1>
          <p className="text-xs font-semibold text-slate-400 mt-1 uppercase tracking-widest">
            Internal Master Control Room
          </p>

          <p className="text-xs text-slate-300 mt-4 leading-relaxed">
            Portal ini terisolasi untuk mengelola publikasi berita, promo kuartal, portofolio bengkel rekanan, dan dewan eksekutif.
          </p>

          {authError && (
            <div className="mt-4 p-3 rounded-xl bg-red-500/10 border border-red-500/30 text-red-400 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="mt-6 space-y-4">
            <div className="relative text-left">
              <label className="block text-[11px] font-bold text-slate-300 uppercase tracking-wider mb-2">
                Kunci Otorisasi Admin
              </label>
              <div className="relative">
                <input
                  type={showPasscode ? "text" : "password"}
                  value={passcode}
                  onChange={(e) => setPasscode(e.target.value)}
                  placeholder="Ketik passcode admin..."
                  required
                  className="w-full bg-slate-950 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-amber-400 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPasscode(!showPasscode)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  {showPasscode ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-sm tracking-wide shadow-md transition-all cursor-pointer active:scale-95"
            >
              Masuk ke Panel Kontrol
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-white/10 text-center">
            <Link
              href="/"
              className="text-xs text-slate-400 hover:text-amber-400 transition-colors inline-flex items-center gap-1.5"
            >
              <span>← Kembali ke Halaman Depan Publik</span>
            </Link>
          </div>

        </div>
      </div>
    );
  }

  // -------------------------------------------------------------
  // VIEW: AUTHENTICATED ADMIN DASHBOARD
  // -------------------------------------------------------------
  return (
    <div className="min-h-screen bg-[#070B14] text-white selection:bg-amber-400 selection:text-slate-950">
      
      {/* Top Admin Navbar */}
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-400 font-bold">
              ⚡
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-black text-white text-base">BroSlam.Tech Admin</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-[10px] font-bold">
                  Sesi Terverifikasi
                </span>
              </div>
              <p className="text-[11px] text-slate-400">Pengelola Konten, Promo, Klien & Testimoni</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/"
              target="_blank"
              className="px-3.5 py-1.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-xs text-slate-300 hover:text-white transition-all flex items-center gap-1.5"
            >
              <span>Lihat Web Publik</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>

            <button
              type="button"
              onClick={handleLogout}
              className="px-3.5 py-1.5 rounded-full bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-xs text-red-400 hover:text-red-300 transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Keluar Sesi</span>
            </button>
          </div>

        </div>
      </header>

      {/* Main Workspace */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Navigation Tabs */}
        <div className="flex items-center gap-2 border-b border-white/10 pb-4 mb-8 overflow-x-auto">
          <button
            type="button"
            onClick={() => setActiveTab("news")}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === "news"
                ? "bg-amber-400 text-slate-950 shadow-md"
                : "bg-white/5 text-slate-300 hover:bg-white/10"
            }`}
          >
            <Newspaper className="w-4 h-4" />
            <span>Berita & Promo ({articles.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("portfolio")}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === "portfolio"
                ? "bg-amber-400 text-slate-950 shadow-md"
                : "bg-white/5 text-slate-300 hover:bg-white/10"
            }`}
          >
            <Building2 className="w-4 h-4" />
            <span>Klien Portofolio ({clients.length})</span>
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("team")}
            className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === "team"
                ? "bg-amber-400 text-slate-950 shadow-md"
                : "bg-white/5 text-slate-300 hover:bg-white/10"
            }`}
          >
            <Users className="w-4 h-4" />
            <span>Dewan Tim & Testimoni ({teamMembers.length})</span>
          </button>
        </div>

        {/* ============================================================ */}
        {/* TAB 1: NEWS & PROMO MANAGEMENT                               */}
        {/* ============================================================ */}
        {activeTab === "news" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Form */}
            <div className="lg:col-span-5 bg-slate-900/80 border border-white/10 rounded-2xl p-6">
              <h2 className="text-base font-bold text-white flex items-center gap-2 mb-4">
                <PlusCircle className="w-4 h-4 text-amber-400" />
                <span>Publikasikan Berita / Promo Baru</span>
              </h2>

              {newsMsg && (
                <div className="mb-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{newsMsg}</span>
                </div>
              )}

              <form onSubmit={handleAddNews} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1.5">
                    Judul Artikel / Promo *
                  </label>
                  <input
                    type="text"
                    value={newsTitle}
                    onChange={(e) => setNewsTitle(e.target.value)}
                    placeholder="Contoh: Diskon Onboarding Q4 & Bebas Migrasi Excel..."
                    required
                    className="w-full bg-slate-950 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1.5">
                      Kategori
                    </label>
                    <select
                      value={newsCategory}
                      onChange={(e) => setNewsCategory(e.target.value)}
                      className="w-full bg-slate-950 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="Update Fitur ERP">Update Fitur ERP</option>
                      <option value="Promo Spesial">Promo Spesial</option>
                      <option value="Manajemen & Finansial">Manajemen & Finansial</option>
                      <option value="Marketing & Retensi">Marketing & Retensi</option>
                      <option value="Teknologi & Cloud">Teknologi & Cloud</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1.5">
                      Penulis
                    </label>
                    <input
                      type="text"
                      value={newsAuthor}
                      onChange={(e) => setNewsAuthor(e.target.value)}
                      className="w-full bg-slate-950 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>
                </div>

                <div className="p-3 bg-white/5 border border-white/10 rounded-xl space-y-2">
                  <label className="flex items-center gap-2 text-xs font-semibold text-slate-200 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={newsIsPromo}
                      onChange={(e) => setNewsIsPromo(e.target.checked)}
                      className="rounded accent-amber-400"
                    />
                    <span>Tandai sebagai Promo Spesial / Banner Highlight</span>
                  </label>

                  {newsIsPromo && (
                    <input
                      type="text"
                      value={newsPromoBadge}
                      onChange={(e) => setNewsPromoBadge(e.target.value)}
                      placeholder="Teks Badge: PROMO Q4 2026"
                      className="w-full bg-slate-950 border border-white/15 rounded-lg px-3 py-1.5 text-xs text-amber-300 focus:outline-none"
                    />
                  )}
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1.5">
                    URL Gambar Cover
                  </label>
                  <input
                    type="text"
                    value={newsImageUrl}
                    onChange={(e) => setNewsImageUrl(e.target.value)}
                    className="w-full bg-slate-950 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400 font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1.5">
                    Konten Lengkap *
                  </label>
                  <textarea
                    rows={5}
                    value={newsContent}
                    onChange={(e) => setNewsContent(e.target.value)}
                    placeholder="Tuliskan ulasan lengkap, poin penawaran promo, syarat ketentuan..."
                    required
                    className="w-full bg-slate-950 border border-white/15 rounded-xl p-3 text-xs text-white focus:outline-none focus:border-amber-400 leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={newsSubmitting}
                  className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs tracking-wide transition-all shadow-md active:scale-95 disabled:opacity-50"
                >
                  {newsSubmitting ? "Memproses..." : "Publikasikan Sekarang"}
                </button>
              </form>
            </div>

            {/* List */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-200">
                  Daftar Berita & Promo Tayang ({articles.length})
                </h3>
                <button
                  onClick={fetchNews}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>

              {articles.map((item) => (
                <div
                  key={item.id}
                  className="bg-slate-900/60 border border-white/10 rounded-2xl p-4 flex items-start justify-between gap-4"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-white/10 text-slate-300">
                        {item.category}
                      </span>
                      {item.isPromo && (
                        <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-amber-400/20 text-amber-300 border border-amber-400/30">
                          {item.promoBadge || "PROMO"}
                        </span>
                      )}
                      <span className="text-[10px] text-slate-400">{item.date}</span>
                    </div>

                    <h4 className="text-sm font-bold text-white hover:text-amber-400 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-400 line-clamp-2">{item.content}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDeleteNews(item.id)}
                    className="p-2 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all cursor-pointer shrink-0"
                    title="Hapus Artikel"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 2: PORTFOLIO CLIENT MANAGEMENT                          */}
        {/* ============================================================ */}
        {activeTab === "portfolio" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Form */}
            <div className="lg:col-span-5 bg-slate-900/80 border border-white/10 rounded-2xl p-6">
              <h2 className="text-base font-bold text-white flex items-center gap-2 mb-4">
                <PlusCircle className="w-4 h-4 text-amber-400" />
                <span>Tambah Klien Portofolio Bengkel Baru</span>
              </h2>

              {clientMsg && (
                <div className="mb-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{clientMsg}</span>
                </div>
              )}

              <form onSubmit={handleAddPortfolio} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1.5">
                    Nama Bengkel Rekanan *
                  </label>
                  <input
                    type="text"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    placeholder="Contoh: Bengkel Mobil Sejahtera..."
                    required
                    className="w-full bg-slate-950 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1.5">
                    Kategori / Spesialisasi
                  </label>
                  <input
                    type="text"
                    value={clientCategory}
                    onChange={(e) => setClientCategory(e.target.value)}
                    placeholder="Spesialis Kaki-Kaki, Transmisi & AC..."
                    className="w-full bg-slate-950 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1.5">
                      Lokasi / Kota
                    </label>
                    <input
                      type="text"
                      value={clientLocations}
                      onChange={(e) => setClientLocations(e.target.value)}
                      placeholder="Kota Semarang, Purwokerto..."
                      className="w-full bg-slate-950 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1.5">
                      Jumlah Stall Pitstop
                    </label>
                    <input
                      type="text"
                      value={clientStallCount}
                      onChange={(e) => setClientStallCount(e.target.value)}
                      placeholder="12+ Stall Pitstop"
                      className="w-full bg-slate-950 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1.5">
                    Logo / Singkatan Badge
                  </label>
                  <input
                    type="text"
                    value={clientLogoBadge}
                    onChange={(e) => setClientLogoBadge(e.target.value)}
                    placeholder="SEJAHTERA"
                    className="w-full bg-slate-950 border border-white/15 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1.5">
                    Pencapaian / Dampak Operasional *
                  </label>
                  <textarea
                    rows={4}
                    value={clientAchievement}
                    onChange={(e) => setClientAchievement(e.target.value)}
                    placeholder="Contoh: Otomasi antrean pitstop dan penurunan kebocoran sparepart modal FIFO 0%..."
                    required
                    className="w-full bg-slate-950 border border-white/15 rounded-xl p-3 text-xs text-white focus:outline-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={clientSubmitting}
                  className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs tracking-wide transition-all shadow-md active:scale-95 disabled:opacity-50"
                >
                  {clientSubmitting ? "Menyimpan..." : "Simpan Klien Portofolio"}
                </button>
              </form>
            </div>

            {/* List */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-200">
                  Daftar Klien Rekanan ({clients.length})
                </h3>
                <button
                  onClick={fetchPortfolio}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>

              {clients.map((c) => (
                <div
                  key={c.id}
                  className="bg-slate-900/60 border border-white/10 rounded-2xl p-4 flex items-start justify-between gap-4"
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-amber-400 px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                        {c.logoBadge}
                      </span>
                      <span className="text-xs text-slate-300 font-medium">{c.locations}</span>
                      <span className="text-[11px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">
                        {c.stallCount}
                      </span>
                    </div>

                    <h4 className="text-sm font-bold text-white">{c.name}</h4>
                    <p className="text-xs text-slate-400">{c.achievement}</p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDeleteClient(c.id)}
                    className="p-2 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all cursor-pointer shrink-0"
                    title="Hapus Klien"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 3: EXECUTIVE TEAM & TESTIMONIAL MANAGEMENT              */}
        {/* ============================================================ */}
        {activeTab === "team" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Form */}
            <div className="lg:col-span-5 bg-slate-900/80 border border-white/10 rounded-2xl p-6">
              <h2 className="text-base font-bold text-white flex items-center gap-2 mb-4">
                <PlusCircle className="w-4 h-4 text-amber-400" />
                <span>Tambah / Update Anggota Tim Eksekutif</span>
              </h2>

              {teamMsg && (
                <div className="mb-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 shrink-0" />
                  <span>{teamMsg}</span>
                </div>
              )}

              <form onSubmit={handleAddTeam} className="space-y-4">
                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1.5">
                    Nama Lengkap & Gelar *
                  </label>
                  <input
                    type="text"
                    value={memberName}
                    onChange={(e) => setMemberName(e.target.value)}
                    placeholder="Contoh: Utomo Nugroho..."
                    required
                    className="w-full bg-slate-950 border border-white/15 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1.5">
                      Role Singkat (Badge)
                    </label>
                    <input
                      type="text"
                      value={memberRole}
                      onChange={(e) => setMemberRole(e.target.value)}
                      placeholder="COO / CEO / CTO"
                      className="w-full bg-slate-950 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1.5">
                      Jabatan Formal
                    </label>
                    <input
                      type="text"
                      value={memberTitle}
                      onChange={(e) => setMemberTitle(e.target.value)}
                      placeholder="Chief Operating Officer"
                      className="w-full bg-slate-950 border border-white/15 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1.5">
                    Subtitle Perusahaan
                  </label>
                  <input
                    type="text"
                    value={memberCompanySubtitle}
                    onChange={(e) => setMemberCompanySubtitle(e.target.value)}
                    placeholder="Direktur Operasional — BroSlam.Tech"
                    className="w-full bg-slate-950 border border-white/15 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1.5">
                    URL Foto Portrait Avatar *
                  </label>
                  <input
                    type="text"
                    value={memberAvatar}
                    onChange={(e) => setMemberAvatar(e.target.value)}
                    placeholder="/assets/team/utomo.jpg"
                    required
                    className="w-full bg-slate-950 border border-white/15 rounded-xl px-3.5 py-2 text-xs text-white focus:outline-none font-mono"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-bold text-slate-300 uppercase mb-1.5">
                    Kutipan Testimoni / Visi Kepemimpinan *
                  </label>
                  <textarea
                    rows={4}
                    value={memberQuote}
                    onChange={(e) => setMemberQuote(e.target.value)}
                    placeholder="Tuliskan komitmen, kutipan visi atau testimoni operasional bengkel..."
                    required
                    className="w-full bg-slate-950 border border-white/15 rounded-xl p-3 text-xs text-white focus:outline-none leading-relaxed"
                  />
                </div>

                <button
                  type="submit"
                  disabled={teamSubmitting}
                  className="w-full py-3 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs tracking-wide transition-all shadow-md active:scale-95 disabled:opacity-50"
                >
                  {teamSubmitting ? "Menyimpan..." : "Simpan Dewan Eksekutif"}
                </button>
              </form>
            </div>

            {/* List */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-bold text-slate-200">
                  Daftar Dewan Eksekutif & Testimoni ({teamMembers.length})
                </h3>
                <button
                  onClick={fetchTeam}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>

              {teamMembers.map((m) => (
                <div
                  key={m.id}
                  className="bg-slate-900/60 border border-white/10 rounded-2xl p-5 flex items-start gap-4"
                >
                  <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-amber-400/50 shrink-0 bg-slate-800">
                    <Image
                      src={m.avatar}
                      alt={m.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>

                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-2">
                      <h4 className="text-sm font-bold text-white">{m.name}</h4>
                      <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-amber-400 text-slate-950">
                        {m.role}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400">{m.companySubtitle}</p>
                    <p className="text-xs text-slate-300 italic pt-1 leading-relaxed">
                      &ldquo;{m.quote}&rdquo;
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => handleDeleteTeam(m.id)}
                    className="p-2 rounded-xl text-red-400 hover:bg-red-500/10 hover:text-red-300 transition-all cursor-pointer shrink-0"
                    title="Hapus Profil"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>

    </div>
  );
}
