"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { executiveTeam as defaultTeam } from "../data/team-data";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function TeamSection() {
  const [team, setTeam] = useState(defaultTeam);
  const [activeIndex, setActiveIndex] = useState(1); // Default center
  const [isPaused, setIsPaused] = useState(false);

  // Auto-rotate every 5.5 seconds (pauses when user hovers or interacts)
  useEffect(() => {
    if (isPaused || team.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % team.length);
    }, 5500);
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

  // 5 slots matching Mandiri Kopra: [-2, -1, 0, 1, 2]
  // -2: Outer Left (lowest flank)
  // -1: Inner Left (mid flank)
  //  0: Center Apex (highest, largest)
  // +1: Inner Right (mid flank)
  // +2: Outer Right (lowest flank)
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
      className="py-12 sm:py-16 bg-slate-50 dark:bg-[#0E121C] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Subtle radial spotlight in dark mode */}
      <div className="hidden dark:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-slate-800/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* 1. Iconic Double Quotation Mark (Pristine White / Elegant in Kopra style) */}
        <div className="flex justify-center mb-3">
          <span className="text-4xl sm:text-5xl font-serif text-slate-800 dark:text-white leading-none select-none tracking-tighter">
            &ldquo;
          </span>
        </div>

        {/* 2. Executive Testimonial Quote (Kopra Typography: comfortable width, clean, pure) */}
        <div className="max-w-3xl mx-auto min-h-[56px] flex items-center justify-center px-4">
          <p className="text-xs sm:text-sm md:text-[15px] text-slate-700 dark:text-slate-200 leading-relaxed font-normal tracking-normal transition-opacity duration-300 [text-wrap:balance]">
            {currentLeader.quote}
          </p>
        </div>

        {/* 3. Leader Name & Title (Pure Mandiri Kopra Format: Bold Name + Muted Title, No Badges) */}
        <div className="mt-4 mb-2 space-y-1">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white tracking-tight">
            {currentLeader.name}
          </h3>
          <p className="text-xs sm:text-[13px] text-slate-500 dark:text-slate-400 font-normal">
            {currentLeader.companySubtitle}
          </p>
        </div>

        {/* 4. Kopra Mandiri Signature Semicircular Dome Arch (⌒) */}
        {/* Responsive curved stage: Center apex on top, inner flanks mid-tier, outer flanks bottom, arrows in center base */}
        <div className="relative w-full max-w-2xl sm:max-w-3xl mx-auto h-[230px] sm:h-[280px] md:h-[310px] mt-6 select-none">
          {slots.map(({ offset, memberIndex, member }) => {
            const isCenter = offset === 0;
            const isInnerLeft = offset === -1;
            const isInnerRight = offset === 1;
            const isOuterLeft = offset === -2;
            const isOuterRight = offset === 2;

            // Geometry positioning for the Kopra Dome
            let positionClasses = "";
            let sizeClasses = "";
            let visualClasses = "";

            if (isCenter) {
              positionClasses = "left-1/2 -translate-x-1/2 top-0 z-30";
              sizeClasses = "w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40";
              visualClasses = "opacity-100 scale-100 ring-1 ring-slate-300/60 dark:ring-white/20 shadow-xl dark:shadow-[0_12px_36px_rgba(0,0,0,0.8)]";
            } else if (isInnerLeft) {
              positionClasses = "left-[14%] sm:left-[20%] md:left-[22%] top-10 sm:top-14 md:top-16 z-20";
              sizeClasses = "w-22 h-22 sm:w-28 sm:h-28 md:w-32 md:h-32";
              visualClasses = "opacity-75 hover:opacity-100 scale-95 ring-1 ring-slate-300/40 dark:ring-white/10 hover:ring-white/40";
            } else if (isInnerRight) {
              positionClasses = "right-[14%] sm:right-[20%] md:right-[22%] top-10 sm:top-14 md:top-16 z-20";
              sizeClasses = "w-22 h-22 sm:w-28 sm:h-28 md:w-32 md:h-32";
              visualClasses = "opacity-75 hover:opacity-100 scale-95 ring-1 ring-slate-300/40 dark:ring-white/10 hover:ring-white/40";
            } else if (isOuterLeft) {
              positionClasses = "left-0 sm:left-4 md:left-6 bottom-2 sm:bottom-4 md:bottom-6 z-10";
              sizeClasses = "w-18 h-18 sm:w-24 sm:h-24 md:w-26 md:h-26";
              visualClasses = "opacity-45 hover:opacity-85 scale-90 ring-1 ring-slate-300/20 dark:ring-white/5 hover:ring-white/30";
            } else if (isOuterRight) {
              positionClasses = "right-0 sm:right-4 md:right-6 bottom-2 sm:bottom-4 md:bottom-6 z-10";
              sizeClasses = "w-18 h-18 sm:w-24 sm:h-24 md:w-26 md:h-26";
              visualClasses = "opacity-45 hover:opacity-85 scale-90 ring-1 ring-slate-300/20 dark:ring-white/5 hover:ring-white/30";
            }

            return (
              <button
                key={member.id + offset}
                type="button"
                onClick={() => setActiveIndex(memberIndex)}
                className={`absolute rounded-full transition-all duration-500 ease-out cursor-pointer group focus:outline-none ${positionClasses}`}
                title={`${member.name} (${member.role})`}
              >
                {/* Clean Circular Portrait (Zero badges, pure Kopra style) */}
                <div
                  className={`relative rounded-full overflow-hidden bg-slate-200 dark:bg-slate-900 transition-all duration-300 ${sizeClasses} ${visualClasses}`}
                >
                  <Image
                    src={member.avatar}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100px, 160px"
                    className="object-cover object-top filter brightness-100 group-hover:brightness-105 transition-all duration-300"
                    priority={isCenter}
                  />
                  {/* Subtle dark vignette overlay for outer/inner avatars */}
                  {!isCenter && (
                    <div className="absolute inset-0 bg-black/20 dark:bg-black/35 group-hover:bg-transparent transition-colors duration-300 pointer-events-none" />
                  )}
                </div>
              </button>
            );
          })}

          {/* 5. Navigation Buttons (< and >) SITTING EXACTLY AT THE BOTTOM CENTER (Kopra Mandiri Signature) */}
          <div className="absolute left-1/2 -translate-x-1/2 bottom-1 sm:bottom-3 md:bottom-5 flex items-center justify-center gap-3 z-30">
            <button
              type="button"
              onClick={handlePrev}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 transition-all flex items-center justify-center cursor-pointer shadow-lg active:scale-90 focus:outline-none"
              aria-label="Pemimpin Sebelumnya"
            >
              <ChevronLeft className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </button>

            <button
              type="button"
              onClick={handleNext}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-950 hover:bg-slate-800 dark:hover:bg-slate-100 transition-all flex items-center justify-center cursor-pointer shadow-lg active:scale-90 focus:outline-none"
              aria-label="Pemimpin Selanjutnya"
            >
              <ChevronRight className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
