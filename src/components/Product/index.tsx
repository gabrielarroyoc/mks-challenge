import { useDispatch, useSelector } from "react-redux";
import React, { useCallback } from "react";
import { ADD_ITEM } from "../../store/modules/cart/actions";

import * as S from "./styles";

import { useEffect } from "react";

import Image from "next/image";
import { ListProductAsyncThunk } from "src/store/modules/products/actions";
import { RootState } from "src/store/modules/rootReducer";
import { Button } from "../Button";
import { IProduct } from "src/store/modules/cart/types";

interface Product {
  id: number;
  name: string;
}

interface Item {
  product: Product;
  quantity: number;
}

interface CartState {
  items: Item[];
}

interface CartProps {
  product: IProduct;
}

interface Props {
  onClick: () => void;
}

const Product = ({ product }: any) => {
  const dispatch = useDispatch();
  const { cart, products } = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(
      ListProductAsyncThunk({
        page: 1,
        rows: 8,
        orderBy: "DESC",
        sortBy: "id",
      }) as any
    );
  }, [dispatch]);

  const produtos = useSelector((state: CartState) => state.items);
  const handleAddToCart = useCallback(
    (product: IProduct) => {
      dispatch(ADD_ITEM(product));
    },
    [dispatch]
  );

  return (
    <>
      {produtos ? (
        produtos.map((items: any) => {
          return (
            <S.ProductContainer>
              <div key={items.produtos.id}>
                <Image
                  src={items.produtos.photo}
                  alt=""
                  width="140"
                  height="160"
                />
                <strong>{items.produtos.name}</strong>
                <span>(205)</span>
                <strong>{items.produtos.price}</strong>
                <span>{items.produtos.description}</span>
                <button
                  onClick={() => handleAddToCart(product)}
                  key={items.produtos.id}
                >
                  Comprar agora
                </button>
              </div>
            </S.ProductContainer>
          );
        })
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default Product;
