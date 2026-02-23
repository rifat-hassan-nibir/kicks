import { categories } from "@/constants";
import CategoryCard from "../common/CategoryCard";
import SectionTitle from "../common/SectionTitle";
import SliderButton from "../common/SliderButton";
import { getCategories } from "@/data/products";
import { Category } from "@/types/products";

export default async function Categories() {
  const categories = await getCategories();

  return (
    <section className="bg-dark-gray">
      <div className="body-width px-4 lg:px-0 pt-6 lg:pt-24 pb-6 lg:pb-0">
        <div className="flex items-end justify-between mb-8 lg:mb-12">
          <SectionTitle className="text-white">CATEGORIES</SectionTitle>
          <div className="flex items-center gap-2 lg:gap-4">
            <SliderButton direction="left" className="bg-[#B2B2B2]/40" type="gray" />
            <SliderButton direction="right" type="gray" />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 rounded-tl-4xl lg:rounded-tl-[64px] overflow-hidden">
          {categories.map((item: Category, index: number) => (
            <CategoryCard
              key={item.id}
              categoryImage={item.image}
              title={item.name}
              id={item.id}
              className={index % 2 !== 0 ? "bg-[#F6F6F6]" : "bg-[#ECEEF0]"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
