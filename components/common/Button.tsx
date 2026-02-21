import { cn } from "@/lib/utils";

export default function Button({
  children,
  className,
  variant,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "hover:bg-dark-gray hover:cursor-pointer text-white text-[14px] leading-[100%] tracking-[0.25px] font-medium w-fit p-4 lg:px-8 py-[11.5px] lg:py-[15.5px] rounded-lg transition-all transform active:scale-95",
        variant === "primary" ? "bg-primary" : "bg-dark-gray",
        className,
      )}
    >
      {children}
    </button>
  );
}
