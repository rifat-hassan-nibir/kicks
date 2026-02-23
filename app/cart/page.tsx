import Button from "@/components/common/Button";
import ProductSlider from "@/components/common/ProductSlider";
import { newDropsProducts } from "@/constants";
import arrowDownIcon from "@/public/assets/icons/arrow-down.svg";
import binIcon from "@/public/assets/icons/Bin.svg";
import heartIcon from "@/public/assets/icons/heart.svg";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
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

      <div className="mt-6 lg:mt-9 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-11.75">
        {/* Your Bag */}
        <div className="flex-1 rounded-2xl bg-[#FAFAFA] p-4 lg:p-6 space-y-2">
          <p className="text-[20px] lg:text-[32px] font-semibold text-dark-gray leading-tight">
            Your Bag
          </p>
          <p className="font-open-sans font-normal text-[14px] lg:text-[16px] text-dark-gray leading-tight">
            Items in your bag not reserved- check out now to make them yours.
          </p>

          <div className="mt-2 lg:mt-12">
            {/* Cart Item */}
            <div className="flex gap-4 lg:gap-6">
              {/* Product Image */}
              <div className="relative w-39.25 h-auto lg:w-52 lg:h-52 rounded-2xl lg:rounded-[28px] overflow-hidden bg-gray shrink-0">
                <Image
                  src={newDropsProducts[0].image}
                  alt="Dropset Trainer Shoes"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Product Details */}
              <div className="flex flex-col w-full">
                {/* Top line desktop vs mobile */}
                <div className="flex justify-between items-start">
                  <h3 className="font-rubik text-dark-gray text-[16px] lg:text-[24px] font-semibold uppercase leading-tight max-w-50 lg:max-w-none">
                    Dropset Trainer Shoes
                  </h3>
                  <p className="hidden lg:block font-rubik text-primary lg:text-[24px] font-semibold leading-tight">
                    $130.00
                  </p>
                </div>

                <p className="font-open-sans font-semibold text-dark-gray/80 text-[14px] lg:text-[20px] mt-1 lg:mt-2">
                  Men's Road Running Shoes
                </p>
                <p className="font-open-sans font-semibold text-dark-gray/80 text-[14px] lg:text-[20px] mt-1lg:mt-2">
                  Enamel Blue/ University White
                </p>

                <div className="flex items-center gap-4 lg:gap-10 mt-2 lg:mt-5">
                  <div className="flex items-center gap-6 lg:cursor-pointer">
                    <span className="font-open-sans text-dark-gray/80 text-[16px] lg:text-[20px] font-semibold leading-tight">
                      Size 10
                    </span>
                    <Image src={arrowDownIcon} alt="Arrow Down" className="hidden lg:block" />
                  </div>
                  <div className="flex items-center gap-6 lg:cursor-pointer">
                    <span className="font-open-sans text-dark-gray/80 text-[16px] lg:text-[20px] font-semibold leading-tight">
                      Quantity 1
                    </span>
                    <Image src={arrowDownIcon} alt="Arrow Down" className="hidden lg:block" />
                  </div>
                </div>

                <p className="block lg:hidden font-rubik text-primary text-[20px] font-semibold leading-tight mt-4">
                  $130.00
                </p>

                <div className="flex items-center gap-2 lg:gap-6 mt-2 lg:mt-12">
                  <button className="cursor-pointer hover:opacity-70 transition-opacity">
                    <Image src={heartIcon} alt="Heart" className="w-6 h-6 lg:w-8 lg:h-8" />
                  </button>
                  <button className="cursor-pointer hover:opacity-70 transition-opacity">
                    <Image src={binIcon} alt="Bin" className="w-6 h-6 lg:w-8 lg:h-8" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Order Summery */}
        <div className="bg-[#fafafa] lg:bg-transparent rounded-2xl p-4 lg:p-0 w-full lg:max-w-104.5 space-y-4 lg:space-y-6">
          <p className="text-[20px] lg:text-[32px] font-semibold text-dark-gray leading-tight">
            Order Summery
          </p>

          <div className="space-y-4">
            {/* Item Count */}
            <div className="flex justify-between">
              <p className="font-open-sans text-[16px] lg:text-[20px] font-semibold text-dark-gray leading-tight">
                1 ITEM
              </p>
              <p className="font-open-sans text-[16px] lg:text-[20px] font-semibold text-dark-gray opacity-80 leading-tight">
                $130.00
              </p>
            </div>

            {/* Delivery */}
            <div className="flex justify-between">
              <p className="font-open-sans text-[16px] lg:text-[20px] font-semibold text-dark-gray leading-tight">
                Delivery
              </p>
              <p className="font-open-sans text-[16px] lg:text-[20px] font-semibold text-dark-gray opacity-80 leading-tight">
                $130.00
              </p>
            </div>

            {/* Sales Tax */}
            <div className="flex justify-between">
              <p className="font-open-sans text-[16px] lg:text-[20px] font-semibold text-dark-gray leading-tight">
                Sales Tax
              </p>
              <p className="font-open-sans text-[16px] lg:text-[20px] font-semibold text-dark-gray opacity-80 leading-tight">
                $130.00
              </p>
            </div>

            {/* Total */}
            <div className="flex justify-between">
              <p className="text-[20px] lg:text-[24px] font-semibold text-dark-gray leading-tight">
                Total
              </p>
              <p className="text-[16px] lg:text-[20px] font-semibold text-dark-gray opacity-80 leading-tight">
                $130.00
              </p>
            </div>
          </div>

          {/* Checkout Button */}
          <Button className="w-full py-[15.5px] text-[14px] leading-tight">CHECKOUT</Button>

          {/* Promo Code */}
          <button className="text-[16px] lg:text-[20px] underline font-semibold text-dark-gray hover:cursor-pointer">
            User a promo code
          </button>
        </div>
      </div>

      {/* You may also like Section */}
      <div className="mt-8 lg:mt-20 mb-8 lg:mb-16">
        <ProductSlider title="You may also like" products={newDropsProducts} />
      </div>
    </section>
  );
}
