export interface TeamMember {
  id: string;
  name: string;
  role: string;
  title: string;
  bio: string;
  avatar: string;
  focus: string[];
}

export const executiveTeam: TeamMember[] = [
  {
    id: "ceo",
    name: "FUAD SIRJUDDIN YAHYA",
    role: "CEO",
    title: "Chief Executive Officer",
    bio: "Memimpin arah strategis, kemitraan ekosistem korporasi, ekspansi penetrasi pasar bengkel mobil nasional, serta permodalan dan tata kelola holding.",
    avatar: "/assets/broslam-globe-logo.png",
    focus: ["Strategic Growth", "Corporate Partnership", "Enterprise Governance"],
  },
  {
    id: "coo",
    name: "UTOMO NUGROHO",
    role: "COO",
    title: "Chief Operating Officer",
    bio: "Pakar operasional bengkel mobil Indonesia. Mengorkestrasi SOP teknis lapangan, perputaran stall, penjaminan mutu servis, dan pelatihan SDM montir.",
    avatar: "/assets/broslam-globe-logo.png",
    focus: ["Workshop Operations", "SOP & Stall Optimization", "Mechanic Quality Assurance"],
  },
  {
    id: "cto",
    name: "PANGESTU RAHMAT N",
    role: "CTO",
    title: "Chief Technology Officer",
    bio: "Arsitek sistem Super Platform BroSlam.Tech. Mengembangkan engine multi-tenant, proteksi HPP FIFO, integrasi WhatsApp otomatis, dan arsitektur Next.js 16.",
    avatar: "/assets/broslam-globe-logo.png",
    focus: ["Next.js & Cloud Architecture", "Multi-Tenant Isolation", "Automation & AI Engines"],
  },
  {
    id: "cfo",
    name: "NISA NUR S",
    role: "CFO",
    title: "Chief Financial Officer",
    bio: "Mengelola disiplin akuntansi SAK ETAP, audit perbankan, kepatuhan perpajakan (PPN/PPh), struktur komersialisasi paket SaaS, dan mitigasi risiko kebocoran kas.",
    avatar: "/assets/broslam-globe-logo.png",
    focus: ["SAK ETAP Compliance", "Financial Risk Mitigation", "SaaS Pricing & Audit"],
  },
];
