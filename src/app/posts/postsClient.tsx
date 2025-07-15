import { PostTypes } from "@/types/post";

function PostsClient({ data }: { data: PostTypes[] }) {
  console.log("PostsClient data:", data);
  return <div>this is Posts Page</div>;
}

export default PostsClient;
