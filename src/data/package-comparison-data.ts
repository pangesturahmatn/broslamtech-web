export interface MatrixRow {
  name: string;
  note?: string;
  starter: string | boolean;
  proGrowth: string | boolean;
  enterprise: string | boolean;
}

export interface MatrixCategory {
  category: string;
  iconName: string;
  rows: MatrixRow[];
}

export const packageComparisonCategories: MatrixCategory[] = [
  {
    category: "1. Kapasitas & Lisensi Bengkel",
    iconName: "Building2",
    rows: [
      {
        name: "Cabang Bengkel Aktif",
        note: "Jumlah fisik workshop yang dapat didaftarkan",
        starter: "1 Cabang",
        proGrowth: "1 – 2 Cabang",
        enterprise: "Hingga 3 Cabang (Bisa Add-on)",
      },
      {
        name: "Jumlah Akun Pengguna / Staf",
        note: "Kasir, Service Advisor, Foreman, Kasir",
        starter: "Maks 5 Staf",
        proGrowth: "Hingga 15 Staf",
        enterprise: "Unlimited (Tanpa Batas)",
      },
      {
        name: "Database Pelanggan & Kendaraan",
        note: "Master data nomor polisi, HP, riwayat",
        starter: "Hingga 450+ Kendaraan",
        proGrowth: "Unlimited (Tanpa Batas)",
        enterprise: "Unlimited (Tanpa Batas)",
      },
      {
        name: "Stall Pitstop & Mekanik",
        note: "Monitoring pengerjaan stall servis",
        starter: "1 – 3 Stall",
        proGrowth: "4 – 8 Stall",
        enterprise: "Unlimited Stall",
      },
      {
        name: "Tier Developer System Panel",
        note: "Tingkatan lisensi di Super Admin BroSlam",
        starter: "BRONZE",
        proGrowth: "GOLD",
        enterprise: "DIAMOND",
      },
      {
        name: "Hak Akses & Role Karyawan",
        note: "Pemisahan menu Kasir, SA, Gudang, Owner",
        starter: "Standar (Role Dasar)",
        proGrowth: "Kustom (Level Permission)",
        enterprise: "Kustom Lengkap + Audit Log",
      },
    ],
  },
  {
    category: "2. Operasional Servis & Kasir POS",
    iconName: "Wrench",
    rows: [
      {
        name: "Check-in Kendaraan & SPK Digital di HP",
        note: "Bikin perintah kerja langsung dari smartphone SA",
        starter: true,
        proGrowth: true,
        enterprise: true,
      },
      {
        name: "Diagram Cek Bodi Baret 360° Touchscreen",
        note: "Inspeksi fisik baret mobil interaktif anti-komplain",
        starter: false,
        proGrowth: true,
        enterprise: true,
      },
      {
        name: "Estimasi Biaya & Approval Pelanggan",
        note: "Persetujuan estimasi sebelum pengerjaan dimulai",
        starter: "Estimasi Standar",
        proGrowth: "Digital Approval WA",
        enterprise: "Digital Approval WA + E-Sign",
      },
      {
        name: "Kasir POS & Cetak Nota Struk (Thermal/Dot Matrix)",
        note: "Mendukung printer Bluetooth 58mm, 80mm & printer besar",
        starter: true,
        proGrowth: true,
        enterprise: true,
      },
      {
        name: "Multi-Metode Bayar (Tunai, QRIS, Transfer, EDC)",
        note: "Pemisahan akun kas/bank secara akurat",
        starter: true,
        proGrowth: true,
        enterprise: true,
      },
      {
        name: "Display Antrean TV Stall / Ruang Tunggu",
        note: "Live monitor status mobil siap tayang di Android TV",
        starter: false,
        proGrowth: true,
        enterprise: true,
      },
      {
        name: "Buku Servis Digital Mandiri (PWA Pelanggan)",
        note: "Pelanggan bisa cek riwayat servis online via QR",
        starter: false,
        proGrowth: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "3. Gudang, Sparepart & Pembelian",
    iconName: "Boxes",
    rows: [
      {
        name: "Master Data Sparepart & Jasa Servis",
        note: "Katalog suku cadang, oli, dan paket servis berkala",
        starter: true,
        proGrowth: true,
        enterprise: true,
      },
      {
        name: "Kalkulasi HPP Sparepart FIFO Murni Batch",
        note: "HPP modal akurat per lot kedatangan barang",
        starter: "Rata-rata Standar",
        proGrowth: "FIFO Batch Murni",
        enterprise: "FIFO Batch Murni",
      },
      {
        name: "Stock Opname & Penyesuaian Selisih Fisik",
        note: "Audit fisik berkala anti-kehilangan barang",
        starter: true,
        proGrowth: true,
        enterprise: true,
      },
      {
        name: "Beli Cito Lokal Langsung ke SPK (Toko Sekitar)",
        note: "Part darurat langsung dipasang tanpa ganggu HPP master",
        starter: false,
        proGrowth: true,
        enterprise: true,
      },
      {
        name: "Purchase Order (PO) & Split Backorder Supplier",
        note: "Order ke distributor resmi & terima parsial non-destruktif",
        starter: false,
        proGrowth: true,
        enterprise: true,
      },
      {
        name: "Mutasi & Oper Stok Antar-Cabang",
        note: "Transfer suku cadang antar-bengkel dengan nota transfer",
        starter: false,
        proGrowth: "Terbatas (1-2 Cabang)",
        enterprise: "Penuh (Holding Multi-Cabang)",
      },
    ],
  },
  {
    category: "4. CRM, Marketing & WhatsApp Gateway",
    iconName: "MessageSquare",
    rows: [
      {
        name: "WhatsApp Engine Bot Otomatis (Dual-Engine)",
        note: "Kirim pesan tanpa biaya API pihak ketiga yang mahal",
        starter: false,
        proGrowth: true,
        enterprise: true,
      },
      {
        name: "Kirim E-Invoice & Ringkasan Servis ke WA",
        note: "Nota digital langsung terkirim saat kasir melunasi SPK",
        starter: false,
        proGrowth: true,
        enterprise: true,
      },
      {
        name: "Pengingat Servis Berkala Otomatis (Next KM/Bulan)",
        note: "CRM reminder ganti oli & tune-up berkala otomatis",
        starter: false,
        proGrowth: true,
        enterprise: true,
      },
      {
        name: "Klasifikasi Pelanggan Baru (CSM) vs Lama (CST)",
        note: "Segmentasi pelanggan otomatis berbasis kunjungan riil",
        starter: false,
        proGrowth: true,
        enterprise: true,
      },
      {
        name: "Portal Booking Servis Mandiri Online",
        note: "Form pendaftaran jadwal servis publik untuk pelanggan",
        starter: false,
        proGrowth: true,
        enterprise: true,
      },
      {
        name: "Log CS & Manajemen Komplain Pelanggan",
        note: "Tracking penyelesaian klaim garansi pengerjaan",
        starter: false,
        proGrowth: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "5. Keuangan & Akuntansi (SAK ETAP)",
    iconName: "BadgeDollarSign",
    rows: [
      {
        name: "Buku Kas Masuk / Kas Keluar Harian",
        note: "Pencatatan kas operasional harian bengkel",
        starter: true,
        proGrowth: true,
        enterprise: true,
      },
      {
        name: "Laporan Laba Rugi Real-Time di HP Owner",
        note: "Owner tahu profit bersih kapan saja tanpa tunggu akhir bulan",
        starter: false,
        proGrowth: true,
        enterprise: true,
      },
      {
        name: "Neraca Saldo & Buku Besar Otomatis",
        note: "Jurnal akuntansi otomatis sesuai standar SAK ETAP",
        starter: false,
        proGrowth: true,
        enterprise: true,
      },
      {
        name: "Jurnal Uang Muka PO (Akun 1-1400 Dinamis)",
        note: "Pencatatan DP pembelian supplier terhubung kas/bank",
        starter: false,
        proGrowth: true,
        enterprise: true,
      },
      {
        name: "Laporan Arus Kas (Metode Langsung)",
        note: "Monitoring likuiditas dan cashflow riil bengkel",
        starter: false,
        proGrowth: false,
        enterprise: true,
      },
      {
        name: "Anti-Fraud Alert & Rekap Tutup Kasir ke WA Owner",
        note: "Deteksi pembatalan nota/rollback dan notifikasi ke HP Owner",
        starter: false,
        proGrowth: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "6. SDM, Payroll & Komisi Karyawan",
    iconName: "Users",
    rows: [
      {
        name: "Presensi GPS & Jam Kerja Karyawan di HP",
        note: "Absensi digital radius bengkel anti-titip absen",
        starter: false,
        proGrowth: true,
        enterprise: true,
      },
      {
        name: "Hitung Komisi Mekanik Otomatis dari SPK Selesai",
        note: "Perhitungan bagi hasil ongkos jasa mekanik otomatis",
        starter: false,
        proGrowth: true,
        enterprise: true,
      },
      {
        name: "Komisi Cross-Selling Multi-Role (SA, FA, Kasir)",
        note: "Bagi hasil penjualan sparepart/paket servis ke tim frontliner",
        starter: false,
        proGrowth: true,
        enterprise: true,
      },
      {
        name: "Siklus Gaji Mingguan (4 Pekan) & Potongan Kasbon",
        note: "Penggajian otomatis dengan cutoff billing dinamis",
        starter: false,
        proGrowth: false,
        enterprise: true,
      },
      {
        name: "Audit Kotak Perkakas Kunci (Tools Man Mingguan)",
        note: "Checklist digital mencegah kunci sok/obeng montir hilang",
        starter: false,
        proGrowth: true,
        enterprise: true,
      },
      {
        name: "Evaluasi KPI & Produktivitas Mekanik",
        note: "Metrik jam kerja pengerjaan vs pendapatan per montir",
        starter: false,
        proGrowth: true,
        enterprise: true,
      },
    ],
  },
  {
    category: "7. Holding, Multi-Cabang & Keamanan SaaS",
    iconName: "ShieldCheck",
    rows: [
      {
        name: "Dashboard Eksekutif Holding Pusat",
        note: "Grafik komparasi performa antar-outlet di satu layar",
        starter: false,
        proGrowth: false,
        enterprise: true,
      },
      {
        name: "Laporan Konsolidasi Omzet Semua Cabang",
        note: "Rekap keuangan gabungan otomatis dalam hitungan detik",
        starter: false,
        proGrowth: false,
        enterprise: true,
      },
      {
        name: "Isolasi Database Multi-Tenant (Garansi 0 Bocor Data)",
        note: "Data terisolasi ketat via session.tenantId di tingkat arsitektur",
        starter: true,
        proGrowth: true,
        enterprise: true,
      },
      {
        name: "Custom Domain White-Label Sendiri",
        note: "Gunakan nama domain bengkel Anda (misal: servis.bengkelanda.com)",
        starter: false,
        proGrowth: false,
        enterprise: "Tersedia (Opsi Enterprise)",
      },
      {
        name: "Dukungan Teknis & Onboarding VIP",
        note: "Pendampingan setup awal dan pelatihan tim bengkel",
        starter: "WhatsApp Standard",
        proGrowth: "Prioritas WA & Telepon",
        enterprise: "Dedicated Account Manager VIP",
      },
    ],
  },
];

