import { PostTypes } from "@/types/post";

function PostClient({ data }: { data: PostTypes }) {
  console.log("PostClient data:", data);
  return <div>this is Post Page</div>;
}

export default PostClient;
