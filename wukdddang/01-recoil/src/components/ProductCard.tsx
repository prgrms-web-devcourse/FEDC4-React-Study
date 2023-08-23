import React from "react";
import { styled } from "styled-components";
import dummyImage from "/vite.svg";
import { ProductCardProps } from "../interface";
import { useRecoilState } from "recoil";
import { CartAtom } from "../recoil/CartAtom";

const ProductCardWrapper = styled.div`
  padding: 16px;
  width: 310px;
  height: 100%;
  border: 1px solid var(--line-gray);
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const Price = styled.span`
  font-size: 20px;
  color: var(--font-black);
  font-weight: var(--bold);
`;

const MaxLine = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Button = styled.button`
  padding: 8px;
  color: #fff;
  background-color: var(--main);

  &:disabled {
    background-color: var(--line-gray);
    color: var(--font-gray);
  }
`;

const Title = styled.span`
  font-size: 18px;
  font-weight: var(--bold);
`;

export default function ProductCard(item: ProductCardProps) {
  const { id, title, description, price } = item.data;
  const [cartItem, setCartItem] = useRecoilState(CartAtom);

  const isAlreadyInCart = cartItem.findIndex((item) => item.id === id) !== -1;

  const AddToCart = () => {
    setCartItem((items) => [...items, item.data]);
  };

  return (
    <ProductCardWrapper>
      <img width={276} height={276} src={dummyImage} />
      <Price>{price.toLocaleString()}원</Price>
      <Title>{title}</Title>
      <MaxLine>{description}</MaxLine>
      <Button onClick={AddToCart} disabled={isAlreadyInCart}>
        {isAlreadyInCart ? `장바구니에 추가되었습니다.` : `장바구니에 추가`}
      </Button>
    </ProductCardWrapper>
  );
}
