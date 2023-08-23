import { atom, selector } from "recoil";
import { ProductItem } from "../interface/index";

export const CartAtom = atom<ProductItem[]>({
  key: "CartAtom",
  default: [],
});

export const QuantitySelector = selector({
  key: "QuantitySelector",
  get: ({ get }) => {
    const currentItem = get(CartAtom);
    return currentItem.length.toLocaleString();
  },
});

export const TotalPriceSelector = selector({
  key: "TotalPriceSelector",
  get: ({ get }) => {
    const currentItem = get(CartAtom);
    return currentItem
      .reduce((acc, cur) => acc + cur.price, 0)
      .toLocaleString();
  },
});
