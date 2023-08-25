type Props = {
  params: {
    slug: string;
  };
};

export default function Pants({ params }: Props) {
  return <h1>{params.slug} 소개 페이지입니다!</h1>;
}
