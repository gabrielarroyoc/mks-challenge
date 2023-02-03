export interface IProduct {
  id: number;
  name: string;
  brand: string;
  photo: string;
  price: string;
  description: string;
}
export type ListProductResponse = IProduct[];

export interface ICartItem {
  product: IProduct;
  quantity: number;
}
export interface ICartState {
  items: ICartItem[];
}

export interface AppState {
  cartOpen: boolean;
}
