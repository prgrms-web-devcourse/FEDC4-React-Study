import os from 'os'; //node.js api
import Counter from '@/components/Counter';

export default function Home() {
  console.log('안녕 - 서버!');
  console.log(os.hostname());
  return (
    <>
      <h1>홈페이지 입니다!</h1>
      <Counter />
    </>
  );
}
