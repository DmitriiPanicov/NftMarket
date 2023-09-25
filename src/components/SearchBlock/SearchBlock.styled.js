import styled from "styled-components";

export const SearchForm = styled.div`
  position: relative;

  input {
    width: 100%;
    height: 60px;
    border: 1px solid #3b3b3b;
    border-radius: 20px;
    background-color: inherit;
    outline: none;
    padding: 18px 70px 18px 20px;

    font-family: "Work Sans";
    font-weight: 400;
    font-size: 16px;
    color: #858584;
    &::placeholder {
      font-family: "Work Sans";
      font-weight: 400;
      font-size: 16px;
      color: #858584;
    }
  }
`;

export const SearchSvg = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 18px;
  right: 20px;
`;
export const CrossSvg = styled.img`
  width: 24px;
  height: 24px;
  position: absolute;
  top: 18px;
  right: 50px;
  cursor: pointer;
`;
