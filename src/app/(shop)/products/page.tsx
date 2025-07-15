import { Metadata } from "next";
import ProductsClient from "./productsClient";

const API_URL = process.env.API_URL;

async function fetchProducts() {
  const res = await fetch(`${API_URL}/posts`);
  return res.json();
}

// export async function generateMetadata() {
//   const data = await fetchProducts();
//   return {
//     title: "商品列表",
//     description: "這裡是商品列表頁面",
//   };
// }
export const metadata: Metadata = {
  title: "商品列表",
  description: "商品列表頁面，這是一個靜態設定的 metadata 範例",
  keywords: ["Next.js", "Metadata", "Static"],
};
export default async function ProductsPage() {
  const data = await fetchProducts();
  return <ProductsClient data={data} />;
}
