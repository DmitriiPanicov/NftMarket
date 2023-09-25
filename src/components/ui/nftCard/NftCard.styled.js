import styled from "styled-components";
import { COLORS } from "../../../variables";

export const Card = styled.div`
  width: 100%;
  margin-bottom: 20px;
  border-radius: 20px 20px 20px 20px;
  transition: 0.35s;
  &:hover {
    transform: scale(0.95);
    cursor: pointer;
    box-shadow: 0px 0px 15px 20px rgba(162, 89, 255, 1);
    -webkit-box-shadow: 0px 0px 15px 20px rgba(162, 89, 255, 1);
    -moz-box-shadow: 0px 0px 15px 20px rgba(162, 89, 255, 1);
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 20px 20px 0px 0px;
`;

export const InfoBlock = styled.div`
  padding: 20px 30px 25px 30px;
  background-color: ${COLORS.grayMiddle};
  border-radius: 0px 0px 20px 20px;
`;

export const CardTitle = styled.p`
  font-family: "Work Sans";
  font-weight: 600;
  line-height: 140%;
  color: ${COLORS.white};
  font-size: 1em;
  margin-bottom: 5px;
`;

export const ArtistBlock = styled.div`
  display: flex;
  column-gap: 12px;
  margin-bottom: 27px;
`;

export const Icon = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 120px;
`;
export const Name = styled.p`
  font-family: "Space Mono";
  font-weight: 400;
  font-size: 1em;
  line-height: 140%;
  color: ${COLORS.white};
`;

export const AdditionalInfoBlock = styled.div`
  display: flex;
  justify-content: space-between;
  font-family: "Space Mono";

  font-weight: 400;
  div p:nth-child(1) {
    font-size: 12px;
    line-height: 110%;
    color: ${COLORS.grayLight};
  }
  div p:nth-child(2) {
    font-size: 16px;
    line-height: 140%;
    color: ${COLORS.white};
  }
`;
