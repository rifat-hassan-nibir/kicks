export const getProducts = async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/products", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch products");

  const data = await res.json();
  return data;
};

export const getProductById = async (id: string) => {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch product");

  const data = await res.json();
  return data;
};

export const getRelatedProductsById = async (id: string) => {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}/related`, {
    cache: "no-store",
  });
  if (!res.ok) throw new Error("Failed to fetch related products");
  const data = await res.json();
  return data.slice(0, 4);
};

export const getCategories = async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories", {
    cache: "no-store",
  });

  if (!res.ok) throw new Error("Failed to fetch categories");

  const data = await res.json();
  return data.slice(0, 2);
};
