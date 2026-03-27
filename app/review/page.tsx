"use client";

import { useEffect, useState, useRef } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import StarRating from "@/components/StarRating";
import PositiveFeedback from "@/components/PositiveFeedback";
import NegativeFeedback from "@/components/NegativeFeedback";
import ThankYou from "@/components/ThankYou";
import ErrorScreen from "@/components/ErrorScreen";
import { sendWebhookEvent } from "@/lib/webhook";
import type { AppScreen, ReviewStep } from "@/lib/types";

function parseStep(raw: string | null): ReviewStep {
  const n = parseInt(raw ?? "1", 10);
  if (n === 2 || n === 3 || n === 4 || n === 5) return n;
  return 1;
}

function ReviewFlow() {
  const searchParams = useSearchParams();
  const customerId = searchParams.get("customer_id");
  const jobId = searchParams.get("job_id") ?? "";
  const name = searchParams.get("name");
  const step = parseStep(searchParams.get("step"));

  const [screen, setScreen] = useState<AppScreen | null>(null);
  const [rating, setRating] = useState<number>(0);
  const [pendingRating, setPendingRating] = useState<number>(0);
  const hasSentVisit = useRef(false);

  useEffect(() => {
    if (!customerId) {
      setScreen("error");
      return;
    }

    if (!hasSentVisit.current) {
      hasSentVisit.current = true;
      sendWebhookEvent({
        event_type: "page_visited",
        customer_id: customerId,
        job_id: jobId,
        step,
        timestamp: new Date().toISOString(),
      });
    }

    setScreen("rating");
  }, [customerId, jobId, step]);

  async function handleSubmitRating() {
    if (pendingRating === 0) return;
    const stars = pendingRating;
    setRating(stars);

    await sendWebhookEvent({
      event_type: "rating_submitted",
      customer_id: customerId!,
      job_id: jobId,
      rating: stars,
      step,
      timestamp: new Date().toISOString(),
    });

    if (stars >= 4) {
      setScreen("positive");
    } else {
      setScreen("negative");
    }
  }

  function handleReviewClicked() {
    setScreen("final-thank-you");
  }

  function handleNegativeSubmitted() {
    setScreen("negative-thank-you");
  }

  // Don't render until we know which screen to show (avoids flash)
  if (screen === null) {
    return null;
  }

  return (
    <div className="relative w-full max-w-md mx-auto px-6 py-10">
      {/* Error */}
      <div
        className={`transition-all duration-400 ${
          screen === "error"
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none absolute inset-0"
        }`}
        aria-hidden={screen !== "error"}
      >
        <ErrorScreen />
      </div>

      {/* Star Rating */}
      <div
        className={`transition-all duration-400 ${
          screen === "rating"
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none absolute inset-0"
        }`}
        aria-hidden={screen !== "rating"}
      >
        <div className="text-center space-y-8">
          <div className="space-y-2">
            <h1 className="text-xl font-semibold text-gray-900 leading-snug">
              {name
                ? `Hi ${name}, how was your experience with ${
                    process.env.NEXT_PUBLIC_COMPANY_NAME || "Hive Roofing and Solar"
                  }?`
                : `How was your experience with ${
                    process.env.NEXT_PUBLIC_COMPANY_NAME || "Hive Roofing and Solar"
                  }?`}
            </h1>
            <p className="text-sm text-gray-500">Tap a star to rate us</p>
          </div>
          <StarRating value={pendingRating} onChange={setPendingRating} />
          <div
            className={`transition-all duration-300 ${
              pendingRating > 0
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-2 pointer-events-none"
            }`}
          >
            <button
              type="button"
              onClick={handleSubmitRating}
              className="
                w-full bg-blue-600 hover:bg-blue-700 active:bg-blue-800
                text-white font-semibold text-base
                rounded-xl px-6 py-4
                transition-colors duration-150
                focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
              "
            >
              Submit Rating
            </button>
          </div>
        </div>
      </div>

      {/* Positive Feedback */}
      <div
        className={`transition-all duration-400 ${
          screen === "positive"
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none absolute inset-0"
        }`}
        aria-hidden={screen !== "positive"}
      >
        {customerId && (
          <PositiveFeedback
            customerId={customerId}
            jobId={jobId}
            rating={rating}
            step={step}
            onReviewClicked={handleReviewClicked}
          />
        )}
      </div>

      {/* Negative Feedback */}
      <div
        className={`transition-all duration-400 ${
          screen === "negative"
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none absolute inset-0"
        }`}
        aria-hidden={screen !== "negative"}
      >
        {customerId && (
          <NegativeFeedback
            customerId={customerId}
            jobId={jobId}
            rating={rating}
            step={step}
            onSubmitted={handleNegativeSubmitted}
          />
        )}
      </div>

      {/* Final Thank You (after review link clicked) */}
      <div
        className={`transition-all duration-400 ${
          screen === "final-thank-you"
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none absolute inset-0"
        }`}
        aria-hidden={screen !== "final-thank-you"}
      >
        <ThankYou variant="positive" />
      </div>

      {/* Negative Thank You */}
      <div
        className={`transition-all duration-400 ${
          screen === "negative-thank-you"
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none absolute inset-0"
        }`}
        aria-hidden={screen !== "negative-thank-you"}
      >
        <ThankYou variant="negative" />
      </div>
    </div>
  );
}

export default function ReviewPage() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center">
      <Suspense fallback={null}>
        <ReviewFlow />
      </Suspense>
    </main>
  );
}
