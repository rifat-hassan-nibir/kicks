import { cn } from "@/lib/utils";
import arrowLeft from "@/public/assets/icons/arrow-left.png";
import arrowRight from "@/public/assets/icons/arrow-right.png";
import Image from "next/image";

export default function SliderButton({
  direction,
  className,
}: {
  direction: "left" | "right";
  className?: string;
}) {
  return (
    <button
      className={cn(
        "w-8 lg:w-10 h-8 lg:h-10 rounded-lg hover:bg-white transition-colors border-none bg-gray flex items-center justify-center duration-300 group hover:cursor-pointer active:scale-90",
        className,
      )}
    >
      {direction === "left" ? (
        <Image
          src={arrowLeft}
          alt="Arrow Left"
          width={4.5}
          height={9}
          className="group-hover:invert transition-all"
        />
      ) : (
        <Image
          src={arrowRight}
          alt="Arrow Right"
          width={4.5}
          height={9}
          className="group-hover:invert transition-all"
        />
      )}
    </button>
  );
}
