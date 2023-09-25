import styled from "styled-components";
import { Button, COLORS } from "../../variables";

export const Background = styled.div`
  background-image: linear-gradient(
      rgba(255, 255, 255, 0),
      rgba(162, 89, 255, 1)
    ),
    url(${(props) => props.url});
  background-size: cover;
  background-position: center;
  height: 640px;
  padding: 60px 0;
`;

export const Preload = styled.div`
  background-image: linear-gradient(
    rgba(255, 255, 255, 0),
    rgba(162, 89, 255, 1)
  );
  height: 640px;
`;

export const ContentRow = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  flex-direction: column;
  row-gap: 30px;
`;

export const Artist = styled.div`
  display: flex;
  width: max-content;
  column-gap: 12px;
  align-items: center;
  background-color: #3b3b3b;
  border-radius: 20px;
  padding: 11px 20px 11px 20px;
  transition: 0.35s;

  &:hover {
    transform: scale(0.95);
    cursor: pointer;
  }
`;

export const Icon = styled.img`
  border-radius: 120px;
  width: 24px;
  height: 24px;
`;

export const Btn = styled.button`
  ${Button}
  max-width: max-content;
  padding: 0 40px;
  height: 60px;
  background-color: ${COLORS.white};
  span {
    color: ${COLORS.black};
  }
  svg,
  path {
    fill: ${COLORS.purple};
  }
`;
