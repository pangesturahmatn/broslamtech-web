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
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), "utf8");
    return true;
  } catch (err) {
    console.error("Error saving team:", err);
    return false;
  }
}

export async function GET() {
  return NextResponse.json({ success: true, data: getTeam() });
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

    return NextResponse.json({ success: true, data: newMember });
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

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
