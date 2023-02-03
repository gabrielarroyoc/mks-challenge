import { useSelector } from "react-redux";

import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import React, { useState } from "react";

import * as S from "./styles";

const CartDrawer = () => {
  const cart = useSelector((state: any) => state.cart?.items);
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <S.CartButton onClick={toggleDrawer}>Show</S.CartButton>
      <Drawer
        size={"486px"}
        open={isOpen}
        enableOverlay={true}
        style={{
          background: "#0F52BA",
        }}
        onClose={toggleDrawer}
        direction="right"
      >
        <S.CartTitle>
          Carrinho
          <br /> de Compras
        </S.CartTitle>
        <h2>{} produtos</h2>
        <S.Container>
          {cart.map((item: any) => (
            <>
              <S.Body key={item.product.id}>
                <article key={item.product.id}>
                  <S.ImageNext
                    src={item.products.photo}
                    alt=""
                    width="50"
                    height="50"
                  />
                  <span>{item.product.name}</span>
                </article>
              </S.Body>
              <footer>{(item.product.price * item.quantity).toFixed(2)}</footer>
            </>
          ))}
        </S.Container>
      </Drawer>
    </>
  );
};

export default CartDrawer;
