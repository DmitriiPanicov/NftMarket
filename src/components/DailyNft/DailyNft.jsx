import React from "react";
import { ReactSVG } from "react-svg";
import { useNavigate } from "react-router-dom";

import {
  useGetArtistsQuery,
  useGetNftsQuery,
} from "../../redux/slicesApi/fetchData";

import { Container, H1, Text } from "../../globalStyles";
import Eye from "../../assets/img/btnIcons/Eye.svg";
import {
  Background,
  Preload,
  Artist,
  ContentRow,
  Icon,
  Btn,
} from "./DailyNft.styled";

const DailyNft = () => {
  const DAILY_NFT_ID = 0;
  const navigate = useNavigate();

  const { data: artistsData, isSuccess: artistsIsLoaded } =
    useGetArtistsQuery();
  const { data: nftsData, isSuccess: nftsIsLoaded } = useGetNftsQuery();

  const currentNft = nftsIsLoaded
    ? nftsData.record.filter((item) => item.id === DAILY_NFT_ID)[0]
    : "";
  const currentArtist = artistsIsLoaded
    ? artistsData.record.filter((item) => item.id === currentNft.artistId)[0]
    : "";

  const artistClick = (id) => {
    navigate(`/artist/${id}`);
    window.scroll(0, 0);
  };

  const nftClick = (id) => {
    navigate(`/nft/${id}`);
    window.scroll(0, 0);
  };

  return (
    <>
      {nftsIsLoaded && artistsIsLoaded ? (
        <Background url={currentNft.imageUrl}>
          <Container>
            <ContentRow>
              <Artist onClick={() => artistClick(currentArtist.id)}>
                <Icon src={currentArtist.imageUrl} />
                <Text>{currentArtist.name}</Text>
              </Artist>
              <H1>{currentNft.title}</H1>
              <Btn onClick={() => nftClick(currentNft.id)}>
                <ReactSVG src={Eye} />
                <span>See NFT</span>
              </Btn>
            </ContentRow>
          </Container>
        </Background>
      ) : (
        <Preload />
      )}
    </>
  );
};

export default DailyNft;
