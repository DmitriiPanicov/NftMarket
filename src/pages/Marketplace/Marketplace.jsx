import React from "react";
import AppContext from "../../context";
import SearchBlock from "../../components/SearchBlock/SearchBlock";
import GridOfCards from "../../components/ui/gridOfCards/GridOfCards";
import { Wrap, Header, Categories, Category, Hr } from "./Marketplace.styled";
import { Container, H1, Text } from "../../globalStyles";
import Loader from "../../components/ui/loader/Loader";

function Marketplace() {
  const {
    nftCards,
    nftsIsLoaded,
    artistsIsLoaded,
    categories,
    categoriesIsLoaded,
    activeCategory,
    setActiveCategory,
  } = React.useContext(AppContext);

  const [value, setValue] = React.useState("");

  const filterNftCards = () => {
    return (
      activeCategory
        ? nftCards.filter((nftCards) => nftCards.category === activeCategory)
        : nftCards
    ).filter((nftCards) =>
      nftCards.title.toLowerCase().includes(value.toLowerCase())
    );
  };

  const filtredCards = filterNftCards();

  return (
    <Wrap>
      <Container>
        <Header>
          <H1>Browse Marketplace</H1>
          <Text>Browse through more than 50k NFTs on the NFT Marketplace.</Text>
          <SearchBlock value={value} setValue={setValue} />
        </Header>
      </Container>
      <Hr />
      {nftsIsLoaded && artistsIsLoaded && categoriesIsLoaded ? (
        <Container>
          <Categories>
            {categories.map((item) => (
              <Category
                onClick={() => setActiveCategory(item.id)}
                key={item.id}
                className={activeCategory === item.id ? "active" : ""}
              >
                {item.title}
              </Category>
            ))}
          </Categories>
          <GridOfCards cards={filtredCards}></GridOfCards>
        </Container>
      ) : (
        <Loader />
      )}
    </Wrap>
  );
}

export default Marketplace;
