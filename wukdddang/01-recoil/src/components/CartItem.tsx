import { styled } from "styled-components";
import dummyImage from "/vite.svg";
import { ProductCardProps } from "../interface";
import { useSetRecoilState } from "recoil";
import { CartAtom } from "../recoil/CartAtom";

const CartItemWrapper = styled.li`
  width: 100%;
  padding: 16px;
  border: 1px solid var(--line-gray);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ImageWrapper = styled.img`
  height: 60px;
  width: 60px;
  float: left;
  margin-right: 16px;
  border: 1px solid var(--line-gray);
  border-radius: 8px;
`;

const ColumnWrapper = styled.div`
  display: flex;
  height: 60px;
  flex-direction: column;
  justify-content: center;
`;

const RightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
  > span {
    text-align: right;
  }
`;

const Title = styled.span`
  font-weight: var(--bold);
  font-size: 18px;
`;

const Button = styled.button`
  display: block;
  padding: 4px 8px;
  width: fit-content;
`;

export default function CartItem(item: ProductCardProps) {
  const { id, title, description, price } = item.data;
  const setItem = useSetRecoilState(CartAtom);

  const removeItem = () => {
    setItem((items) => items.filter((item) => item.id !== id));
  };

  return (
    <CartItemWrapper>
      <div>
        <ImageWrapper src={dummyImage} alt={title} />
        <ColumnWrapper>
          <Title>{title}</Title>
          <span>{description}</span>
        </ColumnWrapper>
      </div>
      <RightWrapper>
        <Title>{`${price.toLocaleString()}원`}</Title>
        <Button onClick={removeItem}>삭제</Button>
      </RightWrapper>
    </CartItemWrapper>
  );
}
