import { useEffect } from "react";
import useAsyncFn from "./useAsyncFn";
import { Post } from "../types";

const useAsync = (fn: () => Promise<Post[]>, deps: number[]) => {
  const [state, callback] = useAsyncFn(fn, deps);

  useEffect(() => {
    callback();
  }, [callback]);

  return state;
};

export default useAsync;
