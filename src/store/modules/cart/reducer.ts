import { IProduct } from "src/store/modules/cart/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Item {
  product: IProduct;
  quantity: number;
}

interface CartState {
  items: Item[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    ADD_ITEM: (state, action: PayloadAction<IProduct>) => {
      const product = action.payload;
      state.items.push({
        product,
        quantity: 1,
      });
    },
  },
  extraReducers: {},
});

export default cartSlice.reducer;
