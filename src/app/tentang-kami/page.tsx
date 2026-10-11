"use client";

import React from "react";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import TeamSection from "../../components/TeamSection";
import PortfolioSection from "../../components/PortfolioSection";
import AppWarrantySection from "../../components/AppWarrantySection";
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2, PhoneCall } from "lucide-react";

export default function TentangKamiPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors selection:bg-amber-500 selection:text-slate-950">
      <Navbar />

      <main className="pt-20 sm:pt-24">
        {/* Hero About */}
        <section className="pt-6 pb-3 sm:pt-8 sm:pb-4 bg-slate-50 dark:bg-slate-950 relative overflow-hidden transition-colors">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3.5">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>PROFIL PERUSAHAAN &amp; KEPEMIMPINAN</span>
            </div>
            
            <h1 className="text-2xl sm:text-4xl lg:text-[40px] font-extrabold text-slate-900 dark:text-white tracking-tight leading-snug sm:leading-tight max-w-4xl mx-auto [text-wrap:balance]">
              Membangun Ekosistem Digital Bengkel Mobil Paling Tangguh di Indonesia.
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-normal sm:leading-relaxed">
              BroSlam.Tech lahir dari peleburan dua nama gunung legendaris di Pulau Jawa: <strong>Gunung Bromo &amp; Gunung Slamet</strong>. 
              Melambangkan keteguhan fondasi sistem yang tidak goyah saat menghadapi fluktuasi ekonomi, volume servis padat, maupun ekspansi puluhan cabang bengkel.
            </p>
          </div>
        </section>

        {/* 1. Dewan Eksekutif 4 Orang */}
        <TeamSection />

        {/* 2. Portofolio Bengkel Terkemuka */}
        <PortfolioSection />

        {/* 3. 5 Halaman Transformasi & Jaminan Warranty */}
        <AppWarrantySection />

        {/* Bottom CTA */}
        <section className="py-8 sm:py-10 bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 text-center transition-colors">
          <div className="max-w-3xl mx-auto px-4 space-y-6">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Siap Membawa Bengkel Mobil Anda Naik Kelas?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Diskusikan kebutuhan manajemen multi-cabang, alur SOP bengkel, dan integrasi WhatsApp langsung dengan jajaran eksekutif BroSlam.Tech.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <a
                href="https://wa.me/6281359433350?text=Halo%20Pak%20Tomo%20%26%20Tim%20BroSlam.Tech,%20saya%20tertarik%20berdiskusi%20kemitraan%20bengkel"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-xs tracking-wide shadow-xl shadow-amber-500/25 flex items-center gap-2 cursor-pointer transition-all"
              >
                <span>Hubungi Kami via WhatsApp</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <Link
                href="/"
                className="px-6 py-3.5 rounded-2xl bg-slate-800 hover:bg-slate-750 text-slate-200 border border-slate-700 font-bold text-xs transition-all"
              >
                Lihat Semua Fitur
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
