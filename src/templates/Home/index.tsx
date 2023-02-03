import Image from "next/image";
import logoImg from "../../assets/logo.svg";

import React, { useEffect } from "react";

import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { handleOpenCart } from "src/store/modules/cart/actions";

import * as S from "./styles";

import Product from "src/components/Product";
import { useState } from "react";
import CartDrawer from "src/components/CartDrawer";

export const HomeTemplate = () => {
  useEffect(() => {
    const getInitialProducts = async () => {};
    return () => {};
  }, []);

  const dispatch = useDispatch();
  const OpenCart = useCallback(() => {
    dispatch(handleOpenCart());
  }, [dispatch]);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
    handleOpenCart();
  };
  return (
    <>
      <S.Header>
        <Image src={logoImg} alt="" />
        <S.Cart onClick={handleOpenCart}>
          <CartDrawer />
        </S.Cart>
      </S.Header>
      <S.HomeContainer>
        <Product></Product>
      </S.HomeContainer>
    </>
  );
};
