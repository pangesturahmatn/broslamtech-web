export interface PillarFeature {
  title: string;
  desc: string;
  modalCategory: string;
  modalTitle: string;
  modalFunction: string;
  modalBenefit: string;
}

export interface PillarItem {
  id: string;
  tabLabel: string;
  title: string;
  desc: string;
  features: PillarFeature[];
}

export const pillarsData: PillarItem[] = [
  {
    "id": "pillar-workshop",
    "tabLabel": "1. Workshop & Stall",
    "title": "Pilar 1: Workshop, Stall & Alur Pengerjaan Servis",
    "desc": "Mengatur alur kendaraan dari pintu masuk hingga uji kelayakan jalan tanpa miskomunikasi.",
    "features": [
      {
        "title": "Service Order (SPK) Digital",
        "desc": "Pendaftaran keluhan, checklist fisik mobil awal, penunjukan Lead & Asisten Mekanik dengan rasio komisi otomatis.",
        "modalCategory": "A. Workshop & Manajemen Servis",
        "modalTitle": "Service Order (SPK) & Perintah Kerja Digital",
        "modalFunction": "Manajemen siklus hidup servis lengkap dari pendaftaran keluhan, checklist baret fisik awal, alokasi mekanik utama & asisten, integrasi stok suku cadang FIFO otomatis, serta pencetakan dokumen formal PKB, LPA, dan kartu garansi.",
        "modalBenefit": "Menjamin ketertelusuran riwayat servis kendaraan secara presisi dan menghilangkan kuitansi manual yang rentan kecurangan atau manipulasi."
      },
      {
        "title": "Dashboard TV Stall Monitor",
        "desc": "Tampilan visual 1-10 stall pengerjaan aktif secara real-time di bengkel untuk memantau durasi servis tiap mobil.",
        "modalCategory": "A. Workshop & Manajemen Servis",
        "modalTitle": "Dashboard TV Stall Monitor Workshop (/monitoring/tv)",
        "modalFunction": "Pemantauan status stall kerja (1 s/d 10 stall), detail plat nomor, nama pemilik, progres waktu pengerjaan servis, dan tombol cepat evakuasi unit ke status QC.",
        "modalBenefit": "Membantu Kepala Mekanik (Foreman) mengawasi beban stall kerja secara transparan, menghilangkan waktu nganggur mekanik, dan mempercepat perputaran unit."
      },
      {
        "title": "Job Control Board (JCB) Ruang Tunggu",
        "desc": "Papan monitor status transparan untuk ruang tunggu pelanggan layaknya informasi jadwal penerbangan bandara.",
        "modalCategory": "A. Workshop & Manajemen Servis",
        "modalTitle": "Job Control Board (JCB) Ruang Tunggu (/monitoring/jcb)",
        "modalFunction": "Sinkronisasi real-time status SPK ke layar Smart TV ruang tunggu pelanggan: visualisasi durasi pengerjaan, capping progres otomatis (85%, QC 90%, selesai 100%), dan daftar sparepart yang diganti.",
        "modalBenefit": "Meningkatkan rasa percaya pelanggan secara drastis melalui transparansi estimasi waktu servis yang terpampang jelas di ruang tunggu."
      }
    ]
  },
  {
    "id": "pillar-inventory",
    "tabLabel": "2. Gudang & FIFO",
    "title": "Pilar 2: Gudang Sparepart, FIFO Costing & Konsinyasi",
    "desc": "Mencegah kebocoran stok dan menghitung modal HPP murni berdasarkan urutan batch pembelian barang.",
    "features": [
      {
        "title": "Kartu Stok & FIFO Costing Murni",
        "desc": "Pencatatan kuantitas stok fisik per cabang, riwayat kartu mutasi (StockMovement), dan log batch harga beli FIFO.",
        "modalCategory": "B. Inventaris & Logistik Gudang",
        "modalTitle": "Stok Barang & Kartu Stok (FIFO Costing)",
        "modalFunction": "Pencatatan stok per cabang, riwayat kartu mutasi, log batch harga beli FIFO, warning stok kritis (minimal stock), serta Tempat Sampah soft-delete per cabang.",
        "modalBenefit": "Menjamin akurasi HPP (Harga Pokok Penjualan) secara riil untuk menghindari kerugian akibat fluktuasi harga beli supplier."
      },
      {
        "title": "Barcode Label & Scanner Kamera HP",
        "desc": "Pembuat label barcode thermal roll untuk rak gudang dan pemindaian stok cukup menggunakan kamera smartphone staf.",
        "modalCategory": "B. Inventaris & Logistik Gudang",
        "modalTitle": "Scanner Stok Mobile Kamera HP (/inventory/scan)",
        "modalFunction": "Scan barcode untuk restock barang, retur barang, transfer antar cabang, pencarian cepat data produk langsung dari bawah kolong mobil melalui kamera HP.",
        "modalBenefit": "Memangkas waktu pencarian barang oleh tim gudang dan mekanik, serta menghemat jutaan rupiah karena tidak perlu membeli alat scanner laser mahal."
      },
      {
        "title": "Konsinyasi Supplier (Pay-as-Sold)",
        "desc": "Penerimaan suku cadang titipan distributor tanpa beban hutang di muka. Hutang baru diakui saat barang laku terjual.",
        "modalCategory": "B. Inventaris & Logistik Gudang",
        "modalTitle": "Sistem Konsinyasi Supplier Terintegrasi (/purchasing/konsinyasi)",
        "modalFunction": "Stok fisik bertambah di gudang saat barang diterima (Surat Jalan), bypass hutang (Rp 0), pengakuan otomatis Hutang & HPP saat part terjual di SPK/POS, dan cetak Berita Acara rekonsiliasi.",
        "modalBenefit": "Menjaga likuiditas modal kerja bengkel tetap aman karena pembayaran ke distributor hanya terjadi jika sparepart sudah laku dibeli pelanggan."
      }
    ]
  },
  {
    "id": "pillar-pos",
    "tabLabel": "3. Kasir & Uang Muka",
    "title": "Pilar 3: Kasir POS, Uang Muka DP & Payment Gateway",
    "desc": "Mencegah selisih uang laci kasir, penerbitan voucher DP, dan pembayaran QRIS instan bebas transfer palsu.",
    "features": [
      {
        "title": "Kasir SPK & Direct Sales Toko",
        "desc": "Checkout cepat untuk pelunasan biaya perbaikan mobil maupun penjualan retail sparepart/oli bawa pulang.",
        "modalCategory": "C. Penjualan & Kasir (POS)",
        "modalTitle": "Penjualan Langsung OTC Retail & Kasir SPK (/sales)",
        "modalFunction": "Pemilihan cepat produk katalog, diskon bertingkat (Tier Membership), PPN otomatis, cetak struk kasir thermal, serta kirim nota PDF otomatis ke WhatsApp pelanggan.",
        "modalBenefit": "Menangkap peluang pendapatan retail dari pelanggan walk-in dan memastikan pencatatan transaksi servis tercatat 100% rapi."
      },
      {
        "title": "Voucher Deposit Uang Muka (DP)",
        "desc": "Penerbitan kode booking fee mandiri, struk tanda terima DP, dan klaim potong otomatis saat SPK lunas.",
        "modalCategory": "C. Penjualan & Kasir (POS)",
        "modalTitle": "Sistem Saldo Deposit & Uang Muka Booking Fee",
        "modalFunction": "Penerbitan kode unik voucher DP, cetak struk penerimaan DP, kirim rincian via WA, auto-deduct saat pelunasan SPK, dan auto-journaling Debit Kas vs Kredit Kewajiban Uang Muka (2-1200).",
        "modalBenefit": "Menghilangkan risiko selisih kas penahanan booking fee dan mengikat komitmen kedatangan pelanggan agar tidak membatalkan janji servis."
      },
      {
        "title": "QRIS Dinamis & Multi Virtual Account",
        "desc": "Pembayaran nontunai Midtrans per-transaksi dengan auto-verifikasi lunas tanpa perlu bukti transfer kertas.",
        "modalCategory": "C. Penjualan & Kasir (POS)",
        "modalTitle": "Payment Gateway QRIS Dinamis & Virtual Account (/pos)",
        "modalFunction": "Integrasi QRIS per transaksi dan Virtual Account multi-bank (BCA, Mandiri, BNI, BRI). Status otomatis berubah menjadi LUNAS via webhook signature seketika customer membayar.",
        "modalBenefit": "Mencegah 100% fraud struk transfer palsu/editan Photoshop yang sering menyasar kasir bengkel di jam-jam sibuk."
      }
    ]
  },
  {
    "id": "pillar-accounting",
    "tabLabel": "4. Akuntansi SAK ETAP",
    "title": "Pilar 4: Keuangan & Akuntansi Standar SAK ETAP",
    "desc": "Membentuk pembukuan formal standar perbankan secara otomatis tanpa perlu merekrut banyak akuntan manual.",
    "features": [
      {
        "title": "Auto-Journaling & Buku Besar (GL)",
        "desc": "Setiap transaksi SPK lunas, pembelian sparepart PO, dan penggajian otomatis membentuk jurnal double-entry.",
        "modalCategory": "D. Keuangan & Akuntansi (GL)",
        "modalTitle": "Buku Jurnal Umum & Buku Besar Otomatis (/accounting/journal)",
        "modalFunction": "Pencatatan transaksi finansial double-entry otomatis, penyelarasan Chart of Accounts (COA 1-xxxx s/d 9-xxxx), filter cabang aktif, dan jurnal penyesuaian manual.",
        "modalBenefit": "Memberikan ketertelusuran audit finansial 100% transparan sehingga Owner bisa memeriksa asal-usul membengkaknya beban biaya operasional kapan saja."
      },
      {
        "title": "Laba Rugi Akrual & Neraca Lajur",
        "desc": "Laporan laba bersih berjalan, pemisahan nominal Jasa Bersih vs Part, serta lembar kerja audit 10 kolom.",
        "modalCategory": "D. Keuangan & Akuntansi (GL)",
        "modalTitle": "Laporan Laba Rugi, Neraca & Kertas Kerja 10 Kolom (/reports)",
        "modalFunction": "Laporan performa finansial formal bulanan/tahunan, perbandingan pendapatan jasa murni vs part, neraca lajur 10 kolom, dan ekspor instan PDF/Excel.",
        "modalBenefit": "Memudahkan Owner mempresentasikan kesehatan bisnis bengkel ke pemegang saham atau saat mengajukan pinjaman ekspansi modal ke bank."
      },
      {
        "title": "Matriks Perbandingan Multi-Cabang",
        "desc": "Analisis side-by-side pendapatan dan biaya operasional antar-cabang untuk menemukan cabang paling efisien.",
        "modalCategory": "D. Keuangan & Akuntansi (GL)",
        "modalTitle": "Matriks Pemasukan & Pengeluaran Multicabang (/reports/expense-matrix)",
        "modalFunction": "Perbandingan side-by-side tren pemasukan jasa vs part, biaya sewa alat, dan rincian alokasi beban listrik, gaji, serta sewa antar cabang.",
        "modalBenefit": "Membantu Owner mengambil keputusan strategis: cabang mana yang perlu dievaluasi beban operasionalnya dan cabang mana yang menjadi mesin pencetak laba."
      }
    ]
  },
  {
    "id": "pillar-crm",
    "tabLabel": "5. CRM & WhatsApp",
    "title": "Pilar 5: CRM, WhatsApp Gateway & Mesin Retensi Pelanggan",
    "desc": "Membangun mesin retensi otomatis, penanganan SPK batal, dan saluran komunikasi langsung tanpa biaya langganan pihak ketiga.",
    "features": [
      {
        "title": "Live Chat WhatsApp Terpadu di ERP",
        "desc": "CS membalas pesan WhatsApp pelanggan langsung dari dasbor ERP tanpa perlu memegang handphone fisik bengkel.",
        "modalCategory": "G. CRM, WA Gateway & Loyalty",
        "modalTitle": "WhatsApp Live Chat Hub & Obrolan Real-Time (/crm/chats)",
        "modalFunction": "Sidebar obrolan mirip WhatsApp Web, bubble chat dua arah, riwayat profil pelanggan, total belanja, dan plat nomor langsung terlihat di samping ruang obrolan.",
        "modalBenefit": "Admin CS merespons konsultasi servis mobil secara cepat dari satu monitor kerja tanpa berebut HP fisik dengan kasir, serta histori chat terdokumentasi aman di database."
      },
      {
        "title": "Chatbot Auto-Responder & Asisten AI",
        "desc": "Menjawab pertanyaan booking servis, estimasi biaya, dan lokasi bengkel 24 jam nonstop secara otomatis.",
        "modalCategory": "G. CRM, WA Gateway & Loyalty",
        "modalTitle": "Chatbot Auto-Responder & AI Assistant (/crm/chats)",
        "modalFunction": "Mesin penjawab otomatis berbasis kata kunci/angka menu pilihan dan asisten AI otomotif cerdas (Gemini & Groq Fallback) yang mampu mendiagnosa keluhan mobil awal pelanggan.",
        "modalBenefit": "Bengkel Anda tetap melayani calon customer yang bertanya di malam hari atau saat bengkel tutup, mengonversi chat masuk menjadi booking servis esok pagi."
      },
      {
        "title": "WhatsApp Blasting Campaign Terjadwal",
        "desc": "Kirim siaran promo bulanan dan ucapan hari raya ke ribuan database pelanggan dengan penjadwalan otomatis.",
        "modalCategory": "G. CRM, WA Gateway & Loyalty",
        "modalTitle": "Auto-Schedule WhatsApp Blasting Campaign (/crm)",
        "modalFunction": "Pengaturan campaign blast dengan background worker scheduler di server. Pengiriman berjalan tepat waktu sesuai kalender promosi, dilengkapi exclusion list nomor keluarga.",
        "modalBenefit": "CS dan tim marketing bisa merencanakan blast promo di awal bulan dan sistem akan mengirimkannya secara terjadwal tanpa membebani laptop staf."
      },
      {
        "title": "Penyelamatan SPK Batal (Follow-Up FU 1-4)",
        "desc": "Melacak alasan calon customer yang membatalkan servis dan alur follow-up persuasif hingga 4 tahapan.",
        "modalCategory": "G. CRM, WA Gateway & Loyalty",
        "modalTitle": "Pelacakan Progres Follow-Up SPK Batal / Non-Closing (/crm)",
        "modalFunction": "Pencatatan calon pelanggan yang batal servis beserta alasannya (kemahalan, antre lama, part kosong), lengkap dengan reminder bertahap FU 1 s/d FU 4 via template WhatsApp personal.",
        "modalBenefit": "Menyelamatkan 20-30% potensi omset yang sempat batal dengan cara meyakinkan kembali customer yang ragu agar bersedia menjadwalkan ulang servis."
      },
      {
        "title": "Dual-Engine WhatsApp Gateway",
        "desc": "Saluran pengiriman invoice, estimasi, dan reminder otomatis dengan arsitektur hemat RAM server tanpa vendor mahal.",
        "modalCategory": "G. CRM, WA Gateway & Loyalty",
        "modalTitle": "Dual-Engine WhatsApp Gateway (WhatsMeow + Baileys)",
        "modalFunction": "Integrasi Go Engine hemat RAM sebagai pengirim utama dengan Baileys Backup sebagai fallback otomatis. Auto-healing penautan sesi QR, status badge real-time, dan isolasi nomor cabang.",
        "modalBenefit": "Menghemat jutaan rupiah biaya sewa vendor WhatsApp Gateway pihak ketiga dan menjamin pengiriman pesan nota kasir berjalan 24/7 tanpa risiko pesan gagal."
      },
      {
        "title": "Buku Servis Digital (Customer PWA)",
        "desc": "Aplikasi web pelanggan untuk cek odometer, rekam medis mobil, jadwal servis berkala, dan kartu diskon.",
        "modalCategory": "G. CRM, WA Gateway & Loyalty",
        "modalTitle": "Portal Buku Servis Digital Customer (PWA Stiker QR)",
        "modalFunction": "Customer cukup scan stiker QR di kaca mobil atau login Nomor HP + PIN (tanpa download aplikasi di Play Store) untuk melihat riwayat penggantian part, ulasan bintang, dan download nota.",
        "modalBenefit": "Memberikan pengalaman berkelas layaknya bengkel resmi ATPM, meningkatkan kepercayaan konsumen, dan mendongkrak retensi kunjungan servis hingga 25%."
      }
    ]
  },
  {
    "id": "pillar-geo",
    "tabLabel": "6. Peta Wilayah & BPS",
    "title": "Pilar 6: Pemantauan Wilayah, Tracking Geografis & BPS",
    "desc": "Memetakan sebaran domisili pelanggan, mengidentifikasi zona teramai vs tersepi, dan integrasi BPS resmi.",
    "features": [
      {
        "title": "Segmentasi Peta Pelanggan",
        "desc": "Visualisasi heatmap sebaran wilayah domisili pelanggan berdasarkan kecamatan dan kabupaten asal unit mobil.",
        "modalCategory": "I. Analisis Geografis & Pasar",
        "modalTitle": "Tracking Peta Sebaran & Segmentasi Pelanggan (/owner/analisis-wilayah)",
        "modalFunction": "Visualisasi pemetaan koordinat domisili pelanggan dari data SPK. Membedakan zona merah (kantong pelanggan teramai) dan zona abu-abu (wilayah sepi yang belum terjangkau promosi).",
        "modalBenefit": "Membantu tim marketing mengarahkan radius iklan Meta Ads/Google Ads secara presisi ke kecamatan dengan populasi mobil tinggi."
      },
      {
        "title": "Integrasi Live API BPS Daerah",
        "desc": "Koneksi langsung ke data resmi Badan Pusat Statistik untuk UMK, laju inflasi, dan kepadatan penduduk lokal.",
        "modalCategory": "I. Analisis Geografis & Pasar",
        "modalTitle": "Integrasi Live Web API BPS Daerah (UMK & Inflasi)",
        "modalFunction": "Penarikan data statistik resmi BPS daerah secara real-time: Upah Minimum Kabupaten (UMK 2026), angka inflasi bulanan, jumlah kendaraan terdaftar, dan download Berita Resmi Statistik (BRS).",
        "modalBenefit": "Membantu Owner memvalidasi apakah tarif jasa bengkel sudah sesuai daya beli masyarakat lokal dan memitigasi risiko kelayakan sebelum membuka cabang baru."
      },
      {
        "title": "Kalkulator Potensi Pasar Cabang Baru",
        "desc": "Simulasi potensi pasar dan estimasi titik impas (Break Even Point) saat merencanakan ekspansi cabang baru.",
        "modalCategory": "I. Analisis Geografis & Pasar",
        "modalTitle": "Kalkulator Potensi Pasar & Studi Kelayakan Cabang",
        "modalFunction": "Alat hitung potensi perputaran unit mobil di radius 5-10 km dari calon lokasi bengkel baru, menghitung estimasi biaya sewa tempat, proyeksi kapasitas stall, dan simulasi laba rugi.",
        "modalBenefit": "Memberikan ketenangan pikiran dan data objektif bagi Owner sebelum mengucurkan ratusan juta rupiah untuk membuka cabang baru."
      }
    ]
  },
  {
    "id": "pillar-assets",
    "tabLabel": "7. Aset Fisik & IT",
    "title": "Pilar 7: Manajemen Aset Fisik & Infrastruktur Digital IT",
    "desc": "Mengawasi mesin kerja bengkel bernilai tinggi serta mencegah domain & hosting langganan mati mendadak.",
    "features": [
      {
        "title": "Aset Tetap & Depresiasi PSAK 16",
        "desc": "Pencatatan lift car, kompresor, mesin spooring, komputer, dan akumulasi penyusutan otomatis tiap bulan.",
        "modalCategory": "D. Keuangan & Manajemen Aset",
        "modalTitle": "Manajemen Aset Tetap & Depresiasi Garis Lurus (/accounting/fixed-assets)",
        "modalFunction": "Pencatatan nilai perolehan mesin kerja bengkel, metode penyusutan garis lurus standar PSAK 16, posting jurnal beban penyusutan bulanan otomatis, dan penentuan nilai sisa buku.",
        "modalBenefit": "Menyajikan nilai aset bersih bengkel secara akurat di dalam Neraca akhir tahun dan menyiapkan dana cadangan peremajaan mesin bengkel."
      },
      {
        "title": "Inventaris GA & Pengadaan Alat Kantor",
        "desc": "Formulir pengajuan alat kerja non-sparepart dengan alur persetujuan bertingkat (HCGA ➔ GM ➔ Direktur).",
        "modalCategory": "B. Inventaris & Logistik Gudang",
        "modalTitle": "Pengajuan GA & Inventaris Kantor (/purchasing/equipment)",
        "modalFunction": "Sistem pengajuan barang operasional bengkel (ATK, seragam, dongkrak, lampu stall) dengan otorisasi berjenjang dan cetak surat pengajuan resmi format A4/F4.",
        "modalBenefit": "Memperketat pengeluaran operasional non-gudang dan mencegah staf membeli aset atau perlengkapan tanpa persetujuan manajemen pusat."
      },
      {
        "title": "Aset IT & Kalender Tagihan Langganan",
        "desc": "Pemantauan domain, VPS hosting, tools AI, akun Google Workspace, dan reminder tanggal jatuh tempo tagihan.",
        "modalCategory": "H. Settings & IT Infrastructure",
        "modalTitle": "Aset & Kontak IT (Domain, Hosting, Tools AI) (/settings/assets-it)",
        "modalFunction": "Katalog multi-tipe (Domain, Hosting, Tools AI, Desain SaaS, VPS), summary total biaya per kategori, grouping penyedia email, dan alert masa kedaluwarsa.",
        "modalBenefit": "Mencegah website bengkel atau WhatsApp gateway mendadak mati akibat domain/VPS expired yang lupa dibayar oleh tim internal."
      }
    ]
  },
  {
    "id": "pillar-hrd",
    "tabLabel": "8. HRD & Payroll",
    "title": "Pilar 8: HRD, Absensi, Roster Luar Daerah & Payroll",
    "desc": "Mengelola kehadiran, roster cuti tim mekanik luar kota, kasbon, dan slip gaji bulanan 100% otomatis.",
    "features": [
      {
        "title": "Payroll & Kalkulasi Komisi Kerja SPK",
        "desc": "Hitung gaji pokok + uang makan + tunjangan transport + komisi pengerjaan SPK - kasbon secara otomatis.",
        "modalCategory": "F. HRD & Penggajian Karyawan",
        "modalTitle": "Payroll & Penggajian Terintegrasi Komisi SPK (/hrd/commissions)",
        "modalFunction": "Kalkulasi otomatis Gaji Pokok, Uang Makan Harian, Tunjangan Kehadiran, Komisi Mekanik & SA dari jasa SPK selesai, potongan kasbon pinjaman, cetak slip gaji formal, dan auto-journaling.",
        "modalBenefit": "Memangkas waktu proses penggajian dari berhari-hari menjadi hitungan menit, serta memastikan hitungan hak komisi mekanik 100% adil dan transparan."
      },
      {
        "title": "Roster Kerja Tim Mekanik Luar Daerah",
        "desc": "Manajemen penjadwalan libur dan cuti mudik tim teknisi luar kota agar kapasitas stall bengkel tetap terjaga.",
        "modalCategory": "F. HRD & Penggajian Karyawan",
        "modalTitle": "Kalender Roster Kerja & Cuti Tim Luar Daerah (/hrd/jadwal-tim)",
        "modalFunction": "Pengaturan tipe roster mudik (Harian/Rapel-30/Rapel-60), kalender cuti/izin terpadu dengan alur persetujuan HRD, dan auto-sync pengurang alfa absensi payroll.",
        "modalBenefit": "Memudahkan koordinasi libur tim bengkel luar daerah agar kapasitas stall bengkel tidak pernah kekurangan mekanik di akhir pekan yang sibuk."
      },
      {
        "title": "Rekrutmen & Ujian Teori/Praktik Online",
        "desc": "Portal lowongan kerja resmi bengkel, tes pemahaman suspensi online, dan lembar penilaian praktik pitstop.",
        "modalCategory": "F. HRD & Penggajian Karyawan",
        "modalTitle": "Portal Karir, Ujian Online & Onboarding Pegawai (/karir)",
        "modalFunction": "Penerimaan berkas lamaran online ramah HP, ujian teori otomotif otomatis nilai (auto-grading), lembar penilaian praktik press bushing pitstop, dan 1-klik terbit NIK + PIN pegawai.",
        "modalBenefit": "Menyaring kandidat mekanik berkualitas tinggi sebelum masuk bengkel dan memangkas proses administrasi onboarding karyawan baru."
      }
    ]
  },
  {
    "id": "pillar-tools",
    "tabLabel": "9. Audit Tools Man",
    "title": "Pilar 9: Modul Tools Man & Audit Checklist Kunci Mekanik",
    "desc": "Perlindungan perkakas kerja mekanik agar kunci pas, socket, dan dongkrak tidak hilang atau tercecer.",
    "features": [
      {
        "title": "Digital Box Kunci Assignment",
        "desc": "Penomoran dan penugasan kotak peralatan kunci (Box Merah, Orange, Hijau) ke masing-masing mekanik penanggung jawab.",
        "modalCategory": "I. Perlindungan Aset & Tools Man",
        "modalTitle": "Penugasan & Master Katalog Kotak Kunci Mekanik (/toolsman)",
        "modalFunction": "Master katalog kunci bengkel (kunci ring pas, soket, obeng, impact wrench), ukuran dinamis (8mm s/d 32mm), penugasan box kunci ke mekanik dengan paginasi rapi.",
        "modalBenefit": "Menetapkan batas tanggung jawab yang jelas bagi setiap mekanik terhadap perkakas kerja yang mereka gunakan setiap hari."
      },
      {
        "title": "Lembar Audit Checklist Mingguan",
        "desc": "Pemeriksaan kondisi fisik perkakas (Lengkap, Rusak, Hilang) dengan tanda tangan digital checker.",
        "modalCategory": "I. Perlindungan Aset & Tools Man",
        "modalTitle": "Checklist Audit Mingguan Kotak Kunci (/toolsman)",
        "modalFunction": "Form audit interaktif mingguan status kunci (LENGKAP / HILANG / RUSAK), progres audit real-time, tanda tangan digital pemeriksa, dan rincian histori kunci hilang.",
        "modalBenefit": "Mendeteksi kehilangan alat kerja lebih awal, menuntut tanggung jawab tim teknisi, dan menyelamatkan kerugian jutaan rupiah tiap tahun untuk beli kunci baru."
      },
      {
        "title": "Pusat Peringatan Suku Cadang & Aset Rusak",
        "desc": "Notifikasi terpusat ke handphone Owner jika terdeteksi perkakas mekanik rusak atau stok gudang menipis.",
        "modalCategory": "I. Perlindungan Aset & Tools Man",
        "modalTitle": "Notification Center & Alert Alat Kerja Rusak (/notification-center)",
        "modalFunction": "Dasbor inbox peringatan sistem: alert alat kerja rusak saat audit toolsman, alert stok sparepart di bawah batas aman, dan live alert jika ada pembatalan SPK kasir.",
        "modalBenefit": "Mempercepat tindak lanjut perbaikan alat kerja sebelum mengganggu kecepatan pengerjaan servis mobil pelanggan."
      }
    ]
  },
  {
    "id": "pillar-strategic",
    "tabLabel": "10. Strategic Plan & Radar",
    "title": "Pilar 10: Dasbor Eksekutif, Komparasi Cabang & Produktivitas Tim",
    "desc": "Memberikan kendali pengawasan dari ketinggian 30.000 kaki: komparasi performa cabang, jam produktif mekanik, radar KPI, dan kontrol divisi.",
    "features": [
      {
        "title": "Dasbor Komparasi Performa Multi-Cabang",
        "desc": "Bandingkan omset, jumlah mobil masuk, unit menginap, dan rasio laba kotor antar cabang secara berdampingan.",
        "modalCategory": "J. Analitik Eksekutif & Visi Bisnis",
        "modalTitle": "Dasbor Komparasi Kinerja Multi-Cabang (/reports/income-matrix)",
        "modalFunction": "Tampilan side-by-side seluruh cabang: perbandingan unit masuk per hari, rasio pendapatan Jasa vs Sparepart, biaya sewa alat, dan tren margin profit bersih.",
        "modalBenefit": "Memudahkan Owner mengidentifikasi cabang yang sedang underperform dan mereplikasi strategi operasional dari cabang yang paling profitabel."
      },
      {
        "title": "Dasbor Produktivitas & Efisiensi Mekanik",
        "desc": "Memantau jam kerja produktif, kecepatan perbaikan stall, dan rasio pencapaian target kerja per teknisi.",
        "modalCategory": "J. Analitik Eksekutif & Visi Bisnis",
        "modalTitle": "Dasbor Produktivitas Mekanik & Capaian Jasa (/hrd/capaian-jasa)",
        "modalFunction": "Monitoring jam efektif stall pengerjaan, perbandingan durasi estimasi vs waktu riil perbaikan, jumlah unit yang diselesaikan per mekanik, dan capaian target omset jasa harian.",
        "modalBenefit": "Menghilangkan budaya mekanik santai saat jam kerja, memberikan reward berbasis data kinerja objektif, dan mempercepat rotasi mobil di stall pengerjaan."
      },
      {
        "title": "Radar Charts Target vs Realisasi",
        "desc": "Grafik laba-laba visual untuk mengevaluasi 9 KPI utama (Omset, Unit, Profit, HRD, Capex, Marketing) seluruh cabang.",
        "modalCategory": "J. Analitik Eksekutif & Visi Bisnis",
        "modalTitle": "Perencanaan Visi Strategis Radar Charts (/strategic-planning)",
        "modalFunction": "Radar chart visualisasi perbandingan target tahunan vs realisasi riil di 9 pilar bisnis bengkel (Omset, Unit Masuk, Profit, Expense, Marketing, Capex, Pelanggan Baru).",
        "modalBenefit": "Memudahkan Owner memantau keseimbangan roda bisnis dari ketinggian 30.000 kaki dan mengambil tindakan perbaikan sebelum akhir tahun tiba."
      },
      {
        "title": "Rencana Kerja Tahunan 12 Bulan (Annual Plan)",
        "desc": "Alokasi target omset, unit mobil, dan pagu anggaran biaya bulanan untuk 5 divisi strategis cabang.",
        "modalCategory": "J. Analitik Eksekutif & Visi Bisnis",
        "modalTitle": "Target Rencana Kerja Tahunan per Bulan (/annual-plan)",
        "modalFunction": "Lembar kerja target 12 bulan (Januari s/d Desember) untuk 5 divisi (Operasional, Finance, Marketing, HRD, CRM) dengan fitur proyeksi pertumbuhan dinamis.",
        "modalBenefit": "Menstandarisasi target kerja sejak awal tahun sehingga seluruh kepala bengkel dan staf memiliki kompas pencapaian yang seragam."
      },
      {
        "title": "Management Control System (MCS Divisi)",
        "desc": "Monitoring program kerja bulanan tiap divisi (HC, GA, Marketing, Operasional, Finance) yang diaudit Owner.",
        "modalCategory": "",
        "modalTitle": "Management Control System (MCS Divisi)",
        "modalFunction": "Monitoring program kerja bulanan tiap divisi (HC, GA, Marketing, Operasional, Finance) yang diaudit Owner.",
        "modalBenefit": ""
      }
    ]
  }
];
