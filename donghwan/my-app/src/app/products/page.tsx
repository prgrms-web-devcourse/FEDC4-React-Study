import Link from 'next/link';

const products = ['pants', 'shirt', 'skirt', 'shoes'];

export default function ProductsLayout() {
  return (
    <>
      <h1>제품 소개 페이지</h1>
      <ul>
        {products.map((product) => (
          <li key={product}>
            <Link href={`/products/${product}`}>{product}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
