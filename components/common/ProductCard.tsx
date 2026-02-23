import Image, { StaticImageData } from "next/image";
import Button from "./Button";

interface ProductCardProps {
  productImage: string | StaticImageData;
  title: string;
  price: string | number;
}

export default function ProductCard({ productImage, title, price }: ProductCardProps) {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative bg-[#FAFAFA] p-2 rounded-2xl lg:rounded-[28px]">
        <Image src={productImage} width={318} height={350} alt="Product" className="w-full" />
        <span className="absolute top-2 left-2 flex items-center justify-center w-10.5 h-5.5 lg:w-14.5 lg:h-9.5 px-2 py-1 lg:px-4 lg:py-3 bg-primary rounded-tl-xl rounded-br-[13px] lg:rounded-tl-3xl lg:rounded-br-3xl text-white text-[12px] font-semibold leading-0">
          New
        </span>
      </div>
      <div className="flex flex-col gap-2 lg:gap-4">
        <h3 className="font-rubik text-dark-gray text-[16px] lg:text-[24px] font-semibold leading-[100%] uppercase">
          {title}
        </h3>
        <Button
          variant="secondary"
          className="w-full bg-dark-gray py-3.25 lg:py-[15.5px] text-[12px] lg:text-[14px]"
        >
          VIEW PRODUCT - <span className="text-secondary">${price}</span>
        </Button>
      </div>
    </div>
  );
}
