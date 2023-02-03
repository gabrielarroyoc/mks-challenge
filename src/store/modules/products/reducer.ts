import apiListProduto from "src/utils/api/api.product";
import { ICartState, IProduct, ListProductResponse } from "./../cart/types";
import { AnyAction, Reducer } from "redux";
import { api } from "src/services/api";
import asyncThunk from "./asyncThunk";
import produce from "immer";
import { ListProductAsyncThunk } from "./actions";
import { createSlice, Slice } from "@reduxjs/toolkit";

interface ProductsState {
  products: IProduct[];
  loading: boolean;
  error: string | null;
}

const InitialState: ListProductResponse = [];

const productsSlice = createSlice({
  name: "products",
  initialState: <ProductsState>{
    products: InitialState,
    loading: false,
    error: "",
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(ListProductAsyncThunk.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(ListProductAsyncThunk.fulfilled, (state, action) => {
      state.products = action.payload;
      state.loading = false;
    });
    builder.addCase(ListProductAsyncThunk.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message!;
    });
  },
});

export default productsSlice.reducer;
