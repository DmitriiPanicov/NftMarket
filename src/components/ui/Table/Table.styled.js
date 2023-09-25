import styled from "styled-components";

export const TableStyled = styled.div`
  padding: 40px 0px;

  @media screen and (min-width: 834px) and (max-width: 1279px) {
  }
`;

export const TableHead = styled.div`
  display: flex;
  margin-bottom: 20px;
  height: 46px;
  border: 1px solid #3b3b3b;
  border-radius: 20px;
  padding: 0px 20px;
  align-items: center;
  @media screen and (min-width: 834px) and (max-width: 1279px) {
  }
  @media screen and (max-width: 516px) {
    justify-content: space-around;
  }
`;

const TableHeadText = styled.span`
  font-family: "Space Mono";
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  color: #858584;
  @media screen and (min-width: 834px) and (max-width: 1279px) {
  }
  
`;

export const CaptionIndex = styled(TableHeadText)`
  margin-right: 40px;
  @media screen and (max-width: 720px) {
    display: none;
  }
`;
export const CaptionArtist = styled(TableHeadText)`
  flex-basis: 50%;
`;
export const CaptionChange = styled(TableHeadText)`
  flex-basis: 150px;
  @media screen and (max-width: 720px) {
    flex-basis: 120px;
  }
`;
export const CaptionsSold = styled(TableHeadText)`
  flex-basis: 150px;
  @media screen and (max-width: 720px) {
    display: none;
  }
`;
export const CaptionVolume = styled(TableHeadText)`
  flex-basis: 150px;
  @media screen and (max-width: 720px) {
    flex-basis: 120px;
  }
  @media screen and (max-width: 516px) {
    display:none;  
  }
`;

export const TableBody = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
`;

export const ArtistRow = styled.div`
  display: flex;
  background-color: #3b3b3b;
  border-radius: 20px;
  padding: 12px 20px;
  align-items: center;
  transition: 0.35s;

  &:hover {
    transform: translateY(-10px);
    cursor: pointer;
    -webkit-box-shadow: -15px 15px 10px 1px rgba(162, 89, 255, 1);
    -moz-box-shadow: -15px 15px 10px 1px rgba(162, 89, 255, 1);
    box-shadow: -15px 15px 10px 1px rgba(162, 89, 255, 1);
  }
  @media screen and (max-width: 516px) {
    justify-content: space-between;
  }
`;

export const Index = styled.span`
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 140%;
  color: #fff;
  width: 30px;
  height: 30px;
  background-color: #2b2b2b;
  border-radius: 20px;
  text-align: center;
  margin-right: 20px;
  @media screen and (max-width: 1279px) {
    font-size: 14px;
    width: 20px;
    height: 20px;
  }
  @media screen and (max-width: 720px) {
    display: none;
  }
`;

export const Icon = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 100px;
  margin-right: 20px;
  @media screen and (max-width: 1279px) {
    width: 30px;
    height: 30px;
  }
`;

export const Name = styled.span`
  font-family: "Work Sans";
  font-style: normal;
  font-weight: 600;
  font-size: 22px;
  line-height: 140%;
  color: #fff;
  flex-basis: 42%;
  @media screen and (max-width: 1279px) {
    font-size: 18px;
  }
`;

const Text = styled.span`
  font-family: "Space Mono";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 140%;
  flex-basis: 150px;
`;

export const Change = styled(Text)`
  color: ${({ change_in_sales }) => (change_in_sales >= 0 ? "#00AC4F" : "red")};
  @media screen and (max-width: 720px) {
    flex-basis: 120px;
  }
`;

export const Sold = styled(Text)`
  color: #fff;
  @media screen and (max-width: 720px) {
    display: none;
  }
`;
export const Value = styled(Text)`
  color: #fff;
  @media screen and (max-width: 720px) {
    flex-basis: 120px;
  }
  @media screen and (max-width: 516px) {
    display:none;  
  }
`;
