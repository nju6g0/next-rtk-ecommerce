import PostsClient from "./postClient";
import { postsAPI } from "@/lib/api";

export default async function PostPage({ params }: { params: { id: number } }) {
  const res = await postsAPI.getPost(params.id);
  console.log("PostPage res:", res.data);
  return <PostsClient data={res.data} />;
}
