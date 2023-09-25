import styled from "styled-components";
import { COLORS, Button, HEADER_HEIGHT } from "../../variables";

export const Wrap = styled.div`
  display: flex;
  column-gap: 60px;
  width: 100%;
  @media screen and (min-width: 834px) and (max-width: 1279px) {
    column-gap: 40px;
    margin: 0 auto;
  }
  @media screen and (max-width: 834px) {
    column-gap: 0px;
    flex-direction: column;
  }
  @media screen and (max-width: 960px) {
    margin-top: ${HEADER_HEIGHT};
  }
`;

export const Image = styled.img`
  width: 50%;
  object-fit: cover;
  max-height: 700px;
  @media screen and (max-width: 834px) {
    width: 100%;
    height: 232px;
  }
`;

export const SignUpBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 40px 0;
  @media screen and (max-width: 834px) {
    align-items: center;
    text-align: center;
  }
`;

export const Header = styled.div`
  margin-bottom: 40px;
  max-width: 70%;
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  width: 60%;
`;

export const InputField = styled.div`
  position: relative;

  svg,
  path {
    position: absolute;
    top: 13px;
    left: 20px;
    width: 20px;
    height: 20px;
    background-size: cover;
    background: url(${(prop) => prop.src}) no-repeat;
    fill: ${COLORS.purple};
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 46px;
  padding: 12px 20px 12px 52px;
  border-radius: 20px;
  outline: none;
  background-color: ${COLORS.white};

  &:focus {
    border: 2px solid ${COLORS.purple};
  }

  &::placeholder {
    font-family: "Work Sans";
    font-size: 16px;
    font-weight: 400;
    line-height: 140%;
    color: ${COLORS.grayLight};
  }
`;
export const ErrorMassage = styled.span`
  position: absolute;
  left: 10px;
  top: 100%;
  font-family: "Work Sans";
  font-size: 16px;
  font-weight: 400;
  line-height: 140%;
  color: red;
`;
export const Btn = styled.button`
  ${Button}
  background-color: ${COLORS.purple};
  span {
    color: ${COLORS.white};
  }
`;
