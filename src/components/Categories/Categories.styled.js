import styled from "styled-components";
import { ReactSVG } from "react-svg";

export const Wrap = styled.div`
  padding: 80px 0px 80px;
  display: flex;
  flex-direction: column;
  row-gap: 60px;
  @media screen and (max-width: 1279px) {
    padding: 40px 0px 40px;
    row-gap: 40px;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 30px;
  @media screen and (max-width: 720px) {
    grid-template-columns: 1fr 1fr;
    gap: 15px;
  }
`;

export const Image = styled.img`
  width: 100%;
  filter: blur(1.75px);
  transition: 0.35s;
  &:hover {
    filter: blur(0px);
  }
`;

export const Card = styled.div`
  position: relative;
  cursor: pointer;
`;

export const Caption = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 45px;

  background-color: rgba(59, 59, 59, 1);
  padding-left: 20px;
  border-radius: 0px 0px 20px 20px;
  @media screen and (max-width: 480px) {
    justify-content: center;
    padding: 0;
  }
`;

export const Svg = styled(ReactSVG)`
  svg,
  path {
    position: absolute;
    top: calc(46% - 50px);
    left: calc(50% - 50px);
    width: 100px;
    height: 100px;
  }
`;
