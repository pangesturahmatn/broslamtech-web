"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { executiveTeam as defaultTeam } from "../data/team-data";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TeamSection() {
  const [team, setTeam] = useState(defaultTeam);
  const [activeIndex, setActiveIndex] = useState(1); // Utomo Nugroho (COO)
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate every 5 seconds (pauses when user hovers or interacts)
  useEffect(() => {
    if (isPaused || team.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % team.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused, team.length]);

  if (team.length === 0) return null;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + team.length) % team.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % team.length);
  };

  const currentLeader = team[activeIndex] || team[0];

  // Generate the 5 slots [-2, -1, 0, 1, 2] centered on activeIndex
  const slots = [-2, -1, 0, 1, 2].map((offset) => {
    const memberIndex = (activeIndex + offset + team.length) % team.length;
    return {
      offset,
      memberIndex,
      member: team[memberIndex],
    };
  });

  return (
    <section
      id="tim"
      className="py-12 sm:py-16 bg-slate-50 dark:bg-[#070B14] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle radial spotlight glow in dark mode */}
      <div className="hidden dark:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-sky-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* 1. Iconic Quotation Mark (Snug & Compact) */}
        <div className="flex justify-center mb-2">
          <span className="text-5xl sm:text-6xl font-serif text-slate-300 dark:text-white/80 leading-none select-none">
            &ldquo;
          </span>
        </div>

        {/* 2. Executive Testimonial Quote (Rapat, Nyaman Dibaca) */}
        <div className="max-w-2xl mx-auto min-h-[52px] flex items-center justify-center px-4">
          <p className="text-xs sm:text-sm md:text-[14.5px] text-slate-700 dark:text-slate-200 leading-relaxed font-normal tracking-normal transition-opacity duration-300">
            {currentLeader.quote}
          </p>
        </div>

        {/* 3. Leader Name & Title (Jarak Rapat & Presisi) */}
        <div className="mt-4 space-y-0.5">
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {currentLeader.name}
          </h3>
          <p className="text-[11px] sm:text-xs text-slate-500 dark:text-slate-400 font-medium">
            {currentLeader.companySubtitle}
          </p>
        </div>

        {/* 4. Semicircular Arc of Avatars Curving Downwards at the Sides (⌒) */}
        <div className="relative mt-7 mb-2 flex items-center justify-center">
          <div className="flex items-start justify-center gap-2 sm:gap-5 md:gap-8">
            {slots.map(({ offset, memberIndex, member }) => {
              const isCenter = offset === 0;
              const isInner = Math.abs(offset) === 1;

              // Downward curvature styling with compact step
              const verticalOffsetClass = isCenter
                ? "translate-y-0 z-30"
                : isInner
                ? "translate-y-4 sm:translate-y-6 z-20"
                : "translate-y-8 sm:translate-y-12 z-10 hidden sm:flex";

              const sizeClass = isCenter
                ? "w-24 h-24 sm:w-28 sm:h-28 ring-4 ring-amber-400 dark:ring-white shadow-xl dark:shadow-[0_10px_30px_rgba(0,0,0,0.7)]"
                : isInner
                ? "w-16 h-16 sm:w-20 sm:h-20 ring-2 ring-slate-300 dark:ring-white/30 hover:ring-amber-400 dark:hover:ring-white/70 hover:opacity-90"
                : "w-14 h-14 sm:w-16 sm:h-16 ring-1 ring-slate-200 dark:ring-white/20 hover:ring-slate-400 dark:hover:ring-white/50 hover:opacity-75";

              const opacityClass = isCenter
                ? "opacity-100 scale-100"
                : isInner
                ? "opacity-75 scale-95"
                : "opacity-45 scale-85";

              return (
                <button
                  key={member.id + offset}
                  type="button"
                  onClick={() => setActiveIndex(memberIndex)}
                  className={`relative rounded-full transition-all duration-500 ease-out cursor-pointer group flex flex-col items-center ${verticalOffsetClass} ${opacityClass}`}
                  title={member.name}
                >
                  {/* Circular Avatar */}
                  <div className={`relative rounded-full overflow-hidden transition-all duration-300 bg-slate-200 dark:bg-slate-900 ${sizeClass}`}>
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 90px, 120px"
                      className="object-cover object-top filter brightness-105"
                      priority={isCenter}
                    />
                  </div>

                  {/* Role Tag (CEO, COO, CTO, CFO, VP) */}
                  <span
                    className={`text-[9px] sm:text-[10px] font-bold uppercase tracking-wider mt-2 px-2 py-0.5 rounded-full transition-all ${
                      isCenter
                        ? "bg-amber-400 text-slate-950 shadow-xs"
                        : "text-slate-600 dark:text-slate-400 bg-slate-200 dark:bg-white/5 group-hover:bg-slate-300 dark:group-hover:bg-white/10"
                    }`}
                  >
                    {member.role}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 5. Navigation Arrows Directly Below Center Avatar (Snug Margin) */}
        <div className="flex items-center justify-center gap-2.5 mt-5">
          <button
            type="button"
            onClick={handlePrev}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-white/10 hover:bg-slate-900 dark:hover:bg-white text-slate-800 dark:text-white hover:text-white dark:hover:text-black border border-slate-300 dark:border-white/20 hover:border-slate-900 dark:hover:border-white transition-all flex items-center justify-center cursor-pointer shadow-xs active:scale-95"
            aria-label="Pemimpin Sebelumnya"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white dark:bg-white/10 hover:bg-slate-900 dark:hover:bg-white text-slate-800 dark:text-white hover:text-white dark:hover:text-black border border-slate-300 dark:border-white/20 hover:border-slate-900 dark:hover:border-white transition-all flex items-center justify-center cursor-pointer shadow-xs active:scale-95"
            aria-label="Pemimpin Selanjutnya"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
