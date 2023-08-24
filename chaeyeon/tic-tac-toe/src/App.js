import { useState } from "react";
// Making an interactive component
// 누르면 X로 채우기

// 리액트는 컴포넌트에서 호출하여 항목을 기억할 수 있는 useState를 제공함.

function Square() {
  const [value, setValue] = useState(null);
  //value는 값을 저장, setValue는 값을 변경하는 데 사용되는 함수
  //null은 useState의 상태변수의 초기값으로 사용된다.

  function handleClick() {
    setValue("X");
  }
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  );
}

export default function Board() {
  return (
    <>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
    </>
  );
}
