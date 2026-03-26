import type { WebhookPayload } from "./types";

export async function sendWebhookEvent(payload: WebhookPayload): Promise<boolean> {
  try {
    const response = await fetch("/api/webhook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    if (!response.ok) {
      console.error(`[webhook] Request failed with status ${response.status}`);
      return false;
    }

    return true;
  } catch (error) {
    console.error("[webhook] Failed to send event:", error);
    return false;
  }
}
