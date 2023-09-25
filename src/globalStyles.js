import styled, { createGlobalStyle } from "styled-components";
import { COLORS } from "./variables";

const GlobalStyle = createGlobalStyle`
body{
  height: 100%;
  min-width: 320px;
  background-color: #2b2b2b;
}
img {
  display: block;
}
`;

export const Container = styled.div`
  max-width: 1280px;
  padding: 0px 115px 0px 115px;
  height: 100%;
  margin: 0 auto;
  position: relative;
  @media screen and (min-width: 834px) and (max-width: 1279px) {
    padding: 0px 72px 0px 72px;
  }

  @media screen and (max-width: 834px) {
    padding: 0px 30px;
  }
`;

export const H1 = styled.h1`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 51px;
  line-height: 110%;
  color: #fff;
  @media screen and (min-width: 834px) and (max-width: 1279px) {
    font-size: 32px;
    line-height: 120%;
  }
  @media screen and (max-width: 834px) {
    font-size: 28px;
    line-height: 140%;
  }
`;

export const H2 = styled.h2`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 38px;
  line-height: 120%;
  color: #fff;
  @media screen and (min-width: 834px) and (max-width: 1279px) {
    font-size: 28px;
  }
  @media screen and (max-width: 834px) {
    font-size: 22px;
    line-height: 140%;
  }
`;
export const H3 = styled.h3`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 140%;
  color: #fff;
  @media screen and (min-width: 834px) and (max-width: 1279px) {
    font-size: 28px;
  }
  @media screen and (max-width: 834px) {
    font-size: 22px;
    line-height: 140%;
  }
`;

export const Text = styled.p`
  font-family: "Work Sans";
  font-weight: 400;
  font-size: 22px;
  line-height: 160%;
  color: #fff;
  @media screen and (max-width: 1279px) {
    font-size: 16px;
    line-height: 140%;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 100%;
  }
`;

export const Signature = styled.span`
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 160%;
  color: ${COLORS.grayLight};
  @media screen and (max-width: 1279px) {
    font-size: 16px;
    line-height: 140%;
  }
  @media screen and (max-width: 480px) {
    font-size: 14px;
    line-height: 100%;
  }
`;

export const GlobeLink = styled.a`
  display: contents;
`;

export default GlobalStyle;
