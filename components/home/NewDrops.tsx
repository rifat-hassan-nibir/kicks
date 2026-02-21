import Button from "../common/Button";
import ProductCard from "../common/ProductCard";
import SectionTitle from "../common/SectionTitle";
import { newDropsProducts } from "@/constants";

export default function NewDrops() {
  return (
    <div className="pt-6 lg:pt-22.5 pb-4 lg:pb-32 flex flex-col gap-4 lg:gap-8">
      <div className="flex items-end justify-between">
        <SectionTitle>
          Don’t miss out <br />
          new drops
        </SectionTitle>
        <Button variant="primary">SHOP NEW DROPS</Button>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-6">
        {newDropsProducts.map((item) => (
          <ProductCard
            key={item.id}
            productImage={item.image}
            title={item.title}
            price={item.price}
          />
        ))}
      </div>
    </div>
  );
}
