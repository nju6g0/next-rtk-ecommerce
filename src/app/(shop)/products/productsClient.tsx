import { PostTypes } from "@/types/post";

export default function ProductsClient({ data }: { data: PostTypes[] }) {
  console.log("ProductsClient data:", data);
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="">I&#39;am products page.</main>
    </div>
  );
}
