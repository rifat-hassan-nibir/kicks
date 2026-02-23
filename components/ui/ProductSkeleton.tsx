import Skeleton from "./Skeleton";

export default function ProductSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      {/* Image Skeleton */}
      <div className="relative bg-[#FAFAFA] p-2 rounded-2xl lg:rounded-[28px]">
        <Skeleton className="w-full aspect-square rounded-xl lg:rounded-3xl" />
        {/* Badge Skeleton */}
        <Skeleton className="absolute top-2 left-2 w-10.5 h-5.5 lg:w-14.5 lg:h-9.5 rounded-tl-xl rounded-br-[13px] lg:rounded-tl-3xl lg:rounded-br-3xl" />
      </div>

      {/* Title & Button Skeleton */}
      <div className="flex flex-col gap-2 lg:gap-4">
        <Skeleton className="h-[16px] lg:h-[24px] w-3/4 rounded" />
        <Skeleton className="h-10 lg:h-12 w-full rounded-xl lg:rounded-2xl" />
      </div>
    </div>
  );
}
