import React from "react";
import AppContext from "../../context";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import rocketLaunch from "../../assets/img/btnIcons/RocketLaunch.svg";
import MyLoader from "./Skeleton";
import {
  Btn,
  MobileBtn,
  Wrap,
  Header,
  TextBlock,
  Grid,
  ArtistCard,
  Icon,
  Info,
  Name,
  AdditionalInfo,
  Subscription,
  Value,
  Index,
} from "./TopArtists.styled";
import { Container, H2, Text } from "../../globalStyles";

const TopArtists = () => {
  const ARTISTS_IN_GRID = 12;
  const { artists, artistsIsLoaded } = React.useContext(AppContext);
  const navigate = useNavigate();
  const btnClick = () => {
    navigate(`/ranking`);
    window.scroll(0, 0);
  };
  const artistClick = (id) => {
    navigate(`/artist/${id}`)
    window.scroll(0, 0);
  };

  return (
    <Container>
      <Wrap>
        <Header>
          <TextBlock>
            <H2>Top creators</H2>
            <Text>Checkout Top Rated Creators On The NFT Marketplace</Text>
          </TextBlock>
          <Btn onClick={() => btnClick()}>
            <ReactSVG src={rocketLaunch} />
            <span>View Rankings</span>
          </Btn>
        </Header>
        <Grid>
          {artistsIsLoaded
            ? artists.slice(0, ARTISTS_IN_GRID).map((artist, index) => (
                <ArtistCard
                  key={artist.id}
                  onClick={() => artistClick(artist.id)}
                >
                  <Icon src={artist.imageUrl} alt="icon" />
                  <Info>
                    <Name>{artist.name}</Name>
                    <AdditionalInfo>
                      <Subscription>Total Sales:</Subscription>
                      <Value>{artist.volume} ETH</Value>
                    </AdditionalInfo>
                  </Info>
                  <Index>{index + 1}</Index>
                </ArtistCard>
              ))
            : [...Array(12)].map((_, index) => <MyLoader key={index} />)}
        </Grid>
        <MobileBtn onClick={() => btnClick()}>
          <ReactSVG src={rocketLaunch} />
          <span>View Rankings</span>
        </MobileBtn>
      </Wrap>
    </Container>
  );
};

export default TopArtists;
