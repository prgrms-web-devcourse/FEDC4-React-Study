type Props = {
  params: {
    slug: string;
  };
};

export function generateMetadata({ params }: Props) {
  return {
    title: `제품의 이름: ${params.slug}`,
  };
}

export default function Pants({ params }: Props) {
  return <h1>{params.slug} 소개 페이지입니다!</h1>;
}

export function generateStaticParams() {
  const products = ['pants', 'shirt'];
  return products.map((product) => ({
    slug: product,
  }));
}
