import Image from "next/image";
import styled from "styled-components";

export const Container = styled.div`
  background: var(--primary);
  padding: 3rem;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
`;

export const Body = styled.div`
  height: 120px;
  width: 400px;
  background-color: var(--background);
  border-radius: 1rem;
  align-items: center;
  padding: 2rem;
`;

export const ImageNext = styled(Image)`
  object-fit: fill;
`;

export const CartTitle = styled.h1`
  color: var(--background);
`;

export const CartButton = styled.a`
  color: var(--primary);
`;
