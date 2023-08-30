'use client';
import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  console.log('안녕 - client!');
  return (
    <>
      <p>{count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>
        숫자 증가 시키기
      </button>
    </>
  );
}
