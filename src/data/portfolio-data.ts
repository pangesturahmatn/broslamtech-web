export interface PortfolioItem {
  id: string;
  name: string;
  category: string;
  locations: string;
  stallCount: string;
  achievement: string;
  logoBadge: string;
  verified: boolean;
}

export const portfolioClients: PortfolioItem[] = [
  {
    id: "arumsari-all",
    name: "Bengkel Mobil ARUMSARI (All Cabang)",
    category: "Spesialis Kaki-Kaki, Mesin & AC Mobil Modern",
    locations: "Purwokerto Pusat, ASAC Purwokerto, Tasikmalaya",
    stallCount: "16+ Stall Pitstop Aktif",
    achievement: "Otomasi 100% alur SPK digital, 0 nota kertas, dan laporan laba kotor HPP FIFO real-time dari 3 cabang.",
    logoBadge: "ARUMSARI",
    verified: true,
  },
  {
    id: "bengkel-tomo",
    name: "Bengkel Tomo Partner",
    category: "Bengkel Umum & Tune Up Injeksi Cepat",
    locations: "Jawa Tengah & Jawa Barat",
    stallCount: "8 Stall Pitstop",
    achievement: "Peningkatan retensi pelanggan berkala H+30 & H+90 hari via integrasi WhatsApp Gateway mandiri tanpa biaya SaaS mahal.",
    logoBadge: "TOMO",
    verified: true,
  },
  {
    id: "mitra-mandiri",
    name: "Mitra Bengkel Mandiri Otomotif",
    category: "Servis Berkala & Ganti Oli Express",
    locations: "Multi-Outlet Region",
    stallCount: "6 Stall Operasional",
    achievement: "Pencegahan kebocoran stok sparepart hingga 98% berkat kartu stok batch FIFO dan approval diskon kasir.",
    logoBadge: "MITRA",
    verified: true,
  },
];
