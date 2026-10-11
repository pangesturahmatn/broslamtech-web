import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "src/data/news-articles.json");

function getArticles() {
  try {
    if (fs.existsSync(dataFilePath)) {
      const data = fs.readFileSync(dataFilePath, "utf8");
      return JSON.parse(data);
    }
  } catch (err) {
    console.error("Error reading news articles:", err);
  }
  return [];
}

function saveArticles(articles: any[]) {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(articles, null, 2), "utf8");
    return true;
  } catch (err) {
    console.error("Error saving news articles:", err);
    return false;
  }
}

export async function GET() {
  const articles = getArticles();
  return NextResponse.json({ success: true, data: articles });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { title, category, catTag, author, content, imageUrl, isPromo, promoBadge } = body;

    if (!title || !content) {
      return NextResponse.json({ success: false, error: "Judul dan konten wajib diisi" }, { status: 400 });
    }

    const articles = getArticles();
    const newArticle = {
      id: "art-" + Date.now(),
      title,
      category: category || (isPromo ? "Promo Spesial" : "Update Sistem"),
      catTag: catTag || (isPromo ? "promo" : "sistem"),
      isPromo: Boolean(isPromo),
      promoBadge: promoBadge || (isPromo ? "PROMO TERBARU" : ""),
      date: new Date().toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" }),
      author: author || "Admin BroSlam.Tech",
      imageUrl: imageUrl || "/assets/modern_workshop_hero.jpg",
      content,
    };

    articles.unshift(newArticle);
    const saved = saveArticles(articles);

    if (!saved) {
      return NextResponse.json({ success: false, error: "Gagal menyimpan artikel ke file" }, { status: 500 });
    }

    return NextResponse.json({ success: true, data: newArticle });
  } catch (error: any) {
    return NextResponse.json({ success: false, error: error?.message || "Internal server error" }, { status: 500 });
  }
}


export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ success: false, error: "ID wajib disertakan" }, { status: 400 });

    let articles = getArticles();
    articles = articles.filter((a: any) => a.id !== id);
    saveArticles(articles);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
