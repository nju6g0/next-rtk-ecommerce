import { postsAPI } from "@/lib/api";
import ProductClient from "./productClient";

export async function generateMetadata({ params }: { params: { id: number } }) {
  const res = await postsAPI.getPost(params.id);
  const { data } = res;
  return {
    title: data.title,
    description: data.body,
  };
}
export default async function ProductPage({
  params,
}: {
  params: { id: number };
}) {
  const res = await postsAPI.getPost(params.id);
  const { data } = res;
  return <ProductClient data={data} />;
}
