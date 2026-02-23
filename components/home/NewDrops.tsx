import { Product } from "@/types/products";
import Button from "../common/Button";
import ProductCard from "../common/ProductCard";
import SectionTitle from "../common/SectionTitle";
import { getProducts } from "@/data/products";

export default async function NewDrops() {
  const products = await getProducts();
  console.log(products.length);

  return (
    <div className="body-width px-4 lg:px-0 pt-6 lg:pt-22.5 pb-4 lg:pb-32 flex flex-col gap-4 lg:gap-8">
      <div className="flex items-end justify-between">
        <SectionTitle>
          Don’t miss out <br />
          new drops
        </SectionTitle>
        <Button variant="primary">SHOP NEW DROPS</Button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6">
        {products.slice(0, 4).map((item: Product) => (
          <ProductCard key={item.id} productInfo={item} />
        ))}
      </div>
    </div>
  );
}
