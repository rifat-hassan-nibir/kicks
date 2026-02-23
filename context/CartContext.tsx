"use client";

import { CartAction, CartItem, CartState } from "@/types/cart";
import { createContext, ReactNode, useContext, useEffect, useReducer } from "react";
import { useToast } from "./ToastContext";

const initialState: CartState = {
  items: [],
  totalItems: 0,
  totalPrice: 0,
};

const calculateTotals = (items: CartItem[]) => {
  const totalItems = items.reduce((total, item) => total + item.quantity, 0);
  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);
  return { totalItems, totalPrice };
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItemIndex = state.items.findIndex(
        (item) =>
          item.id === action.payload.id &&
          item.selectedSize === action.payload.selectedSize &&
          item.selectedColor.hex === action.payload.selectedColor.hex,
      );

      let newItems;
      if (existingItemIndex > -1) {
        newItems = state.items.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + action.payload.quantity }
            : item,
        );
      } else {
        newItems = [...state.items, action.payload];
      }

      return {
        ...state,
        items: newItems,
        ...calculateTotals(newItems),
      };
    }

    case "REMOVE_ITEM": {
      const newItems = state.items.filter(
        (item) =>
          !(
            item.id === action.payload.id &&
            item.selectedSize === action.payload.selectedSize &&
            item.selectedColor.hex === action.payload.selectedColorHex
          ),
      );

      return {
        ...state,
        items: newItems,
        ...calculateTotals(newItems),
      };
    }

    case "UPDATE_QUANTITY": {
      const newItems = state.items.map((item) => {
        if (
          item.id === action.payload.id &&
          item.selectedSize === action.payload.selectedSize &&
          item.selectedColor.hex === action.payload.selectedColorHex
        ) {
          return { ...item, quantity: action.payload.quantity };
        }
        return item;
      });

      return {
        ...state,
        items: newItems,
        ...calculateTotals(newItems),
      };
    }

    case "CLEAR_CART":
      return initialState;

    case "SET_CART":
      return action.payload;

    default:
      return state;
  }
};

interface CartContextType extends CartState {
  addItem: (item: CartItem) => void;
  removeItem: (id: number, selectedSize: number, selectedColorHex: string) => void;
  updateQuantity: (
    id: number,
    selectedSize: number,
    selectedColorHex: string,
    quantity: number,
  ) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  const { showToast } = useToast();

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem("kicks-cart");
    if (savedCart) {
      try {
        const parsedCart = JSON.parse(savedCart);
        dispatch({ type: "SET_CART", payload: parsedCart });
      } catch (error) {
        console.error("Failed to parse cart from localStorage", error);
      }
    }
  }, []);

  // Save cart to localStorage on change
  useEffect(() => {
    if (state !== initialState) {
      localStorage.setItem("kicks-cart", JSON.stringify(state));
    }
  }, [state]);

  const addItem = (item: CartItem) => {
    dispatch({ type: "ADD_ITEM", payload: item });
    showToast(item.title, "success", item.images?.[0] || (item as any).image);
  };
  const removeItem = (id: number, selectedSize: number, selectedColorHex: string) =>
    dispatch({ type: "REMOVE_ITEM", payload: { id, selectedSize, selectedColorHex } });
  const updateQuantity = (
    id: number,
    selectedSize: number,
    selectedColorHex: string,
    quantity: number,
  ) =>
    dispatch({
      type: "UPDATE_QUANTITY",
      payload: { id, selectedSize, selectedColorHex, quantity },
    });
  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return (
    <CartContext.Provider value={{ ...state, addItem, removeItem, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
