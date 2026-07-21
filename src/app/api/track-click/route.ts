import { NextResponse } from "next/server";
import getMongoClient from "@/lib/mongodb";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const limit = Math.min(Number(searchParams.get("limit") || 5), 10);

    const client = await getMongoClient();
    const db = client.db();
    const collection = db.collection("portfolio_events");

    const events = await collection
      .find({})
      .sort({ createdAt: -1 })
      .limit(limit)
      .project({ _id: 0, label: 1, page: 1, createdAt: 1 })
      .toArray();

    return NextResponse.json({ success: true, events });
  } catch (error) {
    console.error("Fetch events failed:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch events" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    let body = {} as Record<string, unknown>;

    try {
      body = await request.json();
    } catch {
      body = {};
    }

    const now = new Date();
    const dayKey = now.toISOString().slice(0, 10);
    const forwardedFor = request.headers.get("x-forwarded-for") || "";
    const ip = forwardedFor.split(",")[0]?.trim() || request.headers.get("x-real-ip") || "unknown";
    const deviceKey = String(
      body?.deviceKey || `${String(body?.userAgent || "")}::${ip}::${String(body?.referrer || "")}`
    );

    const event = {
      type: body?.type || "visit",
      label: body?.label || "footer-action",
      page: body?.page || "unknown",
      userAgent: body?.userAgent || "",
      referrer: body?.referrer || "",
      deviceKey,
      dayKey,
      ip,
      createdAt: now,
    };

    const client = await getMongoClient();
    const db = client.db();
    const collection = db.collection("portfolio_events");

    const existing = await collection.findOne({ deviceKey, dayKey });

    if (existing) {
      return NextResponse.json({ success: true, duplicate: true, event: existing });
    }

    await collection.insertOne(event);

    return NextResponse.json({ success: true, duplicate: false, event });
  } catch (error) {
    console.error("Track click failed:", error);
    return NextResponse.json(
      { success: false, message: "Failed to save event" },
      { status: 500 }
    );
  }
}
