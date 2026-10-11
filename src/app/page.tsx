"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import EcosystemPillars from "../components/EcosystemPillars";
import DeviceShowcase from "../components/DeviceShowcase";
import ProfitCalculator from "../components/ProfitCalculator";
import ComparisonSection from "../components/ComparisonSection";
import PricingSection from "../components/PricingSection";
import PortfolioSection from "../components/PortfolioSection";
import TeamSection from "../components/TeamSection";
import AppWarrantySection from "../components/AppWarrantySection";
import FaqSection from "../components/FaqSection";
import NewsPortal from "../components/NewsPortal";
import Footer from "../components/Footer";
import CatalogModal from "../components/CatalogModal";
import ModuleDetailModal from "../components/ModuleDetailModal";
import ConsultationModal from "../components/ConsultationModal";
import { PillarFeature } from "../data/pillars-data";

export default function HomePage() {
  const [isCatalogOpen, setIsCatalogOpen] = useState(false);
  const [selectedFeature, setSelectedFeature] = useState<PillarFeature | null>(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors selection:bg-amber-500 selection:text-slate-950">
      {/* 1. Header Navigation */}
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      <main>
        {/* 2. Hero Section (Cover) */}
        <HeroSection
          onOpenConsultation={() => setIsConsultationOpen(true)}
          onOpenCatalog={() => setIsCatalogOpen(true)}
        />

        {/* 3. 10 Ecosystem Pillars */}
        <EcosystemPillars
          onOpenFeatureModal={(feat: PillarFeature) => setSelectedFeature(feat)}
          onOpenCatalogModal={() => setIsCatalogOpen(true)}
        />

        {/* 4. Device Showcase (Desktop Pusat, TV Stall, Mobile SA) */}
        <DeviceShowcase />

        {/* 5. Profit & Leakage Calculator */}
        <ProfitCalculator />

        {/* 6. Pricing Section (Starter Rp 399k, Pro Growth Rp 799k, Enterprise Rp 1.499k) */}
        <PricingSection />

        {/* 7. Comparison Section (vs POS Ritel vs Excel) */}
        <ComparisonSection />

        {/* 8. Portfolio Section (Arumsari all cabang, Bengkel Tomo, dll) */}
        <PortfolioSection />

        {/* 9. 5 Halaman Roadmap & Jaminan Warranty */}
        <AppWarrantySection />

        {/* 10. Dewan Eksekutif (Fuad, Utomo, Pangestu, Nisa) */}
        <TeamSection />

        {/* 11. FAQ Section */}
        <FaqSection />

        {/* 12. News & Promo Portal */}
        <NewsPortal />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* Modals */}
      <CatalogModal
        isOpen={isCatalogOpen}
        onClose={() => setIsCatalogOpen(false)}
      />

      <ModuleDetailModal
        feature={selectedFeature}
        onClose={() => setSelectedFeature(null)}
      />

      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />
    </div>
  );
}
