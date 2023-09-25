import React from "react";
import AppContext from "../../context";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from "react-svg";
import GridOfCards from "../ui/gridOfCards/GridOfCards";

import { Wrap, Header, TextBlock, Row, Btn, MobileBtn } from "./Nfts.styled";
import { Container, H2, Text } from "../../globalStyles";
import Eye from "../../assets/img/btnIcons/Eye.svg";

function Nfts() {
  const FIRST_CARD_INDEX = 7;

  const { nftCards, nftsIsLoaded, artistsIsLoaded, setActiveCategory } =
    React.useContext(AppContext);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/marketplace`);
    setActiveCategory(0);
    window.scroll(0, 0);
  };

  const [numberOfCards, setNumberOfCards] = React.useState(4);
  const [innerWidth, setInnerWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const hh = () => setInnerWidth(window.innerWidth);
    window.addEventListener("resize", hh);
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

  const filtredCards = nftCards.slice(
    FIRST_CARD_INDEX,
    FIRST_CARD_INDEX + numberOfCards
  );

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
