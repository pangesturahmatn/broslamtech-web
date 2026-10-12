import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "src/data/team-members.json");

function getTeam() {
  try {
    if (fs.existsSync(dataFilePath)) {
      return JSON.parse(fs.readFileSync(dataFilePath, "utf8"));
    }
  } catch (err) {
    console.error("Error reading team:", err);
  }
  return [];
}

function saveTeam(data: any[]) {
  try {
    const dir = path.dirname(dataFilePath);
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), "utf8");
    return true;
  } catch (err) {
    console.error("Error saving team:", err);
    return false;
  }
}

export async function GET() {
  return NextResponse.json(
    { success: true, data: getTeam() },
    { headers: { "Cache-Control": "no-store, max-age=0" } }
  );
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, role, title, companySubtitle, quote, bio, avatar, focus } = body;

    if (!name || !quote) {
      return NextResponse.json({ success: false, error: "Nama dan kutipan testimoni wajib diisi" }, { status: 400 });
    }

    const team = getTeam();
    const newMember = {
      id: "leader-" + Date.now(),
      name,
      role: role || "LEAD",
      title: title || "Executive Leader",
      companySubtitle: companySubtitle || "Dewan Eksekutif — BroSlam.Tech",
      quote,
      bio: bio || "Memimpin transformasi digital bengkel otomotif.",
      avatar: avatar || "/assets/team/fuad.jpg",
      focus: Array.isArray(focus) ? focus : (focus ? focus.split(",").map((s: string) => s.trim()) : ["Enterprise Solutions"]),
    };

    team.push(newMember);
    saveTeam(team);

    return NextResponse.json(
      { success: true, data: newMember },
      { headers: { "Cache-Control": "no-store, max-age=0" } }
    );
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ success: false, error: "ID wajib disertakan" }, { status: 400 });

    let team = getTeam();
    team = team.filter((m: any) => m.id !== id);
    saveTeam(team);

    return NextResponse.json(
      { success: true },
      { headers: { "Cache-Control": "no-store, max-age=0" } }
    );
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function PUT(req: Request) {
  try {
    const body = await req.json();
    const { id, name, role, title, companySubtitle, quote, bio, avatar, focus } = body;

    if (!id) {
      return NextResponse.json({ success: false, error: "ID anggota tim wajib disertakan" }, { status: 400 });
    }

    let team = getTeam();
    const index = team.findIndex((m: any) => m.id === id);
    if (index === -1) {
      return NextResponse.json({ success: false, error: "Anggota tim tidak ditemukan" }, { status: 404 });
    }

    team[index] = {
      ...team[index],
      name: name ?? team[index].name,
      role: role ?? team[index].role,
      title: title ?? team[index].title,
      companySubtitle: companySubtitle ?? team[index].companySubtitle,
      quote: quote ?? team[index].quote,
      bio: bio ?? team[index].bio,
      avatar: avatar ?? team[index].avatar,
      focus: Array.isArray(focus)
        ? focus
        : (focus ? focus.split(",").map((s: string) => s.trim()) : team[index].focus),
    };

    saveTeam(team);
    return NextResponse.json(
      { success: true, data: team[index] },
      { headers: { "Cache-Control": "no-store, max-age=0" } }
    );
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
