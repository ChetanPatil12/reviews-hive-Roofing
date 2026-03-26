import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const webhookUrl = process.env.WEBHOOK_URL;

  if (!webhookUrl) {
    return NextResponse.json({ error: "Webhook URL not configured" }, { status: 500 });
  }

  try {
    const payload = await req.json();

    const response = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error(`[webhook] n8n responded with status ${response.status}`);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[webhook] Failed to forward event:", error);
    return NextResponse.json({ ok: true });
  }
}
