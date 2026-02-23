import { StaticImageData } from "next/image";
import ProductCard from "./ProductCard";
import SliderButton from "./SliderButton";

interface Product {
  id: string | number;
  image?: string | StaticImageData | any;
  images?: string[];
  title: string;
  price: number | string;
}

interface ProductSliderProps {
  title: React.ReactNode;
  products: Product[];
  actionButton?: React.ReactNode;
  showSliderButtons?: boolean;
}

export default function ProductSlider({
  title,
  products,
  actionButton,
  showSliderButtons = true,
}: ProductSliderProps) {
  return (
    <div>
      <div className="flex items-end justify-between mb-4 lg:mb-8 gap-4">
        <h4 className="font-rubik text-dark-gray text-[24px] lg:text-[48px] font-semibold leading-[100%]">
          {title}
        </h4>
        <div className="flex items-center gap-4">
          {actionButton}
          {showSliderButtons && (
            <div className="flex gap-2">
              <SliderButton direction="left" type="dark-gray" className="bg-dark-gray/40" />
              <SliderButton direction="right" type="dark-gray" />
            </div>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-4 gap-y-6">
        {products.map((item) => (
          <ProductCard key={item.id} productInfo={item} />
        ))}
      </div>
    </div>
  );
}
