import { Metadata } from "next";

import { postsAPI } from "@/lib/api";
import PostsClient from "./postsClient";

export const metadata: Metadata = {
  title: "POSTS Page",
  description: "POSTS Page，這是一個靜態設定的 metadata 範例",
  keywords: ["posts"],
};

async function PostsPage() {
  const res = await postsAPI.getPosts();
  return <PostsClient data={res.data} />;
}

export default PostsPage;
