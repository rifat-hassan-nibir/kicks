"use client";

import Button from "../common/Button";
import { useRouter } from "next/navigation";

export default function ViewProductButton({ productInfo }: { productInfo: any }) {
  const router = useRouter();
  return (
    <Button
      onClick={() => router.push(`/product-details/${productInfo?.id}`)}
      variant="secondary"
      className="w-full bg-dark-gray py-3.25 lg:py-[15.5px] text-[12px] lg:text-[14px] mt-auto"
    >
      VIEW PRODUCT - <span className="text-secondary">${productInfo?.price}</span>
    </Button>
  );
}
