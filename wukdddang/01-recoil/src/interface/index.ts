export interface ProductItem {
  id: number;
  price: number;
  title: string;
  description: string;
}

export interface ProductCardProps {
  data: ProductItem;
}
