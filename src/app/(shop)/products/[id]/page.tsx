import ProductClient from "./productClient";

const API_URL = process.env.API_URL;

async function fetchProduct({ id }: { id: string }) {
  const res = await fetch(`${API_URL}/posts/${id}`);
  return res.json();
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const data = await fetchProduct({ id: params.id });
  return {
    title: data.title,
    description: data.body,
  };
}
export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const data = await fetchProduct({ id: params.id });
  return <ProductClient data={data} />;
}
