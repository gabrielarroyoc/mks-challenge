import { combineReducers } from "@reduxjs/toolkit";
import cart from "../modules/cart/reducer";
import products from "./products/reducer";

export const rootReducer = combineReducers({
  cart: cart,
  products: products,
});

export type RootState = ReturnType<typeof rootReducer>;
export type RootGetState = ReturnType<typeof rootReducer>;
