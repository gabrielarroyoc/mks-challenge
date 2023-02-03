import Image from "next/image";
import styled from "styled-components";

export const ProductContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 400px;
  height: 300px;
`;

export const Product = styled.a`
  display: flex;
  background: var(--background);
  justify-content: center;

  align-items: center;
  cursor: pointer;
  position: relative;
  width: 220px;
  height: 285px;

  strong {
    justify-content: center;
    top: 2rem;
    color: var(--primary);
    font-weight: 600;
    font-size: large;
  }

  footer {
    justify-content: center;
    color: var(--subtitle);
    font-size: large;
    font-weight: 600;

    span {
      justify-content: center;
      font-size: 400;
      font-weight: "bold";
      color: var(--secondary);
    }
  }
`;
