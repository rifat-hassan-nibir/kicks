import { cn } from "@/lib/utils";

export default function SectionTitle({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={cn(
        "font-rubik text-dark-gray md:text-[74px] text-[24px] font-semibold md:leading-[95%] leading-[100%] uppercase",
        className,
      )}
    >
      {children}
    </h2>
  );
}
