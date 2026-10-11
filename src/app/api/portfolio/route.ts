import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

const dataFilePath = path.join(process.cwd(), "src/data/portfolio-clients.json");

function getClients() {
  try {
    if (fs.existsSync(dataFilePath)) {
      return JSON.parse(fs.readFileSync(dataFilePath, "utf8"));
    }
  } catch (err) {
    console.error("Error reading portfolio:", err);
  }
  return [];
}

function saveClients(data: any[]) {
  try {
    fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2), "utf8");
    return true;
  } catch (err) {
    console.error("Error saving portfolio:", err);
    return false;
  }
}

export async function GET() {
  return NextResponse.json({ success: true, data: getClients() });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, category, locations, stallCount, achievement, logoBadge } = body;

    if (!name || !achievement) {
      return NextResponse.json({ success: false, error: "Nama dan pencapaian wajib diisi" }, { status: 400 });
    }

    const clients = getClients();
    const newClient = {
      id: "client-" + Date.now(),
      name,
      category: category || "Bengkel Mobil Modern",
      locations: locations || "Indonesia",
      stallCount: stallCount || "4 Stall Pitstop",
      achievement,
      logoBadge: logoBadge || name.split(" ")[0].toUpperCase(),
      verified: true,
    };

    clients.unshift(newClient);
    saveClients(clients);

    return NextResponse.json({ success: true, data: newClient });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");
    if (!id) return NextResponse.json({ success: false, error: "ID wajib disertakan" }, { status: 400 });

    let clients = getClients();
    clients = clients.filter((c: any) => c.id !== id);
    saveClients(clients);

    return NextResponse.json({ success: true });
  } catch (err: any) {
    return NextResponse.json({ success: false, error: err.message }, { status: 500 });
  }
}
