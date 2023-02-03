import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 3rem;

  min-height: 100vh;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  display: flex;
  padding: 2rem 4rem;
  width: 100%;
  margin: 0 auto;
  height: 100px;
  justify-content: space-between;
  background-color: var(--primary);
`;

export const Cart = styled.button`
  cursor: pointer;
  display: flex;
  border-radius: 8px;
  color: var(--title);
  background-color: var(--background);
  justify-content: center;
  align-items: center;
  display: flex;

  width: 48px;
  height: 48px;

  outline: none;
  border: none;

  border-radius: 6px;
  position: relative;

  transition: all 0.2s ease-in-out;
  cursor: pointer;

  &:hover {
    filter: opacity(0.8);
  }
`;
