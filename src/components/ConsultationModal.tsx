"use client";

import React, { useState } from "react";
import { X, Send, ShieldCheck, CheckCircle2, Sparkles } from "lucide-react";

interface ConsultationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ConsultationModal({ isOpen, onClose }: ConsultationModalProps) {
  const [bengkelName, setBengkelName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const [waNumber, setWaNumber] = useState("");
  const [branchCount, setBranchCount] = useState("1");
  const [city, setCity] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Halo Pak Tomo & Tim BroSlam.Tech, saya ingin mengajukan Konsultasi & Jadwal Live Demo ERP Bengkel Mobil.

*Nama Bengkel:* ${bengkelName || "-"}
*Owner:* ${ownerName || "-"}
*Kota/Lokasi:* ${city || "-"}
*No WhatsApp:* ${waNumber || "-"}
*Jumlah Cabang:* ${branchCount} Cabang

Mohon informasi ketersediaan jadwal demo & proposal implementasi.`
    );
    window.open(`https://wa.me/6281359433350?text=${text}`, "_blank");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-slate-100">
        
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-[11px] font-black uppercase tracking-wider">
              <Sparkles className="w-3 h-3" />
              <span>KONSULTASI &amp; DEMO GRATIS</span>
            </div>
            <h3 className="text-xl font-black text-white mt-2 leading-tight">
              Akselerasi Profit Bengkel Anda Bersama BroSlam.Tech
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Jadwalkan sesi demonstrasi privat langsung dengan Pak Tomo &amp; Tim Konsultan Senior.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-slate-300 mb-1">
              Nama Bengkel Mobil Anda
            </label>
            <input
              type="text"
              required
              placeholder="Contoh: Bengkel Slamet Jaya Motor"
              value={bengkelName}
              onChange={(e) => setBengkelName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                Nama Pemilik / Owner
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: Bpk. Budi Santoso"
                value={ownerName}
                onChange={(e) => setOwnerName(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                Kota / Kabupaten
              </label>
              <input
                type="text"
                required
                placeholder="Contoh: Purwokerto / Bandung"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                Nomor WhatsApp Aktif
              </label>
              <input
                type="tel"
                required
                placeholder="0812xxxxxxx"
                value={waNumber}
                onChange={(e) => setWaNumber(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-slate-300 mb-1">
                Jumlah Cabang
              </label>
              <select
                value={branchCount}
                onChange={(e) => setBranchCount(e.target.value)}
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs text-white focus:outline-none focus:border-amber-400"
              >
                <option value="1">1 Cabang (Tunggal)</option>
                <option value="2-3">2 - 3 Cabang</option>
                <option value="4-10">4 - 10 Cabang</option>
                <option value=">10">&gt; 10 Cabang (Holding)</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-xs sm:text-sm tracking-wide shadow-xl shadow-amber-500/25 flex items-center justify-center gap-2 cursor-pointer transition-all active:scale-95"
          >
            <span>Kirim via WhatsApp Resmi</span>
            <Send className="w-4 h-4" />
          </button>
        </form>

        <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-1">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>Privasi data bisnis Anda 100% terjaga &amp; aman.</span>
        </div>

      </div>
    </div>
  );
}
