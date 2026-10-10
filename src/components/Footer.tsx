"use client";

import React from "react";
import Image from "next/image";
import { MessageSquare, ExternalLink, ShieldCheck } from "lucide-react";

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

          {/* Solusi Bisnis */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Solusi Bisnis
            </h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#solusi" className="hover:text-amber-400 transition-colors">Cash &amp; Liquidity Management</a></li>
              <li><a href="#solusi" className="hover:text-amber-400 transition-colors">Workshop &amp; Stall Operations</a></li>
              <li><a href="#solusi" className="hover:text-amber-400 transition-colors">Sparepart Supply Chain</a></li>
              <li><a href="#solusi" className="hover:text-amber-400 transition-colors">Omnichannel CRM &amp; Loyalti</a></li>
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
              <li><a href="#showcase" className="hover:text-amber-400 transition-colors">🖥️ Tampilan Antarmuka Perangkat</a></li>
              <li><a href="#kalkulator" className="hover:text-amber-400 transition-colors">📊 Kalkulator Kebocoran Uang</a></li>
              <li><a href="#portal-berita" className="hover:text-amber-400 transition-colors">📰 Portal Berita &amp; Update R&amp;D</a></li>
            </ul>
          </div>

          {/* Konsultasi */}
          <div className="space-y-3">
            <h4 className="text-xs font-black uppercase tracking-wider text-white">
              Konsultasi Privat
            </h4>
            <p className="text-xs leading-relaxed text-slate-400">
              Hubungi langsung tim konsultan senior kami untuk demonstrasi privat atau kunjungan bengkel Anda.
            </p>
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
