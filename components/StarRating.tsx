"use client";

import { useState } from "react";

interface StarRatingProps {
  value: number;
  onChange: (rating: number) => void;
}

export default function StarRating({ value, onChange }: StarRatingProps) {
  const [hovered, setHovered] = useState<number>(0);

  const displayRating = hovered > 0 ? hovered : value;

  return (
    <div
      className="flex gap-2 justify-center"
      role="group"
      aria-label="Star rating"
      onMouseLeave={() => setHovered(0)}
    >
      {[1, 2, 3, 4, 5].map((star) => {
        const filled = star <= displayRating;
        return (
          <button
            key={star}
            type="button"
            aria-label={`Rate ${star} out of 5 stars`}
            onClick={() => onChange(star)}
            onMouseEnter={() => setHovered(star)}
            className="
              focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2
              rounded transition-transform duration-100
              cursor-pointer hover:scale-110 active:scale-95
            "
            style={{ minWidth: 48, minHeight: 48, padding: 4 }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={44}
              height={44}
              aria-hidden="true"
              style={{ transition: "fill 0.15s, stroke 0.15s" }}
              fill={filled ? "#F59E0B" : "none"}
              stroke={filled ? "#F59E0B" : "#D1D5DB"}
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          </button>
        );
      })}
    </div>
  );
}
