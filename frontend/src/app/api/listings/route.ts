import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const res = await fetch("http://localhost:3001/listings");

    if (!res.ok) {
      return new Response("Failed to fetch listings", { status: res.status });
    }

    const data = await res.json();

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("API ROUTE ERROR: ", error);
    return new Response("Internal server Error", { status: 500 });
  }
}
