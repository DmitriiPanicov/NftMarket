import React from "react";
import { toInteger } from "lodash";
import { ReactSVG } from "react-svg";
import { useParams } from "react-router-dom";

import Loader from "../../components/ui/loader/Loader";
import { useGetNftsQuery } from "../../redux/slicesApi/fetchData";
import { useGetArtistsQuery } from "../../redux/slicesApi/fetchData";
import GridOfCards from "../../components/ui/gridOfCards/GridOfCards";

import Plus from "../../assets/img/btnIcons/Plus.svg";
import Wallet from "../../assets/img/btnIcons/Copy.svg";
import TwitterLogo from "../../assets/img/btnIcons/TwitterLogo.svg";
import YoutuveLogo from "../../assets/img/btnIcons/YoutubeLogo.svg";
import DiscordLogo from "../../assets/img/btnIcons/DiscordLogo.svg";
import BackgrounImage from "../../assets/img/ArtistsBackground.png";
import InstagramLogo from "../../assets/img/btnIcons/InstagramLogo.svg";
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
import {
  Container,
  H1,
  H2,
  Text,
  Signature,
  GlobeLink,
} from "../../globalStyles";


function Artist() {
  const { id } = useParams();
  const { data: artistsData, isSuccess: artistsIsLoaded } =
    useGetArtistsQuery();
  const { data: nftsData, isSuccess: nftsIsLoaded } = useGetNftsQuery();

  const currentArtist = artistsIsLoaded
    ? artistsData.record.filter((artist) => artist.id === toInteger(id))[0]
    : "";

  const filterNftCards = () => {
    return nftsData.record.filter(
      (nftCard) => nftCard.artistId === toInteger(id)
    );
  };

  const filtredCards = nftsIsLoaded ? filterNftCards() : "";

  return (
    <Wrap>
      {artistsIsLoaded && nftsIsLoaded ? (
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
