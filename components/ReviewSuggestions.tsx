"use client";

import { useState } from "react";
import type { ReviewStep } from "@/lib/types";
import { getSuggestions, getSuggestionsLabel, getCopyLabel } from "@/lib/review-suggestions";

const INITIAL_VISIBLE = 3;

export default function ReviewSuggestions({ step }: { step: ReviewStep }) {
  const [showAll, setShowAll] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const suggestions = getSuggestions(step);
  const visible = showAll ? suggestions : suggestions.slice(0, INITIAL_VISIBLE);
  const remaining = suggestions.length - INITIAL_VISIBLE;
  const label = getSuggestionsLabel(step);
  const copyLabel = getCopyLabel(step);

  async function handleCopy(id: string, text: string) {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch {
      // clipboard API unavailable — silently fail
    }
  }

  return (
    <div className="mt-6 text-left">
      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">
        {label}
      </p>

      <div className="space-y-3">
        {visible.map((s) => (
          <div
            key={s.id}
            className="relative bg-gray-50 border border-gray-200 rounded-xl px-4 pt-4 pb-3"
          >
            {s.type === "one-liner" && (
              <span className="absolute top-3 right-3 text-[10px] font-medium text-blue-500 bg-blue-50 rounded px-1.5 py-0.5">
                quick
              </span>
            )}
            {s.type === "detailed" && (
              <span className="absolute top-3 right-3 text-[10px] font-medium text-gray-400 bg-gray-100 rounded px-1.5 py-0.5">
                detailed
              </span>
            )}
            <p className="text-sm text-gray-700 leading-relaxed pr-14">{s.text}</p>
            <button
              type="button"
              onClick={() => handleCopy(s.id, s.text)}
              className="mt-2 inline-flex items-center gap-1.5 text-xs font-medium text-blue-600 hover:text-blue-800 transition-colors"
              aria-label={`${copyLabel}: ${s.text.slice(0, 40)}…`}
            >
              {copiedId === s.id ? (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={13}
                    height={13}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#16a34a"
                    strokeWidth={2.5}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  <span className="text-green-600">Copied!</span>
                </>
              ) : (
                <>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={13}
                    height={13}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
                  </svg>
                  <span>{copyLabel}</span>
                </>
              )}
            </button>
          </div>
        ))}
      </div>

      {!showAll && remaining > 0 && (
        <button
          type="button"
          onClick={() => setShowAll(true)}
          className="mt-3 w-full text-sm text-blue-600 hover:text-blue-800 font-medium py-2 rounded-lg hover:bg-blue-50 transition-colors"
        >
          Show {remaining} more suggestion{remaining !== 1 ? "s" : ""}
        </button>
      )}
      {showAll && (
        <button
          type="button"
          onClick={() => setShowAll(false)}
          className="mt-3 w-full text-sm text-gray-500 hover:text-gray-700 font-medium py-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          Show fewer
        </button>
      )}
    </div>
  );
}
