import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "src/data/team-members.json");

const PROTECTED_AVATAR_BASENAMES = new Set([
  "fuad.jpg",
  "fuad.svg",
  "utomo.jpg",
  "utomo.svg",
  "pangestu.jpg",
  "pangestu.svg",
  "nisa.jpg",
  "nisa.svg",
  "hendra.jpg",
  "hendra.svg",
]);

function removeOldAvatarFile(avatarPath?: string, currentTeam?: any[]) {
  if (!avatarPath || typeof avatarPath !== "string") return;
  if (!avatarPath.startsWith("/assets/team/")) return;

  const fileName = path.basename(avatarPath);
  if (PROTECTED_AVATAR_BASENAMES.has(fileName.toLowerCase())) return;

  if (currentTeam && currentTeam.some((m: any) => m.avatar === avatarPath)) {
    return;
  }

  try {
    const teamDir = path.resolve(process.cwd(), "public/assets/team");
    const targetPath = path.resolve(teamDir, fileName);

    if (!targetPath.startsWith(teamDir)) return;

    if (fs.existsSync(targetPath)) {
      fs.unlinkSync(targetPath);
      console.log(`[Auto-Cleanup] File avatar lama berhasil dihapus: ${fileName}`);
    }
  } catch (err) {
    console.warn(`[Auto-Cleanup] Gagal menghapus file avatar ${avatarPath}:`, err);
  }
}

function cleanupOrphanAvatars() {
  try {
    const teamDir = path.resolve(process.cwd(), "public/assets/team");
    if (!fs.existsSync(teamDir)) return;

    const team = getTeam();
    const activeAvatarFiles = new Set(
      team.map((m: any) => path.basename(m.avatar || "")).filter(Boolean)
    );

    const allFiles = fs.readdirSync(teamDir);
    const now = Date.now();
    const TEN_MINUTES_MS = 10 * 60 * 1000;

    for (const file of allFiles) {
      if (PROTECTED_AVATAR_BASENAMES.has(file.toLowerCase())) continue;
      if (activeAvatarFiles.has(file)) continue;

      const filePath = path.join(teamDir, file);
      const stat = fs.statSync(filePath);
      if (now - stat.mtimeMs > TEN_MINUTES_MS) {
        fs.unlinkSync(filePath);
        console.log(`[Auto-Cleanup] Orphan avatar berhasil dibersihkan: ${file}`);
      }
    }
  } catch (err) {
    console.warn("[Auto-Cleanup] Gagal membersihkan orphan avatars:", err);
  }
}

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
  cleanupOrphanAvatars();

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

    cleanupOrphanAvatars();

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
    const memberToDelete = team.find((m: any) => m.id === id);
    if (!memberToDelete) {
      return NextResponse.json({ success: false, error: "Anggota tim tidak ditemukan" }, { status: 404 });
    }

    team = team.filter((m: any) => m.id !== id);
    saveTeam(team);

    if (memberToDelete.avatar) {
      removeOldAvatarFile(memberToDelete.avatar, team);
    }

    cleanupOrphanAvatars();

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

    const previousAvatar = team[index].avatar;

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

    if (avatar && avatar !== previousAvatar) {
      removeOldAvatarFile(previousAvatar, team);
    }

    cleanupOrphanAvatars();

    return NextResponse.json(
      { success: true, data: team[index] },
      { headers: { "Cache-Control": "no-store, max-age=0" } }
    );
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}