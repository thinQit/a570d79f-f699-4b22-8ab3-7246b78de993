import { NextRequest, NextResponse } from "next/server";
import { reservationSchema } from "@/lib/validators";

type ReservationApiResponse = {
  ok: boolean;
  message: string;
};

async function notifyByEmail(payload: {
  fullName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  partySize: string;
  occasion?: string;
  message?: string;
}): Promise<void> {
  const webhookUrl = process.env.RESERVATION_WEBHOOK_URL;

  if (!webhookUrl) {
    // Intentionally no-op if no notification transport is configured yet.
    return;
  }

  await fetch(webhookUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...(process.env.RESERVATION_WEBHOOK_TOKEN
        ? { Authorization: `Bearer ${process.env.RESERVATION_WEBHOOK_TOKEN}` }
        : {}),
    },
    body: JSON.stringify({
      type: "reservation_request",
      submittedAt: new Date().toISOString(),
      data: payload,
    }),
    cache: "no-store",
  });
}

export async function POST(
  request: NextRequest
): Promise<NextResponse<ReservationApiResponse>> {
  try {
    const body = await request.json();
    const parsed = reservationSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          ok: false,
          message: parsed.error.issues[0]?.message ?? "Invalid request payload",
        },
        { status: 400 }
      );
    }

    if (parsed.data.partySize.toLowerCase().includes("9+")) {
      return NextResponse.json(
        {
          ok: false,
          message: "For parties of 9+, please call us directly at (212) 555-0198.",
        },
        { status: 400 }
      );
    }

    await notifyByEmail(parsed.data);

    return NextResponse.json(
      {
        ok: true,
        message: "Thanks—your request is in. We’ll confirm by email shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("POST /api/reservations error:", error);
    return NextResponse.json(
      {
        ok: false,
        message: "Something went wrong. Please call us at (212) 555-0198.",
      },
      { status: 500 }
    );
  }
}
