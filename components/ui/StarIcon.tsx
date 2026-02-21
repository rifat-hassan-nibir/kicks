export default function StarIcon({ filled, className }: { filled: boolean; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill={filled ? "#FBBF24" : "none"}
      stroke="#FBBF24"
      strokeWidth="1.5"
      className={`w-3.5 h-3.5 lg:w-5 lg:h-5 ${className ?? ""}`}
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
