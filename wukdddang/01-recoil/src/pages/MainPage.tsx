import React from "react";
import { styled } from "styled-components";
import dummyData from "../model/dummyData";
import ProductCard from "../components/ProductCard";
import { ProductItem } from "../interface";

const ListWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 8px;
`;

export default function MainPage() {
  return (
    <ListWrapper>
      {dummyData.map((item: ProductItem) => {
        return (
          <li key={item.id}>
            <ProductCard data={item} />
          </li>
        );
      })}
    </ListWrapper>
  );
}
