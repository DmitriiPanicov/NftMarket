import styled from "styled-components";
import { COLORS, Button, HEADER_HEIGHT } from "../../variables";

export const Wrap = styled.div`
  padding: 60px 0;
  min-height: 100vh;
  @media screen and (max-width: 960px) {
    margin-top: ${HEADER_HEIGHT};
  }
`;

export const InfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  padding: 40px 0px;
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const MainImage = styled.img`
  max-height: 770px;
  background-size: cover;
  background-position: center;
  margin-left: auto;
  margin-right: auto;
  border-radius: 25px;
`;

export const Artist = styled.div`
  display: flex;
  width: max-content;
  column-gap: 12px;
  align-items: center;
  cursor: pointer;
  transition: 0.35s;
  border-radius: 25px;
  padding: 10px 10px 10px 0;
  &:hover {
    padding: 10px;
    background-color: ${COLORS.purple};
  }
`;

export const ArtistIcon = styled.img`
  width: 28px;
  height: 28px;
  border-radius: 20px;
`;
export const ArtistName = styled.span`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 140%;
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

export const LinkBlock = styled.div`
  display: flex;
  width: max-content;
  column-gap: 10px;
  align-items: center;
  cursor: pointer;
  transition: 0.35s;
  border-radius: 25px;
  padding: 10px 10px 10px 0;
  &:hover {
    padding: 10px;
    background-color: ${COLORS.purple};
  }
`;

export const LinkIcon = styled.img`
  width: 32px;
  height: 32px;
`;

export const CategoriesRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  column-gap: 20px;
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
  cursor: pointer;

  &:hover {
    color: ${COLORS.white};
    background-color: ${COLORS.purple};
  }

  @media screen and (max-width: 1279px) {
    font-size: 18px;
  }
`;

export const ArtistCards = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 74px;
  padding: 40px 0 0 0;
  position: relative;
`;

export const Btn = styled.button`
  ${Button}
  position: absolute;
  right: 0;
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
  @media screen and (max-width: 835px) {
    position: static;
  }
`;
