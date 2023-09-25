import React from "react";
import AppContext from "../../context";
import { useParams, useNavigate } from "react-router-dom";
import { toInteger } from "lodash";
import { ReactSVG } from "react-svg";
import GridOfCards from "../../components/ui/gridOfCards/GridOfCards";
import Globe from "../../assets/img/btnIcons/Globe.svg";
import ArrowRight from "../../assets/img/btnIcons/ArrowRight.svg";
import {
  Wrap,
  MainImage,
  InfoWrap,
  TextBlock,
  Artist,
  ArtistIcon,
  ArtistName,
  LinkBlock,
  LinkIcon,
  CategoriesRow,
  Category,
  ArtistCards,
  Btn,
} from "./Nft.styled";
import {
  Container,
  H1,
  H2,
  Text,
  Signature,
  GlobeLink,
} from "../../globalStyles";
import Loader from "../../components/ui/loader/Loader";

function Nft() {
  const { id } = useParams();
  const navigate = useNavigate();
  const {
    artists,
    nftCards,
    categories,
    nftsIsLoaded,
    artistsIsLoaded,
    categoriesIsLoaded,
    setActiveCategory,
  } = React.useContext(AppContext);

  const currentNft = nftCards.filter(
    (nftCard) => nftCard.id === toInteger(id)
  )[0];
  const currentArtist = artists.find(
    (artist) => artist.id === currentNft.artistId
  );

  const filterNftCards = () => {
    return nftCards.filter(
      (nftCard) =>
        nftCard.artistId === currentNft.artistId && nftCard.id !== currentNft.id
    );
  };

  const filtredCards = filterNftCards();

  const artistClick = (id) => {
    navigate(`/artist/${id}`);
    window.scroll(0, 0);
  };

  const categoryClick = (id) => {
    setActiveCategory(id);
    navigate(`/marketplace/`);
    window.scroll(0, 0);
  };

  return (
    <Wrap>
      {nftsIsLoaded && artistsIsLoaded && categoriesIsLoaded ? (
        <Container>
          <MainImage src={currentNft.imageUrl}></MainImage>
          <InfoWrap>
            <TextBlock>
              <H1>{currentNft.title}</H1>
              <Signature>Minted on {currentNft.mintDate}</Signature>
            </TextBlock>
            <TextBlock>
              <Signature>Created By </Signature>
              <Artist onClick={() => artistClick(currentArtist.id)}>
                <ArtistIcon src={currentArtist.imageUrl} />
                <ArtistName>{currentArtist.name}</ArtistName>
              </Artist>
            </TextBlock>
            <TextBlock>
              <Signature>Description</Signature>
              <Text>{currentNft.description}</Text>
            </TextBlock>
            <TextBlock>
              <Signature>Details</Signature>
              <LinkBlock>
                <GlobeLink href="https://etherscan.io/">
                  <LinkIcon src={Globe} />
                  <Text>View on Etherscan</Text>
                </GlobeLink>
              </LinkBlock>
              <LinkBlock>
                <GlobeLink href="https://coinmarketcap.com/currencies/original-crypto-coin/">
                  <LinkIcon src={Globe} />
                  <Text>View Original</Text>
                </GlobeLink>
              </LinkBlock>
            </TextBlock>
            <TextBlock>
              <Signature>Categories</Signature>
              <CategoriesRow>
                {categories
                  .filter((category) => category.id === currentNft.category)
                  .map((category) => (
                    <Category onClick={() => categoryClick(category.id)}>
                      {category.title}
                    </Category>
                  ))}
              </CategoriesRow>
            </TextBlock>
          </InfoWrap>
          <ArtistCards>
            <H2>More from this artist</H2>
            {filtredCards.length ? (
              <GridOfCards cards={filtredCards}></GridOfCards>
            ) : (
              <Text>No another nfts yet</Text>
            )}
            <Btn onClick={() => artistClick(currentArtist.id)}>
              <ReactSVG src={ArrowRight} />
              <span>Go To Artist Page</span>
            </Btn>
          </ArtistCards>
        </Container>
      ) : (
        <Loader/>
      )}
    </Wrap>
  );
}

export default Nft;
