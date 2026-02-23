"use client";

import ProductSlider from "@/components/common/ProductSlider";
import { useCart } from "@/context/CartContext";
import { Product } from "@/types/products";
import Image from "next/image";
import { useState } from "react";

const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

const colors = [
  { name: "Shadow Navy", hex: "#232321" },
  { name: "Army Green", hex: "#2D5C2E" },
];

export default function ProductDetails({
  productInfo,
  similarProducts,
}: {
  productInfo: Product;
  similarProducts: Product[];
}) {
  const { addItem } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState<number | null>(38);
  const [selectedColor, setSelectedColor] = useState(0);

  const images = productInfo?.images?.length > 0 ? productInfo.images : [];

  const handleAddToCart = () => {
    if (!selectedSize) return;
    addItem({
      ...productInfo,
      selectedSize,
      selectedColor: colors[selectedColor],
      quantity: 1,
    });
  };

  return (
    <section className="body-width px-4 lg:px-0 mt-6 lg:mt-8 animate-fade-in-up">
      {/* Product Section */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Image Gallery */}
        <div className="flex-1">
          {/* Mobile: Single main image + thumbnails strip */}
          <div className="lg:hidden">
            <div className="relative bg-white rounded-2xl overflow-hidden aspect-square">
              <Image
                src={images[selectedImage]}
                alt={`Product view ${selectedImage + 1}`}
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            {/* Thumbnail strip */}
            <div className="flex gap-2 mt-6">
              {images.map((img: any, index: number) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`relative bg-white rounded-lg overflow-hidden cursor-pointer transition-all duration-300 w-14 h-14 shrink-0 ${
                    selectedImage === index
                      ? "ring-2 ring-primary"
                      : "hover:ring-1 hover:ring-dark-gray/20"
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${index + 1}`}
                    fill
                    unoptimized
                    className="object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Desktop: 2x2 Grid */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {images.map((img: any, index: number) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`relative bg-white rounded-[28px] overflow-hidden cursor-pointer transition-all duration-300 aspect-square ${
                  selectedImage === index
                    ? "ring-2 ring-primary"
                    : "hover:ring-1 hover:ring-dark-gray/20"
                }`}
              >
                <Image
                  src={img}
                  alt={`Product view ${index + 1}`}
                  fill
                  unoptimized
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Product Info */}
        <div className="lg:w-107.5 flex flex-col gap-4 lg:gap-6">
          {/* Badge + Title */}
          <div className="flex flex-col gap-2 lg:gap-4">
            <span className="w-fit px-4 py-2 lg:py-3 rounded-lg lg:rounded-xl bg-primary  text-white text-[12px] font-semibold leading-[100%]">
              New Release
            </span>
            <h1 className="font-rubik text-dark-gray text-[20px] lg:text-[32px] font-semibold leading-[110%] uppercase">
              {productInfo?.title}
            </h1>

            {/* Price */}
            <p className="font-rubik text-primary text-[20px] lg:text-[32px] font-semibold leading-[100%]">
              ${productInfo?.price}
            </p>
          </div>

          {/* Color Selector */}
          <div className="flex flex-col gap-2">
            <p className="text-dark-gray text-[12px] lg:text-[14px] font-semibold uppercase tracking-wide">
              Color
            </p>
            <div className="flex gap-2">
              {colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(index)}
                  className={`w-7 h-7 lg:w-9 lg:h-9 rounded-full cursor-pointer transition-all duration-200 ${
                    selectedColor === index
                      ? "ring-2 ring-offset-2 ring-dark-gray"
                      : "hover:ring-1 hover:ring-offset-1 hover:ring-dark-gray/40"
                  }`}
                  style={{ backgroundColor: color.hex }}
                  title={color.name}
                />
              ))}
            </div>
          </div>

          {/* Size Selector */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p className="text-dark-gray text-[12px] lg:text-[14px] font-semibold uppercase tracking-wide">
                Size
              </p>
              <button className="text-dark-gray text-[12px] lg:text-[14px] font-semibold underline underline-offset-2 cursor-pointer hover:text-primary transition-colors">
                SIZE CHART
              </button>
            </div>
            <div className="flex flex-wrap gap-1.5 lg:gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`w-11 h-9 lg:w-14 lg:h-11 rounded-md lg:rounded-lg text-[12px] lg:text-[14px] font-semibold cursor-pointer transition-all duration-200 ${
                    selectedSize === size
                      ? "bg-dark-gray text-white"
                      : "bg-white text-dark-gray hover:bg-dark-gray/10"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <button
                onClick={() => handleAddToCart()}
                className="flex-1 bg-dark-gray text-white text-[13px] lg:text-[14px] font-semibold py-3.5 lg:py-4 rounded-lg cursor-pointer hover:bg-dark-gray/90 transition-colors active:scale-[0.98]"
              >
                ADD TO CART
              </button>
              <button className="w-11 h-12 lg:w-12 lg:h-13 bg-dark-gray rounded-lg flex items-center justify-center cursor-pointer hover:bg-dark-gray/90 transition-colors active:scale-[0.98]">
                <svg
                  width="18"
                  height="16"
                  viewBox="0 0 20 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 18L8.55 16.7C6.86667 15.1833 5.475 13.875 4.375 12.775C3.275 11.675 2.4 10.6917 1.75 9.825C1.1 8.95833 0.646 8.17083 0.388 7.4625C0.13 6.75417 0.000666667 6.03333 0 5.3C0 3.78333 0.504333 2.52083 1.513 1.5125C2.52167 0.504167 3.784 0 5.3 0C6.21667 0 7.08333 0.216667 7.9 0.65C8.71667 1.08333 9.41667 1.69167 10 2.475C10.5833 1.69167 11.2833 1.08333 12.1 0.65C12.9167 0.216667 13.7833 0 14.7 0C16.2167 0 17.4792 0.504167 18.4875 1.5125C19.4958 2.52083 20 3.78333 20 5.3C20 6.03333 19.8708 6.75417 19.6125 7.4625C19.3542 8.17083 18.9 8.95833 18.25 9.825C17.6 10.6917 16.725 11.675 15.625 12.775C14.525 13.875 13.1333 15.1833 11.45 16.7L10 18Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
            <button className="w-full bg-primary text-white text-[13px] lg:text-[14px] font-semibold py-3.5 lg:py-4 rounded-lg cursor-pointer hover:bg-primary/90 transition-colors active:scale-[0.98]">
              BUY IT NOW
            </button>
          </div>

          {/* About the product */}
          <div className="flex flex-col gap-2.5">
            <h3 className="text-dark-gray text-[13px] lg:text-[16px] font-bold uppercase">
              About the product
            </h3>
            <p className="text-dark-gray/70 text-[12px] lg:text-[14px] leading-[160%]">
              {productInfo?.description}
            </p>
          </div>
        </div>
      </div>

      {/* You may also like Section */}
      <div className="mt-8 lg:mt-20 mb-8 lg:mb-16">
        <ProductSlider title="You may also like" products={similarProducts} />
      </div>
    </section>
  );
}
