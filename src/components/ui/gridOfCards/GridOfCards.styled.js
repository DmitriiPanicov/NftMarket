import { styled } from "styled-components";

export const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(${props => props.columns}, 1fr);
  gap: 30px;
`;

export const CardsLine = styled.div`
  display: flex;
  flex-direction: column;
`;