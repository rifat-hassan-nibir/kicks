import Button from "../common/Button";
import ProductCard from "../common/ProductCard";
import SectionTitle from "../common/SectionTitle";
import { newDropsProducts } from "@/constants";

export default function NewDrops() {
  return (
    <div className="pt-22.5 pb-32 flex flex-col gap-8">
      <div className="flex items-end justify-between">
        <SectionTitle>
          Don’t miss out <br />
          new drops
        </SectionTitle>
        <Button variant="primary">SHOP NEW DROPS</Button>
      </div>
      <div className="grid grid-cols-4 gap-4">
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
