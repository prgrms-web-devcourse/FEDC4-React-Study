import PostItem from "../PostItem";
import { usePostContext } from "../PostProvider";

const PostList = () => {
  const { posts } = usePostContext();
  return (
    <ul>
      {posts.map((post) => (
        <PostItem key={post.id} post={post}></PostItem>
      ))}
    </ul>
  );
};
export default PostList;
