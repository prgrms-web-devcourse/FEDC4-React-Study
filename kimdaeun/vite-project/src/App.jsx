import axios from "axios";
import useAsync from "./hooks/useAsync";
import PostProvider from "./components/PostProvider";
import PostList from "./components/PostList";

function App() {
  const initialPosts = useAsync(async () => {
    return await axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data);
  }, []);

  return (
    <PostProvider initialPosts={initialPosts.value}>
      <PostList></PostList>
    </PostProvider>
  );
}

export default App;
