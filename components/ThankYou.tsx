interface ThankYouProps {
  variant: "positive" | "negative";
}

export default function ThankYou({ variant }: ThankYouProps) {
  if (variant === "negative") {
    return (
      <div className="text-center space-y-4">
        <div className="flex justify-center mb-2">
          <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={32}
              height={32}
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3B82F6"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </div>
        </div>
        <h1 className="text-2xl font-bold text-gray-900">Thank you for your feedback</h1>
        <p className="text-gray-600 text-sm leading-relaxed">
          Our team will review your comments and reach out to you shortly. Your satisfaction is our
          top priority.
        </p>
      </div>
    );
  }

  return (
    <div className="text-center space-y-4">
      <div className="flex justify-center mb-2">
        <div className="w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width={36}
            height={36}
            fill="#F59E0B"
            stroke="#F59E0B"
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
        </div>
      </div>
      <h1 className="text-2xl font-bold text-gray-900">You&apos;re amazing! Thank you!</h1>
      <p className="text-gray-600 text-sm leading-relaxed">
        Your review helps other homeowners find a roofing company they can trust. We truly
        appreciate your support.
      </p>
    </div>
  );
}
