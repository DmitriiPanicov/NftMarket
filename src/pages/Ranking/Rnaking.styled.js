import styled from "styled-components";
import { HEADER_HEIGHT } from "../../variables";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  padding: 80px 0px;

  @media screen and (min-width: 834px) and (max-width: 1279px) {
    padding: 40px 0px;
  }

  @media screen and (max-width: 834px) {
    padding: 30px 0px;
  }
  @media screen and (max-width: 960px) {
    margin-top: ${HEADER_HEIGHT};
  }
`;

export const SortCategories = styled.div`
  display: flex;
  height: 60px;
`;

export const SortList = styled.span`
  display: inline-block;
  text-align: center;
  width: 25%;
  padding: 14px 0px;
  transition: 0.35s;
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 140%;
  color: #858584;

  &:hover {
    cursor: pointer;
    color: #8584849c;
  }
  &.active {
    color: #fff;
    border-bottom: 1px solid #fff;
  }

  @media screen and (max-width: 1279px) {
    font-size: 18px;
  }
  @media screen and (max-width: 720px) {
    width: 33.3%;
    &:nth-child(3) {
      display: none;
    }
  }
  @media screen and (max-width: 516px) {
    width: 50%;
    &:nth-child(4) {
      display: none;
    }
  }
`;
