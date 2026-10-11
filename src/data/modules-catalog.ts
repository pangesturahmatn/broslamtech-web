export interface ModuleItem {
  category: string;
  name: string;
  desc?: string;
  func?: string;
  feature?: string;
  benefit?: string;
}

export const allModulesData: ModuleItem[] = [
  {
    "category": "A. Workshop & Manajemen Servis",
    "name": "1. Service Order (SPK) & Perintah Kerja Bengkel — `/service`",
    "func": "Manajemen siklus hidup perawatan dan perbaikan kendaraan pelanggan secara digital.",
    "feature": "Pendaftaran keluhan, checklist fisik awal, penunjukan mekanik (Lead & Asisten) dengan split rasio komisi, integrasi stok FIFO, serta pencetakan dokumen formal PKB, LPA, dan garansi.",
    "benefit": "Menjamin ketertelusuran riwayat servis kendaraan secara presisi dan menghilangkan kuitansi manual yang rentan fraud."
  },
  {
    "category": "A. Workshop & Manajemen Servis",
    "name": "2. Booking & Reservasi Online — `/service/bookings`",
    "func": "Pintu masuk antrean kunjungan terjadwal yang terintegrasi dengan portal customer.",
    "feature": "Kalender reservasi, batasan jam kunjungan (08:00 - 17:00 WIB), alokasi PIC penanggung jawab cabang, deteksi WhatsApp customer baru/lama otomatis, dan fitur konversi instan menjadi SPK.",
    "benefit": "Mengurai kemacetan antrean di bengkel fisik dan memudahkan pencatatan unit booking secara otomatis."
  },
  {
    "category": "A. Workshop & Manajemen Servis",
    "name": "3. Dashboard TV Stall Monitor — `/monitoring/tv`",
    "func": "Tampilan layar visual stall pengerjaan aktif secara real-time di workshop.",
    "feature": "Pemantauan status stall (1-10 stall), detail plat nomor, nama pemilik, progres servis, serta tombol cepat \"Keluarkan Unit\" ke status QC.",
    "benefit": "Membantu kepala mekanik (Foreman) mengawasi beban stall kerja secara transparan dan mempercepat perputaran unit."
  },
  {
    "category": "A. Workshop & Manajemen Servis",
    "name": "4. Job Control Board (JCB) & Monitor TV Ruang Tunggu — `/monitoring/jcb`",
    "func": "Papan informasi digital status pengerjaan untuk ruang tunggu pelanggan.",
    "feature": "Sinkronisasi real-time status SPK, visualisasi durasi pengerjaan, capping progres otomatis (progress 85%, QC 90%, selesai 100%), dan daftar sparepart yang diganti.",
    "benefit": "Meningkatkan rasa percaya pelanggan melalui transparansi estimasi waktu servis yang terpampang jelas di ruang tunggu."
  },
  {
    "category": "A. Workshop & Manajemen Servis",
    "name": "5. Estimasi Harga Cepat — `/service/estimasi`",
    "func": "Kalkulator biaya cepat untuk melayani penawaran harga customer walk-in.",
    "feature": "Autocomplete katalog jasa/part, input kilometer kendaraan, panel pratinjau nota interaktif (A4/Letter/F4 setengah) dengan layout customizer (margin, font, logo, PPN, disclaimer), dan share PDF ke WhatsApp.",
    "benefit": "Mempercepat proses penawaran (closing) tanpa harus mengotori database transaksi dengan data draf sampah."
  },
  {
    "category": "B. Inventaris & Logistik Gudang",
    "name": "6. Katalog Produk & Jasa Global — `/products`",
    "func": "Master database terpusat untuk seluruh barang dagangan dan jenis jasa perbaikan.",
    "feature": "Pengaturan Kode SKU/Part, kategori, satuan, harga beli (HPP), harga jual, tipe produk, edit inline SKU/Part, dan autocomplete pencarian.",
    "benefit": "standardisasi nama barang dan harga jasa di seluruh cabang, meminimalisir kesalahan input admin."
  },
  {
    "category": "B. Inventaris & Logistik Gudang",
    "name": "7. Stok Barang & Kartu Stok (FIFO Costing) — `/inventory`",
    "func": "Manajemen kuantitas stok fisik gudang berbasis cabang aktif.",
    "feature": "Pencatatan stok per cabang, riwayat kartu mutasi (StockMovement), log batch harga beli FIFO, warning stok kritis (minimal stock), serta Tempat Sampah soft-delete per cabang.",
    "benefit": "Menjamin akurasi HPP (Harga Pokok Penjualan) secara riil untuk menghindari kerugian akibat fluktuasi harga beli supplier."
  },
  {
    "category": "B. Inventaris & Logistik Gudang",
    "name": "8. Cetak Barcode Label — `/products/print-barcode`",
    "func": "Pembuat label kode barcode fisik untuk rak dan kemasan sparepart.",
    "feature": "Antrean cetak massal, layout stiker thermal roll (50x30 / 40x20mm) atau stiker sheet A4, serta fitur hitung Qty cetak per kemasan dus/pack.",
    "benefit": "Mempercepat proses stock opname dan pelabelan inventaris di rak gudang agar terlihat rapi dan profesional."
  },
  {
    "category": "B. Inventaris & Logistik Gudang",
    "name": "9. Scanner Stok Mobile — `/inventory/scan`",
    "func": "Modul pemindaian barcode stok portabel menggunakan kamera handphone.",
    "feature": "Scan barcode untuk update stok, retur barang, transfer cabang, pencarian cepat data produk, dan integrasi kamera HP langsung ke database.",
    "benefit": "Memangkas waktu pencarian barang oleh tim gudang dan menghilangkan kebutuhan alat scanner laser mahal."
  },
  {
    "category": "B. Inventaris & Logistik Gudang",
    "name": "10. Pembelian & Purchase Order (PO) — `/purchasing`",
    "func": "Manajemen pengadaan suku cadang ke supplier luar.",
    "feature": "Formulir input PO, alur otorisasi persetujuan (DRAFT → APPROVED → DITERIMA), auto-update stok gudang saat diterima, dan pencatatan histori harga beli.",
    "benefit": "Mengontrol komitmen belanja gudang dan mempermudah rekonsiliasi faktur pembelian dari supplier."
  },
  {
    "category": "B. Inventaris & Logistik Gudang",
    "name": "11. Manajemen Supplier & Pemasok — `/purchasing/suppliers`",
    "func": "Direktori mitra pemasok barang dagangan.",
    "feature": "Pengaturan tempo pembayaran hutang, histori PO per supplier, filter kota pintar supplier, dan data kontak sales.",
    "benefit": "Memudahkan pencarian alternatif supplier termurah dan memelihara hubungan bisnis jangka panjang."
  },
  {
    "category": "B. Inventaris & Logistik Gudang",
    "name": "12. Pengajuan GA & Inventaris Kantor (General Affairs) — `/purchasing/equipment`",
    "func": "Formulir pengajuan inventaris alat kerja bengkel atau ATK non-sparepart.",
    "feature": "Form pengajuan dengan alur persetujuan bertingkat (HCGA → General Manager → Direktur), dan cetak PDF A4.",
    "benefit": "Memperketat pengeluaran operasional non-gudang dan mencegah pembelian aset tanpa persetujuan manajemen pusat."
  },
  {
    "category": "C. Penjualan & Kasir (POS)",
    "name": "13. Penjualan Langsung OTC (Direct Sales POS) — `/sales`",
    "func": "Kasir penjualan retail sparepart atau oli langsung tanpa antrean servis mobil.",
    "feature": "Pemilihan cepat produk katalog, input data pembeli retail, checkout POS, diskon manual, PPN otomatis, dan cetak struk pembayaran mini-printer.",
    "benefit": "Menangkap peluang pendapatan retail dari pelanggan walk-in yang hanya ingin membeli oli atau suku cadang untuk dipasang sendiri."
  },
  {
    "category": "C. Penjualan & Kasir (POS)",
    "name": "14. Retur Penjualan Direct Sales — `/sales/rekap-toko`",
    "func": "Modul pembatalan transaksi retail dan pengembalian uang/stok.",
    "feature": "Input nomor nota asal, validasi kuantitas retur, update stok otomatis ke gudang, dan pemotongan saldo kas kasir.",
    "benefit": "Menjaga kebersihan pencatatan stok dan kasir dari transaksi retur yang tidak diaudit."
  },
  {
    "category": "C. Penjualan & Kasir (POS)",
    "name": "15. Buku Kas Harian & Setoran Kasir (Kas Kecil) — `/accounting/kas-kecil`",
    "func": "Rekonsiliasi modal laci kasir harian.",
    "feature": "Pencatatan saldo kas awal, input pengeluaran operasional kecil, pencatatan setoran kas ke Bank/Owner dengan jurnal akuntansi otomatis.",
    "benefit": "Mencegah terjadinya selisih kas harian kasir dan mempermudah setoran berkala ke rekening pusat."
  },
  {
    "category": "D. Keuangan & Akuntansi (GL)",
    "name": "16. Finance Hub & Dasbor Profitabilitas — `/finance-hub`",
    "func": "Dasbor analisis performa profit riil per cabang bagi Owner.",
    "feature": "Metrik laba berjalan, saldo kas/bank, pemisahan nominal Jasa Bersih, Sparepart, Sewa Alat, dan Komisi Tim secara akrual.",
    "benefit": "Menyajikan gambaran kesehatan keuangan bengkel secara real-time tanpa harus menunggu laporan bulanan akuntan selesai."
  },
  {
    "category": "D. Keuangan & Akuntansi (GL)",
    "name": "17. Chart of Accounts (COA) Akuntansi — `/accounting/chart-of-accounts`",
    "func": "Manajemen bagan akun keuangan perusahaan.",
    "feature": "COA Editor bergaya spreadsheet Excel, support klasifikasi SAK ETAP (1-XXXX Aset s/d 9-XXXX Pajak), dan sinkronisasi akun standar otomatis.",
    "benefit": "standardisasi klasifikasi pembukuan agar laporan keuangan bengkel diakui secara resmi oleh standar perbankan dan perpajakan Indonesia."
  },
  {
    "category": "D. Keuangan & Akuntansi (GL)",
    "name": "18. Saldo Awal Neraca (Opening Balance) — `/accounting/opening-balance`",
    "func": "Pengaturan saldo awal neraca di awal migrasi sistem.",
    "feature": "Form balance debet-kredit akun neraca dan penguncian saldo awal.",
    "benefit": "Memberikan titik awal pembukuan yang valid untuk kelanjutan laporan keuangan historis."
  },
  {
    "category": "D. Keuangan & Akuntansi (GL)",
    "name": "19. Buku Jurnal Umum (Journal Entries) — `/accounting/journal`",
    "func": "Catatan transaksi keuangan kronologis double-entry.",
    "feature": "Auto-journaling dari SPK selesai, penjualan POS, penggajian, kas kecil, dan PO pembelian, serta input jurnal penyesuaian manual.",
    "benefit": "Menjaging keabsahan transaksi keuangan (akuntabilitas) sehingga audit finansial dapat dilakukan kapan saja."
  },
  {
    "category": "D. Keuangan & Akuntansi (GL)",
    "name": "20. Buku Besar (General Ledger) — `/accounting/ledger`",
    "func": "Pengelompokkan mutasi debet/kredit per akun COA.",
    "feature": "Filter per akun, filter cabang aktif, filter tanggal, dan pencarian deskripsi transaksi.",
    "benefit": "Memudahkan penelusuran asal-usul membengkaknya saldo beban atau mutasi kas bank tertentu secara mendetail."
  },
  {
    "category": "D. Keuangan & Akuntansi (GL)",
    "name": "21. Neraca Saldo & Kertas Kerja — `/accounting/trial-balance`",
    "func": "Laporan saldo akhir seluruh akun sebelum proses penyesuaian laba rugi.",
    "feature": "Penampilan debet-kredit neraca saldo, kolom penyesuaian manual langsung, dan filter cabang aktif.",
    "benefit": "Mempercepat proses pembuatan neraca lajur bulanan bagi tim auditor internal."
  },
  {
    "category": "D. Keuangan & Akuntansi (GL)",
    "name": "22. Anggaran & Kas Kecil (Budgeting) — `/accounting/kas-kecil`",
    "func": "Kontrol dan batasan pengeluaran operasional cabang.",
    "feature": "Pagu anggaran kategori bulanan, real-time budget usage bar, top-up saldo, limit persetujuan otomatis (≤ Rp 500.000), dan workflow approval Owner untuk nominal besar.",
    "benefit": "Mencegah kebocoran dana kas kecil cabang dan menekan pengeluaran operasional di luar anggaran."
  },
  {
    "category": "D. Keuangan & Akuntansi (GL)",
    "name": "23. Kelola Piutang Usaha (Receivables) — `/accounting/receivables`",
    "func": "Monitoring dan penagihan transaksi SPK tempo instansi/korporasi.",
    "feature": "Monitoring jatuh tempo piutang, status pelunasan, cetak invoice piutang rapat formal, dan generator draft tagihan ramah AI (WhatsApp Reminder via Ollama).",
    "benefit": "Mempercepat penarikan kas (cash collection) dari pelanggan piutang korporasi/fleet untuk kelancaran arus kas."
  },
  {
    "category": "D. Keuangan & Akuntansi (GL)",
    "name": "24. Kelola Hutang Dagang (Payables) — `/accounting/payables`",
    "func": "Monitoring komitmen pembayaran pembelian barang PO ke supplier.",
    "feature": "Histori cicilan hutang, warning jatuh tempo, dan statement akun hutang per supplier.",
    "benefit": "Menjaga reputasi kredit bengkel di mata supplier dengan pembayaran tepat waktu."
  },
  {
    "category": "D. Keuangan & Akuntansi (GL)",
    "name": "25. Aset Tetap & Depresiasi (Fixed Assets) — `/accounting/fixed-assets`",
    "func": "Manajemen inventaris aset bernilai tinggi (kompresor, lift car, komputer, gedung).",
    "feature": "Pencatatan nilai perolehan aset, metode penyusutan garis lurus PSAK 16, akumulasi depresiasi otomatis bulanan, dan posting jurnal beban penyusutan.",
    "benefit": "Menyajikan nilai aset bersih bengkel secara akurat di dalam Neraca akhir tahun."
  },
  {
    "category": "D. Keuangan & Akuntansi (GL)",
    "name": "26. Tutup Buku Bulanan (Period Closing) — `/accounting/close-month`",
    "func": "Penguncian data transaksi pada periode bulan tertentu.",
    "feature": "Verifikasi transaksi belum lunas, penguncian edit/hapus jurnal lama, dan otorisasi buka kunci manual oleh Owner.",
    "benefit": "Mencegah perubahan data keuangan historis secara sengaja maupun tidak sengaja setelah laporan pajak dilaporkan."
  },
  {
    "category": "E. Laporan & Analitik Makro",
    "name": "27. Laporan Keuangan Neraca & Laba Rugi — `/accounting/reports`",
    "func": "Laporan performa finansial formal untuk pihak internal maupun eksternal (bank/pajak).",
    "feature": "Laporan Laba Rugi Akrual, Laporan Neraca, Laporan Arus Kas, filter periode bulanan/tahunan, dan opsi ekspor PDF/Excel.",
    "benefit": "Memudahkan Owner mempresentasikan kinerja bisnis bengkel ke pemegang saham atau saat mengajukan pinjaman bank."
  },
  {
    "category": "E. Laporan & Analitik Makro",
    "name": "28. Neraca Lajur (Worksheet 10 Kolom) — `/reports/worksheet`",
    "func": "Lembar kerja audit komprehensif akuntansi bulanan.",
    "feature": "Penjajaran Neraca Saldo, Penyesuaian, Neraca Setelah Penyesuaian, Laba Rugi, dan Neraca Akhir secara berdampingan.",
    "benefit": "Menjamin akurasi mutlak sebelum laporan keuangan final dipublikasikan."
  },
  {
    "category": "E. Laporan & Analitik Makro",
    "name": "29. Matriks Pemasukan & Pengeluaran Multicabang — `/reports/income-matrix` & `/reports/expense-matrix`",
    "func": "Analisis perbandingan performa finansial antar cabang secara side-by-side.",
    "feature": "Matriks tren pendapatan Jasa vs Part per cabang, matriks komparasi biaya sewa alat, and matriks rincian alokasi beban operasional per cabang.",
    "benefit": "Membantu Owner mengidentifikasi cabang mana yang memiliki efisiensi beban tertinggi dan cabang mana yang menghasilkan profit terbesar."
  },
  {
    "category": "E. Laporan & Analitik Makro",
    "name": "30. Analisis Wilayah & Integrasi BPS API — `/owner/analisis-wilayah`",
    "func": "Alat penunjang keputusan strategis berbasis data ekonomi makro wilayah cabang bengkel.",
    "feature": "Integrasi live API data BPS daerah (UMK 2026, laju inflasi daerah, kepadatan penduduk, laju inflasi bulanan), dan download PDF resmi Berita Resmi Statistik (BRS).",
    "benefit": "Membantu Owner dalam memetakan harga jasa yang kompetitif sesuai UMK lokal dan menentukan lokasi terbaik untuk membuka cabang baru (franchise)."
  },
  {
    "category": "F. HRD & Penggajian Karyawan",
    "name": "31. Absensi & Kehadiran Karyawan — `/absensi`",
    "func": "Pencatatan kehadiran harian staf bengkel dan kasir.",
    "feature": "Pencatatan check-in/check-out harian, rekap bulanan kehadiran (Hadir, Alfa, Izin, Sakit, Terlambat), dan fitur Edit Koreksi Absensi Manual HRD langsung di tabel.",
    "benefit": "Mengurangi tingkat keterlambatan karyawan dan menyediakan data kehadiran yang akurat untuk penggajian."
  },
  {
    "category": "F. HRD & Penggajian Karyawan",
    "name": "32. Uang Harian & Tunjangan Dinamis — `/hrd`",
    "func": "Pengelolaan tunjangan makan dan transport harian karyawan.",
    "feature": "Checkbox klaim uang makan/transport harian, input nominal kustom rupiah per hari per karyawan, dan auto-accumulate ke slip gaji bulanan.",
    "benefit": "Memungkinkan HRD memberikan bonus tunjangan transport harian secara fleksibel sesuai kinerja kehadiran riil karyawan."
  },
  {
    "category": "F. HRD & Penggajian Karyawan",
    "name": "33. Payroll & Penggajian Karyawan — `/hrd/commissions`",
    "func": "Pengolah slip gaji bulanan karyawan terintegrasi.",
    "feature": "Kalkulasi otomatis Gaji Pokok + Uang Makan + Tunjangan Transport + Komisi Kerja SPK - Potongan Kasbon, cetak slip gaji formal, dan auto-journaling saat status dibayar (`PAID`).",
    "benefit": "Memangkas waktu proses penggajian dari berhari-hari menjadi hitungan menit, serta memastikan perhitungan komisi mekanik 100% akurat."
  },
  {
    "category": "F. HRD & Penggajian Karyawan",
    "name": "34. Roster & Jadwal Kerja Luar Daerah — `/hrd/jadwal-tim`",
    "func": "Manajemen penjadwalan dan cuti staf luar kota (roster luar daerah).",
    "feature": "Roster mudik, tipe roster (Harian/Rapel-30/Rapel-60), dan kalender cuti/izin/sakit terpadu dengan status approval (APPROVED/PENDING/REJECTED).",
    "benefit": "Memudahkan koordinasi libur tim bengkel luar daerah agar kapasitas pengerjaan stall bengkel tetap terjaga di hari-hari sibuk."
  },
  {
    "category": "F. HRD & Penggajian Karyawan",
    "name": "35. Armada Motor Operasional Bengkel — `/hrd/motor-operasional`",
    "func": "Manajemen peminjaman sepeda motor operasional cabang.",
    "feature": "Pengaturan unit motor, modul check-out & check-in peminjaman (odometer awal/akhir, checklist kelayakan fisik ban/rem/bensin/lampu), dan log riwayat servis pemeliharaan motor.",
    "benefit": "Menjaging kondisi motor operasional agar selalu prima dan mencegah penyalahgunaan kendaraan oleh staf untuk keperluan pribadi."
  },
  {
    "category": "F. HRD & Penggajian Karyawan",
    "name": "36. Capaian Target Jasa & Komisi Tim — `/hrd/capaian-jasa`",
    "func": "Dasbor monitoring pencapaian omset jasa per-karyawan.",
    "feature": "Target omset bulanan cabang, target harian berjalan, performa target mekanik/SA, group shares dinamis (split komisi Lead & Asisten), dan filter sortir tanggal.",
    "benefit": "Memotivasi tim mekanik dan SA melalui visualisasi pencapaian target yang transparan guna mendorong produktivitas kerja harian."
  },
  {
    "category": "G. CRM, WA Gateway & Loyalty",
    "name": "37. CRM Kanban Board & Leads Prospek — `/crm/kanban`",
    "func": "Papan pipa penjualan (sales pipeline) untuk melacak prospek calon pelanggan.",
    "feature": "Kartu prospek seret-dan-lepas (Drag & Drop) berdasar status (LEAD, HUBUNGI, PROSPEK, SPK_CREATED), integrasi data chat masuk WA, dan fitur konversi prospek ke SPK instan.",
    "benefit": "Memastikan tidak ada calon pelanggan potensial (leads) yang terlewat untuk di-follow-up oleh tim sales."
  },
  {
    "category": "G. CRM, WA Gateway & Loyalty",
    "name": "38. WhatsApp Blast & Campaign Manager — `/crm`",
    "func": "Pengirim pesan siaran (broadcast/blast) massal ke pelanggan.",
    "feature": "Pengaturan campaign blast, exclusion list (nomor internal/keluarga agar tidak ter-blast), log pengiriman WA gateway, dan integrasi template variabel dinamis.",
    "benefit": "Memudahkan pengumuman promo bulanan atau ucapan hari raya ke ribuan database pelanggan secara personal."
  },
  {
    "category": "G. CRM, WA Gateway & Loyalty",
    "name": "39. WhatsApp Gateway Dual-Engine (WhatsMeow + Baileys) — `/crm`",
    "func": "Saluran pengiriman pesan WhatsApp otomatis dengan arsitektur hemat RAM.",
    "feature": "Integrasi Go WA Engine (WhatsMeow) sebagai pengirim utama di port dinamis (8080/8081) dengan Baileys Backup sebagai fallback otomatis saat Go Engine offline, auto-healing penautan sesi, status badge real-time, dan unread badge via SSE.",
    "benefit": "Menghemat RAM server secara drastis (~15MB per koneksi vs Baileys ~200MB) dan mengamankan pengiriman nota kasir secara fail-safe tanpa error di layar pengguna."
  },
  {
    "category": "G. CRM, WA Gateway & Loyalty",
    "name": "40. Portal Buku Servis Digital (Customer PWA) — `/buku-servis`",
    "func": "Aplikasi web mandiri (PWA) khusus untuk pelanggan setia bengkel.",
    "feature": "Login nomor HP + PIN 6-digit (tanpa download aplikasi), track progres pengerjaan mobil di stall, histori servis, rekomendasi servis berkala otomatis berbasis kilometer, ulasan bintang, dan download struk.",
    "benefit": "Memberikan pengalaman modern kelas dunia layaknya bengkel resmi (ATPM) bagi pelanggan Anda, mendorong loyalitas kunjungan berulang (*customer retention*)."
  },
  {
    "category": "G. CRM, WA Gateway & Loyalty",
    "name": "41. Sistem Membership & Tiering Card — `/settings/membership`",
    "func": "Manajemen keanggotaan loyalty customer.",
    "feature": "Konfigurasi tier membership (VIP Member, Silver, Gold), auto-diskon kasir berdasar tier aktif (diskon jasa & part terpisah), masa aktif kartu 2 tahun, dan import batch member via CSV.",
    "benefit": "Mengikat loyalitas pelanggan dengan benefit diskon eksklusif dan mengumpulkan data profil pelanggan setia secara terstruktur."
  },
  {
    "category": "G. CRM, WA Gateway & Loyalty",
    "name": "42. Diskusi Internal & Chat Kolaboratif Karyawan — `/discussion`",
    "func": "Media komunikasi koordinasi internal tim bengkel.",
    "feature": "Kanal broadcast Owner (read-only), kanal umum (General) semua staf, privat pusat (HQ_BRANCH), privat antar-cabang (BRANCH_DIRECT), real-time SSE unread badge, dan isolasi data per cabang.",
    "benefit": "Menggantikan grup WhatsApp koordinasi internal yang berisik dan rentan kebocoran data operasional bengkel ke luar."
  },
  {
    "category": "G. CRM, WA Gateway & Loyalty",
    "name": "43. B2B Fleet Canvassing & Kemitraan Armada — `/crm/b2b-canvassing`",
    "func": "Modul manajemen prospek kunjungan marketing ke instansi, perusahaan, dan armada fleet eksternal.",
    "feature": "Tabel leads kunjungan marketing (perusahaan, kontak, status kunjungan, next follow-up date), modal pencatatan leads baru, filter status prospek, generator Proposal Penawaran Fleet & MOU Kerjasama format A4/F4, dan API rekap penagihan B2B.",
    "benefit": "Membuka saluran pendapatan armada fleet korporasi yang terstruktur — dari prospecting hingga kontrak kerjasama — tanpa bergantung pada walk-in."
  },
  {
    "category": "G. CRM, WA Gateway & Loyalty",
    "name": "44. Generator Surat & Dokumen HRD Dinamis — `/hrd/surat`",
    "func": "Pembuat surat resmi HRD berbasis template dan data karyawan langsung dari database.",
    "feature": "Template Perjanjian Kontrak Kerja (PKWT/SPKK), Surat Pengalaman Kerja (Paklaring), Proposal Fleet B2B, MOU Kerjasama, pilihan ukuran kertas A4 & F4, auto-fill data karyawan, input variabel kustom, dan cetak PDF langsung.",
    "benefit": "Memangkas waktu pembuatan dokumen HRD formal dari 30 menit menjadi kurang dari 2 menit dengan data yang 100% akurat dari database karyawan."
  },
  {
    "category": "H. Settings & IT Infrastructure",
    "name": "45. Aset & Kontak IT (Domain, Hosting, Tools) — `/settings/assets-it`",
    "func": "Inventarisasi dan pemantauan aset digital infrastruktur IT perusahaan.",
    "feature": "Katalog multi-tipe (Domain, Hosting, Tools AI, Desain & SaaS, VPS, dll.), summary card total per tipe aset, tabel grouped berdasarkan tipe dengan sub-total biaya per kelompok dan grand total keseluruhan, filter dropdown Penyedia dan Akun Gmail, serta pencatatan tanggal jatuh tempo.",
    "benefit": "Mencegah domain/hosting yang tiba-tiba expired karena tidak terpantau, dan mengoptimalkan anggaran IT dengan ringkasan biaya per kategori aset."
  },
  {
    "category": "I. Analitik Eksekutif & Lanjutan",
    "name": "46. Modul Analisis Wilayah & BPS — `/owner/analisis-wilayah`",
    "func": "Pemantauan indikator makro ekonomi daerah untuk keputusan strategis cabang.",
    "feature": "Koneksi Resmi BPS Web API, Pilihan Wilayah Fleksibel, UMK 2026, Jumlah Penduduk, Laju Inflasi, Kalkulator Potensi Pasar, Publikasi PDF, dan Berita Resmi Statistik (BRS).",
    "benefit": "Membantu Owner dalam memetakan harga jasa yang kompetitif sesuai UMK lokal dan menentukan lokasi terbaik untuk cabang baru."
  },
  {
    "category": "I. Analitik Eksekutif & Lanjutan",
    "name": "47. Kalender Roster Kerja & Cuti Tim Luar Daerah — `/hrd/jadwal-tim`",
    "func": "Manajemen penjadwalan terpadu staf luar kota.",
    "feature": "Tipe roster mudik (Harian/Rapel-30/Rapel-60), kalender cuti/izin/sakit interaktif, approval status, dan auto-sync pengurang alfa absensi payroll.",
    "benefit": "Memudahkan koordinasi libur tim bengkel luar daerah agar kapasitas pengerjaan stall bengkel tetap terjaga di hari-hari sibuk."
  },
  {
    "category": "I. Analitik Eksekutif & Lanjutan",
    "name": "48. Manajemen Armada Motor Operasional Bengkel — `/hrd/motor-operasional`",
    "func": "Pengendalian unit kendaraan operasional cabang.",
    "feature": "Dashboard kartu armada (Odometer, status pinjam/servis), modul check-out/in, log servis berkala, dan visual alert masa berlaku STNK/pajak 5 tahunan.",
    "benefit": "Menjaging kondisi motor operasional agar selalu prima dan mencegah penyalahgunaan kendaraan oleh staf untuk keperluan pribadi."
  },
  {
    "category": "I. Analitik Eksekutif & Lanjutan",
    "name": "49. Papan Prospek CRM Kanban & Leads Pipeline — `/crm/kanban`",
    "func": "Pipeline visual penjualan prospek/lead CRM.",
    "feature": "Drag-and-drop status lead (HOT/WARM/COOL), auto-routing leads WhatsApp, dan konversi instan satu-klik menjadi SPK baru.",
    "benefit": "Memastikan tidak ada calon pelanggan potensial (leads) yang terlewat untuk di-follow-up oleh tim sales."
  },
  {
    "category": "I. Analitik Eksekutif & Lanjutan",
    "name": "50. Sistem Deteksi Pembaruan & Auto-Clear Cache — `/components/VersionGuard`",
    "func": "Pembersih cache browser tim otomatis saat build baru live.",
    "feature": "Deteksi build number server, VersionGuard blocker, unregister Service Worker, menghapus localStorage, dan force logout.",
    "benefit": "Menghindari data transaksi korup akibat caching browser tim di lapangan saat sistem di-update."
  },
  {
    "category": "I. Analitik Eksekutif & Lanjutan",
    "name": "51. Edit Barang Langsung di Stok Barang — `/inventory`",
    "func": "Perubahan detail produk global dan rak lokal secara realtime.",
    "feature": "Modal edit data barang, sinkronisasi produk, update rak penyimpanan, min stock per cabang, dan safeguard restock.",
    "benefit": "Mempercepat perbaikan typo data barang tanpa menutup/mereset halaman stok."
  },
  {
    "category": "I. Analitik Eksekutif & Lanjutan",
    "name": "52. Scanner Stok Mobile Terintegrasi Kamera — `/inventory/scan`",
    "func": "Aplikasi pemindai barcode portabel berbasis PWA untuk staf gudang.",
    "feature": "Pemindaian instan untuk input restock, stock opname harian, update lokasi rak, dan bypass caching Service Worker otomatis.",
    "benefit": "Menghilangkan kebutuhan scan laser mahal dan mempercepat update stok dari ponsel staf."
  },
  {
    "category": "I. Analitik Eksekutues & Lanjutan",
    "name": "53. Fitur Salin Rekap & Rincian Booking — `/service/bookings`",
    "func": "Ekstrak cepat data janji temu untuk pelaporan instan.",
    "feature": "Tombol Salin Rekap tab antrean, copy individual kartu booking, format chat teks terstruktur, dan clipboard integrasi.",
    "benefit": "Mempermudah pelaporan jadwal booking harian tim ke grup WhatsApp/Telegram Owner."
  },
  {
    "category": "I. Analitik Eksekutif & Lanjutan",
    "name": "54. Pemetaan Cabang Dinamis Capaian Jasa HRD — `/hrd/capaian-jasa`",
    "func": "Laporan kinerja komisi personal per cabang bebas bias.",
    "feature": "Sinkronisasi cabang dinamis, bypass hardcoded ID, filter dinamis payroll, penataan helper resolveUserBranchId, dan data komisi relasional.",
    "benefit": "Mencegah tumpang tindih data pencapaian staf antar-cabang yang memiliki ID database berbeda."
  },
  {
    "category": "I. Analitik Eksekutif & Lanjutan",
    "name": "55. Aturan Khusus Komisi Balancing per Cabang — `/settings/commissions`",
    "func": "Penyesuaian tarif bonus balancing flat khusus daerah cabang tertentu.",
    "feature": "Capping komisi balancing Rp 0 untuk Tasik/Bandung, default Purwokerto Rp 1.750, sinkronisasi checkout SPK, dan akrual ledger.",
    "benefit": "Mematuhi kebijakan operasional keuangan daerah masing-masing cabang."
  },
  {
    "category": "I. Analitik Eksekutif & Lanjutan",
    "name": "56. Kustomisasi Dinamis Komisi Balancing — `/settings/commissions`",
    "func": "Penentuan manual sewa alat/komisi balancing dari database.",
    "feature": "Prioritas parameter DB Settings, fallback default otomatis, update skema dinamis, dan kalkulasi dinamis nominal.",
    "benefit": "Fleksibilitas Owner merubah tarif komisi tanpa mengubah baris kode program."
  },
  {
    "category": "I. Analitik Eksekutif & Lanjutan",
    "name": "57. Tombol Salin Rekap Tabel Booking — `/service/bookings`",
    "func": "Menyalin seluruh baris filter booking aktif di tabel.",
    "feature": "Tombol Salin Rekap (Jumlah Unit), generator report dinamis, download format text, dan support filter tanggal kustom.",
    "benefit": "Memudahkan pelaporan rekap booking terjadwal mingguan secara kolektif."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "58. Rincian Data Salinan Booking Lengkap — `/service/bookings`",
    "func": "Penambahan detail metadata pada salinan teks booking.",
    "feature": "Perekaman nomor WA customer, Sumber Media Informasi, PIC Penjawab, dan format teks terstruktur.",
    "benefit": "Informasi prospek lebih komprehensif saat diteruskan ke tim follow-up."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "59. Integrasi Knowledge Base Halaman Bantuan — `/help`",
    "func": "FAQ dinamis tentang fitur and rules sistem untuk panduan mandiri.",
    "feature": "FAQs baru rekap booking, filter tanggal, dynamic branch HRD, dan aturan komisi balancing.",
    "benefit": "Menyediakan referensi solusi mandiri bagi kru bengkel dan asisten AI."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "60. Daily Activity Plan (DAP) Digital — `/dap`",
    "func": "Agenda dan target prioritas mingguan/harian staf magang.",
    "feature": "Login PIN 6 digit mandiri, priorities slider progress, daily schedule grid, status carry-over to-dos, dan dashboard monitoring Owner (`/dap/owner`).",
    "benefit": "Memantau kinerja harian staf/interns secara terpusat tanpa tools eksternal."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "61. Saring Absensi HRD Cabang Aktif — `/hrd`",
    "func": "Filter data kehadiran berdasarkan cabang yang sedang dibuka.",
    "feature": "Sinkronisasi active branch, auto-exclude karyawan tidak aktif/resign, filter departemen, dan rekap alfa dinamis.",
    "benefit": "Mempersingkat pengecekan absensi bulanan untuk payroll cabang."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "62. Pembagi Qty Cetak Kustom Barcode — `/products/print-barcode`",
    "func": "Perhitungan otomatis label stiker per kemasan pack/dus.",
    "feature": "Input Qty kemasan, auto-division count, preview print sheet, dan grid layout.",
    "benefit": "Mempermudah gudang melabeli produk grosir/kemasan dus besar sekali jalan."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "63. Auto Width & Height Barcode Rendering — `/products/print-barcode`",
    "func": "Safeguard visual barcode agar tidak gepeng atau meregang saat dicetak.",
    "feature": "Canvas-PNG rendering, auto-scale ratio, CSS printing wrap, dan scanner compatibility.",
    "benefit": "Menjamin barcode selalu terbaca saat di-scan oleh HP maupun laser scanner."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "64. Kustomisasi Tipe Tools AI & Desain IT Assets — `/settings/assets-it`",
    "func": "Klasifikasi baru aset digital untuk domain dan hosting.",
    "feature": "Dropdown kategori kustom, asset billing tracking, warning perpanjangan, dan email logger.",
    "benefit": "Mempermudah penelusuran tagihan langganan SaaS IT."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "65. Isolasi Soft-Delete Karyawan & Stok per Cabang — `/inventory`",
    "func": "Hapus sementara data di level cabang tanpa merusak data global.",
    "feature": "Branch-level deletedAt flag, master data safety, restore per-cabang, dan Tempat Sampah terpisah.",
    "benefit": "Menjamin kebebasan admin cabang menata stok lokal tanpa merusak persediaan cabang lain."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "66. Bulk Restore & Checkbox Tempat Sampah — `/inventory`",
    "func": "Pemulihan massal data terhapus sementara secara instan.",
    "feature": "Multi-checkbox selection, tombol pulihkan terpilih, empty trash permanen, dan cron auto-purge 7 hari.",
    "benefit": "Menghemat waktu admin saat membatalkan kesalahan hapus data berskala besar."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "67. WhatsApp Gateway Laporan Omset Jasa SA Harian — `/crm`",
    "func": "Broadcast otomatis laporan capaian harian via WhatsApp.",
    "feature": "Trigger cron harian, rekapitulasi performa unit masuk, capaian Target SA, and push notifikasi real-time langsung ke grup koordinasi internal.",
    "benefit": "Mengurangi beban SA dalam merangkum setoran harian secara manual."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "68. Penagihan Piutang AI & WhatsApp Reminder — `/accounting/receivables`",
    "func": "Asisten AI penyusun draf penagihan piutang instansi.",
    "feature": "Tombol \"WA AI\" pemicu Ollama/Gemini, analisis jatuh tempo tagihan, dan draf pesan penagihan sopan yang dapat diedit instan.",
    "benefit": "Mempercepat collection piutang instansi yang menunggak dengan gaya bahasa yang sopan."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "69. Audit Logging Reassign Kendaraan — `/customers/transfer-vehicle`",
    "func": "Rekam log audit trail pemindahan kepemilikan mobil.",
    "feature": "Logger change owner, plat nopol validation, timestamp, and audit trail record.",
    "benefit": "Menghindari fraud penukaran data mobil curian atau salah input nopol."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "70. Perbaikan RESTOCK & Edit SKU — `/inventory`",
    "func": "Penyesuaian stok manual dan edit kode part katalog.",
    "feature": "SKU inline editor, validation unique, dynamic restock transaction, and FIFO StockBatch sync.",
    "benefit": "Mengoreksi kesalahan penamaan SKU tanpa mengacak-acak log mutasi gudang lama."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "71. Isolasi Cabang Aktif Audit Trail & Login Tim — `/owner/audit`",
    "func": "Penyaringan log aktivitas dan tim pelaksana berdasarkan cabang.",
    "feature": "Branch sync, audit filter, role restriction, login tim export/import CSV, dan multi-branch view.",
    "benefit": "Owner dapat memantau log audit cabang tertentu secara fokus dan aman."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "72. Safeguard NaN Capaian Jasa — `/hrd/capaian-jasa`",
    "func": "Penanganan error pembagian dengan nol pada hitungan target SA.",
    "feature": "Zero checks helper, fallback percentage, validation error handler, dan database log.",
    "benefit": "Menghindari tampilan error blank pada halaman target HRD saat target diset Rp 0."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "73. Allowance Custom Uang Makan & Transport HRD — `/hrd`",
    "func": "Modifikasi nominal tunjangan kehadiran harian per karyawan.",
    "feature": "Input inline nominal, checkbox checkin sync, payroll auto-accumulate, dan database attendance sync.",
    "benefit": "Fleksibilitas HRD memberikan nominal transport berbeda bagi tim luar daerah."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "74. Layout & Margin Nota Estimasi Cepat (Letter/F4) — `/service/estimasi`",
    "func": "Pratinjau cetak interaktif nota estimasi dengan pilihan kertas kustom.",
    "feature": "Kertas Letter/F4 half support, margin spacing, font scale, PPN toggle, dan custom date.",
    "benefit": "Hasil cetak nota estimasi lebih hemat kertas dan formal bagi customer."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "75. Laporan Sore WhatsApp Konsolidasian & Live Alert Anti-Fraud — `/crm`",
    "func": "Laporan konsolidasi otomatis sore ke WhatsApp pribadi Owner.",
    "feature": "Kirim rekap omset multi-cabang pukul 17.00 WIB, live security alerts saat rollback status SPK selesai, dan deteksi selisih/koreksi kasir.",
    "benefit": "Deteksi dini fraud keuangan kasir secara instan langsung dari HP Owner."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "76. API Koreksi Retroaktif Data Komplain Cabang — `/crm/complaints`",
    "func": "Sinkronisasi massal data keluhan pelanggan yang salah cabang.",
    "feature": "Proxy API /api/admin/fix-complaints, preview mismatch, execute update, dan audit log.",
    "benefit": "Rekonsiliasi data keluhan pelanggan ke cabang aslinya secara instan dan aman."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "77. Kolom Tim Pelaksana SPK & Dashboard Data Saran SA — `/crm/complaints`",
    "func": "Pelacakan staf pelaksana servis di tabel komplain dan target saran.",
    "feature": "Tampil SA/Mek/FA relasional di CRM, peringkat data saran SA, WhatsApp follow-up link, dan template CRM.",
    "benefit": "Owner dapat menganalisis performa upselling SA dan tim pelaksana komplain secara terukur."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "78. Analisis Performa Media Sosial Cabang — `/crm/social-media`",
    "func": "Dasbor monitoring pertumbuhan pengikut media sosial resmi per cabang.",
    "feature": "Input harian follower, perhitungan growth dinamis, grafik tren SVG, kelola platform kustom, dan sinkronisasi siklus cutoff (25 s/d 24).",
    "benefit": "Memantau produktivitas tim marketing online cabang dalam mendatangkan pengikut baru."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "79. Dashboard & Pelacakan Optimasi Website SEO — `/crm/website-seo`",
    "func": "Dasbor pemantauan input artikel, backlink, dan indeks halaman.",
    "feature": "Halaman terindeks, artikel posted, backlink created, PIC default domain, dan grafik tren cutoff.",
    "benefit": "Owner dapat memantau produktivitas tim penulis artikel dan pakar SEO harian."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "80. Optimasi Website SEO & Google Search Console API — `/crm/website-seo`",
    "func": "Integrasi live metrik SEO dari Google Search Console API.",
    "feature": "Konfigurasi site URL properti GSC, live metrik (Klik, Impresi, CTR, Posisi), laporan top keyword & pages, sitemap tracking, delegasi PIC default per domain, dan Google Search Console Light Theme yang nyaman di mata.",
    "benefit": "Data organic search traffic terpantau real-time dari satu dasbor ERP tanpa buka GSC eksternal."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "81. Halaman Bantuan ERP & Knowledge Base — `/help`",
    "func": "Pusat bantuan, panduan operasional, dan FAQs terpadu bagi tim bengkel.",
    "feature": "FAQs interaktif terkelompok, visualisasi workflow logistik/stok/pembelian, petunjuk instalasi PWA, serta basis pengetahuan (knowledge base) utama sistem.",
    "benefit": "Kru bengkel dapat memecahkan masalah operasional secara mandiri tanpa membebani developer."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "82. Sistem Saldo Deposit Pelanggan (Customer Deposit) — `/sales`",
    "func": "Skema uang muka booking fee / DP pelanggan untuk memotong biaya servis.",
    "feature": "Konfigurasi saldo deposit, auto-deduct pembayaran kasir kustom, deteksi kecukupan saldo di UI, dan posting jurnal Kewajiban Uang Muka (2-1200) vs Beban Promosi (5-2006).",
    "benefit": "Menghilangkan resiko selisih kas penahanan booking fee dan mengikat loyalitas kunjungan balik pelanggan."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "83. Tenggang Waktu Pembaruan Aplikasi (VersionGuard Grace Period) — `/components/VersionGuard`",
    "func": "Proteksi data transaksi kasir yang sedang diketik ketika sistem diperbarui.",
    "feature": "Banner hitung mundur 5 menit (300 detik), auto-unregister Service Worker cache, dan auto force-logout aman.",
    "benefit": "Mencegah kasir kehilangan draf transaksi yang sedang diinput akibat sistem mendadak reload versi baru."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "84. Pelaporan & Format Error Database Solutif — `/lib/error-formatter.ts`",
    "func": "Modul diagnostik instan pop-up jika pembacaan database di server gagal.",
    "feature": "Visualisasi error detail, penemu nama kolom/tabel yang hilang, explanation ramah, dan daftar command pemecahan masalah (IT troubleshooting).",
    "benefit": "Memangkas downtime perbaikan sistem dari hitungan jam menjadi hitungan menit secara mandiri oleh Owner/IT Admin."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "85. Penerbitan Voucher / Uang Muka DP Mandiri & Kirim WA — `/finance-hub`",
    "func": "Modul independen penerbitan kode DP dan kirim rincian voucher langsung ke WhatsApp pelanggan.",
    "feature": "Penerbitan kode unik voucher DP, cetak struk penerbitan, tombol Kirim WA instan ke HP pelanggan, auto-claim/redeem saat pelunasan SPK, dan auto-journaling Debit Kas/Bank & Kredit Kewajiban Uang Muka Pelanggan (2-1200).",
    "benefit": "Memudahkan kasir mencatat penerimaan DP sebelum SPK dibuat dan memudahkan pelanggan menyimpan bukti DP resmi via WhatsApp."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "86. Otomatisasi Synchronized SpecialPackage & Autofill Harga Paket Cabang — `/settings/commissions`",
    "func": "Integrasi pengayaan API Katalog Produk & Jasa dengan Master Skema Paket Komisi Cabang (`SpecialPackage`).",
    "feature": "Auto-fill harga paket spesifik cabang (misal Rp 250.000) dan Biaya Sewa/Subkon Alat (Rp 100.000) pada SPK & Estimasi saat cabang aktif dipilih tanpa edit manual, serta badge visual 'PAKET CABANG'.",
    "benefit": "Menghilangkan kesalahan input harga jasa per cabang dan menjamin data keuangan & komisi 100% sinkron."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "87. Garansi Auto-Seed COA Akun Sistem & Timezone Offset WIB Jurnal — `/accounting/journal`",
    "func": "Fitur auto-seed akun `2-1200 Uang Muka Pelanggan` dan kalibrasi rentang tanggal WIB (UTC+7) di Jurnal Umum & Buku Besar.",
    "feature": "Auto-seed transparan akun 2-1200 di database PostgreSQL per tenant, jaminan ketersediaan di dropdown Buku Besar, serta penyesuaian rentang tanggal WIB untuk transaksi pagi hari (00:00 - 07:00 WIB).",
    "benefit": "Menjamin 100% akurasi pembukuan jurnal akuntansi dan mempermudah pelacakan mutasi akun kewajiban di Buku Besar."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "88. Integrasi Card RFID Pelanggan & Alert Tap Scan Real-time — `/hrd/absensi-rfid`",
    "func": "Pemindaian fisik kartu RFID tag pelanggan untuk identifikasi cepat di penerimaan servis.",
    "feature": "Input UID serial number RFID tag, auto-lookup data pelanggan & profil kendaraan, notifikasi suara/popup saat tag di-tap di reader kasir/SA.",
    "benefit": "Mempercepat identifikasi pelanggan loyal secara otomatis saat kendaraan tiba di area penerimaan bengkel."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "89. Otomatisasi Disaster Recovery & Cloud Backup Google Drive — `/settings/database`",
    "func": "Modul pencadangan (*backup*) otomatis database PostgreSQL ke Google Drive Cloud.",
    "feature": "Script cron harian otomatis, kompresi berkas `.sql.gz`, rotasi penghapusan backup lama (retensi 30 hari), dan dokumen panduan pemulihan (*disaster recovery*).",
    "benefit": "Mencegah risiko kehilangan data operasional akibat insiden kegagalan hardware server/VPS."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "90. AI Diagnosis Keluhan Mobil Asisten Mekanik (Ollama Local AI) — `/service`",
    "func": "Asisten kecerdasan buatan (AI) lokal offline untuk diagnosa cepat gejala kerusakan mobil.",
    "feature": "API Ollama (Mistral/Llama3) lokal offline, analisis deskripsi keluhan pelanggan, rekomendasi estimasi sparepart & panduan langkah perbaikan standar mekanik.",
    "benefit": "Membantu Service Advisor dan Mekanik muda mendiagnosis gejala kerusakan secara cepat dan presisi."
  },
  {
    "category": "G. CRM, WA Gateway & Loyalty",
    "name": "91. WhatsApp Live Chat Hub & Real-time Chat UI — `/crm/chats`",
    "func": "Modul Live Chat WhatsApp terintegrasi penuh di dalam ERP dengan visualisasi menyerupai WhatsApp Web asli.",
    "feature": "Sidebar list chatroom (indikator unread, nama/nomor customer), bubble obrolan dua arah, scroll history dinamis, detail profil pelanggan real-time (kunjungan, total spend, plat mobil), & input media upload.",
    "benefit": "Memungkinkan admin/CS merespons pesan secara cepat langsung dari dasbor ERP tanpa perlu memegang HP fisik atau membuka tab eksternal."
  },
  {
    "category": "G. CRM, WA Gateway & Loyalty",
    "name": "92. Chatbot Auto-Responder & AI Assistant (Gemini & Groq Fallback) — `/crm/chats`",
    "func": "Modul chatbot WhatsApp dengan aturan pencocokan kata kunci/angka menu pilihan dan asisten otomotif AI berbasis LLM.",
    "feature": "Pembuat aturan menu berbasis angka/keyword, toggles untuk mengaktifkan AI chatbot, integrasi dual-engine Gemini & Groq dengan auto-fallback otomatis saat salah satu API key limit/gagal, custom system prompt builder.",
    "benefit": "Menjawab pertanyaan rutin pelanggan (lokasi, jam buka, booking) secara instan 24/7 dan memberikan analisis keluhan mobil awal secara cerdas."
  },
  {
    "category": "G. CRM, WA Gateway & Loyalty",
    "name": "93. Auto-Schedule WhatsApp Blasting Campaign — `/crm`",
    "func": "Modul penjadwalan pengiriman kampanye blasting WhatsApp secara otomatis pada tanggal dan waktu target tertentu.",
    "feature": "Input tanggal/waktu kirim kustom dengan offset WIB (+07:00), background worker thread scheduler di server (loop 60 detik) untuk mengeksekusi kampanye terjadwal, badge status \"Terjadwal\" ungu di UI.",
    "benefit": "CS/Marketing dapat merencanakan blast promo/reminder jauh-jauh hari dan membiarkan server mengirimkannya otomatis tepat waktu pada jam sibuk."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "94. Multi-Tenant SaaS Modularity & Custom Role Permissions — `/owner/permissions`",
    "func": "Pemisahan data dan modul sistem berbasis tenant (mitra bengkel) dan custom role permissions per staf.",
    "feature": "Multi-tenant schema isolation, custom role authorization guard (Owner, SA, Cashier, Mechanic, FA), toggle dynamic setting per tenant, granular access permissions (manage_settings, view_reports, dll).",
    "benefit": "Memudahan ekspansi bisnis dalam bentuk SaaS (Software-as-a-Service) dengan isolasi data 100% aman untuk setiap cabang/mitra."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "95. Modul Tools Man & Audit Checklist Kunci — `/toolsman`",
    "func": "Manajemen stok dan audit berkala kotak peralatan (toolbox) kunci-kunci milik mekanik secara digital.",
    "feature": "Form Gudang Kunci (katalog master, ukuran dinamis, stok, warning limit), penugasan box kunci (Box Orange/Merah/Hijau) ke mekanik dengan paginasi, lembar checklist mingguan interaktif (status Lengkap/Hilang/Rusak), tanda tangan digital checker, progress bar audit real-time, dan tabel detail rincian mingguan otomatis.",
    "benefit": "Mencegah kehilangan alat kerja mekanik, memantau tanggung jawab kepemilikan alat, dan meminimalisir kerugian operasional akibat penggantian kunci rusak/hilang."
  },
  {
    "category": "F. HRD & Penggajian Karyawan",
    "name": "96. Rekrutmen Karyawan & Magang (Recruitment Form) — `/recruitment`",
    "func": "Portal penerimaan berkas, seleksi administrasi, dan input data kandidat anak magang PKL SMK / Mahasiswa.",
    "feature": "Pengisian NIK/KK, kontak pembimbing, divisi penempatan, wilayah PKL, skor ujian (Web, Otomotif, Umum), kepribadian, & ekspor data.",
    "benefit": "Mempermudah penyeleksian berkas magang SMK PKL dan pencatatan data diri sebelum masuk orientasi kerja."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "97. Perencanaan Visi Strategis (Strategic Planning) — `/strategic-planning`",
    "func": "Analisis ketercapaian KPI target bisnis tahunan secara komprehensif bagi Owner.",
    "feature": "Radar charts visualisasi target vs aktual, multi-kategori (Omset, Unit Masuk, CRM, HRD, Profit, Expense, Marketing, Capex, New Customers), filter tahun, dan komparasi side-by-side antar-cabang.",
    "benefit": "Memudahkan eksekutif memonitor keseimbangan performa strategis jangka panjang di seluruh cabang."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "98. Target Rencana Kerja Tahunan per Bulan (Annual Plan) — `/annual-plan`",
    "func": "Lembar kerja perencanaan alokasi budget dan target bulanan selama 12 bulan.",
    "feature": "Form grid input 9 KPI keuangan & operasional (Revenue, Expense, Profit, Units, New Customers, Marketing, Capex, HRD, CRM) untuk Januari s.d Desember per cabang.",
    "benefit": "standardisasi penetapan target awal tahun agar operasional memiliki acuan pencapaian bulanan yang jelas."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "99. Pusat Notifikasi & Alert Tim Terpadu (Notification Center) — `/notification-center`",
    "func": "Dasbor inbox notifikasi terpusat untuk peringatan sistem dan operasional.",
    "feature": "Penayangan real-time alert (stok kritis, security rollback, audit checklist toolsman rusak/hilang), filter belum dibaca, pemisahan cabang, dan tombol direct-link ke modul terkait.",
    "benefit": "Mempercepat respon dan penyelesaian masalah kritis di lapangan oleh tim admin/Owner."
  },
  {
    "category": "I. Mitigasi Risiko & Akuntansi Lanjutan",
    "name": "100. Kamus Diagnosa & Auto-Saran Kerusakan (Kamus Service) — `/kamus-service`",
    "func": "Repositori pintar template paket perbaikan dan sparepart pelengkap berdasarkan gejala kerusakan mobil.",
    "feature": "Master template per kategori (Kaki-Kaki, Rem, AC, Mesin, Oli, Kopling, Setir, Aki, dll.), input estimasi jasa & Qty part, keyword tag pencarian, dan push otomatis ke estimasi SPK.",
    "benefit": "Standardisasi estimasi perbaikan oleh Service Advisor (SA) dan mempercepat penawaran harga ke customer walk-in."
  },
  {
    "category": "A. Workshop & Manajemen Servis",
    "name": "101. Validasi Estimasi Jam Selesai (workEndTime) Sebelum SPK Ditutup — `/service/[id]`",
    "func": "Pencegahan penutupan SPK tanpa mengisi estimasi jam selesai perbaikan kendaraan.",
    "feature": "Validasi dua lapis: frontend (`InvoiceTab`) menampilkan modal peringatan jika `workEndTime` belum diisi, dan backend (`route.ts`) memvalidasi ulang sebelum memproses perubahan status ke `SELESAI`. Berlaku untuk SPK non-sparepart (SPK jasa & paket).",
    "benefit": "Memastikan data waktu pengerjaan lengkap di setiap SPK untuk akurasi laporan produktivitas mekanik dan perhitungan KPI jam produktif harian."
  },
  {
    "category": "A. Workshop & Manajemen Servis",
    "name": "102. Pemisahan Fetch Stall Aktif & Riwayat Unit Selesai Timezone-Safe — `/monitoring`",
    "func": "Monitoring stall yang akurat untuk unit menginap dari hari sebelumnya dan riwayat unit yang diselesaikan pada hari berjalan.",
    "feature": "Dua fetch paralel terpisah: (1) Stall aktif (`DRAFT`/`PROSES`/`INSPEKSI`) tanpa filter tanggal agar unit menginap tidak hilang; (2) Riwayat selesai (`SELESAI`) difilter berdasarkan `updatedAt` dengan offset WIB (`+07:00`) menggunakan parameter tanggal format `YYYY-MM-DD` untuk mencegah mismatch timezone di perangkat Smart TV/laptop bengkel yang jam sistem-nya salah.",
    "benefit": "Memastikan Foreman tidak pernah kehilangan tampilan unit yang masuk kemarin atau unit yang baru saja selesai diselesaikan hari ini."
  },
  {
    "category": "J. Produktivitas & Rencana Kerja",
    "name": "103. Auto-Expand Textarea Rincian Aktivitas DAP — `/dap`",
    "func": "Tampilan teks rencana kerja harian yang tidak terpotong di semua kartu hari (Senin–Minggu).",
    "feature": "Ref callback pada elemen `textarea` rincian aktivitas yang langsung menghitung `scrollHeight` saat komponen di-mount ke DOM dan menyesuaikan tinggi elemen secara otomatis. Tidak bergantung pada event `onInput` saja, sehingga teks panjang dari aktivitas lama langsung tampil utuh tanpa harus diklik dulu.",
    "benefit": "Staf dan magang dapat membaca seluruh rincian agenda kerja harian secara langsung tanpa harus scroll horizontal atau merasa ada informasi yang tersembunyi."
  },
  {
    "category": "J. Produktivitas & Rencana Kerja",
    "name": "104. Multi-line Textarea DAP (Enter = Baris Baru) — `/dap`",
    "func": "Kemampuan menambahkan baris baru (Enter) di dalam kotak rincian aktivitas harian DAP.",
    "feature": "Perilaku `onKeyDown` diubah: `Enter` normal tidak lagi mencegah default (tidak langsung blur/save), sehingga pengguna bisa menekan Enter untuk pindah ke baris baru seperti pengolah teks normal. Simpan otomatis terjadi via `onBlur` (klik luar), `Ctrl+Enter`, atau `Escape`.",
    "benefit": "Staf magang dapat menulis rincian aktivitas multi-baris yang terstruktur (seperti daftar poin atau langkah kerja) secara natural tanpa kebingungan."
  },
  {
    "category": "J. Produktivitas & Rencana Kerja",
    "name": "105. Dashboard Monitoring DAP Tim Owner — `/dap/owner`",
    "func": "Dasbor pengawasan rekapitulasi agenda kerja harian seluruh staf magang oleh Owner atau Head Office.",
    "feature": "Tabel rekap status aktivitas (Plan, In Progress, Done, Carry Over) seluruh staf per hari, filter tanggal & nama staf, visualisasi progress ring, dan export ringkasan.",
    "benefit": "Memungkinkan pengawasan produktivitas seluruh intern/magang secara terpusat tanpa harus meminta laporan manual."
  },
  {
    "category": "G. CRM, WA Gateway & Loyalty",
    "name": "106. Management Control System (MCS) — Rencana Kerja Divisi Bulanan — `/strategic-planning`",
    "func": "Lembar kerja program kerja bulanan berbasis divisi (HC, GA, Marketing, Operasional, Finance) yang dapat dipantau Owner.",
    "feature": "Tabel `ManagementControl` database baru, CRUD program kerja per divisi dengan target/realisasi, filter bulan & divisi, status progress (PLANNED/ON_TRACK/DELAYED/DONE), form AutoComplete Chrome-safe (`autoComplete=\"off\"`), dan akses khusus Owner & Manager.",
    "benefit": "Menjamin setiap divisi memiliki program kerja tertulis dan terukur yang bisa diaudit oleh Owner setiap bulan tanpa rapat panjang."
  },
  {
    "category": "F. HRD & Penggajian Karyawan",
    "name": "107. Modul Kasbon & Pinjaman Karyawan Fleksibel — `/hrd?view=KASBON`",
    "func": "Manajemen pengajuan, persetujuan, cicilan, dan pelunasan kasbon karyawan secara digital.",
    "feature": "Form pengajuan kasbon dengan kalkulator cicilan otomatis, tabel daftar pinjaman per cabang, badge status (PENDING/APPROVED/ACTIVE/LUNAS), progress cicilan visual, workflow Setuju/Tolak/Cicil/Lunas, isolasi data per cabang via `resolveEmployeeBranchId`, input tanggal kasbon & rencana pelunasan (Harian/Mingguan/Bulanan/Tentatif), dan integrasi auto-potong ke slip gaji payroll.",
    "benefit": "Menghilangkan catatan kasbon manual di buku fisik, mencegah bocornya data pinjaman antar cabang, dan menjamin kasbon terpotong otomatis dari slip gaji tanpa bisa dimanipulasi."
  },
  {
    "category": "F. HRD & Penggajian Karyawan",
    "name": "108. Jadwal Piket Roster Dinamis & Komponen Gaji Kustom — `/hrd`",
    "func": "Manajemen jadwal piket kebersihan/operasional harian dan konfigurasi komponen tunjangan/potongan gaji individu karyawan.",
    "feature": "Skema `PiketArea` & `PiketSchedule` database baru, CRUD area piket, penugasan staf per hari, status checklist pengerjaan (DONE/NOT_DONE), timestamp penyelesaian, field `customSalaryValues` per karyawan untuk komponen tunjangan (Jabatan, Komunikasi, Transport, Katering, Beras, Lainnya) dan potongan (BPJS Kesehatan, BPJS Ketenagakerjaan, Kasbon, Lainnya) yang dapat ditambah/kurangi secara dinamis, serta tombol Tambah Komponen cepat di editor slip gaji.",
    "benefit": "Mendigitalkan jadwal piket fisik papan bengkel dan memungkinkan HRD mengkonfigurasi komponen gaji yang berbeda untuk setiap karyawan (misal: tunjangan jabatan untuk Foreman vs tunjangan transport untuk kurir) tanpa mengubah struktur database."
  },
  {
    "category": "D. Keuangan & Akuntansi (GL)",
    "name": "109. Laporan Non-Closing dengan Dropdown Periode Bulan Dinamis — `/owner/non-closing`",
    "func": "Laporan SPK non-closing yang dapat difilter berdasarkan bulan pilihan, yang secara dinamis menghitung tanggal mulai (`dateFrom`) dan akhir (`dateTo`) sesuai `billingStartDay` cabang terpilih.",
    "feature": "Dropdown Periode Bulan (Juli, Agustus, September, dst), kalkulasi dynamic date range, sinkronisasi cutoff cabang, dan inisialisasi default dinamis.",
    "benefit": "Owner dapat meninjau SPK non-closing dari bulan-bulan sebelumnya secara cepat dan akurat berdasarkan cutoff operasional masing-masing cabang."
  },
  {
    "category": "I. Analitik Eksekutif & Lanjutan",
    "name": "110. Sinkronisasi Otomatis Bulan Periode Cutoff Dinamis Multi-Modul — `/owner/sparepart-report`, `/customers/transfer-vehicle`, `/hrd` (Payroll Hub), `/hrd/capaian-jasa`, `/hrd/my-commissions`, `/crm`",
    "func": "Kalibrasi default penanggalan bulan dan tahun di berbagai halaman analitik, mutasi, komisi, dan dashboard CRM agar mengikuti hari cutoff cabang terpilih alih-alih bulan kalender standar.",
    "feature": "Deteksi otomatis `billingStartDay` cabang aktif, automatic month/year rollover (e.g. August 25 rolls over to September), dynamic period labels generation, sync GMB reviews and Leads dates automatically to cutoff dates range.",
    "benefit": "Memastikan seluruh modul operasional dan analitik menampilkan data periode aktif berjalan yang sama dan sinkron dengan cutoff akuntansi, menghindari data mismatch."
  },
  {
    "category": "B. Inventaris & Logistik Gudang",
    "name": "111. Real-Time Status Count Badges & Grouping Kueri Purchasing — `/purchasing`",
    "func": "Penghitungan total pengajuan purchase order per-status secara instan dan real-time saat halaman dimuat.",
    "feature": "API `/api/purchasing` grouping query (`groupBy` status), real-time status counts backend calculation, react state binding directly to tab badges.",
    "benefit": "Tim purchasing dan Owner dapat mengetahui jumlah draf, proses, dikirim, diterima, dan ditolak secara instan tanpa perlu mengklik masing-masing tab terlebih dahulu."
  },
  {
    "category": "B. Inventaris & Logistik Gudang",
    "name": "112. Sistem Konsinyasi Supplier Terintegrasi (Pay-as-Sold) — `/purchasing/konsinyasi`",
    "func": "Penerimaan suku cadang titipan vendor tanpa beban hutang di muka, di mana hutang dagang baru dibukukan saat barang laku.",
    "feature": "Stok fisik langsung bertambah di gudang saat DO diterima, bypass AP (Rp 0), pengakuan otomatis Hutang Konsinyasi & HPP saat part terjual di SPK/POS ritel, dan tab audit khusus pay-as-sold.",
    "benefit": "Menjaga likuiditas modal kerja bengkel tetap aman karena pembayaran ke distributor hanya terjadi jika sparepart sudah laku terjual ke customer."
  },
  {
    "category": "B. Inventaris & Logistik Gudang",
    "name": "113. Rekonsiliasi & Cetak Berita Acara Konsinyasi Supplier — `/purchasing/konsinyasi`",
    "func": "Pencocokan data fisik barang konsinyasi dengan pihak salesman supplier secara transparan dan berkala.",
    "feature": "Dashboard 4 kartu ringkasan (Total Masuk, Terjual, Sisa Fisik, Wajib Bayar Rp), modal pelunasan multi-rekening kas/bank, dan cetak Berita Acara A4 bertanda tangan resmi Kepala Bengkel & Salesman.",
    "benefit": "Menghilangkan perdebatan selisih stok titipan dengan distributor dan mempercepat proses settlement faktur bulanan."
  },
  {
    "category": "I. Analitik Eksekutif & Lanjutan",
    "name": "114. Annual Plan Multi-Sub Divisi & KPI Dinamis — `/annual-plan`",
    "func": "Lembar kerja perencanaan target tahunan dan alokasi anggaran bulanan terpisah untuk 5 divisi strategis.",
    "feature": "Tab mandiri 5 divisi (Operasional, Finance, Marketing, HRD, CRM, Konsolidasi), pembuat KPI dinamis (+ Tambah KPI), fitur bagi rata (Equal Split), proyeksi pertumbuhan (+X%), dan komparasi Target vs Actual riil.",
    "benefit": "Memberikan kompas target terukur bagi pimpinan setiap divisi dan memudahkan evaluasi bulanan Owner dalam satu dasbor terpadu."
  },
  {
    "category": "G. CRM, WA Gateway & Loyalty",
    "name": "115. Isolasi Ketat Socket Nomor WhatsApp Cabang & Anti-Fallback — `/settings/whatsapp` & `/crm`",
    "func": "Pengamanan saluran pengiriman pesan WhatsApp agar terisolasi penuh per cabang tanpa risiko kebocoran nomor.",
    "feature": "Strict branch isolation socket, auto-pause kampanye blasting saat socket terputus, larangan cross-branch fallback socket, dan penayangan nomor fisik terhubung aktual (+62 813...) di kartu status CRM.",
    "benefit": "Menjamin pesan nota kasir, promo, dan obrolan live chat tidak pernah tertukar atau dikirimkan melalui nomor telepon cabang lain."
  },
  {
    "category": "G. CRM, WA Gateway & Loyalty",
    "name": "116. Pelacakan Progres Follow-Up SPK Batal (FU 1-4) — `/crm`",
    "func": "Manajemen tindak lanjut calon pelanggan yang membatalkan servis kendaraan (Non-Closing) hingga 4 kali pendekatan.",
    "feature": "Modal interaktif pencatatan progres FU 1 s.d. FU 4, penyimpanan `followUpJson` additive di database, filter respon pelanggan, dan tombol 1-klik follow-up via WhatsApp template personal.",
    "benefit": "Menyelamatkan potensi omset yang tertunda dengan meyakinkan kembali customer yang ragu agar bersedia menjadwalkan servis ulang."
  },
  {
    "category": "G. CRM, WA Gateway & Loyalty",
    "name": "117. Riwayat & Log Audit Reminder After Service — `/crm/reminder`",
    "func": "Jejak audit komprehensif seluruh pesan pengingat servis yang pernah dikirimkan ke pelanggan pasca kunjungan bengkel.",
    "feature": "Tab mode [ Riwayat / Log Reminder ], kartu KPI (Total Reminder, Terkirim, Batal, Respon Positif), filter status dan rentang tanggal, modal pratinjau teks pesan WA, serta tombol direct wa.me anti-teks terpotong.",
    "benefit": "Memastikan tim CS disiplin menjalankan SOP perawatan hubungan pelanggan H+3, H+30, dan H+90 hari setelah mobil diservis."
  },
  {
    "category": "G. CRM, WA Gateway & Loyalty",
    "name": "118. CRM Social Media Marketing & Meta Graph API V20+ — `/crm/social-media`",
    "func": "Sinkronisasi terpadu konten Instagram Reels dan Facebook Page resmi bengkel langsung dari Meta Graph API.",
    "feature": "Auto-resolve Instagram Business ID dari Facebook Page, penukaran Page Access Token otomatis, kalender konten terpadu (`/crm/social-media/calendar`), dan evaluasi interaksi (likes, comments, reach, views).",
    "benefit": "Mengeliminasi input manual konten sosmed dan memantau performa branding online bengkel secara real-time dari satu dasbor."
  },
  {
    "category": "G. CRM, WA Gateway & Loyalty",
    "name": "119. Smart Caption Funnel TOFU / MOFU / BOFU Sosmed — `/crm/social-media`",
    "func": "Algoritma pemilah narasi cerdas yang membedakan konten edukasi/tips dengan ajakan promosi booking servis.",
    "feature": "Pemisahan teks body utama dari footer WhatsApp CTA, auto-classification cerdas (TOFU: Edukasi Kaki-Kaki, MOFU: Diagnosa Masalah, BOFU: Promo/Diskon), quick dropdown selector manual, dan proteksi anti-overwrite.",
    "benefit": "Menghasilkan grafik Keseimbangan Corong Konten yang akurat tanpa kesalahan klasifikasi akibat adanya nomor kontak di penutup caption."
  },
  {
    "category": "G. CRM, WA Gateway & Loyalty",
    "name": "120. Metrik Adaptif Foto vs Video Reels & Drop Alert — `/crm/social-media`",
    "func": "Standarisasi evaluasi performa konten sosial media berdasarkan tipe media yang diunggah.",
    "feature": "Evaluasi video Reels berbasis akumulasi Video Views & Plays vs foto statis berbasis Likes & Reach, visual badge Drop Alert untuk konten di bawah rata-rata, dan leaderboard performa postingan.",
    "benefit": "Membantu tim kreatif konten mengetahui format video mana yang paling efektif mendatangkan penonton dan calon customer."
  },
  {
    "category": "G. CRM, WA Gateway & Loyalty",
    "name": "121. Generator Tautan Iklan WhatsApp Ber-Tag Smart UTM — `/crm/ads`",
    "func": "Pembuat link klik-ke-WhatsApp berparameter kode kampanye untuk disematkan pada tombol iklan FB & IG Ads.",
    "feature": "Modal generator link WhatsApp cerdas, auto-detect nomor telepon resmi cabang aktif dari profil bengkel, pemilihan nomor CS cabang, custom pesan sambutan, dan copy 1-klik siap tempel di Ads Manager.",
    "benefit": "Menjamin setiap chat masuk dari iklan langsung teratribusi ke kampanye yang tepat sehingga perhitungan ROI iklan 100% presisi."
  },
  {
    "category": "G. CRM, WA Gateway & Loyalty",
    "name": "122. Pelacakan KPI Digital Marketing CAC, AOV & Status ROAS — `/crm/ads`",
    "func": "Analisis laba rugi kampanye iklan digital berbayar berdasarkan konversi omset riil SPK bengkel.",
    "feature": "Kartu KPI dominan CAC (Customer Acquisition Cost) dan AOV (Average Order Value), badge otomatis status kesehatan ROAS (Merah: Boncos <1x, Kuning: Impas 1-2x, Hijau: Profit Sehat >=2x), dan atribusi omset SPK riil.",
    "benefit": "Membantu Owner dan digital marketer memutuskan secara objektif kampanye mana yang harus dinaikkan anggarannya atau dihentikan."
  },
  {
    "category": "B. Inventaris & Logistik Gudang",
    "name": "123. Normalisasi Nama Produk & Katalog Fast-Moving (BALLJOINT) — `/inventory`",
    "func": "Penyeragaman nama suku cadang kaki-kaki pada katalog master dan paket servis untuk mencegah duplikasi data.",
    "feature": "Normalisasi otomatis penulisan \"BALL JOINT\" menjadi \"BALLJOINT\", penyelarasan SKU part dan paket perbaikan di seluruh cabang, dan pencarian cepat katalog.",
    "benefit": "Menjaga kerapian database gudang dan mempermudah pencarian stok barang oleh mekanik maupun kasir di lapangan."
  },
  {
    "category": "B. Inventaris & Logistik Gudang",
    "name": "124. Fitur Merger Sparepart Duplikat Berbasis Komparasi Detail — `/inventory`",
    "func": "Modul khusus Owner untuk menggabungkan dua produk kembar atau salah input nama menjadi satu master SKU resmi.",
    "feature": "Modal interaktif komparasi side-by-side (Produk Sumber vs Produk Master Tujuan), deteksi ketidaksesuaian merek/harga, simulasi penggabungan stok cabang, dan pemindahan riwayat penjualan atomik.",
    "benefit": "Membersihkan master katalog gudang dari produk duplikat tanpa menghilangkan data historis nota transaksi penjualan lama."
  },
  {
    "category": "B. Inventaris & Logistik Gudang",
    "name": "125. Peringatan Notifikasi Stok Kritis Multi-Nomor WhatsApp — `/settings/notifications`",
    "func": "Konfigurasi batas stok minimal dan pendaftaran banyak nomor WhatsApp penerima sinyal bahaya restock serempak.",
    "feature": "Input multi-nomor telepon (dipisahkan koma, titik koma, atau baris baru), visualisasi tag nomor aktif, pemicu otomatis saat stok fisik <= minStock, dan format pesan darurat detail nama part, sisa stok, & cabang.",
    "benefit": "Owner, Kepala Gudang, dan Partman menerima pemberitahuan bahaya serempak sehingga bengkel tidak pernah kehabisan sparepart saat melayani customer."
  },
  {
    "category": "C. Penjualan & Kasir (POS)",
    "name": "126. Payment Gateway Midtrans (QRIS Dinamis & Virtual Account) — `/settings/payment-gateway` & `/pos`",
    "func": "Integrasi pembayaran nontunai digital instan di kasir retail POS dan pembayaran pelunasan faktur SPK servis.",
    "feature": "Midtrans Snap/Core API integration, QRIS dinamis per-transaksi, Virtual Account multi-bank (BCA, Mandiri, BNI, BRI), auto-verifikasi via webhook signature callback, status LUNAS instan, dan anti-struk palsu 100%.",
    "benefit": "Kasir tidak perlu meminta bukti transfer kertas atau cek mutasi rekening manual, antrean pembayaran lebih cepat dan bebas fraud kuitansi edit."
  },
  {
    "category": "B. Inventaris & Logistik Gudang",
    "name": "127. Scan Barcode Cek Stok Barang Portabel Kamera HP — `/inventory/scan`",
    "func": "Aplikasi pemindai barcode portabel berbasis PWA menggunakan kamera smartphone untuk cek stok fisik langsung di lorong gudang.",
    "feature": "Akses kamera HP langsung (depan/belakang), scan barcode Code 128 atau QR Code, penayangan instan info produk (Nama, SKU, Stok per Cabang, Lokasi Rak, Harga Jual, HPP), dan bypass caching Service Worker.",
    "benefit": "Staf gudang dan mekanik dapat memeriksa persediaan barang langsung dari bawah kolong mobil tanpa perlu bolak-balik ke meja komputer."
  },
  {
    "category": "B. Inventaris & Logistik Gudang",
    "name": "128. Pembuatan & Cetak Label Barcode Rak/Dus (Code 128) — `/products/print-barcode`",
    "func": "Pembuat label kode barcode fisik otomatis untuk rak penyimpanan dan kemasan dus suku cadang bengkel.",
    "feature": "Generator barcode Code 128 standar industri, layout stiker thermal roll (ukuran 50x30 mm, 40x20 mm) atau kertas stiker lembaran A4/F4, dan antrean cetak massal.",
    "benefit": "Mempercepat proses stock opname, penataan lorong gudang lebih rapi, dan sparepart siap dipindai kapan saja."
  },
  {
    "category": "B. Inventaris & Logistik Gudang",
    "name": "129. Pembagi Qty Cetak Kustom Barcode per Dus/Kemasan — `/products/print-barcode`",
    "func": "Kalkulator cerdas penghitung jumlah lembar stiker barcode saat barang grosir tiba dalam kemasan pack/dus isi banyak.",
    "feature": "Input kuantitas kemasan (isi 2, 4, 10, 50 pcs), auto-division calculation lembar label, grid preview sheet, dan tombol print langsung.",
    "benefit": "Mempermudah gudang melabeli suku cadang grosir partai besar dalam satu kali perintah cetak tanpa hitung manual."
  },
  {
    "category": "B. Inventaris & Logistik Gudang",
    "name": "130. Auto-Scale Canvas Barcode Rendering Anti-Gepeng — `/products/print-barcode`",
    "func": "Algoritma penyesuaian rasio barcode agar garis batang tercetak tajam dan tidak gepeng/terpotong di printer thermal.",
    "feature": "Raster Canvas-PNG rendering, auto-scale ratio lebar-tinggi, CSS print packaging wrap, dan optimasi kontras tinggi.",
    "benefit": "Menjamin seluruh barcode stiker selalu dapat dibaca mulus oleh scanner laser kasir maupun kamera HP staf gudang."
  },
  {
    "category": "F. HRD & Penggajian Karyawan",
    "name": "131. Portal Publik Lowongan Kerja & Karir Online — `/karir`",
    "func": "Halaman web resmi publikasi lowongan kerja mekanik kaki-kaki, Service Advisor, kasir, dan anak magang PKL SMK.",
    "feature": "Formulir lamaran online ramah HP, auto-kompresi pas foto pelamar (Canvas WebP hemat 95%), 4 preset dinamis formulir, dan terhubung langsung ke HRD.",
    "benefit": "Menarik kandidat teknisi dan staf berkualitas dari berbagai daerah tanpa harus mengumpulkan berkas kertas fisik."
  },
  {
    "category": "F. HRD & Penggajian Karyawan",
    "name": "132. Pendaftaran Pelamar & Ujian Teori Otomotif Online — `/karir/portal/exam`",
    "func": "Portal pengerjaan soal ujian seleksi pemahaman teknis suspensi, sistem kemudi, tierod, dan bushing secara digital.",
    "feature": "Bank soal kejuruan otomotif, timer pengerjaan ujian, auto-grading skor kelulusan, dan pencatatan riwayat jawaban pelamar ke database.",
    "benefit": "Menyaring kandidat yang memiliki pemahaman teknis yang benar sebelum dipanggil ke tahap wawancara dan tes praktik bengkel."
  },
  {
    "category": "F. HRD & Penggajian Karyawan",
    "name": "133. Ujian Praktik Pitstop & Onboarding 1-Klik Master Karyawan — `/hrd/rekrutmen`",
    "func": "Penilaian praktik kerja pitstop oleh Foreman dan konversi otomatis pelamar yang lulus menjadi karyawan resmi bengkel.",
    "feature": "Lembar evaluasi praktik bongkar pasang & press bushing kaki-kaki, rating 1-5 bintang, template WA panggilan kerja, dan 1-klik create master pegawai + PIN akses.",
    "benefit": "Mempersingkat proses penerimaan staf baru dari hitungan hari menjadi hanya 5 detik tanpa perlu entri ulang biodata pelamar."
  },
  {
    "category": "G. CRM, WA Gateway & Loyalty",
    "name": "134. Portal Digital Buku Servis Customer (PWA Stiker QR) — `/buku-service`",
    "func": "Aplikasi web mandiri bagi pelanggan mobil untuk memeriksa rekam medis perbaikan kendaraannya secara online.",
    "feature": "Scan stiker QR Code di kaca mobil atau login Plat Nomor + PIN, histori penggantian sparepart, jadwal servis berkala otomatis, rating ulasan, dan unduh nota digital.",
    "benefit": "Memberikan pengalaman berkelas layaknya bengkel resmi ATPM modern, meningkatkan kepercayaan pelanggan, dan mendorong kunjungan servis berulang."
  },
  {
    "category": "G. CRM, WA Gateway & Loyalty",
    "name": "135. Peta Persebaran Lokasi Customer & Geolocation Map — /customers/map",
    "func": "Visualisasi sebaran geografis domisili pelanggan bengkel berbasis peta interaktif OpenStreetMap.",
    "feature": "Pemetaan titik koordinat domisili customer, klasterisasi wilayah terpadat, deteksi jangkauan radius servis (1-15 km), dan analisis daerah sepi pelanggan.",
    "benefit": "Membantu Owner memetakan kantong pasar potensial untuk penentuan target penempatan baliho promosi atau pembukaan cabang baru."
  },
  {
    "category": "G. CRM, WA Gateway & Loyalty",
    "name": "136. Segmentasi Pelanggan RFM (Recency, Frequency, Monetary) — /customers/rfm",
    "func": "Algoritma segmentasi otomatis pengelompokan pelanggan setia, pelanggan berisiko churn, dan pelanggan baru.",
    "feature": "Skoring RFM otomatis (Champions, Loyal Customers, Potential Loyalists, At Risk, Hibernating), filter segmentasi sekali klik, dan direct export target WhatsApp blast.",
    "benefit": "Mencegah kehilangan pelanggan setia dengan intervensi promo personal sebelum mereka pindah ke bengkel kompetitor."
  },
  {
    "category": "J. Analitik Eksekutif & Visi Bisnis",
    "name": "137. Prediksi Pendapatan & Revenue Forecasting AI — /analytics/revenue-forecast",
    "func": "Model proyeksi pergerakan omset dan arus kas bengkel bulan berikutnya berbasis machine learning tren historis.",
    "feature": "Grafik proyeksi omset probabilistik, deteksi musim liburan/lebaran/peak season, perkiraan kebutuhan likuiditas kas, dan sinyal peringatan defisit kas dini.",
    "benefit": "Owner dapat mengantisipasi penurunan kas jauh-jauh hari dan merencanakan alokasi modal belanja part secara presisi."
  },
  {
    "category": "D. Keuangan & Akuntansi (GL)",
    "name": "138. Analitik Finansial & Profitabilitas Makro — /analytics/finance",
    "func": "Dasbor evaluasi marjin kontribusi laba per unit servis, rasio efisiensi beban, dan kesehatan working capital.",
    "feature": "Breakdown Gross Margin vs Net Margin per cabang, rasio beban gaji terhadap omset (target < 30%), grafik perputaran kas, dan quick financial health score.",
    "benefit": "Memberikan navigasi finansial tingkat tinggi tanpa Owner harus membedah lembaran neraca akuntansi yang rumit."
  },
  {
    "category": "B. Inventaris & Logistik Gudang",
    "name": "139. Sistem Predictive Reordering & Peramalan Habis Stok — /inventory/predictive",
    "func": "Kalkulator cerdas peramal tanggal habisnya suku cadang fast-moving berbasis laju pemakaian harian (velocity).",
    "feature": "Perhitungan Run-out Date per SKU, lead time supplier buffer, saran kuantitas reorder paling ekonomis (EOQ), dan konversi instan menjadi draf Purchase Order.",
    "benefit": "Menghindarkan bengkel dari kondisi darurat kehabisan kampas rem atau oli tanpa menimbun stok mati (overstock)."
  },
  {
    "category": "A. Workshop & Manajemen Servis",
    "name": "140. Monitoring Efektivitas & Produktivitas Mekanik per Stall — /monitoring/efektivitas",
    "func": "Pelacakan jam kerja efektif teknisi di stall pengerjaan dibandingkan dengan standar waktu kerja (flat-rate hours).",
    "feature": "Indeks produktivitas mekanik (%) harian/mingguan, idle time tracking, pencatatan waktu pengerjaan per jenis pekerjaan, dan grafik komparasi antar-stall.",
    "benefit": "Mengidentifikasi mekanik berkinerja tinggi serta mengeliminasi waktu menganggur (idle time) di area bengkel."
  },
  {
    "category": "J. Analitik Eksekutif & Visi Bisnis",
    "name": "141. Dasbor Produktivitas Multi-Cabang Terpadu — /owner/productivity",
    "func": "Pusat komparasi produktivitas kerja seluruh staf bengkel lintas cabang dalam satu layar eksekutif.",
    "feature": "Benchmarking omset per mekanik per hari, rasio unit selesai tepat waktu, ranking Service Advisor terproduktif, dan filter antar-cabang fleksibel.",
    "benefit": "Menciptakan budaya kompetisi positif dan mempermudah evaluasi rotasi staf ke cabang yang kekurangan tenaga ahli."
  },
  {
    "category": "F. HRD & Penggajian Karyawan",
    "name": "142. Manajemen Distribusi & Inventaris Seragam Karyawan — /hrd/seragam",
    "func": "Pencatatan alokasi baju werpak bengkel, polo shirt SA, dan seragam kasir beserta siklus pergantian tahunan.",
    "feature": "Database ukuran baju staf, histori tanggal penyerahan seragam, batasan jatah seragam per tahun, dan kalkulasi otomatis potongan seragam tambahan.",
    "benefit": "Memastikan seluruh staf bengkel tampil rapi dan profesional di hadapan pelanggan dengan pengelolaan inventaris yang tertib."
  },
  {
    "category": "F. HRD & Penggajian Karyawan",
    "name": "143. Checklist Audit Kepatuhan SOP Cabang (Business Unit) — /hrd/checklist-bu",
    "func": "Inspeksi digital kepatuhan standar kebersihan, kerapian stall, kelengkapan APD, dan operasional harian cabang.",
    "feature": "Formulir checklist interaktif dengan unggah foto bukti lapangan, skoring audit 0-100%, catatan temuan pelanggaran SOP, dan notifikasi real-time ke Kepala Cabang.",
    "benefit": "Menjaga standar kualitas layanan bengkel tetap seragam di seluruh cabang tanpa harus dikunjungi Owner setiap hari."
  },
  {
    "category": "F. HRD & Penggajian Karyawan",
    "name": "144. Evaluasi Kinerja Staf & Penilaian Kompetensi Berkala — /hrd/performance",
    "func": "Sistem Key Performance Indicator (KPI) berkala untuk kenaikan grade mekanik, SA, kasir, dan staf pendukung.",
    "feature": "Matriks penilaian multi-dimensi (Kedisiplinan, Kualitas Kerja, Zero Complain, Omset), histori rapor semesteran, dan rekomendasi kenaikan gaji/promosi.",
    "benefit": "Menghilangkan penilaian subjektif dan memberikan jenjang karir yang adil serta transparan bagi seluruh tim bengkel."
  },
  {
    "category": "J. Analitik Eksekutif & Visi Bisnis",
    "name": "145. Manajemen Hak Akses Granular Role SaaS — /developer/saas-roles",
    "func": "Konfigurasi hak akses super-detail untuk setiap fungsi menu, tombol aksi, dan visibilitas nominal keuangan.",
    "feature": "Matriks izin per tombol (View, Create, Edit, Delete, Approve, Export), grouping role kustom, proteksi kolom HPP dari kasir, dan isolasi akses per cabang.",
    "benefit": "Memberikan proteksi data tingkat bank, mencegah staf melihat data rahasia modal atau laba yang bukan wewenangnya."
  },
  {
    "category": "J. Analitik Eksekutif & Visi Bisnis",
    "name": "146. Analitik Utilisasi Multi-Tenant Lintas Mitra — /developer/tenant-analytics",
    "func": "Pengawasan volume transaksi, pemakaian storage dokumen foto, dan keaktifan sistem di seluruh entitas bengkel.",
    "feature": "Grafik transaksi realtime multi-bengkel, status kesehatan koneksi database cloud, konsumsi bandwidth, dan statistik error log terpusat.",
    "benefit": "Memastikan performa server tetap stabil dan responsif di bawah 1 detik bahkan saat seluruh cabang sibuk bersamaan."
  },
  {
    "category": "J. Analitik Eksekutif & Visi Bisnis",
    "name": "147. Audit Skema Database Multi-Tenant & Additive Governance — /developer/database",
    "func": "Monitoring kesehatan struktur database relasional PostgreSQL dengan proteksi migrasi aditif tanpa downtime.",
    "feature": "Pemeriksaan integritas foreign keys, audit log schema drift, health check koneksi pooling, dan backup otomatis sebelum migrasi berjalan.",
    "benefit": "Menjamin 100% keamanan data operasional pelanggan dan transaksi tanpa pernah mengalami kegagalan sistem saat upgrade."
  },
  {
    "category": "G. CRM, WA Gateway & Loyalty",
    "name": "148. Kartu Digital Member & Barcode Loyalty Customer — /crm/membercard",
    "func": "Penerbitan kartu loyalitas digital berbasis smartphone dengan kode QR/Barcode unik untuk setiap pelanggan mobil.",
    "feature": "Generasi kartu digital siap simpan di HP (Apple Wallet / Google Wallet ready image), barcode nopol, tier status badge, dan scan kilat di kasir/SA.",
    "benefit": "Meningkatkan gengsi dan loyalitas pelanggan tanpa mengeluarkan biaya cetak kartu plastik fisik yang mudah hilang."
  },
  {
    "category": "G. CRM, WA Gateway & Loyalty",
    "name": "149. Log Kegiatan Public Relations, Event & Branding — /crm/pr-activity",
    "func": "Dokumentasi agenda sponsor komunitas mobil, pameran otomotif, bakti sosial, dan siaran pers bengkel.",
    "feature": "Kalender kegiatan branding eksternal, pencatatan biaya sponsor, evaluasi perolehan leads komunitas mobil, dan dokumentasi media.",
    "benefit": "Memastikan anggaran promosi komunitas mobil terukur dampaknya terhadap pertambahan unit masuk ke bengkel."
  },
  {
    "category": "G. CRM, WA Gateway & Loyalty",
    "name": "150. Rekapitulasi Bonus Retensi & Poin Reward Pelanggan — /crm/rekap-bonus",
    "func": "Manajemen perolehan dan penukaran poin reward servis bagi pelanggan setia yang rutin merawat kendaraannya.",
    "feature": "Aturan konversi nominal belanja ke poin, batas kedaluwarsa poin, katalog penukaran merchandise/voucher servis, dan log histori penukaran.",
    "benefit": "Mendorong pelanggan untuk selalu memilih bengkel Anda daripada bengkel lain demi mengumpulkan poin reward."
  },
  {
    "category": "D. Keuangan & Akuntansi (GL)",
    "name": "151. Manajemen HPP Bersih Murni & Proteksi Rumus Modal — /reports/hpp-management",
    "func": "Modul audit Harga Pokok Penjualan murni (HPP Material + Subkon Alat) tanpa kontaminasi variabel harga jual.",
    "feature": "Audit kepatuhan rumus materialCost murni, deteksi anomali selisih harga beli vs master part, dan laporan marjin kotor per jenis pekerjaan SPK.",
    "benefit": "Melindungi laba kotor bengkel dari kesalahan pembukuan dan memastikan nilai profit yang dilaporkan benar-benar riil."
  },
  {
    "category": "D. Keuangan & Akuntansi (GL)",
    "name": "152. Matriks Penuaan Hutang Supplier (Aging Payables) — /reports/debt-matrix",
    "func": "Tabel analisis jatuh tempo hutang pembelian sparepart ke distributor berdasarkan rentang umur (0-30, 31-60, >90 hari).",
    "feature": "Grouping tagihan per supplier, visualisasi resiko keterlambatan bayar, rekomendasi urutan pembayaran kas, dan export jadwal bayar.",
    "benefit": "Menjaga reputasi kredit bengkel di mata distributor suku cadang dan memaksimalkan pemanfaatan tempo pembayaran."
  },
  {
    "category": "D. Keuangan & Akuntansi (GL)",
    "name": "153. Laporan Postur Keuangan Bengkel & Rasio Likuiditas — /reports/posture",
    "func": "Ringkasan komprehensif struktur aset lancar, persediaan barang, kewajiban jangka pendek, dan ekuitas bersih.",
    "feature": "Current Ratio, Quick Ratio, Debt-to-Equity Ratio, grafik komposisi aset bengkel, dan analisis kecukupan dana cadangan darurat operasional.",
    "benefit": "Memberikan kepastian kepada Owner bahwa bisnis bengkel memiliki daya tahan finansial yang kokoh terhadap fluktuasi ekonomi."
  },
  {
    "category": "B. Inventaris & Logistik Gudang",
    "name": "154. Manajemen Retur Pembelian Suku Cadang ke Supplier — /purchasing/returns",
    "func": "Pencatatan pengembalian suku cadang rusak, cacat pabrik, atau salah kirim ke distributor dengan audit nota retur.",
    "feature": "Penerbitan Berita Acara Retur Pembelian, pemotongan otomatis saldo stok gudang, penyesuaian saldo hutang dagang (Debit Note), dan log foto part.",
    "benefit": "Mencegah kerugian modal akibat menimbun suku cadang cacat pabrik yang tidak bisa dipasang ke mobil customer."
  },
  {
    "category": "D. Keuangan & Akuntansi (GL)",
    "name": "155. Otomatisasi Beban Operasional Berulang (Recurring Expenses) — /accounting/recurring-expenses",
    "func": "Penjadwalan otomatis pengakuan beban rutin bulanan seperti sewa gedung, listrik PLN, internet IndiHome, dan iuran sampah.",
    "feature": "Template beban berulang dengan tanggal pemicu bulanan, auto-post ke jurnal akuntansi saat jatuh tempo, dan peringatan tagihan kasir.",
    "benefit": "Menghilangkan kelupaan pencatatan biaya rutin yang dapat menyebabkan distorsi laporan laba rugi bulanan."
  },
  {
    "category": "D. Keuangan & Akuntansi (GL)",
    "name": "156. Manajemen Periode Akuntansi & Penguncian Buku Tahunan — /accounting/periods",
    "func": "Sistem penguncian buku fiskal tahunan untuk mencegah perubahan transaksi masa lampau yang sudah diaudit dan dilaporkan SPT.",
    "feature": "Penguncian periode multi-level (Bulanan / Tahunan), pembatasan akses edit backdated transaction, otorisasi override PIN Owner, dan audit trail penutupan buku.",
    "benefit": "Menjamin kepatuhan standar audit perbankan dan perpajakan Indonesia tanpa risiko kebocoran data masa lalu."
  },
  {
    "category": "C. Penjualan & Kasir (POS)",
    "name": "157. Manajemen Promo Kupon Diskon & Voucher Servis — /settings/promos",
    "func": "Pembuat kode kupon promosi digital dengan batasan syarat minimal belanja, tanggal berlaku, dan kuota pemakaian.",
    "feature": "Kupon persen (%) atau nominal (Rp), batasan khusus servis atau part, auto-apply di kasir saat kode diinput, dan analisis efektivitas promo.",
    "benefit": "Memudahkan pelaksanaan kampanye promosi musiman yang terkendali tanpa risiko manipulasi diskon liar oleh kasir."
  },
  {
    "category": "A. Workshop & Manajemen Servis",
    "name": "158. Master Database Brand & Varian Tipe Mobil Indonesia — /settings/vehicle-brands",
    "func": "Katalog terstandarisasi seluruh merek, model, tahun produksi, dan varian transmisi kendaraan yang beredar di Indonesia.",
    "feature": "Database ribuan tipe mobil (Toyota, Honda, Daihatsu, Mitsubishi, Suzuki, Hyundai, dll.), autocomplete pencarian saat input nopol di SA, dan standarisasi nama tipe.",
    "benefit": "Menghilangkan salah ketik model mobil di nota servis dan mempermudah pemetaan riwayat teknis per tipe kendaraan."
  },
  {
    "category": "F. HRD & Penggajian Karyawan",
    "name": "159. Inventarisasi Peralatan Kantor & Fasilitas Bengkel — /settings/office-assets",
    "func": "Pencatatan aset sarana bengkel seperti AC ruang tunggu, TV display, dispenser, sofa, dan komputer kasir.",
    "feature": "Label kode aset kantor, lokasi penempatan cabang, riwayat perawatan pembersihan AC berkala, dan penanggung jawab inventaris.",
    "benefit": "Memastikan fasilitas ruang tunggu pelanggan selalu nyaman dan terawat demi menjaga kepuasan serta reputasi bengkel."
  },
  {
    "category": "A. Workshop & Manajemen Servis",
    "name": "160. Rekapitulasi Servis & Audit Omset Bulanan Transparan — /service/rekap-bulanan",
    "func": "Laporan rekapitulasi menyeluruh seluruh transaksi servis yang diselesaikan dalam satu siklus bulan operasional cabang.",
    "feature": "Rincian transaksi per SPK, pemisahan omset jasa vs part, audit diskon yang diberikan, komparasi metode bayar (Tunai/QRIS/Transfer), dan ekspor Excel satu klik.",
    "benefit": "Mempermudah Owner dan Kepala Cabang melakukan rekonsiliasi akhir bulan dan mencocokkan total uang masuk ke rekening bank."
  },
  {
    "category": "G. CRM, WA Gateway & Loyalty",
    "name": "161. Analisa Pelanggan Baru (CSM) vs Pelanggan Lama (CST) — /customers/analysis",
    "func": "Modul audit riwayat kunjungan fisik real visit untuk memetakan pertumbuhan akuisisi pelanggan baru vs retensi pelanggan lama.",
    "feature": "Filter tanggal cutoff, grafik rasio customer baru vs lama, pelacakan nopol pertama servis, dan audit akurasi data kunjungan bengkel.",
    "benefit": "Memberikan kepastian efektivitas biaya iklan Meta Ads terhadap kedatangan mobil baru yang benar-benar melakukan transaksi fisik di bengkel."
  },
  {
    "category": "G. CRM, WA Gateway & Loyalty",
    "name": "162. Integrasi WhatsApp Web Multi-Session & QR Gateway — /crm/whatsapp",
    "func": "Konektor WhatsApp multi-cabang tanpa biaya langganan bulanan vendor pihak ketiga.",
    "feature": "Scan QR WhatsApp Web langsung dari dasbor, multi-cabang terisolasi per nomor admin, auto-reconnect WebSocket, dan queue anti-blokir.",
    "benefit": "Menghemat biaya SaaS WhatsApp Gateway hingga puluhan juta rupiah per tahun sambil menjaga komunikasi pelanggan tetap cepat dan personal."
  },
  {
    "category": "J. Analitik Eksekutif & Visi Bisnis",
    "name": "163. Audit Rekap Cutoff & Rekonsiliasi Real Visit — /crm/rekap-cutoff",
    "func": "Penyelarasan data unit entry operasional bengkel terhadap laporan keuangan dan omset kasir.",
    "feature": "Rekap SPK fisik selesai harian, pencocokan nomor polisi unik terhadap invoice kasir, deteksi selisih input unit entry, dan export laporan PDF/Excel.",
    "benefit": "Mencegah perbedaan pencatatan antara catatan Service Advisor di lantai kerja dengan bukti penerimaan uang di kasir."
  },
  {
    "category": "D. Keuangan & Akuntansi (GL)",
    "name": "164. Penguncian Buku Fiskal & SAK ETAP Compliance — /accounting/journal",
    "func": "Sistem penjurnalan akuntansi standar keuangan entitas tanpa akuntabilitas publik dengan audit trail ketat.",
    "feature": "Buku besar otomatis, neraca lajur multi-kolom, posting jurnal tertutup, dan kepatuhan cutoff data migrasi historis.",
    "benefit": "Menghasilkan laporan keuangan yang siap diaudit oleh perbankan untuk pengajuan fasilitas modal kerja atau perluasan cabang baru."
  }
];
