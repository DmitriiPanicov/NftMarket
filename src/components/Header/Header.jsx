import React from "react";
import { RiCloseLine } from "react-icons/ri";
import { CgMenuLeft } from "react-icons/cg";
import { ReactSVG } from "react-svg";

import {
  Wrap,
  Nav,
  Logo,
  NavItem,
  NavText,
  MobileMenuIcon,
  LogoText,
} from "./Header.styeld";
import logoSvg from "../../assets/img/Logo.svg";
import userSvg from "../../assets/img/User.svg";

function Header() {
  const [menuClicked, setMenuClicked] = React.useState(false);
  const heandlClick = () => {
    setMenuClicked((prev) => !prev);
  };

  return (
    <Wrap>
      <Logo to="/">
        <ReactSVG src={logoSvg} alt="logo" />
        <LogoText>NFT'S STORE</LogoText>
      </Logo>
      <Nav menuClicked={menuClicked} onClick={heandlClick}>
        <NavItem to="/marketplace">
          <NavText>Marketplace</NavText>
        </NavItem>
        <NavItem to="/ranking">
          <NavText>Rankings</NavText>
        </NavItem>
        <NavItem to="/wallet">
          <NavText>Connect a wallet</NavText>
        </NavItem>
        <NavItem to="/sign-up">
          <ReactSVG src={userSvg} alt="userIcon" />
          <NavText>Sign Up</NavText>
        </NavItem>
      </Nav>
      <MobileMenuIcon onClick={heandlClick}>
        {menuClicked ? <RiCloseLine /> : <CgMenuLeft />}
      </MobileMenuIcon>
    </Wrap>
  );
}

export default Header;
