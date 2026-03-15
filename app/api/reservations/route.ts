import { NextRequest, NextResponse } from "next/server";
import { reservationRequestSchema } from "@/lib/validators";

export async function POST(request: NextRequest) {
  try {
    const body: unknown = await request.json();
    const parsed = reservationRequestSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid reservation payload.",
          details: parsed.error.flatten(),
        },
        { status: 400 }
      );
    }

    const data = parsed.data;

    console.info("Reservation request received", {
      fullName: data.fullName,
      email: data.email,
      phone: data.phone,
      date: data.date,
      time: data.time,
      partySize: data.partySize,
      occasion: data.occasion ?? null,
      hasNotes: Boolean(data.notes?.trim()),
      receivedAt: new Date().toISOString(),
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Reservation request received. We will confirm by email or phone.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Failed to process reservation request:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error.",
      },
      { status: 500 }
    );
  }
}
