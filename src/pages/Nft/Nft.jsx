import React from "react";
import { toInteger } from "lodash";
import { ReactSVG } from "react-svg";
import { useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";

import Loader from "../../components/ui/loader/Loader";
import { useGetNftsQuery } from "../../redux/slicesApi/fetchData";
import { setActiveCategory } from "../../redux/slices/filterSlice";
import { useGetArtistsQuery } from "../../redux/slicesApi/fetchData";
import GridOfCards from "../../components/ui/gridOfCards/GridOfCards";
import { useGetCategoriesQuery } from "../../redux/slicesApi/fetchData";

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

function Nft() {
  const { data: categoriesData, isSuccess: categoriesIsLoaded } =
    useGetCategoriesQuery();
  const { data: artistsData, isSuccess: artistsIsLoaded } =
    useGetArtistsQuery();
  const { data: nftsData, isSuccess: nftsIsLoaded } = useGetNftsQuery();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const currentNft = nftsIsLoaded
    ? nftsData.record.filter((nftCard) => nftCard.id === toInteger(id))[0]
    : "";
  const currentArtist = artistsIsLoaded
    ? artistsData.record.find((artist) => artist.id === currentNft.artistId)
    : "";

  const filterNftCards = () => {
    return nftsData.record.filter(
      (nftCard) =>
        nftCard.artistId === currentNft.artistId && nftCard.id !== currentNft.id
    );
  };

  const filtredCards = nftsIsLoaded ? filterNftCards() : "";

  const artistClick = (id) => {
    navigate(`/artist/${id}`);
    window.scroll(0, 0);
  };

  const categoryClick = (id) => {
    dispatch(setActiveCategory(id));
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
                {categoriesData.record
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
        <Loader />
      )}
    </Wrap>
  );
}

export default Nft;
