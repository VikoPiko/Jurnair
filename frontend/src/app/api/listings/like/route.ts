// src/app/api/listings/like/route.ts

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const listingId = body?.listingId;

  if (!listingId) {
    return NextResponse.json({ message: "Missing listingId" }, { status: 400 });
  }

  try {
    const backendRes = await fetch(
      "http://localhost:3001/listings/toggle-like",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ listingId }),
      }
    );

    if (!backendRes.ok) {
      const errorData = await backendRes.json();
      return NextResponse.json(
        { message: errorData.message || "Backend error" },
        { status: backendRes.status }
      );
    }

    const updatedListing = await backendRes.json();
    return NextResponse.json(updatedListing);
  } catch (error) {
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
