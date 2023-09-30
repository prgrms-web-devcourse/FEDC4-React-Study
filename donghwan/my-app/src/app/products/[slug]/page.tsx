import { getProduct, getProducts } from "@/service/products";
import { notFound, redirect } from "next/navigation";
import Image from "next/image";
import GoProductsButton from "@/components/GoProductsButton";

type Props = {
  params: {
    slug: string;
  };
};

export const revalidate = 3;

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`,
  };
}

export default async function Product({ params: { slug } }: Props) {
  // 서버에서 해당 데이터중 해당 제품의 정보를 찾아 그걸 보여줌
  const product = await getProduct(slug);
  if (!product) {
    redirect("/products");
    // notFound();
  }

  return (
    <>
      <h1>{product.name} 소개 페이지입니다!</h1>
      <Image src={product.image} alt={product.name} width={400} height={400} />
      <GoProductsButton />
    </>
  );
}

export async function generateStaticParams() {
  // 모든 제품의 페이지를 미리 만들거임 (SSG)
  const products = await getProducts();
  return products.map((product) => ({
    slug: product.id,
  }));
}
