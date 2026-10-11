export interface TeamMember {
  id: string;
  name: string;
  role: string;
  title: string;
  companySubtitle: string;
  quote: string;
  bio: string;
  avatar: string;
  focus: string[];
}

export const executiveTeam: TeamMember[] = [
  {
    id: "ceo",
    name: "Fuad Sirjuddin Yahya",
    role: "CEO",
    title: "Chief Executive Officer",
    companySubtitle: "Presiden Direktur — BroSlam.Tech",
    quote: "Sebagai pengembang ekosistem digital bengkel mobil terdepan di Indonesia, kami memastikan setiap pemilik bengkel memiliki kendali penuh atas profitabilitas, perputaran modal FIFO, dan skalabilitas puluhan cabang tanpa batasan teknis.",
    bio: "Memimpin arah strategis, kemitraan ekosistem korporasi, ekspansi penetrasi pasar bengkel mobil nasional, serta permodalan dan tata kelola holding.",
    avatar: "/assets/team/fuad.jpg",
    focus: ["Strategic Growth", "Corporate Partnership", "Enterprise Governance"],
  },
  {
    id: "coo",
    name: "Utomo Nugroho",
    role: "COO",
    title: "Chief Operating Officer",
    companySubtitle: "Direktur Operasional — BroSlam.Tech",
    quote: "Dengan pengalaman puluhan tahun di lantai bengkel mobil nyata, kami merancang BroSlam.Tech agar menghilangkan kerumitan manual: dari antrean stall pitstop, checklist baret bodi mekanik, hingga kepuasan pelanggan walk-in.",
    bio: "Pakar operasional bengkel mobil Indonesia. Mengorkestrasi SOP teknis lapangan, perputaran stall, penjaminan mutu servis, dan pelatihan SDM montir.",
    avatar: "/assets/team/utomo.jpg",
    focus: ["Workshop Operations", "SOP and Stall Optimization", "Mechanic Quality Assurance"],
  },
  {
    id: "cto",
    name: "Pangestu Rahmat N",
    role: "CTO",
    title: "Chief Technology Officer",
    companySubtitle: "Direktur Teknologi dan Rekayasa Sistem — BroSlam.Tech",
    quote: "Arsitektur BroSlam.Tech dibangun di atas Next.js 16 dan engine multi-tenant dengan proteksi HPP FIFO murni. Sistem ini menjamin isolasi data mutlak, kecepatan transaksi kasir sub-detik, dan otomasi WhatsApp tanpa jeda.",
    bio: "Arsitek sistem Super Platform BroSlam.Tech. Mengembangkan engine multi-tenant, proteksi HPP FIFO, integrasi WhatsApp otomatis, dan arsitektur Next.js 16.",
    avatar: "/assets/team/pangestu.jpg",
    focus: ["Next.js and Cloud Architecture", "Multi-Tenant Isolation", "Automation and AI Engines"],
  },
  {
    id: "cfo",
    name: "Nisa Nur S",
    role: "CFO",
    title: "Chief Financial Officer",
    companySubtitle: "Direktur Keuangan dan Akuntansi — BroSlam.Tech",
    quote: "Kami menerapkan standardisasi akuntansi SAK ETAP standar perbankan nasional. Laporan laba rugi, neraca harian, dan rekonsiliasi kas bank tersaji otomatis tanpa risiko manipulasi angka atau kebocoran nota kasir.",
    bio: "Mengelola disiplin akuntansi SAK ETAP, audit perbankan, kepatuhan perpajakan (PPN/PPh), struktur komersialisasi paket SaaS, dan mitigasi risiko kebocoran kas.",
    avatar: "/assets/team/nisa.jpg",
    focus: ["SAK ETAP Compliance", "Financial Risk Mitigation", "SaaS Pricing and Audit"],
  },
  {
    id: "vp-partnership",
    name: "Dr. Hendra Wijaya, M.M.",
    role: "VP",
    title: "VP Strategic Partnership",
    companySubtitle: "Dewan Penasihat dan Kemitraan Bengkel — BroSlam.Tech",
    quote: "Kolaborasi ekosistem antara BroSlam.Tech dan jaringan bengkel independen di seluruh kota membuktikan bahwa digitalisasi bukan lagi beban investasi, melainkan pengungkit margin laba nyata sejak bulan pertama operasional.",
    bio: "Mengembangkan jaringan aliansi rantai pasok suku cadang resmi, kemitraan strategis bengkel mobil nasional, dan akselerasi adopsi digital multi-cabang.",
    avatar: "/assets/team/hendra.jpg",
    focus: ["Strategic Alliances", "Supply Chain Integration", "Multi-Branch Growth"],
  },
];
