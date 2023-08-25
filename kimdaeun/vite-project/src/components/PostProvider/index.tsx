import { createContext, useContext, useEffect, useReducer } from "react";
import { Post } from "../../types";

interface Action {
  type: string;
  payload?: any;
}

const PostContext = createContext();
export const usePostContext = () => useContext(PostContext);

const reducer = (state: Post[], action: Action) => {
  switch (action.type) {
    case "INIT_POSTS": {
      return action.payload;
    }
    default: {
      console.error("wrong type");
      break;
    }
  }
};

const PostProvider = ({ children, initialPosts }) => {
  // useReducer(state가 업데이트되는 방식을 지정, 초기 state가 되는 값)
  const [posts, dispatch] = useReducer(reducer, initialPosts || []);

  // dispatch는 유일한 인수로 action을 전달한다.
  // 그러면 react는 reducer 함수에 현재 state와 dispatch한 액선을 전달한다.
  // state랑 posts는 엄연히 같은 값이라고 할수있는거겠지..?
  useEffect(() => {
    dispatch({ type: "INIT_POSTS", payload: initialPosts || [] });
  }, [initialPosts]);

  return (
    <PostContext.Provider value={{ posts }}>{children}</PostContext.Provider>
  );
};

export default PostProvider;
