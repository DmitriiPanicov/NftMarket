import styled from "styled-components";
import { Link } from "react-router-dom";
import { COLORS } from "../../variables";

export const Wrap = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 50px;
  width: 100%;
  background-color: ${COLORS.inherit};
  height: 100px;
  @media screen and (max-width: 960px) {
    position: fixed;
    z-index: 10;
    height: 60px;
    background-color: ${COLORS.purple};
    opacity: 0.95;
    top: 0;
  }
`;

export const Logo = styled(Link)`
  display: flex;
  align-items: center;
  column-gap: 20px;

  @media screen and (max-width: 960px) {
    svg,
    path {
      fill: ${COLORS.white};
    }
  }
`;

export const Nav = styled.nav`
  display: flex;
  column-gap: 10px;
  height: 60px;
  align-items: center;
  transition: 0.5s;

  @media screen and (max-width: 960px) {
    flex-direction: column;
    position: absolute;
    z-index: 10;
    width: 100%;
    height: 190px;
    top: 60px;
    left: ${({ menuClicked }) => (menuClicked ? 0 : "-100%")};
    background-color: rgba(162, 89, 255, 1);
  }
`;

export const NavItem = styled(Link)`
  display: flex;
  column-gap: 10px;
  padding: 12px 20px 12px 20px;
  border-radius: 18px;
  transition: 0.35s;
  &:hover {
    transform: scale(0.95);
    background-color: rgba(162, 89, 255, 1);
  }
  svg,
  path {
    width: 20px;
    height: 20px;
  }
`;
export const NavText = styled.span`
  font-family: "Space Mono";
  color: #fff;
  font-size: 16px;
  line-height: 140%;
  font-weight: 600;
`;

export const LogoText = styled(NavText)`
  font-size: 22px;
  @media screen and (max-width: 960px) {
    font-size: 18px;
  }
`;

export const MobileMenuIcon = styled.div`
  display: none;
  svg,
  path {
    width: 40px;
    height: 40px;
    color: ${COLORS.white};
  }

  @media screen and (max-width: 960px) {
    display: block;
  }
`;
