import styled from "styled-components";
import { Button, COLORS } from "../../variables";

export const Wrap = styled.section`
  padding: 80px 0px 80px;
  display: flex;
  flex-direction: column;
  row-gap: 60px;
  @media screen and (min-width: 834px) and (max-width: 1279px) {
    padding: 40px 0px 40px;
    row-gap: 40px;
  }
  @media screen and (max-width: 834px) {
    padding: 40px 0px 40px;
    row-gap: 40px;
  }
  
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  @media screen and (min-width: 834px) and (max-width: 1279px) {
    column-gap: 20px;
  }
  @media screen and (max-width: 834px) {
    column-gap: 10px;
  }
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const Row = styled.div`
  display: flex;
  column-gap: 30px;
  @media screen and (max-width: 720px) {
    column-gap: 15px;
  }
  @media screen and (max-width: 720px) {
    flex-direction: column;
    row-gap: 15px;
  }
`;

export const Btn = styled.button`
  ${Button}
  padding: 0 40px;
  height: 60px;
  background-color: ${COLORS.inherit};
  span {
    color: ${COLORS.white};
  }
  svg,
  path {
    fill: ${COLORS.purple};
  }
  @media screen and (max-width: 834px) {
    display: none;
  }
`;

export const MobileBtn = styled(Btn)`
  display: none;
  @media screen and (max-width: 834px) {
    display: flex;
    width: 100%;
  }
`;
