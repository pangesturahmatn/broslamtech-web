"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import EcosystemPillars from "../components/EcosystemPillars";
import DeviceShowcase from "../components/DeviceShowcase";
import ProfitCalculator from "../components/ProfitCalculator";
import ComparisonSection from "../components/ComparisonSection";
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
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950">
      {/* 1. Header Navigation */}
      <Navbar onOpenConsultation={() => setIsConsultationOpen(true)} />

      <main>
        {/* 2. Hero Section */}
        <HeroSection
          onOpenConsultation={() => setIsConsultationOpen(true)}
          onOpenCatalog={() => setIsCatalogOpen(true)}
        />

        {/* 3. 10 Ecosystem Pillars */}
        <EcosystemPillars
          onOpenFeatureModal={(feat: PillarFeature) => setSelectedFeature(feat)}
          onOpenCatalogModal={() => setIsCatalogOpen(true)}
        />

        {/* 4. Device Showcase */}
        <DeviceShowcase />

        {/* 5. Profit & Leakage Calculator */}
        <ProfitCalculator />

        {/* 6. Comparison Section */}
        <ComparisonSection />

        {/* 7. FAQ Section */}
        <FaqSection />

        {/* 8. News & Insights Portal */}
        <NewsPortal />
      </main>

      {/* 9. Footer */}
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
