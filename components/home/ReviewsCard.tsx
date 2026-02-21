import Image, { StaticImageData } from "next/image";
import StarIcon from "../ui/StarIcon";

interface ReviewsCardProps {
  title?: string;
  review?: string;
  rating?: number;
  reviewer?: string;
  avatar?: string | StaticImageData;
  productImage?: string | StaticImageData;
}

export default function ReviewsCard({
  title = "Good Quality",
  review = "I highly recommend shopping from kicks",
  rating = 5,
  reviewer = "John Doe",
  avatar,
  productImage,
}: ReviewsCardProps) {
  return (
    <div className="rounded-2xl lg:rounded-4xl overflow-hidden flex flex-col">
      {/* Top Info Section */}
      <div className="bg-white p-4 lg:p-8 flex flex-col gap-2">
        {/* Header Row: Title + Avatar */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-col gap-2">
            <h3 className="font-rubik text-dark-gray text-[20px] lg:text-[24px] font-semibold">
              {title}
            </h3>
            <p className="text-dark-gray/80 text-[14px] lg:text-[16px] font-normal font-open-sans">
              {review}
            </p>
          </div>

          {/* Reviewer Avatar */}
          <div className="shrink-0 w-12 h-12 lg:w-16 lg:h-16 rounded-full overflow-hidden">
            {avatar ? (
              <Image
                src={avatar}
                alt={reviewer}
                width={64}
                height={64}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-primary/20 to-primary/40">
                <span className="text-primary font-bold text-lg">
                  {reviewer.charAt(0).toUpperCase()}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Star Rating Row */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} filled={i < rating} />
            ))}
          </div>
          <span className="text-dark-gray font-semibold text-[14px] lg:text-[16px] ml-1">
            {rating.toFixed(1)}
          </span>
        </div>
      </div>

      {/* Product Image Section */}
      <div className="relative bg-[#F5F5F5] overflow-hidden">
        {productImage ? (
          <Image
            src={productImage}
            alt="Product"
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200">
            <svg
              width="64"
              height="64"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ccc"
              strokeWidth="1"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <polyline points="21 15 16 10 5 21" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
}
