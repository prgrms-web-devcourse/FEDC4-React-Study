import { usePostContext } from "../PostProvider";

const PostItem = ({ post }) => {
  const { onDeletePost } = usePostContext();
  return (
    <li>
      {post.title}
      <button onClick={() => onDeletePost(post.id)}>delete</button>
    </li>
  );
};

export default PostItem;
