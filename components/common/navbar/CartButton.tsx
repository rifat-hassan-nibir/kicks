"use client";

import { useCart } from "@/context/CartContext";
import Link from "next/link";

export default function CartButton() {
  const { totalItems } = useCart();

  return (
    <Link
      href="/cart"
      className="hover:cursor-pointer flex items-center justify-center lg:w-7 lg:h-7 w-5 h-5 font-open-sans font-semibold lg:text-[16px] text-[14px] leading-[100%] bg-secondary rounded-full"
    >
      {totalItems}
    </Link>
  );
}
