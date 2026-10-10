export interface NewsArticle {
  category: string;
  catTag: string;
  title: string;
  date: string;
  author: string;
  content: string;
}

export const newsArticlesData: NewsArticle[] = [
      {
        category: 'Update Sistem',
        catTag: 'sistem',
        title: 'BroSlam.Tech Resmi Luncurkan 164 Modul Ekosistem Bengkel 360° & Otomasi SAK ETAP',
        date: '10 Oktober 2026',
        author: 'Tim R&D BroSlam.Tech',
        content: `
          <p><strong>Purwokerto / Jakarta</strong> — BroSlam.Tech resmi mengumumkan perilisan pembaruan besar sistem ERP Bengkel versi 2.5 yang memuat total 164 modul operasional dan 380 endpoint API aktif.</p>
          <br>
          <p>Pembaruan ini mencakup 7 klaster solusi terintegrasi:</p>
          <ul style="margin-left: 20px; margin-top: 8px; margin-bottom: 8px;">
            <li><strong>Klaster Servis & Stall (28 Modul):</strong> Pengaturan alokasi stall pitstop, checklist baret fisik mobil, dan integrasi Android TV antrean ruang tunggu.</li>
            <li><strong>Klaster Gudang & FIFO (24 Modul):</strong> Kartu stok batch otomatis, pencegahan penimbunan part mati (slow moving), dan multi-gudang cabang.</li>
            <li><strong>Klaster Kasir & Akuntansi (26 Modul):</strong> Standardisasi SAK ETAP, neraca otomatis, dan proteksi rumus HPP materialCost murni.</li>
            <li><strong>Klaster CRM & Retensi (22 Modul):</strong> Gateway WhatsApp mandiri multi-sesi, audit real visit pelanggan baru (CSM) vs lama (CST).</li>
            <li><strong>Klaster SDM & Holding:</strong> Perhitungan komisi teknisi akurat dan komparasi performa cabang holding 30.000 kaki.</li>
          </ul>
          <br>
          <p>Seluruh entitas data terisolasi secara multi-tenant dengan proteksi keamanan tinggi, memungkinkan pemilik bengkel mengontrol puluhan cabang dalam satu akun aman.</p>
        `
      },
      {
        category: 'Manajemen & Finansial',
        catTag: 'bisnis',
        title: 'Mengatasi Bocor Halus Rp 20 Juta/Bulan Akibat Selisih Part & Biaya Subkon',
        date: '08 Oktober 2026',
        author: 'Konsultan Finansial Bengkel',
        content: `
          <p>Sebagian besar pemilik bengkel mobil dengan omset Rp 100 juta – Rp 500 juta per bulan mengalami fenomena "bengkel ramai, mobil antre, tapi saldo kas bank akhir bulan tidak bertambah".</p>
          <br>
          <p>Melalui audit lapangan BroSlam.Tech, terungkap 3 sumber utama kebocoran finansial tersembunyi:</p>
          <ol style="margin-left: 20px; margin-top: 8px; margin-bottom: 8px;">
            <li><strong>Penyusutan Fisik Suku Cadang:</strong> Part diambil teknisi dari rak sebelum faktur dibuat kasir, sehingga barang habis tanpa catatan pembayaran.</li>
            <li><strong>Biaya Sewa Alat / Subkon Bubut Tidak Tertagih:</strong> Pekerjaan alat khusus luar bengkel dibayarkan tunai oleh kasir tetapi lupa dimasukkan ke invoice pelanggan.</li>
            <li><strong>Diskon Liar Tanpa Otorisasi:</strong> Potongan harga manual yang diberikan staf tanpa persetujuan kepala cabang atau PIN Owner.</li>
          </ol>
          <br>
          <p>Dengan menerapkan BroSlam.Tech ERP, setiap suku cadang yang keluar wajib terkunci dengan nomor SPK aktif dan jurnal kas otomatis mencatat aliran dana tanpa selisih.</p>
        `
      },
      {
        category: 'Marketing & Retensi',
        catTag: 'marketing',
        title: 'Strategi Reminder Berkala 30-60-90 Hari Tanpa Biaya SaaS Gateway Mahal',
        date: '05 Oktober 2026',
        author: 'Spesialis CRM Otomotif',
        content: `
          <p>Mempertahankan pelanggan lama yang puas membutuhkan biaya 5x lebih hemat dibandingkan mengakuisisi pelanggan baru dari iklan media sosial.</p>
          <br>
          <p>BroSlam.Tech menghadirkan mesin automasi pesan WhatsApp tanpa perlu berlangganan vendor pihak ketiga yang mahal:</p>
          <ul style="margin-left: 20px; margin-top: 8px; margin-bottom: 8px;">
            <li><strong>H+1 Servis:</strong> Survei kepuasan pelanggan dan permintaan ulasan Google Maps.</li>
            <li><strong>H+30 Servis:</strong> Edukasi perawatan kaki-kaki atau rem pasca perjalanan jauh.</li>
            <li><strong>H+90 Servis:</strong> Pengingat otomatis penggantian oli mesin dan rotasi ban berdasarkan estimasi jarak tempuh kilometer harian mobil.</li>
          </ul>
          <br>
          <p>Semua pesan terkirim secara personal dengan mencantumkan nama pelanggan, jenis mobil, dan nomor polisi kendaraan secara akurat.</p>
        `
      }
    ];
