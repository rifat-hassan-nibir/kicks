export const getProducts = async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/products");
  const data = await res.json();
  return data.slice(12, 20);
};

export const getProductById = async (id: string) => {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`);
  if (!res.ok) return null;
  const data = await res.json();
  return data;
};

export const getRelatedProductsById = async (id: string) => {
  const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}/related`);
  if (!res.ok) return null;
  const data = await res.json();
  return data.slice(2, 6);
};

export const getCategories = async () => {
  const res = await fetch("https://api.escuelajs.co/api/v1/categories");
  const data = await res.json();
  return data.slice(0, 2);
};
