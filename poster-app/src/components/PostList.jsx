import Post from "./Post";
import classes from "./PostList.module.css";
// import { useState, useEffect } from "react";
import { useLoaderData } from 'react-router-dom';
import { v4 as uuidv4 } from "uuid";

function PostList() {
  const posts = useLoaderData();
  // const [posts, setPosts] = useState([]);
  // const [isFetching, setIsFetching] = useState(false);

  // useEffect(() => {
  //   async function fetchPosts() {
  //     setIsFetching(true);
  //     const response = await fetch("http://localhost:8080/posts");
  //     const resData = await response.json();
  //     setPosts(resData.posts);
  //     setIsFetching(false);
  //   }

  //   fetchPosts();
  // }, []);

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((post) => (
            <Post key={uuidv4()} id={post.id} author={post.author} body={post.body} />
          ))}
        </ul>
      )}
      {posts.length === 0 && (
        <div style={{ textAlign: "center", color: "lightgray" }}>
          <h3>아직 작성된 포스트가 없습니다.</h3>
          <p>포스트를 작성해보세요!</p>
        </div>
      )}
      {/* {isFetching && (
        <div style={{ textAlign: 'center', color: 'white'}}>
          <p>Loading...</p>
        </div>
      )} */}
    </>
  );
}

export default PostList;
