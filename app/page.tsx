import Categories from "@/components/home/Categories";
import Hero from "@/components/home/Hero";
import NewDrops from "@/components/home/NewDrops";
import Reviews from "@/components/home/Reviews";

export default function Home() {
  return (
    <div className="flex flex-col gap-0 overflow-x-hidden">
      <Hero />
      <NewDrops />
      <Categories />
      <Reviews />
    </div>
  );
}
