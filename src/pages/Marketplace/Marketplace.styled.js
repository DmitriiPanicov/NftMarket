import styled from "styled-components";
import { COLORS, HEADER_HEIGHT } from "../../variables";

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const Categories = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
  padding: 30px 0;
`;

export const Category = styled.span`
  margin: 10px 10px;
  padding: 14px 30px;
  transition: 0.35s;
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 140%;
  color: ${COLORS.grayLight};
  border-radius: 20px;
  border: 1px solid #fff;

  &:hover {
    cursor: pointer;
    color: #8584849c;
  }
  &.active {
    color: ${COLORS.white};
    background-color: ${COLORS.purple};
  }

  @media screen and (max-width: 1279px) {
    font-size: 18px;
  }
  @media screen and (max-width: 960px) {
    font-size: 16px;
    padding: 7px 15px;
  }
`;

export const Hr = styled.hr`
  border-top: 1px solid #3b3b3b;
  margin: 30px 0 20px;
`;

export const Wrap = styled.div`
  padding: 80px 0px;
  @media screen and (max-width: 960px) {
    margin-top: ${HEADER_HEIGHT};
  }

  @media screen and (min-width: 834px) and (max-width: 1279px) {
    padding: 60px 0px;
  }

  @media screen and (max-width: 834px) {
    padding: 40px 0px;
  }
`;
