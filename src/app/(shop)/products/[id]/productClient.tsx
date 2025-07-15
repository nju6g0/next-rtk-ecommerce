import { PostTypes } from "@/types/post";

export default function ProductClient({ data }: { data: PostTypes }) {
  console.log("ProductClient data:", data);
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <main className="">I&#39;am a product page.</main>
    </div>
  );
}
