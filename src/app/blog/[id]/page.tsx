import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";
import { ArrowLeft, Calendar, User, Tag, Share2, MessageSquare, ArrowRight } from "lucide-react";
import articlesData from "../../../data/news-articles.json";

interface BlogDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() { return articlesData.map((a) => ({ id: a.id })); }

export default async function BlogDetailPage({ params }: BlogDetailPageProps) {
  const { id } = await params;
  const article = articlesData.find((a) => a.id === id);

  if (!article) {
    notFound();
  }

  const related = articlesData.filter((a) => a.id !== id).slice(0, 3);

  return (
    <div className="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100 flex flex-col justify-between transition-colors selection:bg-amber-500 selection:text-slate-950">
      <Navbar />

      <main className="pt-28 pb-20 flex-1">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Back Button */}
          <div>
            <Link
              href="/#portal-berita"
              className="inline-flex items-center gap-1.5 text-xs text-amber-400 hover:text-amber-300 font-bold transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Kembali ke Semua Berita &amp; Promo</span>
            </Link>
          </div>

          {/* Article Header */}
          <div className="space-y-4 pb-6 border-b border-slate-800">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-xs font-bold uppercase tracking-wider">
                {article.category}
              </span>
              {article.isPromo && (
                <span className="px-3 py-1 rounded-full bg-rose-500/20 text-rose-300 text-xs font-black border border-rose-500/30">
                  {article.promoBadge || "PROMO AKTIF"}
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
              {article.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-1">
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{article.date}</span>
              </span>
              <span>•</span>
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5" />
                <span>{article.author}</span>
              </span>
            </div>
          </div>

          {/* Feature Image if exists */}
          {article.imageUrl && (
            <div className="relative aspect-21/9 w-full rounded-3xl overflow-hidden border border-slate-800 shadow-2xl bg-slate-900">
              <Image
                src={article.imageUrl}
                alt={article.title}
                fill
                className="object-cover object-center"
                priority
              />
            </div>
          )}

          {/* Article Body (Medium / Substack Reading Typography: Light, Crisp, Highly Readable) */}
          <div className="bg-slate-900/60 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl space-y-5 text-sm sm:text-base text-slate-200 leading-relaxed font-normal">
            <div
              className="space-y-4"
              dangerouslySetInnerHTML={{ __html: article.content }}
            />
          </div>

          {/* WhatsApp Consultation & Share CTA Box */}
          <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="space-y-1 text-center sm:text-left">
              <h4 className="text-base font-black text-white">
                Ingin Berdiskusi Lebih Lanjut Mengenai Topik Ini?
              </h4>
              <p className="text-xs text-slate-400 max-w-lg">
                Hubungi tim konsultan kami atau ajukan pertanyaan langsung melalui WhatsApp resmi BroSlam.Tech.
              </p>
            </div>

            <a
              href={`https://wa.me/6281359433350?text=${encodeURIComponent(
                `Halo Tim BroSlam.Tech, saya baru membaca artikel: "${article.title}" dan ingin tanya lebih lanjut.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 px-6 py-3 rounded-2xl bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-400 hover:to-yellow-400 text-slate-950 font-black text-xs tracking-wide shadow-lg shadow-amber-500/20 transition-all flex items-center gap-2 cursor-pointer"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Tanya via WhatsApp</span>
            </a>
          </div>

          {/* Related Articles */}
          {related.length > 0 && (
            <div className="pt-10 border-t border-slate-800 space-y-6">
              <h3 className="text-lg font-black text-white">
                Artikel &amp; Wawasan Lainnya
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {related.map((rel) => (
                  <Link
                    key={rel.id}
                    href={`/blog/${rel.id}`}
                    className="p-4 rounded-2xl bg-slate-900/70 border border-slate-800 hover:border-slate-700 transition-all group flex flex-col justify-between space-y-3"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-amber-400 block mb-1">
                        {rel.category}
                      </span>
                      <h4 className="text-xs font-black text-white group-hover:text-amber-300 transition-colors line-clamp-2">
                        {rel.title}
                      </h4>
                    </div>
                    <div className="text-[11px] text-slate-500 flex items-center justify-between pt-2 border-t border-slate-800/80">
                      <span>{rel.date}</span>
                      <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform text-amber-400" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </article>
      </main>

      <Footer />
    </div>
  );
}
