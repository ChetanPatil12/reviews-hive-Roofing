"use client";

import { useState } from "react";
import { sendWebhookEvent } from "@/lib/webhook";
import type { ReviewStep } from "@/lib/types";

interface NegativeFeedbackProps {
  customerId: string;
  jobId: string;
  rating: number;
  step: ReviewStep;
  onSubmitted: () => void;
}

export default function NegativeFeedback({
  customerId,
  jobId,
  rating,
  step,
  onSubmitted,
}: NegativeFeedbackProps) {
  const [feedbackText, setFeedbackText] = useState("");
  const [validationError, setValidationError] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  async function handleSubmit() {
    if (!feedbackText.trim()) {
      setValidationError(true);
      return;
    }
    setValidationError(false);
    setIsSubmitting(true);

    await sendWebhookEvent({
      event_type: "negative_feedback_submitted",
      customer_id: customerId,
      job_id: jobId,
      rating,
      feedback_text: feedbackText.trim(),
      step,
      timestamp: new Date().toISOString(),
    });

    setIsSubmitting(false);
    onSubmitted();
  }

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <h1 className="text-2xl font-bold text-gray-900">We&apos;re sorry to hear that.</h1>
        <p className="text-gray-600 text-sm leading-relaxed">
          Your feedback is important to us. Please let us know what went wrong so we can make it
          right.
        </p>
      </div>

      <div className="space-y-2">
        <label
          htmlFor="feedback-textarea"
          className="block text-sm font-medium text-gray-700"
        >
          Your experience{" "}
          <span className="text-red-500" aria-hidden="true">*</span>
          <span className="sr-only">(required)</span>
        </label>
        <textarea
          id="feedback-textarea"
          rows={4}
          required
          aria-required="true"
          value={feedbackText}
          onChange={(e) => {
            setFeedbackText(e.target.value);
            if (validationError && e.target.value.trim()) {
              setValidationError(false);
            }
          }}
          placeholder="Tell us about your experience..."
          className={`
            w-full rounded-xl border px-4 py-3 text-sm text-gray-800
            placeholder-gray-400 resize-y min-h-[96px]
            focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
            transition-colors duration-150
            ${validationError ? "border-red-400 bg-red-50" : "border-gray-300 bg-white"}
          `}
        />
        {validationError && (
          <p className="text-xs text-red-500" role="alert">
            Please share some details so we can help.
          </p>
        )}
      </div>

      <button
        type="button"
        onClick={handleSubmit}
        disabled={isSubmitting}
        className="
          w-full flex items-center justify-center gap-2
          bg-blue-600 hover:bg-blue-700 active:bg-blue-800
          disabled:bg-blue-400 disabled:cursor-not-allowed
          text-white font-semibold text-base
          rounded-xl px-6 py-4
          transition-colors duration-150
          focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
        "
      >
        {isSubmitting ? (
          <>
            <svg
              className="animate-spin"
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            </svg>
            <span>Submitting...</span>
          </>
        ) : (
          <span>Submit Feedback</span>
        )}
      </button>
    </div>
  );
}
