import { cn } from "@/lib/utils";
import arrowLeftBlack from "@/public/assets/icons/arrow-left-black.svg";
import arrowLeftWhite from "@/public/assets/icons/arrow-left-white.svg";
import arrowRightBlack from "@/public/assets/icons/arrow-right-black.svg";
import arrowRightWhite from "@/public/assets/icons/arrow-right-white.svg";
import Image from "next/image";

export default function SliderButton({
  direction,
  className,
  type,
}: {
  direction: "left" | "right";
  className?: string;
  type?: "gray" | "dark-gray";
}) {
  return (
    <button
      className={cn(
        `w-8 lg:w-10 h-8 lg:h-10 rounded-lg hover:bg-white transition-colors border-none ${type === "gray" ? "bg-gray" : type === "dark-gray" ? "bg-dark-gray" : "bg-gray"} flex items-center justify-center duration-300 group hover:cursor-pointer active:scale-90`,
        className,
      )}
    >
      {direction === "left" ? (
        <Image
          src={type === "gray" ? arrowLeftBlack : arrowLeftWhite}
          alt="Arrow Left"
          width={16}
          height={16}
          className="group-hover:invert transition-all"
        />
      ) : (
        <Image
          src={type === "gray" ? arrowRightBlack : arrowRightWhite}
          alt="Arrow Right"
          width={16}
          height={16}
          className="group-hover:invert transition-all"
        />
      )}
    </button>
  );
}
