"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { executiveTeam } from "../data/team-data";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

export default function TeamSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate every 4 seconds (pauses when user hovers or interacts)
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % executiveTeam.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPaused]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + executiveTeam.length) % executiveTeam.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % executiveTeam.length);
  };

  const currentLeader = executiveTeam[activeIndex];

  return (
    <section
      id="tim"
      className="py-24 bg-[#0A0E1A] text-white relative overflow-hidden transition-colors"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle radial spotlight glow behind the active center leader */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[650px] h-[450px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* 1. Large Iconic Quotation Mark */}
        <div className="flex justify-center mb-6">
          <div className="text-5xl sm:text-6xl text-white/90 font-serif leading-none select-none">
            &ldquo;
          </div>
        </div>

        {/* 2. Testimonial / Narrative Quote */}
        <div className="max-w-3xl mx-auto min-h-[90px] flex items-center justify-center">
          <p className="text-xs sm:text-sm md:text-base text-slate-200 leading-relaxed font-normal transition-opacity duration-300">
            {currentLeader.quote}
          </p>
        </div>

        {/* 3. Leader Name & Title (Bold & Crisp) */}
        <div className="mt-7 space-y-1">
          <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
            {currentLeader.name}
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 font-medium">
            {currentLeader.companySubtitle}
          </p>
        </div>

        {/* 4. Semicircular Arc of Circular Avatars (Kopra by Mandiri Identical Layout) */}
        <div className="relative mt-14 mb-8 flex items-center justify-center">
          <div className="flex items-end justify-center gap-4 sm:gap-8 md:gap-12">
            {executiveTeam.map((member, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={member.id}
                  type="button"
                  onClick={() => setActiveIndex(idx)}
                  className={`relative rounded-full transition-all duration-500 ease-out cursor-pointer group flex flex-col items-center ${
                    isActive
                      ? "scale-115 sm:scale-125 z-20 translate-y-0"
                      : "scale-85 sm:scale-95 opacity-50 hover:opacity-85 z-10 translate-y-4 sm:translate-y-6"
                  }`}
                >
                  {/* Circular Avatar Container with Ring */}
                  <div
                    className={`relative rounded-full overflow-hidden transition-all duration-300 ${
                      isActive
                        ? "w-24 h-24 sm:w-32 sm:h-32 ring-4 ring-white/90 shadow-[0_10px_35px_rgba(0,0,0,0.6)]"
                        : "w-20 h-20 sm:w-24 sm:h-24 ring-2 ring-white/20 hover:ring-white/50"
                    }`}
                  >
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>

                  {/* Role Tag Below Avatar */}
                  <span
                    className={`text-[10px] font-black uppercase tracking-wider mt-3 px-2 py-0.5 rounded-full transition-all ${
                      isActive
                        ? "bg-amber-400 text-black shadow-md font-bold"
                        : "text-slate-400 bg-white/5 group-hover:text-white"
                    }`}
                  >
                    {member.role}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 5. Navigation Arrows Directly Below Center Avatar (Exact Kopra Mandiri Style) */}
        <div className="flex items-center justify-center gap-3 mt-4">
          <button
            type="button"
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 hover:border-white transition-all flex items-center justify-center cursor-pointer shadow-md active:scale-95"
            aria-label="Previous Leader"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-white/10 hover:bg-white text-white hover:text-black border border-white/20 hover:border-white transition-all flex items-center justify-center cursor-pointer shadow-md active:scale-95"
            aria-label="Next Leader"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
