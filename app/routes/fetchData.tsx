// app/routes/api/products.ts
import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async () => {
  const productRes = await fetch("https://dummyjson.com/products?limit=0");
  const categoryRes = await fetch("https://dummyjson.com/products/categories");
  const productData = await productRes.json();
  const categories = await categoryRes.json();

  return json({
    productData: productData.products,
    categories,
  });
};
