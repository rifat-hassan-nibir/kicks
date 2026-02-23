import ProductNotFound from "@/components/ui/ProductNotFound";
import { getProductById, getProducts } from "@/data/products";
import ProductDetails from "./ProductDetails";

export default async function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const similarProducts = await getProducts();
  const product = await getProductById(id);

  if (!product) {
    return <ProductNotFound />;
  }

  return <ProductDetails productInfo={product} similarProducts={similarProducts} />;
}
