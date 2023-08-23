import React from "react";
import { useRecoilValue } from "recoil";
import { styled } from "styled-components";
import {
  CartAtom,
  QuantitySelector,
  TotalPriceSelector,
} from "../recoil/CartAtom";
import CartItem from "../components/CartItem";

const ColumnWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  text-align: right;
`;

const PrimaryText = styled.span`
  font-size: 20px;
  font-weight: var(--bold);
`;

const ItemWrapper = styled.ul`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 300px);
  gap: 8px;
  flex-direction: column;
`;

const TotalPriceWrapper = styled.div`
  padding: 16px;
  height: 150px;
  width: 100%;
  max-width: 1024px;
  border: 1px solid var(--line-gray);
`;
const NoItems = styled.div`
  padding: 8px;
  width: fit-content;
  margin: 0 auto;
  border-radius: 4px;
  text-align: center;
  border: 1px solid var(--line-gray);
`;

export default function CartPage() {
  const cartItem = useRecoilValue(CartAtom);
  const totalQuantity = useRecoilValue(QuantitySelector);
  const totalPrice = useRecoilValue(TotalPriceSelector);

  return (
    <>
      <PrimaryText>장바구니</PrimaryText>
      <ItemWrapper>
        {cartItem.length ? (
          cartItem.map((item) => <CartItem data={item} key={item.id} />)
        ) : (
          <NoItems>상품이 없습니다.</NoItems>
        )}
      </ItemWrapper>

      <TotalPriceWrapper>
        <ColumnWrapper>
          <span>총 갯수</span>
          <PrimaryText>{`${totalQuantity}개`}</PrimaryText>
        </ColumnWrapper>
        <ColumnWrapper>
          <span>총 가격</span>
          <PrimaryText>{`${totalPrice}원`}</PrimaryText>
        </ColumnWrapper>
      </TotalPriceWrapper>
    </>
  );
}
