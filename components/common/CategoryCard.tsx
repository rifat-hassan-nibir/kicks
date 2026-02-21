import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

export default function CategoryCard({
  categoryImage,
  title,
  id,
  className,
}: {
  categoryImage: string | StaticImageData;
  title: string;
  id: number;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative group overflow-hidden flex flex-col justify-between h-100 lg:h-150",
        className,
      )}
    >
      {/* Background Image Container */}
      <div className="flex-1 flex items-center justify-center p-8 lg:p-12 overflow-hidden">
        <Image
          src={categoryImage}
          alt={title || "Category Image"}
          className="object-contain w-full h-full transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Card Info Overlay */}
      <div className="absolute inset-0 px-6 lg:px-12 py-4 lg:py-7.5 flex flex-col justify-end pointer-events-none">
        <div className="flex items-end justify-between pointer-events-auto">
          <h3 className="text-dark-gray text-2xl lg:text-[36px] font-semibold leading-[100%] uppercase max-w-50">
            {title}
          </h3>

          <button className="w-8 h-8 lg:w-12 lg:h-12 bg-dark-gray rounded-lg flex items-center justify-center transition-all hover:bg-primary active:scale-95">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            >
              <line x1="7" y1="17" x2="17" y2="7"></line>
              <polyline points="7 7 17 7 17 17"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
