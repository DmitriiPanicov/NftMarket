import styled from "styled-components";
import { Button, COLORS } from "../../variables";

export const Wrap = styled.div`
  padding: 80px 0px 80px;
  display: grid;
  row-gap: 30px;
  column-gap: 30px;
  grid-template-areas:
    "textWrap nft"
    "button nft"
    "additionalInfo nft";
  justify-content: space-between;

  @media screen and (max-width: 834px) {
    padding: 40px 0px;
    display: grid;
    row-gap: 40px;
    justify-items: center;
    text-align: center;
    grid-template-areas:
      "textWrap"
      "nft"
      "button"
      "additionalInfo";
  }
`;

export const TextWrap = styled.div`
  grid-area: textWrap;
  width: 510px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  @media screen and (min-width: 834px) and (max-width: 1279px) {
    width: 330px;
    row-gap: 20px;
  }
  @media screen and (max-width: 834px) {
    width: 100%;
    height: 154px;
    row-gap: 10px;
  }
`;

export const List = styled.ul`
  grid-area: additionalInfo;
  display: flex;
  justify-content: space-between;
  column-gap: 30px;

  @media screen and (min-width: 834px) and (max-width: 1279px) {
    column-gap: 20px;
  }

  @media screen and (max-width: 834px) {
    column-gap: 30px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
`;

export const Amount = styled.span`
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 28px;
  line-height: 140%;
  color: #fff;
  @media screen and (max-width: 1279px) {
    font-size: 22px;
    line-height: 110%;
  }
`;

export const Signature = styled.span`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 22px;
  line-height: 160%;
  color: #fff;
  @media screen and (max-width: 1279px) {
    font-size: 16px;
  }
`;

export const Nft = styled.img`
  grid-area: nft;
  width: 100%;
  height: 100%;

  @media screen and (min-width: 834px) and (max-width: 1279px) {
    width: 40vw;
    height: auto;
  }

  @media screen and (max-width: 834px) {
    max-width: 460px;
    height: auto;
  }
`;

export const Btn = styled.button`
  ${Button}
  width: 247px;
  height: 60px;
  background-color: ${COLORS.purple};
  span {
    color: ${COLORS.white};
  }
  svg,
  path {
    fill: ${COLORS.white};
  }
`;
