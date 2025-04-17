// app/api/shift/route.ts (if you're using App Router)
import { NextResponse } from "next/server";
import { db } from "@/lib/db";
import { shiftTable } from "@/db/schema";

export async function POST(req: Request) {
  const body = await req.json();
  const { shift } = body;

  if (!shift) {
    return NextResponse.json({ error: "Shift is required" }, { status: 400 });
  }

  try {
    console.log("shift", shift);
    const inserted = await db.insert(shiftTable).values({ shift }).returning();
    return NextResponse.json({ success: true, data: inserted });
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to insert shift" },
      { status: 500 }
    );
  }
}
