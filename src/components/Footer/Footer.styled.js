import styled from "styled-components";
import { COLORS } from "../../variables";
import { ReactSVG } from "react-svg";

export const FooterSection = styled.footer`
  background-color: rgba(59, 59, 59, 1);
  padding: 40px 0px 40px;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 30px;
`;
export const SubRow = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  max-width: 350px;
  padding: 0 20px 0 0;
`;

export const Logo = styled.div`
  display: flex;
  column-gap: 10px;
`;

export const HeaderText = styled.p`
  font-family: "Space Mono";
  font-weight: 700;
  line-height: 160%;
  font-size: 22px;
  color: ${COLORS.white};

  @media screen and (min-width: 834px) and (max-width: 1279px) {
    font-size: 20px;
  }
  @media screen and (max-width: 834px) {
    font-size: 18px;
  }
`;

export const LogoText = styled(HeaderText)`
  cursor: pointer;
`;

export const Text = styled.span`
  font-family: "Work Sans";
  font-weight: 400;
  font-size: 16px;
  line-height: 160%;
  color: ${COLORS.grayLight};
  display: inline-block;
  @media screen and (min-width: 834px) and (max-width: 1279px) {
    font-size: 14px;
  }
  @media screen and (max-width: 834px) {
    font-size: 12px;
  }
`;

export const NavItem = styled.div`
  span {
    cursor: pointer;
  }
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

export const Hr = styled.hr`
  border-top: 1px solid ${COLORS.grayLight};
  margin: 30px 0 20px;
`;

export const GlobeLink = styled.a`
  display: contents;
`;
