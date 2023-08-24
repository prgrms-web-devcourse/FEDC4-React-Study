import PostItem from "../PostItem";
import { usePostContext } from "../PostProvider";

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
