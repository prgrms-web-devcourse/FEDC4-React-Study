import { Post } from "../../types";

interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  return <li>{post.title}</li>;
};

export default PostItem;
