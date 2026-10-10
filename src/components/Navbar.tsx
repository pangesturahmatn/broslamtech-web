"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Menu, X, Sparkles, ShieldCheck } from "lucide-react";

interface NavbarProps {
  onOpenConsultation?: () => void;
}

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/85 backdrop-blur-xl border-b border-slate-800/80 shadow-2xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo Group */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 shrink-0 rounded-xl overflow-hidden border border-amber-500/30 bg-slate-900/60 p-1 shadow-lg group-hover:scale-105 transition-transform">
              <Image
                src="/assets/broslam-globe-logo.png"
                alt="BroSlam.Tech Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col">
              <div className="text-xl font-black tracking-tight text-white flex items-center">
                <span>BroSlam</span>
                <span className="text-amber-400 font-extrabold">.Tech</span>
              </div>
              <span className="text-[9.5px] uppercase tracking-widest text-slate-400 font-semibold -mt-1 hidden sm:block">
                Super Platform Bengkel
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-sm font-semibold text-slate-300">
            <a href="#solusi" className="hover:text-amber-400 transition-colors">
              Our Value
            </a>
            <a href="#showcase" className="hover:text-amber-400 transition-colors">
              Our Ecosystem
            </a>
            <a href="#kalkulator" className="hover:text-amber-400 transition-colors">
              Calculator
            </a>
            <a href="#portal-berita" className="hover:text-amber-400 transition-colors">
              News &amp; Wawasan
            </a>
            <a
              href="https://wa.me/6281359433350?text=Halo%20Pak%20Tomo,%20saya%20tertarik%20konsultasi%20BroSlam.Tech%20SaaS"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              Contact Us
            </a>
          </nav>

          {/* Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Direct Login Portal button to app.broslamtech.com/login */}
            <a
              href="https://app.broslamtech.com/login"
              className="px-4 py-2 rounded-xl text-xs font-bold text-slate-200 hover:text-white border border-slate-700/80 bg-slate-900/60 hover:bg-slate-800 transition-all shadow-sm"
            >
              Login Portal
            </a>
            <button
              onClick={onOpenConsultation}
              className="px-4 py-2 rounded-xl text-xs font-black bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 transition-all shadow-md shadow-amber-500/20 flex items-center gap-1.5 cursor-pointer"
            >
              <span>Register Now</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="lg:hidden flex items-center gap-2">
            <a
              href="https://app.broslamtech.com/login"
              className="px-3 py-1.5 rounded-lg text-xs font-bold bg-slate-800 border border-slate-700 text-slate-200"
            >
              Login
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-slate-800 px-6 py-5 space-y-4 text-sm font-semibold text-slate-200 animate-in fade-in duration-200">
          <a
            href="#solusi"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 hover:text-amber-400"
          >
            Our Value
          </a>
          <a
            href="#showcase"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 hover:text-amber-400"
          >
            Our Ecosystem
          </a>
          <a
            href="#kalkulator"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 hover:text-amber-400"
          >
            Calculator
          </a>
          <a
            href="#portal-berita"
            onClick={() => setMobileMenuOpen(false)}
            className="block py-1 hover:text-amber-400"
          >
            News &amp; Wawasan
          </a>
          <a
            href="https://wa.me/6281359433350?text=Halo%20Pak%20Tomo,%20saya%20tertarik%20konsultasi%20BroSlam.Tech"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-1 hover:text-amber-400 text-emerald-400"
          >
            WhatsApp Pak Tomo (081359433350)
          </a>
          <div className="pt-3 border-t border-slate-800 flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenConsultation) onOpenConsultation();
              }}
              className="w-full py-2.5 rounded-xl text-center text-xs font-black bg-amber-400 text-slate-950"
            >
              Register &amp; Konsultasi Demo
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
