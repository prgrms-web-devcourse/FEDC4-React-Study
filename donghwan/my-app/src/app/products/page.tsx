import MeowArticle from "@/components/MeowArticle";
import { getProducts } from "@/service/products";
import Link from "next/link";
import Image from "next/image";
import clothesImage from "../../../public/images/clothes.jpg";

// export const revalidate = 3;

export default async function Products() {
  //서버 파일(데이터베이스)에 있는 제품의 리스트를 읽어와서 , 그걸 보여줌
  throw new Error();
  const products = await getProducts();

  return (
    <>
      <h1>제품 소개 페이지</h1>
      <Image src={clothesImage} alt="Clothes" />
      <ul>
        {products.map(({ id, name }) => (
          <li key={id}>
            <Link href={`/products/${id}`}>{name}</Link>
          </li>
        ))}
      </ul>
      <MeowArticle />
    </>
  );
}
