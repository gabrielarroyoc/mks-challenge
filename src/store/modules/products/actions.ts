import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "src/utils/api";
import { ListProdutoParams } from "src/utils/api/api.product";

export const ListProductAsyncThunk = createAsyncThunk(
  "/product",
  async (params: ListProdutoParams, thunkAPI) => {
    const { data } = await api.listProduto.listProduto(params);
    return data.products;
  }
);
