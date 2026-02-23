import ProductNotFound from "@/components/ui/ProductNotFound";
import { getProductById, getRelatedProductsById } from "@/data/products";
import ProductDetails from "./ProductDetails";

export default async function ProductDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = await getProductById(id);
  const similarProducts = await getRelatedProductsById(id);

  if (!product) {
    return <ProductNotFound />;
  }

  return <ProductDetails productInfo={product} similarProducts={similarProducts} />;
}
