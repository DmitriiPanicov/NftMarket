import styled from "styled-components";
import { Button, COLORS } from "../../variables";

export const Wrap = styled.div`
  padding: 40px 0px 80px;
  margin: 0 0 80px;
  display: flex;
  column-gap: 80px;
  background-color: ${COLORS.grayMiddle};
  padding: 60px;
  border-radius: 20px;
  @media screen and (min-width: 834px) and (max-width: 1279px) {
    padding: 40px 30px;
    border-radius: 20px;
    column-gap: 30px;
  }
  @media screen and (max-width: 834px) {
    padding: 0px;
    row-gap: 30px;
    flex-direction: column;
    align-items: center;
    background-color: ${COLORS.inherit};
  }
`;

export const Image = styled.img`
  border-radius: 20px;
  width: 50%;
  object-fit: cover;
  object-position: center;
  @media screen and (min-width: 834px) and (max-width: 1279px) {
  }
  @media screen and (max-width: 834px) {
    width: 70vw;
    height: 20vh;
  }
  @media screen and (max-width: 480px) {
    width: 100vw;
    height: 20vh;
  }
`;

export const SubscribeBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media screen and (max-width: 834px) {
    align-items: center;
    text-align: center;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  margin-bottom: 40px;
  max-width: 70%;
`;

export const SignUpForm = styled.form`
  display: flex;
  flex-direction: column;
  row-gap: 40px;
  width: 100%;
`;

export const InputField = styled.div`
  position: relative;
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
