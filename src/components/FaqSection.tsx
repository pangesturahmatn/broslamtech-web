"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FaqItem {
  q: string;
  a: string;
}

const faqs: FaqItem[] = [
  {
    q: "Apakah staf kasir dan mekanik saya yang gaptek bisa menggunakannya?",
    a: "Sangat bisa! Antarmuka sistem dirancang dengan filosofi 'Se-mudah scroll media sosial'. Tombol besar, alur jelas (Booking &rarr; SPK &rarr; Pengerjaan &rarr; Kasir), dan dilengkapi tombol auto-complete sehingga staf tidak perlu mengetik panjang lebar.",
  },
  {
    q: "Bagaimana jika koneksi internet di bengkel mendadak lambat?",
    a: "Aplikasi dibangun dengan teknologi Next.js terbaru yang sangat hemat kuota bandwidth. Transaksi cepat selesai tanpa harus loading berat, dan data Anda tersimpan aman di cloud server dengan proteksi backup otomatis berkala.",
  },
  {
    q: "Apakah data omset dan resep margin bengkel saya aman dari staf?",
    a: "100% Terlindungi. Sistem memiliki pembatasan hak akses berbasis peran (Role-Based Permissions). Staf kasir atau mekanik hanya bisa melihat transaksi harian mereka dan tidak akan pernah bisa melihat HPP modal asli, persentase laba kotor, ataupun total saldo kas bank Owner.",
  },
  {
    q: "Apakah saya bisa memindahkan data produk sparepart dari Excel lama?",
    a: "Tentu saja. Tersedia fitur impor massal format CSV/Excel untuk data katalog produk, kode SKU, harga beli, harga jual, dan stok awal sehingga bengkel Anda bisa langsung beroperasi tanpa harus input barang satu per satu dari nol.",
  },
  {
    q: "Bagaimana jika saya memiliki lebih dari 1 cabang bengkel?",
    a: "Sistem ini memang dirancang untuk multi-cabang. Anda sebagai Owner cukup membuka satu dasbor dari HP untuk membandingkan omset cabang A vs cabang B, memeriksa stok antar-cabang, atau melakukan transfer barang gudang antar-cabang secara resmi.",
  },
  {
    q: "Apakah ada biaya tambahan untuk WhatsApp Gateway pengiriman nota?",
    a: "Tidak ada biaya vendor pihak ketiga. Sistem BroSlam.Tech sudah dilengkapi Dual WhatsApp Engine mandiri yang langsung terhubung ke nomor resmi bengkel Anda untuk kirim invoice, reminder servis, dan follow-up prospek.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="scroll-mt-20 sm:scroll-mt-24 py-8 sm:py-12 bg-white dark:bg-gradient-to-b dark:from-[#070B14] dark:via-[#090F1E] dark:to-[#070B14] relative overflow-hidden border-b border-slate-200 dark:border-white/10 transition-colors">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-1.5 mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-black tracking-widest uppercase">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>TANYA JAWAB STRATEGIS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
            Pertanyaan yang Sering Diajukan Pemilik Bengkel
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Jawaban lugas untuk hal-hal yang sering dikhawatirkan saat beralih ke sistem digital.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-2.5">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-white/10 bg-slate-50 dark:bg-white/[0.04] hover:dark:bg-white/[0.07] overflow-hidden transition-all duration-300 shadow-sm dark:shadow-md"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4.5 px-6 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-slate-900/60 transition-colors"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-amber-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed border-t border-slate-200 dark:border-slate-800/60 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
