"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Monitor, Tv, Smartphone, Lock, ShieldCheck, CheckCircle2 } from "lucide-react";

interface TabItem {
  id: string;
  label: string;
  icon: React.ElementType;
  url: string;
  imgSrc: string;
  title: string;
  desc: string;
}

const tabs: TabItem[] = [
  {
    id: "desktop",
    label: "Dashboard Pusat Multi-Cabang",
    icon: Monitor,
    url: "https://broslamtech.com/owner",
    imgSrc: "/assets/erp-desktop-dashboard.jpg",
    title: "Kendali Eksekutif dari Layar Desktop & Laptop",
    desc: "Akses lengkap untuk Owner, Kepala Cabang, dan Tim Akuntansi. Pantau konsolidasi omset, laba kotor HPP FIFO, otorisasi diskon, dan jurnal neraca secara live.",
  },
  {
    id: "tv",
    label: "TV Monitor Stall Mekanik",
    icon: Tv,
    url: "https://broslamtech.com/tv-stall",
    imgSrc: "/assets/erp-tv-stall.jpg",
    title: "Display Antrean Stall & Monitor Ruang Tunggu",
    desc: "Dirancang optimal untuk layar Smart TV Android di ruang tunggu pelanggan dan area pitstop mekanik. Menampilkan progress pengerjaan unit secara transparan.",
  },
  {
    id: "mobile",
    label: "Form Digital Mobile SA",
    icon: Smartphone,
    url: "https://broslamtech.com/sa-mobile",
    imgSrc: "/assets/erp-mobile-sa.jpg",
    title: "Kecepatan Service Advisor Langsung di Depan Mobil",
    desc: "Checklist baret fisik 360°, foto kilometer, keluhan pelanggan, dan estimasi biaya langsung jadi di HP/tablet SA dalam 3 menit tanpa kertas.",
  },
];

export default function DeviceShowcase() {
  const [activeTab, setActiveTab] = useState<string>("desktop");
  const current = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section id="showcase" className="py-12 sm:py-16 bg-slate-50 dark:bg-slate-900 relative overflow-hidden border-b border-slate-200 dark:border-slate-800 transition-colors">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2 mb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-50 dark:bg-slate-900 border border-amber-200 dark:border-slate-800 text-amber-700 dark:text-amber-400 text-xs font-bold tracking-widest uppercase">
            <span>ANTARMUKA SISTEM ENTERPRISE</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Didesain untuk Efisiensi Eksekutif &amp; Kecepatan Staf Lapangan
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
            Tampilan dashboard responsif dan nyaman digunakan di berbagai perangkat bengkel: dari layar PC kasir, TV display stall, hingga HP Service Advisor.
          </p>
        </div>

        {/* Tab Switchers */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-6">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  isActive
                    ? "bg-amber-500 text-slate-950 shadow-lg shadow-amber-500/25 scale-102"
                    : "bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 hover:bg-slate-100 border border-slate-200 dark:border-slate-800 shadow-xs"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-slate-950" : "text-amber-400"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Window Device Mockup */}
        <div className="relative rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl overflow-hidden">
          {/* Top Browser Bar */}
          <div className="flex items-center justify-between px-5 py-3.5 bg-slate-100 dark:bg-slate-950/90 border-b border-slate-200 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
            </div>
            <div className="flex items-center gap-2 px-4 py-1 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 text-xs font-mono">
              <Lock className="w-3 h-3 text-emerald-400" />
              <span className="text-slate-700 dark:text-slate-300">{current.url}</span>
            </div>
            <div className="w-12"></div>
          </div>

          {/* Screenshot Display */}
          <div className="relative aspect-video sm:aspect-21/9 w-full bg-slate-950 overflow-hidden">
            <Image
              src={current.imgSrc}
              alt={current.title}
              fill
              className="object-cover object-top transition-all duration-500"
            />
          </div>

          {/* Bottom Bar Info */}
          <div className="p-6 bg-white dark:bg-slate-900/95 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>{current.title}</span>
              </h4>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 max-w-3xl leading-relaxed">
                {current.desc}
              </p>
            </div>
            <a
              href="https://wa.me/6281359433350?text=Halo%20Tim%20BroSlam.Tech,%20saya%20tertarik%20melihat%20demo%20tampilan%20sistem%20bengkel"
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-5 py-2.5 rounded-xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 text-xs font-black shadow-md transition-all self-start md:self-center"
            >
              Minta Demo Langsung
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
