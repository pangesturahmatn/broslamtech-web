export interface PricingTier {
  id: string;
  tierBadge: string;
  name: string;
  subtitle: string;
  pricePerMonth: string;
  priceDailyNote: string;
  targetAudience: string;
  isPopular?: boolean;
  features: string[];
}

export const pricingTiers: PricingTier[] = [
  {
    id: "starter",
    tierBadge: "TIER SISTEM: BRONZE / SILVER",
    name: "Starter (Pemula)",
    subtitle: "Solusi B2B SaaS Khusus UMKM Bengkel Mobil",
    pricePerMonth: "Rp 399.000",
    priceDailyNote: "Cuma Rp 13.000 / hari!",
    targetAudience: "Untuk bengkel kecil 1–3 stall yang baru beralih dari nota kertas.",
    isPopular: false,
    features: [
      "1 Cabang Bengkel & 5 Staf",
      "Check-in & SPK Digital di HP",
      "Bawaan 450+ Merek Mobil",
      "Kasir POS & Cetak Nota Struk",
      "Catat Stok Sparepart & Oli",
    ],
  },
  {
    id: "pro-growth",
    tierBadge: "TIER SISTEM: GOLD (SOP LENGKAP)",
    name: "Pro Growth (Lengkap)",
    subtitle: "Paling Diminati Pemilik Bengkel Indonesia",
    pricePerMonth: "Rp 799.000",
    priceDailyNote: "Setara harga 1 galon oli saja!",
    targetAudience: "Untuk bengkel ramai (4–8 stall) yang butuh anti-curang & WA.",
    isPopular: true,
    features: [
      "Semua Fitur Paket Starter",
      "Hingga 15 Staf & Foto Bodi Baret",
      "Otomatis Kirim Nota ke WhatsApp",
      "Pengingat Servis Berkala ke WA",
      "Laba Rugi Real-Time di HP Owner",
      "Hitung Komisi Montir Otomatis",
    ],
  },
  {
    id: "enterprise",
    tierBadge: "TIER SISTEM: DIAMOND (FULL SUITE)",
    name: "Enterprise (Multi-Cabang)",
    subtitle: "Holding Eksekutif Multi-Outlet",
    pricePerMonth: "Rp 1.499.000",
    priceDailyNote: "Sudah termasuk 3 cabang bengkel",
    targetAudience: "Untuk pemilik bengkel yang punya 2–3 cabang.",
    isPopular: false,
    features: [
      "Mencakup Hingga 3 Cabang Bengkel",
      "Staf & Mekanik Tanpa Batas",
      "Laporan Gabungan Semua Cabang",
      "Oper Stok Antar-Cabang",
      "Fitur Gaji & HRD Lengkap",
    ],
  },
];
