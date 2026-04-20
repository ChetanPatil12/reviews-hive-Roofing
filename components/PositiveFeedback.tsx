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
  message: string;
} {
  switch (step) {
    case 2:
      return {
        buttonText: "Leave a Facebook Review",
        url: process.env.NEXT_PUBLIC_FACEBOOK_REVIEW_URL || "#",
        platform: "facebook",
        message: "Please give us a Facebook review.",
      };
    case 3:
      return {
        buttonText: "Give Us a Video Testimonial",
        url: process.env.NEXT_PUBLIC_VIDEO_TESTIMONIAL_URL || "#",
        platform: "video_testimonial",
        message: "Give us a video testimonial review.",
      };
    case 4:
      return {
        buttonText: "Leave a BBB Review",
        url: process.env.NEXT_PUBLIC_BBB_REVIEW_URL || "#",
        platform: "bbb",
        message: "Please give us a BBB review.",
      };
    case 5:
      return {
        buttonText: "Leave a Google Review with Photos",
        url: process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL || "#",
        platform: "google",
        message: "Please give us a Google review with photos of your completed job.",
      };
    case 6:
      return {
        buttonText: "Leave a Yelp Review",
        url: process.env.NEXT_PUBLIC_YELP_REVIEW_URL || "#",
        platform: "yelp",
        message: "Please give us a review on Yelp.",
      };
    default:
      return {
        buttonText: "Leave a Google Review",
        url: process.env.NEXT_PUBLIC_GOOGLE_REVIEW_URL || "#",
        platform: "google",
        message: "Please give us a Google review.",
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
          We&apos;re so glad you had a great experience! {config.message}
        </p>
      </div>

      {(step === 1 || step === 5) && (
        <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-lg px-4 py-3">
          If you have any photos of the completed job, please share them in your review — it really helps other customers see the quality of our work!
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
