"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MessageSquare, ExternalLink, ShieldCheck, CreditCard } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          
          {/* Brand Info */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-3">
              <div className="relative w-9 h-9 rounded-xl overflow-hidden shadow-md shadow-blue-500/20 bg-slate-900 flex items-center justify-center border border-slate-800">
                <Image
                  src="/assets/broslam-globe-logo.png"
                  alt="BroSlam.Tech Logo"
                  width={36}
                  height={36}
                  className="object-contain"
                />
              </div>
              <div className="text-lg font-black text-white tracking-tight">
                BroSlam<span className="text-amber-400">.Tech</span>
              </div>
            </div>
            <p className="text-xs leading-relaxed text-slate-400">
              Super Platform Digital untuk Pemilik &amp; Manajemen Multi-Cabang Bengkel Mobil di Indonesia. Terinspirasi dari keteguhan Gunung Bromo &amp; Gunung Slamet, mengakselerasi profit bertumbuh ke atas.
            </p>
          </div>

          {/* Solusi & Harga */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Solusi &amp; Harga
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/#solusi" className="hover:text-amber-400 transition-colors">10 Pilar Sistem 360°</Link></li>
              <li><Link href="/#harga" className="hover:text-amber-400 transition-colors text-amber-300 font-bold">Harga Sewa Mulai Rp 399rb</Link></li>
              <li><Link href="/#portofolio" className="hover:text-amber-400 transition-colors">Portofolio Bengkel Terkemuka</Link></li>
              <li><Link href="/tentang-kami" className="hover:text-amber-400 transition-colors">Dewan Eksekutif (4 Orang)</Link></li>
            </ul>
          </div>

          {/* Akses Portal */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Akses Portal
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="https://app.broslamtech.com/login" target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-amber-300 font-bold">
                  <span>🔐 Login Single Sign-On (SSO)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li><Link href="/#kalkulator" className="hover:text-amber-400 transition-colors">📊 Kalkulator Kebocoran Uang</Link></li>
              <li><Link href="/#portal-berita" className="hover:text-amber-400 transition-colors">📰 Portal Berita &amp; Promo</Link></li>
              <li><Link href="/admin/blog" className="hover:text-amber-400 transition-colors text-slate-300">✍️ Panel Admin Berita &amp; Promo</Link></li>
            </ul>
          </div>

          {/* Rekening & Konsultasi */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Rekening &amp; Konsultasi
            </h4>
            <div className="p-3 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
              <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block flex items-center gap-1">
                <CreditCard className="w-3 h-3 text-blue-400" />
                <span>Rekening Resmi Langganan:</span>
              </span>
              <div className="text-xs font-bold text-white font-mono">
                BLU BCA : 001665391501
              </div>
              <div className="text-[11px] text-slate-400">
                a.n. UTOMO NUGROHO
              </div>
            </div>

            <a
              href="https://wa.me/6281359433350?text=Halo%20Tim%20BroSlam.Tech,%20saya%20tertarik%20konsultasi%20Super%20Platform"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-md transition-all cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Chat WhatsApp Resmi</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <div>
            &copy; 2026 BroSlam.Tech. Seluruh Hak Cipta Dilindungi.
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span>Digital Super Platform</span>
            <span>•</span>
            <span>Multi-Tenant Architecture</span>
            <span>•</span>
            <span>SAK ETAP Compliant</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
