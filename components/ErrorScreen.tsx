export default function ErrorScreen() {
  return (
    <div className="text-center space-y-4">
      <div className="flex justify-center mb-6">
        <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={32}
            height={32}
            viewBox="0 0 24 24"
            fill="none"
            stroke="#EF4444"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
        </div>
      </div>
      <h1 className="text-xl font-semibold text-gray-800">Invalid Link</h1>
      <p className="text-gray-500 text-sm leading-relaxed">
        This link appears to be invalid. Please contact{" "}
        <span className="font-medium text-gray-700">
          {process.env.NEXT_PUBLIC_COMPANY_NAME || "Hive Roofing and Solar"}
        </span>{" "}
        for assistance.
      </p>
    </div>
  );
}
