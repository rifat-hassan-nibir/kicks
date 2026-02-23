import Image from "next/image";
import ViewProductButton from "../ui/ViewProductButton";

export default function ProductCard({ productInfo }: { productInfo: any }) {
  // Handle both API data (images array) and local constants (singular image)
  const productImage = productInfo?.images?.[0] || productInfo?.image;

  if (!productInfo) return null;

  return (
    <div className="flex flex-col gap-4">
      <div className="relative bg-[#FAFAFA] p-2 rounded-2xl lg:rounded-[28px]">
        {productImage ? (
          <Image
            src={productImage}
            width={318}
            height={350}
            alt={productInfo?.title || "Product"}
            unoptimized
            className="w-full rounded-xl lg:rounded-3xl object-cover aspect-square"
          />
        ) : (
          <div className="w-full h-full min-h-37.5 lg:min-h-87.5 bg-gray-200 rounded-xl lg:rounded-3xl flex items-center justify-center">
            <span className="text-gray-400">No Image</span>
          </div>
        )}
        <span className="absolute top-2 left-2 flex items-center justify-center w-10.5 h-5.5 lg:w-14.5 lg:h-9.5 px-2 py-1 lg:px-4 lg:py-3 bg-primary rounded-tl-xl rounded-br-[13px] lg:rounded-tl-3xl lg:rounded-br-3xl text-white text-[12px] font-semibold leading-0">
          New
        </span>
      </div>
      <div className="flex flex-col gap-2 lg:gap-4">
        <h3 className="font-rubik text-dark-gray text-[16px] lg:text-[24px] font-semibold leading-[100%] uppercase line-clamp-2">
          {productInfo?.title}
        </h3>
        <ViewProductButton productInfo={productInfo} />
      </div>
    </div>
  );
}
