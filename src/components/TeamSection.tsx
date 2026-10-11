"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { executiveTeam } from "../data/team-data";
import { Users, ChevronLeft, ChevronRight, ShieldCheck, Star } from "lucide-react";

export default function TeamSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % executiveTeam.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [isPaused]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + executiveTeam.length) % executiveTeam.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % executiveTeam.length);
  };

  return (
    <section id="tim" className="py-24 bg-white relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-extrabold tracking-widest uppercase">
            <Users className="w-3.5 h-3.5" />
            <span>DEWAN EKSEKUTIF &amp; TIM PENGEMBANG</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight">
            Kepemimpinan Berpengalaman di Balik BroSlam.Tech
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Kombinasi solid antara praktisi puluhan tahun operasional bengkel mobil nyata, arsitektur software enterprise Next.js, dan akuntan profesional SAK ETAP.
          </p>
        </div>

        {/* Interactive Auto-Rotating Carousel (Kopra Mandiri Testimonial Style) */}
        <div
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Card */}
          <div className="bg-slate-50 border border-slate-200 rounded-3xl p-8 sm:p-10 shadow-xl transition-all duration-500">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
              
              {/* Avatar & Role Badge */}
              <div className="md:col-span-4 flex flex-col items-center text-center space-y-3">
                <div className="relative w-28 h-28 rounded-2xl bg-white border border-slate-200 flex items-center justify-center p-3 shadow-md">
                  <Image
                    src={executiveTeam[currentIndex].avatar}
                    alt={executiveTeam[currentIndex].name}
                    width={90}
                    height={90}
                    className="object-contain"
                  />
                </div>
                <div>
                  <span className="px-3.5 py-1 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-700 font-mono text-xs font-black tracking-widest">
                    {executiveTeam[currentIndex].role}
                  </span>
                  <div className="text-[11px] font-bold text-slate-500 mt-1.5">
                    BroSlam.Tech Core Leader
                  </div>
                </div>
              </div>

              {/* Bio & Details */}
              <div className="md:col-span-8 space-y-4 text-left">
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                    {executiveTeam[currentIndex].name}
                  </h3>
                  <p className="text-xs font-bold text-blue-700 uppercase tracking-wider mt-0.5">
                    {executiveTeam[currentIndex].title}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed italic border-l-2 border-amber-500 pl-4">
                  &ldquo;{executiveTeam[currentIndex].bio}&rdquo;
                </p>

                <div className="space-y-1.5 pt-2">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-400 block">
                    Fokus Tanggung Jawab:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {executiveTeam[currentIndex].focus.map((f, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded-lg bg-white text-slate-700 text-xs font-semibold border border-slate-200 shadow-xs"
                      >
                        ✓ {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Carousel Controls (Previous / Next Buttons) */}
          <button
            type="button"
            onClick={handlePrev}
            className="absolute -left-4 sm:-left-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-slate-300 text-slate-700 hover:text-black hover:bg-slate-100 shadow-lg flex items-center justify-center transition-all cursor-pointer"
            aria-label="Previous Team Member"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="absolute -right-4 sm:-right-6 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white border border-slate-300 text-slate-700 hover:text-black hover:bg-slate-100 shadow-lg flex items-center justify-center transition-all cursor-pointer"
            aria-label="Next Team Member"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Indicator Dots / Tabs */}
          <div className="flex items-center justify-center gap-2.5 mt-8">
            {executiveTeam.map((member, idx) => (
              <button
                key={member.id}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all cursor-pointer flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold ${
                  currentIndex === idx
                    ? "bg-[#0F172A] text-white shadow-md scale-105"
                    : "bg-slate-200 text-slate-600 hover:bg-slate-300"
                }`}
              >
                <span>{member.role}</span>
                {currentIndex === idx && <span className="text-[10px] text-amber-400">●</span>}
              </button>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
