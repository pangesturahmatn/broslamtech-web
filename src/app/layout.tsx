import { ThemeProvider } from "../context/ThemeContext";
import { LanguageProvider } from "../context/LanguageContext";
import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://broslamtech.com"),
  title: "BroSlam.Tech — Super Platform Digital Bengkel Mobil | Bromo & Slamet Profit Growth",
  description: "BroSlam.Tech: Aplikasi Digital Super Platform untuk Pemilik & Manajemen Multi-Cabang Bengkel Mobil Indonesia. Kendalikan usaha, pantau modal FIFO murni, dan percepat profit bisnis.",
  icons: {
    icon: "/assets/broslam-tech-icon.svg",
    apple: "/assets/broslam-globe-logo.png",
  },
  openGraph: {
    title: "BroSlam.Tech — Super Platform Digital Bengkel Mobil",
    description: "Kendalikan 1 hingga 50 cabang bengkel dalam satu genggaman: HPP FIFO presisi, integrasi WhatsApp otomatis, pantau mekanik real-time, dan akuntansi SAK ETAP standar perbankan.",
    images: ["/assets/broslam-globe-logo.png"],
    type: "website",
    url: "https://broslamtech.com",
  },
};

export const viewport: Viewport = {
  themeColor: "#020617",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&family=Space+Grotesk:wght@600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100 antialiased font-sans">
        <ThemeProvider>
        <LanguageProvider>
          {children}
        </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
