import thunk from "redux-thunk";
import { ICartState } from "./modules/cart/types";
import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./modules/rootReducer";
import { useDispatch } from "react-redux";

export interface IState {
  cart: ICartState;
}

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
