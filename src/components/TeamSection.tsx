"use client";

import React from "react";
import Image from "next/image";
import { executiveTeam } from "../data/team-data";
import { Users, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function TeamSection() {
  return (
    <section id="tim" className="py-24 bg-slate-900 relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3.5 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-black tracking-widest uppercase">
            <Users className="w-3.5 h-3.5" />
            <span>DEWAN EKSEKUTIF &amp; TIM PENGEMBANG</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight">
            Kepemimpinan Berpengalaman di Balik BroSlam.Tech
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Kombinasi solid antara praktisi puluhan tahun operasional bengkel mobil nyata, arsitektur software enterprise Next.js, dan akuntan profesional SAK ETAP.
          </p>
        </div>

        {/* 4 Executive Leaders Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {executiveTeam.map((member) => (
            <div
              key={member.id}
              className="rounded-3xl bg-slate-950 border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-all shadow-xl group"
            >
              <div className="space-y-4">
                {/* Avatar Badge */}
                <div className="flex items-center justify-between">
                  <div className="w-14 h-14 rounded-2xl bg-slate-900 border border-slate-800 flex items-center justify-center p-2.5 shadow-inner">
                    <Image
                      src={member.avatar}
                      alt={member.name}
                      width={48}
                      height={48}
                      className="object-contain"
                    />
                  </div>
                  <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 font-mono text-xs font-black tracking-widest">
                    {member.role}
                  </span>
                </div>

                <div>
                  <h3 className="text-sm font-black text-white group-hover:text-amber-300 transition-colors leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-[11px] font-semibold text-slate-400 mt-0.5">
                    {member.title}
                  </p>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {member.bio}
                </p>

                {/* Focus badges */}
                <div className="space-y-1.5 pt-2 border-t border-slate-900">
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-500 block">
                    Fokus Tanggung Jawab:
                  </span>
                  <div className="flex flex-wrap gap-1">
                    {member.focus.map((f, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 rounded-md bg-slate-900 text-slate-300 text-[10px] font-semibold border border-slate-800"
                      >
                        {f}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-900 flex items-center justify-between text-xs text-slate-400">
                <span className="text-[11px] text-slate-500 font-mono">BroSlam.Tech Core</span>
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
