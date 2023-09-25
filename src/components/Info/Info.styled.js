import styled from "styled-components";
import { COLORS } from "../../variables";

export const Wrap = styled.div`
  padding: 80px 0px 80px;
  display: flex;
  flex-direction: column;
  row-gap: 48px;
  @media screen and (max-width: 1279px) {
    padding: 40px 0px 40px;
    row-gap: 40px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;
export const CardsRow = styled.div`
  display: flex;
  column-gap: 30px;
  @media screen and (max-width: 834px){
    flex-direction: column;
    row-gap: 20px;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 20px;
  width: 100%;
  background-color: ${COLORS.grayMiddle};
  border-radius: 20px;
  padding: 10px 30px 30px 30px;
  @media screen and (max-width: 834px){
    flex-direction: row;
  }
  @media screen and (max-width: 480px){
    flex-direction: column;
  }

`;

export const Description = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  @media screen and (max-width: 560px) {
    row-gap: 10px;
  }
`;

export const DescriptionText = styled.p`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #fff;
`;
