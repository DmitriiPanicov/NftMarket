import { ReactSVG } from "react-svg";
import styled from "styled-components";
import { Button, COLORS, HEADER_HEIGHT } from "../../variables";

export const Wrap = styled.div`
  min-height: 100vh;
  @media screen and (max-width: 960px) {
    margin-top: ${HEADER_HEIGHT};
  }
`;

export const Info = styled.div`
  padding: 90px 0px 40px;
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  @media screen and (max-width: 1279px) {
    padding: 80px 0px 30px;
  }
`;

export const PageHeader = styled.div`
  height: 320px;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(162, 89, 255, 1)
    ),
    url(${(props) => props.url});
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
  @media screen and (min-width: 834px) and (max-width: 1279px) {
    height: 280px;
  }
  @media screen and (max-width: 834px) {
    height: 250px;
  }
  @media screen and (max-width: 380px) {
    height: 210px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 834px) {
    flex-direction: column;
    row-gap: 20px;
  }
`;

export const ArtistIcon = styled.img`
  position: absolute;
  width: 120px;
  height: 120px;
  border-radius: 20px;
  top: 250px;
  @media screen and (min-width: 834px) and (max-width: 1279px) {
    top: 210px;
  }
  @media screen and (max-width: 834px) {
    top: 146px;
    left: calc(50% - 60px);
  }
`;

export const Buttons = styled.div`
  display: flex;
  column-gap: 20px;
`;

export const Cards = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 30px;
  padding: 20px 0;
`;

export const TextBlock = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

export const SocialRow = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const SocialSvg = styled(ReactSVG)`
  svg,
  path {
    fill: ${COLORS.grayLight};
    width: 32px;
    height: 32px;
    @media screen and (max-width: 1279px) {
      width: 24px;
      height: 24px;
    }
  }
`;

export const BtnWallet = styled.button`
  ${Button}
  max-width: max-content;
  background-color: ${COLORS.purple};
  svg,
  path {
    fill: ${COLORS.white};
  }
  span {
    color: ${COLORS.white};
  }
  &[data-tooltip] {
    position: relative;
  }
  &[data-tooltip]::after {
    content: attr(data-tooltip);
    position: absolute;
    left: 0;
    top: 0;
    background: ${COLORS.grayMiddle};
    color: ${COLORS.white};
    padding: 10px;
    border-radius: 20px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    pointer-events: none;
    opacity: 0;
    transition: 0.3s;
  }
  &[data-tooltip]:hover::after {
    opacity: 1;
    top: -4em;
  }
`;
export const BtnFollow = styled(BtnWallet)`
  background-color: ${COLORS.inherit};
  svg,
  path {
    fill: ${COLORS.purple};
  }
  span {
    color: ${COLORS.white};
  }
`;
