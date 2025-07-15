import { Metadata } from "next";
import { postsAPI } from "@/lib/api";
import ProductsClient from "./productsClient";

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
  const res = await postsAPI.getPosts();
  return <ProductsClient data={res.data} />;
}
