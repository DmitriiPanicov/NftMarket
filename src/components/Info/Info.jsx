import React from "react";
import { Container, H2, H3, Text } from "../../globalStyles";
import {
  Wrap,
  Header,
  CardsRow,
  Card,
  Description,
  DescriptionText,
} from "./Info.styled";
import { ReactSVG } from "react-svg";

const Info = () => {
  const Info = [
    {
      imageUrl: "./svg/info/Start-Earning-Icon.svg",
      title: "Start Earning",
      text: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
    },
    {
      imageUrl: "./svg/info/Setup-Wallet-Icon.svg",
      title: "Setup wallet",
      text: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
    },
    {
      imageUrl: "./svg/info/Create-Collection-Icon.svg",
      title: "Create Collection",
      text: "Upload your work and setup your collection. Add a DescriptionText, social links and floor price.",
    },
  ];

  return (
    <Container>
      <Wrap>
        <Header>
          <H2>How it works</H2>
          <Text>Find out how to get started</Text>
        </Header>
        <CardsRow>
          {Info.map((item, index) => (
            <Card key={index}>
              <ReactSVG src={item.imageUrl} />
              <Description>
                <H3>{item.title}</H3>
                <DescriptionText>{item.text}</DescriptionText>
              </Description>
            </Card>
          ))}
        </CardsRow>
      </Wrap>
    </Container>
  );
};

export default Info;
