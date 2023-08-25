import PostItem from "../PostItem";
import { usePostContext } from "../PostProvider";
import { InitPosts, Post } from "../../types";

const PostList = () => {
  const { posts } = usePostContext();
  return (
    <div>
      {posts.map((post) => (
        <PostItem key={post.id} post={post}></PostItem>
      ))}
    </div>
  );
};
export default PostList;
