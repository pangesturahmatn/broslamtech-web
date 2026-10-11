"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { executiveTeam as defaultTeam } from "../data/team-data";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TeamSection() {
  const [team, setTeam] = useState(defaultTeam);
  const [activeIndex, setActiveIndex] = useState(1); // Utomo Nugroho (COO)
  const [isPaused, setIsPaused] = useState(false);

  // Fetch dynamic team if updated by admin
  useEffect(() => {
    fetch("/api/team")
      .then((res) => res.json())
      .then((json) => {
        if (json.success && Array.isArray(json.data) && json.data.length > 0) {
          setTeam(json.data);
        }
      })
      .catch((err) => console.error("Fetch team err:", err));
  }, []);

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
      className="py-24 sm:py-28 bg-slate-50 dark:bg-[#070B14] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle radial spotlight glow in dark mode */}
      <div className="hidden dark:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* 1. Large Iconic Quotation Mark */}
        <div className="flex justify-center mb-6">
          <span className="text-6xl sm:text-7xl font-serif text-slate-300 dark:text-white/90 leading-none select-none">
            &ldquo;
          </span>
        </div>

        {/* 2. Executive Testimonial Quote */}
        <div className="max-w-3xl mx-auto min-h-[90px] flex items-center justify-center px-4">
          <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal tracking-wide transition-opacity duration-300">
            {currentLeader.quote}
          </p>
        </div>

        {/* 3. Leader Name & Title */}
        <div className="mt-8 space-y-1.5">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            {currentLeader.name}
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 dark:text-slate-400 font-medium">
            {currentLeader.companySubtitle}
          </p>
        </div>

        {/* 4. Semicircular Arc of Avatars Curving Downwards at the Sides (⌒) */}
        <div className="relative mt-14 mb-6 pt-4 pb-12 flex items-center justify-center">
          <div className="flex items-start justify-center gap-2 sm:gap-6 md:gap-10">
            {slots.map(({ offset, memberIndex, member }) => {
              const isCenter = offset === 0;
              const isInner = Math.abs(offset) === 1;

              const verticalOffsetClass = isCenter
                ? "translate-y-0 z-30"
                : isInner
                ? "translate-y-8 sm:translate-y-12 z-20"
                : "translate-y-16 sm:translate-y-24 z-10 hidden sm:flex";

              const sizeClass = isCenter
                ? "w-28 h-28 sm:w-36 sm:h-36 ring-4 ring-amber-400 dark:ring-white shadow-xl dark:shadow-[0_12px_40px_rgba(0,0,0,0.8)]"
                : isInner
                ? "w-20 h-20 sm:w-26 sm:h-26 ring-2 ring-slate-300 dark:ring-white/30 hover:ring-amber-400 dark:hover:ring-white/70 hover:opacity-90"
                : "w-16 h-16 sm:w-22 sm:h-22 ring-1 ring-slate-200 dark:ring-white/20 hover:ring-slate-400 dark:hover:ring-white/50 hover:opacity-75";

              const opacityClass = isCenter
                ? "opacity-100 scale-100"
                : isInner
                ? "opacity-75 scale-95"
                : "opacity-50 scale-85";

              return (
                <button
                  key={member.id + offset}
                  type="button"
                  onClick={() => setActiveIndex(memberIndex)}
                  className={`relative rounded-full transition-all duration-500 ease-out cursor-pointer group flex flex-col items-center ${verticalOffsetClass} ${opacityClass}`}
                  title={member.name}
                >
                  {/* Circular Avatar with crisp photographic portrait */}
                  <div className={`relative rounded-full overflow-hidden transition-all duration-300 bg-slate-200 dark:bg-slate-900 ${sizeClass}`}>
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      fill
                      sizes="(max-width: 640px) 100px, 150px"
                      className="object-cover object-top filter brightness-105"
                      priority={isCenter}
                    />
                  </div>

                  {/* Role Tag (CEO, COO, CTO, CFO, VP) */}
                  <span
                    className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider mt-3 px-2.5 py-0.5 rounded-full transition-all ${
                      isCenter
                        ? "bg-amber-400 text-slate-950 shadow-md"
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

        {/* 5. Navigation Arrows Directly Below Center Avatar */}
        <div className="flex items-center justify-center gap-3 mt-10">
          <button
            type="button"
            onClick={handlePrev}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white dark:bg-white/10 hover:bg-slate-900 dark:hover:bg-white text-slate-800 dark:text-white hover:text-white dark:hover:text-black border border-slate-300 dark:border-white/20 hover:border-slate-900 dark:hover:border-white transition-all flex items-center justify-center cursor-pointer shadow-md active:scale-95"
            aria-label="Pemimpin Sebelumnya"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={handleNext}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white dark:bg-white/10 hover:bg-slate-900 dark:hover:bg-white text-slate-800 dark:text-white hover:text-white dark:hover:text-black border border-slate-300 dark:border-white/20 hover:border-slate-900 dark:hover:border-white transition-all flex items-center justify-center cursor-pointer shadow-md active:scale-95"
            aria-label="Pemimpin Selanjutnya"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
