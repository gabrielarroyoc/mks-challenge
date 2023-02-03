import { api } from "../../services/api";

import { ListProductResponse } from "src/store/modules/cart/types";

export type ListProdutoParams = {
  page: number;
  rows: number;
  sortBy: string;
  orderBy: string;
};

const listProduto = (params: ListProdutoParams) =>
  api.get<ListProductResponse>("/products", {
    params,
  });

const apiListProduto = {
  listProduto,
};

export default apiListProduto;
