import React from "react";
import { Link } from "react-router-dom";
import { Container, H1, Text } from "../../globalStyles.js";
import {
  Wrap,
  TextWrap,
  List,
  ListItem,
  Nft,
  Amount,
  Signature,
  Btn,
} from "./Description.styled.js";

import rocketLaunch from "../../assets/img/btnIcons/RocketLaunch.svg";
import nftGif from "../../assets/img/Image-nft.gif";
import { ReactSVG } from "react-svg";

function Description() {
  return (
    <Container>
      <Wrap>
        <TextWrap>
          <H1>Discover Digital Art & Collect NFTs</H1>
          <Text>
            NFT Marketplace Created With AI. Collect, Buy And
            Sell Art From More Than 20k NFT Artists.
          </Text>
        </TextWrap>
        <Link to="/sign-up" style={{ display: "contents" }}>
          <Btn>
            <ReactSVG src={rocketLaunch} />
            <span>Get Started</span>
          </Btn>
        </Link>
        <List>
          <ListItem>
            <Amount>240k+</Amount>
            <Signature>Total Sale</Signature>
          </ListItem>
          <ListItem>
            <Amount>100k+</Amount>
            <Signature>Auctions</Signature>
          </ListItem>
          <ListItem>
            <Amount>240k+</Amount>
            <Signature>Artists</Signature>
          </ListItem>
        </List>
        <Nft src={nftGif} alt="nftGif" />
      </Wrap>
    </Container>
  );
}

export default Description;
