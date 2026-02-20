export default function Button({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) {
  return (
    <button
      className={`bg-primary hover:bg-dark-gray hover:cursor-pointer text-white text-[14px] leading-[100%] tracking-[0.25px] font-medium w-fit px-8 py-[15.5px] rounded-lg transition-all transform active:scale-95 ${className}`}
    >
      {children}
    </button>
  );
}
