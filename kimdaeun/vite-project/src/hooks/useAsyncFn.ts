// api를 비동기적으로 가져올때 사용하는 hook
import { useCallback, useRef, useState } from "react";
import { Post } from "../types";
import { AxiosError } from "axios";

interface AsyncState<T> {
  isLoading: boolean;
  value?: T;
  error?: AxiosError;
}

const useAsyncFn = (fn: () => Promise<Post[]>, deps: number[]) => {
  const lastCallId = useRef(0); // 비동기 호출이 여러번 호출되는 것을 방지
  const [state, setState] = useState<AsyncState<Post[]>>({
    isLoading: false,
  });

  const callback = useCallback((...args: any[]) => {
    const callId = ++lastCallId.current;
    if (!state.isLoading) {
      // 로딩중이 아닐때, isLoading을 true로 바꿔준다.
      setState({ ...state, isLoading: true });
    }
    return fn(...args).then(
      // fn(...args)는 Promise임
      (value) => {
        console.log(value);
        callId === lastCallId.current && setState({ value, isLoading: false });
        return value;
      }, // resolve
      (error) => {
        console.log(error);
        callId === lastCallId.current && setState({ error, isLoading: false });
        return error;
      } // reject
    );
  }, deps);

  // lastCallId : 2
  // 작업 A => callId :1
  // 작업 B => callId :2 (마지막 비동기 호출만 호출 )

  return [state, callback];
};

export default useAsyncFn;
