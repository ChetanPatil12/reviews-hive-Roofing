"use client";

import type { ReviewStep, Platform } from "@/lib/types";
import { sendWebhookEvent } from "@/lib/webhook";

interface PositiveFeedbackProps {
  customerId: string;
  jobId: string;
  rating: number;
  step: ReviewStep;
  onReviewClicked: () => void;
}

function getStepConfig(step: ReviewStep): {
  buttonText: string;
  url: string;
  platform: Platform;
  photoNote: boolean;
} {
  switch (step) {
    case 2:
      return {
        buttonText: "Add a Photo to Your Google Review",
        url: process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL || "#",
        platform: "google",
        photoNote: true,
      };
    case 3:
      return {
        buttonText: "Leave a Facebook Review",
        url: process.env.NEXT_PUBLIC_FACEBOOK_REVIEW_URL || "#",
        platform: "facebook",
        photoNote: false,
      };
    case 4:
      return {
        buttonText: "Leave a BBB Review",
        url: process.env.NEXT_PUBLIC_BBB_REVIEW_URL || "#",
        platform: "bbb",
        photoNote: false,
      };
    default:
      return {
        buttonText: "Leave a Google Review",
        url: process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL || "#",
        platform: "google",
        photoNote: false,
      };
  }
}

export default function PositiveFeedback({
  customerId,
  jobId,
  rating,
  step,
  onReviewClicked,
}: PositiveFeedbackProps) {
  const config = getStepConfig(step);

  async function handleReviewClick() {
    await sendWebhookEvent({
      event_type: "review_link_clicked",
      customer_id: customerId,
      job_id: jobId,
      rating,
      step,
      platform: config.platform,
      timestamp: new Date().toISOString(),
    });

    window.open(config.url, "_blank", "noopener,noreferrer");
    onReviewClicked();
  }

  return (
    <div className="text-center space-y-6">
      <div className="flex justify-center">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#22C55E"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
      </div>

      <div className="space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">Thank you!</h1>
        <p className="text-gray-600 text-sm leading-relaxed">
          We&apos;re so glad you had a great experience! Would you mind sharing it on{" "}
          {config.platform === "google"
            ? "Google"
            : config.platform === "facebook"
            ? "Facebook"
            : "BBB"}
          ? It really helps our small business.
        </p>
      </div>

      {config.photoNote && (
        <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
          Adding a photo of your new roof makes your review even more helpful for other homeowners!
        </p>
      )}

      <div className="space-y-2">
        <button
          type="button"
          onClick={handleReviewClick}
          className="
            w-full flex items-center justify-center gap-2
            bg-blue-600 hover:bg-blue-700 active:bg-blue-800
            text-white font-semibold text-base
            rounded-xl px-6 py-4
            transition-colors duration-150
            focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
          "
        >
          <span>{config.buttonText}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
            <polyline points="15 3 21 3 21 9" />
            <line x1="10" y1="14" x2="21" y2="3" />
          </svg>
        </button>
        <p className="text-xs text-gray-400">This will open in a new tab</p>
      </div>
    </div>
  );
}
