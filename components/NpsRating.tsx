"use client";

interface NpsRatingProps {
  value: number;
  onChange: (score: number) => void;
}

const SCORES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getColor(score: number, selected: boolean): { bg: string; border: string; text: string } {
  if (!selected) {
    return { bg: "bg-white", border: "border-gray-300", text: "text-gray-700" };
  }
  if (score <= 6) return { bg: "bg-red-500", border: "border-red-500", text: "text-white" };
  if (score <= 8) return { bg: "bg-amber-400", border: "border-amber-400", text: "text-white" };
  return { bg: "bg-green-500", border: "border-green-500", text: "text-white" };
}

function getHoverColor(score: number): string {
  if (score <= 6) return "hover:bg-red-50 hover:border-red-400";
  if (score <= 8) return "hover:bg-amber-50 hover:border-amber-400";
  return "hover:bg-green-50 hover:border-green-400";
}

export default function NpsRating({ value, onChange }: NpsRatingProps) {
  return (
    <div className="space-y-3">
      <div className="flex gap-1.5 justify-center flex-wrap">
        {SCORES.map((score) => {
          const selected = score === value;
          const { bg, border, text } = getColor(score, selected);
          const hoverClass = selected ? "" : getHoverColor(score);
          return (
            <button
              key={score}
              type="button"
              aria-label={`Score ${score} out of 10`}
              aria-pressed={selected}
              onClick={() => onChange(score)}
              className={`
                w-10 h-10 rounded-lg border-2 font-semibold text-sm
                transition-all duration-100
                focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
                cursor-pointer active:scale-95
                ${bg} ${border} ${text} ${hoverClass}
              `}
            >
              {score}
            </button>
          );
        })}
      </div>
      <div className="flex justify-between text-xs text-gray-400 px-1">
        <span>Not likely at all</span>
        <span>Extremely likely</span>
      </div>
    </div>
  );
}
