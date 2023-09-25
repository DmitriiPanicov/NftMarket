import styled from "styled-components";
import { ReactSVG } from "react-svg";
import { COLORS } from "../../variables";

export const BtnStyle = styled.button`
  display: flex;
  column-gap: 13px;
  padding: 0px;
  border: 1px solid rgba(162, 89, 255, 1);
  border-radius: 20px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  align-items: center;
  justify-content: center;
  transition: 0.35s;
  cursor: pointer;

  background-color: ${({ btnColor }) =>
    btnColor === "purple"
      ? `${COLORS.purple}`
      : btnColor === "white"
      ? `${COLORS.white}`
      : "inherit"};

  &:hover {
    transform: scale(0.95);
  }

  span {
    font-family: "Work Sans";
    color: ${({ btnColor }) =>
      btnColor === "white" ? `${COLORS.black}` : `${COLORS.white}`};
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
  }
`;

export const SVG = styled(ReactSVG)`
  svg,
  path {
    width: 26px;
    height: 26px;
    fill: ${({ btnColor }) =>
      btnColor === "purple" ? "white" : "rgba(162, 89, 255, 1)"};
  }
`;
