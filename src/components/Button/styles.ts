import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  justify-content: center;
  gap: 1rem;

  background-color: black;
  border: 0;
  color: $white;
  border-radius: 8;
  padding: 1.25rem;
  cursor: pointer;
  font-weight: bold;
  font-size: 600;

  width: 100%;

  transition: all 0.2s;
  margin-top: auto;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:hover {
    background-color: red;
  }
`;
