import React from "react";
import { ReactSVG } from "react-svg";
import { useNavigate } from "react-router-dom";
import {
  FooterSection,
  HeaderText,
  Text,
  Row,
  SubRow,
  Logo,
  SocialRow,
  GlobeLink,
  SocialSvg,
  NavItem,
  Hr,
  LogoText,
} from "./Footer.styled";
import { Container } from "../../globalStyles";
import LogoSvg from "../../assets/img/Logo.svg";
import YoutubeSvg from "../../assets/img/btnIcons/YoutubeLogo.svg";
import InstagramSvg from "../../assets/img/btnIcons/InstagramLogo.svg";
import DiscordSvg from "../../assets/img/btnIcons/DiscordLogo.svg";
import TwitterSvg from "../../assets/img/btnIcons/TwitterLogo.svg";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <FooterSection>
      <Container>
        <Row>
          <SubRow>
            <Logo
              onClick={() => {
                navigate(`/`);
                window.scrollTo(0, 0);
              }}
            >
              <ReactSVG src={LogoSvg} />
              <LogoText>NFT'S STORE</LogoText>
            </Logo>
            <Text>NFT marketplace UI created with Anima for Figma.</Text>
            <Text>Join our community</Text>
            <SocialRow>
              <GlobeLink href="https://www.youtube.com/">
                <SocialSvg src={YoutubeSvg} />
              </GlobeLink>
              <GlobeLink href="https://discord.com/">
                <SocialSvg src={DiscordSvg} />
              </GlobeLink>
              <GlobeLink href="https://twitter.com/?lang=ru">
                <SocialSvg src={TwitterSvg} />
              </GlobeLink>
              <GlobeLink href="https://www.instagram.com/">
                <SocialSvg src={InstagramSvg} />
              </GlobeLink>
            </SocialRow>
          </SubRow>
          <SubRow>
            <HeaderText>Join our weekly digest</HeaderText>
            <Text>
              Get exclusive promotions & updates straight to your inbox.
            </Text>
            <NavItem>
              <Text
                onClick={() => {
                  navigate(`/sign-up`);
                  window.scrollTo(0, 0);
                }}
              >
                Sign Up
              </Text>
            </NavItem>
          </SubRow>
          <SubRow>
            <HeaderText>Explore</HeaderText>
            <NavItem>
              <Text
                onClick={() => {
                  navigate(`/marketplace`);
                  window.scrollTo(0, 0);
                }}
              >
                Marketplace
              </Text>
            </NavItem>
            <NavItem>
              <Text
                onClick={() => {
                  navigate(`/ranking`);
                  window.scrollTo(0, 0);
                }}
              >
                Rankings
              </Text>
            </NavItem>
            <NavItem>
              <Text
                onClick={() => {
                  navigate(`/wallet`);
                  window.scrollTo(0, 0);
                }}
              >
                Connect a wallet
              </Text>
            </NavItem>
          </SubRow>
        </Row>
        <Hr />
        <Text>Ⓒ NFT Market. Use this template freely.</Text>
      </Container>
    </FooterSection>
  );
};

export default Footer;
