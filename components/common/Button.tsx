import { cn } from "@/lib/utils";

export default function Button({
  children,
  className,
  variant,
  onClick,
  disabled,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "text-white text-[14px] leading-[100%] tracking-[0.25px] font-medium w-fit p-4 lg:px-8 py-[11.5px] lg:py-[15.5px] rounded-lg transition-all",
        variant === "primary" ? "bg-primary" : "bg-dark-gray",
        disabled
          ? "opacity-50 cursor-not-allowed"
          : "hover:bg-dark-gray hover:cursor-pointer transform active:scale-95",
        className,
      )}
    >
      {children}
    </button>
  );
}
