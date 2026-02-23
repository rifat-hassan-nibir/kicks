import { Product } from "./products";

export interface CartItem extends Product {
  selectedSize: number;
  selectedColor: {
    name: string;
    hex: string;
  };
  quantity: number;
}

export interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
}

export type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: { id: number; selectedSize: number; selectedColorHex: string } }
  | {
      type: "UPDATE_QUANTITY";
      payload: { id: number; selectedSize: number; selectedColorHex: string; quantity: number };
    }
  | { type: "CLEAR_CART" }
  | { type: "SET_CART"; payload: CartState };
