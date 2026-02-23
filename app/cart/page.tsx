"use client";

import Button from "@/components/common/Button";
import ProductSlider from "@/components/common/ProductSlider";
import { useCart } from "@/context/CartContext";
import { getProducts } from "@/data/products";
import binIcon from "@/public/assets/icons/Bin.svg";
import heartIcon from "@/public/assets/icons/heart.svg";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import CartLoadingSkeleton from "@/components/cart/CartLoadingSkeleton";

export default function CartPage() {
  const { items, totalPrice, removeItem, updateQuantity } = useCart();
  const [similarProducts, setSimilarProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const deliveryFee = 6.99;
  const salesTax = 0;
  const finalTotal = totalPrice + deliveryFee + salesTax;

  useEffect(() => {
    const fetchSimilarProducts = async () => {
      try {
        const product = await getProducts();
        const similarProducts = product.slice(0, 4);
        setSimilarProducts(similarProducts);
      } catch (error) {
        console.error("Error fetching similar products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchSimilarProducts();
  }, []);

  if (loading) {
    return <CartLoadingSkeleton />;
  }

  return (
    <section className="body-width mt-6 lg:mt-9 px-4 lg:px-0">
      {/* Title */}
      <div className="space-y-2 max-w-195.5">
        <h4 className="text-left text-[24px] lg:text-[32px] text-dark-gray font-semibold leading-tight">
          Saving to celebrate
        </h4>
        <p className="font-open-sans text-left text-[12px] lg:text-[14px] font-semibold text-dark-gray/80">
          Enjoy up to 60% off thousands of styles during the End of Year sale - while suppiles last.
          No code needed.
        </p>
        <p className="font-open-sans text-left text-[14px] lg:text-[16px] font-semibold text-dark-gray/80 leading-tight">
          <Link href="#" className="underline">
            Join Use
          </Link>{" "}
          or{" "}
          <Link href="#" className="underline">
            Sign-in
          </Link>
        </p>
      </div>

      <div className="mt-6 lg:mt-9 flex flex-col lg:flex-row gap-6 lg:gap-11.75 items-start">
        {/* Your Bag */}
        <div className="flex-1 rounded-2xl bg-[#FAFAFA] p-4 lg:p-6 space-y-2 w-full">
          <p className="text-[20px] lg:text-[32px] font-semibold text-dark-gray leading-tight">
            Your Bag
          </p>
          <p className="font-open-sans font-normal text-[14px] lg:text-[16px] text-dark-gray leading-tight">
            Items in your bag not reserved- check out now to make them yours.
          </p>

          <div className="mt-2 lg:mt-12 space-y-8 lg:space-y-12">
            {items.length === 0 ? (
              <p className="font-open-sans text-[18px] text-dark-gray/60 py-10">
                Your cart is empty.
              </p>
            ) : (
              items.map((item) => (
                <div
                  key={`${item.id}-${item.selectedSize}-${item.selectedColor.hex}`}
                  className="flex gap-4 lg:gap-6 border-b border-gray/50 pb-8 last:border-0"
                >
                  {/* Product Image */}
                  <div className="relative w-39.25 h-auto lg:w-52 lg:h-52 rounded-2xl lg:rounded-[28px] overflow-hidden bg-gray shrink-0">
                    <Image
                      src={item.images[0]}
                      alt={item.title}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex flex-col w-full">
                    {/* Top line desktop vs mobile */}
                    <div className="flex justify-between items-start">
                      <h3 className="font-rubik text-dark-gray text-[16px] lg:text-[24px] font-semibold uppercase leading-tight max-w-50 lg:max-w-none">
                        {item.title}
                      </h3>
                      <p className="hidden lg:block font-rubik text-primary lg:text-[24px] font-semibold leading-tight">
                        ${item.price.toFixed(2)}
                      </p>
                    </div>

                    <p className="font-open-sans font-semibold text-dark-gray/80 text-[14px] lg:text-[20px] mt-1 lg:mt-2">
                      {item.selectedColor.name}
                    </p>

                    <div className="flex items-center gap-4 lg:gap-10 mt-2 lg:mt-5">
                      <div className="flex items-center gap-2 lg:gap-6">
                        <span className="font-open-sans text-dark-gray/80 text-[16px] lg:text-[20px] font-semibold leading-tight">
                          Size {item.selectedSize}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 lg:gap-4 border border-dark-gray/20 rounded-md px-2 py-1">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.selectedSize,
                              item.selectedColor.hex,
                              Math.max(1, item.quantity - 1),
                            )
                          }
                          className="px-2 font-bold cursor-pointer"
                        >
                          -
                        </button>
                        <span className="font-open-sans text-dark-gray/80 text-[16px] lg:text-[20px] font-semibold leading-tight">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              item.selectedSize,
                              item.selectedColor.hex,
                              item.quantity + 1,
                            )
                          }
                          className="px-2 font-bold cursor-pointer"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    <p className="block lg:hidden font-rubik text-primary text-[20px] font-semibold leading-tight mt-4">
                      ${item.price.toFixed(2)}
                    </p>

                    <div className="flex items-center gap-2 lg:gap-6 mt-2 lg:mt-12">
                      <button className="cursor-pointer hover:opacity-70 transition-opacity">
                        <Image src={heartIcon} alt="Heart" className="w-6 h-6 lg:w-8 lg:h-8" />
                      </button>
                      <button
                        onClick={() =>
                          removeItem(item.id, item.selectedSize, item.selectedColor.hex)
                        }
                        className="cursor-pointer hover:opacity-70 transition-opacity"
                      >
                        <Image src={binIcon} alt="Bin" className="w-6 h-6 lg:w-8 lg:h-8" />
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Order Summery */}
        <div className="bg-[#fafafa] lg:bg-transparent rounded-2xl p-4 lg:p-0 w-full lg:max-w-104.5 space-y-4 lg:space-y-6">
          <p className="text-[20px] lg:text-[32px] font-semibold text-dark-gray leading-tight">
            Order Summery
          </p>

          <div className="space-y-4 font-open-sans">
            {/* Item Count */}
            <div className="flex justify-between">
              <p className="text-[16px] lg:text-[20px] font-semibold text-dark-gray leading-tight">
                {items.length} ITEM{items.length !== 1 ? "S" : ""}
              </p>
              <p className="text-[16px] lg:text-[20px] font-semibold text-dark-gray opacity-80 leading-tight">
                ${totalPrice.toFixed(2)}
              </p>
            </div>

            {/* Delivery */}
            <div className="flex justify-between">
              <p className="text-[16px] lg:text-[20px] font-semibold text-dark-gray leading-tight">
                Delivery
              </p>
              <p className="text-[16px] lg:text-[20px] font-semibold text-dark-gray opacity-80 leading-tight">
                ${deliveryFee.toFixed(2)}
              </p>
            </div>

            {/* Sales Tax */}
            <div className="flex justify-between">
              <p className="text-[16px] lg:text-[20px] font-semibold text-dark-gray leading-tight">
                Sales Tax
              </p>
              <p className="text-[16px] lg:text-[20px] font-semibold text-dark-gray opacity-80 leading-tight">
                ${salesTax.toFixed(2)}
              </p>
            </div>

            {/* Total */}
            <div className="flex justify-between border-t border-gray pt-4">
              <p className="text-[20px] lg:text-[24px] font-bold text-dark-gray leading-tight font-rubik">
                Total
              </p>
              <p className="text-[16px] lg:text-[20px] font-bold text-dark-gray leading-tight font-rubik">
                ${finalTotal.toFixed(2)}
              </p>
            </div>
          </div>

          {/* Checkout Button */}
          <Button
            className="w-full py-[15.5px] text-[14px] leading-tight"
            disabled={items.length === 0}
          >
            CHECKOUT
          </Button>

          {/* Promo Code */}
          <button className="text-[16px] lg:text-[20px] underline font-semibold text-dark-gray hover:cursor-pointer">
            User a promo code
          </button>
        </div>
      </div>

      {/* You may also like Section */}
      <div className="mt-8 lg:mt-20 mb-8 lg:mb-16">
        <ProductSlider title="You may also like" products={similarProducts} />
      </div>
    </section>
  );
}
