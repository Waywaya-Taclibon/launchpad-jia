import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { orgID } = await req.json();
  console.log("🧩 Mock /api/feth-org-details called for orgID:", orgID);

  // Temporary mock data to stop 404 errors
  return NextResponse.json({
    plan: { jobLimit: 3 },
    extraJobSlots: 0,
  });
}
