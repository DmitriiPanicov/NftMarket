import React from "react";
import { useParams } from "react-router-dom";
import { toInteger } from "lodash";
import AppContext from "../../context";
import GridOfCards from "../../components/ui/gridOfCards/GridOfCards";
import {
  Container,
  H1,
  H2,
  Text,
  Signature,
  GlobeLink,
} from "../../globalStyles";
import YoutuveLogo from "../../assets/img/btnIcons/YoutubeLogo.svg";
import InstagramLogo from "../../assets/img/btnIcons/InstagramLogo.svg";
import DiscordLogo from "../../assets/img/btnIcons/DiscordLogo.svg";
import TwitterLogo from "../../assets/img/btnIcons/TwitterLogo.svg";
import Wallet from "../../assets/img/btnIcons/Copy.svg";
import Plus from "../../assets/img/btnIcons/Plus.svg";
import BackgrounImage from "../../assets/img/ArtistsBackground.png";
import {
  Info,
  Wrap,
  PageHeader,
  Header,
  ArtistIcon,
  Buttons,
  Cards,
  BtnWallet,
  BtnFollow,
  TextBlock,
  SocialRow,
  SocialSvg,
} from "./Artist.styled";
import { ReactSVG } from "react-svg";
import Loader from "../../components/ui/loader/Loader";

function Artist() {
  const { id } = useParams();
  const { artists, nftCards, nftsIsLoaded, artistsIsLoaded } =
    React.useContext(AppContext);

  const currentArtist = artists.filter(
    (artist) => artist.id === toInteger(id)
  )[0];

  const filterNftCards = () => {
    return nftCards.filter((nftCard) => nftCard.artistId === toInteger(id));
  };

  const filtredCards = filterNftCards();

  return (
    <Wrap>
      {nftsIsLoaded && artistsIsLoaded ? (
        <>
          <PageHeader url={BackgrounImage}>
            <Container>
              <ArtistIcon src={currentArtist.imageUrl} />
            </Container>
          </PageHeader>
          <Container>
            <Info>
              <Header>
                <H1>{currentArtist.name}</H1>
                <Buttons>
                  <BtnWallet data-tooltip="Functionality under development">
                    <ReactSVG src={Wallet}></ReactSVG>
                    <span>0xc0E3...B79C</span>
                  </BtnWallet>
                  <BtnFollow data-tooltip="Functionality under development">
                    <ReactSVG src={Plus}></ReactSVG>
                    <span>Follow</span>
                  </BtnFollow>
                </Buttons>
              </Header>
              <TextBlock>
                <Signature>Bio</Signature>
                <Text>{currentArtist.bio}</Text>
              </TextBlock>
              <TextBlock>
                <Signature>Links</Signature>
                <SocialRow>
                  <GlobeLink href="https://www.youtube.com/">
                    <SocialSvg src={YoutuveLogo} />
                  </GlobeLink>
                  <GlobeLink href="https://discord.com/">
                    <SocialSvg src={DiscordLogo} />
                  </GlobeLink>
                  <GlobeLink href="https://twitter.com/?lang=ru">
                    <SocialSvg src={TwitterLogo} />
                  </GlobeLink>
                  <GlobeLink href="https://www.instagram.com/">
                    <SocialSvg src={InstagramLogo} />
                  </GlobeLink>
                </SocialRow>
              </TextBlock>
            </Info>
            <Cards>
              <H2>Artist's NFTs</H2>
              {filtredCards.length ? (
                <GridOfCards cards={filtredCards}></GridOfCards>
              ) : (
                <Text>No active nfts yet</Text>
              )}
            </Cards>
          </Container>
        </>
      ) : (
        <Loader />
      )}
    </Wrap>
  );
}

export default Artist;
