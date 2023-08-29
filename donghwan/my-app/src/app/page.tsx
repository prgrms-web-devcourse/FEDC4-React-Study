import os from 'os'; //node.js api

export default function Home() {
  console.log('안녕');
  console.log(os.hostname());
  return <h1>홈페이지 입니다!</h1>;
}
