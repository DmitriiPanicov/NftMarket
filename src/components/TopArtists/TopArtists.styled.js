import styled from "styled-components";
import { Button, COLORS } from "../../variables";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  @media screen and (min-width: 834px) and (max-width: 1279px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(6, 100px);
  }
  @media screen and (max-width: 834px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(12, 100px);
    gap: 20px;
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

export const ArtistCard = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  background-color: rgba(59, 59, 59, 1);
  border-radius: 20px;
  align-items: center;
  position: relative;
  transition: 0.35s;

  &:hover {
    transform: scale(0.95);
    cursor: pointer;
  }
  @media screen and (min-width: 834px) and (max-width: 1279px) {
    flex-direction: row;
    align-items: center;
    column-gap: 20px;
  }
  @media screen and (max-width: 834px) {
    flex-direction: row;
    align-items: center;
    column-gap: 20px;
  }
`;

export const Icon = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 100px;
  @media screen and (max-width: 1279px) {
    width: 60px;
    height: 60px;
  }
`;

export const Info = styled.div`
  flex-direction: column;
  row-gap: 5px;
  align-items: center;
  @media screen and (min-width: 834px) and (max-width: 1279px) {
    flex-direction: column;
    align-items: flex-start;
  }
  @media screen and (max-width: 834px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Name = styled.span`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 140%;
  color: #fff;
  @media screen and (max-width: 834px) {
    font-size: 18px;
  }
`;
export const AdditionalInfo = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const Subscription = styled.span`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #858584;
`;
export const Value = styled.span`
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #fff;
`;

export const Index = styled.div`
  position: absolute;
  left: 20px;
  top: 20px;
  border-radius: 100px;
  width: 30px;
  height: 30px;
  background-color: rgba(43, 43, 43, 1);
  text-align: center;
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 30px;
  color: #858584;
  @media screen and (max-width: 1279px) {
    left: 13px;
    top: 13px;
  }
`;

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

export const Btn = styled.button`
  ${Button}
  width: 247px;
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
