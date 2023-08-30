import { getProducts } from '@/service/products';
import Link from 'next/link';

export const revalidate = 3;

export default async function Products() {
  //서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서 , 그걸 보여줌
  const products = await getProducts();
  return (
    <>
      <h1>제품 소개 페이지</h1>
      <ul>
        {products.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
