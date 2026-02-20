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
      <div className="relative bg-[#FAFAFA] p-2 rounded-[28px]">
        <Image src={productImage} width={318} height={350} alt="Product" className="rounded-3xl" />
        <span className="absolute top-2 left-2 flex items-center justify-center px-4 py-3 w-14.5 h-9.5 bg-primary rounded-tl-3xl rounded-br-3xl text-white text-[12px] font-semibold leading-0">
          New
        </span>
      </div>
      <h3 className="font-rubik text-dark-gray text-[24px] font-semibold leading-[100%] uppercase">
        {title}
      </h3>
      <Button variant="secondary" className="w-full bg-dark-gray">
        VIEW PRODUCT - <span className="text-secondary">${price}</span>
      </Button>
    </div>
  );
}
