import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { useDispatch } from "react-redux";

import {
  useGetArtistsQuery,
  useGetNftsQuery,
} from "../../redux/slicesApi/fetchData";
import GridOfCards from "../ui/gridOfCards/GridOfCards";
import { setActiveCategory } from "../../redux/slices/filterSlice";

import Eye from "../../assets/img/btnIcons/Eye.svg";
import { Container, H2, Text } from "../../globalStyles";
import { Wrap, Header, TextBlock, Row, Btn, MobileBtn } from "./Nfts.styled";

function Nfts() {
  const FIRST_CARD_INDEX = 7;

  const [numberOfCards, setNumberOfCards] = React.useState(4);
  const [innerWidth, setInnerWidth] = React.useState(window.innerWidth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { isSuccess: artistsIsLoaded } = useGetArtistsQuery();
  const { data: nftsData, isSuccess: nftsIsLoaded } = useGetNftsQuery();

  const handleClick = () => {
    navigate(`/marketplace`);
    dispatch(setActiveCategory(0));
    window.scroll(0, 0);
  };

  React.useEffect(() => {
    window.addEventListener("resize", () => setInnerWidth(window.innerWidth));
  });

  React.useEffect(() => {
    if (innerWidth > 1279 || (innerWidth > 560 && innerWidth <= 834)) {
      setNumberOfCards(4);
    } else if (innerWidth > 834 && innerWidth <= 1279) {
      setNumberOfCards(3);
    } else {
      setNumberOfCards(2);
    }
  }, [innerWidth]);

  const filtredCards = nftsIsLoaded
    ? nftsData.record.slice(FIRST_CARD_INDEX, FIRST_CARD_INDEX + numberOfCards)
    : "";

  return (
    <Container>
      <Wrap>
        <Header>
          <TextBlock>
            <H2>Discover More NFTs</H2>
            <Text>Explore New Trending NFTs</Text>
          </TextBlock>
          <Btn onClick={() => handleClick()}>
            <ReactSVG src={Eye} />
            <span>See All</span>
          </Btn>
        </Header>
        <Row>
          {nftsIsLoaded && artistsIsLoaded ? (
            <GridOfCards cards={filtredCards} />
          ) : (
            ""
          )}
        </Row>
        <MobileBtn onClick={() => handleClick()}>
          <ReactSVG src={Eye} />
          <span>See All</span>
        </MobileBtn>
      </Wrap>
    </Container>
  );
}

export default Nfts;
