import axios from "axios";
import useAsync from "./hooks/useAsync";
import PostProvider from "./components/PostProvider";
import PostList from "./components/PostList";
import PostAddForm from "./components/PostAddForm";
import { useCallback } from "react";

function App() {
  const initialPosts = useAsync(async () => {
    return await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data);
  }, []);

  //여기서는 왜 useCallback을 쓴거지..? useAsync는 안되는건가..?
  const handleAddPost = useCallback(async (post) => {
    return await axios
      .post("https://jsonplaceholder.typicode.com/posts", post)
      .then((res) => res.data);
  }, []);

  const handleDeletePost = useCallback(async (id) => {
    return await axios
      .delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.data);
  }, []);

  return (
    <PostProvider
      initialPosts={initialPosts.value}
      handleAddPost={handleAddPost}
      handleDeletePost={handleDeletePost}
    >
      <PostAddForm></PostAddForm>
      <PostList></PostList>
    </PostProvider>
  );
}

export default App;
